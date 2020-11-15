import React, { useRef, useEffect } from 'react'
import { Power3, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Card(props) {

    const { title, content, logo, addOnClass } = props;
    let card = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            card,
            {
                opacity: 0,
                y: -10
            },
            {
                duration: 1,
                opacity: 1,
                y: 0,
                ease: Power3.easeOut,
                scrollTrigger: {
                    trigger: card,
                    start: 'top center',
                }
            }
        )
    }, [])

    return (
        <div
            ref={el => { card = el }}
            className='w-full md:w-1/2 px-2 mb-4'
        >
            <div className={`w-full flex flex-col items-center bg-white rounded-lg shadow-md py-10 px-6 transform ${addOnClass}`}>
                <div className="w-12 h-12 mb-5 flex justify-center items-center">
                    <img className="w-10 h-10" src={logo} alt="" />
                </div>
                <div className="w-full mb-5">
                    <h3 className="font-montserrat font-bold text-2xl text-gray-800 capitalize">{title}</h3>
                </div>
                <div className="w-full">
                    <p className="font-ubuntu text-center text-gray-800">
                        {content}
                    </p>
                </div>
            </div>
        </div>
    )
}
