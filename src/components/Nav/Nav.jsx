import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"


export default function Nav() {
    return (
      <nav>
        <ul>
          <li><img src="little lemon.png" alt="" width="175" height="125" /></li>
          <li><a href="/" className="home">Home</a></li>
          <li><a href="/about" className="about">About</a></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><a href="/reservations" className="reservations">Reservations</a></li>
          <li><a href="/order" className="order">Order Online</a></li>
          <li><a href="/login" className="login">Login</a></li>
        </ul>
      </nav>
    )

  }
