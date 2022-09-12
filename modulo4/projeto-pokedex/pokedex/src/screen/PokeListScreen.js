import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useContext, useEffect } from "react";
import PokeCard from "../components/PokeCard";
import { Context } from "../context/Context";

export const PokeListScreen = () => {
  const pokeContext = useContext(Context);

  useEffect(() => {
    pokeContext.getPoke();
  }, []);

  return (
    <Box
      sx={{
        width: "60%",
        justifyContent: "center",
        backgroundColor: "lightpink",
        paddingTop: "30px",
        borderTop: "solid",
        borderRight: "solid",
        borderColor: "black",
      }}
    >
      <Container>
        <Grid container spacing={1} justifyContent="start">
          {pokeContext.pokes.map((pokemon, key) => (
            <Grid item xs={3} key={key}>
              <PokeCard
                page="list"
                name={pokemon.data.name}
                image={pokemon.data.sprites}
                types={pokemon.data.types}
                abilities={pokemon.data.abilities}
                stats={pokemon.data.stats}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
