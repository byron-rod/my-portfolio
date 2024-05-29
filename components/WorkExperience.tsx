import React from "react";

export type Props = {
  position: string;
  company: string;
  dates: string;
  work: string;
};

const Details = ({ position, company, dates, work }: Props) => {
  return (
    <li className="my-2 lg:my-4 first:mt-0 last:mb-8 w-full mx-auto flex flex-col items-center justify-between text-gray-300">
      <div className="">
        <h3 className="text-md md:text-xl lg:text-xl xl:text-2xl font-semibold lg:mb-3">
          {position}&nbsp;@{" "}
          <span className="text-[#cabca3] font-bold">{company}</span>
        </h3>
        <span className="py-3 uppercase text-gray-300 smallText">{dates}</span>
        <p className="smallText md:text-sm xl:text-lg font-medium w-full">
          {work}
        </p>
      </div>
    </li>
  );
};

const WorkExperience = (props: Props) => {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="relative md:absolute top-12 mb-2 md:top-16 lg:top-22 uppercase tracking-[17px] md:tracking-[20px] text-gray-300 text-xl xl:text-2xl mt-3 md:mt-4">
        Experience
      </h3>
      <div className="xl:w-[75%] lg:w-[75%] 2xl:w-[75%] sm:w-full mx-auto mt-[40px] md:mt-[80px]">
        <div className="absolute left-8 top-0 w-[4px]  text-white" />
        <ul className="w-full flex flex-col items-start justify-between">
          <Details
            position="Social Media Marketing"
            company="Freelance"
            dates="2021 - 2024"
            work="SEO specialist, social media marketing for Meta, and community manager. Optimizing content to align with SEO and marketing goals. 
            Help build brand presence with marketing campaings."
          />
          <Details
            position="Social Media Manager"
            company="Homes Guatemala"
            dates="2016 - 2021"
            work="Community manager and Marketing coordinator. Content creation, SEO and video editing for company 
            website, Instagram, TikTok and Facebook. Copywriting for Email Marketing."
          />
          <Details
            position="Sales Supervisor"
            company="Xerox Guatemala"
            dates="2014 - 2016"
            work="Supervisor for Customer Service Sales Representatives for Royal Carribbean Cruises and Onboarding Trainer for new representatives, 
            assisting human resourses with recruitment."
          />
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
