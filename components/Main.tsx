"use client";

import React from "react";
import Link from "../node_modules/next/link";
import { motion } from "framer-motion";
import { linksData } from "@/lib/data";

const welcomeAnimationVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const titleAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
    },
  },
};

const paragraphAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
    },
  },
};

const linkAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25 + 0.1 * index,
    },
  }),
};

const Main = () => {
  return (
    <div id="main" className="h-screen w-full text-center">
      <div className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2">
        <div>
          <motion.div
            variants={welcomeAnimationVariants}
            initial="initial"
            animate="animate"
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-widest text-gray-600">
              Welcome to my website!
            </p>
          </motion.div>
          <motion.div
            variants={titleAnimationVariants}
            initial="initial"
            animate="animate"
            viewport={{ once: true }}
          >
            <h1 className="py-4 text-gray-700">
              Hello, I&apos;m{" "}
              <span className="text-[#602aaa] dark:text-[#947cb5]">
                Phillip
              </span>
              !
            </h1>
            <h1 className="py-4 text-gray-700">
              I&apos;m a full stack software engineer!
            </h1>
          </motion.div>
          <motion.div
            variants={paragraphAnimationVariants}
            initial="initial"
            animate="animate"
            viewport={{ once: true }}
          >
            <p className="m-auto max-w-[70%] py-4 text-gray-600">
              I&apos;m a full stack developer currently living in Christchurch,
              New Zealand. Since the day I first jumped into programming, my
              passion for software development hasn&apos;t changed. I love all
              aspects of computers and software engineering. Whether it&apos;s
              embedded system or cloud computing. I&apos;ve had the privilege of
              working with some amazing people in the tech industry so far and
              would love to do it again.
            </p>
          </motion.div>
          <ul className="m-auto  flex max-w-[330px]  items-center justify-between py-4">
            {linksData.map((data, index) => (
              <motion.li
                key={data.link}
                variants={linkAnimationVariants}
                initial="initial"
                animate="animate"
                viewport={{ once: true }}
                custom={index}
              >
                <div className="">
                  <Link href={data.link}>
                    <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                      {data.symbol}
                    </div>
                  </Link>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
