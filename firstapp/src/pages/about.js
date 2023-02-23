import React, {useState} from "react";
import HeaderComponent from "../components/header";
import axios from "axios";

const AboutPage = () => {

  const [profile, submitProfile] = useState({
    name : "",
    job : ""
  });

  const handleInput = (event) => {
    submitProfile({...profile, [event.target.name] : event.target.value})
  }

  const CreateAccount = () => {

    const url = "https://reqres.in/api/users";

    axios.post(url, profile)
      .then((response) => {
        const serverResult = response.data;
        console.log(serverResult);
        alert('Profile has been created');
      })
      .catch((error) => {
        console.log(error);
        alert('Somethings went pls try again later');
      })
  }

  const UpdateAccount = () => {
    const url = "https://reqres.in/api/users/2";

    axios.put(url, profile)
      .then((response) => {
        const serverData = response.data;
        console.log(serverData);
        alert('Profile has been updated successfully');
      })
      .catch((error) => {
        console.log(error);
        alert('Somethings went pls try again later');
      })
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
          <button onClick={() => UpdateAccount()}>Update Profile</button>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;