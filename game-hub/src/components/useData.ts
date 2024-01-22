import { useEffect, useState } from "react";
import ApiClient from "./Api-Client";
import { CanceledError } from "axios";
interface dataResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [err, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const controller = new AbortController();
  const FetchGames = useEffect(() => {
    ApiClient.get<dataResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
  }, []);
  return { data, err, loading };
};
export default useData;
