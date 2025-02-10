import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        lg: `"header header" "aside main"`,
      }}
    >
      <GridItem pl="2" area={"header"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={"aside"}>
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
