import { HStack } from "@chakra-ui/react";
import { Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo-black.svg";
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={"40px"}></Image>
      <Text> GameHub</Text>
    </HStack>
  );
};

export default NavBar;
