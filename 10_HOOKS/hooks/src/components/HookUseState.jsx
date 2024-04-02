import { useState } from "react";

const HookUseState = () => {
  //hooks renderizam valores
  //UseState

  let userName = "Rebeca";

  const [name, setName] = useState("Eduardo");

  const changeName = () => {
    userName = "Pedro";
    setName("Eduardo Moura");
  };

  //useState e Input
  const [idade, setIdade] = useState(18);

  //faz o submit do formulário e envia os dados pro servidor
  const handleSubmit = (e) => {
    e.preventDefault(); //envio a uma API
    console.log(idade);
  };

  return (
    <div>
      {/*useState  - ao clicar vc altera o a váriavel do componente (re-renderiza) */}
      <h2>UseState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>

      <button onClick={changeName}>Mudar Nomes</button>
      {/*useState e input- vai alterar o componente da idade e resetar o formulário */}
      <form onSubmit={handleSubmit}>
        {/*evento de submit do formulário */}
        <p>Digite a sua idade</p>
        <div>
          <input
            type="text"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
          {/*olha o input idade, pega o valor e coloca no state toda vez que muda o valor */}
          <input type="submit" value={"Enviar"} />
        </div>
        <p>Você tem {idade} anos</p>
      </form>

      <hr />
    </div>
  );
};

export default HookUseState;
