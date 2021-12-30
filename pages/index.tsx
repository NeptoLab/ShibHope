import { NextPage } from "next";

import { Button, Link, Heading, HStack, View } from 'native-base';
import React from "react";
import Cover from "components/Cover";
import Layout from "components/Layout";
import Title from "components/Title";
import Campaign from "components/Campaign";
import Create from "components/Create";
import { gql, useQuery } from "@apollo/client";
import { Query_Root } from "types/models";

const GetIndexQuery = gql`
  query GetIndex {
    campaign(limit: 3) {
      id
      amount
      title
      description
      location
      media
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

const IndexPage: NextPage = () => {
  const { data, loading, error } = useQuery<Query_Root>(GetIndexQuery);

  if (error) {
    throw error;
  }

  return (
    <Layout>
      <Cover width="100%" rounded="lg" mb={6}>
        <Heading color="white" size="xl">Fund Incredible Future!</Heading>
        <Heading color="white" size="md">Stake Your #GrumpyShib</Heading>
        <Link href="https://grumpyshib.com" isExternal>
          <Button variant="glow" mt={4} bgSize="lg">Learn More About GrumpyShiba Token</Button>
        </Link>
      </Cover>
      <Title>
        Top Fundraisers
      </Title>
      <View m="-15px" mt={7} flexWrap="wrap" flexDirection="row">
        {data?.campaign.map((campaign) => <Campaign key={campaign.id} item={campaign} />)}
      </View>
      <Link href="/campaigns">
        <Button w="270px" mx="auto" variant="outline" mt={4} mb={12}>View All</Button>
      </Link>
      <Title>
        Start Your Campaign
      </Title>
      <HStack mt={7} space="30px" flexWrap="wrap">
        <Create category="charity" title="For Charity" />
        <Create category="donation" title="For People" />
        <Create category="crowdfunding" title="For Project" />
      </HStack>
    </Layout>
  );
};

export default IndexPage;
