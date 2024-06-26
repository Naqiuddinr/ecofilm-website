import { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import { Logo } from "../../components/Logo.jsx";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

export function NavigationBar({ className }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { label: "About Us", href: "#about" },
        { label: "Our Work", href: "#work" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <>
            <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-150 ${className}`}>
                <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-white bg-opacity-10 border-b-1">
                    <NavbarContent>
                        <NavbarMenuToggle
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            className="sm:hidden"
                        />
                        <NavbarBrand>
                            <Logo />
                            <p className="ms-2 font-bold text-black">ECO FILM SPEED</p>
                        </NavbarBrand>
                    </NavbarContent>

                    <NavbarContent className="hidden sm:flex gap-4" justify="end">
                        {menuItems.map((item, index) => (
                            <NavbarItem key={index}>
                                <Link className="text-black" href={item.href} aria-current={item.ariaCurrent}>
                                    {item.label}
                                </Link>
                            </NavbarItem>
                        ))}
                    </NavbarContent>

                    <NavbarMenu className="bg-neutral-900 bg-opacity-10 max-h-[20vh] overflow-y-auto p-4">
                        {menuItems.map((item, index) => (
                            <NavbarMenuItem key={index}>
                                <Link
                                    className="w-full text-black"
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
            </div>
            <Outlet />
        </>
    );
}