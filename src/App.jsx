import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Contact from "./containers/contact";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">

      {/* Navbar */}
      <Navbar/>

      {/* Main content */}
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route index path="/about" element={<About />}></Route>
        <Route index path="/contact" element={<Contact />}></Route>
        <Route index path="/resume" element={<Resume />}></Route>
        <Route index path="/skills" element={<Skills />}></Route>
        <Route index path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
    </div>
  );
}

export default App;
