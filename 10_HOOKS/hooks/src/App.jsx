import { useState } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hooks</h1>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="./Sobre">Sobre</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Sobre />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
