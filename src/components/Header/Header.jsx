import React from "react";
import "./Header.css";
import {Link} from "react-router-dom"

export default function Header() {

  
  return (
    <header>
      <div className="lemon">
        <div>
      <h1>Little Lemon</h1>
      <p><h5>New York City</h5> 
      Lorem ipsum dolor sit amet, consectetur<br></br>
        adipiscing elit, sed do eiusmod tempor<br></br>
        incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="btn">
      <Link to="/Reservations"><button>Reserve A Table</button></Link>
        </div>
      </div>
    </header>
  );
}
