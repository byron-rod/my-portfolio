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
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl">
        Tech Stack
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Skills and Proficiency
      </h3>
      <div className="lg:mt-[9rem] md:mt-[8rem] mt-9">
        <div className="grid grid-cols-4 gap-3 md:gap-6">
          <Skill />
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
