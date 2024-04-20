"use client";

import Image from "next/image";
import { projectsData } from "@/lib/data";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-5 sm:mb-8 last:mb-0 group"
    >
      <section
        ref={ref}
        className="shadow-lg shadow-gray-400 max-w-[26rem] sm:max-w-[45rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem] max-h-[30rem] relative hover:bg-gray-200 transition sm:group-even:pl-8 rounded-lg"
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pt-5 flex flex-col h-full sm:group-even:ml-[18rem] sm:group-odd:mr-[19rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          className="sm:absolute top-30 sm:top-8 sm:-right-40 sm:w-[28.25rem] rounded-t-lg shadow-2xl sm:group-even:right-[initial] sm:group-even:-left-40 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] sm:group-even:group-hover:translate-x-3 sm:group-even:group-hover:translate-y-3 sm:group-even:group-hover:rotate-2 transition"
          src={imageUrl}
          alt="Project I worked on."
          quality={95}
          width={2500}
          height={1500}
        />
      </section>
    </motion.div>
  );
};

export default Project;
