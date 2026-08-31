import React from "react";

export const ModeToggle = ({ mode, setMode }) => {
  const isJewelry = mode === "jewelry";

  return (
    <div
      className={`p-1 rounded-full flex items-center border transition-all duration-500 backdrop-blur-md ${
        isJewelry
          ? "bg-[#E0D6B8]/70 border-[#633A2C]/30 shadow-sm"
          : "bg-white border-slate-300 shadow-sm"
      }`}
    >
      <button
        onClick={() => setMode("jewelry")}
        className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
          isJewelry
            ? "bg-[#800000] text-[#E0D6B8] shadow-sm font-bold"
            : "text-slate-500 hover:text-slate-900"
        }`}
      >
        💎 Jewelry Spec
      </button>

      <button
        onClick={() => setMode("tech")}
        className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
          !isJewelry
            ? "bg-slate-900 text-white shadow-sm font-bold"
            : "text-[#633A2C] hover:text-[#800000]"
        }`}
      >
        ⚡ Tech Spec
      </button>
    </div>
  );
};
