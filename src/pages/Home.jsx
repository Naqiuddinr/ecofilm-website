

export default function Home() {
    return (
        <div className="container m-20">
            <div>Home</div>
            <button className="border-2 border-solid border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none">
                Hover me
            </button>
            <DrawOutlineButton>Hello</DrawOutlineButton>
        </div>
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
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

            {/* RIGHT */}
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

            {/* BOTTOM */}
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

            {/* LEFT */}
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
        </button>
    );
};
