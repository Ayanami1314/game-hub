import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Card,
  CardBody,
} from "@chakra-ui/react";
import GameCard from "./GameCard";
import { exampleGame } from "../hooks/Gamehook";
const SkeletonCard = () => {
  return (
    <Card>
      <Skeleton height="150px" width="300px" />
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default SkeletonCard;
