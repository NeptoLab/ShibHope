import { useTheme, View, VStack } from 'native-base';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <VStack flex={1} position="static">
      <Header />
      <View maxW={[ '100%', '100%', '100%', '1170px' ]} mx="auto" my={10}>
        {children}
      </View>
      <Footer />
    </VStack>
  );
};

export default Layout;
