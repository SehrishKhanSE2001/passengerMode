import React from "react";
import NavbarComp from "./components/NavbarComp";
import Home from "./components/Home";
import PassengerMode from "./components/PassengerMode"
import About from "./components/About"

import { Routes, Route } from "react-router-dom"
import BookedRideH from "./components/BookedRideH";



function App() {
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route path="PassengerMode" element={<PassengerMode />} />
        <Route path="/About" element={<About />} />
        <Route path="/BookedRideH" element={<BookedRideH />} />
        
      </Routes>


    </>
  );
}
{/* <Routes>
<Route exact path="/" element={<Home />} />
<Route path="PassengerMode" element={<PassengerMode />} />
</Routes> */}

export default App;
