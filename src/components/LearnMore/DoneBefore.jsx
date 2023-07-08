import React from "react";
import LeftRobot from "../../assets/Learn-More/left-robot.svg";
import RightRobot from "../../assets/Learn-More/right-robot.svg";
import Star from "../../assets/Learn-More/star.svg";

const DoneBefore = () => {
  return (
    <div className="relative flex flex-col items-center lg:flex-row">
      <div className="static flex flex-col items-center flex-1 w-full gap-5 px-4 md:w-[44%] md:-translate-x-1/2 md:absolute left-1/2 md:px-0">
        <img src={Star} alt="Star" />
        <h2 className="pb-2 text-center h2-style">
          <a href="" className="text-Red">
            WE’VE DONE
          </a>
          <br />
          THIS BEFORE
        </h2>
        <p className="pb-2 text-center home-p-style xl:pb-10">
          Artists Berkawi and Ojee have been collectively pushing pixels for
          more than 12+ years. Their experience in designing/animating for
          brands such as Apple, Netflix, Nike, Disney, and most recently, Yuga
          Labs, allows them to understand the complexity of large scale brand
          production they’re now bringing to their own project. As an art-first
          project with the goal to bring something innovative to the space,
          they’re building Robo Ramen with the highest quality components to
          produce the next wave of art collectibles.
        </p>
        <button className="px-8 py-3 text-xs tracking-widest text-white rounded-full bg-Red">
          LEARN MORE
        </button>
      </div>
      <div className="flex justify-between w-full">
        <img src={LeftRobot} alt="LeftRobot" className="w-1/2 md:w-[28%]" />
        <img src={RightRobot} alt="RightRobot" className="w-1/2 md:w-[28%]" />
      </div>
    </div>
  );
};

export default DoneBefore;
