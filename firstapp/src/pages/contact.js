import React from "react";
import HeaderComponent from "../components/header";

const ContactPage = () => {
  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <h1>Welcome to Contact Page</h1>
      <div>
        <div className="space">
          <label className="lable">Enter your Name :</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="space">
          <label className="lable">Enter your Email ID :</label>
          <input type="text" placeholder="Enter your email id" />
        </div>
        <div className="space">
          <label className="lable">Enter your Password :</label>
          <input type="text" placeholder="Enter your passord" />
        </div>
        <div className="space">
          <label className="lable">Select your Gender :</label>
          <input type="radio" />Male
          <input type="radio" />Female
          <input type="radio" />Others
        </div>
        <div className="space">
          <label className="lable">Select your DOB :</label>
          <input type="date" />
        </div>
        <div className="space">
          <label className="lable">Select your Education :</label>
          <select>
            <option>B.E Compter Science</option>
            <option>B.E Mechanical</option>
            <option>B.Tech IT</option>
            <option>B.SC Computer Science</option>
            <option>M.Tech Cloud</option>
            <option>M.Phil</option>
          </select>
        </div>
        <div className="space">
          <label className="lable">Enter your Address :</label>
          <textarea placeholder="Enter your address"></textarea>
        </div>
        <div className="space">
          <button>Submit Form</button>
        </div>
      </div>
    </div>
  )
}

export default ContactPage;