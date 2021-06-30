import React from 'react'
import { HiOutlineCheck, HiSparkles, HiGift } from 'react-icons/hi'

export default function Benefit() {
    return (
        <section className="px-7 md:px-28 mb-40">
            <div className="container mx-auto mb-4">
                <div className="flex justify-center text-center mb-4">
                    <h3 className="text-3xl capitalize font-semibold">
                        Get all the benefits of WatchMe
                    </h3>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-around mt-16">
                <div className="flex flex-col mt-16 md:mt-0">
                    <div className="self-center">
                        <HiOutlineCheck size={42} className="border rounded-full border-blue-700 p-2 text-blue-700 hover:bg-blue-700 hover:text-white" />
                    </div>
                    <div className="self-center mt-7">
                        <h5 className="text-xl font-semibold">100% Original</h5>
                    </div>
                    <div className="self-center mt-3">
                        <h5 className="text-sm font-medium text-center">All items are 100% official<br/> from every brand</h5>
                    </div>
                </div>
                <div className="flex flex-col mt-16 md:mt-0">
                    <div className="self-center">
                        <HiSparkles size={42} className="border rounded-full border-blue-700 p-2 text-blue-700 hover:bg-blue-700 hover:text-white" />
                    </div>
                    <div className="self-center mt-7">
                        <h5 className="text-xl font-semibold">New Product</h5>
                    </div>
                    <div className="self-center mt-3">
                        <h5 className="text-sm font-medium text-center">Get the new products from<br/> every brand you like</h5>
                    </div>
                </div>
                <div className="flex flex-col mt-16 md:mt-0">
                    <div className="self-center">
                        <HiGift size={42} className="border rounded-full border-blue-700 p-2 text-blue-700 hover:bg-blue-700 hover:text-white" />
                    </div>
                    <div className="self-center mt-7">
                        <h5 className="text-xl font-semibold">Fast delivery</h5>
                    </div>
                    <div className="self-center mt-3">
                        <h5 className="text-sm font-medium text-center">Sent with the best choice of <br/> expedition</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}
