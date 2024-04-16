import React from "react";
import Image from "next/image";
import bootstrapImg from "../public/images/bootstrap.webp";
import reactImg from "../public/images/react.webp";
import cssImg from "../public/images/css.webp";
import htmlImg from "../public/images/html.webp";
import jsImg from "../public/images/js.webp";
import tailwindImg from "../public/images/tailwind.webp";
import nextImg from "../public/images/next.svg";
import pythonImg from "../public/images/python.webp";
import sqlImg from "../public/images/sql.webp";
import firebaseImg from "../public/images/firebase2.webp";
import nodeImg from "../public/images/node.webp";
import mongoImg from "../public/images/mongo.webp";

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
            <p className="text-2xl font-bold text-black opacity-100">HTML</p>
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
            <p className="text-2xl font-bold text-black opacity-100">CSS</p>
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
            <p className="text-2xl font-bold text-black opacity-100">JS</p>
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
            <p className="text-2xl font-bold text-black opacity-100">React</p>
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
            <p className="text-xl font-bold text-black opacity-100">
              Bootstrap
            </p>
          </div>
        </div>
      </div>
      <div className="group relative flex cursor-pointer">
        <Image
          src={tailwindImg}
          alt="TailwindCSS"
          className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">Tailwind</p>
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
            <p className="text-2xl font-bold text-black opacity-100">Next</p>
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
            <p className="text-2xl font-bold text-black opacity-100">Python</p>
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
            <p className="text-2xl font-bold text-black opacity-100">SQL</p>
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
            <p className="text-xl font-bold text-black opacity-100">Firebase</p>
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
            <p className="text-xl font-bold text-black opacity-100">MongoDB</p>
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
            <p className="text-2xl font-bold text-black opacity-100">Node</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
