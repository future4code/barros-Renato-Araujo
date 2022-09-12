import { useState } from "react";
import "./App.css";
import { Context } from "./context/Context";
import Routers from "./Router/Routers";
import axios from "axios";

function App() {
  const [pokes, setPokes] = useState([]);
  const [pokedex, setPokedex] = useState ([])

  const getPoke = () => {
    let endpoints = [];
    for (let i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokes(res));
      
      let pokeTest = ""

      pokedex.forEach((poke) => {
        pokeTest = poke.name
      pokes.filter((pokeTest) => pokedex.data.name !== pokeTest.name)
      })
  };

  return (
    <Context.Provider value={{pokes, setPokes, getPoke, pokedex, setPokedex}}>      
      <Routers />
    </Context.Provider>
  );
}

export default App;
