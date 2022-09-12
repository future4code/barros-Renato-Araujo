import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Context } from "../context/Context";
import { useContext } from "react";

export default function PokeCard({
  page,
  name,
  image,
  types,
  abilities,
  stats,
}) {
  const pokeContext = useContext(Context);

  const [face, setFace] = React.useState("front");

  const addToPokedex = () => {
    pokeContext.setPokes(
      pokeContext.pokes.filter((poke) => poke.data.name !== name)
    );

    let pokemon = { name, image, types, abilities, stats };
    pokeContext.setPokedex([...pokeContext.pokedex, pokemon]);
    console.log(pokemon);
    console.log(pokeContext.pokes);
  };

  const removePoke = () => {
    const remove = pokeContext.pokedex.filter(
      (pokemon) => name !== pokemon.name
    );
    pokeContext.setPokedex(remove);
    pokeContext.getPoke();
  };

  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name + " " + types[1].type.name;
    }
    return types[0].type.name;
  };

  const faceHandler = () => {
    console.log(face);
    if (face === "front") {
      setFace("back");
    } else {
      setFace("front");
    }
  };

  return (
    <Card
      onClick={faceHandler}
      align="center"
      sx={{
        width: 210,
        height: 400,
        border: "solid",
        borderColor: "white",
        "&:hover": {
          borderColor: "red",
        },
      }}
    >
      {face === "front" && (
        <Box>
          <CardMedia
            onClick={faceHandler}
            component="img"
            alt={name}
            width="100%"
            image={image.other.home.front_default}
          />
          <CardContent onClick={faceHandler}>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              fontWeight="bolder"
            >
              {name}
            </Typography>
            <Box onClick={faceHandler}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                fontWeight="bolder"
              >
                {typeHandler()}
              </Typography>
            </Box>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-evenly" }}>
            <Button variant="outlined" size="medium">
              Details
            </Button>
            {page === "list" && (
              <Button
                onClick={addToPokedex}
                variant="contained"
                size="large"
                color="success"
              >
                ADD
              </Button>
            )}
            {page === "pokedex" && (
              <Button
                onClick={removePoke}
                variant="contained"
                size="large"
                color="error"
              >
                REMOVE
              </Button>
            )}
          </CardActions>
        </Box>
      )}

      {face === "back" && (
        <Box>
          <Button
            variant="outlined"
            sx={{
              width: "98%",
              margin: "3px",
              color: "red",
              fontWeight: "bolder",

              textAlign: "left",
              paddingLeft: "21px",
              fontSize: "14px",
              "&:hover": {
                backgroundColor: "red",
                opacity: [0.9, 0.8, 0.7],
                color: "white",
              },
            }}
          >
            <label>stats</label>
          </Button>
          {stats.map((stat, i) => {
            return (
              <Box
                key={i}
                sx={{
                  margin: "3px",
                  color: "white",
                  fontWeight: "bolder",
                  backgroundColor: "red",
                  textAlign: "right",
                  paddingRight: "21px",
                  fontSize: "14px",
                  "&:hover": {
                    backgroundColor: "darkred",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                <label>
                  {stat.stat.name}: {stat.base_stat}
                </label>
              </Box>
            );
          })}

          <Button
            variant="outlined"
            sx={{
              width: "98%",
              margin: "3px",
              color: "purple",
              fontWeight: "bolder",

              textAlign: "left",
              paddingLeft: "21px",
              fontSize: "14px",
              "&:hover": {
                backgroundColor: "secondary.main",
                opacity: [0.9, 0.8, 0.7],
                color: "white",
              },
            }}
          >
            <label>abilities</label>
          </Button>
          {abilities.map((ability, i) => {
            return (
              <Box
                key={i}
                sx={{
                  margin: "3px",
                  color: "white",
                  fontWeight: "bolder",
                  backgroundColor: "purple",
                  textAlign: "left",
                  paddingLeft: "21px",
                  fontSize: "14px",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                <label>{ability.ability.name}</label>
              </Box>
            );
          })}
          <Box sx={{ display: "flex" }}>
            <CardMedia
              onClick={faceHandler}
              component="img"
              alt={name}
              image={image.back_default}
              sx={{ width: "150px" }}
            />
            <CardMedia
              onClick={faceHandler}
              component="img"
              alt={name}
              image={image.front_default}
              sx={{ width: "150px" }}
            />
          </Box>
        </Box>
      )}
    </Card>
  );
}
