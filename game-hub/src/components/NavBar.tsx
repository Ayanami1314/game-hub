import { Flex, HStack } from "@chakra-ui/react";
import { Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo-black.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBox from "./SearchBox";
interface NavBarProps {
  onSubmit: (searchText: string) => void;
}
const NavBar = ({ onSubmit }: NavBarProps) => {
  return (
    <>
      <HStack justifyContent={"space-between"} padding="20px" spacing={10}>
        <HStack>
          <Image
            src={logo}
            boxSize={"80px"}
            borderRadius={"10px"}
            overflow={"hidden"}
          ></Image>
          <Text fontSize="2xl">GameHub</Text>
        </HStack>
        <Flex flex={1}>
          <SearchBox onSubmit={onSubmit} />
        </Flex>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
