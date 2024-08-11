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
                                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                            </h2>
                        </div>
                    </div>
                    <div>
                        {/* <Footer /> */}
                    </div>
                </div>
            </div>
        </>
    )
}
