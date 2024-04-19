import React from "react";

const Details = ({ title, school, dates, description }) => {
  return (
    <li className="my-2 lg:my-4 first:mt-0 last:mb-8 w-full mx-auto flex flex-col items-center justify-between text-gray-300">
      <div className="">
        <h3 className="text-md md:text-xl lg:text-xl xl:text-2xl font-semibold lg:mb-3">
          {title}&nbsp;@{" "}
          <span className="text-[#cabca3] font-bold">{school}</span>
        </h3>
        <span className="py-3 uppercase text-gray-300 smallText">{dates}</span>
        <p className="smallText md:text-sm xl:text-lg font-medium w-full">
          {description}
        </p>
      </div>
    </li>
  );
};

const WorkExperience = () => {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="relative md:absolute top-12 mb-2 md:top-14 uppercase tracking-[18px] md:tracking-[20px] text-gray-300 text-xl xl:text-2xl mt-8">
        Education
      </h3>
      <div className="xl:w-[75%] 2xl:w-[75%] lg:w-[75%] sm:w-full mx-auto mt-[40px] md:mt-[100px]">
        <div className="absolute left-8 top-0 w-[4px] text-white" />
        <ul className="w-full flex flex-col items-start justify-between">
          <Details
            title="Technical SEO Certification"
            school="Blue Array Academy"
            dates="January 2024 - Abril 2024"
            description="Technical SEO certification with knowledge in page experience, crawlability, sitemaps, internal linking, schemas, image optimization, security, accessibility, and the best tools for a technical audit process."
          />
          <Details
            title="Full Stack Web Developer"
            school="4Geeks Academy"
            dates="May 2023 - September 2023"
            description="Full-Stack Development with knowledge in HTML, CSS, Bootstrap, Tailwind, JavaScript, React.js, React UI, Node.js, Express.js, Next.js, SQL, PostgreSQL, MongoDB, Python, and Flask."
          />
          <Details
            title="Meta Social Media Marketing Specialization"
            school="Meta / Coursera"
            dates="June 2022 - November 2022"
            description="Establishing and managaging a social media presence, community engagement, social media marketing, creating and managing content, advertising campaings with Ads Manager, evaluating and measuring content performance."
          />
          {/* <Details
            title="Meta Certified Digital Marketing Associate"
            school="Meta"
            dates="August 2022 - October 2022"
            description="Meta Social Media Marketing Certification with knowledge in Social Media Marketing, Social Media Advertising, Social Media Management, and Social Media Analytics."
          /> */}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
