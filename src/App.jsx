import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import Apropos from "./pages/Apropos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logement" element={<Logement />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
