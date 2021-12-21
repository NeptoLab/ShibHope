import { NextPage } from "next";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import Error from 'next/error';
import React from "react";
import Layout from "components/Layout";
import { View, Text, Heading, HStack, VStack, Button, AspectRatio, Image } from "native-base";
import Comment from "components/Comment";
import Stake from "components/Stake";
import StakeModal from "components/StakeModal";
import useModal from "hooks/useModal";
import { Query_Root } from "types/models";

const GetCampaignQuery = gql`
  query GetCampaign($id: bigint!) {
    campaign_by_pk(id: $id) {
      title
      amount
      category
      description
      id
      media
      owner
    }
  }
`;

const CampaignViewPage: NextPage = () => {
  const { query: { slug } } = useRouter();
  
  const { isOpen, handleClose, handleOpen } = useModal();
  const { data } = useQuery<Query_Root>(GetCampaignQuery, { variables: { id: slug } });

  if (!data?.campaign_by_pk) {
    return <Error statusCode={404} />
  }

  return (
    <Layout>
      {isOpen && <StakeModal isOpen={isOpen} onClose={handleClose} />}
      <View alignItems="center" flexDirection="row">
        <Text color="primary.700" fontWeight="bold">Moscow, Russia</Text>
        <Text ml="auto"><Text fontWeight="bold">Posted At:</Text> 19/05/1990</Text>
      </View>
      <Heading mt={4} textAlign="left">{data.campaign_by_pk.title}</Heading>
      <HStack space="30px">
        <View flex={1}>
          <Text mt={4}>
            {data.campaign_by_pk.description}
          </Text>
          <Heading mt={8} mb={4} textAlign="left" fontSize="20px">Media</Heading>
          <VStack space="15px">
            {[1, 2, 3, 4, 5].map((comment) => (
              <Comment key={comment} />
            ))}
          </VStack>
        </View>
        <View flex={1}>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: data.campaign_by_pk.media[0] //"https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
              }}
              alt="image" />
          </AspectRatio>
          <Button mt={4} variant="glow" onPress={handleOpen}>Stake</Button>
          <Heading mt={8} mb={2} textAlign="left" fontSize="20px">Top 5 donations</Heading>
          <VStack space="2px">
            {[1, 2, 3, 4, 5].map((stake) => (
              <Stake key={stake} />
            ))}
          </VStack>
        </View>
      </HStack>
    </Layout>
  );
};

export default CampaignViewPage;
