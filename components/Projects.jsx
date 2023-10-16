import React from "react";
import ProjectsItem from "./ProjectItem.jsx";
import nikeImg from "../public/images/nike-pro.png";
import netflixImg from "../public/images/netflix-clone.png";
import techImg from "../public/images/tech-jobs.png";
import portImg from "../public/images/portfolio.png";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-xl mt-10 mb-3 text-center">
          Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          <ProjectsItem
            title="Netflix and Chill"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            projectType="Full-Stack"
          />
          <ProjectsItem
            title="Tech Jobs"
            backgroundImg={techImg}
            projectUrl="/techjobs"
            projectType="Full-Stack"
          />
          <ProjectsItem
            title="Nike"
            backgroundImg={nikeImg}
            projectUrl="/nike"
            projectType="Front-End"
          />
          <ProjectsItem
            title="Portfolio"
            backgroundImg={portImg}
            projectUrl="/portfolio"
            projectType="Front-End"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
