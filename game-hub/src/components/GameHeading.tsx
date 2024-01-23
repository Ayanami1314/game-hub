import { Heading } from "@chakra-ui/react";
import { gameQuery } from "../App";

interface GameHeadingProps {
  gameQuery: gameQuery;
}
const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  // Games
  // Xbox Games
  // Xbox RPG Games
  const HeadingText = `${gameQuery.selectedPlatform?.name || ""} ${
    gameQuery.selectedGenre?.name || ""
  } Games`;
  return (
    <Heading fontSize={"5xl"} marginBottom={5}>
      {HeadingText}
    </Heading>
  );
};

export default GameHeading;
