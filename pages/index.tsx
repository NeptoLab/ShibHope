import { NextPage } from "next";

import { Button, Heading, HStack } from 'native-base';
import React from "react";
import Cover from "components/Cover";
import Layout from "components/Layout";
import Title from "components/Title";
import Campaign from "components/Campaign";
import Create from "components/Create";
import { gql, useQuery } from "@apollo/client";
import { Query_Root } from "types/models";
import Link from "components/Link";
import Loading from "components/Loading";

const GetIndexQuery = gql`
  query GetIndex {
    campaign(limit: 3) {
      id
      amount
      title
      description
      location
      media
      category
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

  if (loading) {
    return <Loading />;
  }

  if (error) {
    throw error;
  }

  return (
    <Layout>
      <Cover width="100%" rounded="lg" mb={6}>
        <Heading color="white" size="xl">Fund Incredible Future!</Heading>
        <Heading color="white" size="md">Stake Your #GrumpyShib</Heading>
        <Link href="https://grumpyshib.com" as="_blank" passHref>
          <Button accessibilityRole="link" variant="glow" mt={4} bgSize="lg">Learn More About GrumpyShiba Token</Button>
        </Link>
      </Cover>
      {data?.campaign && data.campaign.length > 0 && (
        <>
          <Title>
            Top Fundraisers
          </Title>
          <HStack justifyContent={["center", "center", "center", "flex-start"]} m={-15} mb={0} flexWrap="wrap">
            {data?.campaign.map((campaign) => <Campaign key={campaign.id} item={campaign} />)}
          </HStack>
          <Link href="/campaigns" passHref>
            <Button w="270px" mx="auto" variant="outline" mt={4} mb={12}>View All</Button>
          </Link>
        </>
      )}
      <Title>
        Start Your Campaign
      </Title>
      <HStack justifyContent={["center", "center", "center", "flex-start"]} m={-15} flexWrap="wrap">
        <Create category="charity" title="For Charity" />
        <Create category="donation" title="For People" />
        <Create category="crowdfunding" title="For Project" />
      </HStack>
    </Layout>
  );
};

export default IndexPage;
