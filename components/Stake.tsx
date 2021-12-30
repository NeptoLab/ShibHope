import { HStack, Text } from 'native-base';
import React from 'react'
import type { Stake as TStake } from 'types/models';
import Block from './Block';

const Stake: React.FC<{ item: TStake, label: string }> = ({ item, label }) => {
  return (
    <Block p={4}>
      <HStack alignItems="center" space={8} flexWrap="wrap">
        <Text fontSize="20px" fontWeight={900} color="primary.500">{label}</Text>
        <Text>{item.owner}</Text>
        <Text fontWeight="bold">{item.value} GRUMPYSHIB</Text>
      </HStack>
    </Block>
  );
};

export default Stake;
