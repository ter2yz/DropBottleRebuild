import React from 'react'
import QuoteMarkImage from '../assets/images/quote-marks.svg'

export default function Testimonials() {
    return (
        <div className="w-full">
            <div className="w-full flex justify-center items-center my-10 bg-white">
                <div className="container">
                    <div className="w-full flex flex-col items-center">
                        <img className="w-8 h-auto mb-5" src={QuoteMarkImage} alt="" />
                        <p className="w-full lg:w-1/2 font-montserrat text-2xl text-center mb-5 md:mb-10">
                        This bottle been a massive game-changer for me. I used to find drinking water so boring but now I'm always meeting my daily hydration goals.
                        </p>
                        <p className="w-full font-ubuntu text-center">Ally Phillips</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
