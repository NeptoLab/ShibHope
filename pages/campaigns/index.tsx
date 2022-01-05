import { NextPage } from "next";

import { HStack, Select, FormControl } from 'native-base';
import React, { useState } from "react";
import Layout from "components/Layout";
import Campaign from "components/Campaign";
import Block from "components/Block";
import { gql, useQuery } from "@apollo/client";
import { Query_Root } from "types/models";
import Loading from "components/Loading";

const GetCampaignsQuery = gql`
  query GetCampaigns($order: [campaign_order_by!], $where: campaign_bool_exp!) {
    campaign(order_by: $order, where: $where) {
      title
      amount
      category
      description
      id
      media
      owner
      stakes_aggregate {
        aggregate {
          sum {
            amount
          }
          max {
            created_at
          }
        }
      }
    }
  }
`;

const getWhereByValue = (value: string) => {
  if (value === 'opened') return { "status": { "_eq": true  } };
  if (value === 'closed') return { "status": { "_eq": false } };
  return {};
};

const getOrderByValue = (value: string) => {
  if (value === 'created') return { created_at: 'desc' };
  if (value === 'total') return { stakes_aggregate: { max: { amount: 'desc' }}, created_at: 'desc' };
  return {};
};

const CampaignIndexPage: NextPage = () => {
  const [ sortBy, setSortBy ] = useState('created');
  const [ status, setStatus ] = useState('');
  console.log(getWhereByValue(status));

  const { data, loading, error } = useQuery<Query_Root>(GetCampaignsQuery, { variables: { order: getOrderByValue(sortBy), where: getWhereByValue(status) } } );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    throw error;
  }

  return (
    <Layout>
      <Block px={4} py={2} alignItems="center" flexDirection="row" flexWrap="wrap">
        <FormControl alignItems="center" w="auto" minW={250} mr={4} flexDirection="row">
          <FormControl.Label _text={{ fontWeight: 'bold' }} m={0} mr={2}>Sort By:</FormControl.Label>
          <Select onValueChange={setSortBy} selectedValue={sortBy}>
            <Select.Item label="Creation Date" value="created" />
            <Select.Item label="Funding Raised" value="total" />
          </Select>
        </FormControl>
        <FormControl alignItems="center" w="auto" minW={250} flexDirection="row">
          <FormControl.Label _text={{ fontWeight: 'bold' }} fontWeight={900} m={0} mr={2}>Status:</FormControl.Label>
          <Select onValueChange={setStatus} selectedValue={status}>
            <Select.Item label="Everything" value="" />
            <Select.Item label="Opened" value="opened" />
            <Select.Item label="Closed" value="closed" />
          </Select>
        </FormControl>
      </Block>
      <HStack m="-15px" justifyContent="center" mt={7} flexWrap="wrap">
        {data?.campaign.map((campaign) => <Campaign key={campaign.id} item={campaign} />
        )}
      </HStack>
    </Layout>
  );
};

export default CampaignIndexPage;
