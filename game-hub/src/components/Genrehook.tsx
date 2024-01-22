import React, { useEffect, useState } from "react";
import ApiClient from "./Api-Client";
import { CanceledError } from "axios";
interface Genre {
  id: number;
  name: string;
  slug: string;
}
interface FetchGenres {
  count: number;
  results: Genre[];
}
const useGenres = () => {
  const [Genres, setGenres] = useState<Genre[]>([]);
  const [err, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const controller = new AbortController();
  const FetchGames = useEffect(() => {
    ApiClient.get<FetchGenres>("genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
  }, []);
  return { Genres, err, loading };
};

export default useGenres;
