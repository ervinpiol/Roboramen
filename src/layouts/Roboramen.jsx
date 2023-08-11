import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimatedRoutes from "./AnimatedRoutes";

const Roboramen = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <AnimatedRoutes />
    </div>
  );
};

export default Roboramen;
