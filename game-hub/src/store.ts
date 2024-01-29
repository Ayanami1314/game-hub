import { Genre } from "./hooks/Genrehook";
import { parentPlatForm } from "./hooks/Platformhook";
import { create } from "zustand";
export type sortOps =
  | "name"
  | "-released"
  | "-added"
  | "-updated"
  | "-rating"
  | "-metacritic";
interface gameQuery {
  selectedGenre: Genre | null;
  selectedPlatform: parentPlatForm | null;
  sortBy: sortOps;
  searchText: string;
  setSelectGenre: (genre: Genre | null) => void;
  setSelectPlatform: (platform: parentPlatForm | null) => void;
  setSelectSort: (sort: sortOps) => void;
  setSelectSearch: (search: string) => void;
}
const useGameQuery = create<gameQuery>((set) => ({
  selectedGenre: null,
  selectedPlatform: null,
  sortBy: "name",
  searchText: "",
  setSelectGenre: (genre: Genre | null) =>
    set(() => ({ selectedGenre: genre })),
  setSelectPlatform: (platform: parentPlatForm | null) =>
    set(() => ({ selectedPlatform: platform })),
  setSelectSort: (sort: sortOps) => set(() => ({ sortBy: sort })),
  setSelectSearch: (search: string) => set(() => ({ searchText: search })),
}));

export default useGameQuery;
