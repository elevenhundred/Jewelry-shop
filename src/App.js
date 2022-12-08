import "./styles.css";
//import { useState } from "react";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Contacts from "./Contacts";

import Shop from "./Shop";

export default function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/" className="link">
            Выбрать украшения
          </Link>
          <Link to="/about" className="link">
            О нас
          </Link>
          <Link to="/contacts" className="link">
            Контакты
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </div>
  );
}
