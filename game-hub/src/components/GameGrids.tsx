import useGames from "../hooks/Gamehook";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/Genrehook";
import { parentPlatForm } from "../hooks/Platformhook";
import { Selection } from "../hooks/Gamehook";
const GameGrids = ({ selectedGenre, selectedPlatform }: Selection) => {
  const { data, err, loading } = useGames({ selectedGenre, selectedPlatform });
  const skeletonNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {err && <Text>{err}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10px"}
        spacing={"15px"}
      >
        {loading &&
          skeletonNumber.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <SkeletonCard />
            </GameCardContainer>
          ))}
        {!loading &&
          data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game}></GameCard>
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrids;
