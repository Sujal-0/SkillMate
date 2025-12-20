import React, { useEffect, useRef, useState } from "react";
import { Highlighter } from "./ui/highlighter";

const testimonials = [
  {
    name: "Oberon Shaw, MCH",
    role: "Head of Talent Acquisition, North America",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
  },
  {
    name: "Oberon Shaw, MCH",
    role: "Head of Talent Acquisition, North America",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
  },
  {
    name: "Oberon Shaw, MCH",
    role: "Head of Talent Acquisition, North America",
    photo: "https://randomuser.me/api/portraits/men/66.jpg",
    content:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
  },
  {
    name: "Oberon Shaw, MCH",
    role: "Head of Talent Acquisition, North America",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
  },
  {
    name: "Oberon Shaw, MCH",
    role: "Head of Talent Acquisition, North America",
    photo: "https://randomuser.me/api/portraits/men/66.jpg",
    content:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const startX = useRef(0);

  // 🔁 Auto slide
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  // 👉 Swipe handlers
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 50) {
      // swipe left
      setIndex((prev) => (prev + 1) % testimonials.length);
    } else if (diff < -50) {
      // swipe right
      setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
  };

  return (
    <section className="px-6 py-24 overflow-hidden bg-[#EEEEEE]">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center">
          <Highlighter action="highlight" color="#DBDBDB">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#27374D]">
              What Students Thinks About Us
            </h2>
          </Highlighter>
        </div>

        {/* SLIDER */}
        <div
          className="relative mt-16"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {testimonials.map((item, i) => (
              <div key={i} className="min-w-full px-4">
                <div className="max-w-xl mx-auto bg-[#27374D] rounded-2xl p-10">
                  <div className="text-6xl font-bold opacity-30">“</div>

                  <p className="mt-4 leading-relaxed">{item.content}</p>

                  <div className="h-px my-6 bg-white/30" />

                  <div className="flex items-center gap-4">
                    <img
                      src={item.photo}
                      alt={item.name}
                      className="object-cover w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-white/80">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                index === i ? "bg-[#27374D] scale-125" : "bg-[#27374D]/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
