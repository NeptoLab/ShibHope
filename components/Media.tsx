import React from 'react';
import { IImageProps, View, IconButton } from "native-base";
import Image from 'components/Image';
import { MaterialIcons } from '@expo/vector-icons';
import type { ImageInfo } from "expo-image-picker";

export type MediaInfo = { id: string } & Partial<ImageInfo>;

export const Media: React.FC<{ media: MediaInfo, onDelete: (media: MediaInfo) => void }> = ({ media, onDelete }) => (
  <View w={124}>
    <Image alt="image" resizeMode="contain" borderColor="primary.500" w={124} h={76} source={{ uri: media.uri }} />
    <IconButton mt={2} icon={<MaterialIcons name="delete" color="#6573FC" size={20} />} mx="auto" onPress={() => onDelete(media)} />
  </View>
);

export default Media;
