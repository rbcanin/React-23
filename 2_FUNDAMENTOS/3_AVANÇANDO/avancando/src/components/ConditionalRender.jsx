import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("Mat");

  return (
    <div>
      <h1>If</h1>
      <p>Isso vai ser exibido?</p>
      {x && <p>Se x for verdadeiro, sim</p>}
      {!x && <p>Agora x é falso</p>}
      <h1>If Ternário</h1>

      {name === "Rebeca" ? (
        <div>
          <p>O nome é Rebeca</p>
        </div>
      ) : (
        <div>
          <p>Nome não foi encontrado!</p>
        </div>
      )}
      <button onClick={() => setName("Rebeca")}>Clique Aqui</button>
    </div>
  );
};

export default ConditionalRender;
