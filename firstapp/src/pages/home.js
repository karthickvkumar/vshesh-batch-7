import React, { useEffect, useState } from "react";
import HeaderComponent from "../components/header";
import axios from "axios";

const HomePage = () => {

  useEffect(() => {
    listingUserProfile();
  }, []);

  const [userProfile, LoadAllProfile] = useState([]);

  const listingUserProfile = () => {
    const url = "https://reqres.in/api/users?page=2";

    axios.get(url)
        .then((response) => {
          const serverData = response.data;
          LoadAllProfile(serverData.data);
        })
        .catch((error) => {
          console.log(error);
          alert("Something went wrong pls try again later");
        })
  }

  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <h1>Welcome to Home Page</h1>
      <table className="customers">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Profile Picture</th>
          </tr>
        </thead>
        <tbody>
          {
            userProfile.map((value, index) => {
              return(
                <tr key={index}>
                  <td>{value.id}</td>
                  <td>{value.email}</td>
                  <td>{value.first_name}</td>
                  <td>{value.last_name}</td>
                  <td>
                    <img src={value.avatar} className="circle-image" />
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default HomePage;