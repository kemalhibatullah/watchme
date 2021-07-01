import React from 'react'

export default function SuccessOrderDetails() {
    return (
        <section className="mt-10">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-2/3 md:w-1/2 text-center">
                        <h2 className="text-3xl font-semibold mb-6 mt-10 inline-block">
                            Congratulation order success
                            <img src="/images/congratulation-emoji.png" alt="" className="h-10 w-10 inline-block ml-3" />
                        </h2>
                        <img
                            src="/images/order-success-illustration.jpg"
                            alt="congrats illustration"
                        />
                        <p className="text-lg mb-12 mt-10">
                            Your watches on the way to your lovely place
                        </p>
                        <a
                            href="/"
                            className="text-white bg-blue-700 hover:bg-blue-500 w-full py-3 rounded text-lg hover:text-white transition-all duration-200 px-8 cursor-pointer"
                        >
                            Back to Shop
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
