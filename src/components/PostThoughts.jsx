import React from "react";
import { ChevronRight } from "lucide-react";
import { Highlighter } from "./ui/highlighter";
import SocialPost from "@/assets/Lotties/SocialPost.json";
import Lottie from "lottie-react";

const PostThoughts = () => {
  return (
    <section className="relative px-6 py-10 overflow-hidden">
      {/* LEFT BACKGROUND SVG */}
      <svg
        className="absolute top-0 left-0 h-full pointer-events-none w-130 opacity-20 -z-10"
        viewBox="0 0 520 900"
        fill="none"
        preserveAspectRatio="xMinYMid meet"
      >
        {/* OUTER WAVE */}
        <path
          d="
      M0 40
      C160 140 120 280 260 380
      C380 480 300 620 180 720
      C100 800 40 860 0 900
    "
          stroke="#6BA6FF"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* MID WAVE */}
        <path
          d="
      M0 120
      C180 220 140 360 280 460
      C400 560 320 680 200 780
      C120 840 60 880 0 900
    "
          stroke="#6BA6FF"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* INNER WAVE */}
        <path
          d="
      M0 200
      C200 300 160 420 300 520
      C420 620 340 740 220 820
      C140 870 80 890 0 900
    "
          stroke="#6BA6FF"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <div className="grid items-center gap-16 mx-auto max-w-7xl md:grid-cols-2">
        {/* LEFT CONTENT */}
        <div>
          <Highlighter action="highlight" color="#DBDBDB">
            <h2 className="text-5xl font-bold leading-tight text-[#27374D]">
              Post Title
            </h2>
          </Highlighter>

          <p className="mt-3 text-blue-200">Thought behind post:</p>

          <p className="max-w-md mt-6 leading-relaxed text-blue-100">
            SkillMate gives students a space to share ideas, questions, wins,
            failures, and random thoughts without fear of judgment. Whether it’s
            a half-baked startup idea, a project update, or a late-night
            curiosity — your thoughts deserve to be heard.
          </p>

          <button
            className="mt- sm:mt-16 px-6 sm:px-10 lg:px-12 
                 text-lg sm:text-2xl lg:text-3xl font-boldpx-12 py-2 font-bold  tracking-wider bg-[#27374D] w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-0.75 hover:translate-y-0.75 flex items-center gap-4 group"
          >
            See More
            <ChevronRight className="transition-transform group-hover:translate-x-2" />
          </button>
        </div>

        {/* RIGHT – LOTTIE PLACEHOLDER */}
        <div className="flex justify-center">
          <div className="flex items-center justify-center w-65 h-105 bg-white/10 rounded-xl ">
            <Lottie
              animationData={SocialPost}
              loop={true}
              autoplay={true}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* BOTTOM STATEMENT */}
      <div className="max-w-5xl mx-auto mt-24 text-center">
        <h3 className="text-4xl font-bold">
          Post your wildest, smartest,
          <br />
          weirdest thoughts.
        </h3>

        <p className="mt-4 text-blue-200">
          Posting your idea might feel scary… but so is eating hostel food ;)
        </p>

        <button
          className="mt-8 mx-auto sm:mt-16 px-6 sm:px-10 lg:px-12 
                 text-lg sm:text-2xl lg:text-3xl font-boldpx-12 py-2 font-bold  tracking-wider bg-[#27374D] w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-0.75 hover:translate-y-0.75 flex items-center gap-4 group"
        >
          Upload
          <ChevronRight className="transition-transform duration-300 group-hover:translate-x-3" />
        </button>
      </div>
    </section>
  );
};

export default PostThoughts;
