import { Avatar, HStack, View, Text } from 'native-base';
import React from 'react'
import Block from './Block';

const Media: React.FC = () => {
  return (
    <Block p={4} flexDirection="row">
      <HStack space={4}>
        <Avatar
          bg={{ linearGradient: {
            colors: ["#9D50F1", "#6573FC"],
            start: [0, 0],
            end: [0, 1],
            }
          }}
        />
        <View>
          <Text fontWeight="bold" fontSize="12px">0x00000000000000</Text>
          <Text my={1} fontSize="16px" fontWeight="thin">Yeah, it's really sad!</Text>
          <Text fontWeight="bold" color="primary.500">500 GRUMPYSHIB</Text>
        </View>
      </HStack>
    </Block>
  );
};

export default Media;
