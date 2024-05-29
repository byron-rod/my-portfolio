import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import heroImg from "../public/images/byronHero.webp";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text] = useTypewriter({
    words: [
      "#CommunityManager",
      "<fullStackDeveloper/>",
      "http://SEO-Specialist",
      "I am Byron Rodriguez",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={heroImg}
        alt="Picture of the author"
        className="rounded-full relative mx-auto object-cover h-32 w-32"
        priority
        quality={25}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-300 pb-2 tracking-[8px]">
          Social Media Manager
        </h2>
        <h1 className="text-2xl lg:text-3xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          {/* <Cursor cursorColor="white" /> */}
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton mr-1">About</button>
          </Link>
          <Link href="#exp">
            <button className="heroButton mr-1">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton mr-1">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton mr-1">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
