import React from "react";
import Cabeca from "./components/Cabeca";
import Corpo from "./components/Corpo";
import Pe from "./components/Pe";
import { CabecaStyle, CorpoStyle, PeStyle } from "./style";

function App() {
  return (
    <div className="App">
      <CabecaStyle>
        <Cabeca/>        
      </CabecaStyle>

      <CorpoStyle>
        <Corpo/>
      </CorpoStyle>
      <PeStyle>
        <Pe/>
      </PeStyle>
    </div>
  );
}

export default App;
