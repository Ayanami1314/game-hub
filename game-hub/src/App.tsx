import { useState } from "react";
import "./App.css";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrids from "./components/GameGrids";
import Aside from "./components/Aside";
import { Genre } from "./hooks/Genrehook";
import PlatformSelector from "./components/PlatformSelector";
import { parentPlatForm } from "./hooks/Platformhook";
import SortSelector from "./components/SortSelector";
export interface gameQuery {
  selectedGenre: Genre | null;
  selectedPlatform: parentPlatForm | null;
}
function App() {
  const templateAreas = {
    base: `"nav" "main"`, // 移动端小屏幕没有aside侧边栏
    lg: `"nav nav" "aside main"`, // > 1000px
  };
  const templateColumns = {
    base: "1fr",
    lg: "200px 1fr",
  };
  const [gameQuery, setGameQuery] = useState<gameQuery>({} as gameQuery);

  const filterByGenre = (genre: Genre | null) => {
    setGameQuery({ ...gameQuery, selectedGenre: genre });
  };
  return (
    <div className="App">
      <Grid templateAreas={templateAreas} templateColumns={templateColumns}>
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={"10px"}>
            <Aside
              onClick={filterByGenre}
              selectedGenre={gameQuery.selectedGenre}
            ></Aside>
          </GridItem>
        </Show>

        <GridItem area="main">
          <HStack paddingLeft={2} spacing={5}>
            <PlatformSelector
              onSelect={(platform) =>
                setGameQuery({ ...gameQuery, selectedPlatform: platform })
              }
              selectedPlatform={gameQuery.selectedPlatform}
            />
            <SortSelector />
          </HStack>
          <GameGrids {...gameQuery}></GameGrids>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
