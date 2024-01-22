import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoIosArrowDown />}>
        Order By: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Date</MenuItem>
        <MenuItem>Score</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
