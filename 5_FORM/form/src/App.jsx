import { useState } from "react";
import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <MyForm user={{ name: "Estela", contato: "43 99624-3203" }} />
      </div>
    </>
  );
}

export default App;
