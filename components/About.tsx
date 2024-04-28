"use client";

import React from "react";
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

const paragraphAnimationVariants = {
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

const imageAnimationVariants = {
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

const About = () => {
  return (
    <div id="about" className="flex w-full items-center p-2 py-16 md:h-screen">
      <div className="m-auto max-w-[1240px] grid-cols-3 gap-8 md:grid">
        <div className="col-span-2">
          <motion.div
            variants={titleAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p className="text-xl uppercase tracking-widest text-[#602aaa]">
              About
            </p>
            <h2 className="py-4">Who I am</h2>
          </motion.div>
          <motion.div
            variants={paragraphAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p className="py-2 text-gray-600">
              Hi again, I&apos;m Phillip. I like making good software.
            </p>
            <p className="py-2 text-gray-600">
              I&apos;ve always been fascinated by engineering and computers
              since when I was young.
              <br />
              My first encounter with software development was in high school
              when I was 15. When the school offered a digital technology
              course. In that class, I learned the joy of seeing the code that I
              had written working and helping people with their daily lives.
              This made me realise that I wanted to make software development my
              career. I also started to learn more about how computers work in
              my own time. Which lead up to building my own desktop computer and
              installing Arch Linux on it in my university days.
            </p>
            <p className="py-2 text-gray-600">
              In university, I&apos;ve decided to major in software engineering.
              While I was studying, I came across many different problems and
              tools and solutions to solve those problems. I also had
              opportunities to come up with my own solutions to those problems
              and implement them. I&apos;ve also completed 2 summer internships
              as my time as a student. My time in university has taught me how
              to ship maintainable and readble code for future development
              cycle.
              <br />
              In the summer of 2022, I graduated from University of Canterbury
              with Bachelor of Engineering with Honours in Software Engineering.
            </p>
            <p className="py-2 text-gray-600">
              I joined Trimble in 2022 as a full stack engineer. This was my
              first opportunity to work alongside with other professional
              engineers and product managers in a team. I picked up technical
              skills such as Angular and .NET C# as well as improve my soft
              skills such as communications and time management.
            </p>
            <p className="py-2 text-gray-600">
              When I&apos;m not working, I like going on walks and tramping. I
              also save the world from bad guys if I feel like it. Or synthesise
              new items in my atelier using alchemy.
            </p>
            <p className="py-2 italic text-gray-600">More to come...</p>
          </motion.div>
        </div>
        <motion.div
          variants={imageAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="m-auto flex h-auto w-full items-center justify-center rounded-xl p-4 shadow-xl shadow-gray-400 duration-300 ease-in sm:hover:scale-105">
            <img
              className="rounded-xl"
              src="https://picjumbo.com/wp-content/uploads/new-macbook-pro-with-iphone-1080x1620.jpg"
              alt=""
              width={"3000"}
              height={"1500"}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
