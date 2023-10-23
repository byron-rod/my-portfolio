import React from "react";
import Image from "next/image";
import bootstrapImg from "../public/images/bootstrap.svg";
import reactImg from "../public/images/react.svg";
import cssImg from "../public/images/css.svg";
import htmlImg from "../public/images/html.svg";
import jsImg from "../public/images/js.svg";
import tailwindImg from "../public/images/tailwind.svg";
import nextImg from "../public/images/next.svg";
import pythonImg from "../public/images/python.svg";
import sqlImg from "../public/images/sql.svg";
import firebaseImg from "../public/images/firebase2.svg";
import nodeImg from "../public/images/node.svg";
import mongoImg from "../public/images/mongo.svg";

type Props = {};

function Skill({}: Props) {
  return (
    <>
      <div className="group relative flex cursor-pointer">
        <Image
          src={htmlImg}
          alt="HTML"
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
          alt="CSS"
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
          alt="JavaScript"
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
          alt="ReactJS"
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
          alt="Bootstrap"
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
          alt="TawilwindCSS"
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
          alt="NextJS"
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
          src={pythonImg}
          alt="Python"
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
          alt="SQL"
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
          alt="Firebase"
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
          alt="MongoDB"
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
          alt="NodeJS"
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
