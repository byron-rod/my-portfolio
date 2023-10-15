import React from "react";

export type Props = {
  position: string;
  company: string;
  dates: string;
  work: string;
};

const Details = ({ position, company, dates, work }: Props) => {
  return (
    <li className="my-5 lg:my-6 first:mt-0 last:mb-1 w-full mx-auto flex flex-col items-center justify-between text-gray-500">
      <div className="">
        <h3 className="text-md md:text-xl lg:text-2xl xl:text-2xl font-semibold lg:mb-3 mb-1">
          {position}&nbsp;@ <span className="text-[#cabca3]">{company}</span>
        </h3>
        <span className="py-5 uppercase text-gray-300 text-sm">{dates}</span>
        <p className="text-sm font-medium w-full">{work}</p>
      </div>
    </li>
  );
};

const WorkExperience = (props: Props) => {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-xl mt-10">
        Experience
      </h3>
      <div className="xl:w-[60%] lg:w-[80%] sm:w-full mx-auto mt-[100px]">
        <div className="absolute left-8 top-0 w-[4px]  text-white" />
        <ul className="w-full flex flex-col items-start justify-between">
          <Details
            position="Property Manager"
            company="Origami Management"
            dates="2021 - Present"
            work="Realtor, Airbnb Superhost, and property manager for different vacation rentals:
            property maintenance, social media management,
            video editing,
            real estate photography,
            five-star customer service,
            calendar management"
          />
          <Details
            position="Social Media Manager"
            company="Homes Guatemala"
            dates="2016 - 2021"
            work="Social Media Manager and Marketing coordinator. Content creator and video editing for company webiste, Instagram, Tik-Tok and Facebook. Google and Meta Ads. Copywriting for Email Marketing."
          />
          <Details
            position="Sales Supervisor"
            company="Royal Caribbean"
            dates="2014 - 2016"
            work="Supervisor for Customer Service Sales Representatives for Royal Caribbean International Cruises and Onboarding Trainer for new representatives, assisting human resourses with recruitment."
          />
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
