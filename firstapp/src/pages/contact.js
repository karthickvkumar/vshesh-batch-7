import React, {useState} from "react";
import HeaderComponent from "../components/header";

const ContactPage = () => {

  // creating a state variable 
  // const [variableName, functionName] = useState(initalData);

  const [form, accountSubmition] = useState({
    username: "",
    emailId : "",
    password : "",
    gender: "",
    date_of_birth: "",
    education: "",
    address: ""
  });

  const submitForm = () => {
    // print -> stateVaiable_vaiableName
    console.log(form);
  }

  const handleInput = (event) => {
    // stateVariable_functionName({...stateVaiable_varaibleName, [event.target.name] : event.target.value })
    accountSubmition({...form, [event.target.name] : event.target.value });
  }

  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <h1>Welcome to Contact Page</h1>
      <div>
        <div className="space">
          <label className="lable">Enter your Name :</label>
          <input type="text" placeholder="Enter your name" onChange={handleInput} name="username" />
        </div>
        <div className="space">
          <label className="lable">Enter your Email ID :</label>
          <input type="text" placeholder="Enter your email id" onChange={handleInput} name="emailId" />
        </div>
        <div className="space">
          <label className="lable">Enter your Password :</label>
          <input type="password" placeholder="Enter your passord" onChange={handleInput} name="password"/>
        </div>
        <div className="space">
          <label className="lable">Select your Gender :</label>
          <input type="radio" onChange={handleInput} name="gender" value="Male"/>Male
          <input type="radio" onChange={handleInput} name="gender" value="Female"/>Female
          <input type="radio" onChange={handleInput} name="gender" value="Others"/>Others
        </div>
        <div className="space">
          <label className="lable">Select your DOB :</label>
          <input type="date" onChange={handleInput} name="date_of_birth"/>
        </div>
        <div className="space">
          <label className="lable">Select your Education :</label>
          <select onChange={handleInput} name="education">
            <option disabled selected>Select any value</option>9
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
          <textarea placeholder="Enter your address" onChange={handleInput} name="address"></textarea>
        </div>
        <div className="space">
          <button onClick={() => submitForm()}>Submit Form</button>
        </div>
      </div>
    </div>
  )
}

export default ContactPage;