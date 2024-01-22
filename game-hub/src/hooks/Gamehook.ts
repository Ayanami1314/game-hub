import { Genre } from "./Genrehook";
import { parentPlatForm } from "./Platformhook";
import useData from "./useData";

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
  genres: string[];
}
export interface Selection {
  selectedGenre: Genre | null;
  selectedPlatform: parentPlatForm | null;
}
const useGames = ({ selectedGenre, selectedPlatform }: Selection) => {
  return useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre, selectedPlatform]
  );
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
