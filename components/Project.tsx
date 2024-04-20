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
      className="group mb-5 last:mb-0 sm:mb-8"
    >
      <section
        ref={ref}
        className="relative max-h-[22rem] max-w-[26rem] overflow-hidden rounded-lg border border-black/5 shadow-lg shadow-gray-400 transition hover:bg-gray-200 sm:h-[20rem] sm:max-w-[45rem] sm:pr-8 sm:group-even:pl-8"
      >
        <div className="flex h-full flex-col px-5 pb-3 sm:pb-7 sm:pl-10 sm:pt-5 sm:group-odd:mr-[19rem] sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          className="top-30 rounded-t-lg shadow-2xl transition group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] sm:absolute sm:-right-40 sm:top-8 sm:w-[28.25rem] sm:group-even:-left-40 sm:group-even:right-[initial] sm:group-even:group-hover:translate-x-3 sm:group-even:group-hover:translate-y-3 sm:group-even:group-hover:rotate-2"
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
