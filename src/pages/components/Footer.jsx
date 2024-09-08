import React from 'react'
import { NavigationBar } from './Navbar'

export default function Footer() {
    return (
        <>
            <div id='contact' className='bg-black text-white min-h-40 items-center'>
                <div className='text-center flex justify-center mt-4'>
                    <p className=' mt-6 mb-2'>Chat with us at</p>
                </div>
                <div className='flex justify-center mb-2'>
                    <a href="https://wa.me/1119757531" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-whatsapp me-6" style={{ fontSize: "25px" }}></i>
                    </a>
                    <a href="mailto:someone@mail.com" onclick="window.location=another.html">
                        <i className="bi bi-envelope me-6" style={{ fontSize: "25px" }}></i>
                    </a>
                    <a href='https://www.instagram.com/cyber_filmspeed/' target='_blank' rel='noopener noreferrer'>
                        <i className="bi bi-instagram me-6" style={{ fontSize: "25px" }}></i>
                    </a>
                    <i className="bi bi-twitter-x" style={{ fontSize: "25px" }}></i>
                </div>
                <div className='text-center text-sm text-[#bcbcbc]'>
                    <p className='pb-4'>&copy; 2024 Copyright by Eco Film Speed Enterprise (AS0474538T)</p>
                </div>
            </div>
        </>
    )
}
