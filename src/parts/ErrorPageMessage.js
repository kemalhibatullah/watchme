import React from 'react'

export default function ErrorPageMessage() {
    return (
        <section className="mt-10">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-2/3 md:w-1/2 text-center">
                        <img
                            src="/images/error-illustration.jpg"
                            alt="congrats illustration"
                        />
                        <h2 className="text-3xl font-semibold mb-6 mt-10">
                            Loss Something?
                        </h2>
                        <a
                            href="/"
                            className="text-white bg-blue-700 hover:bg-blue-500 w-full py-3 rounded text-lg hover:text-white transition-all duration-200 px-8 cursor-pointer"
                        >
                            Go Shop
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
