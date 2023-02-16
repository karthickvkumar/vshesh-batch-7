import React from "react";
import HeaderComponent from "./components/header";
import FooterComponent from "./components/footer";

const App = () => {
  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <h1>Good Morning!</h1>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default App;