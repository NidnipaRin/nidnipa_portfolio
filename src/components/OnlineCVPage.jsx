// src/components/OnlineCVPage.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import mascotImage from "../assets/icon.png";

export const OnlineCVPage = ({ mode, onBack }) => {
  const isJewelry = mode === "jewelry";
  const containerRef = useRef(null);

  // กำหนดใช้ Scroll hook และจำกัดระยะ Y ไม่ให้เกินกล่อง (ปรับช่วงลงจาก 1450 เป็น 750)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const witchY = useTransform(scrollYProgress, [0, 1], [0, 1050]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen py-8 px-3 sm:px-6 relative w-full overflow-x-hidden bg-transparent"
    >
      <div className="max-w-4xl mx-auto relative pb-20">
        {/* Navbar ด้านบน */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex justify-between items-center gap-4 mb-8 sticky top-4 z-50 p-4 rounded-2xl backdrop-blur-md shadow-xl border ${
            isJewelry
              ? "bg-[#FFF8DC]/90 border-[#D4AF37]/60 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              : "bg-slate-950/80 border-purple-400/60 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          }`}
        >
          <button
            onClick={onBack}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
              isJewelry
                ? "border-[#D4AF37] text-[#800000] hover:bg-[#D4AF37] hover:text-white"
                : "border-purple-400 text-purple-200 hover:bg-purple-600 hover:text-white shadow-[0_0_10px_rgba(168,85,247,0.3)]"
            }`}
          >
            <span>← Back to Portfolio</span>
          </button>

          <a
            href="/CV_Nidnipa_Kiattikunnathum.pdf"
            download="CV_Nidnipa_Kiattikunnathum.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              isJewelry
                ? "bg-[#800000] text-[#FFF8DC] hover:bg-[#A00000] shadow-md"
                : "bg-purple-600 text-white hover:bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)]"
            }`}
          >
            <span>Download PDF</span>
          </a>
        </motion.div>

        {/* ===================== โหมด Jewelry (จิวเวลรี่: กระดาษครีมยาว) ===================== */}
        {isJewelry ? (
          <div className="bg-[#FFF8DC] text-[#4A2E2B] p-8 sm:p-12 rounded-3xl shadow-2xl border-2 border-[#D4AF37]/60 relative z-10 font-sans">
            {/* Header */}
            <div className="flex justify-between items-start border-b border-[#D4AF37]/40 pb-6 mb-8">
              <div>
                <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#800000] tracking-wide mb-1">
                  NIDNIPA KIATTIKUNNATHUM
                </h1>
                <p className="text-xs uppercase tracking-widest text-[#704241] font-medium">
                  Jewelry Designer & Software Developer
                </p>
              </div>
              <div className="text-xs text-[#704241] space-y-1 text-right font-medium">
                <div>📞 063 192 9442</div>
                <div>✉️ rarin.nidnipa@gmail.com</div>
                <div>📍 Bangkok, Thailand</div>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-8">
              <h2 className="text-xs font-bold tracking-widest uppercase text-[#800000] border-b border-[#D4AF37]/40 pb-1 mb-2 font-serif">
                Summary
              </h2>
              <p className="text-xs leading-relaxed opacity-90">
                Results-driven Junior Software Developer skilled in JavaScript,
                React, Node.js, Express.js, and MongoDB from Generation Thailand
                Bootcamp. Blends strong software engineering fundamentals with
                9+ years of professional experience in translating client needs
                into high-quality deliverables. Adaptable, detail-oriented, and
                ready to contribute to dynamic software development teams.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h2 className="text-xs font-bold tracking-widest uppercase text-[#800000] border-b border-[#D4AF37]/40 pb-1 mb-2 font-serif">
                Skills
              </h2>
              <ul className="space-y-1.5 text-xs opacity-90">
                <li>
                  <strong className="text-[#800000]">Technical skills:</strong>{" "}
                  HTML, CSS, JavaScript, React, Node.js, Relational Databases
                  (SQL), MongoDB, Git, GitHub, Adobe Creative Suite, Canva,
                  CapCut, Content Planning & Social Media Analytics
                </li>
                <li>
                  <strong className="text-[#800000]">Soft skills:</strong>{" "}
                  Teamwork, Problem-Solving, Critical Thinking, Interpersonal &
                  Communication, Active Listening, Time & Priority Management,
                  Professional Accountability, Entrepreneurial Mindset
                </li>
                <li>
                  <strong className="text-[#800000]">Language skills:</strong>{" "}
                  Thai (Native), English (TOEIC Score: 590)
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="mb-8">
              <h2 className="text-xs font-bold tracking-widest uppercase text-[#800000] border-b border-[#D4AF37]/40 pb-1 mb-4 font-serif">
                Work Experience
              </h2>
              <div className="space-y-6 text-xs">
                <div>
                  <div className="flex justify-between font-bold text-[#800000] text-sm">
                    <span>Jewelry Designer & Sales</span>
                    <span className="font-mono text-[11px] text-[#704241]">
                      Jul 2018 – Oct 2025
                    </span>
                  </div>
                  <div className="text-[11px] text-[#704241] font-medium mb-2">
                    Tamas Jewelry Co., Ltd. — Bangkok, Thailand
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 opacity-90 text-[11px]">
                    <li>
                      Collaborated effectively with design, production, and
                      manufacturing teams to deliver high-end custom jewelry
                      projects on schedule and within quality standards.
                    </li>
                    <li>
                      Identified and resolved complex design and technical
                      issues during the luxury jewelry manufacturing process to
                      maintain a seamless production workflow.
                    </li>
                    <li>
                      Translated client requirements into hand-drawn jewelry
                      design proposals, managing iterative revisions and
                      approval workflows based on client feedback.
                    </li>
                    <li>
                      Communicated and consulted directly with high-net-worth
                      clients for luxury sales (100,000+ THB/transaction),
                      building long-term trust through structured
                      problem-solving.
                    </li>
                    <li>
                      Managed end-to-end digital content for corporate brand
                      accounts, producing over 90 articles, videos, and visual
                      assets to scale audience engagement to tens of thousands.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-[#800000] text-sm">
                    <span>Jewelry Designer</span>
                    <span className="font-mono text-[11px] text-[#704241]">
                      Jun 2016 – Mar 2018
                    </span>
                  </div>
                  <div className="text-[11px] text-[#704241] font-medium mb-2">
                    Dehres (Thai) Co., Ltd. — Bangkok, Thailand
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 opacity-90 text-[11px]">
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
            </div>

            {/* Education */}
            <div className="mb-8">
              <h2 className="text-xs font-bold tracking-widest uppercase text-[#800000] border-b border-[#D4AF37]/40 pb-1 mb-4 font-serif">
                Education
              </h2>
              <div className="space-y-4 text-xs">
                <div>
                  <div className="flex justify-between font-bold text-[#800000] text-sm">
                    <span>Junior Software Developer Bootcamp</span>
                    <span className="font-mono text-[11px] text-[#704241]">
                      Nov 2025 – Feb 2026
                    </span>
                  </div>
                  <div className="text-[11px] text-[#704241] font-medium">
                    Generation Thailand
                  </div>
                </div>
                <div>
                  <div className="flex justify-between font-bold text-[#800000] text-sm">
                    <span>Bachelor of Science Program in Gems and Jewelry</span>
                    <span className="font-mono text-[11px] text-[#704241]">
                      2012 – 2016
                    </span>
                  </div>
                  <div className="text-[11px] text-[#704241] font-medium">
                    Srinakharinwirot University
                  </div>
                  <div className="text-[11px] opacity-80 mt-0.5">
                    • Final GPAX: 3.24
                  </div>
                </div>
              </div>
            </div>

            {/* Awards & Activities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xs font-bold tracking-widest uppercase text-[#800000] border-b border-[#D4AF37]/40 pb-1 mb-3 font-serif">
                  Awards & Achievements
                </h2>
                <div className="space-y-3 text-[11px] opacity-90">
                  <div>
                    <span className="font-bold text-[#800000]">
                      The Bento Expo Season 7 Ep. 01 — NHK World, Japan
                    </span>
                    <span className="font-mono text-[10px] text-[#704241] block">
                      Apr 2022
                    </span>
                    <p className="mt-0.5 opacity-80">
                      Featured on Japanese public broadcasting as an
                      international creative content artist.
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-[#800000]">
                      2nd Runner-up — "The Spirit of ASEAN" Jewelry Design Award
                    </span>
                    <span className="font-mono text-[10px] text-[#704241] block">
                      Mar 2015
                    </span>
                    <p className="mt-0.5 opacity-80">
                      Thai Gem and Jewelry Traders Association, Bangkok
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xs font-bold tracking-widest uppercase text-[#800000] border-b border-[#D4AF37]/40 pb-1 mb-3 font-serif">
                  Activities & Leadership
                </h2>
                <div className="space-y-3 text-[11px] opacity-90">
                  <div>
                    <span className="font-bold text-[#800000]">
                      Thai Classical Music Performer (Khim)
                    </span>
                    <span className="font-mono text-[10px] text-[#704241] block">
                      2003 – 2016
                    </span>
                    <p className="mt-0.5 opacity-80">
                      • Co-founded the Thai Classical Music Club at
                      Srinakharinwirot University.
                    </p>
                    <p className="mt-0.5 opacity-80">
                      • Performed in 6 royal recording and ceremonial
                      performances for H.M. King Rama IX.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ===================== โหมดโปรแกรมเมอร์ (Cyberpunk / แม่มดพิกเซล) ===================== */
          <motion.div
            animate={{
              boxShadow: [
                "0 0 25px rgba(168, 85, 247, 0.25), inset 0 0 15px rgba(59, 130, 246, 0.1)",
                "0 0 40px rgba(168, 85, 247, 0.5), inset 0 0 25px rgba(168, 85, 247, 0.2)",
                "0 0 25px rgba(168, 85, 247, 0.25), inset 0 0 15px rgba(59, 130, 246, 0.1)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="bg-slate-950/85 border-2 border-purple-400/50 rounded-3xl p-6 sm:p-10 relative backdrop-blur-md text-slate-100 overflow-hidden"
          >
            {/* เส้นกลางกล่อง */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-10 bottom-10 w-1 rounded-full z-0 hidden md:block bg-gradient-to-b from-cyan-400/60 via-purple-400/60 to-cyan-400/60 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />

            {/* มาสคอตแม่มดเดิน (จำกัดให้อยู่ในขอบเขตกล่องโดยใช้ style.overflow และคุมระยะ Y) */}
            <motion.div
              style={{ y: witchY }}
              className="absolute left-1/2 transform -translate-x-1/2 z-30 hidden md:flex flex-col items-center pointer-events-none top-10"
            >
              <motion.img
                src={mascotImage}
                alt="Witch Programmer"
                className="w-16 h-auto object-contain drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              />
              <div className="bg-cyan-950/90 text-cyan-300 text-[9px] px-2.5 py-0.5 rounded-full border border-cyan-400/50 mt-1 whitespace-nowrap shadow-[0_0_8px_rgba(34,211,238,0.6)]">
                Rin's Journey ✨
              </div>
            </motion.div>

            {/* เนื้อหาโหมดโปรแกรมเมอร์ (สลับซ้ายขวา) */}
            <div className="space-y-16 relative z-10 pt-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="bg-slate-900/90 border border-green-500/40 p-6 rounded-2xl shadow-lg md:w-[46%] md:ml-auto backdrop-blur-sm"
              >
                <h1 className="text-xl sm:text-2xl font-extrabold uppercase text-green-400 mb-1">
                  Nidnipa Kiattikunnathum
                </h1>
                <div className="text-xs text-purple-300 space-y-0.5 mb-3">
                  <div>📞 063 192 9442</div>
                  <div>✉️ rarin.nidnipa@gmail.com</div>
                  <div>📍 Bangkok, Thailand</div>
                </div>
                <h2 className="text-xs font-bold tracking-widest uppercase text-green-300 mb-2 border-b border-green-500/30 pb-1">
                  Summary
                </h2>
                <p className="text-xs opacity-90 leading-relaxed">
                  Results-driven Junior Software Developer skilled in
                  JavaScript, React, Node.js, Express.js, and MongoDB from
                  Generation Thailand Bootcamp. Blends strong software
                  engineering fundamentals with 9+ years of professional
                  experience in translating client needs into high-quality
                  deliverables.
                </p>
              </motion.div>

              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="bg-slate-900/90 border border-green-500/40 p-6 rounded-2xl shadow-lg md:w-[46%] md:mr-auto backdrop-blur-sm"
              >
                <h2 className="text-xs font-bold tracking-widest uppercase text-green-300 mb-3 border-b border-green-500/30 pb-1">
                  Skills
                </h2>
                <ul className="space-y-2 text-xs opacity-90">
                  <li>
                    <strong className="text-green-400">
                      Technical skills:
                    </strong>{" "}
                    HTML, CSS, JavaScript, React, Node.js, SQL, MongoDB, Git,
                    GitHub, Adobe Creative Suite, Canva, CapCut
                  </li>
                  <li>
                    <strong className="text-green-400">Soft skills:</strong>{" "}
                    Teamwork, Problem-Solving, Critical Thinking, Active
                    Listening, Time Management
                  </li>
                  <li>
                    <strong className="text-green-400">Language skills:</strong>{" "}
                    Thai (Native), English (TOEIC Score: 590)
                  </li>
                </ul>
              </motion.div>

              {/* Work Experience */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="bg-slate-900/90 border border-green-500/40 p-6 rounded-2xl shadow-lg md:w-[46%] md:ml-auto backdrop-blur-sm"
              >
                <h2 className="text-xs font-bold tracking-widest uppercase text-green-300 mb-3 border-b border-green-500/30 pb-1">
                  Work Experience
                </h2>
                <div className="space-y-4 text-xs">
                  <div>
                    <div className="flex justify-between font-bold text-green-400">
                      <span>Jewelry Designer & Sales</span>
                      <span className="font-mono opacity-80 text-[10px]">
                        Jul 2018 – Oct 2025
                      </span>
                    </div>
                    <div className="text-[11px] text-purple-300 mb-1">
                      Tamas Jewelry Co., Ltd. — Bangkok
                    </div>
                    <ul className="list-disc list-inside space-y-1 opacity-90 text-[11px]">
                      <li>
                        Collaborated with design, production, and manufacturing
                        teams for custom projects.
                      </li>
                      <li>
                        Consulted high-net-worth clients for luxury sales
                        (100,000+ THB/transaction).
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="bg-slate-900/90 border border-green-500/40 p-6 rounded-2xl shadow-lg md:w-[46%] md:mr-auto backdrop-blur-sm"
              >
                <h2 className="text-xs font-bold tracking-widest uppercase text-green-300 mb-3 border-b border-green-500/30 pb-1">
                  Education
                </h2>
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex justify-between font-bold text-green-400">
                      <span>Junior Software Developer Bootcamp</span>
                      <span className="font-mono opacity-80 text-[10px]">
                        Nov 2025 – Feb 2026
                      </span>
                    </div>
                    <div className="text-[11px] text-purple-300">
                      Generation Thailand (Batch JCrew 3)
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Awards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="bg-slate-900/90 border border-green-500/40 p-6 rounded-2xl shadow-lg md:w-[46%] md:ml-auto backdrop-blur-sm"
              >
                <h2 className="text-xs font-bold tracking-widest uppercase text-green-300 mb-3 border-b border-green-500/30 pb-1">
                  Awards & Activities
                </h2>
                <div className="space-y-3 text-[11px] opacity-90">
                  <div>
                    <span className="font-bold text-green-400">
                      The Bento Expo Season 7 Ep. 01 (NHK World, Japan)
                    </span>{" "}
                    — Apr 2022
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
