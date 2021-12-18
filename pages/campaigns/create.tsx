import { NextPage } from "next";

import React from "react";
import Layout from "components/Layout";
import Block from "components/Block";
import { Button, Checkbox, FormControl, Input, Radio, TextArea } from "native-base";

const CampaignCreatePage: NextPage = () => (
  <Layout>
    <Block flex={1} p={4}>
      <FormControl>
        <FormControl.Label>Title</FormControl.Label>
        <Input />
      </FormControl>
      <FormControl mt={4}>
        <FormControl.Label>Media</FormControl.Label>
        <Input />
      </FormControl>
      <FormControl mt={4}>
        <FormControl.Label>Amount</FormControl.Label>
        <Input />
      </FormControl>
      <FormControl mt={4}>
        <FormControl.Label>Description</FormControl.Label>
        <TextArea />
      </FormControl>
      <FormControl mt={4} alignItems="center">
        <Radio.Group
          flexDirection="row"
          name="myRadioGroup"
        >
          <Radio mr={4} value="charity" my={1}>
            Charity
          </Radio>
          <Radio mr={4} value="donation" my={1}>
            Donation
          </Radio>
          <Radio value="crowdfinding" my={1}>
            Crowdfunding
          </Radio>
        </Radio.Group>
      </FormControl>
      <FormControl mt={4} alignItems="center" flexDirection="row">
        <Checkbox value="confirm">I certify I provided complete and truthful information</Checkbox>
        <Button ml={4} w={200} variant="outline">Cancel</Button>
        <Button ml={4} w={200} variant="glow">Create Item</Button>
      </FormControl>
    </Block>
  </Layout>
);

export default CampaignCreatePage;
