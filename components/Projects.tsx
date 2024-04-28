"use client";

import { projectsData } from "@/lib/data";
import React from "react";
import Project from "./Project";
import { motion } from "framer-motion";

const titleAnimationVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const Projects = () => {
  return (
    <div id="projects" className="w-full px-2 py-16">
      <div className="mx-auto h-full max-w-[1240px]">
        <motion.div
          variants={titleAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p className="text-xl uppercase tracking-widest text-[#602aaa]">
            Projects
          </p>
          <h2 className="py-4">What I&apos;ve built</h2>
        </motion.div>

        <section>
          <div className="flex flex-col items-center">
            {projectsData.map((project, index) => (
              <React.Fragment key={index}>
                <Project {...project} />
              </React.Fragment>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
