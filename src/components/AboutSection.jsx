import React from "react";

export const AboutSection = ({ mode }) => {
  const isJewelry = mode === "jewelry";

  return (
    <section
      id="about"
      className={`py-20 px-6 transition-colors duration-500 ${
        isJewelry
          ? "bg-[#E0D6B8]/40 border-y border-[#633A2C]/20"
          : "bg-gradient-to-b from-purple-100/40 to-pink-100/40 border-y border-purple-200/50"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-8 text-center tracking-wide ${
            isJewelry
              ? "text-[#800000] font-serif"
              : "text-purple-900 font-sans"
          }`}
        >
          {isJewelry ? "The Craftsmanship Story" : "About Me"}
        </h2>

        <div
          className={`rounded-2xl p-8 shadow-sm leading-relaxed space-y-4 border transition-all duration-500 ${
            isJewelry
              ? "bg-[#E0D6B8]/80 border-[#633A2C]/30 text-[#633A2C] backdrop-blur-sm"
              : "bg-white/90 border-pink-200 text-purple-950 backdrop-blur-md shadow-purple-100"
          }`}
        >
          <p className="text-base md:text-lg">
            I transitioned into tech from a background as a{" "}
            <strong className={isJewelry ? "text-[#800000]" : "text-pink-700"}>
              Jewelry Designer & Luxury Sales Professional
            </strong>
            , managing High-Net-Worth clients and designing bespoke fine jewelry
            valued at over 100,000 THB per piece, including custom creations for
            prominent figures.
          </p>

          <p className="text-base md:text-lg">
            Over 9+ years in high-end design taught me obsessive{" "}
            <strong
              className={isJewelry ? "text-[#800000]" : "text-purple-700"}
            >
              Attention to Detail
            </strong>{" "}
            — balancing aesthetics with user empathy. This mindset directly
            shapes how I engineer frontend interfaces and build full-stack web
            applications with clean architecture and precision.
          </p>
        </div>
      </div>
    </section>
  );
};
