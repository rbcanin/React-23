import { useState } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import HookUseState from "./components/HookUseState";
import HookUseReducer from "./components/HookUseReducer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hooks</h1>
        <HookUseState />
        <HookUseReducer />
      </div>
    </>
  );
}

export default App;
