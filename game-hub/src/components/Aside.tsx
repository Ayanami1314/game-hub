import useGenres from "./Genrehook";
import { Text } from "@chakra-ui/react";
const Aside = () => {
  const { Genres, err, loading } = useGenres();
  return (
    <>
      <Text>Aside</Text>
      {err && <Text>{err}</Text>}
      <ul>
        {Genres.map((genre) => (
          <li>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Aside;
