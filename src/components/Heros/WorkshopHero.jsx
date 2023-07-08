import React from "react";
import WorkshopHeroImg from "../../assets/Workshop/Workshop-Hero.mp4";

const WorkshopHero = () => {
  return (
    <div>
      <div className="relative">
        <video
          autoPlay
          loop
          className="object-cover w-full h-[660px] xl:h-full bg-center"
        >
          <source src={WorkshopHeroImg} type="video/mp4" />
        </video>
        <h1 className="absolute text-6xl leading-none text-white -translate-x-1/2 -translate-y-1/2 lg:text-9xl top-1/2 left-1/2">
          WORKSHOP
        </h1>
      </div>
    </div>
  );
};

export default WorkshopHero;
