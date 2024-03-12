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

  const [palavraEscolhida, setPalavraEscolhida] = useState("");
  const [categoriaPalavra, setCategoriaPalavra] = useState("");
  const [letras, setLetras] = useState([]);

  const palavraEscolhidaCategoria = () => {
    const categorias = Object.keys(words);
    const categoria =
      categorias[Math.floor(Math.random() * Object.keys(categorias).length)];
    console.log(categoria);

    const palavra =
      words[categoria][Math.floor(Math.random() * words[categoria].length)];
    console.log(palavra);
    return { palavra, categoria };
  };

  //Clique pra começar o jogo
  const startJogo = () => {
    const { palavra, categoria } = palavraEscolhidaCategoria();

    let mundoLetras = palavra.split("");
    mundoLetras = mundoLetras.map((l) => l.toLowerCase());

    console.log(palavra, categoria);
    console.log(mundoLetras);

    setCategoriaPalavra(palavra);
    setPalavraEscolhida(categoria);
    setLetras(letras);

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
