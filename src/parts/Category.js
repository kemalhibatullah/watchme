import React from 'react'
import { Link } from 'react-router-dom'


export default function Category() {
    return (
        <section className="flex px-7 md:px-28 mb-20" id="browse-the-room">
            <div className="container mx-auto">
                <div className="container mx-auto mb-4">
                    <div className="flex justify-center text-center mb-4">
                        <h3 className="text-3xl capitalize font-semibold">
                            Choose the best category
                        </h3>
                    </div>
                </div>
                <div className="grid grid-rows-2 grid-cols-9 gap-4 mt-16">
                    <div
                        className="relative flex flex-row col-span-9 row-span-1 md:col-span-4 card rounded-xl"
                        style={{ height: "180px" }}
                    >
                        <div className="flex flex-row text-center h-full w-full bg-yellow-200 card-shadow rounded-xl">
                            <div className="order-1 h-full z-10 self-center">
                                <img src="images/modern.png" alt="" className="mx-auto h-full object-cover w-full" />
                            </div>
                            <div className="order-2 self-center p-10">
                                <h1 className="text-black text-2xl font-semibold">Modern Collections</h1>
                                
                            </div>
                        </div>
                        <Link to="details.html" className="stretched-link">
                            {/* <!-- fake children --> */}
                        </Link>
                    </div>
                    <div
                        className="relative flex flex-row h-48 md:h-full col-span-9 row-span-1 md:col-span-5 md:row-span-2 card"
                        // style={{ height: "180px" }}
                    >
                        <div className="flex flex-row text-center h-full w-full bg-gray-200 card-shadow rounded-xl">
                            <div className="order-1 h-full z-10 self-center">
                                <img src="images/exclusive.png" alt="" className="h-full object-cover w-full" />
                            </div>
                            <div className="order-2 self-center p-10">
                                <h1 className="text-black text-2xl font-semibold">The Exclusive Collections</h1>
                                
                            </div>
                        </div>
                        <Link to="details.html" className="stretched-link">
                            {/* <!-- fake children --> */}
                        </Link>
                    </div>
                    <div
                        className="relative flex flex-row col-span-9 row-span-1 md:col-span-4 card rounded-xl"
                        style={{ height: "180px" }}
                    >
                        <div className="flex flex-row text-center h-full w-full bg-pink-200 card-shadow rounded-xl">
                            <div className="order-2 h-full z-10 self-center">
                                <img src="images/classic.png" alt="" className="mx-auto h-full object-cover w-full" />
                            </div>
                            <div className="order-1 self-center p-10">
                                <h1 className="text-black text-2xl font-semibold">Classic Collections</h1>
                                
                            </div>
                        </div>
                        <Link to="details.html" className="stretched-link">
                            {/* <!-- fake children --> */}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
