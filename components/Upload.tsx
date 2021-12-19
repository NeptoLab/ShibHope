import * as ExpoImagePicker from 'expo-image-picker';
import { Button, View, Text } from 'native-base';

const Upload: React.FC = () => (
  <View borderColor="gray.200" borderWidth="1px" bg="#F7F8F9" p={8}>
    <Button variant="outline" maxW={200} m="auto">Upload File</Button>
    <Text textAlign="center" mt={4} textTransform="uppercase" fontWeight={900}>We accept all images and files formats</Text>
  </View>
);

export default Upload;
