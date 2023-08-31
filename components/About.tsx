import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#602aaa]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">Not your average developer!</p>
          <p className="py-2 text-gray-600">
            I&apos;ve always been fascinated by engineering since high school.
            When I was 15, I first encountered software development in class. I
            was overwhelmed with joy seeing the code I wrote working and helping
            people with their lives. Ever since then, I knew I wanted to make
            software development my career. I also started to learn more about
            how computers work in my own time.
          </p>
          <p className="py-2 text-gray-600">
            In university, I&apos;ve decided to major in software engineering.
            While I was studying, I came across many different problems and
            tools and solutions to solve those problems. I also had
            opportunities to come up with my own solutions to those problems and
            implement them. I&apos;ve also completed 2 summer internships as my
            time as a student. In the summer of 2022, I graduated from
            University of Canterbury with Bachelor of Engineering with Honours
            in Software Engineering.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://picjumbo.com/wp-content/uploads/new-macbook-pro-with-iphone-1080x1620.jpg"
            alt=""
            width={"3000"}
            height={"1500"}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
