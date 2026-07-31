# 🌟 Sensa — Real-Time Multimodal Web Accessibility Platform

<div align="center">

![Sensa Logo](public/sensa-logo.png)

**Dual-mode web accessibility Chrome extension and web platform empowering low-vision, blind, deaf, and hard-of-hearing users to navigate the digital world seamlessly.**

[![Build Status](https://img.shields.io/badge/Build-v1.0.0%20(Beta)-0A44FF?style=for-the-badge)](https://github.com/bulsu-kdlantolin/sensa-website)
[![Manifest V3](https://img.shields.io/badge/Chrome-Manifest%20V3-FF7A2F?style=for-the-badge)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![WCAG 2.1 AAA](https://img.shields.io/badge/WCAG-2.1%20AAA%20Compliant-059669?style=for-the-badge)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![License](https://img.shields.io/badge/License-Open%20Source-8A56FF?style=for-the-badge)](LICENSE)

</div>

---

## 📌 Project Overview

**Sensa** is an advanced Chrome Extension and Web Platform created as an official Capstone Research Project at **Bulacan State University (BulSU) — College of Information and Communications Technology (CICT)** (S.Y. 2026–2027).

Most modern websites are not inherently designed to support individuals with visual or auditory impairments. Sensa solves this by bridging the gap between web content and user accessibility through real-time AI speech recognition, neural translation, intelligent text-to-speech, live decibel monitoring, and interactive screen magnification.

---

## ⚡ Core Features & Accommodations

### 👁️ Visual Accommodation Mode
Tailored for low-vision and blind users to consume web content effortlessly.

- **🎤 Hands-Free Voice Control:** Voice navigation powered by Web Speech API (`webkitSpeechRecognition`) supporting commands like `"Activate Visual Mode"`, `"Read"`, `"Stop"`, `"Faster"`, and `"Slower"`.
- **🔊 Screen Reader & Text-to-Speech:** Paragraph-by-paragraph webpage narrator (`SpeechSynthesisUtterance`) with live DOM highlighting via `MutationObserver`.
- **🔍 Dynamic Screen Magnifier:** Circular zoom lens providing 2x to 5x screen magnification with smooth element tracking.
- **✨ Visual Micro-Accommodations:**
  - **Voice Guide:** Audio hover feedback speaking UI button labels out loud.
  - **Highlight Reader:** Instant speech narration of mouse-selected text.
  - **Image Reader:** Automatic extraction and narration of image `alt` attribute descriptions.

---

### 👂 Auditory Accommodation Mode
Designed for deaf and hard-of-hearing users to visualize audio across any webpage.

- **🌐 Live AI Subtitles & Translation:** Low-latency live speech transcription powered by **Deepgram Nova-3** STT and instant neural translation via **Azure Translator API v3.0** (supporting 135+ languages).
- **🎨 Custom Subtitle Studio & Focus Mode:** Customizable subtitle overlay (typography, sizing, position, transparency) paired with page-dimming **Focus Mode**.
- **📥 Real-Time Transcript Drawer:** Live scrolling log drawer recording spoken captions with 1-click `.txt` file export.
- **🔔 Auditory Micro-Accommodations:**
  - **Sudden Sound Safety Warning:** Web Audio API RMS analyzer monitoring decibel frequencies to trigger visual alerts for sudden loud noises (>85dB).
  - **FFT Audio Visualizer:** Smooth, real-time frequency spectrum visualizer displaying active audio playback.

---

## 🏗️ Technical Architecture & Stack

Sensa's web platform and extension architecture are organized across **3 specialized layers**:

### 🛠️ Layer 1: Core Framework & Web Client
- **React 18 & TypeScript:** Modular component architecture with strict type safety.
- **Vite 8:** High-speed bundling, HMR, and production builds.
- **Tailwind CSS & Lucide:** WCAG 2.1 AAA high-contrast styling and vector iconography.
- **Plasmo Framework:** Modern browser extension development framework for Manifest V3.
- **Vercel Analytics & Speed Insights:** Real-time user metrics and Core Web Vitals performance tracking.

### 🌐 Layer 2: Web Platform Native APIs
- **Web Speech API:** In-browser SpeechRecognition and SpeechSynthesis engines.
- **Web Audio API:** `AudioContext` and `AnalyserNode` decibel monitoring.
- **DOM MutationObserver:** Live DOM element tree change detection.
- **WebSocket API:** Full-duplex TCP connections for real-time binary audio streaming.
- **MediaStreams API:** Active tab media capture and audio routing (`setSinkId`).

### ☁️ Layer 3: Cloud & AI Infrastructure
- **Deepgram Nova-3 STT API:** High-accuracy WebSocket live speech-to-text.
- **Azure Translator Text API v3.0:** Real-time multi-language translation.
- **Render Cloud Hosting:** Scalable cloud hosting for Node.js WebSocket proxy relay.

---

## 📂 Repository Structure

```
sensa-website/
├── public/                # Static public assets (favicon.png, sensa-logo.png)
├── src/
│   ├── assets/            # Vector SVGs, partner logos, and team portraits
│   ├── components/
│   │   ├── Navbar.tsx             # Top Navbar & Vertical Sidebar layout
│   │   ├── HeroSection.tsx        # Hero banner with extension preview
│   │   ├── MissionSection.tsx     # Interactive problem vs. solution flow
│   │   ├── FeaturesSection.tsx    # Visual & Auditory mode showcase
│   │   ├── DemoSection.tsx        # Video demonstration player
│   │   ├── ScopeSection.tsx       # System scope & accessibility targets
│   │   ├── ArchitectureSection.tsx# 15 Integrated APIs & 3-Layer system architecture
│   │   ├── GuideSection.tsx       # Step-by-step user installation & walkthrough
│   │   ├── TeamSection.tsx        # Capstone development team profiles
│   │   ├── ScrollReveal.tsx       # Scroll animation wrapper component
│   │   └── Footer.tsx             # Standards, build status, & copyright footer
│   ├── App.tsx            # Main application root with theme state & analytics
│   ├── main.tsx           # Application entry point
│   └── index.css          # Core CSS design system & cybernetic background grid
├── package.json           # Node dependencies & build scripts
├── tsconfig.json          # TypeScript compiler configuration
└── vite.config.ts         # Vite bundler configuration
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bulsu-kdlantolin/sensa-website.git
   cd sensa-website
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` to view the live site.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled output will be generated inside the `dist/` directory.

---

## 👥 Capstone Research Team

Built with ❤️ by the Capstone Research Team at **Bulacan State University (BulSU)**:

| Name | Role | Profile Links |
| :--- | :--- | :--- |
| **John Russell Sta.Ana** | Project Manager | [GitHub](https://github.com/bulsu-jrsfstaana) • [LinkedIn](https://www.linkedin.com/in/john-russell-sta-ana-022366403) |
| **Kian Davey Antolin** | Developer | [GitHub](https://github.com/bulsu-kdlantolin) • [LinkedIn](https://www.linkedin.com/in/kian-davey-antolin-13b60a372/) |
| **Robert Shanedion Tantoco** | Graphics Designer & Video Editor | [GitHub](https://github.com/bulsu-rsmtantoco) • [LinkedIn](https://www.linkedin.com/in/robert-shanedion-tantoco/) |
| **Christian Adriano** | Research & Documentation | [GitHub](https://github.com/bulsu-ctadriano) • [LinkedIn](https://www.linkedin.com/in/christian-adriano-092476382) |
| **Leo Lorenzo Dela Cruz** | QA & Usability Tester | [GitHub](https://github.com/bulsu-lltdelacruz) • [LinkedIn](https://www.linkedin.com/in/leo-lorenzo-dela-cruz-872665311) |

---

## 📄 License & Acknowledgments

- **Academic Institution:** Bulacan State University (BulSU) — College of Information and Communications Technology (CICT).
- **APIs & Services:** Deepgram, Microsoft Azure, Google Developer APIs, Render.com, and Vercel.
- **Privacy Standard:** 100% In-Memory Data Processing (No persistent server storage or logging).
