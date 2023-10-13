import React from "react";
import { ArrowDownTrayIcon, MapPinIcon } from "@heroicons/react/20/solid";
import { HiOutlineMail } from "react-icons/hi";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:byron303@gmail?subject=${formData.subject}&body=${formData.message}`;
  };

  return (
    <div className="h-screen flex relative overflow-hidden flex-col md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-6">
        <h3 className="text-lg lg:text-2xl font-semibold text-center justify-center text-[#cabca3] mt-5">
          Please contact me for any inquiries:
        </h3>

        <div className="flex items-center space-x-5 justify-center text-center">
          <Link href="/resume2023.pdf" target="_blank">
            <ArrowDownTrayIcon className="text-gray-500 w-10 h-10" />
          </Link>
          <p className="text-md lg:text-lg text-[#cabca3]">
            Download Resume PDF
          </p>
        </div>

        <div className="flex items-center space-x-4 justify-center">
          <HiOutlineMail className="text-gray-500 w-10 h-10" />
          <p className="text-md lg:text-lg text-[#cabca3]">
            byron303@gmail.com
          </p>
        </div>

        <div className="flex items-center space-x-2 justify-center">
          <MapPinIcon className="text-gray-500 w-8 h-8" />
          <p className="text-sm lg:text-md text-[#cabca3]">
            Panajachel, Guatemala
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
          target="_blank"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#cabca3] py-5 px-10 rounded-md text-black font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
