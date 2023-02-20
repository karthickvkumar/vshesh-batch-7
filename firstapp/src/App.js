import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage></HomePage>}></Route>
        <Route path="about" element={<AboutPage></AboutPage>}></Route>
        <Route path="contact" element={<ContactPage></ContactPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;