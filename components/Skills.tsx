"use client";

import React from "react";
import Image from "../node_modules/next/image";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15,
    },
  },
};

const titleAnimationVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
    },
  },
};

function Skills() {
  return (
    <div id="skills" className="w-full p-2 lg:h-screen">
      <div className="mx-auto flex h-full max-w-[1240px] flex-col justify-center">
        <motion.div
          variants={titleAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p className="text-xl uppercase tracking-widest text-[#602aaa]">
            Skills
          </p>
          <h2>What I can do</h2>
        </motion.div>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in sm:hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image
                  src={"/assets/html5.png"}
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in sm:hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image
                  src={"/assets/CSS.png"}
                  alt="/"
                  width="110"
                  height="110"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in sm:hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image
                  src={"/assets/typescript.png"}
                  alt="/"
                  width="75"
                  height="75"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in sm:hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image
                  src={"/assets/Nodejs.png"}
                  alt="/"
                  width="150"
                  height="1"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node.js</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in sm:hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image
                  src={"/assets/angular.png"}
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Angular</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in sm:hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image
                  src={"/assets/nextjs.png"}
                  alt="/"
                  width="140"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next.js</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in sm:hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image
                  src={"/assets/React.png"}
                  alt="/"
                  width="75"
                  height="75"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in sm:hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image
                  src={"/assets/azuredevops.png"}
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Azure DevOps</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in sm:hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image
                  src={"/assets/Python.png"}
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in sm:hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image
                  src={"/assets/golang.png"}
                  alt="/"
                  width="80"
                  height="80"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GoLang</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in sm:hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image
                  src={"/assets/swift.png"}
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Swift</h3>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
