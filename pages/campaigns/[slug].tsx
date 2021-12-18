import { NextPage } from "next";

import React from "react";
import Layout from "components/Layout";
import { View, Text, Heading, HStack, VStack, Button, AspectRatio, Image } from "native-base";
import Media from "components/Media";
import Stake from "components/Stake";

const CampaignViewPage: NextPage = () => (
  <Layout>
    <View alignItems="center" flexDirection="row">
      <Text color="primary.700" fontWeight="bold">Moscow, Russia</Text>
      <Text ml="auto"><Text fontWeight="bold">Posted At:</Text> 19/05/1990</Text>
    </View>
    <Heading mt={4} textAlign="left">What's happened with me title</Heading>
    <HStack space="30px">
      <View flex={1}>
        <Text mt={4}>
          There would be some very painful for reading text about something terrible what’s happened.

          This text will make people donate the person.

          Another long long long description we would like to put as mockup because I have no idea what else I can say to test this view layout for view page.
        </Text>
        <Heading mt={8} mb={4} textAlign="left" fontSize="20px">Media</Heading>
        <VStack space="15px">
          {[1, 2, 3, 4, 5].map((media) => (
            <Media key={media} />
          ))}
        </VStack>
      </View>
      <View flex={1}>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
            }}
            alt="image"
          />
        </AspectRatio>
        <Button mt={4} variant="glow">Stake</Button>
        <Heading mt={8} mb={2} textAlign="left" fontSize="20px">Top 5 donations</Heading>
        <VStack space="2px">
          {[1, 2, 3, 4, 5].map((media) => (
            <Stake key={media} />
          ))}
        </VStack>
      </View>
    </HStack>
    
  </Layout>
);

export default CampaignViewPage;
