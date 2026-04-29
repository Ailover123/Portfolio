import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/antigravity.png";
import Tools3 from "/assets/tools/python.png";
import Tools4 from "/assets/tools/colab.png";
import Tools5 from "/assets/tools/kaggle.png";
import Tools6 from "/assets/tools/android-studio.png";
import Tools7 from "/assets/tools/flutter.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/linux.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/firebase.png";
import Tools12 from "/assets/tools/mysql.png";
import Tools13 from "/assets/tools/git.png";

export const listTools = [
  {
    id: 1,
    image: Tools2,
    name: "Antigravity",
    description: "IDE",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools3,
    nama: "Python",
    ket: "Language",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools4,
    nama: "Google Colab",
    ket: "AI Notebooks",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools5,
    nama: "Kaggle",
    ket: "AI Platform",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools6,
    nama: "Android Studio",
    ket: "IDE",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools7,
    nama: "Flutter",
    ket: "Framework",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools9,
    nama: "Linux",
    ket: "OS / Environment",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools11,
    nama: "Firebase",
    ket: "Backend",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "MySql",
    ket: "Database",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Git",
    ket: "Version Control",
    dad: "1300",
  },
];

import Proyek1 from "/assets/proyek/proyek1.jpg";
import Proyek2 from "/assets/proyek/proyek2.jpg";
import Proyek3 from "/assets/proyek/proyek3.jpg";
import Proyek4 from "/assets/proyek/proyek4.jpg";
import Proyek5 from "/assets/proyek/proyek5.jpg";
import Proyek6 from "/assets/proyek/proyek6.jpg";

export const listProject = [
  {
    id: 1,
    image: Proyek1,
    title: "Defacement Detection System",
    subtitle: "A production-grade Web Defacement Detection Engine for integrity monitoring.",
    fullDescription: "Operates through a three-phase pipeline—Crawl, Baseline, and Compare—to automatically discover web pages, capture stable snapshots, and detect unauthorized modifications with semantic HTML diffing and evidence-grade reporting. Built with Python, Playwright, and MySQL.",
    borderColor: "#A855F7",
    gradient: "linear-gradient(145deg, #A855F7, #000)",
    url: "https://github.com/Ailover123/Defacement-Detection-System",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "Opportunity-Hub",
    subtitle: "Intelligent SaaS platform bridging students/professionals to their next big break.",
    fullDescription: "Aggregates and ranks career-defining opportunities from global hackathons to specialized certifications. Features multi-platform scrapers (Indeed, Coursera, Kaggle), a smart scoring engine for profile matching, and a professional SaaS dashboard with data visualization.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Ailover123/Opportunity-Hub",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "DataDash",
    subtitle: "Secure, cross-platform data-sharing application for seamless file transfers.",
    fullDescription: "Send files directly between Windows, Mac, Linux, and Android without internet. Uses peer-to-peer TCP connections and optional encryption for privacy. Built with Python for Desktop, Java/XML for Android, and Next.js for the companion site.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/Armaan4477/DataDash",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Smart Wheelchair (SmartNav)",
    subtitle: "Assistive mobility system for enhanced safety and independence.",
    fullDescription: "Integrates voice-controlled navigation, AI-powered speaker authentication, health monitoring, and emergency communication. Supports multilingual speech-to-text (Hindi, English, Marathi) and multimodal controls. Powered by Raspberry Pi 4B, Python, and Flutter.",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(180deg, #F59E0B, #000)",
    url: "https://github.com/ChampionSamay1644/Smart-Wheelchair",
    dad: "400",
  },
  {
    id: 5,
    image: Proyek5,
    title: "Named Memories",
    subtitle: "Digital archive hub designed for curating and naming precious moments.",
    fullDescription: "A central hub for preserving your most valued memories with a focus on curation and accessibility. Built with Dart and Flutter for a premium cross-platform experience, ensuring every moment is archived with the dignity it deserves.",
    borderColor: "#EC4899",
    gradient: "linear-gradient(145deg, #EC4899, #000)",
    url: "https://github.com/Ailover123/Named_memories",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6,
    title: "Personal Web Portfolio",
    subtitle: "Interactive 3D developer portfolio showcasing professional expertise.",
    fullDescription: "Features WebGL shaders, physics-based 3D elements (Lanyard), real-time Firebase chat, and a custom project gallery. Built with React 19, Vite, Tailwind CSS 4, and Three.js to deliver a premium user experience.",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(180deg, #06B6D4, #000)",
    url: "https://github.com/Ailover123/Portfolio",
    dad: "600",
  },
];
