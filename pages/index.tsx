import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div className="antialiased bg-[#1c1b20] text-white h-screen snap-y overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/5 scrollbar-thumb-[#1c1b20]">
      <Head>
        <title>Byron Rodriguez</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="md:snap-center">
        <About />
      </section>
      <section id="exp" className="md:snap-center">
        {/* @ts-ignore */}
        <WorkExperience />
      </section>
      <section id="education" className="md:snap-center">
        <Education />
      </section>
      <section id="skills" className="md:snap-center">
        <Skills />
      </section>
      <section id="projects" className="">
        <Projects />
      </section>
      <section id="contact" className="">
        <Contact />
      </section>
      <footer className="mb-[10px] bottom-5 p-11">
        <Link href="#hero">
          <Footer />
        </Link>
      </footer>
    </div>
  );
}
