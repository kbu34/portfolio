import image1 from "public/assets/portfolio.png";
import image2 from "public/assets/bloodstain.png";
import image3 from "public/assets/wander.png";
import htmlImage from "public/assets/html5.png";
import cssImage from "public/assets/CSS.png";
import tsImage from "public/assets/typescript.png";
import nodeImage from "public/assets/Nodejs.png";
import angularImage from "public/assets/angular.png";
import nextImage from "public/assets/nextjs.png";
import reactImage from "public/assets/React.png";
import azureImage from "public/assets/azuredevops.png";
import pythonImage from "public/assets/Python.png";
import golangImage from "public/assets/golang.png";
import swiftImage from "public/assets/swift.png";
import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";

export const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "The website you are on right now! I made this website to learn Next.js and Tailwind CSS. I also use this website to try things that I think are cool.",
    tags: ["Next.js", "Tailwind", "TypeScript", "React"],
    imageUrl: image1,
  },
  {
    title: "Automated Bloodstain Segmentation",
    description:
      "Industrial project in conjunction with ESR. It takes one or more images of bloodstains and determines what type of bloodstain they are using convolutional neural network.",
    tags: ["AI", "Computer Vision", "Deep Learning", "Python"],
    imageUrl: image2,
  },
  {
    title: "Wander",
    description:
      "Whole year project with 7 other students. Wander is a service where users can organise and participate in fitness events. These activities can also have metadata such as location.",
    tags: ["Vue", "Java", "Gherkin", "JavaScript", "SQL", "API"],
    imageUrl: image3,
  },
] as const;

export const experienceData = [
  {
    title: "Software Engineer",
    location: "Christchurch, Canterbury, NZ",
    organisation: "Trimble Navigation NZ Ltd",
    description:
      "I worked as a full stack engineer for a civil construction web application. This job consisted of actively constributing to the source code base, including implementation of new features, fixing bugs, review code, and upgrading libraries, as well as participating in meetings and coming up with new ideas.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 ~ 2023",
  },
  {
    title: "Bachelor of Engineering with Honours",
    location: "Christchurch, Canterbury, NZ",
    organisation: "University of Canterbury",
    description:
      "I studied a variety of topics on Computer Science and Software Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Intern Software Engineer",
    location: "Christchurch, Canterbury, NZ",
    organisation: "Seequent",
    description:
      "This internship project involved iOS development using Swift. Metal framework was also used for 3D graphics developement.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 ~ 2022",
  },
  {
    title: "Software Engineering Intern",
    location: "Hamilton, Waikato, NZ",
    organisation: "Endace Technology Ltd",
    description:
      "My first internship project! I developed a custom Terraform provider from scratch using GoLang by myself.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 ~ 2021",
  },
] as const;

export const linksData = [
  {
    link: "https://www.linkedin.com/in/phillip-kim-1001731bb/",
    symbol: React.createElement(FaLinkedinIn),
  },
  {
    link: "https://github.com/kbu34/",
    symbol: React.createElement(FaGithub),
  },
  {
    link: "mailto:phillipkim156@gmail.com",
    symbol: React.createElement(AiOutlineMail),
  },
  {
    link: "/#about",
    symbol: React.createElement(BsPersonLinesFill),
  },
] as const;

export const skillsData = [
  {
    name: "HTML",
    imageUrl: htmlImage,
  },
  {
    name: "CSS",
    imageUrl: cssImage,
  },
  {
    name: "TypeScript",
    imageUrl: tsImage,
  },
  {
    name: "Node.js",
    imageUrl: nodeImage,
  },
  {
    name: "Angular",
    imageUrl: angularImage,
  },
  {
    name: "Next.js",
    imageUrl: nextImage,
  },
  {
    name: "React",
    imageUrl: reactImage,
  },
  {
    name: "Azure DevOps",
    imageUrl: azureImage,
  },
  {
    name: "Python",
    imageUrl: pythonImage,
  },
  {
    name: "GoLang",
    imageUrl: golangImage,
  },
  {
    name: "Swift",
    imageUrl: swiftImage,
  },
] as const;
