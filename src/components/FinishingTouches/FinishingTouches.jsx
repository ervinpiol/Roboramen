import React from "react";
import FinalAdjustment from "./FinalAdjustment";
import FinalRendering from "./FinalRendering";
import Finished from "./Finished";

export const FinishingTouches = () => {
  return (
    <div className="w-full xl:w-[1120px] mx-auto flex flex-col gap-5 xl:gap-10 py-8 md:py-14 xl:py-16 px-4 xl:px-0">
      <FinalAdjustment />
      <FinalRendering />
      <Finished />
    </div>
  );
};
