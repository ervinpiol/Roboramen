import React from "react";
import IMG1 from "../../assets/Finishing-Touches/Final-Adjustments/img1.webp";
import IMG2 from "../../assets/Finishing-Touches/Final-Adjustments/img2.webp";
import IMG3 from "../../assets/Finishing-Touches/Final-Adjustments/img3.webp";
import IMG4 from "../../assets/Finishing-Touches/Final-Adjustments/img4.webp";

import FAVideo from "../../assets/Finishing-Touches/Final-Adjustments/FA-Video.mp4";
import { motion } from "framer-motion";

const FinalAdjustment = () => {
  return (
    <div>
      <div className="flex flex-col items-end gap-5 xl:gap-10 md:flex-row">
        <div className="flex-1">
          <motion.h4
            className="pb-4 lg:pb-8 md:text-6xl h4-style text-Red"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            FINISHING <br className="hidden xl:block" />
            <span className="text-black">TOUCHES</span>
          </motion.h4>
          <motion.p
            className="workshop-p-style md:pb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Final adjustments to the geometry are made by procedurally
            subtracting the bowl from the base and shoulder joint geometry. This
            ensures perfectly interlocking pieces without any intersecting
            polygons.
          </motion.p>
          <motion.img
            src={IMG1}
            alt=""
            className="hidden md:block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          />
        </div>
        <div className="grid w-full grid-cols-3 gap-5 xl:gap-8 md:w-[62%] xl:w-2/3">
          <motion.video
            autoPlay
            loop
            className="col-span-3 rounded-2xl xl:rounded-[40px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <source src={FAVideo} type="video/mp4" />
          </motion.video>
          {[IMG2, IMG3, IMG4].map((image, i) => (
            <motion.img
              key={i}
              src={image}
              alt="image"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 * (i + 1), duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinalAdjustment;
