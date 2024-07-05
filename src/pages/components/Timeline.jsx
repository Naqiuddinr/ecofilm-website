import React from 'react'
import landingVideo from '../../assets/home-landing-loop.mp4'

export default function Timeline() {
    return (
        <>
            <div id='timeline' className="container mx-auto p-8">
                <h2 className="text-3xl text-black font-bold mt-10 mb-4">Our Work</h2>
                <div>
                    <WorkDisplay />
                    <WorkDisplay />
                </div>
            </div>
        </>
    )
}


function WorkDisplay() {

    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full h-auto md:w-1/2 p-0">
                        <video src={landingVideo} autoPlay loop muted className="w-full h-3/4 object-cover" />
                        <p>Sample Video 1</p>
                    </div>
                    <div className="w-full md:w-1/2 p-0">
                        <video src={landingVideo} autoPlay loop muted className="w-full h-3/4 object-cover" />
                        <p>Sample Video 2</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full h-auto md:w-1/2 p-0">
                        <video src={landingVideo} autoPlay loop muted className="w-full h-3/4 object-cover" />
                        <p>Sample Video 3</p>
                    </div>
                    <div className="w-full md:w-1/2 p-0">
                        <video src={landingVideo} autoPlay loop muted className="w-full h-3/4 object-cover" />
                        <p>Sample Video 4</p>
                    </div>
                </div>
            </div>
        </>
    )
}
