import { Center, Spinner } from 'native-base';
import React from 'react';

const Loading: React.FC = () => (
  <Center flex={1}>
    <Spinner size="lg" />
  </Center>
);

Loading.displayName = 'Loading';

export default Loading;
