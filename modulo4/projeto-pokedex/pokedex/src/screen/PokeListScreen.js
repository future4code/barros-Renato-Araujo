import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PokeCard from "../components/PokeCard";
import SearchBar from "../components/SearchBar";

export const PokeListScreen = () => {
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    getPoke();
  }, []);

  const getPoke = () => {
    let endpoints = [];
    for (let i = 1; i < 150; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokes(res));
  };

  const pokeFilter = (name) => {
    let filteredPokes = [];
    if (name === "") {
      getPoke();
    }
    console.log(name);
    for (var i in pokes) {
      if (pokes[i].data.name.includes(name)) {
        filteredPokes.push(pokes[i]);
      }
    }
    setPokes(filteredPokes);
  };

  return (
    <Box>
      <SearchBar pokeFilter={pokeFilter} />
      <Container>
        <Grid container>
          {pokes.map((pokemon, key) => (
            <Grid
              item
              xs={4}
              key={key}
              alignContent="center"
              justifyContent="center"
            >
              <PokeCard
                name={pokemon.data.name}
                image={pokemon.data.sprites.front_default}
                types={pokemon.data.types}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
