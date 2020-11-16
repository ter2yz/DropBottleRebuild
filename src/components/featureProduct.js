import React, { useRef, useEffect } from "react";
import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BottleProduct from "../assets/images/bottle-product.png";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureProduct() {
  let productBox = useRef(null);
  let heading = useRef(null);
  let content = useRef(null);
  let button = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      productBox,
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
          trigger: productBox,
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
      <div className="w-full flex justify-center">
        <div className="container">
          <div className="w-full flex flex-col md:flex-row justify-center items-center px-4 md:px-0">
            <div
              ref={(el) => {
                productBox = el;
              }}
              className="w-full md:w-4/12 px-2 flex flex-col items-center"
            >
              <div className="relative w-56 h-56 flex justify-center items-center z-10">
                <img
                  className="relative w-auto h-full z-10 transform -translate-y-4"
                  src={BottleProduct}
                  alt=""
                />
                <div
                  className="absolute bottom-0 w-full h-full rounded-full transform scale-90 origin-bottom shadow-md"
                  style={{ backgroundColor: "#FDD531" }}
                ></div>
              </div>
              <div
                className="relative w-full rounded-lg shadow-md pt-32 px-10 transform -translate-y-32 flex flex-col items-center"
                style={{ backgroundColor: "#FFF5F2" }}
              >
                <div className="w-full flex flex-col items-start md:items-center mb-5">
                  <p className="w-full font-montserrat text-2xl font-bold capitalize mt-5 text-center md:text-left mb-1 text-gray-800">
                    Gold drop bottle
                  </p>
                  <div className="w-full flex justify-center md:justify-start">
                    <div className="w-20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 129.732 20.801"
                      >
                        <g
                          id="Group_9"
                          data-name="Group 9"
                          transform="translate(-230 -5358)"
                        >
                          <path
                            id="Icon_awesome-star"
                            data-name="Icon awesome-star"
                            d="M11.142.723,8.489,6.1l-5.935.865a1.3,1.3,0,0,0-.719,2.218l4.294,4.184-1.016,5.91A1.3,1.3,0,0,0,7,20.647l5.309-2.791,5.309,2.791A1.3,1.3,0,0,0,19.5,19.279l-1.016-5.91L22.78,9.184a1.3,1.3,0,0,0-.719-2.218L16.126,6.1,13.473.723a1.3,1.3,0,0,0-2.332,0Z"
                            transform="translate(228.559 5358.001)"
                            fill="#ffba3b"
                          />
                          <path
                            id="Icon_awesome-star-2"
                            data-name="Icon awesome-star"
                            d="M11.142.723,8.489,6.1l-5.935.865a1.3,1.3,0,0,0-.719,2.218l4.294,4.184-1.016,5.91A1.3,1.3,0,0,0,7,20.647l5.309-2.791,5.309,2.791A1.3,1.3,0,0,0,19.5,19.279l-1.016-5.91L22.78,9.184a1.3,1.3,0,0,0-.719-2.218L16.126,6.1,13.473.723a1.3,1.3,0,0,0-2.332,0Z"
                            transform="translate(255.559 5358.001)"
                            fill="#ffba3b"
                          />
                          <path
                            id="Icon_awesome-star-3"
                            data-name="Icon awesome-star"
                            d="M11.142.723,8.489,6.1l-5.935.865a1.3,1.3,0,0,0-.719,2.218l4.294,4.184-1.016,5.91A1.3,1.3,0,0,0,7,20.647l5.309-2.791,5.309,2.791A1.3,1.3,0,0,0,19.5,19.279l-1.016-5.91L22.78,9.184a1.3,1.3,0,0,0-.719-2.218L16.126,6.1,13.473.723a1.3,1.3,0,0,0-2.332,0Z"
                            transform="translate(282.559 5358.001)"
                            fill="#ffba3b"
                          />
                          <path
                            id="Icon_awesome-star-4"
                            data-name="Icon awesome-star"
                            d="M11.142.723,8.489,6.1l-5.935.865a1.3,1.3,0,0,0-.719,2.218l4.294,4.184-1.016,5.91A1.3,1.3,0,0,0,7,20.647l5.309-2.791,5.309,2.791A1.3,1.3,0,0,0,19.5,19.279l-1.016-5.91L22.78,9.184a1.3,1.3,0,0,0-.719-2.218L16.126,6.1,13.473.723a1.3,1.3,0,0,0-2.332,0Z"
                            transform="translate(309.559 5358.001)"
                            fill="#ffba3b"
                          />
                          <path
                            id="Icon_awesome-star-5"
                            data-name="Icon awesome-star"
                            d="M11.142.723,8.489,6.1l-5.935.865a1.3,1.3,0,0,0-.719,2.218l4.294,4.184-1.016,5.91A1.3,1.3,0,0,0,7,20.647l5.309-2.791,5.309,2.791A1.3,1.3,0,0,0,19.5,19.279l-1.016-5.91L22.78,9.184a1.3,1.3,0,0,0-.719-2.218L16.126,6.1,13.473.723a1.3,1.3,0,0,0-2.332,0Z"
                            transform="translate(336.559 5358.001)"
                            fill="#ffba3b"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col items-start mb-5">
                  <p className="w-full font-ubuntu text-center md:text-left mb-1 text-gray-800">
                    650 mL / 22oz
                  </p>
                  <p className="w-full font-montserrat text-2xl font-bold uppercase text-center md:text-left leading-none text-gray-800">
                    $45.00
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 pl-0 md:pl-20 flex flex-col items-center md:items-start transform -translate-y-10 sm:translate-y-0">
              <h2
                ref={(el) => {
                  heading = el;
                }}
                className="capitalize font-montserrat font-bold text-3xl text-center md:text-left mb-5 text-gray-800"
              >
                We have quality products
              </h2>
              <p
                ref={(el) => {
                  content = el;
                }}
                className="font-ubuntu text-center md:text-left mb-5 text-gray-800"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button
                ref={(el) => {
                  button = el;
                }}
                className="font-ubuntu font-medium text-sm py-2 px-3 text-white bg-blue-primary rounded-lg focus:outline-none uppercase"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
