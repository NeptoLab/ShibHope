import React from 'react';
import {
  Heading,
  AspectRatio,
  Text,
  Stack,
  Progress,
  Button,
} from 'native-base';
import Image from 'components/Image';
import { imageMap } from 'components/Create';
import Block from 'components/Block';
import type { Campaign as ICampaign } from 'types/models';
import { useIntl } from 'react-intl';
import { useFormat } from 'utils/format';
import Link from './Link';

const Campaign: React.FC<{ item: ICampaign }> = ({ item }) => {
  const intl = useIntl();
  const { formatRelativeDateTime } = useFormat();

  return (
    <Block w={370} m={15}>
      <AspectRatio w="100%" ratio={16 / 9}>
        <Image
          source={item.media.length > 0 ? { uri: item.media[0].uri } : imageMap[item.category as keyof typeof imageMap]}
          alt="image"
        />
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
          <Link passHref href={`/campaigns/${item.id}`}>
            <Heading textAlign="left" size="sm">
              {item.title}
            </Heading>
          </Link>
        </Stack>
        <Text flex={1} fontWeight="400" numberOfLines={5}>
          {item.description}
        </Text>
        {item.stakes_aggregate?.aggregate?.max?.created_at && (
          <Text
                fontSize="xs"
                fontWeight="400"
          >
            Last Donation {formatRelativeDateTime(item.stakes_aggregate.aggregate.max.created_at)}
          </Text>
        )}
        <Progress value={item.stakes_aggregate.aggregate?.sum?.amount/item.amount * 100} />
        <Text>
          <Text fontWeight="bold">{intl.formatNumber(item.stakes_aggregate.aggregate?.sum?.amount, { style: 'currency', currency: 'USD', minimumFractionDigits: 0 })} raised</Text> of ${item.amount}
        </Text>
        <Link passHref href={`/campaigns/${item.id}`}>
          <Button size="md" variant="glow" mt={1}>Stake</Button>
        </Link>
      </Stack>
    </Block>
  );
};

export default Campaign;
