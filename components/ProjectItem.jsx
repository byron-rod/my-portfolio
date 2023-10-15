import React from "react";
import Image from "next/image";
import nikeImage from "../public/nike.png";
import Link from "next/link";

const ProjectItem = ({ title, backgroundImg, projectUrl, projectType }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-500 rounded-xl p-4 group hover:bg-gradient-to-r from-gray-100 to-gray-700">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="Background Image"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{projectType}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-md bg-white text-gray-500 text-lg cursor-pointer px-12">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
