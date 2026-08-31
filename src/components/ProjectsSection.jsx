// src/components/ProjectsSection.jsx
import React from "react";
import cookieJewelry from "../assets/cookie-clicker.jpg";
import webJewelry from "../assets/bakery-screenshot.jpg";
import cookieDev from "../assets/cookie8bit.png";
import webDev from "../assets/web8bit.png";

export const ProjectsSection = ({ projectsData, onSelectProject, mode }) => {
  const isJewelry = mode === "jewelry";

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2
        className={`text-3xl font-bold mb-10 text-center ${
          isJewelry ? "text-[#800000] font-serif" : "text-purple-900 font-sans"
        }`}
      >
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => {
          // กำหนดรูปภาพแยกตามโหมดและชื่อโปรเจกต์
          let displayImage = project.image;
          const titleLower = project.title.toLowerCase();

          if (isJewelry) {
            // โหมด Jewelry ใช้ภาพปกติ
            if (titleLower.includes("cookie")) {
              displayImage = cookieJewelry;
            } else {
              displayImage = webJewelry;
            }
          } else {
            // โหมด Dev สลับเป็นภาพ 8-bit
            if (titleLower.includes("cookie")) {
              displayImage = cookieDev;
            } else {
              displayImage = webDev;
            }
          }

          return (
            <div
              key={project.id}
              className={`rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between backdrop-blur-md ${
                isJewelry
                  ? "bg-[#E0D6B8]/80 border-[#633A2C]/30 text-[#633A2C] shadow-sm hover:shadow-md"
                  : "bg-white/90 border-pink-200 text-purple-950 shadow-lg hover:shadow-xl"
              }`}
            >
              {/* รูปภาพโปรเจกต์ */}
              <div className="aspect-video overflow-hidden bg-slate-100">
                <img
                  src={displayImage}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* รายละเอียด */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      isJewelry
                        ? "text-[#800000] font-serif"
                        : "text-purple-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm opacity-90 mb-4 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack?.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-2.5 py-0.5 rounded font-medium ${
                          isJewelry
                            ? "bg-[#800000]/10 text-[#800000]"
                            : "bg-pink-100/70 text-purple-800"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ปุ่มควบคุมด้านล่าง */}
                <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs font-semibold">
                  <button
                    onClick={() => onSelectProject(project)}
                    className={`hover:underline flex items-center gap-1 ${
                      isJewelry
                        ? "text-[#800000]"
                        : "text-purple-800 hover:text-pink-700"
                    }`}
                  >
                    View Project Details <span>→</span>
                  </button>

                  <div className="flex gap-3">
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline opacity-85 hover:opacity-100"
                      >
                        Demo ↗
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline opacity-85 hover:opacity-100"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
