import React, { useRef } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Layout from "./components/Layout";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  const aboutRef = useRef(null);
  const navigate = useNavigate();
  const scrollToAbout = (value) => {
    navigate('/#'+ value); 
  };

  return (
    <>
      <Navbar handleLinkClick={scrollToAbout} />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Header />} />
        <Route path="about" element={<Header ref={aboutRef} />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="project/:id" element={<ProjectDetail />} />
        <Route path="*" element={<Header />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
