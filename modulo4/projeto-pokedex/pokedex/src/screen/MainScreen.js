import { Box } from "@mui/material";
import React from "react";
import SearchBar from "../components/SearchBar";
import PokedexScreen from "./PokedexScreen";
import { PokeListScreen } from "./PokeListScreen";

export default function MainScreen() {
  return (
    <Box sx={{ minWidth: "1650px", minHeight: '100%', maxWidth: "100vw" }} >
      <SearchBar sx={{ margin: "0" }}/>
      <Box sx={{ display: "flex"}}>
        <PokeListScreen />
        <PokedexScreen />
      </Box>
    </Box>
  );
}
