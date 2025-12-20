import LogoLoop from "./LogoLoop";
import { collegeLogos } from "./college-logos";

const InfiniteColleges = () => {
  return (
    <div className="relative h-40 overflow-hidden">
      <LogoLoop
        logos={collegeLogos}
        speed={100}
        direction="left"
        logoHeight={56}
        gap={64}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#EEEEEE"
        ariaLabel="Partner colleges"
      />
    </div>
  );
};

export default InfiniteColleges;
