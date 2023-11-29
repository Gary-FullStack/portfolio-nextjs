import React from "react";
import { Hind } from "next/font/google";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function HomeComponent() {
  // slick carosel settings
  var settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 2000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    loop: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <React.Fragment>
      <div
        id="home"
        style={{
          backgroundImage: "linear-gradient(to right,white 65%, #48AFDE 35%)",
          // backgroundImage:
          //   "linear-gradient(62deg, #EEF7FB 0 50%, #48AFDE 0% 100%)",
          minHeight: "500px",
          maxHeight: "1200px",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="container m-auto">
          <div className="grid grid-cols-12">
            <div
              className="bg-white flex flex-col justify-center 
              col-span-12 md:col-span-5 md:bg-transparent"
            >
              <div className="container m-auto">
                <div className="lg:pl-24 sm:pl-10 pl-0 py-20 md:py-0 md:text-start text-center">
                  <p
                    className={`text-[#47AEDE] text-3xl md:text-base lg:text-2xl ${hind.className}`}
                  >
                    Hello!
                  </p>

                  <h1 className="text-[#223740] font-recoletaBlack text-5xl md:text-4xl lg:text-7xl xl:text-7xl mt-5 md:mt-3">
                    I'm Gary
                  </h1>
                  <h2
                    className={`text-[#223740] py-2 font-bold uppercase md:text-xl ${hind.className}`}
                  >
                    Coder of Useful Things
                  </h2>

                  <a
                    href="/#projects"
                    className={`cursor-pointer inline-block bg-[#48AFDE] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold mt-8 uppercase md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover:bg-[#223740] hover:show-lg transform hover:translate-y-1 ${hind.className} `}
                  >
                    Projects
                  </a>

                  <a
                    href="Gm-resume.pdf"
                    download="Gary's Resume.pdf"
                    className={`ml-10 cursor-pointer inline-block bg-[#223740] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold mt-8 uppercase md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover:bg-[#48AFDE] hover:show-lg transform hover:translate-y-1 ${hind.className}`}
                  >
                    My Resume
                  </a>
                </div>
              </div>
            </div>

            <div className="col-span-12 pt-[50px] md:pt-[130px] md:bg-transparent bg-[#D9EEF7] md:col-span-7">
              <div className="container m-auto">
                <Image
                  src="/gary-1.png"
                  decoding="async"
                  alt="coder gary's cartoonish self-foto"
                  width={0}
                  height={59}
                  sizes="100vw"
                  style={{ width: "100%", height: "25%" }}
                ></Image>
              </div>
            </div>
          </div>

          {/* slick carousel */}
          <div className="container m-auto absolute">
            <div className="px-3">
              <div
                className="relative max-w-sm bottom-[70px] md:max-w-5xl xl:max-w-6xl px-5 lg:px-14 overflow-auto mx-auto bg-white rounded-2xl z-20"
                style={{
                  boxShadow: "#48AFDE -10px 25px 50px 10px",
                }}
              >
                {/* skill slider */}
                <div className="lg:py-10 md:py-6 sm:py-6 cursor-all-scroll">
                  <Slider {...settings}>
                    <img
                      src="/mongodb.png"
                      alt="mongodb icon"
                      className="h-12"
                    />

                    <img
                      src="/reactjs.png"
                      alt="reactjs icon"
                      className="h-12"
                    />

                    <img src="/nextjs.png" 
                    alt="nextjs icon" 
                    className="h-12" />

                    <img
                      src="/expressjs.png"
                      alt="expressjs icon"
                      className="h-12"
                    />

                    <img src="/nodejs.png"
                     alt="nodejs icon" 
                     className="h-12"                       
                     />

                    <img src="/redux.png" 
                    alt="redux icon" 
                    className="h-12" 
                    />

                    <img
                      src="/firebase.png"
                      alt="firebase icon"
                      className="h-12"
                    />
                    
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
