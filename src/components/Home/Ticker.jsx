import React, { useRef, useLayoutEffect } from "react";
import Star from "../../assets/black-star.svg";
import { gsap } from "gsap";

const Ticker = () => {
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);

  const Words = ({ num }) => {
    let xPercent = 0;
    let direction = -1;

    useLayoutEffect(() => {
      requestAnimationFrame(animate);
    }, []);

    const animate = () => {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }
      gsap.set(first.current, { xPercent: xPercent });
      gsap.set(second.current, { xPercent: xPercent });
      gsap.set(third.current, { xPercent: xPercent });
      gsap.set(fourth.current, { xPercent: xPercent });
      requestAnimationFrame(animate);
      xPercent += 0.1 * direction;
    };

    return (
      <div ref={num} className="flex pr-10 gap-10 text-xs">
        <p className="flex gap-10">
          BOOT SEQUENCE INITIATED <img src={Star} alt="" className="w-4" />
        </p>
        <p className="flex gap-10">
          E_DASHI ACTIVATED <img src={Star} alt="" className="w-4" />
        </p>
        <p className="flex gap-10">
          ROBO RAMEN BEING CONSTRUCTED <img src={Star} alt="" className="w-4" />
        </p>
      </div>
    );
  };

  return (
    <div className="w-[95%] mx-auto overflow-hidden border border-black">
      <div className=" flex flex-nowrap w-[200vw] whitespace-nowrap py-5">
        <Words num={first} />
        <Words num={second} />
        <Words num={third} />
        <Words num={fourth} />
      </div>
    </div>
  );
};
export default Ticker;
