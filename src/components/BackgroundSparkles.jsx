// src/components/BackgroundSparkles.jsx
import React from "react";
import { motion } from "framer-motion";

export const BackgroundSparkles = ({ mode }) => {
  const isJewelry = mode === "jewelry";

  const sparkles = Array.from({ length: 25 });

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {sparkles.map((_, i) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const duration = 3 + Math.random() * 4;
        const delay = Math.random() * 3;

        return (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              isJewelry
                ? "w-2.5 h-2.5 bg-[#800000]/40 shadow-[0_0_12px_#800000/60,0_0_22px_#A31D1D/40]" // โหมดจิวเวลรี่: สีเบอร์กันดี/ทับทิมโปร่งแสง คุมโทนเข้ากับตัวหนังสือ
                : "w-2.5 h-2.5 bg-yellow-100 shadow-[0_0_12px_#FEF08A,0_0_22px_#FDE047]" // โหมด Dev: สีเหลืองอ่อนละมุนๆ เหมือนเดิม
            }`}
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
            }}
            animate={{
              opacity: [0.3, 0.9, 0.3],
              scale: [0.6, 1.8, 0.6],
              y: [0, -45, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};
