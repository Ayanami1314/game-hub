import useGenres, { Genre } from "./Genrehook";
import {
  Text,
  Image,
  HStack,
  List,
  ListItem,
  Spinner,
  Button,
} from "@chakra-ui/react";
interface GenreListProp {
  onClick: (name: Genre | null) => void;
}

const GenreList = ({ onClick }: GenreListProp) => {
  const { data, err, loading } = useGenres();
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
                onClick={() => onClick(genre)}
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
