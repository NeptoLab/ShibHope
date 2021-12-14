import { Button, HStack, Box } from 'native-base';
import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => (
  <HStack shadow={5} space={2} py={6} px={10} justifyContent="center">
    <Logo flex={1} />
    <Button
      p={0}
      rounded="100px"
      _stack={{
        px: 4,
        py: 2,
        rounded: '100px',
        height: '100%',
        bg:{
          linearGradient: {
          colors: ["#9D50F1", "#6573FC"],
          start: [0, 0],
          end: [1, 0],
          },
        }
      }}
      _text={{
        fontSize: "md",
        fontWeight: "bold",
        color: "white",
      }}
    >
      Connect Wallet
    </Button>
  </HStack>
);

export default Header;
