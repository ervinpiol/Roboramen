import React from "react";
import { robotImages } from "../../data/robotImages";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import RightIcon from "../../assets/right-icon.svg";
import LeftIcon from "../../assets/left-icon.svg";
import buttonAnimation from "../../hooks/buttonAnimation";

const AllRobots = () => {
  const { activeButton, handleButtonClick } = buttonAnimation();

  const swiperParams = {
    autoplay: true,
    loop: true,
    allowTouchMove: false,
    modules: [Navigation],
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2.2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 25,
      },
      1240: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  };

  return (
    <div className="xl:pt-40 xl:pl-16">
      <div className="flex items-center justify-between pt-12 pb-8 md:pb-16 xl:pb-20 xl:pt-0">
        <h3 className="h3-style word-space">A ROBOT FOR EVERYONE</h3>
        <div className="flex gap-4">
          <button
            className={`button-prev ${
              activeButton === 1 && "scale-90 transition duration-300 ease"
            }`}
            onClick={() => handleButtonClick(1)}
          >
            <img src={LeftIcon} alt="LeftIcon" />
          </button>
          <button
            className={`button-next ${
              activeButton === 2 && "scale-90 transition duration-300 ease"
            }`}
            onClick={() => handleButtonClick(2)}
          >
            <img src={RightIcon} alt="RightIcon" />
          </button>
        </div>
      </div>
      <Swiper {...swiperParams} className="flex gap-12 overflow-x-visible">
        {robotImages.map((image, i) => (
          <SwiperSlide key={i}>
            <img
              src={image}
              alt="Robot"
              className="rounded-2xl xl:rounded-[40px] w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AllRobots;
