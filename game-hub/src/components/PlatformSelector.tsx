import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import usePlatForms from "../hooks/Platformhook";
import useGameQuery from "../store";

const PlatformSelector = () => {
  const { data, err, loading } = usePlatForms();
  const selectedPlatform = useGameQuery((s) => s.selectedPlatform);
  const setSelectedPlatform = useGameQuery((s) => s.setSelectPlatform);
  if (err) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoIosArrowDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
