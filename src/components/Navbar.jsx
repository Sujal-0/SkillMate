import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute left-0 w-full px-4 top-4 sm:px-6">
      <div className="flex items-center justify-between">
        {/* Left section: Logo + Username */}
        <div className="flex items-center gap-4 sm:gap-10">
          <div className="flex items-center gap-1 px-2 overflow-visible sm:gap-2 sm:px-3 whitespace-nowrap">
            <span className="text-xl font-bold leading-none sm:text-2xl">
              Skill
            </span>

            <img
              src="/logoWhite.png"
              alt="SkillMate logo"
              className="w-auto h-5 shrink-0 sm:h-6"
            />

            <span className="text-xl font-bold leading-none sm:text-2xl">
              Mate
            </span>
          </div>
        </div>

        <div className="items-center hidden gap-3 md:flex lg:gap-4">
          <button
            className="px-4 sm:px-6 text-base sm:text-xl py-2 font-medium bg-[#27374D] text-white/80 transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-0.75 hover:translate-y-0.75"
            // onClick={scrollToHowToPlay}
          >
            Home
          </button>
          <button
            className="px-4 sm:px-6 py-2 text-base sm:text-xl font-medium bg-[#27374D] text-white/80 transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-0.75 hover:translate-y-0.75"
            // onClick={scrollToFindTheCreator}
          >
            About
          </button>
          <button
            className="px-4 sm:px-6 py-2 text-base sm:text-xl font-medium bg-[#27374D] text-white/80 transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-0.75 hover:translate-y-0.75"
            // onClick={scrollToFeedback}
          >
            SignIn/SignUp
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
