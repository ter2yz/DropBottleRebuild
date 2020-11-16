import React, { useRef, useEffect } from "react";
import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LemonImage from "../assets/images/lemon-in-hand.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
  let heading = useRef(null);
  let content = useRef(null);
  let input = useRef(null);
  let button = useRef(null);

  useEffect(() => {
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
          start: "top bottom",
        },
      }
    );
    gsap.fromTo(
      content,
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
          trigger: content,
          start: "top bottom",
        },
      }
    );
    gsap.fromTo(
      input,
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
          trigger: input,
          start: "top bottom",
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
          start: "top bottom",
        },
      }
    );
  }, []);

  return (
    <div className="w-full">
      <div className="w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 1920 124.632"
        >
          <path
            id="Path_7"
            data-name="Path 7"
            d="M0,5876.619s443.637-80.542,960-80.542,960,80.542,960,80.542v44.091H0Z"
            transform="translate(0 -5796.077)"
            fill="#68b1e2"
          />
        </svg>
      </div>
      <div className="relative w-full flex justify-center bg-blue-lighter">
        <div className="relative container z-10">
          <div className="w-full flex justify-center">
            <div className="w-full md:w-10/12 flex flex-col items-center md:items-start py-20">
              <h2
                ref={(el) => {
                  heading = el;
                }}
                className="capitalize font-montserrat font-bold text-4xl text-center md:text-left mb-2 text-white"
              >
                Come say hi!
              </h2>
              <p
                ref={(el) => {
                  content = el;
                }}
                className="font-ubuntu text-center md:text-left mb-10 text-white"
              >
                Get access to the exciting stuff — exclusive new deals, product
                launches and more.
              </p>
              <div className="flex w-full justify-center md:justify-start">
                <input
                  ref={(el) => {
                    input = el;
                  }}
                  className="w-4/12 bg-transparent border-b-2 border-white text-white placeholder-white font-ubuntu"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  ref={(el) => {
                    button = el;
                  }}
                  className="font-ubuntu font-medium text-sm py-2 px-3 text-white bg-orange-lighter rounded-lg focus:outline-none uppercase"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute right-0 w-full md:w-1/2 h-full bg-no-repeat bg-contain bg-right-bottom md:bg-center z-0"
          style={{ backgroundImage: `url(${LemonImage})` }}
        ></div>
      </div>
    </div>
  );
}
