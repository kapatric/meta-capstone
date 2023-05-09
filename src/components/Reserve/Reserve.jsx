import React, { useState, useRef } from "react";
import "./Reserve.css";

export default function Reserve() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const dateInputRef = useRef(null);
  const timeInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  return (
    <center>
      <form className="reserve">
        <h3>Make a Resevation</h3>
        <label for="date">Date: {date}</label>
        <input
          type="date"
          id="date"
          onChange={handleChange}
          ref={dateInputRef}
        />
        <br></br>
        <br></br>
        <label for="res_time">Time: {time} </label>
        <select id="res_time" onChange={handleTime} ref={timeInputRef}>
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
        <br></br>
        <label for="guests">Party Size: </label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="8"
          id="guests"
        ></input>
        <br></br>
        <br></br>
        <label for="occasion">Occasion: </label>
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Retirement</option>
          <option>Get Together</option>
          <option>Just Dinner</option>
        </select>
        <br></br>
        <br></br>
        <label for="phone-number">Phone: </label>
        <input
          type="number"
          id="phone_number"
          name="phone_number"
          minLength={10}
          maxLength={10}
        />
        <label for="user_email">Email: </label>
        <input type="email" id="user_email" name="user_email" />
        <br></br>
        <br></br>
        <center>
          <input className="submit" type="submit" value="Make a reservation" />
        </center>
      </form>
    </center>
  );
}
