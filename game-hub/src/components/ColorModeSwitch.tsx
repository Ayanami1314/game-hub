import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack w={150}>
      <Switch
        colorScheme="green"
        onChange={() => {
          toggleColorMode();
        }}
      ></Switch>
      <Text fontSize={"md"} w={100}>
        Light Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
