import React from "react";
import aboutImg from "../public/byronrod1.jpg";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

type Props = {};

import type { StaticImageData } from "next/image";

function About({}: Props) {
  const [text] = useTypewriter({
    words: ["jobs", "experience", "education", "skills"],
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
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
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
        className="-mb-20 md:mb-0 flex-shrink-0 rounded-full relative mx-auto object-cover h-48 w-48 md:h-64 md:w-64 md:rounded-lg xl:w-[300px] xl:h-[400px] mt-[60px]"
      />
      <div className="space-y-10 px-0 md:px-10 mt-5">
        <h5 className="text-2xl md:text-4xl xl:text-5xl und font-thin">
          Career{" "}
          <span className="underline decoration-[#18181a] animate-pulse">
            Overview:
          </span>{" "}
          <span className="mr-3 text-[#cabca3]">{text}</span>
        </h5>
        <p className="text-sm xl:text-lg">
          I have an educational background in psychology, but my professional
          career centers around sales, social media, and marketing. I have over
          ten years of sales experience and six years of experience in digital
          marketing, focusing on social media management, content creation,
          video editing, and SEO. I have always been passionate about
          technology, as soon as finished my first application I fell in love
          with programming, so I began my journey to become a full-stack
          developer in 2023. I graduated from a bootcamp at 4Geeks Academy. Now,
          I'm looking forward to starting my career as a web developer/software
          engineer.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
