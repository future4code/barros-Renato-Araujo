import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function pokeCard({ name, image, types }) {
    const typeHandler = () => {
        if (types[1]) {
            return types[0].type.name + " " + types[1].type.name
        }
        return types[0].type.name
    }

  return (
    <Card align="center" sx={{ spacing: 2, margin: 2, width: 300, 
        borderColor: "white",
        '&:hover': {
          borderColor: "black",
        }, }}>
      
      <CardMedia
        component="img"
        alt="green iguana"
        width="100%"
        image={image}
      />
      <CardContent>
        
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          fontWeight="bolder"
        >
          {name}
        </Typography>
        <Box>
        <Typography
          gutterBottom
          variant="h5"
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
        <Button variant="contained" size="large">
          ADD
        </Button>
      </CardActions>
    </Card>
  );
}
