import GenreList from "./GenreList";
import { Heading, Box } from "@chakra-ui/react";
import { Genre } from "../hooks/Genrehook";

const Aside = () => {
  return (
    <Box>
      <Heading fontSize={"2xl"} fontWeight={"bold"} marginBottom={3}>
        Genres
      </Heading>
      <GenreList />
    </Box>
  );
};

export default Aside;
