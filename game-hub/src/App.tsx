import { useState } from "react";
import "./App.css";
import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrids from "./components/GameGrids";
import Aside from "./components/Aside";
import { Genre } from "./components/Genrehook";
function App() {
  const templateAreas = {
    base: `"nav" "main"`, // 移动端小屏幕没有aside侧边栏
    lg: `"nav nav" "aside main"`, // > 1000px
  };
  const templateColumns = {
    base: "1fr",
    lg: "200px 1fr",
  };
  const [selectGenre, setSelectGenre] = useState<Genre | null>(null);
  const filterByGenre = (genre: Genre | null) => {
    setSelectGenre(genre);
  };
  return (
    <div className="App">
      <Grid templateAreas={templateAreas} templateColumns={templateColumns}>
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={"10px"}>
            <Aside onClick={filterByGenre} selectedGenre={selectGenre}></Aside>
          </GridItem>
        </Show>

        <GridItem area="main">
          <Text>Main</Text>
          <GameGrids selectedGenre={selectGenre}></GameGrids>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
