import { Text, HStack } from 'native-base';
import React from 'react';

const Footer: React.FC = () => (
  <HStack bg="white" space={2} py={6} px={10} justifyContent="center">
    <Text>&copy; ShibHope, 2021</Text>
  </HStack>
);

export default Footer;
