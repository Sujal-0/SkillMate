import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Globe } from "lucide-react";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import useAuthRedirect from "@/hooks/useAuthRedirect";

const FooterLink = ({ to = "#", children }) => (
  <Link
    to={to}
    className="relative inline-block text-white/80 hover:text-white transition
               after:absolute after:left-0 after:-bottom-0.5
               after:h-[1.5px] after:w-0 after:bg-white
               after:transition-all after:duration-300
               hover:after:w-full"
  >
    {children}
  </Link>
);

const Footer = () => {
  const authRedirect = useAuthRedirect();
  return (
    <footer className="bg-[#27374D] px-6 pt-20">
      {/* TOP */}
      <div className="grid gap-16 mx-auto max-w-7xl md:grid-cols-5">
        {/* BRAND */}
        <div>
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
          <p className="mt-6 text-sm leading-relaxed text-white/80">
            While other platforms prioritize engagement, SkillMate prioritizes
            productivity. Successful collaboration, strong outcomes, and real
            growth.
          </p>
        </div>

        {/* PROJECTS */}
        <div>
          <h4 className="font-semibold">Projects</h4>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <FooterLink to="/projects">Overview</FooterLink>
            </li>
            <li>
              <FooterLink to="/upload">Upload</FooterLink>
            </li>
            <li>
              <FooterLink to="/top-projects">Top Project</FooterLink>
            </li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h4 className="font-semibold">Resources</h4>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <FooterLink to="/blogs">Blogs</FooterLink>
            </li>
            <li>
              <FooterLink to="/write-blog">Write Blogs</FooterLink>
            </li>
            <li>
              <FooterLink to="/help">Help Center</FooterLink>
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <FooterLink to="/about">About Us</FooterLink>
            </li>
            <li>
              <FooterLink to="/goals">Goals</FooterLink>
            </li>
            <li>
              <FooterLink to="/media-kit">Media Kit</FooterLink>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4 className="text-lg font-semibold">Try It Today</h4>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            Build smarter teams. Create better outcomes. Collaborate beyond
            boundaries.
          </p>

          <button
            onClick={authRedirect}
            className="mt-6 px-6 text-sm  font-boldpx-12 py-2 font-bold  tracking-wider bg-[#27374D] w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-0.75 hover:translate-y-0.75 flex items-center gap-4 group"
          >
            Register Now{" "}
            <ChevronRight className="transition-transform duration-300 group-hover:translate-x-3" />
          </button>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="mx-auto mt-20 border-t max-w-7xl border-white/20" />

      {/* BOTTOM */}
      <div className="flex flex-col gap-6 py-6 mx-auto text-sm max-w-7xl md:flex-row md:items-center md:justify-between text-white/70">
        <div className="flex flex-wrap items-center gap-6">
          <span className="flex items-center gap-2 transition cursor-pointer hover:text-white">
            <Globe size={16} /> English
          </span>

          <FooterLink to="/terms">Terms & Privacy</FooterLink>
          <FooterLink to="/security">Security</FooterLink>
          <FooterLink to="/status">Status</FooterLink>
        </div>

        <div className="flex items-center gap-6">
          <span>©2025 SkillMate LLC.</span>

          {/* SOCIAL */}
          <div className="flex gap-4">
            <a href="#" className="transition hover:text-white">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="transition hover:text-white">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" className="transition hover:text-white">
              <FaGithub size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
