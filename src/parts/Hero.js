import React from 'react'

export default function Hero() {
    return (
        <section className="flex items-center px-7 md:px-28">
            <div
                className="w-full absolute z-20 inset-0 md:relative text-center md:text-left md:w-1/2 flex flex-col justify-center hero-caption"
            >
                <h2 className="text-md md:text-md leading-tight my-3 font-semibold text-blue-700">
                    FOR YOUR BEST MOMENT
                </h2>
                <h1 className="text-3xl md:text-7xl text-white md:text-black md:leading-tight font-bold">
                    DON’T MISS YOUR TIME
                </h1>
                <h2 className="px-8 text-sm text-white md:text-black md:px-0 md:text-sm my-6 tracking-wide">
                    On WatchMe you will get a watch that can make every moment not to be missed and make every moment count, choose a brand that suits your preferences
                </h2>
                <div>
                    <a
                        href="#browse-the-room"
                        className="bg-blue-700 text-white hover:bg-blue-600 hover:text-white rounded px-8 py-3 mt-4 inline-block flex-none transition duration-200"
                    >SEE COLLECTIONS</a
                    >
                </div>
            </div>
            <div className="w-full inset-0 md:relative md:pl-20 md:w-1/2 object-right">
                <div class="relative hero-image inset-0">
                <div class="overlay inset-0 bg-black md:bg-transparent opacity-75 z-10"></div>
                    <img
                        src="images/hero-img.png"
                        alt="hero 1"
                        class="inset-0 md:relative object-cover object-center"
                    />
                </div>
            </div>
        </section>
    )
}
