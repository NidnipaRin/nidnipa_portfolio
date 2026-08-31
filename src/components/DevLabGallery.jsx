// src/components/DevLabGallery.jsx
import React from "react";

// 1. นำเข้าไฟล์ภาพจาก src/assets เข้ามาก่อน
import findMyCarrotImg from "../assets/findmycarrot.png";
import pokemonImg from "../assets/polemon.png";
import flappyBirdImg from "../assets/flappybird.png";

export const DevLabGallery = ({ mode }) => {
  const devWorks = [
    {
      id: 1,
      title: "Find My Carrot (JavaScript)",
      category: "CLI LOGIC & GAMEPLAY",
      image: findMyCarrotImg, // 2. ใช้ตัวแปรภาพที่ import เข้ามา
      description:
        "Interactive console-based game built with core JavaScript, focusing on coordinate logic, loops, and conditional event handling.",
    },
    {
      id: 2,
      title: "Castle Room Pokemon",
      category: "REACT STATE & HOOKS",
      image: pokemonImg, // ใช้ตัวแปร polemon
      description:
        "Practice project mastering useEffect, useState, and component props management through nested nested UI rooms.",
    },
    {
      id: 3,
      title: "JSD//13 Flappy Bird (Group Project)",
      category: "TEAM COLLABORATION & REACT",
      image: flappyBirdImg, // ใช้ตัวแปร flappybird
      description:
        "Collaborative team game project. Engineered the character selection screen and integrated modular components with teammates.",
    },
  ];

  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-xl font-mono font-bold text-purple-300 mb-2">
          ⚡ Dev Labs & Practice Projects
        </h3>
        <p className="text-xs text-purple-200/80 max-w-xl mx-auto">
          Exploring core programming logic, React state management, and
          collaborative code integration through hands-on development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {devWorks.map((work) => (
          <div
            key={work.id}
            className="rounded-xl overflow-hidden border border-purple-500/20 bg-purple-950/40 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-purple-400/40 flex flex-col justify-between"
          >
            <div className="aspect-[4/3] overflow-hidden bg-purple-900/30">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-500 opacity-90 hover:opacity-100"
              />
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 inline-block mb-2">
                  {work.category}
                </span>
                <h4 className="text-sm font-bold font-mono text-purple-100 mb-1">
                  {work.title}
                </h4>
                <p className="text-xs text-purple-200/90 leading-relaxed font-sans">
                  {work.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
