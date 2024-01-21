import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
function App() {
  const templateAreas = {
    base: `"nav" "main"`, // 移动端小屏幕没有aside侧边栏
    lg: `"nav nav" "aside main"`, // > 1000px
  };
  return (
    <div className="App">
      <Grid templateAreas={templateAreas}>
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        </Show>

        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
