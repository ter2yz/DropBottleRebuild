import React, { useEffect, useState } from 'react';

import LogoImage from '../assets/images/dropbottle-logo--white.png';
import LogoDarkImage from '../assets/images/dropbottle-logo--blue.png';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 10) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    let navbarClasses = [''];
    let textClasses = [''];
    let logoEl = null;
    if (scrolled) {
        navbarClasses.push('bg-white py-5 md:py-3 shadow-md');
        textClasses.push('text-gray-800');
        logoEl = LogoDarkImage;
    } else {
        navbarClasses.push('bg-transparent py-5');
        textClasses.push('text-white');
        logoEl = LogoImage;
    }

    return (
        <header
            className={`transition-all duration-300 w-full ${navbarClasses.join(" ")}`}
        >
            <div className={`w-full flex justify-center items-center`}>
                <div className="container flex justify-start md:justify-between items-center">
                    <div className="ml-8 md:ml-0">
                        <img className="w-auto h-8" src={logoEl} alt="" />
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex justify-center">
                            <li className="mx-4">
                                <a href="/#">
                                    <p className={`font-ubuntu font-medium transition-all duration-300 uppercase ${textClasses.join(" ")}`}>Shop</p>
                                </a>
                            </li>
                            <li className="mx-4">
                                <a href="/#">
                                    <p className={`font-ubuntu font-medium transition-all duration-300 uppercase ${textClasses.join(" ")}`}>About us</p>
                                </a>
                            </li>
                            <li className="mx-4">
                                <a href="/#">
                                    <p className={`font-ubuntu font-medium transition-all duration-300 uppercase ${textClasses.join(" ")}`}>Contact</p>
                                </a>
                            </li>
                            <li className="mx-4">
                                <a href="/#">
                                    <p className={`font-ubuntu font-medium transition-all duration-300 uppercase ${textClasses.join(" ")}`}>FAQS</p>
                                </a>
                            </li>
                            <li className="mx-4">
                                <a href="/#">
                                    <p className={`font-ubuntu font-medium transition-all duration-300 uppercase ${textClasses.join(" ")}`}>Recipes</p>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </header>
    )
}
