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
            I&apos;m also a full stack developer!
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a full stack developer with experience with JavaScript
            frameworks such as Angular and Vue. I also have experience with C#
            and .NET API development. As well as MySQL. At the moment, I&apos;m
            trying to branch out to other JavaScript frameworks such as Next.JS
            and container management using Kubernetes.
          </p>
          <div className="flex  items-center justify-between  max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href={"https://www.linkedin.com/in/phillip-kim-1001731bb/"}>
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href={"https://github.com/kbu34/"}>
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href={"mailto:phillipkim156@gmail.com"}>
                <AiOutlineMail />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href={"/#about"}>
                <BsPersonLinesFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
