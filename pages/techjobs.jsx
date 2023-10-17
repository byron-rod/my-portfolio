import React from "react";
import Image from "next/image";
import ImageModal from "../components/ImageModal";
import techImg from "../public/images/tech-jobs.png";
import { RiRadioButtonFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import VideoModal from "../components/VideoModal";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Techjobs = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState();

  const openImageModal = () => {
    setIsImageModalOpen(true);
  };

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  useEffect(() => {
    if (isVideoModalOpen) {
      setVideoUrl("https://www.youtube.com/watch?v=oafhUOu66dk");
    }
  }, [isVideoModalOpen]);

  return (
    <div className="w-full bg-[#1c1b20] overflow-x-hidden scrollbar scrollbar-track-[#1c1b20] scrollbar-thumb-gray-400">
      <div className="w-screen h-[50vh] relative -400/20 ">
        <div
          className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 hover:cursor-pointer"
          onClick={openImageModal}
        />
        <Image
          className="absolute z-1 hover:cursor-pointer"
          fill
          style={{ objectFit: "cover" }}
          src={techImg}
          alt="/"
          onClick={openImageModal}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 text-3xl font-semibold">
            Tech-Jobs Latin America
          </h2>
          <h3>React JS / Bootstrap / Python</h3>
        </div>
      </div>

      <div className="max-w-[1240px] md:mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 mx-3">
        <div className="col-span-4 text-gray-300">
          <p className="text-xl tracking-[2px] my-2 font-semibold">
            Full-Stack Project
          </p>
          <h2 className="text-lg tracking-wide mb-1">Overview</h2>
          <p>
            This application was our final project for graduating from the
            4Geeks Academy Boot Camp. It&#39;s a full-stack application using
            React JS as the main library for Front-End. Bootstrap and custom CSS
            styling was used for design. Basic email registration using password
            encryption with Bcrypt, we have Google Authorization login with
            Firebase. For the Back-End, we used Python, SQLAlchemy, and Flask
            for REST API. This application has basic functionalities of a CRUD
            application. As a company, you can create your user, then a job
            post, and delete it. As a user, you can apply to a job connecting
            directly with EmailJS API for direct email messaging to the company.
          </p>
          <Link
            href="https://github.com/4GeeksAcademy/latam_tech_jobs"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-6 py-2 mt-4 mr-6 ml-3 bg-[#cabca3] rounded-xl text-black hover:bg-gray-700">
              <FaGithub className="inline-block mr-1 justify-center text-xl" />
              Code
            </button>
          </Link>

          <button
            className="px-8 py-2 mt-4 bg-[#cabca3] rounded-xl text-black hover-bg-gray-700"
            onClick={openVideoModal}
          >
            Demo
          </button>
        </div>
        <div className="col-span-4 lg:col-span-1 shadow-xl shadow-gray-800 rounded-xl py-4 bg-[#cabca3]/80 mx-3">
          <div className="p-2">
            <p className="text-center font-bold pb-2 text-xl">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-black-600 text-sm md:text-base py-2 flex items-center ml-1 md:ml-3">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-black-600 text-sm md:text-base py-2 flex items-center ml-1 md:ml-3">
                <RiRadioButtonFill className="pr-1" /> Bootstrap
              </p>
              <p className="text-black-600 text-sm md:text-base py-2 flex items-center ml-1 md:ml-3">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-black-600 text-sm md:text-base py-2 flex items-center ml-1 md:ml-3">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-black-600 text-sm md:text-base py-2 flex items-center ml-1 md:ml-3">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
              <p className="text-black-600 text-sm md:text-base py-2 flex items-center ml-1 md:ml-3">
                <RiRadioButtonFill className="pr-1" /> Flask
              </p>
              <p className="text-black-600 text-sm md:text-base py-2 flex items-center ml-1 md:ml-3">
                <RiRadioButtonFill className="pr-1" /> SQLAlchemy
              </p>
              <p className="text-black-600 text-sm md:text-base py-2 flex items-center ml-1 md:ml-3">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-black-600 text-sm md:text-base py-2 flex items-center ml-1 md:ml-3">
                <RiRadioButtonFill className="pr-1" /> EmailJS API
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
        isOpen={isImageModalOpen}
        onClose={closeImageModal}
        imageUrl={techImg}
      />
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
        videoUrl={videoUrl}
      />
    </div>
  );
};

export default Techjobs;
