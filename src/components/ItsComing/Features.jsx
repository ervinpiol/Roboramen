import React from "react";
import ComingBottomImg from "../../assets/Its-Coming/coming-bottom-img.svg";

const Features = () => {
  const features = [
    { h3Text: "3,333", pText: "UNIQUE NFTS" },
    { h3Text: "100+", pText: "HANDMADE TRAITS" },
    { h3Text: "2 SOL", pText: "MINT PRICE" },
  ];

  return (
    <div className="flex flex-col items-center gap-20 pt-5 xl:pt-20">
      <div className="flex flex-col justify-around w-4/5 md:w-full xl:w-[931px] md:flex-row items-center gap-4 py-4">
        {features.map((feature, i) => (
          <div
            key={i}
            className={`flex flex-col items-center w-full gap-0 lg:gap-3 ${
              i === 1 &&
              "border-y md:border-y-0 md:border-x border-Separator xl:py-0 py-5"
            }`}
          >
            <h3 className="text-Red h3-style">{feature.h3Text}</h3>
            <p className="pt-2 home-p-style xl:pt-0">{feature.pText}</p>
          </div>
        ))}
      </div>
      <img src={ComingBottomImg} alt="ComingBottomImg" />
    </div>
  );
};

export default Features;
