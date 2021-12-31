import { Avatar, HStack, View, Text } from 'native-base';
import React from 'react'
import type { Comment as TComment } from 'types/models';
import Block from './Block';

const Comment: React.FC<{ item: TComment }> = ({ item }) => {
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
          <Text fontWeight="bold" fontSize="12px">{item.stake.owner}</Text>
          <Text my={1} fontSize="16px" fontWeight="thin">{item.text}</Text>
          <Text fontWeight="bold" color="primary.500">{item.stake.value} GRUMPYSHIB</Text>
        </View>
      </HStack>
    </Block>
  );
};

export default Comment;
