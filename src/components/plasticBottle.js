import React from 'react'
import IceBottleImage from '../assets/images/ice-bottle-with-fruits.jpg'

export default function PlasticBottle() {
    return (
        <div className="w-full">
            <div className="relative w-full flex justify-center mt-20 mb-20 md:mt-0 md:mb-32">
                <div className="relative container flex justify-center z-10">
                    <div className="relative w-full md:w-7/12 flex flex-col items-center md:items-start justify-center z-10 bg-transparent md:bg-gray-primary py-10 md:py-0">
                        <p className="font-montserrat uppercase font-light mb-2">Every drop counts...</p>
                        <h2 className="capitalize font-montserrat font-bold text-3xl text-center md:text-left mb-5 leading-tight text-gray-800">
                            Over 
                            <span className="text-orange-primary"> 3.5 million</span>
                            single use plastic
                            <br />
                            bottles offset so far
                        </h2>
                        <button className="font-ubuntu font-medium text-sm py-2 px-3 text-white bg-orange-primary rounded-lg focus:outline-none uppercase">Read more</button>
                    </div>
                    <div className="hidden md:block w-3/12">
                        <img src={IceBottleImage} alt="" className="w-full h-auto rounded-r-lg"/>
                    </div>
                    <div className="absolute block md:hidden w-full h-full bg-no-repeat bg-cover opacity-25 z-0" style={{ backgroundImage: `url(${IceBottleImage})`}}></div>
                </div>
                <div className="absolute inset-0 w-1/2 h-full z-0 bg-transparent md:bg-gray-primary"></div>
            </div>
        </div>
    )
}
