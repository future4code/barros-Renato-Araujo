import './App.css';
import { React, useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';
import Cadastrar from "./components/cadastrar"
import Listar from './components/listar';

function App() {
  const [pagina, setPagina] = useState("cadastrar")

  const changePage = () => {
    if (pagina === "cadastrar") {
      setPagina ("listar") 
    } else {
      setPagina ("cadastrar")
      }
    }
  
  return (
    <div>
      <button onClick={changePage}>Trocar de tela</button>
      {pagina === "cadastrar" ? <Cadastrar /> : <Listar />}
    </div>
  );
}

export default App;
