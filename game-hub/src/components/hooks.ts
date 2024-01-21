import { useState, useEffect } from "react";
import ApiClient from "./Api-Client";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
  background_image: string;
}
interface FetchGames {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [Games, setGames] = useState<Game[]>([]);
  const [err, setError] = useState<string>("");
  const controller = new AbortController();
  const FetchGames = useEffect(() => {
    ApiClient.get<FetchGames>("games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
  }, []);
  return { Games, err };
};
export default useGames;
export type { Game };
