import { NextPage } from "next";
import StyleSheet from 'react-native-media-query';

import React, { useState } from "react";
import Layout from "components/Layout";
import Block from "components/Block";
import { Button, Checkbox, FormControl, Input, TextArea, View, HStack, useTheme, Box } from "native-base";
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

type CampaignFormType = Omit<Campaign_Insert_Input, 'stakes'> & { confirm: boolean };

const CampaignCreatePage: NextPage = () => {
  const theme: any = useTheme();
  const { ids, styles } = StyleSheet.create({
    stack: {
      [theme.media.desktop]: {
        flexDirection: 'row',
        minWidth: '500px'
      },
      [theme.media.mobile]: {
        minWidth: '500px'
      },
      [theme.media.phone]: {
        flexDirection: 'column',
        minWidth: '100%'
      },
    },
    wrapper: {
      [theme.media.mobile]: {
        flexDirection: 'column'
      },
    },
    button: {
      [theme.media.phone]: {
        width: '100%',
        marginBottom: '8px',
      },
    },
    container: {
      [theme.media.phone]: {
        width: '100%',
        flexDirection: 'column',
        marginLeft: 0
      },
    }
  });
  
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
      <FormControl mt={4}>
        <FormControl.Label _text={{ fontWeight: 'bold' }}>Email</FormControl.Label>
          <Controller
            control={control}
            name="email"
            rules={{
              required: true,
            }}
            render={({ field: { value, ...fieldProps } }) => (
              <Input placeholder="email@example.com" value={value || ''} {...fieldProps} />
            )}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormControl.Label _text={{ fontWeight: 'bold' }}>Description</FormControl.Label>
          <Controller
            control={control}
            name="title"
            rules={{
              required: true,
            }}
            render={({ field: { value, ...fieldProps } }) => (
              <Input placeholder="You Campaign Title" value={value || ''} {...fieldProps} />
            )}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormControl.Label _text={{ fontWeight: 'bold' }}>Location</FormControl.Label>
          <Controller
            control={control}
            name="location"
            rules={{
              required: true,
            }}
            render={({ field: { value, ...fieldProps } }) => (
              <Input placeholder="Location, where are you or your fund, is located" value={value || ''} {...fieldProps} />
            )}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormControl.Label _text={{ fontWeight: 'bold' }}>Media</FormControl.Label>
          <Controller
            defaultValue={[]}
            control={control}
            name="media"
            render={({ field: fieldProps }) => (
              <Upload {...fieldProps} />
            )}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormControl.Label _text={{ fontWeight: 'bold' }}>Amount (USD)</FormControl.Label>
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
          <FormControl.Label _text={{ fontWeight: 'bold' }}>Description</FormControl.Label>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Description is requred field'
              },
            }}
            name="description"
            render={({ field: { value, ...fieldProps } }) => (
              <TextArea placeholder="Campaign Description" value={value || ''} {...fieldProps} />
            )}
          />
        </FormControl>

        <FormControl mt={4} alignItems="center">
          <Controller
            defaultValue={slug as string}
            control={control}
            name="category"
            rules={{
              required: true,
            }}
            render={({ field: { ref, ...fieldProps } }) => (
              <Tab dataSet={{ media: ids.stack }} style={styles.stack} {...fieldProps}>
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
        </FormControl>

        <View w="100%" mt={8} alignItems="center" flexDirection="row" flexWrap="wrap" style={styles.wrapper} dataSet={{ media: ids.wrapper }}>
          <Box flex={1}>
            <Checkbox alignItems="flex-start" w="100%" mb={4} isChecked={confirm} onChange={setConfirm} value="confirm">
              I certify I provided complete and truthful information
            </Checkbox>
          </Box>
          <HStack ml="auto" space={4} style={styles.container} dataSet={{ media: ids.container }}>
            <Button
              flex={1}
              minW={200}
              variant="outline"
              style={styles.button}
              dataSet={{ media: ids.button }}
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
              style={styles.button}
              dataSet={{ media: ids.button }}
            >
              Create Item
            </Button>
          </HStack>
        </View>
      </Block>
    </Layout>
  );
};

CampaignCreatePage.getInitialProps = async () => ({});

export default CampaignCreatePage;
