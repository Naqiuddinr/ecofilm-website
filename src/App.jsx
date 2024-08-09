import React, { useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import { Logo } from "./components/Logo.jsx";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";
import Display from "./pages/Display.jsx";
import AboutUs from "./pages/AboutUs.jsx";


export default function App() {

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
