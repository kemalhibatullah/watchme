import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineChevronRight } from 'react-icons/hi'


export default function SaleBanner() {
    return (
        <section className="px-7 md:px-28 mb-20">
            <div className="grid justify-items-center text-center h-96 w-full" style={{backgroundImage: `url("images/sale-banner.png")`}}>
                <div className="self-center p-10">
                    <h1 className="text-white text-3xl font-semibold">Sale Collections</h1>
                    <div className="mt-3">
                        <Link to="/" className="text-blue-700 text-sm font-medium">See Collection <HiOutlineChevronRight className="inline-block" size={16}/> </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
