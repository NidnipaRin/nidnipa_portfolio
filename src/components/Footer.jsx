import React from "react";

export const Footer = ({ personalInfo, mode }) => {
  const name = personalInfo?.name || "Portfolio";
  const role = personalInfo?.role || "";
  const github = personalInfo?.github || "#";
  const linkedin = personalInfo?.linkedin || "#";
  const email = personalInfo?.email || "";

  return (
    <footer
      className={`py-12 text-center px-6 transition-colors duration-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${
        mode === "jewelry" ? "text-[#4A2E2B]" : "text-white"
      }`}
    >
      <p className="font-bold text-lg mb-2">{name}</p>

      {role && (
        <p className="text-sm mb-6 font-medium">
          {role} | Crafting with detail
        </p>
      )}

      <div className="flex justify-center gap-6 text-sm font-semibold">
        {personalInfo?.github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="hover:underline transition"
          >
            GitHub
          </a>
        )}

        {personalInfo?.linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:underline transition"
          >
            LinkedIn
          </a>
        )}

        {personalInfo?.email && (
          <a href={`mailto:${email}`} className="hover:underline transition">
            Email
          </a>
        )}
      </div>
    </footer>
  );
};
