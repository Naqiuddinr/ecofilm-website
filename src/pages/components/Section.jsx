import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import 'tailwindcss/tailwind.css';

const AnimatedDiv = ({ to, children }) => {

    return (
        <>
            <Link to={to}>
                <div className="transition border border-black bg-black text-white hover:bg-white hover:text-black hover:cursor-pointer hover:translate-x-12">
                    <h2 className="text-3xl font-bold mt-12 mb-8 relative z-10 ms-4 ">
                        {children}
                    </h2>
                </div>
            </Link>
        </>
    );
};

const Section = () => {
    return (

        <div className="container mx-auto p-8">
            <h2 className="text-3xl text-black font-bold mt-4 mb-4">Our Work</h2>
            <div className="flex flex-col space-y-4">
                <AnimatedDiv to={"#"}>Music Video</AnimatedDiv>
                <AnimatedDiv to={"#"}>Product Shoot</AnimatedDiv>
                <AnimatedDiv to={"#"}>Advertisement</AnimatedDiv>
                <AnimatedDiv to={"#"}>Video Campaign</AnimatedDiv>
            </div>
        </div>
    );
};

export default Section;
