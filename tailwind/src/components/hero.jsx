import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
const Hero = () => {
  const icon1 = useRef();
  const icon2 = useRef();
  const tl = gsap.timeline({ defaults: { duration: 6 } });

  useEffect(() => {
    tl.fromTo(
      icon1.current,
      { opacity: 0.3, x: -100, rotate: 120 },
      { opacity: 1, x: 1500, rotate: 60 }
    ); 
    tl.fromTo(
      icon2.current,
      { opacity: 0.3, x: 1600, rotate: -120 },
      { opacity: 1, x: -300, rotate: -60 },
      '<'
    );
  }, []);
  const { t } = useTranslation();
  return (
    <>
    <div className="relative overflow-hidden  ">
      <img
        ref={icon1}
        className="absolute   w-52 h-52    top-24  rotate-90  "
        src="https://i.giphy.com/QXPtPqPaitlJH3DTJg.webp"
      ></img>
        <img
        ref={icon2}
        className="absolute  w-52 h-52 bg-no-repeat bg-cover top-32  -rotate-90  "
        src="https://i.giphy.com/QXPtPqPaitlJH3DTJg.webp"
      ></img>
      <img
        src="https://gega-project.netlify.app/images/batman.jpg"
        alt="batman"
        className="max-w-full"
      />
      <div className="bg-custom-gradient absolute bottom-0 w-full pb-20  space-y-4">
        <h2 className="text-[#f4a443] text-2xl">{t("content")}</h2>
        <h4 className="text-white text-5xl">{t("name")}</h4>
        <p className="text-md max-w-[60%] text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quam
          tempore accusamus illum commodi ipsum quasi officia mollitia esse
          optio?
        </p>
      </div>
    </div>
    </>
  );
};

export default Hero;
