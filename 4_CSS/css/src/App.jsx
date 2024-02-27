import { useState } from "react";
import "./App.css";
import "./index.css";
import MyComponents from "./components/MyComponents";

function App() {
  const n = 10;
  const [name] = useState("Rebeca");
  const titulo = true;
  return (
    <div className="App">
      {/*Css global */}
      <h1>React e CSS</h1>
      {/*CSS de componentes */}
      <MyComponents />
      {/*inline css */}
      <p style={{ background: "red", color: "black", padding: "20px" }}>
        esse elemento estilizou inline
      </p>
      {/*inline dinâmico */}
      <p style={n > 10 ? { color: "blue" } : { color: "red" }}>
        Esse elemento é: azul verdadeiro, vermelho falso
      </p>
      <p style={name === "Rebeca" ? { color: "blue" } : { color: "red" }}>
        Imprima azul
      </p>
      {/*classes dinâmicas */}
      <h1 className={titulo ? "simCerto" : "notCerto"}>
        Título com classe dinâmica
      </h1>
    </div>
  );
}

export default App;
