import React from "react";
import BTSVideo from "../../assets/Workshop/BTS-Video.mp4";
import { motion } from "framer-motion";

const BTS = () => {
  return (
    <div className="w-full xl:w-[1120px] mx-auto flex items-end gap-5 md:gap-8 xl:gap-14 px-4 xl:px-0 py-8 md:py-14 xl:py-16 flex-col md:flex-row">
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
          BEHIND THE <br className="hidden md:block" />{" "}
          <span className="text-black">SCENES</span>
        </h4>
        <p className="pb-4 xl:pb-6">
          Robo Ramen utilizes a procedural system to generate and assemble all
          of the parts that make up each robot. We're excited to share a look
          behind the scenes at how it all works:
        </p>
        <p className="pb-3">
          Our robots are created in 3D software called Houdini. Looking inside,
          this is our master trait control node -- we've created an interface
          for this that allows us to quickly:
        </p>
        <ul className="ml-6 list-disc xl:ml-8">
          <li>Add traits to our system and name them.</li>
          <li>Assign trait rarity values</li>
          <li>Export metadata.</li>
          <li>
            Preview specific traits for internal use, using override buttons.
          </li>
        </ul>
      </motion.div>
      <motion.video
        autoPlay
        loop
        className="w-full md:w-3/5 rounded-2xl md:rounded-[35px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <source src={BTSVideo} type="video/mp4" />
      </motion.video>
    </div>
  );
};

export default BTS;
