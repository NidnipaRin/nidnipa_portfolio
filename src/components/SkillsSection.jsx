// src/components/SkillsSection.jsx
import React from "react";

export const SkillsSection = ({ skillsData, mode }) => {
  const isJewelry = mode === "jewelry";

  const technicalSkills = skillsData?.technical || [];
  const softSkills = skillsData?.soft || [];

  return (
    <section id="skills" className="py-16 px-6 max-w-6xl mx-auto">
      <h2
        className={`text-3xl font-bold mb-10 text-center ${
          isJewelry ? "text-[#800000] font-serif" : "text-[#F472B6] font-mono"
        }`}
      >
        Technical & Soft Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Technical Skills */}
        <div
          className={`p-6 rounded-2xl border transition-all ${
            isJewelry
              ? "bg-[#E0D6B8]/50 border-[#633A2C]/30 text-[#633A2C]"
              : "bg-[#1E112A]/80 border-[#C084FC]/30 text-[#F3E8FF] shadow-[0_0_15px_rgba(192,132,252,0.1)]"
          }`}
        >
          <h3
            className={`text-xl font-bold mb-4 ${
              isJewelry
                ? "text-[#800000] font-serif"
                : "text-[#C084FC] font-mono"
            }`}
          >
            Technical Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {technicalSkills.length > 0 ? (
              technicalSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium ${
                    isJewelry
                      ? "bg-[#800000]/10 text-[#800000] border border-[#800000]/20"
                      : "bg-[#A855F7]/20 text-[#E9D5FF] border border-[#C084FC]/30 font-mono"
                  }`}
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-xs opacity-60">No technical skills listed.</p>
            )}
          </div>
        </div>

        {/* Soft Skills */}
        <div
          className={`p-6 rounded-2xl border transition-all ${
            isJewelry
              ? "bg-[#E0D6B8]/50 border-[#633A2C]/30 text-[#633A2C]"
              : "bg-[#1E112A]/80 border-[#C084FC]/30 text-[#F3E8FF] shadow-[0_0_15px_rgba(192,132,252,0.1)]"
          }`}
        >
          {/* 2. เปลี่ยนหัวข้อกล่องขวาให้เป็น "Soft Skills" เหมือนกันทั้งสองโหมด */}
          <h3
            className={`text-xl font-bold mb-4 ${
              isJewelry
                ? "text-[#800000] font-serif"
                : "text-[#F472B6] font-mono"
            }`}
          >
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.length > 0 ? (
              softSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium ${
                    isJewelry
                      ? "bg-[#633A2C]/10 text-[#633A2C] border border-[#633A2C]/20"
                      : "bg-[#EC4899]/20 text-[#FBCFE8] border border-[#F472B6]/30 font-mono"
                  }`}
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-xs opacity-60">No soft skills listed.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
