import React from 'react'
import { NavigationBar } from './components/Navbar'
import image1 from '../assets/about-image-1.jpg'
import Footer from './components/Footer'

export default function AboutUs() {
    return (
        <>
            <NavigationBar />
            <div className="container mx-auto px-24 mt-16 md:mt-20">
                <div className="title mb-6 text-2xl md:text-3xl">
                    <h1>About Us</h1>
                </div>
                <div className="description mb-6">
                    <p className="mb-4">
                        Welcome to Cyber Film Speed,
                    </p>
                    <p>
                        We're all about pushing boundaries and redefining what's possible on screen. Born out of passion for storytelling and relentless drive to create, we're not your typical film production company—we're a creative powerhouse that thrives on doing things differently.
                    </p>
                </div>
                <div className="description mb-10">
                    <p className="mb-4">
                        Our team is made up of innovators, dreamers, and doers. We're obsessed with crafting stories that don't just grab attention—they make a statement. Whether we're shooting a high-octane short film, a mind-bending commercial, or a docu-series that dives deep into uncharted territory, we bring the same energy and authenticity that fuels everything we do.
                    </p>
                    <p className="mb-4">
                        At Cyber Film Speed, we believe that the best stories are the ones that break the mold. We work closely with our clients to turn bold ideas into visually stunning realities. We're not here to follow trends—we're here to set them.
                    </p>
                    <p>
                        Let's shake up the world together, one epic video at a time.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-between mb-20">
                    <img src={image1} alt="photo 1" className="w-full md:w-96 border border-black mb-4 md:mb-4" />
                    <img src={image1} alt="photo 2" className="w-full md:w-96 border border-black" />
                </div>
            </div>
            <Footer />
        </>
    )
}
