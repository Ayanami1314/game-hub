import useData from "./useData";
interface Genre {
  id: number;
  name: string;
  slug: string;
}
const useGenres = () => {
  return useData<Genre>("/genres");
};

export default useGenres;
