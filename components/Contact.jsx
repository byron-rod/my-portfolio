import React, { useState } from "react";
import {
  HiDocumentDownload,
  HiOutlineMail,
  HiPhoneOutgoing,
} from "react-icons/hi";

import Link from "next/link";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_mccyd0m";
    const templateId = "template_jiru985";
    const publicKey = "COat3Hm77F7GB-dBq";

    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
      to_name: "Byron",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully, I'll get back to you shortly");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert("Message failed to send, please try again");
      });
  };

  return (
    <>
      <div className="flex w-full min-h-screen justify-center items-center p-5">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-1 w-full max-w-xl p-8">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h3 className="uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl mb-4 text-center">
                Contact
              </h3>
              <p className="pt-2 text-gray-300 text-sm mt-8">
                For more information or inquiries, please contact me.
              </p>
            </div>
            <div className="flex flex-col md:flex-col space-y-4">
              <div className="inline-flex space-x-2 items-center">
                <HiOutlineMail className="text-gray-400 text-2xl" />
                <span className="text-gray-300">byron303@gmail.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <HiPhoneOutgoing className="text-gray-400 text-2xl" />
                <span className="text-gray-300">+502-3882-4965</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <Link href="/resume2023.pdf" target="_blank">
                  <HiDocumentDownload className="text-gray-400 text-2xl" />
                </Link>
                <span className="text-gray-400">Download Resume PDF</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-500 rounded-xl shadow-lg p-5 md:w-80">
            <form
              onSubmit={handleSubmit}
              className="emailForm flex flex-col space-y-4 text-black"
            >
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="ring-1 ring-gray-200 w-full rounded-md px-4 py-2 outilne-none text-black focus:ring-2 focus:ring-[#cabca3] bg-gray-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="ring-1 ring-gray-200 bg-gray-300 w-full rounded-md px-4 py-2 outilne-none text-gray-800 focus:ring-2 focus:ring-[#cabca3]"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="ring-1 ring-gray-200 bg-gray-300 w-full rounded-md px-4 py-2 outilne-none text-gray-800 focus:ring-2 focus:ring-[#cabca3]"
                />
              </div>
              <button
                className="inline-block self-end bg-[#cabca3] text-black font-semibold px-6 py-2 rounded-lg hover:bg-gray-700"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
