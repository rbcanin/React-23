import { useState } from "react";
import "./MyForm.css";

const MyForm = (user) => {
  const [name, setName] = useState(user ? user.name : " ");
  const [contato, setContato] = useState(user ? user.contato : " ");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleContact = (e) => {
    setContato(e.target.value);
  };

  //console.log(name);
  //onsole.log(contato);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando form");
    console.log(name, contato);

    setName(" ");
    setEmail(" ");
  };

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
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        {/* label envolvendo input*/}
        <div>
          <label htmlFor="contato">
            <span>Contato: </span>
            <input
              type="text"
              name="contato"
              placeholder="(  ) 99999-9999"
              onChange={(e) => setContato(e.target.value)}
              value={contato}
            />
          </label>
        </div>
        <input type="submit" value={"Enviar"} />
        {/* 5. envio de form*/}
      </form>
    </div>
  );
};

export default MyForm;
