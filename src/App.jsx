// src/App.jsx
import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ProjectModal } from "./components/ProjectModal";
import { CookieWidget } from "./components/CookieWidget";
import { Footer } from "./components/Footer";

import {
  personalInfo,
  skillsData,
  projectsData,
  experienceData,
} from "./data/portfolioData";

import bgJewelry from "./assets/bg-jewelry.png";
import bgDev from "./assets/bg-dev.png";

export default function App() {
  const [mode, setMode] = useState("jewelry");
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 font-sans flex flex-col justify-between bg-cover bg-center bg-fixed ${
        mode === "jewelry" ? "text-[#4A2E2B]" : "text-[#F3E8FF]"
      }`}
      style={{
        backgroundImage:
          mode === "jewelry" ? `url(${bgJewelry})` : `url(${bgDev})`,
      }}
    >
      {/* 🔴 เอาชั้นสีทึบและ backdrop-blur ออก เหลือไว้แค่โครงสร้างจัดหน้าปกติ */}
      <div className="min-h-screen flex flex-col justify-between">
        <div>
          <Navbar personalInfo={personalInfo} mode={mode} setMode={setMode} />

          <main className="space-y-12 pb-16">
            <section id="hero">
              <HeroSection personalInfo={personalInfo} mode={mode} />
            </section>

            <section id="about">
              <AboutSection personalInfo={personalInfo} mode={mode} />
            </section>

            <section id="skills">
              <SkillsSection skillsData={skillsData} mode={mode} />
            </section>

            <section id="projects">
              <ProjectsSection
                projectsData={projectsData}
                onSelectProject={handleSelectProject}
                mode={mode}
              />
            </section>

            <section id="experience">
              <ExperienceSection experienceData={experienceData} mode={mode} />
            </section>
          </main>
        </div>

        <CookieWidget mode={mode} />

        <Footer personalInfo={personalInfo} mode={mode} />

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={handleCloseModal}
            mode={mode}
          />
        )}
      </div>
    </div>
  );
}
