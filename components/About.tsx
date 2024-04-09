import React from "react";
import aboutImg from "../public/images/byronAbout.jpg";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

type Props = {};

import type { StaticImageData } from "next/image";

function About({}: Props) {
  const [text] = useTypewriter({
    words: ["Jobs", "Experience", "Education", "Skills"],
    loop: true,
    delaySpeed: 2000,
  });

  const aboutImgSrc: StaticImageData = aboutImg;
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
        delay: 0.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h2 className="relative md:absolute top-14 md:top-24 lg:top-28 uppercase tracking-[20px] text-gray-300 text-xl lg:text-2xl">
        About
      </h2>
      <motion.img
        initial={{
          x: -100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
        }}
        src={aboutImgSrc.src}
        alt="Picture of the author"
        className="mb-0 md:mb-12 flex-shrink-0 rounded-full relative mx-auto object-cover h-[12rem] w-[12rem] md:h-[18rem] md:w-64 md:rounded-lg xl:w-[300px] xl:h-[400px] mt-[70px]"
      />
      <div className="space-y-3 px-0 md:px-10 mt-1 mb-9">
        <h3 className="text-3xl md:text-4xl xl:text-4xl font-thin">
          <span className="hidden md:inline">Career </span>
          <span className="hidden md:inline decoration-[#18181a] animate-pulse">
            Overview:
          </span>{" "}
          <span className="mr-3 text-[#cabca3]">{text}</span>
        </h3>
        <p className="smallText md:text-sm lg:text-md xl:text-lg">
          I have an educational background in clinical psychology, but my
          professional career centers around sales, social media management, and
          digital marketing. Over the past three years, I have been actively
          expanding my knowledge in digital marketing, particularly in SEO and
          data analytics, prompting me to embark on a transformative journey to
          become a full-stack developer. In 2023, I completed a comprehensive
          boot camp at 4Geeks Academy, solidifying my technical prowess and
          earning my credentials in the realm of web/software development.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
