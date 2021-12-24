import { Web3ReactProvider } from '@web3-react/core';
import { View, VStack } from 'native-base';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Web3 from 'web3';
import { AbstractProvider } from 'web3-core';

const getLibrary = (provider: AbstractProvider) => {
  return new Web3(provider);
}

const Layout: React.FC = ({ children }) => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <VStack flex={1}>
      <Header />
      <View mx="auto" flex={1} my={10} width={1170}>
        {children}
      </View>
      <Footer />
    </VStack>
  </Web3ReactProvider>
);

export default Layout;
