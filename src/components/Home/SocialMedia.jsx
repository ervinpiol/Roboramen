import React from "react";
import FooterHeroImg from "../../assets/Footer/footer-hero.svg";
import StarImg from "../../assets/Footer/star.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
  return (
    <div className="w-11/12 xl:w-[1380px] mx-auto flex justify-between items-center relative flex-col md:flex-row">
      <img
        src={FooterHeroImg}
        alt="FooterHeroImg"
        className="mt-[-160px] xl:mt-[-246px] w-[355px] md:w-[400px] xl:w-auto"
      />
      <div className="flex flex-col items-center md:items-start xl:w-1/2">
        <h4 className="py-10 text-center h4-style md:text-left xl:pt-0">
          ROBO RAMEN IS COOKIN’ follow along for the latest updates.
        </h4>
        <div className="flex gap-2 pb-10 text-xs xl:text-sm lg:gap-5 xl:pb-0">
          <button className="border border-LightColor px-5 py-1.5 rounded-full flex items-center tracking-widest gap-2">
            <FontAwesomeIcon icon={faDiscord} />
            JOIN DISCORD
          </button>
          <button className="border border-LightColor px-5 py-1.5 rounded-full flex items-center tracking-widest gap-2">
            <FontAwesomeIcon icon={faTwitter} />
            OUR TWITTER
          </button>
        </div>
      </div>
      <img
        src={StarImg}
        alt="StarImg"
        className="absolute right-0 hidden w-24 -top-6 lg:block"
      />
    </div>
  );
};

export default SocialMedia;
