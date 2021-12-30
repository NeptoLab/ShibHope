import StyleSheet from 'react-native-media-query';
import { useTheme, View, VStack } from 'native-base';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

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
    <VStack flex={1} position="static">
      <Header />
      <View mx="auto" my={10} dataSet={{ media: ids.layout }} style={styles.layout}>
        {children}
      </View>
      <Footer />
    </VStack>
  );
};

export default Layout;
