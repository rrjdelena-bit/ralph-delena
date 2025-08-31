import Image from "next/image";
import Link from 'next/link';
import About from "./components/about";
import Experience from "./components/experience";
import Profile from "./components/profile";
import Projects from "./components/projects";
import Education from "./components/education";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="_next__variable_20b187 group/spotlight relative bg-gradient-to-b from-[#213448] via-[#456B8A] to-[#456B8A]">

    <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute [background:radial-gradient(600px_at_689px_2444.5px,rgba(29,78,216,0.15),transparent_80%)]"></div>

    <div>

        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">

          <div className="lg:flex lg:justify-between lg:gap-4">
            <Profile></Profile>

            <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
              <About></About>
              <Experience></Experience>
              <Projects></Projects>
              <Education></Education>
              <Footer></Footer>
            </main>

          </div>

        </div>
      </div>

    </div>
  );
}
