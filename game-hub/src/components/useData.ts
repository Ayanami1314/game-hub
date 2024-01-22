import { useEffect, useState } from "react";
import ApiClient from "./Api-Client";
import { AxiosRequestConfig, CanceledError } from "axios";
interface dataResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(
  endpoint: string,
  config?: AxiosRequestConfig,
  dep?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [err, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const controller = new AbortController();
  const FetchGames = useEffect(
    () => {
      setLoading(true); //每次重新取数据都重置loading
      ApiClient.get<dataResponse<T>>(endpoint, {
        signal: controller.signal,
        ...config,
      })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
    },
    dep ? [...dep] : []
  );
  return { data, err, loading };
};
export default useData;
