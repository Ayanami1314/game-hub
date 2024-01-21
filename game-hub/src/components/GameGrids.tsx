import useGames from "./hooks";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
const GameGrids = () => {
  const { Games, err } = useGames();
  return (
    <>
      {err && <Text>{err}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10px"}
        spacing={10}
      >
        {Games.map((game) => (
          <GameCard key={game.id} {...game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrids;
