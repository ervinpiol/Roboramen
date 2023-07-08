import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Workshop from "../pages/Workshop";

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/workshop" element={<Workshop />} />
    </Routes>
  );
};

export default AnimatedRoutes;
