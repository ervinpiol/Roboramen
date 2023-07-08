import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import Tensoricon from "../assets/tensor-icon.svg";
import Twittericon from "../assets/twitter-icon.svg";
import Discordicon from "../assets/discord-icon.svg";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavbarModal from "../components/Home/NavbarModal";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="fixed w-full z-[999] flex flex-col">
      <div className="relative w-full bg-black z-[999]">
        <div className="w-full xl:w-[1380px] mx-auto flex justify-between items-center px-5 py-3 xl:p-4 ">
          <div className="text-white font-Inter text-[11px] font-light hidden md:flex items-center gap-10 w-1/3 tracking-widest">
            <NavLink to="/" className="link-hover">
              HOME
            </NavLink>
            <NavLink to="/workshop" className="link-hover">
              WORKSHOP
            </NavLink>
          </div>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <div className="justify-end hidden w-1/3 gap-4 md:flex">
            <img src={Tensoricon} alt="Tensoricon" />
            <img src={Twittericon} alt="Twittericon" />
            <img src={Discordicon} alt="Discordicon" />
          </div>
          <button
            id="menu-icon"
            className={`relative w-10 h-10 flex md:hidden justify-center flex-col gap-1.5 items-center z-20 ${
              openMenu && "active_menu"
            }`}
            onClick={menuClick}
          >
            <span className="w-6 h-0.5 bg-white transition-transform duration-300 ease-out" />
            <span className="w-6 h-0.5 bg-white transition-transform duration-300 ease-out" />
            <span className="w-6 h-0.5 bg-white transition-transform duration-300 ease-out" />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {openMenu && <NavbarModal setOpenMenu={setOpenMenu} />}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
