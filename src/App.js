import './App.css';
import React from 'react';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import About from './Pages/About/About';
import Menu from './Pages/Menu/Menu';

function App() {
  
  return (
    <>
      <Nav/>
      <Header/>
      <Main />
      <Footer /> 
    </>
  );
}

export default App;
