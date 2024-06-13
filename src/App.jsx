import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import { Logo } from "./Logo.jsx";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";


export function Layout() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Work", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" }
  ];

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen} >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Logo />
            <p className="font-bold text-inherit">ECO FILM SPEED</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>
              <Link color="foreground" href={item.href} aria-current={item.ariaCurrent}>
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link
                color={"foreground"}
                className="w-full"
                href={item.href}
                size="lg"
                aria-current={item.ariaCurrent}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <Outlet />
    </>
  );
}

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );

}
