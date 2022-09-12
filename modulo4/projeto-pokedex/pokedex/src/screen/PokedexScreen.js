import { Box, Container, Grid } from "@mui/material";
import BGTop from "../media/pokedex.png";
import { Context } from "../context/Context";
import React, { useContext } from "react";
import PokeCard from "../components/PokeCard";

export default function PokedexScreen() {
  const pokeContext = useContext(Context);

  return (
    <Box
      sx={{
        width: "40%",
        border: "24px red",
        borderStyle: "none none none solid",
        backgroundColor: "powderblue",
      }}
    >
      <img src={BGTop} alt="pokeball" width="100%" object-fit="contain"></img>
      <Container>
        <Grid container spacing={2}>
          {pokeContext.pokedex.map((pokemon, key) => (
            <Grid item
              item
              xs={4}
              key={key}
              alignContent="center"
              justifyContent="center"
            >
              <PokeCard
                page="pokedex"
                name={pokemon.name}
                image={pokemon.image}
                types={pokemon.types}
                abilities={pokemon.abilities}
                stats={pokemon.stats}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
