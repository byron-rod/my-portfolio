import Image from "next/image";
import React from "react";
import developLanding from "../public/images/develop.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import ImageModal from "../components/ImageModal";
import { FaGithub } from "react-icons/fa";

const Develop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="w-full h-full bg-[#1c1b20] overflow-x-hidden scrollbar scrollbar-track-[#1c1b20] scrollbar-thumb-gray-400">
      <div className="w-screen h-[50vh] relative">
        <div
          className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 lg:hover:cursor-pointer"
          onClick={openModal}
        />
        <Image
          className="absolute z-1 lg:hover:cursor-pointer"
          fill
          style={{ objectFit: "cover" }}
          src={developLanding}
          alt="screensshot of develop landing page"
          quality={20}
          onClick={openModal}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 text-3xl font-semibold">Develop Landing Page</h2>
          <h3>CSS / SASS / LESS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] md:mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 mx-3">
        <div className="col-span-4 text-gray-300">
          <p className="text-xl tracking-[2px] my-2 font-semibold">
            Front-End Project
          </p>
          <h2 className="text-lg tracking-wide mb-1">Overview</h2>
          <p>
            Landing page for a marketing agency usinng advanced CSS, SCSS and
            LESS. Following BEM best practices, CSS grid, and SASS animations.
            This website has dark mode and is fully responsive.
          </p>
          <a
            href="https://github.com/byron-rod/develop-marketingAgency-landingPage"
            target="_blank"
            rel="noreferrer"
            aria-label="link to github repo"
          >
            <button className="px-6 py-2 mt-4 mr-6 ml-3 bg-[#cabca3] rounded-xl text-black hover:bg-[#cabca3]">
              <FaGithub className="inline-block mr-1 justify-center text-xl" />
              Code
            </button>
          </a>
          <a
            href="https://develop-marketing.vercel.app/"
            target="_blank"
            rel="noreferrer"
            aria-label="link to live demo website"
          >
            <button className="px-8 py-2 mt-4 bg-[#cabca3] rounded-xl text-black hover:bg-gray-700">
              Demo
            </button>
          </a>
        </div>
        <div className="col-span-4 lg:col-span-1 shadow-xl shadow-gray-800 rounded-xl py-4 bg-[#cabca3]/80 mx-3">
          <div className="p-2">
            <p className="text-center font-bold pb-2 text-xl">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-black-600 py-2 flex items-center ml-3">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-black-600 py-2 flex items-center ml-3">
                <RiRadioButtonFill className="pr-1" /> SCSS
              </p>
              <p className="text-black-600 py-2 flex items-center ml-3">
                <RiRadioButtonFill className="pr-1" /> Less
              </p>
              <p className="text-black-600 py-2 flex items-center ml-3">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer text-xl text-[#cabca3]">
            Back
          </p>
        </Link>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={developLanding}
      />
    </div>
  );
};

export default Develop;
