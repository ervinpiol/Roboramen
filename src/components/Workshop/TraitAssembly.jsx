import React from "react";
import TAVideo1 from "../../assets/Trait-Assembly/TA-Video1.mp4";
import TAVideo2 from "../../assets/Trait-Assembly/TA-Video2.mp4";
import TAVideo3 from "../../assets/Trait-Assembly/TA-Video3.mp4";
import TAVideo4 from "../../assets/Trait-Assembly/TA-Video4.mp4";
import { motion } from "framer-motion";

const TraitAssembly = () => {
  return (
    <div className="px-4 bg-Red xl:px-0">
      <div className="text-white w-full xl:w-[1120px] mx-auto py-8 md:py-14 xl:py-16">
        <div className="flex flex-col-reverse items-end gap-5 pb-6 md:gap-4 lg:gap-8 md:flex-row">
          <motion.video
            autoPlay
            loop
            className="w-full md:w-2/3 rounded-2xl md:rounded-[40px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <source src={TAVideo1} type="video/mp4" />
          </motion.video>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h4 className="pb-4 h4-style lg:pb-8 md:text-6xl">
              Trait <br className="hidden md:block" />
              <span className="text-black">Assembly</span>
            </h4>
            <p className="workshop-p-style">
              Once we establish which traits are selected, we are ready to
              assemble! Our dynamic anchor point system works by having each
              trait extract data from neighboring parts to determine where to
              place itself.
            </p>
          </motion.div>
        </div>
        <motion.ul
          className="flex flex-col gap-1 pb-5 ml-6 list-disc xl:ml-8 xl:pb-12 workshop-p-style"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <li>
            Aesthetically we wanted the hips to sit as wide as possible without
            intersecting the arms. So we made the hips and legs automatically
            reposition themselves based on tolerance distance data taken from
            the arm models.
          </li>
          <li>
            Shoulders will always sit on the top edge of the bowl, so we use the
            currently selected bowl's radius and height data as X and Y
            coordinates to determine their placement.
          </li>
          <li>
            Toppings and broth will resize to fit any given bowl shape. And
            because this is all dynamic, any changes made to one trait will
            automatically update all others to fit accordingly.
          </li>
        </motion.ul>
        <div className="flex justify-between">
          {[TAVideo2, TAVideo3, TAVideo4].map((item, i) => (
            <motion.video
              key={i}
              autoPlay
              loop
              className="w-[30%] md:w-[31%] rounded-2xl md:rounded-[40px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 * (i + 1), duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <source src={item} type="video/mp4" />
            </motion.video>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TraitAssembly;
