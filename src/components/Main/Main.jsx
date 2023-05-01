import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div className="container">
      <div className="grid-item">
        <p>Specials</p>
      </div>
      <div className="grid-item"></div>
      <div className="grid-item">
        <button>Order Online</button>
      </div>
      <div className="grid-item">
        <img src="greek.jpeg" alt="" width="275" height="200" />
        <h3>Greek Salad&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$12.99</h3>
        <p>
          The famous greek salad of crispy<br></br>lettuce, peppers, olives and{" "}
          <br></br>our Chicago style feta cheese, garnished with<br></br>
          crunchy garlic and rosemary croutons.
        </p>
      </div>
      <div className="grid-item">
        <img src="cake.jpeg" alt="" width="275" height="200" />
        <p>
          This comes straight from grandma's recipe book,<br></br> every last
          ingredient has been sourced <br></br>and is as authentic as can be
          imagined.
        </p>
      </div>
      <div className="grid-item">
        <img src="bruscetta.jpeg" alt="" width="275" height="200" />
        <p>
          Our Bruschetta is made from grilled bread <br></br> that has been
          smeared with garlic <br></br>and seasoned with salt and olive oil.
        </p>
      </div>
    </div>
  );
}
