// src/data/portfolioData.js
import cookieImg from "../assets/cookie-clicker.jpg";
import bakeryImg from "../assets/bakery-screenshot.jpg";

export const personalInfo = {
  name: "Nidnipa Kiattikunnathum (Rin)",
  role: "Full-Stack Developer",
  location: "Bangkok, Thailand",
  github: "https://github.com/NidnipaRin",
  linkedin: "https://www.linkedin.com/in/nidnipa-kiattikunnathum-730b07136/",
  email: "rarin.nidnipa@gmail.com",

  heroTitle: {
    jewelry: "9+ Years of Luxury Design Precision. Now Building with Code.",
    tech: "Mastering Code: Beyond Design Precision. Building Scalable Solutions with Unwavering Determination.",
  },

  heroSubtitle: {
    jewelry:
      "In Jewelry, 0.1mm matters. In Tech, every line of code counts. Full-Stack Developer leveraging high attention to detail and user empathy to build clean, reliable web applications.",
    tech: "Full-Stack Developer trained in MERN stack, HTML5/CSS3, JavaScript, and React, focused on building responsive and maintainable web applications.",
  },

  tagline:
    "Mastering Code: Beyond Design Precision. Building Scalable Solutions with Unwavering Determination.",
  summary:
    "Full-Stack Developer trained in MERN stack, HTML5/CSS3, JavaScript, and React, focused on building responsive and maintainable web applications.",
};

export const skillsData = {
  technical: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Git / GitHub",
    "Tailwind CSS",
  ],
  creative: [
    "Adobe Creative Suite",
    "Canva",
    "CapCut",
    "Jewelry Design & Sketching",
    "Content Planning",
    "Social Media Analytics",
  ],
  soft: [
    "Active Listening",
    "Problem-Solving",
    "High-Net-Worth Client Communication",
    "Teamwork",
    "Time Management",
    "Entrepreneurial Mindset",
  ],
};

export const projectsData = [
  {
    id: "cookie-clicker",
    title: "Cookie Clicker Game",
    category: "REACT GAME & 8-BIT THEME",
    shortDescription:
      "Interactive browser-based game built with React. Features custom state management, auto-clickers, and upgrade logic.",
    fullDescription:
      "A fun and interactive Cookie Clicker game designed to demonstrate core React principles such as useState for dynamic score updating, useEffect for timer-based auto-clicking logic, and component state persistence.",
    image: cookieImg,
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/NidnipaRin/cookieclicker",
    liveDemoUrl: "https://cookieclicker-eta-two.vercel.app",
    contributors: "Solo Project",

    designPhilosophy:
      "An interactive, nostalgic 8-bit themed idle baking simulator engineered to test core React state management while blending playful gamification with interactive dessert recipe milestones.",
    implementation: [
      "Engineered robust state tracking using useState and useEffect hooks to manage real-time click counters, automatic baking ticks, and progressive speed increments.",
      "Developed an incremental automation mechanism that scales up the baking rate dynamically as players reach specific click thresholds.",
      "Programmed a milestone reward system that unlocks exclusive, delicious pastry and bread recipes once the player hits the target milestone of 1,000 clicks.",
      "Implemented a pixel-art, 8-bit inspired aesthetic through custom Tailwind CSS styling and themed UI components to create an immersive retro bakery atmosphere.",
    ],
    keyTakeaway:
      "Mastered complex asynchronous interval handling, state-driven UI rendering, and gamification logic within a scalable React architecture.",

    designPerspective:
      "Designed with a focus on tactile feedback and rewarding micro-interactions, providing users with a delightful and engaging visual experience.",
    techPerspective:
      "Engineered using React functional components, leveraging useState for state management, useEffect for timed intervals, and optimized re-renders.",
  },
  {
    id: "bakery-store",
    title: "Artisanal Bakery E-Commerce",
    category: "FRONT-END WEB DEVELOPMENT",
    shortDescription:
      "A visually engaging food and dessert showcase website emphasizing sleek UI/UX and seamless item navigation.",
    fullDescription:
      "Designed and built an e-commerce landing page tailored for an artisanal bakery. Highlighted product imagery with responsive layouts, smooth hover interactions, and intuitive product selection.",
    image: bakeryImg,
    techStack: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/NidnipaRin/myecommerce",
    liveDemoUrl: "https://myecommerce-puce.vercel.app/",
    contributors: "Solo Project",

    designPhilosophy:
      "A cozy, visually immersive storefront designed to showcase artisanal desserts with warm storytelling, emphasizing clean layout hierarchy and frictionless item navigation.",
    implementation: [
      "Structured a responsive, multi-page layout using semantic HTML5 and modular CSS3 architecture for fast-loading, clean component separation.",
      "Implemented interactive UI components and smooth navigation loops enabling users to effortlessly explore menu items, brand stories, and ordering options.",
      "Integrated responsive grid systems and media styling to showcase high-end bakery photography and promotional banners across all screen sizes.",
      "Optimized user flow and interactive call-to-action buttons (such as 'Discover our menu') to replicate a warm, inviting digital storefront experience.",
    ],
    keyTakeaway:
      "Perfected responsive web design principles and front-end layout composition, translating brand identity into a seamless, production-ready e-commerce interface.",

    designPerspective:
      "Focused on aesthetic composition, warm color harmony, and appetizing visual hierarchy to drive high user engagement and seamless navigation.",
    techPerspective:
      "Built with clean semantic HTML5, modular CSS3 architecture, and vanilla JavaScript for lightweight, fast-loading, and responsive UI components.",
  },
];

export const experienceData = [
  {
    id: 1,
    period: "Jun 2026 – Oct 2026",
    role: "Junior Software Developer Bootcamp",
    company: "Generation Thailand",
    details:
      "Completed intensive full-stack development program covering MERN stack, software engineering fundamentals, and agile teamwork.",
  },
  {
    id: 2,
    period: "Jul 2018 – Oct 2025",
    role: "Jewelry Designer & Sales",
    company: "Tamas Jewelry Co., Ltd.",
    details:
      "Handled custom jewelry designs for high-net-worth clients (>100,000 THB/transaction). Managed end-to-end digital content producing over 90 articles and videos.",
  },
  {
    id: 3,
    period: "Jun 2016 – Mar 2018",
    role: "Jewelry Designer",
    company: "Dehres (Thai) Co., Ltd.",
    details:
      "Designed customer-focused jewelry for an international company and coordinated with production factories for quality assurance.",
  },
];

export const achievementsData = [
  {
    id: 1,
    year: "2022",
    title: "Featured on NHK World, Japan",
    subtitle:
      "The Bento Expo Season 7 Ep. 01 — International creative content artist showcase.",
  },
  {
    id: 2,
    year: "2015",
    title: "2nd Runner-up Design Award",
    subtitle:
      "'The Spirit of ASEAN' Jewelry Design Award by Thai Gem and Jewelry Traders Association.",
  },
];
