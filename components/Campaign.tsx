import React from "react"
import {
  Heading,
  AspectRatio,
  Image,
  Text,
  Stack,
  Progress,
  Button,
  Link,
} from "native-base"
import Block from "./Block";
import type { Campaign as ICampaign } from 'types/models';

const Campaign: React.FC<{ item: ICampaign }> = ({ item }) => {
  return (
    <Block w={370} m="15px">
      <AspectRatio w="100%" ratio={16 / 9}>
        <Image
          source={{
            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
          }}
          alt="image"
        />
      </AspectRatio>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Text
            textTransform="uppercase"
            color="#6573FC"
            fontWeight="bold"
            fontSize="md"
            my={1}
          >
            Port Elgin, ON
          </Text>
          <Heading textAlign="left" size="sm">
            {item.title}
          </Heading>
        </Stack>
        <Text fontWeight="400">
          {item.description}
        </Text>
        <Text
              fontSize="xs"
              fontWeight="400"
        >
          Last Donation 1w ago
        </Text>
        <Progress value={40} />
        <Text>
          <Text fontWeight="bold">$4,990 raised</Text> of ${item.amount}
        </Text>
        <Link href={`/campaigns/${item.id}`}>
          <Button flex={1} variant="glow" mt={1}>Stake</Button>
        </Link>
      </Stack>
    </Block>
  )
}

export default Campaign;
