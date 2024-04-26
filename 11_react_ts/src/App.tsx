import Destructing, { Category } from "./components/Destructing";
import FirstComponent from "./components/FirstComponent";
import SegundoComponente from "./components/SegundoComponente";
import State from "./components/State";

type textOrNull = string | null;

function App() {
  //Aqui aplica a lógica

  //variáveis

  const name: string = "Rebeca";
  const age: number = 20;
  const isWorking: boolean = true;

  // Type

  const myText: textOrNull = "tem um texto aqui";
  let secondText: textOrNull = null;

  secondText = "oi";

  //funções

  const greeting = (name: string) => {
    return name;
  };

  return (
    <div className="App">
      <h1>Typescript com react</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando</p>}
      <h3>{greeting(name)}</h3>
      <FirstComponent />
      <SegundoComponente name="Segundo" />
      <Destructing
        title="Primeiro post"
        content="Algum conteúdo"
        commentsQty={20}
        tags={["ts", "js"]}
        category={Category.TS}
      />
      <Destructing
        title="Segundo post"
        content="x conteúdo"
        commentsQty={30}
        tags={["ts ", "js"]}
        category={Category.P}
      />
      <State />
      {myText && <p>Tem um texto here</p>}
      {secondText && <p>OI</p>}
    </div>
  );
}

export default App;
