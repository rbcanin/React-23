import { useState } from "react";
import "./App.css";
import Events from "./components/Events";
import Challenge from "./components/Challenge";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Events />
        <Challenge />
      </div>
    </>
  );
}

export default App;
