import React from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export default function ProductDetails() {
    return (
        <section className="container px-7 md:px-28 mt-10">
            <div className="flex flex-wrap my-4 md:my-12">
                <div className="w-full md:hidden px-4 mb-10">
                    <h2 className="text-3xl font-semibold mb-5">Apple Watch Series 6</h2>
                    <span className="text-2xl text-red-500 font-semibold">Rp. 7.699.000</span>
                </div>
                <div className="flex-1">
                    <div className="slider">
                        <div className="thumbnail">
                            <div className="px-2">
                                <div
                                    className="item selected"
                                    data-img="/images/apple-watch-6-1.jpg"
                                >
                                    <img
                                        src="/images/apple-watch-6-1.jpg"
                                        alt="front"
                                        className="object-cover w-full h-full rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="px-2">
                                <div
                                    className="item"
                                    data-img="/images/apple-watch-6-2.jpg"
                                >
                                    <img
                                        src="/images/apple-watch-6-2.jpg"
                                        alt="back"
                                        className="object-cover w-full h-full rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="px-2">
                                <div
                                    className="item"
                                    data-img="/images/apple-watch-6-3.jpg"
                                >
                                    <img
                                        src="/images/apple-watch-6-3.jpg"
                                        alt="rear"
                                        className="object-cover w-full h-full rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="px-2">
                                <div
                                    className="item"
                                    data-img="/images/apple-watch-6-4.jpg"
                                >
                                    <img
                                        src="/images/apple-watch-6-4.jpg"
                                        alt="side"
                                        className="object-cover w-full h-full rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="preview">
                            <div className="item rounded-lg h-full overflow-hidden justify-self-center">
                                <img
                                    src="/images/apple-watch-6-1.jpg"
                                    alt="front"
                                    className="object-cover w-3/5 h-4/5 md:w-full md:h-full rounded-lg self-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 px-4 md:pl-10 md:pt-5">
                    <h2 className="text-3xl font-semibold">Apple Watch Series 6</h2>
                    <p className="text-2xl mt-3 text-red-500 font-semibold">Rp. 7.699.000</p>

                    <Link
                        href="cart.html"
                        className="transition-all duration-200 bg-blue-700 text-white hover:bg-blue-600 hover:text-white rounded px-8 py-3 mt-10 inline-flex"
                    > <HiOutlineShoppingCart size={20} className="mr-3" /> Add to Cart</Link>
                    <hr className="my-8" />

                    <h6 className="text-xl font-semibold mb-4">About the product</h6>
                    <p className="text-sm mb-6">
                        Ukur kadar oksigen dalam darah Anda dengan sensor dan aplikasi yang revolusioner. Lihat metrik kebugaran Anda dalam sekilas dengan layar Retina Selalu Aktif yang disempurnakan. Dengan Apple Watch Series 6 pada pergelangan, Anda bisa menikmati hidup yang lebih sehat, aktif, dan terhubung dengan mudah.
                    </p>
                    <p className="text-sm">
                        Kadar oksigen darah Anda adalah indikator penting untuk kesehatan Anda secara keseluruhan. Informasi ini dapat membantu Anda memahami seberapa baik tubuh Anda menyerap oksigen, dan jumlah oksigen yang dialirkan dalam tubuh Anda. Sensor dan aplikasi yang mengagumkan di Apple Watch Series 6 ini memungkinkan Anda membaca oksigen darah Anda kapan pun Anda mau, serta pembacaan di latar belakang, siang dan malam.1
                    </p>
                </div>
            </div>
        </section>
    )
}
