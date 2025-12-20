import React from "react";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

const dummyProfiles = [
  { id: 1, color: "bg-blue-500" },
  { id: 2, color: "bg-green-500" },
  { id: 3, color: "bg-yellow-400" },
  { id: 4, color: "bg-red-500" },
];

const ProfileOrbit = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden h-95 w-95">
      {/* Center Hub */}
      <div className="absolute z-10 flex items-center justify-center w-16 h-16 font-bold bg-[#27374D] shadow rounded-xl">
        <img
          className="w-auto h-5 shrink-0 sm:h-6"
          src="/logoWhite.png"
          alt="SkillMateLogo"
        />
      </div>

      {/* Outer Orbit */}
      <OrbitingCircles radius={160} duration={28}>
        {dummyProfiles.map((p) => (
          <div key={p.id} className={`w-10 h-10 rounded-full ${p.color}`} />
        ))}
      </OrbitingCircles>

      {/* Inner Orbit */}
      <OrbitingCircles radius={100} reverse duration={20}>
        {dummyProfiles.map((p) => (
          <div
            key={`inner-${p.id}`}
            className={`w-8 h-8 rounded-full ${p.color}`}
          />
        ))}
      </OrbitingCircles>
    </div>
  );
};

export default ProfileOrbit;
