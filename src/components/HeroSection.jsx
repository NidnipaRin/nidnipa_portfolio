// src/components/HeroSection.jsx
import React from "react";

export const HeroSection = ({ personalInfo, mode, onOpenCV }) => {
  const isJewelry = mode === "jewelry";

  const titleText =
    personalInfo?.heroTitle?.[mode] ||
    personalInfo?.tagline ||
    "Applying Fine Jewelry Precision to Full-Stack Software Engineering";

  const subtitleText =
    personalInfo?.heroSubtitle?.[mode] ||
    personalInfo?.summary ||
    "Full-Stack Developer leveraging 9+ years of luxury design precision, high attention to detail, and user empathy to build exceptional digital products.";

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-16 px-6 flex flex-col justify-center items-center text-center max-w-4xl mx-auto"
    >
      <span
        className={`px-5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8 transition-all duration-500 backdrop-blur-sm ${
          isJewelry
            ? "bg-[#E0D6B8]/60 border border-[#633A2C]/40 text-[#800000]"
            : "bg-slate-200 border border-slate-300 text-slate-700"
        }`}
      >
        {isJewelry ? "💎 Full-Stack Developer" : "⚡ Full-Stack Developer"}
      </span>

      <h1 className="text-4xl md:text-6xl font-serif tracking-tight leading-tight mb-6 min-h-[130px] flex items-center justify-center">
        {isJewelry ? (
          <span className="text-[#800000] font-normal drop-shadow-sm">
            {titleText}
          </span>
        ) : (
          <span className="text-slate-900 font-sans font-extrabold">
            {titleText}
          </span>
        )}
      </h1>

      <p
        className={`text-base md:text-lg max-w-2xl mb-10 leading-relaxed transition-all duration-500 ${
          isJewelry ? "text-[#633A2C] font-light" : "text-slate-600"
        }`}
      >
        {subtitleText}
      </p>

      <div className="flex flex-wrap justify-center items-center gap-4">
        <a
          href="#projects"
          className={`px-8 py-3.5 rounded-full text-xs tracking-widest uppercase transition-all duration-300 shadow-md ${
            isJewelry
              ? "bg-[#800000] text-[#E0D6B8] hover:bg-[#633A2C] hover:shadow-lg border border-[#800000]"
              : "bg-slate-900 text-white hover:bg-slate-800"
          }`}
        >
          {isJewelry ? "View Dev Projects" : "View Code Projects"}
        </a>

        {/* ปุ่มเปลี่ยนหน้าไป Online CV */}
        <button
          onClick={onOpenCV}
          className={`px-7 py-3.5 rounded-full text-xs tracking-widest uppercase font-semibold transition-all duration-300 shadow-md backdrop-blur-md border flex items-center gap-2 cursor-pointer ${
            isJewelry
              ? "bg-white/80 text-[#800000] border-[#800000]/30 hover:bg-white"
              : "bg-slate-200 text-slate-800 border-slate-300 hover:bg-slate-300"
          }`}
        >
          <span>View Full CV</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
