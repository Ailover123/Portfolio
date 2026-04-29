<p align="center">
  <img src="public/assets/nishal.png" alt="Portfolio Logo" width="120" height="120" style="border-radius: 50%;" />
</p>

<h1 align="center">Nishal Gopal Poojary — Portfolio</h1>

<p align="center">
  <em>Engineering solutions, not just code.</em>
</p>

<p align="center">
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 19" /></a>
  <a href="https://vite.dev"><img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 7" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" /></a>
  <a href="https://threejs.org"><img src="https://img.shields.io/badge/Three.js-r167-000000?style=for-the-badge&logo=threedotjs&logoColor=white" alt="Three.js" /></a>
  <a href="https://firebase.google.com"><img src="https://img.shields.io/badge/Firebase-12-DD2C00?style=for-the-badge&logo=firebase&logoColor=white" alt="Firebase" /></a>
</p>

<p align="center">
  <a href="https://github.com/Ailover123"><img src="https://img.shields.io/badge/GitHub-Ailover123-181717?style=flat-square&logo=github" alt="GitHub" /></a>
  <a href="https://www.linkedin.com/in/nishalpoojary/"><img src="https://img.shields.io/badge/LinkedIn-nishalpoojary-0A66C2?style=flat-square&logo=linkedin" alt="LinkedIn" /></a>
  <a href="https://leetcode.com/u/nishalpoojary71/"><img src="https://img.shields.io/badge/LeetCode-nishalpoojary71-FFA116?style=flat-square&logo=leetcode&logoColor=white" alt="LeetCode" /></a>
</p>

---

## 🧭 Overview

A modern, immersive developer portfolio built to showcase my work, skills, and professional journey as an **Android & AI Developer**. This isn't a static résumé — it's a living, interactive experience featuring 3D graphics, dynamic animations, real-time chat, and a curated project gallery, all wrapped in a sleek dark-mode interface.

> _"Working with passion, creating with mind."_

---

## ✨ Features

| Category | Highlights |
|---|---|
| **Hero Section** | Animated shiny text, blur-in typography, profile card with tilt interaction |
| **About Me** | Auto-animated stats (20+ projects, 3+ years experience), scroll-triggered reveals |
| **Tools & Technologies** | Staggered AOS grid showcasing 13+ tools with glassmorphic cards |
| **Project Showcase** | ChromaGrid gallery with GSAP-powered cursor-follow glow, modal deep-dives |
| **Contact & Chat** | Firebase-powered real-time chat room alongside a FormSubmit contact form |
| **Navigation** | Scroll-aware navbar with glassmorphism, macOS-style Dock in the footer |
| **Background** | Full-viewport Aurora shader rendered via WebGL for ambient motion |
| **Preloader** | Smooth branded preloader for a polished first-load experience |
| **Responsive** | Fully responsive across mobile, tablet, and desktop breakpoints |

---

## 🛠️ Tech Stack

### Core

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev) | UI component library |
| [Vite 7](https://vite.dev) | Lightning-fast build tool & dev server |
| [Tailwind CSS 4](https://tailwindcss.com) | Utility-first CSS framework |
| [JavaScript (ES Modules)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) | Application logic |

### 3D & Animation

| Technology | Purpose |
|---|---|
| [Three.js](https://threejs.org) | WebGL 3D rendering engine |
| [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) | React renderer for Three.js |
| [React Three Drei](https://github.com/pmndrs/drei) | Useful helpers for R3F |
| [GSAP](https://gsap.com) | Professional-grade animation library |
| [Framer Motion](https://motion.dev) | Declarative React animation |
| [AOS](https://michalsnik.github.io/aos/) | Scroll-triggered animations |
| [Animate.css](https://animate.style) | Pre-built CSS animations |

### Backend & Services

| Technology | Purpose |
|---|---|
| [Firebase](https://firebase.google.com) | Real-time database for chat functionality |
| [FormSubmit](https://formsubmit.co) | Serverless contact form endpoint |

### Dev Tooling

| Technology | Purpose |
|---|---|
| [ESLint](https://eslint.org) | Code quality & linting |
| [gh-pages](https://github.com/tschaub/gh-pages) | One-command GitHub Pages deployment |

---

## 🏗️ Architecture

```
src/
├── App.jsx                  # Root layout — Hero, About, Tools, Projects, Contact
├── main.jsx                 # React DOM entry point
├── data.js                  # Centralized tools & project data
├── firebase.js              # Firebase SDK configuration
├── index.css                # Global styles & Tailwind directives
└── components/
    ├── Navbar.jsx            # Scroll-aware glassmorphic navigation bar
    ├── Footer.jsx            # Social links + macOS-style Dock
    ├── PreLoader.jsx         # Branded loading animation
    ├── ChatRoom.jsx          # Firebase real-time chat room
    ├── Aurora/               # WebGL aurora borealis background shader
    ├── ProfileCard/          # 3D tilt-interactive profile card
    ├── Lanyard/              # 3D physics-based lanyard badge (R3F + Rapier)
    ├── ChromaGrid/           # GSAP cursor-glow project gallery grid
    ├── ProjectModal/         # Full-detail project modal overlay
    ├── GlassIcons/           # Glassmorphic icon components
    ├── Dock/                 # macOS-inspired magnification dock
    ├── BlurText/             # Word-by-word blur reveal animation
    ├── ShinyText/            # Animated gradient shimmer text
    ├── ScrambledText/        # Text scramble decode animation
    ├── SplitText/            # Character-split entrance animation
    ├── ScrollReveal/         # Intersection Observer scroll reveals
    └── CountUp/              # Animated number counter
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/Ailover123/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server with hot reload (accessible on LAN)
npm run dev
```

The app will be available at `http://localhost:5173` (and on your local network).

### Production Build

```bash
# Create an optimized production build
npm run build

# Preview the production build locally
npm run preview
```

### Deployment

```bash
# Deploy to GitHub Pages
npm run deploy
```

---

## 🎨 Design Philosophy

This portfolio is built around three core principles:

- **Immersive Experience** — WebGL shaders, physics-based 3D elements, and layered animations create depth that goes beyond a flat webpage.
- **Performance First** — Despite the visual richness, the app leverages Vite's tree-shaking, code-splitting, and lazy loading to stay fast.
- **Intentional Interaction** — Every hover effect, scroll animation, and micro-interaction is purposeful — guiding the visitor's eye without overwhelming.

---

## 📂 Featured Projects

| # | Project | Domain |
|---|---|---|
| 1 | **AIS Detection App** | AI / Healthcare — Early detection of Adolescent Idiopathic Scoliosis |
| 2 | **IoT Air Quality Monitoring** | IoT / Environment — Real-time air quality sensor dashboard |
| 3 | **IoT Heartbeat Monitoring** | IoT / Healthcare — Live heart rate tracking via web interface |
| 4 | **Personal Web Portfolio** | Web Development — This very site |
| 5 | **Color Blindness Detection** | Cross-platform / Health — Ishihara-style color vision tests |
| 6 | **Coffee Shop Website** | Web Development / E-commerce — Online ordering & menu platform |

---

## 📜 License

This project is private and not licensed for redistribution. All rights reserved.

---

<p align="center">
  Designed & Developed with ❤️ by <strong>Nishal Gopal Poojary</strong>
</p>
