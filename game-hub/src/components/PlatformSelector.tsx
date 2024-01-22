import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import usePlatForms, { parentPlatForm } from "../hooks/Platformhook";
interface MenuProps {
  onSelect: (platform: parentPlatForm) => void;
  selectedPlatform: parentPlatForm | null;
}
const PlatformSelector = ({ onSelect, selectedPlatform }: MenuProps) => {
  const { data, err, loading } = usePlatForms();
  if (err) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoIosArrowDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem onClick={() => onSelect(platform)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
