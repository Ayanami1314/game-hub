import GenreList from "./GenreList";
import { Text, Box } from "@chakra-ui/react";
import { Genre } from "./Genrehook";
interface AsideProps {
  onClick: (name: Genre | null) => void;
  selectedGenre: Genre | null;
}
const Aside = ({ onClick, selectedGenre }: AsideProps) => {
  return (
    <Box>
      <Text>Aside</Text>
      <GenreList onClick={onClick} selectedGenre={selectedGenre} />
    </Box>
  );
};

export default Aside;
