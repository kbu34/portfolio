"use client";

import React from "react";
import Image from "../node_modules/next/image";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((data, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="rounded-xl p-6 shadow-xl duration-300 ease-in sm:hover:scale-105">
                <div className="grid grid-cols-2 items-center justify-center gap-4">
                  <div className="m-auto">
                    <Image
                      src={data.imageUrl}
                      alt="/"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "auto", height: "70px" }}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>{data.name}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
