import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Highlighter } from "./ui/highlighter";
import ProfileOrbit from "./ProfileOrbit";

const WorkTogether = () => {
  return (
    <section className="relative px-6 py-20 overflow-hidden bg-[#EEEEEE]">
      <div className="grid items-center gap-16 mx-auto max-w-7xl md:grid-cols-2">
        {/* LEFT – PROFILE ORBIT */}
        <div className="flex justify-Start">
          <ProfileOrbit />
        </div>

        {/* RIGHT – CONTENT */}
        <div>
          <Highlighter action="highlight" color="#DBDBDB">
            <h2 className="text-4xl font-bold leading-tight text-[#27374D]">
              Work together
            </h2>
          </Highlighter>

          <p className="max-w-md mt-6 leading-relaxed text-[#27374D]">
            SkillMate believes that the strongest teams are built on diversity,
            trust, and shared purpose. When students from different fields
            unite, they don’t just complete projects — they create innovation,
            inspire each other, and grow together as a team.
          </p>

          <button
            className="mt-8 sm:mt-16 px-6 sm:px-10 lg:px-12 
                 text-lg sm:text-2xl lg:text-3xl font-boldpx-12 py-2 font-bold  tracking-wider bg-[#EEEEEE] w-fit transition-all shadow-[3px_3px_0px_#27374D] hover:shadow-none hover:translate-x-0.75 hover:translate-y-0.75 flex items-center gap-4 group text-[#27374D]"
          >
            Find Mates{" "}
            <ChevronRight className="transition-transform duration-300 group-hover:translate-x-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;
