import React, { useState } from 'react';
import { AspectRatio, Image } from 'native-base';
import { Thumbnail, MediaInfo } from "components/Media";

const Gallery: React.FC<{ media: MediaInfo[] }> = ({ media }) => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <AspectRatio w="100%" ratio={16 / 9}>
        <Image
          source={{
            uri: media[index].uri,
          }}
          alt="image"
        />
      </AspectRatio>
      {media.map((media: MediaInfo) => {
        <Thumbnail source={{ uri: media.uri }} />
      })}
    </>
  )
};

Gallery.displayName = 'Gallery';

export default Gallery;
