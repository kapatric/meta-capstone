import React from "react";
import "./Reserve.css";

export default function Reserve() {
  return (
    <center>
    <form className="reserve">
      <h3>Make a Resevation</h3>
      <label>
        Date: <input type="date" id="date"></input>
      </label>
      Time:{" "}
      <select id="res-time">
        <option>11:00</option>
        <option>12:00</option>
        <option>1:00</option>
        <option>2:00</option>
        <option>3:00</option>
        <option>4:00</option>
        <option>5:00</option>
        <option>6:00</option>
        <option>7:00</option>
        <option>8:00</option>
        <option>9:00</option>
        <option>10:00</option>
      </select>
      <br></br>
      <label>
        Party Size: 
        <input
          type="number"
          placeholder="1"
          min="1"
          max="8"
          id="guests"
        ></input>
      </label>
      <label for="occasion"></label>
      Occasion:{" "}
      <select id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Engagement</option>
        <option>Retirement</option>
      </select>
      <br></br>
      <br></br>
      <center>
        <input className="submit" type="submit" value="Make a reservation" />
      </center>
      </form>
      </center>
  );
}
