import { HStack } from "@chakra-ui/react";
import { Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo-black.svg";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="20px">
      <HStack>
        <Image src={logo} boxSize={"80px"}></Image>
        <Text>GameHub</Text>
      </HStack>

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
