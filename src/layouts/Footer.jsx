import React from "react";
import SocialMedia from "../components/Home/SocialMedia";
import FooterLogo from "../assets/Footer/Footer-Logo.svg";
import ZakLogo from "../assets/Footer/Zak-Logo.svg";

const Footer = () => {
  return (
    <div className="text-LightColor bg-DarkRed">
      <SocialMedia />
      <div className="flex justify-between px-3 border-t">
        <div className="flex flex-col items-center gap-2 py-3 xl:gap-4 md:items-end md:flex-row">
          <img src={FooterLogo} alt="FooterLogo" className="w-44 md:w-auto" />
          <p className="text-[10px] tracking-widest">Robo Ramen 2023 ©</p>
        </div>
        <div className="flex items-center gap-4 py-5 md:py-0">
          <p className="text-[10px] px-1 md:px-5 border-x h-full flex items-center tracking-widest">
            Design by ZAK
          </p>
          <img src={ZakLogo} alt="ZakLogo" className="xl:pr-4 xl:pl-1.5" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
