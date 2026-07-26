# 🌟 Sensa — Real-Time Multimodal Web Accessibility Platform

> **A comprehensive suite of visual and auditory accessibility tools engineered to tear down web barriers for low-vision, blind, deaf, and hard-of-hearing users.**

---

## 📌 Project Overview

**Sensa** is an advanced Chrome Extension and Web Platform created as a 3rd-Year Computer Science Capstone Project at **Bulacan State University (BulSU)**. 

Most modern websites are not inherently designed to support individuals with auditory or visual impairments. Sensa solves this by bridging the gap between web content and user accessibility through real-time speech recognition, neural translation, intelligent text-to-speech, live decibel monitoring, and interactive screen magnification.

---

## ⚡ Core Features & Accommodations

### 👁️ Visual Accommodation Mode
Tailored for low-vision and blind users to navigate and consume web content effortlessly.

- **🎤 Voice Command Navigation:** Hands-free browser control powered by fuzzy string matching speech recognition (supports `"read"`, `"stop"`, `"next"`, `"previous"`, `"faster"`, `"slower"`, `"magnifier"`).
- **🔊 Screen Reader (TTS Engine):** Paragraph-by-paragraph webpage narrator with full DOM tracking and highlight synchronization.
- **🔍 Screen Magnifier Lens:** Dynamic floating circular magnifier lens for instantaneous element inspection with 0ms pop-in and live DOM element tracking.
- **✨ Visual Micro-Accommodations:**
  - **Voice Guide:** Audio hover feedback (`useUIHoverAudio`) that speaks button and UI element labels on hover.
  - **Mouse Reader:** Instant narration of text directly under the mouse pointer.
  - **Image Reader:** Extracts and speaks image `alt` text, `title` attributes, and ARIA descriptions.

---

### 👂 Auditory Accommodation Mode
Designed for deaf and hard-of-hearing users to visualize sound and speech across any webpage.

- **🌐 Multilingual AI Subtitles:** Real-time live speech transcription powered by **Deepgram Nova-3** STT and instant translation via **Azure Translator Neural API** (supporting 45+ spoken languages and 135+ target translation languages).
- **🎨 Custom Subtitle Studio & Focus Mode:** Customizable subtitle overlay (100+ Google Fonts catalog, sizing, position, colors) paired with page-dimming **Focus Mode** to isolate live subtitles.
- **📥 Transcript Logging Drawer:** Live scrolling transcript drawer recording spoken audio and translated subtitles with 1-click `.txt` export.
- **🔔 Auditory Micro-Accommodations:**
  - **Sudden Sound Warning:** Web Audio API RMS analyzer that monitors live tab decibels and triggers a visual pop-up alert for sudden loud noises (>85dB).
  - **Real-time Audio Visualizer:** Smooth, framerate-independent FFT spectrum visualizer providing immediate feedback of active tab audio.

---

## 🏗️ Technical Architecture (15 Integrated APIs)

Sensa's architecture is organized across **3 specialized layers** utilizing **15 integrated APIs and frameworks**:

### 🛠️ Layer 1: Client & Extension Framework
1. **React 19:** Modular component architecture and state management.
2. **TypeScript:** Strict type-safe development environment.
3. **Vite:** High-speed HMR bundling and production builds.
4. **Tailwind CSS:** Dynamic glassmorphism design system with responsive dark/light mode support.
5. **Lucide Icons:** Vector interface iconography.
6. **Chrome Extension Manifest V3:** Background service worker scripts and content script injection.

### 🌐 Layer 2: Web Native Browser APIs
7. **Web Speech API:** In-browser SpeechRecognition engine for voice commands.
8. **Web Audio API RMS Analyzer:** Decibel sampling and peak noise detection.
9. **DOM MutationObserver:** Dynamic webpage change detection for live TTS tracking.
10. **WebSocket Streaming:** Full-duplex audio chunk transmission to cloud STT services.
11. **Canvas API:** Real-time FFT audio visualizer rendering.
12. **Google Fonts Developer API:** Dynamic catalog lookup for 100+ typography styles.

### ☁️ Layer 3: Cloud & AI Infrastructure
13. **Deepgram Nova-3 API:** High-accuracy, low-latency WebSocket speech-to-text transcription.
14. **Azure Translator Neural API:** Real-time multi-language subtitle translation.
15. **Render Cloud Hosting:** Scalable cloud backend deployment for proxying API requests securely.

---

## 📂 Repository Structure

```
sensa-website/
├── public/                # Static public assets
├── src/
│   ├── assets/            # Official vector SVG brand marks & team portrait images
│   ├── components/
│   │   ├── Navbar.tsx             # Dual Top Navbar & Vertical Left Sidebar layout
│   │   ├── HeroSection.tsx        # Main banner with CTA buttons & extension preview
│   │   ├── MissionSection.tsx     # Problem vs. Solution interactive flow pipeline
│   │   ├── FeaturesSection.tsx    # Visual & Auditory mode showcase cards
│   │   ├── DemoSection.tsx        # Video demonstration player
│   │   ├── ScopeSection.tsx       # System boundaries & accessibility target scope
│   │   ├── ArchitectureSection.tsx# 15 Integrated APIs & 3-Layer system architecture
│   │   ├── GuideSection.tsx       # Step-by-step user installation guide
│   │   ├── TeamSection.tsx        # Capstone development team profiles
│   │   └── Footer.tsx             # Site navigation & copyright details
│   ├── App.tsx            # Main application root with scroll tracking & theme state
│   ├── main.tsx           # Application entry point
│   └── index.css          # Core CSS design system & cybernetic background grid
├── package.json           # Node dependencies & scripts
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

## 👥 The Capstone Team

Built with ❤️ by 4th Year IT Students at **Bulacan State University (BulSU)**:

| Name | Role | Profile Links |
| :--- | :--- | :--- |
| **John Russell Sta.Ana** | Project Manager | [GitHub](https://github.com/bulsu-jrsfstaana) • [LinkedIn](https://www.linkedin.com/in/john-russell-sta-ana-022366403) |
| **Kian Davey Antolin** | Developer | [GitHub](https://github.com/bulsu-kdlantolin) • [LinkedIn](https://www.linkedin.com/in/kian-davey-antolin-13b60a372/) |
| **Robert Shanedion Tantoco** | Graphics Designer & Video Editor | [GitHub](https://github.com/bulsu-rsmtantoco) • [LinkedIn](https://www.linkedin.com/in/robert-shanedion-tantoco/) |
| **Christian Adriano** | Research & Documentation | [GitHub](https://github.com/bulsu-ctadriano) • [LinkedIn](https://www.linkedin.com/in/christian-adriano-092476382) |
| **Leo Lorenzo Dela Cruz** | QA & Usability Tester | [GitHub](https://github.com/bulsu-lltdelacruz) • [LinkedIn](https://www.linkedin.com/in/leo-lorenzo-dela-cruz-872665311) |

---

## 📄 License & Acknowledgments

- **Institution:** Bulacan State University (BulSU) — College of Information and Communications Technology (CICT).
- **APIs & Services:** Powered by Deepgram, Microsoft Azure, Google Developer APIs, and Render.com.
