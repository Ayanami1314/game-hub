import useGames from "./hooks";
import { Text } from "@chakra-ui/react";

const GameGrids = () => {
  const { Games, err } = useGames();
  return (
    <>
      {err && <Text>{err}</Text>}
      <ul>
        {Games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrids;
