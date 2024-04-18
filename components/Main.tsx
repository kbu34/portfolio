import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Link from "../node_modules/next/link";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Welcome to my website!
          </p>
          <h1 className="py-4 text-gray-700">
            Hello, I&apos;m <span className="text-[#602aaa]">Phillip</span>!
          </h1>
          <h1 className="py-4 text-gray-700">
            I&apos;m a full stack software engineer!
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a full stack developer currently living in Christchurch,
            New Zealand. Since the day I first jumped into programming, my
            passion for software development hasn&apos;t changed. I love all
            aspects of computers and software engineering. Whether it&apos;s
            embedded system or cloud computing. I&apos;ve had the privilege of
            working with some amazing people in the tech industry so far and
            would love to do it again.
          </p>
          <div className="flex  items-center justify-between  max-w-[330px] m-auto py-4">
            <Link href={"https://www.linkedin.com/in/phillip-kim-1001731bb/"}>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href={"https://github.com/kbu34/"}>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link href={"mailto:phillipkim156@gmail.com"}>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href={"/#about"}>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
