import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Game, Platform } from "./hooks";
import PlatformIconList from "./PlatformIconList";

const GameCard = (game: Game) => {
  console.log(game.parent_platforms.map((item) => item.platform));
  return (
    <Card>
      <CardBody>
        <Image
          borderRadius={10}
          overflow={"hidden"}
          src={game.background_image}
        ></Image>
        <Text fontSize={"2xl"}>{game.name}</Text>
        <PlatformIconList
          platforms={game.parent_platforms.map((item) => item.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
