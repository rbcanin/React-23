function App() {
  //Aqui aplica a lógica

  //variáveis

  const name: string = "Rebeca";
  const age: number = 20;
  const isWorking: boolean = true;

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
    </div>
  );
}

export default App;
