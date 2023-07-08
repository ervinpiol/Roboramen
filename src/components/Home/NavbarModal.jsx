import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const NavbarModal = ({ setOpenMenu }) => {
  return (
    <motion.div
      className=" flex flex-col items-center justify-center w-full gap-6 text-white bg-Red py-14 z-[998]"
      initial={{ opacity: 0, y: -150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: -200 }}
    >
      <div className="flex flex-col items-center w-1/3 gap-6 font-Calvier">
        <Link to="/" className="text-5xl">
          <span onClick={() => setOpenMenu(false)}>HOME</span>
        </Link>
        <Link to="/workshop" className="text-5xl">
          <span onClick={() => setOpenMenu(false)}>WORKSHOP</span>
        </Link>
      </div>
      <button className="px-12 py-2 text-sm tracking-wider border rounded-full font-Inter">
        OUR TWITTER
      </button>
    </motion.div>
  );
};

export default NavbarModal;
