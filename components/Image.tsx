import { Factory, IImageProps } from 'native-base';
import { Image, ImageProps } from 'react-native';

export default Factory<ImageProps & IImageProps>(Image);
