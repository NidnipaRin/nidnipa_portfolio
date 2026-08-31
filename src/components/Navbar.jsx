import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";

export const Navbar = ({ personalInfo, mode, setMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-brand-cream/90 backdrop-blur-md border-b border-brand-taupe/30 px-6 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          className="font-bold text-xl tracking-wide text-brand-dark"
        >
          NIDNIPA
          <span className="text-brand-maroon">
            {mode === "jewelry" ? ".CRAFT" : ".DEV"}
          </span>
        </a>

        {/* Toggle Mode Button (จุดขายหลัก!) */}
        <ModeToggle mode={mode} setMode={setMode} />

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm font-semibold text-brand-dark/80 items-center">
          <a href="#about" className="hover:text-brand-maroon transition">
            About
          </a>
          <a href="#skills" className="hover:text-brand-maroon transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-brand-maroon transition">
            Projects
          </a>
          <a href="#experience" className="hover:text-brand-maroon transition">
            Experience
          </a>
        </div>
      </div>
    </nav>
  );
};
