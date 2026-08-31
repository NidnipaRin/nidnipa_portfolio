// src/components/JewelryGallery.jsx
import React from "react";
import { motion } from "framer-motion";

// นำเข้าไฟล์ภาพจาก src/assets
import jew01Img from "../assets/jew01.png";
import jew02Img from "../assets/jew02.png";
import jew03Img from "../assets/jew03.png";

export const JewelryGallery = ({ mode }) => {
  const isJewelry = mode === "jewelry";

  if (!isJewelry) return null;

  const jewelryWorks = [
    {
      id: 1,
      title: "Ruby & Diamond Floral Earrings",
      category: "FINE JEWELRY DESIGN",
      image: jew01Img,
      description:
        "Vibrant custom ruby and marquee diamond cluster earrings focusing on stone symmetry and prong precision.",
    },
    {
      id: 2,
      title: "Diamond Cluster Necklace",
      category: "HIGH-END DETAILING",
      image: jew02Img,
      description:
        "Intricate high-end diamond layout inspired by classical atelier blueprint standards.",
    },
    {
      id: 3,
      title: "Emerald Drop Statement Earrings",
      category: "FINE JEWELRY DESIGN",
      image: jew03Img,
      description:
        "Precision-driven emerald alignment paired with brilliant diamonds, reflecting structural attention to detail.",
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
            className="rounded-xl overflow-hidden border border-[#633A2C]/20 bg-[#E0D6B8]/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between"
          >
            <div className="aspect-[4/3] overflow-hidden bg-[#E0D6B8]/80">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-500 opacity-90 hover:opacity-100"
              />
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-[#800000]/10 text-[#800000] inline-block mb-2">
                  {work.category}
                </span>
                <h4 className="text-sm font-bold font-serif text-[#800000] mb-1">
                  {work.title}
                </h4>
                <p className="text-xs text-[#633A2C]/90 leading-relaxed">
                  {work.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
