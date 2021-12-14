import { View } from 'native-base';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <View mx="auto" my={10} maxWidth={1170}>
      {children}
    </View>
    <Footer />
  </>
);

export default Layout;
