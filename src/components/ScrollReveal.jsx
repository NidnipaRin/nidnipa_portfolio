// src/components/ScrollReveal.jsx
import React from "react";
import { motion } from "framer-motion";

export const ScrollReveal = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }} // เปลี่ยนเป็น false เพื่อให้เล่นทุกครั้งที่เลื่อนผ่าน
      transition={{ duration: 0.7, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
