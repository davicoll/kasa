import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import Apropos from "./pages/Apropos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  //logements state
  const [logements, setLogements] = useState([]);

  //Setstate logements
  useEffect(() => {
    const getLogements = async () => {
      const logementsFromServer = await fetchLoges();
      setLogements(logementsFromServer);
    };

    getLogements();
  }, []);

  //Fetch all logements
  const fetchLoges = async () => {
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
          exact
          path="/logement/:id"
          element={<Logement logements={logements} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
