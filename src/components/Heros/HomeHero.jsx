import React from "react";
import RoboramenLogo from "../../assets/Hero-Images/Roboramen-Logo.svg";
import Robot from "../../assets/Hero-Images/Robot.webp";
import ButtonImg from "../../assets/Hero-Images/Button-Img.svg";
import Ticker from "../Home/Ticker";

const HomeHero = () => {
  return (
    <div className="pt-20 overflow-hidden xl:pt-24 bg-Red">
      <Ticker />
      <div className="xl:w-[1380px] mx-auto relative">
        <div className="relative pt-1 -mb-28 md:-mb-40 lg:-mb-60 md:pt-5 xl:-mb-96 w-[95%] xl:w-full mx-auto">
          <img src={RoboramenLogo} alt="RoboramenLogo" className="absolute" />
          <img src={Robot} alt="Robot" />
        </div>
        <a href="#faq" className="absolute top-[40%] left-[10%]">
          <img
            src={ButtonImg}
            alt="ButtonImg"
            className="w-16 transition duration-300 hover:scale-90 ease sm:w-auto"
          />
        </a>
      </div>
    </div>
  );
};

export default HomeHero;
