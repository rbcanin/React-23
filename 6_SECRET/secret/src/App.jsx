//React
import { useState, useCallback, useEffect } from "react";

//Componentes
import StartScreen from "./components/StartScreen";
import Fim from "./components/Fim";
import Jogo from "./components/Jogo";

//CSS
import "./components/StartScreen.css";
import "./App.css";

//Palavras
import { wordsList } from "./data/words";

const estado = [
  { id: 1, name: "comeco" },
  { id: 2, name: "jogo" },
  { id: 3, name: "fim" },
];

function App() {
  const [jogoEstado, setJogoEstado] = useState(estado[0].name);
  const [words] = useState(wordsList);

  const [palavraEscolhida, setPickedWord] = useState("");
  const [categoriaPalavra, setCategoriaPalavra] = useState("");
  const [letras, setLetras] = useState([]);

  //Clique pra começar o jogo
  const startJogo = () => {
    setJogoEstado(estado[1].name);
  };

  //processar a letra do input
  const verificarLetra = () => {
    setJogoEstado(estado[2].name);
  };

  //reiniciar
  const tenteDenovo = () => {
    setJogoEstado(estado[0].name);
  };

  return (
    <>
      <div className="App">
        {jogoEstado === "comeco" && <StartScreen startJogo={startJogo} />}
        {jogoEstado === "jogo" && <Jogo verificarLetra={verificarLetra} />}
        {jogoEstado === "fim" && <Fim tenteDenovo={tenteDenovo} />}
      </div>
    </>
  );
}

export default App;
