import React, { useRef, useEffect } from "react";
import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./header";

import BottleBackgroundImage from "../assets/images/drop-bottle-hero--desktop.jpg";
import BottleBerryImage from "../assets/images/bottle-product-berry.png";
import BottlePassionfruitsImage from "../assets/images/bottle-product-passionfruits.png";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  let heading = useRef(null);
  let subheading = useRef(null);
  let ctaBtn = useRef(null);
  let imageBerry = useRef(null);
  let imageFruits = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heading,
      {
        opacity: 0,
        y: 50,
      },
      {
        duration: 1,
        delay: 0.5,
        opacity: 1,
        y: 0,
        ease: Power3.easeOut,
      }
    );
    gsap.fromTo(
      subheading,
      {
        opacity: 0,
        y: 50,
      },
      {
        duration: 1,
        delay: 0.7,
        opacity: 1,
        y: 0,
        ease: Power3.easeOut,
      }
    );
    gsap.fromTo(
      ctaBtn,
      {
        opacity: 0,
        y: 50,
      },
      {
        duration: 1,
        delay: 0.9,
        opacity: 1,
        y: 0,
        ease: Power3.easeOut,
      }
    );
    gsap.fromTo(
      imageBerry,
      {
        opacity: 0,
        y: 10,
        rotation: -10,
      },
      {
        duration: 1,
        delay: 1.1,
        opacity: 1,
        y: 0,
        rotation: 0,
        ease: Power3.easeOut,
      }
    );
    gsap.fromTo(
      imageFruits,
      {
        opacity: 0,
        y: 10,
        rotation: 10,
      },
      {
        duration: 1,
        delay: 1.3,
        opacity: 1,
        y: 0,
        rotation: 0,
        ease: Power3.easeOut,
      }
    );
  }, []);

  return (
    <div>
      <div className="relative w-full h-screen">
        <div className="fixed w-full top-0 z-20">
          <Header />
        </div>
        <div className="relative w-full h-full flex justify-center items-center z-10">
          <div className="container">
            <div className="w-full flex justify-start items-center px-4 md:px-0">
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                <h1
                  ref={(el) => {
                    heading = el;
                  }}
                  className="font-montserrat text-white text-4xl font-bold leading-none mb-5 text-center md:text-left opacity-0 uppercase"
                >
                  Water, with benefits.
                  <br className="hidden md:block" />
                  Drink your vitamins.
                </h1>
                <p
                  ref={(el) => {
                    subheading = el;
                  }}
                  className="font-ubuntu font-medium text-white leading-none mb-5 capitalize"
                  style={{ color: "#434FA7" }}
                >
                  Eco-friendly fruit infuser water bottles.
                </p>
                <button
                  className="font-ubuntu font-medium text-sm py-2 px-3 text-white bg-blue-primary rounded-lg focus:outline-none uppercase transition-all duration-200 hover:bg-blue-lighter"
                  ref={(el) => {
                    ctaBtn = el;
                  }}
                >
                  Shop now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-full h-full inset-0">
          <div className="absolute w-full h-full">
            <div
              className="absolute w-full h-full bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `linear-gradient(to right, #ffc355, #ffc14fe0, #ffbf48c9, #ffbc4296, #ffba3b8f),url(${BottleBackgroundImage})`,
              }}
            ></div>
          </div>
          <div className="absolute w-full h-full transform translate-y-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-full bottom-0 left-0"
              viewBox="0 0 1920 392.733"
              preserveAspectRatio="none"
            >
              <path
                id="Path_8"
                data-name="Path 8"
                d="M0,1080s1366.176,14.668,1920-392.666V1080Z"
                transform="translate(0 -687.334)"
                fill="#fff"
              />
            </svg>
          </div>
          <div
            ref={(el) => {
              imageBerry = el;
            }}
            className="absolute w-full md:w-1/2 h-full right-0 hidden sm:flex justify-center items-center"
          >
            <img
              className="h-full w-auto transform -rotate-26 scale-70 -translate-x-6 translate-y-10"
              src={BottleBerryImage}
              alt=""
            />
          </div>
          <div
            ref={(el) => {
              imageFruits = el;
            }}
            className="absolute w-full md:w-1/2 h-full right-0 hidden sm:flex justify-center items-center"
          >
            <img
              className="h-full w-auto transform rotate-26 scale-75 translate-x-5 translate-y-16"
              src={BottlePassionfruitsImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
