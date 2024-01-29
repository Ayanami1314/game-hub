import "./App.css";
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrids from "./components/GameGrids";
import Aside from "./components/Aside";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  const templateAreas = {
    base: `"nav" "main"`, // 移动端小屏幕没有aside侧边栏
    lg: `"nav nav" "aside main"`, // > 1000px
  };
  const templateColumns = {
    base: "1fr",
    lg: "200px 1fr",
  };

  return (
    <div className="App">
      <Grid templateAreas={templateAreas} templateColumns={templateColumns}>
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={"10px"}>
            <Aside />
          </GridItem>
        </Show>

        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading />
            <HStack spacing={5}>
              <PlatformSelector />
              <SortSelector />
            </HStack>
            <GameGrids />
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
