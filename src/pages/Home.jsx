import { useRef } from 'react';
import landingVideo from '../assets/home-landing-loop.mp4'
import About from './About';
import Section from './components/Section';
import Footer from './components/Footer';
import { FullLogo } from '../components/FullLogo';

export default function Home() {

    const aboutRef = useRef(null);

    const handleAboutScroll = () => {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <div className="relative w-full h-screen">
                <video src={landingVideo} autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-extrabold">
                    <DrawOutlineButton className='text-2xl font-extrabold' onClick={handleAboutScroll}>
                        <FullLogo />
                    </DrawOutlineButton>
                </div>
            </div>
            <About ref={aboutRef} />
            <Section />
            <Footer />
        </>
    )
}

const DrawOutlineButton = ({ children, ...rest }) => {
    return (
        <button
            {...rest}
            className="group relative px-4 py-2 font-medium text-black transition-colors duration-[400ms] hover:text-black"
        >
            <span>{children}</span>

            {/* TOP */}
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-white transition-all duration-100 group-hover:w-full" />

            {/* RIGHT */}
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-white transition-all delay-100 duration-100 group-hover:h-full" />

            {/* BOTTOM */}
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-white transition-all delay-200 duration-100 group-hover:w-full" />

            {/* LEFT */}
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-white transition-all delay-300 duration-100 group-hover:h-full" />
        </button>
    );
};
