import React from "react";
import "./Home.css"
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}