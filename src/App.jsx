import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Forecasting from "./pages/Forecasting";
import About from "./pages/About";
import "./styles/App.css";

const App = () => (
  <Router>
    <Navbar />
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forecasting" element={<Forecasting />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    <Footer />
  </Router>
);

export default App;
