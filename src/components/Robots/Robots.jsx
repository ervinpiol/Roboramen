/* import React, { useState, useEffect } from "react";
import RobotTraits from "./RobotTraits";
import AllRobots from "./AllRobots";

const Robots = () => {
  return (
    <div className="px-4 py-8 text-white xl:px-0 xl:py-20 bg-Red">
      <div className="w-full xl:w-[1380px] mx-auto">
        <p className="flex items-center text-[10px] gap-3 pb-5 -ml-1">
          <span className="w-[9px] h-[9px] bg-white rounded-full"></span>
          ROBO RAMEN IS COMING
        </p>
        <div className="flex gap-2 md:gap-6 xl:gap-8">
          <div className="h-auto w-[2px] bg-white relative z-20">
            <div className="absolute w-1 h-24 -translate-x-1/2 bg-white" />
          </div>
          <div>
            <RobotTraits />
            <AllRobots />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Robots;*/
import React, { useState, useEffect } from "react";
import RobotTraits from "./RobotTraits";
import AllRobots from "./AllRobots";

const Robots = () => {
  return (
    <div className="px-4 py-8 text-white xl:px-0 xl:py-20 bg-Red">
      <div className="w-full xl:w-[1380px] mx-auto">
        <p className="flex items-center text-[10px] gap-3 pb-5 -ml-1">
          <span className="w-[9px] h-[9px] bg-white rounded-full"></span>
          ROBO RAMEN IS COMING
        </p>
        <div className="flex gap-2 md:gap-6 xl:gap-8">
          <div className="h-auto w-[2px] bg-white relative z-20">
            <div className="absolute w-1 h-24 -translate-x-1/2 bg-white" />
          </div>
          <div>
            <RobotTraits />
            <AllRobots />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Robots;
