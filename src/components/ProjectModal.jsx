// src/components/ProjectModal.jsx
import React from "react";

export const ProjectModal = ({ project, onClose, mode }) => {
  if (!project) return null;
  const isJewelry = mode === "jewelry";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div
        className={`relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 shadow-2xl border transition-all duration-300 ${
          isJewelry
            ? "bg-[#F9F6F0] border-[#633A2C]/40 text-[#4A2E2B]"
            : "bg-white border-slate-200 text-slate-800"
        }`}
      >
        {/* ปุ่มปิด Modal */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 text-lg font-bold w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isJewelry
              ? "bg-[#800000]/10 text-[#800000] hover:bg-[#800000]/20"
              : "bg-slate-100 text-slate-500 hover:bg-slate-200"
          }`}
        >
          ✕
        </button>

        {/* หัวข้อโปรเจกต์ */}
        <div className="flex items-center gap-2 mb-4 pr-8">
          <span className="text-sm">
            💎 {isJewelry ? "Design Perspective" : "Tech Spec"}
          </span>
          <h3
            className={`text-xl font-bold ${isJewelry ? "text-[#800000] font-serif" : "text-slate-900 font-sans"}`}
          >
            {project.title}
          </h3>
        </div>

        {/* รูปภาพโปรเจกต์ */}
        <div className="mb-5 rounded-xl overflow-hidden border border-black/10 shadow-inner bg-black/5">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
        </div>

        {/* รายละเอียดโปรเจกต์ */}
        <div className="space-y-4 mb-6">
          <div
            className={`p-4 rounded-xl border ${isJewelry ? "bg-[#FFFDF9] border-[#633A2C]/20" : "bg-slate-50 border-slate-200"}`}
          >
            <h4
              className={`text-xs font-semibold mb-1 flex items-center gap-1.5 ${isJewelry ? "text-[#800000]" : "text-slate-900"}`}
            >
              🎨{" "}
              {isJewelry
                ? "UI/UX & Craftsmanship Insights"
                : "Technical Implementation"}
            </h4>
            <p className="text-xs leading-relaxed font-normal opacity-90">
              {isJewelry ? project.designPerspective : project.techPerspective}
            </p>
          </div>

          {/* Tech Stack / Tools */}
          <div>
            <h5
              className={`text-xs font-semibold mb-2 ${isJewelry ? "text-[#800000]" : "text-slate-700"}`}
            >
              Tech Stack / Tools:
            </h5>
            <div className="flex flex-wrap gap-2">
              {project.techStack?.map((tech, idx) => (
                <span
                  key={idx}
                  className={`text-xs px-2.5 py-1 rounded-md font-medium ${
                    isJewelry
                      ? "bg-[#800000]/10 text-[#800000] border border-[#800000]/20"
                      : "bg-slate-100 text-slate-700 border border-slate-200"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ปุ่ม GitHub และ Live Demo */}
        <div className="grid grid-cols-2 gap-3 pt-2 border-t border-black/5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={`text-center py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                isJewelry
                  ? "border-[#800000] text-[#800000] bg-[#FFFDF9] hover:bg-[#800000] hover:text-white"
                  : "border-slate-300 text-slate-700 hover:bg-slate-100"
              }`}
            >
              GitHub Repository
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className={`text-center py-2.5 rounded-xl text-xs font-semibold transition-all ${
                isJewelry
                  ? "bg-[#800000] text-white hover:bg-[#633A2C]"
                  : "bg-slate-900 text-white hover:bg-slate-800"
              }`}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
