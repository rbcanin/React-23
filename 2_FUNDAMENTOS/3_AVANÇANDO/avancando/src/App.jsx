import { useState } from "react";
import "./App.css";
import City from "./assets/city.jpg";
import ManageData from "./components/ManageData";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

function App() {
  const [count, setCount] = useState(0);

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
      </div>
    </>
  );
}

export default App;
