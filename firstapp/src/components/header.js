import React from "react";
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
  return(
    <div className="header">
      <div className="logo">
        <img src={require("../images/Nike-Logo.png")} className="logo-img" />
      </div>
      <div className="menus">
          <NavLink to="/" className="link">Home</NavLink>
          <NavLink to="/about" className="link">About</NavLink>
          <NavLink to="/contact" className="link">Contact</NavLink>
      </div>
    </div>
  )
}

export default HeaderComponent;