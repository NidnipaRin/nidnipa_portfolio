import React from "react";

export const HeroSection = ({ personalInfo, mode }) => {
  const isJewelry = mode === "jewelry";

  // ดึงข้อความอย่างปลอดภัย
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
      {/* Badge กรอบสายเรียบหรู (แก้ข้อความให้บ่งบอกความเป็น Dev) */}
      <span
        className={`px-5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8 transition-all duration-500 backdrop-blur-sm ${
          isJewelry
            ? "bg-[#E0D6B8]/60 border border-[#633A2C]/40 text-[#800000]"
            : "bg-slate-200 border border-slate-300 text-slate-700"
        }`}
      >
        {isJewelry ? "💎 Full-Stack Developer" : "⚡ Full-Stack Developer"}
      </span>

      {/* Headline */}
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

      {/* Subtitle */}
      <p
        className={`text-base md:text-lg max-w-2xl mb-10 leading-relaxed transition-all duration-500 ${
          isJewelry ? "text-[#633A2C] font-light" : "text-slate-600"
        }`}
      >
        {subtitleText}
      </p>

      {/* ปุ่มกดหลัก (เปลี่ยนคำว่า Explore Gallery เป็น View Dev Projects) */}
      <div className="flex flex-wrap justify-center gap-4">
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
      </div>
    </section>
  );
};
