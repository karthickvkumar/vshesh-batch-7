import React, {useState} from "react";
import HeaderComponent from "../components/header";

const AboutPage = () => {

  const [profile, submitProfile] = useState({
    name : "",
    job : ""
  });

  const handleInput = (event) => {
    submitProfile({...profile, [event.target.name] : event.target.value})
  }

  const CreateAccount = () => {
    console.log(profile);
  }

  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <h1>Welcome to About Page</h1>
      <div>
        <div className="space">
          <label className="lable">Enter your Name :</label>
          <input type="text" placeholder="Enter your name" onChange={handleInput} name="name" />
        </div>
        <div className="space">
          <label className="lable">Enter your Job :</label>
          <input type="text" placeholder="Enter your job" onChange={handleInput} name="job" />
        </div>
        <div className="space">
          <button onClick={() => CreateAccount()}>Submit Profile</button>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;