import { NextPage } from "next";

import React, { useState } from "react";
import Layout from "components/Layout";
import Block from "components/Block";
import { Button, Checkbox, FormControl, Input, TextArea, View, HStack } from "native-base";
import { Controller, useForm } from "react-hook-form";
import { Campaign_Insert_Input, Mutation_Root } from "types/models";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import Upload from "components/Upload";
import Tab from "components/Tab";

const CreateCampaignMutation = gql`
  mutation CreateCampaign($campaign: campaign_insert_input!) {
    insert_campaign_one(object: $campaign) {
      id
    }
  }
`;

type CampaignFormType = Omit<Campaign_Insert_Input, 'stakes'>;

const CampaignCreatePage: NextPage = () => {
  const { push, query: { slug } } = useRouter();

  const { handleSubmit, control, formState: { errors } } = useForm<CampaignFormType>();
  const [ confirm, setConfirm ] = useState(false);

  const [ createCampaign, { loading } ] = useMutation<Mutation_Root>(CreateCampaignMutation, { refetchQueries: ['getCampaigns', 'GetIndex'] });
  
  const handleCreate = async (campaign: CampaignFormType) => {
    const result = await createCampaign({
      variables: { campaign }
    });
    if (result.data?.insert_campaign_one?.id) {
      push(`/campaigns/${result.data?.insert_campaign_one?.id}`);
    }
  };
  
  return (
    <Layout>
      <Block flex={1} p={4}>
      <FormControl isInvalid={!!errors.email} mt={4}>
        <FormControl.Label _text={{ fontWeight: 'bold' }}>Email</FormControl.Label>
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Required Field",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
              }
            }}
            render={({ field: { value, ...fieldProps } }) => (
              <Input placeholder="email@example.com" value={value || ''} {...fieldProps} />
            )}
          />
          {errors.email && <FormControl.ErrorMessage>{errors.email.message}</FormControl.ErrorMessage>}
        </FormControl>
        <FormControl isInvalid={!!errors.description} mt={4}>
          <FormControl.Label _text={{ fontWeight: 'bold' }}>Description</FormControl.Label>
          <Controller
            control={control}
            name="title"
            rules={{
              required: "Required Field",
            }}
            render={({ field: { value, ...fieldProps } }) => (
              <Input placeholder="You Campaign Title" value={value || ''} {...fieldProps} />
            )}
          />
          {errors.description && <FormControl.ErrorMessage>{errors.description.message}</FormControl.ErrorMessage>}
        </FormControl>
        <FormControl isInvalid={!!errors.location} mt={4}>
          <FormControl.Label _text={{ fontWeight: 'bold' }}>Location</FormControl.Label>
          <Controller
            control={control}
            name="location"
            rules={{
              required: "Required Field",
            }}
            render={({ field: { value, ...fieldProps } }) => (
              <Input placeholder="Location, where are you or your fund, is located" value={value || ''} {...fieldProps} />
            )}
          />
          {errors.location && <FormControl.ErrorMessage>{errors.location.message}</FormControl.ErrorMessage>}
        </FormControl>
        <FormControl isInvalid={!!errors.media} mt={4}>
          <FormControl.Label _text={{ fontWeight: 'bold' }}>Media</FormControl.Label>
          <Controller
            defaultValue={[]}
            control={control}
            name="media"
            render={({ field: fieldProps }) => (
              <Upload {...fieldProps} />
            )}
          />
          {errors.media && <FormControl.ErrorMessage>{errors.media.message}</FormControl.ErrorMessage>}
        </FormControl>
        <FormControl isInvalid={!!errors.amount} mt={4}>
          <FormControl.Label _text={{ fontWeight: 'bold' }}>Amount (USD)</FormControl.Label>
          <Controller
            defaultValue={0}
            control={control}
            name="amount"
            rules={{
              required: "Required Field",
            }}
            render={({ field: { value, ...fieldProps } }) => (
              <Input keyboardType="numeric" placeholder="XXX.XXX.XX USD" value={value} {...fieldProps} />
            )}
          />
          {errors.amount && <FormControl.ErrorMessage>{errors.amount.message}</FormControl.ErrorMessage>}
        </FormControl>
        <FormControl isInvalid={!!errors.description} mt={4}>
          <FormControl.Label _text={{ fontWeight: 'bold' }}>Description</FormControl.Label>
          <Controller
            control={control}
            rules={{
              required: "Required Field"
            }}
            name="description"
            render={({ field: { value, ...fieldProps } }) => (
              <TextArea placeholder="Campaign Description" value={value || ''} {...fieldProps} />
            )}
          />
          {errors.description && <FormControl.ErrorMessage>{errors.description.message}</FormControl.ErrorMessage>}
        </FormControl>

        <FormControl isInvalid={!!errors.category} mt={4} alignItems="center">
          <Controller
            defaultValue={slug as string}
            control={control}
            name="category"
            rules={{
              required: "Required Field"
            }}
            render={({ field: { ref, ...fieldProps } }) => (
              <Tab {...fieldProps}>
                <Tab.Item value="charity">
                  Charity
                </Tab.Item>
                <Tab.Item value="donation">
                  Donation
                </Tab.Item>
                <Tab.Item value="crowdfunding">
                  Crowdfunding
                </Tab.Item>
              </Tab>
            )}
          />
          {errors.category && <FormControl.ErrorMessage>{errors.category.message}</FormControl.ErrorMessage>}
        </FormControl>

        <View w="100%" mt={8} alignItems="center" justifyContent="center" flexDirection="row" flexWrap="wrap">
          <Checkbox w="100%" mr={4} mb={4} isInvalid={!confirm} isChecked={confirm} onChange={setConfirm} value="confirm">
            I certify, I provided complete and truthful information
          </Checkbox>
          <HStack ml="auto" space={4}>
            <Button
              flex={1}
              minW={200}
              variant="outline"
            >
              Cancel
            </Button>
            <Button
              flex={1}
              minW={200}
              isLoading={loading}
              isLoadingText="Creating..."
              disabled={!confirm}
              variant="glow"
              onPress={handleSubmit(handleCreate)}
            >
              Create Item
            </Button>
          </HStack>
        </View>
      </Block>
    </Layout>
  );
};

export default CampaignCreatePage;
