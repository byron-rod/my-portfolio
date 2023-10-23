import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";

type Props = {};

function Skills({}: Props) {
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
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center mx-auto items-center"
    >
      <h3 className="relative md:absolute top-8 md:top-16 lg:top-28 xl:top-20 uppercase tracking-[16px] md:tracking-[20px] text-gray-300 text-xl xl:text-2xl mt-8 item-center justify-center">
        Tech Stack
      </h3>
      <h3 className="relative md:absolute top-14 md:top-36 lg:top-48 xl:top-40  uppercase tracking-[2px] text-gray-300 text-sm items-center justify-center">
        Skills and Proficiency
      </h3>
      <div className="lg:mt-[10rem] md:mt-[8rem] mt-[6rem] mb-4">
        <div className="grid grid-cols-3 gap-2 md:gap-3  sm:grid-cols-4">
          <Skill />
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
