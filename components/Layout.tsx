import { Web3ReactProvider } from '@web3-react/core';
import { View } from 'native-base';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Web3 from 'web3';
import { AbstractProvider } from 'web3-core';

function getLibrary(provider: AbstractProvider, connector: any) {
  return new Web3(provider);
}

const Layout: React.FC = ({ children }) => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <Header />
    <View mx="auto" my={10} width={1170}>
      {children}
    </View>
    <Footer />
  </Web3ReactProvider>
);

export default Layout;
