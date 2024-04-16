import React from "react";
import ProjectsItem from "./ProjectItem.jsx";
import nikeImg from "../public/images/nikeBan.webp";
import netflixImg from "../public/images/netflixBan.webp";
import techImg from "../public/images/techjobsBan.webp";
import portImg from "../public/images/portfolioBan.webp";
import campImg from "../public/images/campsiteBan.webp";
import byronImg from "../public/images/byronEatsBan.webp";
import foodyBuddyImg from "../public/images/foodybuddy.webp";
import sassPortfolio from "../public/images/sass-port.webp";
import developLanding from "../public/images/develop.webp";
import lensLoop from "../public/images/lensloop.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-8">
        <h3 className="top-24 uppercase tracking-[20px] text-gray-300 text-xl lg:text-2xl mt-9 mb-0 text-center">
          Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-4 p-6 md:p-14">
          <ProjectsItem
            title="LensLoop"
            backgroundImg={lensLoop}
            projectUrl="/lensloop"
            projectType="Full-Stack"
            aria-label="Instagram clone full stack project that has its code and demo available"
          />
          <ProjectsItem
            title="Netflix Clone"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            projectType="Full-Stack"
            aria-label="Netflix clone full stack project that has its code and demo available"
          />
          <ProjectsItem
            title="Develop Marketing"
            backgroundImg={developLanding}
            projectUrl="/develop"
            projectType="Front-End"
            aria-label="Landing page"
          />
          <ProjectsItem
            title="SASS Portfolio"
            backgroundImg={sassPortfolio}
            projectUrl="/sassportfolio"
            projectType="Front-End"
            aria-label="SASS portfolio project"
          />
          <ProjectsItem
            title="Tech Jobs"
            backgroundImg={techImg}
            projectUrl="/techjobs"
            projectType="Full-Stack"
            aria-label="Job board full stack project that has its code and demo available"
          />
          <ProjectsItem
            title="Foody Buddy"
            backgroundImg={foodyBuddyImg}
            projectUrl="/foodybuddy"
            projectType="Front-End"
            aria-label="The code for Foody Buddy a Google Map app"
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
