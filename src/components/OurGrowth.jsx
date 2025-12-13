import React from "react";
import { ChevronRight } from "lucide-react";
import { Highlighter } from "./ui/highlighter";
import { IconCloud } from "./ui/icon-cloud";
import InfiniteColleges from "./InfiniteColleges";

const OurGrowth = () => {
  return (
    <section className="px-6 py-10 overflow-hidden bg-[#EEEEEE]">
      {/* TOP: OUR GROWTH */}
      <div className="grid items-center gap-16 mx-auto max-w-7xl md:grid-cols-2">
        {/* LEFT CONTENT */}
        <div>
          <Highlighter action="highlight" color="#DBDBDB">
            <h2 className="text-4xl font-bold text-[#27374D]">Our Growth</h2>
          </Highlighter>

          <p className="max-w-md mt-6 text-[#27374D]">
            SkillMate is committed to growing beyond a single institution and
            building a wider network of collaboration across multiple colleges.
          </p>

          <button
            className="mt-8 sm:mt-16 px-6 sm:px-10 lg:px-12 
                 text-lg sm:text-2xl lg:text-3xl font-boldpx-12 py-2 font-bold  tracking-wider bg-[#EEEEEE] w-fit transition-all shadow-[3px_3px_0px_#27374D] hover:shadow-none hover:translate-x-0.75 hover:translate-y-0.75 flex items-center gap-4 group text-[#27374D]"
          >
            Listed Colleges
            <ChevronRight className="transition-transform duration-300 group-hover:translate-x-3" />
          </button>
        </div>

        {/* RIGHT – ICON CLOUD */}
        <div className="relative flex justify-end">
          <div className="h-[420px] w-[420px] bg-[#27374D] shadow rounded-xl">
            <IconCloud
              images={[
                "/colleges/lloyd.png",
                "/colleges/glbajaj.png",
                "/colleges/galgotia.png",
                "/colleges/Niet.png",
                "/colleges/amity.png",
              ]}
            />
          </div>
        </div>
      </div>

      {/* BOTTOM: COLLEGES SLIDER */}
      <div className="mt-32 text-center">
        <Highlighter action="highlight" color="#DBDBDB">
          <h3 className="text-4xl font-bold text-[#27374D]">Colleges</h3>
        </Highlighter>

        {/* LOGO MARQUEE */}
        <div className="mt-12">
          <InfiniteColleges />
        </div>
      </div>
    </section>
  );
};

export default OurGrowth;
