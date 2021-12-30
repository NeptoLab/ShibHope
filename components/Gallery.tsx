import React, { useState } from 'react';
import { AspectRatio, Image } from 'native-base';
import { Thumbnail, MediaInfo } from "components/Media";

const Gallery: React.FC<{ media: MediaInfo[] }> = ({ media }) => {
  const [index, setIndex] = useState(0);

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
      {media.map((media: MediaInfo) => {
        <Thumbnail source={{ uri: media.uri }} />
      })}
    </>
  )
};

Gallery.displayName = 'Gallery';

export default Gallery;
