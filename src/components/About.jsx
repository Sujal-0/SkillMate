import { ChevronRight } from "lucide-react";
import React from "react";
import { Highlighter } from "./ui/highlighter";
import Group from "@/assets/Lotties/Group.json";
import Lottie from "lottie-react";

const About = () => {
  return (
    <section className="relative px-6 py-10 overflow-hidden bg-[#EEEEEE]">
      {/* Left Circular SVG Background */}
      <svg
        className="absolute pointer-events-none -left-32 top-24 opacity-35"
        width="520"
        height="520"
        viewBox="0 0 520 520"
        fill="none"
      >
        <path
          d="M260 90
       C180 100, 110 170, 100 260
       C90 360, 170 430, 260 440
       C360 450, 430 360, 440 260
       C450 170, 360 90, 260 90 Z"
          stroke="#4B5563"
          strokeWidth="3"
          fill="none"
        />

        <path
          d="M260 140
       C200 150, 150 200, 145 260
       C140 330, 200 380, 260 385
       C330 390, 380 330, 385 260
       C390 200, 330 140, 260 140 Z"
          stroke="#4B5563"
          strokeWidth="3"
          fill="none"
        />

        <path
          d="M260 190
       C220 195, 190 225, 185 260
       C180 300, 220 330, 260 335
       C300 340, 330 300, 335 260
       C340 225, 300 190, 260 190 Z"
          stroke="#4B5563"
          strokeWidth="3"
          fill="none"
        />
      </svg>

      <div className="relative z-10 grid items-center gap-16 mx-auto max-w-7xl md:grid-cols-2">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-5xl font-bold leading-tight text-[#27374D]">
            About <br />
            <Highlighter action="highlight" color="#DBDBDB">
              <span className="relative inline-block">SkillMate</span>
            </Highlighter>
          </h2>

          <p className="mt-8 leading-relaxed text-[#27374D]">
            Students often struggle to find the right teammates because choices
            are limited to friends or batchmates, causing:
          </p>

          <ul className="mt-6 space-y-2 text-gray-800">
            <li>- Fragmented networks</li>
            <li>- Poorly balanced teams</li>
            <li>- Lost innovative opportunities</li>
          </ul>

          <p className="mt-6 leading-relaxed text-[#27374D]">
            SkillMate solves this by offering a centralized platform where
            students connect based on complementary skills and real project
            needs.
          </p>

          <button
            className="mt-8 sm:mt-16 px-6 sm:px-10 lg:px-12 
                 text-lg sm:text-2xl lg:text-3xl font-boldpx-12 py-2 font-bold  tracking-wider bg-[#EEEEEE] w-fit transition-all shadow-[3px_3px_0px_#27374D] hover:shadow-none hover:translate-x-0.75 hover:translate-y-0.75 flex items-center gap-4 group text-[#27374D]"
          >
            Know More{" "}
            <ChevronRight className="transition-transform duration-300 group-hover:translate-x-3" />
          </button>
        </div>

        {/* RIGHT – LOTTIE PLACEHOLDER */}
        <div className="flex justify-center">
          <div className="flex items-center justify-center w-75 h-75 sm:w-90 sm:h-90">
            {/* Replace this div with Lottie later */}
            <div className="flex items-center justify-center w-full h-full">
              <Lottie
                animationData={Group}
                loop={true}
                autoplay={true}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
