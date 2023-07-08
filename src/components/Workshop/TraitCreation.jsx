import React from "react";
import Img1 from "../../assets/Trait-Creation/img1.webp";
import Img2 from "../../assets/Trait-Creation/img2.webp";
import Img3 from "../../assets/Trait-Creation/img3.webp";
import Img4 from "../../assets/Trait-Creation/img4.webp";
import Img5 from "../../assets/Trait-Creation/img5.webp";
import { motion } from "framer-motion";

const TraitCreation = () => {
  return (
    <div className="px-4 text-white bg-Red xl:px-0">
      <div className="w-full xl:w-[1120px] mx-auto lg:py-16 flex flex-col gap-5 md:py-14 py-7">
        <div className="flex flex-col-reverse items-end gap-5 md:gap-4 xl:gap-10 md:flex-row">
          <motion.img
            src={Img1}
            alt=""
            className="w-full md:w-2/3 rounded-2xl md:rounded-[35px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h4 className="pb-4 lg:pb-8 md:text-6xl h4-style">
              TRAIT <br className="hidden md:block" />{" "}
              <span className="text-black">CREATION</span>
            </h4>
            <p className="md:pb-4 lg:pb-5 workshop-p-style">
              Each individual trait is modeled by hand in 3D, then processed
              procedurally to generate useful data for the assembly of the
              robot.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="flex flex-col items-center xl:gap-5 md:flex-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="w-full md:w-1/4 xl:w-[246px] pr-3 workshop-p-style">
            <p className="pb-5">
              Each of the nodes above represents an individual trait, and
              contains its 3D geometry. The “OUTPUT” nodes control which
              geometry gets loaded in for display, based on which traits are
              selected.
            </p>
            <p className="pb-5">
              Each trait has a unique ID for internal purposes, which gets
              renamed for display in the metadata.
            </p>
          </div>
          <div className="flex flex-1 gap-4">
            <img
              src={Img2}
              alt=""
              className="rounded-2xl md:rounded-[30px] w-1/3"
            />
            <img
              src={Img3}
              alt=""
              className="rounded-2xl md:rounded-[40px] w-[40%] flex-1"
            />
          </div>
        </motion.div>
        <motion.div
          className="flex gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src={Img4} alt="" className="w-1/3 md:w-2/5 xl:w-[461px]" />
          <img
            src={Img5}
            alt=""
            className="rounded-2xl md:rounded-[40px] w-1/2 xl:w-[640px] flex-1"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default TraitCreation;
