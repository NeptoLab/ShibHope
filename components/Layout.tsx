import StyleSheet from 'react-native-media-query';
import { Web3ReactProvider } from '@web3-react/core';
import { useTheme, View, VStack } from 'native-base';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Web3 from 'web3';
import { AbstractProvider } from 'web3-core';

const getLibrary = (provider: AbstractProvider) => {
  return new Web3(provider);
}

const Layout: React.FC = ({ children }) => {
  const theme: any = useTheme();
  const { ids, styles } = StyleSheet.create({
    layout: {
      [theme.media.desktop]: {
        minWidth: '1170px',
      },
      [theme.media.mobile]: {
        width: 'auto'
      }
    }
  });
  
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <VStack flex={1}>
        <Header />
        <View mx="auto" flex={1} my={10} dataSet={{ media: ids.layout }} style={styles.layout}>
          {children}
        </View>
        <Footer />
      </VStack>
    </Web3ReactProvider>
  );
};

export default Layout;
