import React from "react";
import { motion, useScroll } from "framer-motion";

export const ScrollProgress = ({ mode }) => {
  const { scrollYProgress } = useScroll();
  const isJewelry = mode === "jewelry";

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className={`fixed top-0 left-0 right-0 h-1 z-50 origin-left transition-colors duration-500 ${
        isJewelry
          ? "bg-gradient-to-r from-[#4A2E2B] via-[#D4AF37] to-[#8C7355] shadow-[0_0_8px_rgba(212,175,55,0.5)]" // โหมดจิวเวลรี่: สีทองหรูหรา
          : "bg-gradient-to-r from-purple-500 via-pink-400 to-purple-300 shadow-[0_0_10px_#C084FC]" // โหมด Dev: สีม่วงมานาแฟนตาซี
      }`}
    />
  );
};
