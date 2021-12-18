import React from "react";
import {
  Box,
  IBoxProps,
} from "native-base";

const Block: React.FC<IBoxProps> = ({ children, ...props }) => {
  return (
    <Box
      rounded="lg"
      overflow="hidden"
      bg="white"
      borderWidth="1"
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}

export default Block;
