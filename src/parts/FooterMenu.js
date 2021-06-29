import React from 'react'
import { Link } from 'react-router-dom'


export default function FooterMenu() {
    return (
        <section className="">
            <div className="border-t border-b border-gray-200 py-12 mt-16 px-4">
                <aside className="px-7 md:px-28">
                    <div className="flex flex-wrap -mx-4 justify-center">
                        <div className="w-full md:w-3/12 mb-4 md:mb-0 accordion">
                            <h5 className="text-lg font-medium mb-2 relative">Collections</h5>
                            <ul className="h-0 invisible md:h-auto md:visible overflow-hidden">
                                <li>
                                    <Link to="/" className="hover:text-blue-700 text-sm font-normal py-1 block">All Collections</Link>
                                </li>
                                <li>
                                    <Link to="/" className="hover:text-blue-700 text-sm font-normal py-1 block">Sale</Link>
                                </li>
                                <li>
                                    <Link to="/" className="hover:text-blue-700 text-sm font-normal py-1 block">Exclusive</Link>
                                </li>
                                <li>
                                    <Link to="/" className="hover:text-blue-700 text-sm font-normal py-1 block">Modern</Link>
                                </li>
                                <li>
                                    <Link to="/" className="hover:text-blue-700 text-sm font-normal py-1 block">Classic</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-3/12 mb-4 md:mb-0 accordion">
                            <h5 className="text-lg font-medium mb-2 relative">Services</h5>
                            <ul className="h-0 invisible md:h-auto md:visible overflow-hidden">
                                <li>
                                    <Link to="/" className="hover:text-blue-700 text-sm font-normal py-1 block">Help</Link>
                                </li>
                                <li>
                                    <Link to="/" className="hover:text-blue-700 text-sm font-normal py-1 block">Contact Us</Link>
                                </li>
                                <li>
                                    <Link to="/" className="hover:text-blue-700 text-sm font-normal py-1 block">Size Information</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-3/12 mb-4 md:mb-0 accordion">
                            <h5 className="text-lg font-medium mb-2 relative">About Us</h5>
                            <ul className="h-0 invisible md:h-auto md:visible overflow-hidden">
                                <li>
                                    <Link href="#" className="hover:text-blue-700 text-sm font-normal py-1 block">Our Story</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-blue-700 text-sm font-normal py-1 block">Carrer</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-blue-700 text-sm font-normal py-1 block">Events</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-blue-700 text-sm font-normal py-1 block">Blog</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-blue-700 text-sm font-normal py-1 block">Store Location</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="w-60 md:w-60 mb-4 md:mb-0">
                            <div className="grid grid-flow-col grid-cols-4 grid-rows-2 gap-2">
                                <img src="images/visa.png" alt="" className="" />
                                <img src="images/master-card.png" alt="" className="" />
                                <img src="images/bni.png" alt="" className="" />
                                <img src="images/bri.png" alt="" className="" />
                                <img src="images/bca.png" alt="" className="" />
                                <img src="images/ovo.png" alt="" className="" />
                                <img src="images/gopay.png" alt="" className="" />
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    )
}
