import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Sobre/Home/Home";
import Sobre from "./pages/Sobre/Sobre/Sobre";

//pages

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div>
          <BrowserRouter>
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
