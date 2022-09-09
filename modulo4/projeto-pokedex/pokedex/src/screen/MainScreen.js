import { Box } from "@mui/material";
import React from "react";
import SearchBar from "../components/SearchBar";
import PokedexScreen from "./PokedexScreen";
import { PokeListScreen } from "./PokeListScreen";

export default function MainScreen() {
  return (
    <Box>
      <SearchBar />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <PokeListScreen />
        <PokedexScreen />
      </Box>
    </Box>
  );
}
