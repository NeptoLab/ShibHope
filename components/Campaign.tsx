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

const Campaign: React.FC = () => {
  return (
    <Block maxW={370} m="15px">
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
            Mark McDermid
          </Heading>
        </Stack>
        <Text fontWeight="400">
          I have had a lot of media attention with my invention Showerloop but…
        </Text>
        <Text
              fontSize="xs"
              fontWeight="400"
        >
          Last Donation 1w ago
        </Text>
        <Progress value={40} />
        <Text>
          <Text fontWeight="bold">$4,990 raised</Text> of $20,000
        </Text>
        <Link href={`/campaigns/${1}`}>
          <Button flex={1} variant="glow" mt={1}>Stake</Button>
        </Link>
      </Stack>
    </Block>
  )
}

export default Campaign;
