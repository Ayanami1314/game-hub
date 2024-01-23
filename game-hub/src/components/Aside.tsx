import GenreList from "./GenreList";
import { Heading, Box } from "@chakra-ui/react";
import { Genre } from "../hooks/Genrehook";
interface AsideProps {
  onClick: (name: Genre | null) => void;
  selectedGenre: Genre | null;
}
const Aside = ({ onClick, selectedGenre }: AsideProps) => {
  return (
    <Box>
      <Heading fontSize={"2xl"} fontWeight={"bold"} marginBottom={3}>
        Genres
      </Heading>
      <GenreList onClick={onClick} selectedGenre={selectedGenre} />
    </Box>
  );
};

export default Aside;
