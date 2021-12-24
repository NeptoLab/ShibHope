import * as ExpoImagePicker from 'expo-image-picker';
import { nanoid } from 'nanoid';
import { Button, View, Text } from 'native-base';
import Media, { MediaInfo } from './Media';

const Upload: React.FC<{ value: MediaInfo[], onChange: (value: MediaInfo[]) => void }> = ({ value, onChange }) => {
  const handleChange = async () => {
    const { cancelled, ...result } = await ExpoImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (cancelled) {
      return;
    }
    
    onChange && onChange([...value, { id: nanoid(), ...result }]);
  };

  const handleDelete = (media: MediaInfo) => {
    console.log(value, media);
    onChange(value.filter( v => v.id !== media.id ));
  };

  return (
    <View borderColor="gray.200" borderWidth="1px" bg="#F7F8F9" p={8}>
      <View mb={4} flexDirection="row" flexWrap="wrap">
        {value.map((media) => (
          <Media key={media.id} media={media} onDelete={handleDelete} />
        ))}
      </View>
      <Button variant="outline" maxW={200} m="auto" onPress={handleChange}>Upload File</Button>
      <Text textAlign="center" mt={4} textTransform="uppercase" fontWeight={900}>We accept all images and files formats</Text>
    </View>
  );
};

export default Upload;
