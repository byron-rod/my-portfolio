import React from "react";
import ProjectsItem from "./ProjectItem.jsx";
import nikeImg from "../public/images/nike-pro.png";
import netflixImg from "../public/images/netflix-clone.png";
import techImg from "../public/images/tech-jobs.png";
import portImg from "../public/images/portfolio.png";
import campImg from "../public/images/campsite.png";
import byronImg from "../public/images/byron-eats.png";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-8">
        <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-xl lg:text-2xl mt-9 mb-0 text-center">
          Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-4 p-6 md:p-14">
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
            title="Byron Eats"
            backgroundImg={byronImg}
            projectUrl="/byroneats"
            projectType="Front-End"
          />
          <ProjectsItem
            title="Portfolio"
            backgroundImg={portImg}
            projectUrl="/portfolio"
            projectType="Front-End"
          />
          <ProjectsItem
            title="Campsite"
            backgroundImg={campImg}
            projectUrl="/campsite"
            projectType="Front-End"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
