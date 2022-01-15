import React, { useState } from 'react';
import { Pressable } from 'native-base';
import Image from 'components/Image';
import type { MediaInfo } from "components/Media";

const Gallery: React.FC<{ media: MediaInfo[] }> = ({ media }) => {
  const [index, setIndex] = useState(0);

  if (media.length === 0) {
    return null;
  }

  return (
    <>
      <Image
        mt={1}
        source={{
          uri: media[index].uri,
        }}
        h={400}
        alt="image"
      />
      {media.map((media: MediaInfo, index: number) => {
        <Pressable onPress={() => setIndex(index)}>
          <Image alt="image" resizeMode="contain" borderColor="primary.500" w={124} h={76} source={{ uri: media.uri }} />
        </Pressable>
      })}
    </>
  )
};

Gallery.displayName = 'Gallery';

export default Gallery;
