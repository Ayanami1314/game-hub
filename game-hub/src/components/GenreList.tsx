import useGenres from "../hooks/Genrehook";
import {
  Text,
  Image,
  HStack,
  List,
  ListItem,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGameQuery from "../store";

const GenreList = () => {
  const { data, err, loading } = useGenres();
  const selectedGenre = useGameQuery((s) => s.selectedGenre);
  const setSelectedGenre = useGameQuery((s) => s.setSelectGenre);
  return (
    <>
      {err && <Text>{err}</Text>}
      {loading && <Spinner size={"md"} />}
      <List>
        {data.map((genre) => (
          <ListItem paddingY={"5px"} key={genre.id}>
            <HStack spacing={"10px"}>
              <Image
                src={genre.image_background}
                boxSize={"32px"}
                borderRadius={"8px"}
              ></Image>
              <Button
                variant={"link"}
                fontSize={"lg"}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => setSelectedGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
