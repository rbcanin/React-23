import styles from "./Register.module.css";
import { useState, useEffect } from "react";

const Register = () => {
  return (
    <div>
      <h1>Cadastre-se para publicar</h1>
      <form>
        <label>
          <span>Nome: </span>
          <input type="text" name="displayName" placeholder="Digite Seu nome" />
        </label>
        <label>
          <span>E-mail: </span>
          <input type="email" name="email" placeholder="Digite Seu E-mail" />
        </label>
        <label>
          <span>Senha: </span>
          <input
            type="password"
            name="password"
            placeholder="Digite Sua senha"
          />
        </label>
        <label>
          <span>Confirmação de senha: </span>
          <input
            type="confirmPassword"
            name="confirmPassword"
            placeholder="Corfirme Sua senha"
          />
        </label>
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
