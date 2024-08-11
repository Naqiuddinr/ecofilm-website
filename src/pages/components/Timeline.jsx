import React from 'react'
import { useNavigate } from 'react-router-dom'
import { videoData } from '../../assets/videoData'

export default function Timeline() {
    return (
        <>
            <div id='timeline' className="container mx-auto p-8">
                <h2 className="text-3xl text-black font-bold mt-10 mb-4">Our Work</h2>
                <div>
                    <WorkDisplay />
                </div>
            </div>
        </>
    )
}

function WorkDisplay() {

    const navigate = useNavigate();

    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4">
                    {Object.entries(videoData).map(([id, video]) => (
                        <div
                            key={id}
                            className="w-full h-auto md:w-1/2 p-0 px-2"
                            onClick={() => navigate(`/video/${id}`)}
                        >
                            <video
                                src={video.loop}
                                autoPlay
                                loop
                                muted
                                className="w-full h-3/4 object-cover hover:filter hover:grayscale cursor-pointer transition-all duration-300"
                            />
                            <p>{video.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
