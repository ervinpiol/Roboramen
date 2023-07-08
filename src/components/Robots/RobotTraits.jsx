import React from "react";
import Video1 from "../../assets/Robots/Robots-Traits/video1.mp4";
import Video2 from "../../assets/Robots/Robots-Traits/video2.mp4";
import Video3 from "../../assets/Robots/Robots-Traits/video3.mp4";
import Video4 from "../../assets/Robots/Robots-Traits/video4.mp4";
import Video5 from "../../assets/Robots/Robots-Traits/video5.mp4";
import SpinningIcon from "../../assets/Robots/spinning-icon.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import buttonAnimation from "../../hooks/buttonAnimation";

const RobotTraits = () => {
  const videos = [Video1, Video2, Video3, Video4, Video5];
  const { activeButton, handleButtonClick } = buttonAnimation();

  const swiperParams = {
    autoplay: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    allowTouchMove: false,
    modules: [Navigation],
    navigation: {
      nextEl: ".trait-button-next",
      prevEl: ".trait-button-prev",
    },
  };

  return (
    <div className="flex flex-col justify-between gap-6 pb-8 border-b border-white xl:gap-0 xl:pb-32 xl:pl-8 md:flex-row">
      <div className="flex flex-col w-full gap-5 xl:w-1/3 home-p-style text-LightColor">
        <h2 className="flex flex-col h2-style word-space">
          LET US
          <p className="text-black">SHOYU</p>
          SOME TRAITS
        </h2>
        <p>
          Each Robo Ramen is a randomly generated bowl of noodles with the
          space-age technology to give NASA a run for its government-funded
          money. By combining more than 100 meticulously handcrafted traits -
          we’re leveraging our dynamic generative system to make each bowl of
          ramen the most mechanical meal you’ve ever seen.
        </p>
        <p>
          Fresh out the kitchen, the most radical robo rendering to hit the
          generative space with the flavors to get your gears going. One byte
          and you’ll know the Robo Ramen secret sauce is one you won’t want to
          stop slurping down.
        </p>
      </div>
      <div className="w-full xl:w-1/2">
        <div className="relative">
          <Swiper {...swiperParams} className="rounded-[32px]">
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <video autoPlay loop className="rounded-[32px]">
                  <source src={video} type="video/mp4" />
                </video>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className={`trait-button-prev left-3 md:left-6 slider-button-style ${
              activeButton === 1 && "scale-75 transition duration-300 ease"
            }`}
            onClick={() => handleButtonClick(1)}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
          </button>
          <button
            className={`right-3 md:right-6 trait-button-next slider-button-style ${
              activeButton === 2 && "scale-75 transition duration-300 ease"
            }`}
            onClick={() => handleButtonClick(2)}
          >
            <FontAwesomeIcon icon={faArrowRight} className="text-white" />
          </button>
          <img
            src={SpinningIcon}
            alt="SpinningIcon"
            className="absolute top-0 z-10 w-16 -translate-y-1/2 -right-3 xl:w-24 xl:-right-5"
          />
        </div>
      </div>
    </div>
  );
};

export default RobotTraits;
