import React from "react"
import {
  Heading,
  AspectRatio,
  Image,
  Button,
  VStack,
} from "native-base"
import Block from "./Block";

const Create: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Block w={370} my={3}>
      <AspectRatio w="100%" ratio={16 / 9}>
        <Image
          source={{
            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
          }}
          alt="image"
        />
      </AspectRatio>
      <VStack p={4}>
        <Heading my={4} size="lg">
          {title}
        </Heading>
        <Button variant="glow">
          Start Your Campaign
        </Button>
      </VStack>
    </Block>
  )
}

export default Create;
