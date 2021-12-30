import { NextPage } from "next";
import StyleSheet from 'react-native-media-query';
import { gql, useQuery } from "@apollo/client";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import Error from 'next/error';
import React from "react";
import Layout from "components/Layout";
import { View, Text, Heading, HStack, VStack, Button, useTheme } from "native-base";
import Comment from "components/Comment";
import Stake from "components/Stake";
import StakeModal from "components/StakeModal";
import useModal from "hooks/useModal";
import { Query_Root } from "types/models";
import Gallery from "components/Gallery";
import Loading from "components/Loading";

const GetCampaignQuery = gql`
  query GetCampaign($id: bigint!) {
    campaign_by_pk(id: $id) {
      title
      amount
      category
      description
      id
      media
      stakes {
        id
        amount
        value
        owner
      }
      owner
    }
    comment(where: {stake: {campaign_id: {_eq: $id}}}) {
      id
      text
      stake {
        value
        owner
      }
    }
  }
`;

const CampaignViewPage: NextPage = () => {
  const theme: any = useTheme();
  const { ids, styles } = StyleSheet.create({
    column: {
      // [theme.media.desktop]: {
      //   marginLeft: '30px',
      // },
      // [theme.media.mobile]: {
      //   width: 'auto'
      // }
    }
  });

  const { query: { slug } } = useRouter();
  const intl = useIntl();
  
  const { isOpen, handleClose, handleOpen } = useModal();
  const { data, loading } = useQuery<Query_Root>(GetCampaignQuery, { variables: { id: slug } });

  if (loading) {
    return (
      <Loading />
    );
  }

  if (!data?.campaign_by_pk) {
    return <Error statusCode={404} />
  }

  return (
    <Layout>
      {isOpen && <StakeModal campaign={data.campaign_by_pk} isOpen={isOpen} onClose={handleClose} />}
      <View alignItems="center" flexDirection="row">
        <Text color="primary.700" fontWeight="bold">{data.campaign_by_pk.location}</Text>
        <Text ml="auto"><Text fontWeight="bold">Posted At:</Text> {intl.formatDate(data.campaign_by_pk.created_at)}</Text>
      </View>
      <Heading mt={4} textAlign="left">{data.campaign_by_pk.title}</Heading>
      <HStack justifyContent="center" flexWrap="wrap">
        <View minW={500} flex={1}>
          <Text mt={4}>
            {data.campaign_by_pk.description}
          </Text>
          {data.comment.length > 0 && (
            <>
              <Heading mt={8} mb={4} textAlign="left" fontSize="20px">Comments</Heading>
              <VStack space="15px">
                {data.comment.map((comment) => (
                  <Comment key={comment.id} item={comment} />
                ))}
              </VStack>
            </>
          )}
        </View>
        <View width="560px" dataSet={{ media: ids.column }} style={styles.column}>
          <Gallery media={data.campaign_by_pk.media} />
          <Button mt={4} variant="glow" onPress={handleOpen}>Stake</Button>
          {data.campaign_by_pk.stakes.length > 0 && (
            <>
              <Heading mt={8} mb={2} textAlign="left" fontSize="20px">Top 5 donations</Heading>
              <VStack space="2px">
                {data.campaign_by_pk.stakes.map((stake, index) => (
                  <Stake key={stake.id} label={`0${index + 1}`} item={stake} />
                ))}
              </VStack>
            </>
          )}
        </View>
      </HStack>
    </Layout>
  );
};

CampaignViewPage.getInitialProps = async () => ({});

export default CampaignViewPage;
