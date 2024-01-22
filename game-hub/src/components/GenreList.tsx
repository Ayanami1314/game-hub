import useGenres from "./Genrehook";
import { Text, Image, HStack, List, ListItem } from "@chakra-ui/react";
const GenreList = () => {
  const { data, err, loading } = useGenres();
  return (
    <>
      {err && <Text>{err}</Text>}
      <List>
        {data.map((genre) => (
          <ListItem paddingY={"5px"}>
            <HStack spacing={"10px"}>
              <Image
                src={genre.image_background}
                boxSize={"32px"}
                borderRadius={"8px"}
              ></Image>
              <Text fontSize={"lg"}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
