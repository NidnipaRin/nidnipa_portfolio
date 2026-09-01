// src/components/DevLabGallery.jsx
import React from "react";
import findMyCarrotImg from "../assets/findmycarrot.png";
import pokemonImg from "../assets/polemon.png";
import flappyBirdImg from "../assets/flappybird.png";

export const DevLabGallery = ({ mode, onOpenModal }) => {
  const devWorks = [
    {
      id: 1,
      title: "Find My Carrot (JavaScript)",
      category: "CLI LOGIC & GAMEPLAY",
      image: findMyCarrotImg,
      description:
        "Interactive console-based game built with core JavaScript, focusing on coordinate logic, loops, and conditional event handling.",

      // ใส่ข้อมูลแบบกระจายทุกฟิลด์ เพื่อให้ ProjectModal หาเจอไม่ว่าจะเรียกชื่อฟิลด์ไหน
      designPhilosophy:
        "Engineered to master and test core programming logic using Vanilla JavaScript, blending coordinate calculation and interactive console-based gameplay.",
      implementation: [
        "Utilized text-based coordinate controls to navigate a grid-based console environment in search of hidden carrots.",
        "Implemented loops and conditional statements to dynamically position and track wolves as active hazards and obstacles.",
        "Managed real-time game state updates and console rendering triggered by player movement inputs.",
      ],
      keyTakeaway:
        "Built a rock-solid foundation in variable scoping, algorithmic thinking, and event-driven control flow before transitioning to complex web frameworks.",
      techStack: ["JavaScript", "CLI Logic", "Algorithms"],
      tech: ["JavaScript", "CLI Logic", "Algorithms"],

      // เผื่อ Modal ดึงผ่าน object details
      details: {
        designPhilosophy:
          "Engineered to master and test core programming logic using Vanilla JavaScript, blending coordinate calculation and interactive console-based gameplay.",
        implementation: [
          "Utilized text-based coordinate controls to navigate a grid-based console environment in search of hidden carrots.",
          "Implemented loops and conditional statements to dynamically position and track wolves as active hazards and obstacles.",
          "Managed real-time game state updates and console rendering triggered by player movement inputs.",
        ],
        keyTakeaway:
          "Built a rock-solid foundation in variable scoping, algorithmic thinking, and event-driven control flow before transitioning to complex web frameworks.",
        techStack: ["JavaScript", "CLI Logic", "Algorithms"],
      },
    },
    {
      id: 2,
      title: "Castle Room Pokemon",
      category: "REACT STATE & HOOKS",
      image: pokemonImg,
      description:
        "Practice project mastering useEffect, useState, and component props management through nested UI rooms.",

      designPhilosophy:
        "An immersive React state-management challenge utilizing nested UI components (castle rooms) to simulate multi-layered character communication and traversal.",
      implementation: [
        "Mastered useState and useEffect hooks to handle intricate state updates across hierarchical component trees.",
        "Applied prop-drilling and component composition patterns to pass data and dialogue fluidly between nested layers.",
        "Integrated external APIs to fetch and render dynamic character details within the custom UI environment.",
        "Engineered an interactive narrative loop requiring users to transmit messages down through nested components to help rescue a character trapped at the lowest level.",
      ],
      keyTakeaway:
        "Conquered component lifecycle management and multi-tiered data flow, unlocking the architectural skills required to scale complex React applications.",
      techStack: [
        "React",
        "Hooks (useState/useEffect)",
        "API Integration",
        "Component Composition",
      ],
      tech: ["React", "Hooks", "API Integration"],

      details: {
        designPhilosophy:
          "An immersive React state-management challenge utilizing nested UI components (castle rooms) to simulate multi-layered character communication and traversal.",
        implementation: [
          "Mastered useState and useEffect hooks to handle intricate state updates across hierarchical component trees.",
          "Applied prop-drilling and component composition patterns to pass data and dialogue fluidly between nested layers.",
          "Integrated external APIs to fetch and render dynamic character details within the custom UI environment.",
          "Engineered an interactive narrative loop requiring users to transmit messages down through nested components to help rescue a character trapped at the lowest level.",
        ],
        keyTakeaway:
          "Conquered component lifecycle management and multi-tiered data flow, unlocking the architectural skills required to scale complex React applications.",
        techStack: ["React", "Hooks", "API Integration"],
      },
    },
    {
      id: 3,
      title: "JSD//13 Flappy Bird (Group Project)",
      category: "TEAM COLLABORATION & REACT",
      image: flappyBirdImg,
      description:
        "Collaborative team game project. Engineered the character selection screen and integrated modular components with teammates.",

      designPhilosophy:
        "A collaborative team development challenge built using React, focused on modular architecture and unified thematic execution where players dive into a gamified coding universe.",
      implementation: [
        "Engineered the interactive character selection screen, allowing users to choose their distinct developer avatar before entering the gameplay loop.",
        "Developed and structured modular React components that seamlessly integrated with teammates' codebases, combining individual logic into a cohesive application.",
        "Implemented dynamic state tracking and event listeners to manage real-time game physics, collision detection, and score counters within a shared environment.",
        "Coordinated cross-component data flow and style consistency to maintain an immersive retro-futuristic theme throughout the entire application.",
      ],
      keyTakeaway:
        "Mastered collaborative Git workflows, code merging strategies, and component modularity, bridging individual coding efforts into a polished, production-ready group application.",
      techStack: [
        "React",
        "Tailwind CSS",
        "Git Collaboration",
        "Component Modularity",
      ],

      link: "https://group4-build-day.vercel.app",
      liveDemoUrl: "https://group4-build-day.vercel.app",
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
          collaborative code integration through hands-on development. Click
          cards to view details.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {devWorks.map((work) => (
          <div
            key={work.id}
            onClick={() =>
              (work.details || work.implementation) &&
              onOpenModal &&
              onOpenModal(work)
            }
            className={`rounded-xl overflow-hidden border border-purple-500/25 bg-purple-950/40 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:border-purple-400/60 flex flex-col justify-between p-4 ${
              work.details || work.implementation ? "cursor-pointer group" : ""
            }`}
          >
            <div>
              <div className="aspect-[4/3] overflow-hidden bg-purple-900/30 rounded-lg mb-4">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100"
                />
              </div>

              <span className="text-[10px] font-mono font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 inline-block mb-2">
                {work.category}
              </span>
              <h4 className="text-sm font-bold font-mono text-purple-100 mb-1 group-hover:text-purple-300 transition-colors">
                {work.title}
              </h4>
              <p className="text-xs text-purple-200/90 leading-relaxed font-sans mb-4">
                {work.description}
              </p>
            </div>

            {work.link && (
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-full py-2 px-3 text-center text-xs font-mono font-bold rounded-lg bg-purple-500/20 text-purple-200 border border-purple-500/40 hover:bg-purple-500/40 transition-all flex items-center justify-center gap-2 mt-auto"
              >
                <span>🔗 Live Demo / View Source</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
