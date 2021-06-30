import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineShoppingCart, HiOutlineMenu } from 'react-icons/hi'


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
                                    <HiOutlineMenu size={24}/>
                                </button>
                            </li>
                            <li className="ml-6">
                                <Link
                                    id="header-cart"
                                    className="flex items-center justify-center w-8 h-8 text-black md:text-black hover:text-blue-700"
                                    to="/"
                                >
                                    <HiOutlineShoppingCart size={24}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
