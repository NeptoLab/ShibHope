import { NextPage } from "next";

import React, { useState } from "react";
import Layout from "components/Layout";
import Block from "components/Block";
import { Button, Checkbox, FormControl, Input, Radio, TextArea, Text, View } from "native-base";
import { Controller, useForm } from "react-hook-form";
import { Campaign_Insert_Input, Mutation_Root } from "types/models";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import Upload from "components/Upload";

const CreateCampaignMutation = gql`
  mutation CreateCampaign($campaign: campaign_insert_input!) {
    insert_campaign_one(object: $campaign) {
      id
    }
  }
`;

const CampaignCreatePage: NextPage = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();
  const [ confirm, setConfirm ] = useState(false);
  const { push } = useRouter();
  const [ createCampaign ] = useMutation<Mutation_Root>(CreateCampaignMutation);
  
  const handleCreate = async (campaign: Campaign_Insert_Input & { confirm: boolean }) => {
    const result = await createCampaign({ variables: { campaign } });
    if (result.data?.insert_campaign_one?.id) {
      push(`/campaigns/${result.data?.insert_campaign_one?.id}`);
    }
  };
  
  return (
    <Layout>
      <Block flex={1} p={4}>
        <FormControl mt={4}>
          <FormControl.Label>Description</FormControl.Label>
          <Controller
            control={control}
            name="title"
            rules={{
              required: true,
            }}
            render={({ field: { value, ...fieldProps } }) => (
              <Input placeholder="You Campaign Title" value={value} {...fieldProps} />
            )}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormControl.Label>Media</FormControl.Label>
          <Controller
            defaultValue={[]}
            control={control}
            name="media"
            render={({ field: fieldProps }) => (
              <Upload />
            )}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormControl.Label>Amount (USD)</FormControl.Label>
          <Controller
            defaultValue={0}
            control={control}
            name="amount"
            rules={{
              required: true,
            }}
            render={({ field: { value, ...fieldProps } }) => (
              <Input placeholder="XXX.XXX.XX USD" value={value} {...fieldProps} />
            )}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormControl.Label>Description</FormControl.Label>
          <Controller
            control={control}
            name="description"
            render={({ field: { value, ...fieldProps } }) => (
              <TextArea placeholder="Campaign Description" value={value} {...fieldProps} />
            )}
          />
        </FormControl>

        <FormControl mt={4} alignItems="center">
          <Controller
            control={control}
            name="category"
            rules={{
              required: true,
            }}
            render={({ field: { value, ref, ...fieldProps } }) => (
              <Radio.Group
                value={value}
                flexDirection="row"
                {...fieldProps}
              >
                <Radio mr={4} value="charity" my={1}>
                  Charity
                </Radio>
                <Radio mr={4} value="donation" my={1}>
                  Donation
                </Radio>
                <Radio value="crowdfunding" my={1}>
                  Crowdfunding
                </Radio>
              </Radio.Group>
            )}
          />
        </FormControl>

        <View mt={4} alignItems="center" flexDirection="row">
          <Checkbox isChecked={confirm} onChange={setConfirm} value="confirm">I certify I provided complete and truthful information</Checkbox>
          <Button ml="auto" w={200} variant="outline">Cancel</Button>
          <Button
            disabled={!confirm}
            ml={4}
            w={200}
            variant="glow"
            onPress={handleSubmit(handleCreate)}
          >
            Create Item
          </Button>
        </View>
      </Block>
    </Layout>
  );
};

export default CampaignCreatePage;
