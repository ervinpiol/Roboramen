import React from "react";
import Star from "../../assets/black-star.svg";

const Ticker = () => {
  const textSequence = [
    {
      label: "BOOT SEQUENCE INITIATED",
      image: Star,
    },
    {
      label: "E_DASHI ACTIVATED",
      image: Star,
    },
    {
      label: "ROBO RAMEN BEING CONSTRUCTED",
      image: Star,
    },
  ];

  const duplicatedSequence = [
    ...textSequence,
    ...textSequence,
    ...textSequence,
    ...textSequence,
    ...textSequence,
  ];

  return (
    <div className="w-[95%] mx-auto overflow-hidden pb-3">
      <div className="border border-black">
        <div className="flex gap-10 py-3 text-5xl xl:gap-16 md:py-5 animation whitespace-nowrap">
          {duplicatedSequence.map((item, index) => (
            <span
              key={index}
              className="flex items-center gap-6 text-xs xl:gap-12"
            >
              <img src={item.image} alt="star" className="w-4" />
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
