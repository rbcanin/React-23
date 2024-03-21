import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>Curso de React</h1>
        <BrowserRouter />
        <Routes />
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Routes />
        <BrowserRouter />
      </div>
    </>
  );
}

export default App;
