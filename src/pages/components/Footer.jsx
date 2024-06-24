import React from 'react'
import { NavigationBar } from '../../components/Navbar'

export default function Footer() {
    return (
        <>
            <div className='bg-black text-white min-h-20 items-center'>
                <div className='text-center flex justify-center mt-4'>
                    <p className=' mt-4 mb-2'>Chat with us at</p>
                </div>
                <div className='flex justify-center mb-2'>
                    <i className="bi bi-whatsapp me-6" style={{ fontSize: "25px" }}></i>
                    <i className="bi bi-envelope me-6" style={{ fontSize: "25px" }}></i>
                    <i className="bi bi-instagram me-6" style={{ fontSize: "25px" }}></i>
                    <i className="bi bi-twitter-x" style={{ fontSize: "25px" }}></i>
                </div>
                <div className='text-center text-sm text-[#bcbcbc]'>
                    <p className='pb-4'>&copy; 2024 Copyright by Eco Film Speed Enterprise (AS0474538T)</p>
                </div>
            </div>
        </>
    )
}
