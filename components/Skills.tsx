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
      <h3 className="relative md:absolute top-12 md:top-14 uppercase tracking-[20px] text-gray-500 text-xl xl:text-2xl mt-8">
        Tech Stack
      </h3>
      <h3 className="relative md:absolute top-16 md:top-32 uppercase tracking-[3px] text-gray-300 text-sm">
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
