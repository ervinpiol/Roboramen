import React from "react";
import FinisedVideo from "../../assets/Finishing-Touches/Finished/Finished-Video.mp4";
import { motion } from "framer-motion";

const Finished = () => {
  return (
    <div className="w-full xl:w-[776px] mx-auto flex flex-col items-center gap-6 pt-4 md:pt-8 xl:pt-0">
      <motion.p
        className="w-full md:w-3/4 workshop-p-style"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        Once everything is in place, lights are arranged in the scene and we can
        finally render the finished Robo Ramen!
      </motion.p>
      <motion.span
        className="ml-64 font-bold text-Red font workshop-p-style"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        - Ojee
      </motion.span>
      <motion.video
        autoPlay
        loop
        className="rounded-2xl md:rounded-[40px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <source src={FinisedVideo} type="video/mp4" />
      </motion.video>
    </div>
  );
};

export default Finished;
