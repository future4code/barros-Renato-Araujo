import React, { useState } from "react";
import Form1 from "./components/Form1";

function App() {
const [paginaAtual, setPaginaAtual] = useState(1)

const avanca=(e)=>{
  e.preventDefault()
  
}

  return (
    <div>
      <Form1 />
      <button onClick={avanca}>Avançar</button>
    </div>
  );
}

export default App;
