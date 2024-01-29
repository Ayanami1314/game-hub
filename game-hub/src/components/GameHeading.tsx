import { Heading } from "@chakra-ui/react";
import useGameQuery from "../store";

const GameHeading = () => {
  // Games
  // Xbox Games
  // Xbox RPG Games
  const selectedPlatform = useGameQuery((s) => s.selectedPlatform);
  const selectedGenre = useGameQuery((s) => s.selectedGenre);
  const HeadingText = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;
  return (
    <Heading fontSize={"5xl"} marginBottom={5}>
      {HeadingText}
    </Heading>
  );
};

export default GameHeading;
