import { useState, useContext } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import HookUseState from "./components/HookUseState";
import HookUseReducer from "./components/HookUseReducer";
import HookUseEffect from "./components/HookUseEffect";
import HookUseContext from "./components/HookUseContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <HookUseContext>
          <h1>Hooks</h1>
          <HookUseState />
          <HookUseReducer />
          <HookUseEffect />
        </HookUseContext>
      </div>
    </>
  );
}

export default App;
