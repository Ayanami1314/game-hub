import useGames from "./hooks";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
const GameGrids = () => {
  const { Games, err, loading } = useGames();
  const skeletonNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {err && <Text>{err}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10px"}
        spacing={10}
      >
        {loading &&
          skeletonNumber.map((skeleton) => <SkeletonCard key={skeleton} />)}
        {Games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrids;
