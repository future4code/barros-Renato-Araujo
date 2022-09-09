import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import PokeCard from "../components/PokeCard";
import { Context } from "../context/Context";

export const PokeListScreen = () => {
  const pokeContext = useContext(Context);

  useEffect(() => {
    pokeContext.getPoke();
  }, []);

  return (
    <Box sx={{width: '100%'}}>
      <Container>
        <Grid container>
          {pokeContext.pokes.map((pokemon, key) => (
            <Grid
              item
              xs={4}
              key={key}
              alignContent="center"
              justifyContent="center"
            >
              <PokeCard
                key={pokemon.data.id}
                name={pokemon.data.name}
                image={pokemon.data.sprites.other.home.front_default}
                types={pokemon.data.types}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
