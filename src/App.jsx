import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";
import Display from "./pages/Display.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import { initSmoothScroll } from './smoothScroll';


export default function App() {

  // useEffect(() => {
  //   initSmoothScroll();
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/video/:id" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );

}
