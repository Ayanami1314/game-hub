import { useState, useEffect } from "react";
import ApiClient from "./Api-Client";
import { CanceledError } from "axios";

interface Platform {
  id: number;
  slug: string;
  name: string;
}
interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGames {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [Games, setGames] = useState<Game[]>([]);
  const [err, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const controller = new AbortController();
  const FetchGames = useEffect(() => {
    ApiClient.get<FetchGames>("games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
  }, []);
  return { Games, err, loading };
};
const exampleGame = {
  id: 1,
  name: "example",
  background_image: "example",
  parent_platforms: [
    { platform: { id: 1, slug: "pc", name: "PC" } },
    { platform: { id: 2, slug: "xbox", name: "Xbox" } },
  ],
  metacritic: 100,
};
export default useGames;
export { exampleGame };
export type { Game, Platform };
