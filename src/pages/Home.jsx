import React from "react";
import HomeHero from "../components/Heros/HomeHero";
import ItsComing from "../components/ItsComing/ItsComing";
import Robots from "../components/Robots/Robots";
import LearnMore from "../components/LearnMore/LearnMore";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <ItsComing />
      <Robots />
      <LearnMore />
      <Footer />
    </div>
  );
};

export default Home;
