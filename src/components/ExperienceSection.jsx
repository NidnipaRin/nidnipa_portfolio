// src/components/ExperienceSection.jsx
import React from "react";

export const ExperienceSection = (props) => {
  const experiences =
    props.experienceData || props.experiences || props.data || [];
  const mode = props.mode || "jewelry";
  const isJewelry = mode === "jewelry";

  return (
    <section id="experience" className="py-16 px-6 max-w-6xl mx-auto">
      <h2
        className={`text-3xl font-bold mb-10 text-center ${
          isJewelry ? "text-[#800000] font-serif" : "text-[#F472B6] font-mono"
        }`}
      >
        {isJewelry ? "Professional Journey" : "Experience & Background"}
      </h2>

      <div className="space-y-6">
        {Array.isArray(experiences) && experiences.length > 0 ? (
          experiences.map((exp, idx) => {
            // ป้องกันกรณีตัว exp เองเป็น null หรือ undefined
            if (!exp) return null;

            return (
              <div
                key={exp.id || idx}
                className={`p-6 rounded-2xl border transition-all ${
                  isJewelry
                    ? "bg-[#E0D6B8]/40 border-[#633A2C]/20 text-[#4A2E2B]"
                    : "bg-[#1E112A]/80 border-[#C084FC]/30 text-[#F3E8FF] shadow-[0_0_15px_rgba(192,132,252,0.1)]"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <h3
                    className={`text-lg font-bold ${
                      isJewelry ? "text-[#800000]" : "text-[#F472B6] font-mono"
                    }`}
                  >
                    {exp.role || "Untitled Role"}
                  </h3>
                  <span
                    className={`text-xs px-3 py-1 rounded-full w-fit mt-1 sm:mt-0 ${
                      isJewelry
                        ? "bg-[#800000]/10 text-[#800000]"
                        : "bg-[#C084FC]/20 text-[#E9D5FF] font-mono"
                    }`}
                  >
                    {exp.period || ""}
                  </span>
                </div>
                <p
                  className={`text-sm font-semibold mb-2 ${
                    isJewelry ? "text-[#633A2C]" : "text-[#C084FC]"
                  }`}
                >
                  {exp.company || ""}
                </p>

                {/* ถ้ารายละเอียดเป็น Array ให้ map ออกมา แต่ถ้าเป็น String ให้แสดงตรงๆ */}
                {Array.isArray(exp.details || exp.description) ? (
                  <ul className="list-disc list-inside text-xs leading-relaxed opacity-90 space-y-1">
                    {(exp.details || exp.description).map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs leading-relaxed opacity-90">
                    {exp.details || exp.description || ""}
                  </p>
                )}
              </div>
            );
          })
        ) : (
          <p className="text-center text-xs opacity-60 py-4">
            No experience data provided.
          </p>
        )}
      </div>
    </section>
  );
};
