import React, { useRef, useEffect } from "react";
import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import IceBottleImage from "../assets/images/ice-bottle-with-fruits.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function PlasticBottle() {
  let subheading = useRef(null);
  let heading = useRef(null);
  let button = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      subheading,
      {
        opacity: 0,
        y: 50,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: subheading,
          start: "top bottom-=100",
        },
      }
    );
    gsap.fromTo(
      heading,
      {
        opacity: 0,
        y: 50,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: heading,
          start: "top bottom-=100",
        },
      }
    );
    gsap.fromTo(
      button,
      {
        opacity: 0,
        y: 50,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: button,
          start: "top bottom-=100",
        },
      }
    );
  }, []);

  return (
    <div className="w-full">
      <div className="relative w-full flex justify-center mt-20 mb-20 md:mt-0 md:mb-32">
        <div className="relative container flex justify-center z-10 px-4 md:px-0">
          <div className="relative w-full md:w-7/12 flex flex-col items-center md:items-start justify-center z-10 bg-transparent md:bg-gray-primary py-10 md:py-0">
            <p
              ref={(el) => {
                subheading = el;
              }}
              className="font-montserrat uppercase font-light mb-2"
            >
              Every drop counts...
            </p>
            <h2
              ref={(el) => {
                heading = el;
              }}
              className="capitalize font-montserrat font-bold text-3xl text-center md:text-left mb-5 leading-tight text-gray-800"
            >
              Over
              <span className="text-orange-primary"> 3.5 million</span>
              single use plastic
              <br className="hidden md:block" />
              bottles offset so far
            </h2>
            <button
              ref={(el) => {
                button = el;
              }}
              className="font-ubuntu font-medium text-sm py-2 px-3 text-white bg-orange-primary rounded-lg focus:outline-none uppercase"
            >
              Read more
            </button>
          </div>
          <div className="hidden md:block w-3/12">
            <img
              src={IceBottleImage}
              alt=""
              className="w-full h-auto rounded-r-lg"
            />
          </div>
          <div
            className="absolute block md:hidden w-full h-full bg-no-repeat bg-cover opacity-25 z-0"
            style={{ backgroundImage: `url(${IceBottleImage})` }}
          ></div>
        </div>
        <div className="absolute inset-0 w-1/2 h-full z-0 bg-transparent md:bg-gray-primary"></div>
      </div>
    </div>
  );
}
