import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        className="w-28 h-28 rounded-full md:rounded-full xl:w-[180px] xl:h-[180px] object-cover object-center"
        src="https://blog.logomyway.com/wp-content/uploads/2020/03/arbnb-logo.jpg"
        alt="logos"
      />
      <div className="px-8 md:px-10">
        <h4 className="text-2xl font-light">Airbnb Superhost</h4>
        <p className="font-bold text-lg mt-1">Origami Mgt</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full object-cover object-center"
            src="https://img.icons8.com/ios-filled/50/000000/medal2--v1.png"
            alt="techs"
          />
          <img
            className="h-10 w-10 rounded-full object-cover object-center"
            src="https://img.icons8.com/ios-filled/50/000000/medal2--v1.png"
            alt="techs"
          />
          <img
            className="h-10 w-10 rounded-full object-cover object-center"
            src="https://img.icons8.com/ios-filled/50/000000/medal2--v1.png"
            alt="techs"
          />
        </div>
        <p className="py-5 uppercase text-gray-300">work dates</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Summary Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aut,
          </li>
          <li>
            Summary Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Inventore, minima?
          </li>
          <li>
            Summary Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
