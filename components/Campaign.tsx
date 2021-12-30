import React from "react";
import {
  Heading,
  AspectRatio,
  Image,
  Text,
  Stack,
  Progress,
  Button,
  Link
} from "native-base";
import Block from "./Block";
import type { Campaign as ICampaign } from 'types/models';
import { useIntl } from "react-intl";

const Campaign: React.FC<{ item: ICampaign }> = ({ item }) => {
  const intl = useIntl();

  return (
    <Block w={370} m="15px">
      <AspectRatio w="100%" ratio={16 / 9}>
        {item.media[0] && (
          <Image
            source={{
              uri: item.media[0].uri,
            }}
            alt="image"
          />
        )}
      </AspectRatio>
      <Stack p="4" space={3} flex={1}>
        <Stack space={2}>
          <Text
              textTransform="uppercase"
              color="#6573FC"
              fontWeight="bold"
              fontSize="md"
              my={1}
            >
              {item.location}
          </Text>
          <Heading textAlign="left" size="sm">
            {item.title}
          </Heading>
        </Stack>
        <Text flex={1} fontWeight="400">
          {item.description}
        </Text>
        {item.stakes_aggregate?.aggregate?.max?.created_at && (
          <Text
                fontSize="xs"
                fontWeight="400"
          >
            Last Donation {intl.formatRelativeTime(item.stakes_aggregate.aggregate.max.created_at)}
          </Text>
        )}
        <Progress value={item.stakes_aggregate.aggregate?.sum?.amount/item.amount * 100} />
        <Text>
          <Text fontWeight="bold">{intl.formatNumber(item.stakes_aggregate.aggregate?.sum?.amount, { style: 'currency', currency: 'USD', minimumFractionDigits: 0 })} raised</Text> of ${item.amount}
        </Text>
        <Link href={`/campaigns/${item.id}`}>
          <Button flex={1} variant="glow" mt={1}>Stake</Button>
        </Link>
      </Stack>
    </Block>
  )
}

export default Campaign;
