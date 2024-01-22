import { Skeleton, SkeletonText, Card, CardBody } from "@chakra-ui/react";
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
