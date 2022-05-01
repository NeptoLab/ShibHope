import React, { useState } from 'react';
import { AspectRatio, Pressable } from 'native-base';
import Image from 'components/Image';
import type { MediaInfo } from 'components/Media';

const Gallery: React.FC<{ media: MediaInfo[] }> = ({ media }) => {
  const [index, setIndex] = useState(0);

  if (media.length === 0) {
    return null;
  }

  return (
    <>
      <AspectRatio mb={4} w="100%" ratio={16 / 9}>
        <Image
          source={{
            uri: media[index].uri,
          }}
          alt="image"
        />
      </AspectRatio>
      {media.length > 1 && media.map((media: MediaInfo, elId: number) => (
        <Pressable key={media.id} onPress={() => setIndex(elId)}>
          <Image
            borderWidth={elId === index ? '2' : '0'}
            alt="image"
            resizeMode="contain"
            borderColor="primary.500"
            w="124px"
            h="76px"
            source={{ uri: media.uri }}
          />
        </Pressable>
      ))}
    </>
  );
};

Gallery.displayName = 'Gallery';

export default Gallery;
