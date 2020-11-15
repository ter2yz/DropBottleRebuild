import React, { useRef, useEffect } from 'react';
import { Power3, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './header';

import BottleBackgroundImage from '../assets/images/drop-bottle-hero--desktop.jpg';
import BottleProductImage from '../assets/images/bottle-product.png';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    let text = useRef(null);
    let textTest = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            text,
            {
                opacity: 0,
                y: 50
            },
            {
                duration: 1,
                delay: .5,
                opacity: 1,
                y: 0,
                ease: Power3.easeOut
            }
        );
    }, [])

    return (
        <div>
            <div className="relative w-full h-screen">
                <div className="fixed w-full top-0 z-20">
                    <Header />
                </div>
                <div className="relative w-full h-full flex justify-center items-center z-10">
                    <div className="container">
                        <div className="w-full flex justify-start items-center">
                            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                                <h1
                                    ref={el => { text = el }}
                                    className="text-white text-4xl font-bold leading-none mb-5 text-center md:text-left opacity-0 uppercase">
                                    Water, with benefits.
                                    <br />
                                    Drink your vitamins.
                                </h1>
                                <p className="text-white leading-none mb-5 capitalize">Eco-friendly fruit infuser water bottles.</p>
                                <button className="py-2 px-3 text-white bg-blue-700 rounded-lg focus:outline-none uppercase">Shop now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute w-full h-full inset-0">
                    <div className="absolute w-full h-full" >
                        <div className="absolute w-full h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `linear-gradient(to right, #ffc355, #ffc14fe0, #ffbf48c9, #ffbc4296, #ffba3b8f),url(${BottleBackgroundImage})` }} ></div>
                    </div>
                    <div className="absolute w-full h-full transform translate-y-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-full bottom-0 left-0" viewBox="0 0 1920 392.733" preserveAspectRatio="none">
                            <path id="Path_8" data-name="Path 8" d="M0,1080s1366.176,14.668,1920-392.666V1080Z" transform="translate(0 -687.334)" fill="#fff" />
                        </svg>
                    </div>
                    <div className="absolute w-full md:w-1/2 h-full right-0 flex justify-center items-center">
                        <img className="h-full w-auto transform -rotate-26 scale-70 -translate-x-6 translate-y-10" src={BottleProductImage} alt="" />
                    </div>
                    <div className="absolute w-full md:w-1/2 h-full right-0 flex justify-center items-center">
                        <img className="h-full w-auto transform rotate-26 scale-75 translate-x-5 translate-y-16" src={BottleProductImage} alt="" />
                    </div>
                </div>
            </div >

        </div >
    )
}