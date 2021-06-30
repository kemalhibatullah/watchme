import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineChevronRight } from 'react-icons/hi'

export default function Promo() {
    return (
        <section className="px-7 md:px-28 mb-20">
            <div className="flex flex-col md:flex-row text-center h-full w-full bg-pink-200">
                <div className="order-2 md:order-1 h-full w-1/2 md:h-96 md:max-h-96 z-10 self-center">
                    <img src="images/promo-3.png" alt="" className="mx-auto h-1/3 w-1/3 md:h-full object-cover w-full" />
                </div>
                <div className="order-1 md:order-2 self-center p-10">
                    <h1 className="text-black text-3xl font-semibold">Get 3% Cashback with <br /> Debit Card.</h1>
                    <h1 className="text-black text-sm font-medium mt-10">And get a gift box every time you buy a new <br /> product while supplies last</h1>
                    <div className="mt-3">
                        <Link to="/" className="text-blue-700 text-sm font-medium">Learn More <HiOutlineChevronRight className="inline-block" size={16}/> </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
