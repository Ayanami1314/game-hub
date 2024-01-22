import GenreList from "./GenreList";
import { Text, Box } from "@chakra-ui/react";
import { Genre } from "./Genrehook";
interface AsideProps {
  onClick: (name: Genre | null) => void;
}
const Aside = ({ onClick }: AsideProps) => {
  return (
    <Box>
      <Text>Aside</Text>
      <GenreList onClick={onClick} />
    </Box>
  );
};

export default Aside;
