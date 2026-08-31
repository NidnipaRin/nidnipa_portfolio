// src/App.jsx
import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { JewelryGallery } from "./components/JewelryGallery";
import { DevLabGallery } from "./components/DevLabGallery";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectModal } from "./components/ProjectModal";
import { CookieWidget } from "./components/CookieWidget";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { ScrollReveal } from "./components/ScrollReveal";
import { BackgroundSparkles } from "./components/BackgroundSparkles";
import { OnlineCVPage } from "./components/OnlineCVPage"; // นำเข้าหน้า Online CV ที่เพิ่งสร้าง

import {
  personalInfo,
  skillsData,
  projectsData,
  experienceData,
} from "./data/portfolioData";

import bgJewelry from "./assets/bg-jewelry.png";
import bgDev from "./assets/bg-dev.png";

export default function App() {
  const [mode, setMode] = useState("dev");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentView, setCurrentView] = useState("portfolio"); // "portfolio" หรือ "resume"

  const handleSelectProject = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <div
      className={`min-h-screen transition-all duration-500 font-sans flex flex-col justify-between bg-cover bg-center bg-fixed relative ${
        mode === "jewelry" ? "text-[#4A2E2B]" : "text-[#F3E8FF]"
      }`}
      style={{
        backgroundImage:
          mode === "jewelry" ? `url(${bgJewelry})` : `url(${bgDev})`,
      }}
    >
      <ScrollProgress mode={mode} />
      <BackgroundSparkles mode={mode} />

      <div className="min-h-screen flex flex-col justify-between relative z-10">
        {currentView === "resume" ? (
          // แสดงหน้า Online CV เต็มรูปแบบ
          <OnlineCVPage
            mode={mode}
            onBack={() => setCurrentView("portfolio")}
          />
        ) : (
          // แสดงหน้า Portfolio ปกติ
          <div>
            <Navbar personalInfo={personalInfo} mode={mode} setMode={setMode} />

            <main className="space-y-12 pb-16">
              <section id="hero">
                <HeroSection
                  personalInfo={personalInfo}
                  mode={mode}
                  onOpenCV={() => setCurrentView("resume")} // ส่งฟังก์ชันเปลี่ยนหน้าไปที่ปุ่ม View Full CV
                />
              </section>

              <ScrollReveal>
                <section id="about">
                  <AboutSection personalInfo={personalInfo} mode={mode} />
                </section>
              </ScrollReveal>

              <ScrollReveal>
                <section id="skills">
                  <SkillsSection skillsData={skillsData} mode={mode} />
                </section>
              </ScrollReveal>

              <ScrollReveal>
                <section id="projects">
                  <ProjectsSection
                    projectsData={projectsData}
                    onSelectProject={handleSelectProject}
                    mode={mode}
                  />
                </section>
              </ScrollReveal>

              {mode === "jewelry" ? (
                <JewelryGallery mode={mode} />
              ) : (
                <ScrollReveal>
                  <DevLabGallery mode={mode} />
                </ScrollReveal>
              )}

              <ScrollReveal>
                <section id="experience">
                  <ExperienceSection
                    experienceData={experienceData}
                    mode={mode}
                  />
                </section>
              </ScrollReveal>
            </main>
          </div>
        )}

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
