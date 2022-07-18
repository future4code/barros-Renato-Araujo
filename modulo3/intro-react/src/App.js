import logo from './img/labenu.png';
import './App.css';
import nomeLogo from './img/logo.png';

function App() {
  function mensagem(){
    alert ("VOCÊ É O SENHOR ABSOLUTO DA VERDADEIRA FORÇA DO CLIQUE!")
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aprenda React JS com a LABENU!</h1>
        <img src={nomeLogo} alt="Logo Renato Peçanha" />
        <p>
          Esse é um teste feito por CHUB NORRIS!
        </p>
        <a
          className="App-link"
          href="https://labenu.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="logo" />
        
        </a>
        <button onClick={mensagem}>NÃO clique aqui!</button>
      </header>
    </div>
  );
}

export default App;
