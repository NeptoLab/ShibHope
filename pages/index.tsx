import React from "react";
import {
  Center,
  useColorMode,
  Tooltip,
  IconButton,
  SunIcon,
  MoonIcon,
  Image,
  HStack,
  Text,
  Heading,
  Code,
  Link,
  VStack,
  Button,
  AspectRatio,
} from "native-base";

// Start editing here, save and see your changes.
export default function App() {
  return (
    <Center
      flex={1}
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
    >
      <VStack alignItems="center" space="md">
        <AspectRatio w={48} ratio={1.66}>
          <Image
            source={{ uri: "images/worker.png" }}
            alt="Shiba Worker"
            resizeMode="contain"
          />
        </AspectRatio>
        <Heading>Under Construction</Heading>
        <Text>
          This website is under development process right now.
          Check Later!
        </Text>
        <HStack alignItems="center" space="sm">
          <Link href="https://grumpyshib.com" isExternal>
            <Text
              _light={{ color: "gray.700" }}
              _dark={{ color: "gray.400" }}
              underline
              fontSize={"xl"}
            >
              GrumpyShiba
            </Text>
          </Link>
          <Text>/</Text>
          <Link href="https://discord.gg/rpW3eKSWS5" isExternal>
            <Text color="primary.500" underline fontSize={"xl"}>
              Discord
            </Text>
          </Link>
        </HStack>
      </VStack>
      <ColorModeSwitch />
      <Link mt="6" href="https://github.com/grumpyshiba/ShibHope" isExternal>
        <Button variant="outline" colorScheme="coolGray">
          View Repo
        </Button>
      </Link>
    </Center>
  );
}
// Color Switch Component
function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tooltip
      label={colorMode === "dark" ? "Enable light mode" : "Enable dark mode"}
      placement="bottom right"
      openDelay={300}
      closeOnClick={false}
    >
      <IconButton
        position="absolute"
        top={12}
        right={8}
        onPress={toggleColorMode}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        accessibilityLabel="Color Mode Switch"
      />
    </Tooltip>
  );
}
