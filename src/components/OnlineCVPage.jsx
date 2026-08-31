// src/components/OnlineCVPage.jsx
import React from "react";
import { motion } from "framer-motion";

export const OnlineCVPage = ({ mode, onBack }) => {
  const isJewelry = mode === "jewelry";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen py-12 px-4 sm:px-8 flex justify-center items-start"
    >
      {/* กรอบกระดาษตรงกลาง วางทับบนพื้นหลังหลัก */}
      <div
        className={`w-full max-w-4xl p-6 sm:p-12 rounded-2xl shadow-2xl backdrop-blur-md transition-all duration-500 border ${
          isJewelry
            ? "bg-[#FFF8DC]/95 text-[#4A2E2B] border-[#D4AF37]/50 shadow-[0_10px_50px_rgba(128,0,0,0.25)]"
            : "bg-slate-900/95 text-slate-100 border-purple-500/30 shadow-[0_10px_50px_rgba(168,85,247,0.25)]"
        }`}
      >
        {/* Navbar ด้านบนกระดาษ */}
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-current/20">
          <button
            onClick={onBack}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all flex items-center gap-2 cursor-pointer ${
              isJewelry
                ? "border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white"
                : "border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white"
            }`}
          >
            <span>← Back to Portfolio</span>
          </button>

          <a
            href="/CV_Nidnipa_Kiattikunnathum.pdf"
            download="CV_Nidnipa_Kiattikunnathum.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2 ${
              isJewelry
                ? "bg-[#800000] text-white hover:bg-[#600000]"
                : "bg-purple-600 text-white hover:bg-purple-500"
            }`}
          >
            <span>Download PDF</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
        </div>

        {/* Header: ชื่อ และ ข้อมูลติดต่อ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 pb-8 border-b border-current/20">
          <div>
            <h1
              className={`text-3xl sm:text-4xl font-extrabold tracking-tight uppercase leading-tight ${isJewelry ? "font-serif text-[#800000]" : "font-sans"}`}
            >
              Nidnipa <br />
              Kiattikunnathum
            </h1>
          </div>
          <div className="flex flex-col justify-center space-y-2 text-sm opacity-90 md:items-end">
            <div className="flex items-center gap-2">
              <span>📞</span> <span>063 192 9442</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span> <span>rarin.nidnipa@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span> <span>Bangkok, Thailand</span>
            </div>
          </div>
        </div>

        {/* ส่วน Summary */}
        <section className="mb-10">
          <h2
            className={`text-lg font-bold tracking-widest uppercase mb-3 pb-2 border-b ${isJewelry ? "text-[#800000] border-[#800000]/30" : "text-purple-400 border-purple-500/30"}`}
          >
            Summary
          </h2>
          <p className="text-sm sm:text-base opacity-90 leading-relaxed">
            Results-driven Junior Software Developer skilled in JavaScript,
            React, Node.js, Express.js, and MongoDB from Generation Thailand
            Bootcamp. Blends strong software engineering fundamentals with 9+
            years of professional experience in translating client needs into
            high-quality deliverables. Adaptable, detail-oriented, and ready to
            contribute to dynamic software development teams.
          </p>
        </section>

        {/* ส่วน Skills */}
        <section className="mb-10">
          <h2
            className={`text-lg font-bold tracking-widest uppercase mb-4 pb-2 border-b ${isJewelry ? "text-[#800000] border-[#800000]/30" : "text-purple-400 border-purple-500/30"}`}
          >
            Skills
          </h2>
          <ul className="space-y-3 text-sm opacity-90">
            <li>
              <strong
                className={isJewelry ? "text-[#800000]" : "text-purple-300"}
              >
                Technical skills:
              </strong>{" "}
              HTML, CSS, JavaScript, React, Node.js, Relational Databases (SQL),
              MongoDB, Git, GitHub, Adobe Creative Suite, Canva, CapCut, Content
              Planning & Social Media Analytics
            </li>
            <li>
              <strong
                className={isJewelry ? "text-[#800000]" : "text-purple-300"}
              >
                Soft skills:
              </strong>{" "}
              Teamwork, Problem-Solving, Critical Thinking, Interpersonal &
              Communication, Active Listening, Time & Priority Management,
              Professional Accountability, Entrepreneurial Mindset
            </li>
            <li>
              <strong
                className={isJewelry ? "text-[#800000]" : "text-purple-300"}
              >
                Language skills:
              </strong>{" "}
              Thai (Native), English (TOEIC Score: 590)
            </li>
          </ul>
        </section>

        {/* ส่วน Work Experience */}
        <section className="mb-10">
          <h2
            className={`text-lg font-bold tracking-widest uppercase mb-6 pb-2 border-b ${isJewelry ? "text-[#800000] border-[#800000]/30" : "text-purple-400 border-purple-500/30"}`}
          >
            Work Experience
          </h2>

          <div className="space-y-8">
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                <h3 className="font-bold text-base">
                  Jewelry Designer & Sales
                </h3>
                <span className="text-xs font-mono opacity-80">
                  Jul 2018 – Oct 2025
                </span>
              </div>
              <div
                className={`text-sm font-semibold mb-3 ${isJewelry ? "text-[#800000]" : "text-purple-300"}`}
              >
                Tamas Jewelry Co., Ltd. — Bangkok, Thailand
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm opacity-90">
                <li>
                  Collaborated effectively with design, production, and
                  manufacturing teams to deliver high-end custom jewelry
                  projects on schedule and within quality standards.
                </li>
                <li>
                  Identified and resolved complex design and technical issues
                  during the luxury jewelry manufacturing process to maintain a
                  seamless production workflow.
                </li>
                <li>
                  Translated client requirements into hand-drawn jewelry design
                  proposals, managing iterative revisions and approval workflows
                  based on client feedback.
                </li>
                <li>
                  Communicated and consulted directly with high-net-worth
                  clients for luxury jewelry sales (100,000+ THB/transaction),
                  building long-term trust through structured problem-solving.
                </li>
                <li>
                  Managed end-to-end digital content for corporate brand
                  accounts, producing over 90 articles, videos, and visual
                  assets to scale audience engagement to tens of thousands.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                <h3 className="font-bold text-base">Jewelry Designer</h3>
                <span className="text-xs font-mono opacity-80">
                  Jun 2016 – Mar 2018
                </span>
              </div>
              <div
                className={`text-sm font-semibold mb-3 ${isJewelry ? "text-[#800000]" : "text-purple-300"}`}
              >
                Dehres (Thai) Co., Ltd. — Bangkok, Thailand
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm opacity-90">
                <li>
                  Designed customer-focused jewelry for an international
                  company, liaising with factory partners to enforce quality
                  production standards.
                </li>
                <li>
                  Handled client consultations for custom jewelry projects,
                  effectively coordinating between design and production
                  departments to maintain seamless workflows.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ส่วน Education */}
        <section className="mb-10">
          <h2
            className={`text-lg font-bold tracking-widest uppercase mb-6 pb-2 border-b ${isJewelry ? "text-[#800000] border-[#800000]/30" : "text-purple-400 border-purple-500/30"}`}
          >
            Education
          </h2>
          <div className="space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                <h3 className="font-bold text-base">
                  Junior Software Developer Bootcamp
                </h3>
                <span className="text-xs font-mono opacity-80">
                  Jun – Oct 2026
                </span>
              </div>
              <div className="text-sm opacity-90">Generation Thailand</div>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                <h3 className="experiment text-base font-bold">
                  Bachelor of Science Program in Gems and Jewelry
                </h3>
                <span className="text-xs font-mono opacity-80">
                  2012 – 2016
                </span>
              </div>
              <div className="text-sm opacity-90 mb-1">
                Srinakharinwirot University
              </div>
              <ul className="list-disc list-inside text-sm opacity-90">
                <li>Final GPAX: 3.24</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ส่วน Awards & Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2
              className={`text-lg font-bold tracking-widest uppercase mb-4 pb-2 border-b ${isJewelry ? "text-[#800000] border-[#800000]/30" : "text-purple-400 border-purple-500/30"}`}
            >
              Awards & Achievements
            </h2>
            <div className="space-y-4 text-sm opacity-90">
              <div>
                <div className="flex justify-between font-bold">
                  <span>The Bento Expo Season 7 Ep. 01 — NHK World, Japan</span>
                  <span className="text-xs font-mono opacity-80">Apr 2022</span>
                </div>
                <p className="mt-1">
                  Featured on Japanese public broadcasting (NHK World) as an
                  international creative content artist, demonstrating strong
                  cross-cultural communication and digital storytelling skills.
                </p>
              </div>
              <div>
                <div className="flex justify-between font-bold">
                  <span>
                    2nd Runner-up — "The Spirit of ASEAN" Jewelry Design Award
                  </span>
                  <span className="text-xs font-mono opacity-80">Mar 2015</span>
                </div>
                <p className="mt-1">
                  Thai Gem and Jewelry Traders Association, Bangkok
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2
              className={`text-lg font-bold tracking-widest uppercase mb-4 pb-2 border-b ${isJewelry ? "text-[#800000] border-[#800000]/30" : "text-purple-400 border-purple-500/30"}`}
            >
              Activities & Leadership
            </h2>
            <div className="space-y-4 text-sm opacity-90">
              <div>
                <div className="flex justify-between font-bold">
                  <span>Thai Classical Music Performer (Khim)</span>
                  <span className="text-xs font-mono opacity-80">
                    2003 – 2016
                  </span>
                </div>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>
                    Co-founded the Thai Classical Music Club at Srinakharinwirot
                    University, overseeing administration, team management, and
                    event coordination.
                  </li>
                  <li>
                    Performed as a principal ensemble musician across school and
                    university institutional events.
                  </li>
                  <li>
                    Honored to perform in 6 royal recording and ceremonial
                    performances for H.M. King Rama IX.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};
