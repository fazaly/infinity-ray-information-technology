import React from "react";
import "./Hero.css";
import BGIMG from "../../../images/HERO_BG.jpg";
import HEROIMG from "../../../images/HERO_IMG.png";

const Hero = () => {
  const myStyle = {
    backgroundImage: `url(${BGIMG})`,
    backgroundImageRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div style={myStyle} id="home">
      <div className="w-full h-screen" id="heroBG">
        <div className="flex lg:flex-row justify-center md:flex-grow flex-col items-center h-full w-full">
          <img src={HEROIMG} alt="" className="lg:mr-36 mt-10"/>
          <div className="text-white lg:mt-0 md:mt-10 mt-10 lg:text-left md:text-left text-center lg:space-y-6 space-y-3 p-2">
            <p className="text-3xl font-semibold">Seamless</p>
            <p
              className="lg:text-6xl md:text-6xl text-5xl font-extrabold text-[#A93DFF]"
            >
              Connectivity
            </p>
            <p className="lg:text-4xl md:text-4xl text-3xl font-semibold mb-2">
              At Your Fingertips with{" "}
            </p>
            <div className="flex">
                <div className="w-2 h-8 bg-[#A93DFF] mr-2 lg:block md:block hidden">
                </div>
              <p className="text-2xl mb-4">Infinity Ray Information Technology Broadband</p>
            </div>
            <button className="btn bg-[#4C8FFF] text-white hover:bg-white hover:text-[#4C8FFF] border-none rounded-full pr-10 pl-10">Get Start</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
