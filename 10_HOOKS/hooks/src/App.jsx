import { useState, useContext } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import HookUseState from "./components/HookUseState";
import HookUseReducer from "./components/HookUseReducer";
import HookUseEffect from "./components/HookUseEffect";
import HookUseContext from "./components/HookUseContext";
import HookUseRef from "./components/HookUseRef";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hooks</h1>
        <HookUseState />
        <HookUseReducer />
        <HookUseEffect />
        <HookUseContext />
        <HookUseRef />
      </div>
    </>
  );
}

export default App;
