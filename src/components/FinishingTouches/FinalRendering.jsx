import React from "react";
import IMG1 from "../../assets/Finishing-Touches/Rendering/img1.webp";
import RenderingVideo from "../../assets/Finishing-Touches/Rendering/Rendering-Video.mp4";
import { motion } from "framer-motion";

const FinalRendering = () => {
  return (
    <div className="flex flex-col items-center gap-5 xl:gap-16 md:flex-row">
      <div className="flex flex-col w-full gap-5 xl:w-1/2">
        <motion.img
          src={IMG1}
          alt=""
          className="rounded-2xl xl:rounded-[40px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        />
        <motion.video
          autoPlay
          loop
          className="rounded-2xl xl:rounded-[40px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <source src={RenderingVideo} type="video/mp4" />
        </motion.video>
      </div>
      <div className="flex flex-col w-full gap-5 xl:w-1/2 workshop-p-style">
        <motion.div
          className="pb-5 md:pb-16 lg:pb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="pb-2">
            For rendering the final bot, we created a network of different
            materials with Redshift and Houdini, which are then assigned
            procedurally to different sections of the geometry.
          </p>
          <ul className="ml-6 list-disc xl:ml-8">
            <li>
              Colors are applied via color palette traits. Each palette consists
              of 5 colors that are assigned to various parts of the bowl and
              body.
            </li>
            <li>
              Materials will then pick up the assigned colors and incorporate
              them within the material itself.
            </li>
          </ul>
        </motion.div>
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
          <p className="pb-2">
            In order to add further variation to the entire collection, we added
            randomness within certain aspects of each trait.
          </p>
          <ul className="ml-6 list-disc xl:ml-8">
            <li>
              Wood grains, wear and tear, and other patterns within materials
              are each given a different randomization seed.
            </li>
            <li>
              The main colors of a palette will be randomly swapped with each
              other to apply to different areas of the body.
            </li>
            <li>
              Chopsticks come in different variants and are stowed in different
              configurations.
            </li>
            <li>
              Broth comes in different flavors/colors which are randomly
              selected. Steam coming off the toppings is varied and will change
              for each robot, etc.
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default FinalRendering;
