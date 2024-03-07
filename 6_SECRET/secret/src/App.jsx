import { useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>Secret Word</h1>
        <StartScreen />
      </div>
    </>
  );
}

export default App;
