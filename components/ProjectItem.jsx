import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, backgroundImg, projectUrl, projectType }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-700 rounded-xl p-4 group hover:bg-gradient-to-r from-gray-400 to-gray-800">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="Background Image"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-lg md:text-2xl text-black font-semibold text-center">
          {title}
        </h3>
        <p className="pb-2 pt-2 text-gray-200 text-center">{projectType}</p>
        <Link href={projectUrl}>
          <p className="text-center py-2 rounded-md bg-white text-black text-sm md:text-lg cursor-pointer mb-2 px-8 md:px-12">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
