import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import 'tailwindcss/tailwind.css';

const AnimatedDiv = ({ to, children }) => {
    const controls = useAnimation();
    const textControls = useAnimation();

    const handleMouseEnter = () => {
        controls.start({
            backgroundPosition: "100% 0",
            transition: { duration: 0.5 },
        });
        textControls.start({
            color: "#000000", // Change text color to black
            transition: { duration: 0.5 },
        });
    };

    const handleMouseLeave = () => {
        controls.start({
            backgroundPosition: "0 0",
            transition: { duration: 0.5 },
        });
        textControls.start({
            color: "#ffffff", // Change text color back to white
            transition: { duration: 0.5 },
        });
    };

    return (
        <motion.div
            className="border border-black p-4 cursor-pointer overflow-hidden relative"
            initial={{ backgroundPosition: "0 0" }}
            animate={controls}
            style={{
                background: "linear-gradient(90deg, black 50%, white 50%)",
                backgroundSize: "200% 100%",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link to={to}>
                <motion.h2
                    className="text-3xl font-bold mt-10 mb-4 relative z-10"
                    initial={{ color: "#ffffff" }}
                    animate={textControls}
                >
                    {children}
                </motion.h2>
            </Link>
        </motion.div>
    );
};

const Section = () => {
    return (

        <div className="container mx-auto p-8">
            <h2 className="text-3xl text-black font-bold mt-10 mb-4">Our Work</h2>
            <div className="flex flex-col space-y-4">
                <div className="transition border border-black bg-black text-white hover:bg-white hover:text-black hover:cursor-pointer hover:translate-x-12">
                    <h2 className="text-3xl font-bold mt-12 mb-8 relative z-10 ms-4 ">
                        Music Videos
                    </h2>
                </div>
                <div className="transition border border-black bg-black text-white hover:bg-white hover:text-black hover:cursor-pointer hover:translate-x-12">
                    <h2 className="text-3xl font-bold mt-12 mb-8 relative z-10 ms-4">
                        Product Shoot
                    </h2>
                </div>
                <div className="transition border border-black bg-black text-white hover:bg-white hover:text-black hover:cursor-pointer hover:translate-x-12">
                    <h2 className="text-3xl font-bold mt-12 mb-8 relative z-10 ms-4">
                        Advertisement
                    </h2>
                </div>
                <div className="transition border border-black bg-black text-white hover:bg-white hover:text-black hover:cursor-pointer hover:translate-x-12">
                    <h2 className="text-3xl font-bold mt-12 mb-8 relative z-10 ms-4">
                        Campaign Videos
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Section;
