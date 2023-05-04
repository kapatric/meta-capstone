import './App.css';
import React, { useState, useRef, useReducer } from "react";
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import About from './Pages/About/About';
import Menu from './Pages/Menu/Menu';
import Home from './Pages/Home/Home';
import Reserve from './components/Reserve/Reserve';
import Reservations from './Pages/Reservations/Reservations';


function App() {
  
  

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Reservations" element={<Reservations />} />
      </Routes> 
    </>
  );
}

export default App;
