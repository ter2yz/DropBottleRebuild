import React from 'react'
import Card from './features/card'
import HeartLogoImage from '../assets/images/icon-heart.svg'
import LemonLogoImage from '../assets/images/icon-lemon.svg'
import ShieldLogoImage from '../assets/images/icon-shield.svg'
import WaterdropLogoImage from '../assets/images/icon-waterdrop.svg'
import BottleWaterImage from '../assets/images/product-features-bg.jpg'
import LogoImage from '../assets/images/dropbottle-logo--white.png'

export default function Features() {

    return (
        <div>
            <div className="w-full">
                <div className="w-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1920 192.371">
                        <path id="Path_3" data-name="Path 3" d="M-86,2017.083s249.617-207.3,670.338-120,496.076,166.734,777.862,147.694,471.8-97.493,471.8-97.493V2068H-86Z" transform="translate(86 -1875.625)" fill="#f3bca8" />
                    </svg>
                </div>
                <div className="relative w-full flex justify-center" style={{ backgroundColor: "#f3bca8" }}>
                    <div className="relative container z-10">
                        <div className="w-full my-10 flex flex-col lg:flex-row items-center lg:items-start justify-center">
                            <div className="w-full flex flex-col items-center lg:items-start lg:w-4/12">
                                <img className="w-auto h-5 mb-2" src={LogoImage} alt="" />
                                <h2 className="uppercase font-bold text-3xl mb-5 leading-none text-center lg:text-left text-white">
                                    Detox water
                                    <br />
                                    on the go
                                </h2>
                            </div>
                            <div className="w-full lg:w-8/12 flex flex-wrap transform translate-y-0 lg:-translate-y-10 px-0 sm:px-4 lg:px-0">
                                <Card
                                    logo={HeartLogoImage}
                                    title={'Looks good, does better'}
                                    content={'You’re not only helping reduce single use plastic, you’re also providing clean drinking water to someone in need. Every Drop counts.'}
                                    addOnClass={'translate-y-0 lg:-translate-y-20'}
                                />
                                <Card
                                    logo={LemonLogoImage}
                                    title={'Drink Your Vitamins'}
                                    content={'Water, with benefits. Our stainless steel strainer and wide mouth make our bottle perfect for infusing fruit, herbs and even tea into your water.'}
                                    addOnClass={''}
                                />
                                <Card
                                    logo={ShieldLogoImage}
                                    title={'Glass, To Last'}
                                    content={`We know plastic bottles are bad for our health and the environment, that's why our bottle is made from reinforced, temperature resistant borosilicate glass.`}
                                    addOnClass={'translate-y-0 lg:-translate-y-20'}
                                />
                                <Card
                                    logo={WaterdropLogoImage}
                                    title={'Hydration, On Hand'}
                                    content={'Our 650 mL / 22oz bottle has a stylish travel handle so you can take it with you wherever life takes you.'}
                                    addOnClass={''}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-0 w-full h-full bg-no-repeat bg-left-bottom bg-contain" style={{ backgroundImage: `url(${BottleWaterImage})` }}>

                    </div>
                </div>
                <div className="w-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1920 300">
                        <path data-name="Path 4" d="M1916.384,3104s-1549.337,52-1920,300V3104Z" transform="translate(3.616 -3104)" fill="#f3bca8" />
                    </svg>

                </div>
            </div>
        </div>
    )
}
