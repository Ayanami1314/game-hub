import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import useGameQuery, { sortOps } from "../store";
const SortSelector = () => {
  const sortOptions = [
    {
      name: "name",
      label: "Relevance",
    },
    {
      name: "-rating",
      label: "Average Rating",
    },
    {
      name: "-added",
      label: "Date Added",
    },
    {
      name: "-metacritic",
      label: "Popularity",
    },
    {
      name: "-released",
      label: "Released Date",
    },
    {
      name: "-updated",
      label: "Last Updated",
    },
  ] as { name: sortOps; label: string }[];
  const sortBy = useGameQuery((s) => s.sortBy);
  const setSortBy = useGameQuery((s) => s.setSelectSort);
  const sortLabel = sortOptions.find((option) => option.name === sortBy)?.label;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoIosArrowDown />}>
        {"Order By: " + sortLabel}
      </MenuButton>
      <MenuList>
        {sortOptions.map((option, index) => (
          <MenuItem key={index} onClick={() => setSortBy(option.name)}>
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
