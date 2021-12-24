import { IImageProps, Image, View, IconButton } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import type { ImageInfo } from "expo-image-picker";

export type MediaInfo = { id: string } & Partial<ImageInfo>;

export const Thumbnail: React.FC<IImageProps> = (props) => (
  <Image {...props} resizeMode="contain" borderColor="primary.500" width={124} height={76} />
);

export const Media: React.FC<{ media: MediaInfo, onDelete: (media: MediaInfo) => void }> = ({ media, onDelete }) => (
  <View w={124}>
    <Thumbnail source={{ uri: media.uri }} />
    <IconButton mt={2} icon={<MaterialIcons name="delete" color="#6573FC" size={20} />} mx="auto" onPress={() => onDelete(media)} />
  </View>
);

export default Media;
