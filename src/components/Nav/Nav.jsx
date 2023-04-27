import React from "react";
import "./Nav.css"


export default function Nav() {

return (
  <nav>
    <ul>
    <li><img src="little lemon.png" alt="" width="175" height="125"/></li>
      <li><a href="/" className="home">Home</a></li>
      <li><a href="" className="about">About</a></li>
      <li><a href="" className="menu">Menu</a></li>
      <li><a href="" className="reservations">Reservations</a></li>
      <li><a href="" className="order">Order Online</a></li>
      <li><a href="" className="login">Login</a></li>
    </ul>
  </nav>
)

}