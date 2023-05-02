import './App.css';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import About from './Pages/About/About';
import Menu from './Pages/Menu/Menu';
import {Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <>
      <Nav/>
      <Header/>
      <Main />
      <Routes>
        <Route path="/" />
        <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer /> 
    </>
  );
}

export default App;
