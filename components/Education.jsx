import React from "react";

const Details = ({ title, school, dates, description }) => {
  return (
    <li className="my-5 lg:my-6 first:mt-0 last:mb-1 w-full mx-auto flex flex-col items-center justify-between text-gray-500">
      <div className="">
        <h3 className="text-md md:text-xl lg:text-2xl xl:text-2xl font-semibold lg:mb-3 mb-1">
          {title}&nbsp;@ <span className="text-[#cabca3]">{school}</span>
        </h3>
        <span className="py-5 uppercase text-gray-300 text-sm">{dates}</span>
        <p className="text-sm font-medium w-full">{description}</p>
      </div>
    </li>
  );
};

const WorkExperience = () => {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-xl mt-10">
        Education
      </h3>
      <div className="xl:w-[60%] lg:w-[80%] sm:w-full mx-auto mt-[100px]">
        <div className="absolute left-8 top-0 w-[4px]  text-white" />
        <ul className="w-full flex flex-col items-start justify-between">
          <Details
            title="Full Stack Web Developer"
            school="4Geeks Academy"
            dates="May 2023 - September 2023"
            description="Full-Stack Development with knowledge in HTML, CSS, Bootstrap, Tailwind, JavaScript, React.js, React UI, Node.js, Express.js, Next.js, SQL, PostgreSQL, MongoDB, Python, and Flask"
          />
          <Details
            title="Google Digital Marketing Specialization"
            school="Google / Coursera"
            dates="June 2022 - November 2022"
            description="Digital Marketing & E-Commerce Specialization with knowledge in Google Ads, Google Analytics, Google Marketing Platform, and Google My Business."
          />
          <Details
            title="Meta Certified Digital Marketing Associate"
            school="Meta"
            dates="August 2022 - October 2022"
            description="Meta Social Media Marketing Certification with knowledge in Social Media Marketing, Social Media Advertising, Social Media Management, and Social Media Analytics."
          />
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;