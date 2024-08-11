import React from 'react'
import { useParams } from 'react-router-dom'
import { videoData } from '../assets/videoData'
import { NavigationBar } from './components/Navbar';
import Footer from './components/Footer';

export default function Display() {

    const { id } = useParams();
    const video = videoData[id];

    return (
        <>
            <div>
                <NavigationBar />
            </div>
            <div className='mt-16 max-w-3xl mx-auto'>
                <div className='video-container aspect-video relative'>
                    <iframe
                        className='absolute top-0 left-0 w-full h-full'
                        src="https://www.youtube.com/embed/yyxRWhyMK4w?si=ZxhdWzUVije54xOP"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                <div>
                    <h1 className='mt-4'>
                        {video.title}
                    </h1>
                    <h2 className='mt-2'>
                        {video.description}
                    </h2>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
