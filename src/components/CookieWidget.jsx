import React, { useState } from "react";

export const CookieWidget = ({ mode }) => {
  const [cookies, setCookies] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen ? (
        <div
          className={`p-4 rounded-2xl shadow-2xl w-64 text-center relative backdrop-blur-md transition-all duration-500 ${
            mode === "jewelry"
              ? "bg-[#FFF9F5]/90 border border-[#E8D0C8] text-[#4A2E2B]"
              : "bg-[#1E112B]/90 border border-[#9333EA]/60 text-white"
          }`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-xs font-bold opacity-70 hover:opacity-100"
          >
            ✕
          </button>
          <h4 className="font-bold text-xs mb-1 opacity-90">
            Mini Cookie Clicker Widget
          </h4>
          <p className="text-2xl font-extrabold mb-3">{cookies} 🍪</p>
          <button
            onClick={() => setCookies((prev) => prev + 1)}
            className={`w-full py-2 rounded-xl font-bold text-sm active:scale-95 transition shadow-md ${
              mode === "jewelry"
                ? "bg-[#4A2E2B] text-[#FFF9F5] hover:bg-[#35201E]"
                : "bg-purple-600 text-white hover:bg-purple-500"
            }`}
          >
            Click Cookie!
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className={`px-4 py-2.5 rounded-full font-bold text-xs shadow-lg flex items-center gap-2 hover:scale-105 transition ${
            mode === "jewelry"
              ? "bg-[#4A2E2B] text-[#FFF9F5]"
              : "bg-purple-600 text-white"
          }`}
        >
          <span>🍪</span> Play Mini Game
        </button>
      )}
    </div>
  );
};
