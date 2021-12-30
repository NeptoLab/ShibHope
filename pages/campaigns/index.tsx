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
  query GetCampaigns {
    campaign {
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

const CampaignIndexPage: NextPage = () => {
  const [ sortBy, setSortBy ] = useState('createdAt');
  const [ status, setStatus ] = useState('');
  const { data, loading, error } = useQuery<Query_Root>(GetCampaignsQuery);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    throw error;
  }

  return (
    <Layout>
      <Block px={4} py={2} alignItems="center" flexDirection="row">
        <FormControl alignItems="center" w={250} flexDirection="row">
          <FormControl.Label _text={{ fontWeight: 'bold' }} m={0} mr={2}>Sort By:</FormControl.Label>
          <Select onValueChange={setSortBy} selectedValue={sortBy}>
            <Select.Item label="Creation Date" value="createdAt" />
            <Select.Item label="Funding Raised" value="funding" />
          </Select>
        </FormControl>
        <FormControl alignItems="center" w={250} flexDirection="row">
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
