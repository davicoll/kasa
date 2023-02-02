import React from "react";

import Home from "./pages/Home";
import Logement from "./pages/Logement";
import Apropos from "./pages/Apropos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    const getLogements = async () => {
      const logementsFromServer = await fetchLoge();
      setLogements(logementsFromServer);
    };

    getLogements();
  }, []);

  const fetchLoge = async () => {
    const res = await fetch("data.json", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    return data;
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home logements={logements} />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route
          path="/logement/*"
          element={<Logement logements={logements} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
