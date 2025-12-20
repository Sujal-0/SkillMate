import Navbar from "@/components/Navbar";
import Lottie from "lottie-react";
import React from "react";
import HappyStudent from "@/assets/Lotties/HappyStudent.json";
import { ChevronRight } from "lucide-react";
import About from "@/components/About";
import WorkTogether from "@/components/WorkTogether";
import PostThoughts from "@/components/PostThoughts";
import OurGrowth from "@/components/OurGrowth";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import useAuthRedirect from "@/hooks/useAuthRedirect";

const Landing = () => {
  const authRedirect = useAuthRedirect();
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative px-6 pb-20 pt-36">
        {/* Decorative Twisted Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 700"
          preserveAspectRatio="none"
        >
          {/* Top soft wave */}
          <path
            d="M0,140 C260,60 520,220 780,140 1040,60 1280,180 1440,120"
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="2"
          />

          {/* Upper-mid */}
          <path
            d="M0,220 C300,160 560,300 840,220 1120,140 1300,260 1440,210"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="2"
          />

          {/* Center dominant */}
          <path
            d="M0,320 C240,260 540,420 820,330 1080,250 1280,400 1440,340"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="2.5"
          />

          {/* Lower-mid */}
          <path
            d="M0,420 C300,360 580,520 860,440 1140,360 1300,500 1440,460"
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="2"
          />

          {/* Bottom wave */}
          <path
            d="M0,520 C260,460 520,620 780,540 1040,460 1260,600 1440,560"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
          />

          {/* Diagonal accent */}
          <path
            d="M-100,600 C300,300 700,700 1600,200"
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="2"
          />
        </svg>
        {/* Content */}
        <div className="relative z-10 grid items-center gap-12 mx-auto max-w-7xl md:grid-cols-2">
          {/* Left Text */}
          <div>
            {/* <div className="w-full px-5 py-3 mb-6 text-sm rounded-full bg-white/20">
              🔍 Profile, Skills, Projects, Events etc
            </div> */}

            <h1 className="mb-6 text-5xl font-bold leading-tight">
              SkillMate:
              <br />
              Match Your Ambition.
              <br />
              Build Your Team.
            </h1>

            <p className="text-lg leading-relaxed">
              A skill-based partner matching platform that connects college
              students based on their abilities, interests, and project needs —
              not just social circles.
            </p>

            <button
              onClick={authRedirect}
              className="mt-8 sm:mt-16 px-6 sm:px-10 lg:px-12 
                 text-lg sm:text-2xl lg:text-3xl font-boldpx-12 py-2 font-bold  tracking-wider bg-[#27374D] w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-0.75 hover:translate-y-0.75 flex items-center gap-4 group"
            >
              Get Started{" "}
              <ChevronRight className="transition-transform duration-300 group-hover:translate-x-3" />
            </button>
          </div>

          <div className="flex justify-center">
            <div className="flex items-center justify-center w-75 h-75">
              <Lottie
                animationData={HappyStudent}
                loop={true}
                autoplay={true}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <About />
      <WorkTogether />
      <PostThoughts />
      <OurGrowth />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Landing;
