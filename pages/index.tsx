import { NextPage } from "next";

import { Button, Link, Heading, HStack } from 'native-base';
import React from "react";
import Cover from "components/Cover";
import Layout from "components/Layout";
import Title from "components/Title";
import Campaign from "components/Campaign";
import Create from "components/Create";

const IndexPage: NextPage = () => (
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
    <HStack mt={7} space="30px" flexWrap="wrap">
      <Campaign />
      <Campaign />
      <Campaign />
    </HStack>
    <Button w="270px" mx="auto" variant="outline" mt={4} mb={12}>Show More</Button>
    <Title>
      Start Your Campaign
    </Title>
    <HStack mt={7} space="30px" flexWrap="wrap">
      <Create title="For Charity" />
      <Create title="For People" />
      <Create title="For Project" />
    </HStack>
  </Layout>
);

export default IndexPage;
