import { NextPage } from "next";

import { HStack, Select, FormControl } from 'native-base';
import React from "react";
import Layout from "components/Layout";
import Campaign from "components/Campaign";
import Block from "components/Block";

const CampaignsIndexPage: NextPage = () => (
  <Layout>
    <Block px={4} py={2} alignItems="center" flexDirection="row">
      <FormControl alignItems="center" w={250} flexDirection="row">
        <FormControl.Label fontWeight="bold" m={0} mr={2}>Sort By:</FormControl.Label>
        <Select selectedValue="createdAt">
          <Select.Item label="Creation Date" value="createdAt" />
          <Select.Item label="Funding Raised" value="funding" />
        </Select>
      </FormControl>
      <FormControl alignItems="center" w={250} flexDirection="row">
        <FormControl.Label fontWeight="bold" m={0} mr={2}>Status:</FormControl.Label>
        <Select selectedValue="">
          <Select.Item label="Everything" value="" />
          <Select.Item label="Opened" value="opened" />
          <Select.Item label="Closed" value="closed" />
        </Select>
      </FormControl>
    </Block>
    <HStack m="-15px" justifyContent="center" mt={7} flexWrap="wrap">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((campaign) => 
        <Campaign key={campaign} />
      )}
    </HStack>
  </Layout>
);

export default CampaignsIndexPage;
