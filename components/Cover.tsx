import { View, Center } from "native-base";
import { IViewProps } from "native-base/lib/typescript/components/basic/View/types";
import * as React from "react"
import Svg, {
  Mask,
  Rect,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  TMaskUnits,
} from "react-native-svg"

const Cover: React.FC<IViewProps> = ({ children, ...props }) => (
  <View position="relative" {...props}>
    <Center
      position="absolute"
      w="100%"
      h="100%"
    >
      {children}
    </Center>
    <Svg
      width="100%"
      height={300}
      fill="none"
    >
      <Mask
        id="a"
        maskUnits={"userSpaceOnUse" as TMaskUnits}
        x={0}
        y={0}
        width={1170}
        height={300}
      >
        <Rect width={1170} height={300} fill="#C4C4C4" />
      </Mask>
      <G mask="url(#a)">
        <Rect width={1170} height={300} fill="url(#b)" />
        <Path
          opacity={0.05}
          d="M1079.73-64.88a50.379 50.379 0 0 1 48.66 13.037l47.92 47.917a50.375 50.375 0 0 1 13.03 48.655l-17.54 65.456a50.35 50.35 0 0 1-35.61 35.618l-65.46 17.539a50.385 50.385 0 0 1-48.66-13.037l-47.913-47.917a50.371 50.371 0 0 1-13.037-48.655l17.539-65.456a50.37 50.37 0 0 1 35.621-35.618l65.45-17.54ZM125 95.847a97.74 97.74 0 0 1 94.409 25.297l92.977 92.977a97.74 97.74 0 0 1 25.297 94.409l-34.032 127.009a97.74 97.74 0 0 1-69.112 69.112L107.53 538.683a97.742 97.742 0 0 1-94.409-25.297l-92.977-92.977A97.741 97.741 0 0 1-105.153 326l34.032-127.009a97.74 97.74 0 0 1 69.113-69.112L125 95.847Z"
          fill="#fff"
        />
      </G>
      <Defs>
        <LinearGradient
          id="b"
          x1={1170}
          y1={153}
          x2={0}
          y2={153}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#9D50F1" />
          <Stop offset={1} stopColor="#6573FC" />
        </LinearGradient>
      </Defs>
    </Svg>
  </View>
)

export default Cover;
