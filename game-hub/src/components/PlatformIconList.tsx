import { IconType } from "react-icons";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaAndroid,
  FaLinux,
  FaXbox,
  FaApple,
  FaPlaystation,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from "./Gamehook";
interface PlatformIconListProps {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const IconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    ios: MdPhoneIphone,
    linux: FaLinux,
  };
  return (
    <HStack>
      {platforms.map((item) => (
        <Icon as={IconMap[item.slug]} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
