import { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import { Logo } from "../../components/Logo.jsx";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export function NavigationBar({ className }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        { label: "About Us", href: "about" },
        { label: "Our Work", href: "#timeline" },
        { label: "Contact", href: "#contact" },
    ];

    const handleHomeClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    return (
        <>
            <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-150 ${className}`}>
                <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-white bg-opacity-10">
                    <NavbarContent>
                        <NavbarMenuToggle
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            className="sm:hidden"
                        />
                        <NavbarBrand onClick={handleHomeClick} className="cursor-pointer">
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
                                    onClick={() => setIsMenuOpen(false)}
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