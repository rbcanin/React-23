import { useState } from "react";
import "./MyForm.css";

const MyForm = () => {
  const [name, setName] = useState();
  const [contato, setContato] = useState();

  const handleName = (e) => {
    console.log(e);
  };

  const handleSubmit = (evento) => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Formulário</h1>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
          />
        </div>
        {/* label envolvendo input*/}
        <label htmlFor="contato">
          <span>Contato: </span>
          <input type="contato" placeholder="(  ) 99999-9999" />
        </label>
        <input type="submit" value={"Enviar"} />
        {/* 5. envio de form*/}
      </form>
    </div>
  );
};

export default MyForm;
