import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { videoData } from '../assets/videoData'
import { NavigationBar } from './components/Navbar';
import Footer from './components/Footer';

export default function Display() {

    const { id } = useParams();
    const video = videoData[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="min-h-screen flex flex-col">
                <NavigationBar />
                <div className="flex-grow flex items-start justify-center pt-16">
                    <div className='max-w-4xl w-full'>
                        <div className='video-container aspect-video relative'>
                            <iframe
                                className='absolute top-0 left-0 w-full h-full'
                                src={video.link}
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
                </div>
            </div>
            <Footer />
        </>
    )
}
