import { useState } from "react";
import "./App.css";
import City from "./assets/city.jpg";
import ManageData from "./components/ManageData";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragmento from "./components/Fragmento";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";

function App() {
  const [count, setCount] = useState(0);

  function showMassage() {
    console.log("Evento comp Pai");
  }

  const [massage, setMassage] = useState("");

  const handleMassage = (msg) => {
    setMassage(msg);
  };

  return (
    <>
      <div>
        <h1>Avançando em React</h1>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <div>
        <h3>
          <ManageData />
        </h3>
        <ConditionalRender />
        <ShowUserName name=" Carol" />
        <CarDetails brand=" Gol" km={100} cor=" Laranja" />
        <CarDetails brand=" RAM" km={500} cor=" roxo" />
        <Fragmento propFragmento="Testando" />
        <Container>Teste aqi</Container>
        <ExecuteFunction minhaFuncao={showMassage} />
        <Message msg={message} />
      </div>
    </>
  );
}

export default App;
