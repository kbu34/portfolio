"use client";

import { experienceData } from "@/lib/data";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import { CiStar } from "react-icons/ci";

const TimelineElements = ({ item }: any) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        contentStyle={{
          background: "#ecf0ec",
          color: "#1f2937",
          boxShadow: "10px 5px 30px rgba(0, 0, 0, 0.15)",
          borderTop: "3px solid #602aaa",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight: "0.4rem solid #602aaa",
        }}
        visible={inView}
        date={item.date}
        icon={item.icon}
        iconStyle={{
          background: "#602aaa",
          color: "white",
          boxShadow: "10px 5px 30px rgba(0, 0, 0, 0.12)",
        }}
      >
        <h3 className="font-bold capitalize">{item.title}</h3>
        <h3 className="py-1 font-semibold capitalize">{item.organisation}</h3>
        <p className="!mt-0 pb-1 font-normal">{item.location}</p>
        <p className="!mt-1 !font-normal text-gray-700">{item.description}</p>
      </VerticalTimelineElement>
    </div>
  );
};

const Experience = () => {
  return (
    <div id="experience" className="w-full px-2 py-16">
      <div className="mx-auto h-full max-w-[1240px]">
        <p className="text-xl uppercase tracking-widest text-[#602aaa]">
          Experience
        </p>
        <h2 className="py-4">What I&apos;ve done</h2>
        <VerticalTimeline lineColor="">
          {experienceData.map((item, index) => {
            return <TimelineElements key={index} item={item} />;
          })}
          <VerticalTimelineElement
            visible
            iconStyle={{
              background: "#602aaa",
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "bold",
              boxShadow: "10px 5px 30px rgba(0, 0, 0, 0.12)",
            }}
            icon={<CiStar />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
};
export default Experience;
