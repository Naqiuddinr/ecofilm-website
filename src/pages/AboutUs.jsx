import React from 'react'
import { NavigationBar } from './components/Navbar'
import image1 from '../assets/about-image-1.jpg'
import Footer from './components/Footer'

export default function AboutUs() {
    return (
        <>
            <NavigationBar />
            <div className="container mt-20 mx-40">
                <div className="title mt-4 mx-8 text-2xl">
                    <h1>About Us</h1>
                </div>
                <div className="description 1 mt-4 ms-8 me-60">
                    <p>
                        Welcome to Cyber Film Speed,
                        <br />
                        <br />
                        <p>
                            We&apos;re all about pushing boundaries and redefining what&apos;s possible on screen. Born out of passion for storytelling and relentless drive to create, we&apos;re not your typical film production companywe&apos;re a creative powerhouse that thrives on doing things differently.
                        </p>
                    </p>
                </div>
                <div className="description 2 mt-4 ms-8 me-60 mb-10">
                    <p>
                        Our team is made up of innovators, dreamers, and doers. We&apos;re obsessed with crafting stories that don&apos;t just grab attention—they make a statement. Whether we&apos;re shooting a high-octane short film, a mind-bending commercial, or a docu-series that dives deep into uncharted territory, we bring the same energy and authenticity that fuels everything we do.
                        <br />
                        <br />
                        At Cyber Film Speed, we believe that the best stories are the ones that break the mold. We work closely with our clients to turn bold ideas into visually stunning realities. We&apos;re not here to follow trends—we&apos;re here to set them.
                        <br />
                        <br />
                        Let&apos;s shake up the world together, one epic video at a time.
                    </p>
                </div>
                <div className="flex photo justify-between ms-16 me-60 pe-16 mt-8 mb-20">
                    <img src={image1} alt="photo 1" className='w-96 border border-black' />
                    <img src={image1} alt="photo 1" className='w-96 border border-black' />
                </div>
            </div>
            <Footer />
        </>
    )
}
