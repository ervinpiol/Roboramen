import React from "react";
import RedCircle from "../../assets/Its-Coming/red-circle.webp";
import CenterImg from "../../assets/Its-Coming/center-img.webp";
import TopLeftImg from "../../assets/Its-Coming/top-left-img.webp";
import TopRightImg from "../../assets/Its-Coming/top-right-img.webp";
import BottomRightImg from "../../assets/Its-Coming/bottom-right-img.webp";
import BottomLeftImg from "../../assets/Its-Coming/bottom-left-img.webp";

const Welcome = () => {
  return (
    <div className="flex xl:w-[1380px] mx-auto gap-20 xl:gap-32 pt-8 pb-20 md:pt-16 xl:py-28 border-b border-Separator flex-col-reverse md:flex-row xs:items-center md:items-start w-full md:w-full xs:w-4/5">
      <div className="relative w-full md:w-3/5 xl:w-1/2">
        <img src={RedCircle} alt="RedCircle" className="w-[90%] mx-auto" />
        <img
          src={CenterImg}
          alt="CenterImg"
          className="absolute w-40 -translate-x-1/2 -translate-y-1/2 sm:w-52 md:w-44 top-1/2 left-1/2 lg:w-64 xl:w-72"
        />
        <img
          src={TopLeftImg}
          alt="TopLeftImg"
          className="absolute w-20 sm:w-28 md:w-24 lg:w-36 xl:w-40 top-10"
        />
        <img
          src={TopRightImg}
          alt="TopRightImg"
          className="absolute right-0 w-32 -top-10 sm:w-40 md:w-32 xl:-top-20 lg:w-52 xl:w-60"
        />
        <img
          src={BottomLeftImg}
          alt="BottomLeftImg"
          className="absolute w-20 sm:w-28 md:w-24 lg:w-36 xl:w-40 bottom-7 left-7"
        />
        <img
          src={BottomRightImg}
          alt="BottomRightImg"
          className="absolute bottom-0 w-20 sm:w-36 md:w-24 right-14 lg:w-32 xl:w-36"
        />
      </div>
      <div className="w-full md:w-2/5 xl:w-[36%] flex flex-col gap-3 pt-5">
        <h1 className="text-[50px] lg:text-[80px] text-Red font-Calvier font-bold leading-none word-space xs:text-center md:text-start">
          SOMETHING TASTY IS COMING TO THE BLOCKCHAIN
        </h1>
        <p className="home-p-style xs:text-center md:text-start">
          Welcome to Robo Ramen - more ingredients than Ramen and more tech than
          Robo. You’re here because we are in search of those with the appetite
          to delve past the cliche and quite frankly, you’d better be hungry. We
          figure if sushi can make the rounds on belts, then bowls can be
          equipped with the arsenal necessary to break the space-time continuum
          while keeping your ramen hot.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
