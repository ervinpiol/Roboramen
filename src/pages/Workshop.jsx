import React from "react";
import WorkshopHero from "../components/Heros/WorkshopHero";
import BTS from "../components/Workshop/BTS";
import TraitCreation from "../components/Workshop/TraitCreation";
import TraitSelection from "../components/Workshop/TraitSelection";
import TraitAssembly from "../components/Workshop/TraitAssembly";
import { FinishingTouches } from "../components/FinishingTouches/FinishingTouches";

const Workshop = () => {
  return (
    <div>
      <WorkshopHero />
      <BTS />
      <TraitCreation />
      <TraitSelection />
      <TraitAssembly />
      <FinishingTouches />
    </div>
  );
};

export default Workshop;
