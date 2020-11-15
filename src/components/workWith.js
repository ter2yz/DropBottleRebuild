import React from 'react';
import WaveImage from '../assets/images/wave--blue.svg';
import AWLogoImage from '../assets/images/brand-logo-alexanderwang.png';
import KLLogoImage from '../assets/images/brand-logo-kiehls.png';
import LRLogoImage from '../assets/images/brand-logo-loreal.png';
import OPLogoImage from '../assets/images/brand-logo-oprah.png';
import PVLogoImage from '../assets/images/brand-logo-puravida.png';
import SPLogoImage from '../assets/images/brand-logo-sephora.png';

export default function WorkWith() {
    return (
        <div className="w-full">
            <div className="w-full flex justify-center items-center my-10 bg-white">
                <div className="container">
                    <div className="w-full flex flex-col items-center">
                        <img className="mb-5" src={WaveImage} alt="" />
                        <h2 className="uppercase font-bold text-3xl mb-5">Looks good, does better.</h2>
                        <p className="text-center mb-5 md:mb-10">
                            Our eco-friendly, fruit infuser water bottles are revolutionising the way people stay hydrated.
                        </p>
                        <div className="w-full flex flex-wrap md:flex-no-wrap justify-center px-4 md:px-10">
                            <div className="flex justify-center items-center w-1/2 sm:w-1/3 lg:w-auto mx-0 lg:mx-10 border-b md:border-b-0 border-r md:border-r-0 border-solid border-gray-900">
                                <img src={SPLogoImage} alt="" />
                            </div>
                            <div className="flex justify-center items-center w-1/2 sm:w-1/3 lg:w-auto mx-0 lg:mx-10 border-b md:border-b-0 border-r-0 sm:border-r md:border-r-0 border-solid border-gray-900">
                                <img src={AWLogoImage} alt="" />
                            </div>
                            <div className="flex justify-center items-center w-1/2 sm:w-1/3 lg:w-auto mx-0 lg:mx-10 border-b md:border-b-0 border-r sm:border-r-0 md:border-r-0 border-solid border-gray-900">
                                <img src={KLLogoImage} alt="" />
                            </div>
                            <div className="flex justify-center items-center w-1/2 sm:w-1/3 lg:w-auto mx-0 lg:mx-10 border-b sm:border-b-0 border-r-0 sm:border-r md:border-r-0 border-solid border-gray-900">
                                <img src={OPLogoImage} alt="" />
                            </div>
                            <div className="flex justify-center items-center w-1/2 sm:w-1/3 lg:w-auto mx-0 lg:mx-10 border-r sm:border-r md:border-r-0 border-solid border-gray-900">
                                <img src={LRLogoImage} alt="" />
                            </div>
                            <div className="flex justify-center items-center w-1/2 sm:w-1/3 lg:w-auto mx-0 lg:mx-10">
                                <img src={PVLogoImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
