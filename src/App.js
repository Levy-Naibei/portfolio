import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import ProjectList from "./components/projects/ProjectList";
import Footer from "./components/Footer";
import Resume from "./components/resume/Resume";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import "./style.css";


const App = () => {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<ProjectList />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;