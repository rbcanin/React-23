import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Sobre/Home/Home";
import Sobre from "./pages/Sobre/Sobre/Sobre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Sobre/Login/Login";
import Register from "./pages/Sobre/Register/Register";

//pages

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div>
          <BrowserRouter>
            <Navbar />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
