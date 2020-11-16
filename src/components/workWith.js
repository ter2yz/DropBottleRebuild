import React, { useRef, useEffect } from "react";
import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import WaveImage from "../assets/images/wave--blue.svg";
import AWLogoImage from "../assets/images/brand-logo-alexanderwang.png";
import KLLogoImage from "../assets/images/brand-logo-kiehls.png";
import LRLogoImage from "../assets/images/brand-logo-loreal.png";
import OPLogoImage from "../assets/images/brand-logo-oprah.png";
import PVLogoImage from "../assets/images/brand-logo-puravida.png";
import SPLogoImage from "../assets/images/brand-logo-sephora.png";

gsap.registerPlugin(ScrollTrigger);

export default function WorkWith() {
  let icon = useRef(null);
  let heading = useRef(null);
  let subheading = useRef(null);
  let logo1 = useRef(null);
  let logo2 = useRef(null);
  let logo3 = useRef(null);
  let logo4 = useRef(null);
  let logo5 = useRef(null);
  let logo6 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      icon,
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
          trigger: icon,
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
      logo1,
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
          trigger: logo1,
          start: "top bottom-=50",
        },
      }
    );
    gsap.fromTo(
      logo2,
      {
        opacity: 0,
        y: 50,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        delay: 0.1,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: logo2,
          start: "top bottom-=50",
        },
      }
    );
    gsap.fromTo(
      logo3,
      {
        opacity: 0,
        y: 50,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        delay: 0.2,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: logo3,
          start: "top bottom-=50",
        },
      }
    );
    gsap.fromTo(
      logo4,
      {
        opacity: 0,
        y: 50,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        delay: 0.3,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: logo4,
          start: "top bottom-=50",
        },
      }
    );
    gsap.fromTo(
      logo5,
      {
        opacity: 0,
        y: 50,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        delay: 0.4,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: logo5,
          start: "top bottom-=50",
        },
      }
    );
    gsap.fromTo(
      logo6,
      {
        opacity: 0,
        y: 50,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        delay: 0.5,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: logo6,
          start: "top bottom-=50",
        },
      }
    );
  }, []);

  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center my-10 bg-white">
        <div className="container">
          <div className="w-full flex flex-col items-center">
            <img
              ref={(el) => {
                icon = el;
              }}
              className="w-12 h-auto mb-5"
              src={WaveImage}
              alt=""
            />
            <h2
              ref={(el) => {
                heading = el;
              }}
              className="font-montserrat uppercase font-bold text-3xl text-blue-primary mb-5"
            >
              Looks good, does better.
            </h2>
            <p
              ref={(el) => {
                subheading = el;
              }}
              className="font-ubuntu text-center mb-5 md:mb-10"
            >
              Our eco-friendly, fruit infuser water bottles are revolutionising
              the way people stay hydrated.
            </p>
            <div className="w-full flex flex-wrap md:flex-no-wrap justify-center px-4 md:px-10">
              <div className="flex justify-center items-center w-1/2 sm:w-1/3 lg:w-auto mx-0 lg:mx-10 border-b md:border-b-0 border-r md:border-r-0 border-solid border-gray-900">
                <img
                  ref={(el) => {
                    logo1 = el;
                  }}
                  src={SPLogoImage}
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center w-1/2 sm:w-1/3 lg:w-auto mx-0 lg:mx-10 border-b md:border-b-0 border-r-0 sm:border-r md:border-r-0 border-solid border-gray-900">
                <img
                  ref={(el) => {
                    logo2 = el;
                  }}
                  src={AWLogoImage}
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center w-1/2 sm:w-1/3 lg:w-auto mx-0 lg:mx-10 border-b md:border-b-0 border-r sm:border-r-0 md:border-r-0 border-solid border-gray-900">
                <img
                  ref={(el) => {
                    logo3 = el;
                  }}
                  src={KLLogoImage}
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center w-1/2 sm:w-1/3 lg:w-auto mx-0 lg:mx-10 border-b sm:border-b-0 border-r-0 sm:border-r md:border-r-0 border-solid border-gray-900">
                <img
                  ref={(el) => {
                    logo4 = el;
                  }}
                  src={OPLogoImage}
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center w-1/2 sm:w-1/3 lg:w-auto mx-0 lg:mx-10 border-r sm:border-r md:border-r-0 border-solid border-gray-900">
                <img
                  ref={(el) => {
                    logo5 = el;
                  }}
                  src={LRLogoImage}
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center w-1/2 sm:w-1/3 lg:w-auto mx-0 lg:mx-10">
                <img
                  ref={(el) => {
                    logo6 = el;
                  }}
                  src={PVLogoImage}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
