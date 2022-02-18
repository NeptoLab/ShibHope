import React from "react"
import CharityImage from 'images/webp/charity.webp';
import DonationImage from 'images/webp/donation.webp';
import CrowdfundingImage from 'images/webp/crowdfunding.webp';
import {
  Heading,
  AspectRatio,
  Image,
  Button,
  VStack,
} from "native-base"
import Block from "./Block";
import Link from "./Link";

export const imageMap = {
  charity: CharityImage,
  donation: DonationImage,
  crowdfunding: CrowdfundingImage
};

const Create: React.FC<{ title: string, category: keyof typeof imageMap }> = ({ title, category }) => {
  return (
    <Block w={370} m={15}>
      <AspectRatio w="100%" ratio={16 / 9}>
        <Image
          source={imageMap[category]}
          alt="image"
        />
      </AspectRatio>
      <VStack p={4}>
        <Heading my={4} size="lg">
          {title}
        </Heading>
        <Link passHref href={`campaigns/create/${category}`}>
          <Button flex={1} variant="glow">
            Start Your Campaign
          </Button>
        </Link>
      </VStack>
    </Block>
  )
}

export default Create;
