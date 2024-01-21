import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        onChange={() => {
          toggleColorMode();
        }}
      ></Switch>
      <Text>Light Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
