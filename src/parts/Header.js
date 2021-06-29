import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <header className="relative w-full z-50 px-7 md:px-28 py-5">
            <div className="container mx-auto py-5">
                <div className="flex flex-stretch items-center">
                    <div className="w-56 items-center flex">
                        <img
                            src="/images/logo.svg"
                            alt="WatchMe | FOR YOUR BEST MOMENT"
                        />
                        <span className="font-semibold ml-5 text-lg">WatchMe</span>
                    </div>
                    <div className="w-full"></div>
                    <div className="w-auto">
                        <ul
                            className="fixed bg-white inset-0 flex flex-col invisible items-center justify-center opacity-0 md:visible md:flex-row md:bg-transparent md:relative md:opacity-100 md:flex md:items-center"
                            id="menu"
                        >
                            <li className="mx-3 py-6 md:py-0 text-sm font-semibold">
                                <Link to="/" className="text-black md:text-black hover:text-blue-700"
                                >Home
                                </Link>
                            </li>
                            <li className="mx-3 py-6 md:py-0 text-sm font-semibold">
                                <Link to="/" className="text-black md:text-black hover:text-blue-700"
                                >Brand
                                </Link>
                            </li>
                            <li className="mx-3 py-6 md:py-0 text-sm font-semibold">
                                <Link to="/" className="text-black md:text-black hover:text-blue-700"
                                >Watch
                                </Link>
                            </li>
                            <li className="mx-3 py-6 md:py-0 text-sm font-semibold">
                                <Link to="/" className="text-black md:text-black hover:text-blue-700"
                                >New&nbsp;Products
                                </Link>
                            </li>
                            <li className="mx-3 py-6 md:py-0 text-sm font-semibold">
                                <Link to="/" className="text-black md:text-black hover:text-blue-700"
                                >Collections
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-auto">
                        <ul className="items-center flex">
                            <li className="ml-6 block md:hidden">
                                <button
                                    id="menu-toggler"
                                    className="relative flex z-50 items-center justify-center w-8 h-8 text-black md:text-white focus:outline-none"
                                >
                                    <svg
                                        className="fill-current"
                                        width="26"
                                        height="24"
                                        viewBox="0 0 26 24"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </svg>
                                </button>
                            </li>
                            <li className="ml-6">
                                <Link
                                    id="header-cart"
                                    className="flex items-center justify-center w-8 h-8 text-black md:text-black hover:text-blue-700"
                                    to="/"
                                >
                                    <svg
                                        className="fill-current"
                                        width="26"
                                        height="24"
                                        viewBox="0 0 26 24"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
