import {
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { useRef } from "react";
import { IoSearch } from "react-icons/io5";
import useGameQuery from "../store";

const SearchBox = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQuery((s) => s.setSelectSearch);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(ref.current?.value);
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <FormControl>
        <HStack>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <IoSearch />
            </InputLeftElement>
            <Input
              ref={ref}
              type="text"
              placeholder="Search game by name"
              borderRadius={20}
              width={"100%"}
            />
          </InputGroup>
          <Button type="submit">Search</Button>
        </HStack>
      </FormControl>
    </form>
  );
};

export default SearchBox;
