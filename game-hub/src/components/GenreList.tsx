import useGenres from "./Genrehook";
import { Text } from "@chakra-ui/react";
const GenreList = () => {
  const { data, err, loading } = useGenres();
  return (
    <>
      {err && <Text>{err}</Text>}
      <ul>
        {data.map((genre) => (
          <li>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
