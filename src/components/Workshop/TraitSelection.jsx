import React from "react";
import TraitSelectionImg from "../../assets/Trait-Creation/Trait-Selection-Img.webp";
import TraitSelectionVideo from "../../assets/Trait-Creation/Trait-Selection-Video.mp4";
import { motion } from "framer-motion";

const TraitSelection = () => {
  return (
    <div className="w-full xl:w-[1120px] mx-auto py-8 xl:py-16 px-4 md:py-14 xl:px-0">
      <div className="flex flex-col items-center gap-5 pb-5 xl:items-end xl:gap-10 md:flex-row">
        <motion.div
          className="workshop-p-style"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h4 className="pb-4 h4-style lg:pb-8 md:text-6xl text-Red">
            TRAIT <br className="hidden md:block" />
            <span className="text-black">SELECTION</span>
          </h4>
          <p className="pb-2">
            Our trait selection tool inside Houdini will pick random traits
            based on rarity:
          </p>
          <ul className="ml-6 list-disc xl:ml-8 xl:pb-3">
            <li>
              We first define rarity by entering the number of each trait we
              want represented into our control node interface.
            </li>
            <li>
              A list of 10k traits for each type gets generated and randomized
              using code.
            </li>
            <li>
              We then use the current frame number from Houdini’s animation
              timeline to correspond with the NFT number.
            </li>
            <li>
              This allows us to step through frame by frame to pull in traits
              from the list to build each robot individually.
            </li>
          </ul>
        </motion.div>
        <motion.img
          src={TraitSelectionImg}
          alt="Trait-Selection-Img"
          className="rounded-2xl md:rounded-[40px] w-full md:w-3/5 xl:w-2/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        />
      </div>
      <motion.video
        autoPlay
        loop
        className="w-full rounded-2xl md:rounded-[40px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <source src={TraitSelectionVideo} type="video/mp4" />
      </motion.video>
    </div>
  );
};

export default TraitSelection;
