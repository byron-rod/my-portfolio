import React from "react";
import ProjectsItem from "./ProjectItem.jsx";
import nikeImg from "../public/images/nikeBan.jpg";
import netflixImg from "../public/images/netflixBan.jpg";
import techImg from "../public/images/techjobsBan.jpg";
import portImg from "../public/images/portfolioBan.jpg";
import campImg from "../public/images/campsiteBan.jpg";
import byronImg from "../public/images/byronEatsBan.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
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
            aria-label="Netflix clone full stack project that has its code and demo available"
          />
          <ProjectsItem
            title="Tech Jobs"
            backgroundImg={techImg}
            projectUrl="/techjobs"
            projectType="Full-Stack"
            aria-label="Job board full stack project that has its code and demo available"
          />
          <ProjectsItem
            title="Nike"
            backgroundImg={nikeImg}
            projectUrl="/nike"
            projectType="Front-End"
            aria-label="Nike ecommerce landing page project that has its code and demo available"
          />
          <ProjectsItem
            title="Byron Eats"
            backgroundImg={byronImg}
            projectUrl="/byroneats"
            projectType="Front-End"
            aria-label="Uber eats clone front-end project that has its code and demo available"
          />
          <ProjectsItem
            title="Portfolio"
            backgroundImg={portImg}
            projectUrl="/portfolio"
            projectType="Front-End"
            aria-label="The code for My portfolio project that has its code"
          />
          <ProjectsItem
            title="Campsite"
            backgroundImg={campImg}
            projectUrl="/campsite"
            projectType="Front-End"
            aria-label="Campsite landing page application, front-end project that has its code and demo available"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
