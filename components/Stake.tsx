import { HStack, Text } from 'native-base';
import React from 'react'
import Block from './Block';

const Stake: React.FC = () => {
  return (
    <Block p={4}>
      <HStack alignItems="center" space={8}>
        <Text fontSize="20px" fontWeight={900} color="primary.500">01</Text>
        <Text>0x000000000000000000</Text>
        <Text fontWeight="bold">500 GRUMPYSHIB</Text>
      </HStack>
    </Block>
  );
};

export default Stake;
