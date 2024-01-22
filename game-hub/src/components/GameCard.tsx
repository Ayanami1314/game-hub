import { Card, CardBody, Image, Text, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/Gamehook";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import noImage from "../assets/no-image.png";
interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <CardBody>
        <Image
          borderRadius={10}
          overflow={"hidden"}
          src={game.background_image ? game.background_image : noImage}
        ></Image>
        <Text fontSize={"2xl"}>{game.name}</Text>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((item) => item.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
