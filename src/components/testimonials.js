import React, { useRef, useEffect } from "react";
import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import QuoteMarkImage from "../assets/images/quote-marks.svg";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  let icon = useRef(null);
  let heading = useRef(null);
  let name = useRef(null);

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
          start: "top center+=100",
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
          start: "top center+=100",
        },
      }
    );
    gsap.fromTo(
      name,
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
          trigger: name,
          start: "top center+=100",
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
              className="w-8 h-auto mb-5"
              src={QuoteMarkImage}
              alt=""
            />
            <p
              ref={(el) => {
                heading = el;
              }}
              className="w-full lg:w-1/2 font-montserrat text-2xl text-center mb-5 md:mb-10"
            >
              This bottle been a massive game-changer for me. I used to find
              drinking water so boring but now I'm always meeting my daily
              hydration goals.
            </p>
            <p
              ref={(el) => {
                name = el;
              }}
              className="w-full font-ubuntu text-center"
            >
              Ally Phillips
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
