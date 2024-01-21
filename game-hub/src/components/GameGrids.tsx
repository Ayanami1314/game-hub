import React from "react";
import ApiClient from "./Api-Client";
import { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";
interface Game {
  id: number;
  name: string;
  slug: string;
}
interface FetchGames {
  count: number;
  results: Game[];
}
const GameGrids = () => {
  const [Games, setGames] = useState<Game[]>([]);
  const [err, setError] = useState<string>("");
  const FetchGames = useEffect(() => {
    ApiClient.get<FetchGames>("games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  return (
    <>
      {err && <Text>{err}</Text>}
      <ul>
        {Games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrids;
