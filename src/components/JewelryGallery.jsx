// src/components/JewelryGallery.jsx
import React from "react";
import { motion } from "framer-motion";

// 1. นำเข้าภาพหน้าการ์ดปกติ
import jew01Img from "../assets/jew01.png";
import jew02Img from "../assets/jew02.png";
import jew03Img from "../assets/jew03.png";

// 2. นำเข้าภาพที่จะให้แสดงตอนกดเปิด Modal (พิมพ์เขียว / CAD)
import jewin01Modal from "../assets/jewin-01.png";
import jewin02Modal from "../assets/jewin-02.png";
import jewin03Modal from "../assets/jewin-03.png";

export const JewelryGallery = ({ mode, onOpenModal }) => {
  const isJewelry = mode === "jewelry";

  if (!isJewelry) return null;

  const jewelryWorks = [
    {
      id: 1,
      title: "Ruby & Diamond Floral Earrings",
      category: "FINE JEWELRY DESIGN & 3D CAD",
      image: jew01Img,
      modalImage: jewin01Modal, // <-- เพิ่มบรรทัดนี้เพื่อให้ส่งรูป Modal เข้าไป
      description:
        "Vibrant custom ruby and marquee diamond cluster earrings focusing on stone symmetry and prong precision.",
      designPhilosophy:
        "A masterclass in asymmetrical floral geometry, designed to capture the vibrant passion of vivid red rubies framed by the crystalline brilliance of marquise-cut diamonds.",
      implementation: [
        "Engineered with rigorous stone symmetry, balancing complex clusters of round and marquise gemstones to ensure seamless visual weight distribution.",
        "Precision-crafted prong settings executed to millimeter-level accuracy, securing high-value stones while minimizing metal visibility to maximize light refraction.",
        "Hand-assembled framework reflecting architectural rigor, ensuring the earrings sit comfortably and securely against the wearer's ear contour.",
      ],
      keyTakeaway:
        "Demonstrates an uncompromising standard of high-end luxury detailing, where structural engineering meets organic art direction.",
      techStack: ["Rhino 3D / CAD", "White Gold 18K", "Millimeter Precision"],
    },
    {
      id: 2,
      title: "Diamond Cluster Necklace",
      category: "HIGH-END ATELIER DETAILING",
      image: jew02Img,
      modalImage: jewin02Modal, // <-- เพิ่มบรรทัดนี้
      description:
        "Intricate high-end diamond layout inspired by classical atelier blueprint standards.",
      designPhilosophy:
        "A breathtaking symphony of continuous sparkle, inspired by classical atelier blueprint standards and the flowing elegance of fine drapery.",
      implementation: [
        "Meticulously aligned diamond clusters creating a seamless river of fire, utilizing varying stone cuts to build dynamic depth and texture.",
        "Articulated modular linkage system engineered to allow flexible, fluid movement while maintaining absolute structural integrity under tension.",
        "Precision gemstone setting that locks every facet into a unified plane, ensuring optimal light return from every conceivable angle.",
      ],
      keyTakeaway:
        "Translates complex layout geometry and high-net-worth client expectations into a timeless piece of wearable art.",
      techStack: [
        "Blueprint Drafting",
        "Diamond Pave",
        "Modular Linkage",
        "High Jewelry Crafting",
      ],
    },
    {
      id: 3,
      title: "Emerald Drop Statement Earrings",
      category: "FINE JEWELRY DESIGN & BLUEPRINT",
      image: jew03Img,
      modalImage: jewin03Modal, // <-- เพิ่มบรรทัดนี้
      description:
        "Precision-driven emerald alignment paired with brilliant diamonds, reflecting structural attention to detail.",
      designPhilosophy:
        "A majestic interplay of rich, verdant emeralds and brilliant-cut diamonds, evoking the regal heritage of high jewelry craftsmanship.",
      implementation: [
        "Precision-driven emerald alignment, featuring calibrated step-cut and oval stones matched meticulously for color saturation and clarity.",
        "Multi-tiered chandelier construction designed with load-bearing structural joints, ensuring lightweight wearability despite the opulent volume.",
        "Flawless micro-prong execution and mirror-polished white gold settings that enhance the natural depth of the central green gemstones.",
      ],
      keyTakeaway:
        "Bridges elite aesthetic storytelling with meticulous technical execution, echoing the precision required in complex component-based development.",
      techStack: [
        "Technical Sketching",
        "Step-Cut Calibration",
        "Chandelier Structure",
        "Micro-Prong Setting",
      ],
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-12 px-6 max-w-6xl mx-auto"
    >
      <div className="text-center mb-8">
        <h3 className="text-xl font-serif font-bold text-[#800000] mb-2">
          Fine Jewelry Design & Aesthetic Highlights
        </h3>
        <p className="text-xs text-[#633A2C]/80 max-w-xl mx-auto">
          Translating structural precision, material aesthetics, and intricate
          layout design from luxury craftsmanship into digital experiences.
          Click cards to view details.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jewelryWorks.map((work, index) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            onClick={() => onOpenModal && onOpenModal(work)}
            className="rounded-xl overflow-hidden border border-[#633A2C]/20 bg-[#E0D6B8]/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-[#800000]/40 flex flex-col justify-between cursor-pointer group"
          >
            <div className="aspect-[4/3] overflow-hidden bg-[#E0D6B8]/80">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100"
              />
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-[#800000]/10 text-[#800000] inline-block mb-2">
                  {work.category}
                </span>
                <h4 className="text-sm font-bold font-serif text-[#800000] mb-1 group-hover:text-[#633A2C] transition-colors">
                  {work.title}
                </h4>
                <p className="text-xs text-[#633A2C]/90 leading-relaxed">
                  {work.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#633A2C]/10 flex flex-wrap gap-1">
                {work.techStack?.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#800000]/5 text-[#800000]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
