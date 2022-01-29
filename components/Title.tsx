import { Heading, IHeadingProps, View } from 'native-base';
import React from 'react';

const Title: React.FC<IHeadingProps> = ({ children, ...props }) => (
  <>
    <Heading size="xl" {...props}>
      {children}
    </Heading>
    <View bg="#6573FC" height={1} w={20} m="auto" mt={2} mb={7} />
  </>
);

export default Title;
