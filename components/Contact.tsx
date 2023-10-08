import React from "react";
import { PhoneIcon, MapPinIcon } from "@heroicons/react/20/solid";
import { HiOutlineMail } from "react-icons/hi";
import { useForm, SubmitHandler } from "react-hook-form";

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
      <div className="flex flex-col space-y-10">
        <h3 className="text-2xl font-semibold text-center text-[#cabca3]">
          Please contact me for any inquiries:
        </h3>

        <div className="flex items-center space-x-5 justify-center">
          <HiOutlineMail className="text-gray-500 w-10 h-10" />
          <p className="text-2xl text-[#cabca3]">byron303@gmail.com</p>
        </div>

        <div className="flex items-center space-x-5 justify-center">
          <MapPinIcon className="text-gray-500 w-10 h-10" />
          <p className="text-2xl text-[#cabca3]">Panajachel, Guatemala</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
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
