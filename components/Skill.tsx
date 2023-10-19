import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bootstrapImg from "../public/bootstrap.png";
import reactImg from "../public/react.png";
import cssImg from "../public/css.png";
import htmlImg from "../public/html.png";
import jsImg from "../public/javascript.png";
import tailwindImg from "../public/twcsslogo.png";
import nextImg from "../public/nextjswhite.png";
import pythonImg from "../public/python.png";
import sqlImg from "../public/sql.png";
import firebaseImg from "../public/firebaselogo.png";
import nodeImg from "../public/nodejs.png";
import mongoImg from "../public/mondoDB.png";

type Props = {};

function Skill({}: Props) {
  return (
    <>
      <div className="group relative flex cursor-pointer">
        <Image
          src={htmlImg}
          alt="skill"
          className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-2xl font-bold text-black opacity-100">95%</p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <Image
          src={cssImg}
          alt="skill"
          className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-2xl font-bold text-black opacity-100">90%</p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <Image
          src={jsImg}
          alt="skill"
          className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-2xl font-bold text-black opacity-100">85%</p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <Image
          src={reactImg}
          alt="skill"
          className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-2xl font-bold text-black opacity-100">90%</p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <Image
          src={bootstrapImg}
          alt="skill"
          className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-2xl font-bold text-black opacity-100">90%</p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <Image
          src={tailwindImg}
          alt="skill"
          className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-2xl font-bold text-black opacity-100">95%</p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <Image
          src={nextImg}
          alt="skill"
          className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-2xl font-bold text-black opacity-100">60%</p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <Image
          src={pythonImg}
          alt="skill"
          className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-2xl font-bold text-black opacity-100">70%</p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <Image
          src={sqlImg}
          alt="skill"
          className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-2xl font-bold text-black opacity-100">75%</p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <Image
          src={firebaseImg}
          alt="skill"
          className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-2xl font-bold text-black opacity-100">75%</p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <Image
          src={mongoImg}
          alt="skill"
          className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-2xl font-bold text-black opacity-100">70%</p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <Image
          src={nodeImg}
          alt="skill"
          className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-2xl font-bold text-black opacity-100">60%</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
