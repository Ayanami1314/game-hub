import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Game } from "./hooks";
const GameCard = (game: Game) => {
  return (
    <Card>
      <CardBody>
        <Image
          borderRadius={10}
          overflow={"hidden"}
          src={game.background_image}
        ></Image>
        <Text fontSize={"2xl"}>{game.name}</Text>
      </CardBody>
    </Card>
  );
};

export default GameCard;
