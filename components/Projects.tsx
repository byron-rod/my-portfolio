import React from "react";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4];
  return (
    <div className="h-screen flex relative overflow-hidden flex-col md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="w-full absolute top[30%] bg-gray-500/10 left-0 h-[350px] -skew-y-12"></div>
    </div>
  );
};

export default Projects;
