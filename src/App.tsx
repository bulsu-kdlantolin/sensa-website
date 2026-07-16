import { useState, useEffect, useRef } from 'react';
import sensaLogo from './assets/Sensa-Logo.png';
import {
  Ear,
  Volume2,
  Mic,
  Maximize2,
  Sun,
  Moon,
  CheckCircle2,
  Zap,
  Download,
  FileText,
  Check,
  AlertCircle
} from 'lucide-react';

const Github = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MailIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);


type SensoryMode = 'standard' | 'visual' | 'auditory';
type ThemeMode = 'dark' | 'light';

export default function App() {
  const [activeMode, setActiveMode] = useState<SensoryMode>('standard');
  // Initialize theme from localStorage (`sensa_theme`), defaulting to 'light' mode
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem('sensa_theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme as ThemeMode;
    }
    return 'light';
  });

  // Interactive Playground & Dock State
  const [isFocusRulerActive, setIsFocusRulerActive] = useState<boolean>(false);
  const [isSimulatingCaptions, setIsSimulatingCaptions] = useState<boolean>(false);
  const [readingSpeed, setReadingSpeed] = useState<number>(1.2);
  const [simulatedCaptionText, setSimulatedCaptionText] = useState<string>('[EN] Sensa AI: Transcribing active tab speech stream in real-time...');
  const [voiceCommandStatus, setVoiceCommandStatus] = useState<string>('Ready for voice command input...');
  const [ttsPlaying, setTtsPlaying] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const isManualScrollingRef = useRef<boolean>(false);
  const manualScrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setActiveSection(targetId);
    isManualScrollingRef.current = true;

    if (manualScrollTimeoutRef.current) {
      clearTimeout(manualScrollTimeoutRef.current);
    }

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }

    manualScrollTimeoutRef.current = setTimeout(() => {
      isManualScrollingRef.current = false;
    }, 1000);
  };

  const isDark = theme === 'dark';

  // Toggle dark/light theme on root attribute & save preference to localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('sensa_theme', theme);
  }, [theme]);

  // Track active section on scroll for navbar underline highlight
  useEffect(() => {
    const sectionIds = ['hero', 'problem-solution', 'features', 'video', 'playground', 'guide', 'team'];
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScrollingRef.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -50% 0px',
        threshold: 0
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Simulate real-time auditory captions ticker when enabled
  useEffect(() => {
    if (!isSimulatingCaptions && activeMode !== 'auditory') return;
    const captions = [
      '[EN] Sensa AI: Transcribing active tab speech stream in real-time...',
      '[EN] Speaker 1: "Welcome to our BulSU Capstone presentation on sensory accessibility."',
      '[EN] Speaker 1: "Notice how Sensa synchronizes audio capture with zero browser latency."',
      '[ES] Sensa AI Translation: "Bienvenido a nuestra presentación del proyecto universitario..."',
      '[TL] Sensa AI Translation: "Maligayang pagdating sa aming BulSU Capstone presentation..."'
    ];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % captions.length;
      setSimulatedCaptionText(captions[idx]);
    }, 3500);
    return () => clearInterval(interval);
  }, [isSimulatingCaptions, activeMode]);

  const handleVoiceSimulator = (command: string) => {
    setVoiceCommandStatus(`Command detected: "${command}" -> Processing...`);
    setTimeout(() => {
      if (command.toLowerCase().includes('visual')) {
        setActiveMode('visual');
        setIsFocusRulerActive(true);
        setVoiceCommandStatus('Recognized: "Visual Mode". Activated high-contrast theme & #FFFF00 focus ruler.');
      } else if (command.toLowerCase().includes('auditory')) {
        setActiveMode('auditory');
        setIsSimulatingCaptions(true);
        setVoiceCommandStatus('Recognized: "Auditory Mode". Launched live multilingual AI caption window.');
      } else if (command.toLowerCase().includes('read')) {
        setTtsPlaying(true);
        setVoiceCommandStatus(`Recognized: "Read Page". Sensa SpeechSynthesis TTS reading article at ${readingSpeed}x speed.`);
      } else {
        setVoiceCommandStatus(`Recognized command: "${command}". System executed action hands-free.`);
      }
    }, 1200);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 relative overflow-x-hidden selection:bg-[#0A44FF] selection:text-white ${isDark ? 'bg-[#09090B] text-slate-200' : 'bg-[#FDFDFD] text-slate-900'
      }`}>
      {/* Skip to Main Content Bypass Link (WCAG 2.4.1 Level AA/AAA) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-6 focus:py-3 focus:bg-[#0A44FF] focus:text-white focus:font-bold focus:rounded-xl focus:shadow-2xl focus:ring-4 focus:ring-yellow-400 transition-all no-underline"
      >
        Skip to main content
      </a>

      {/* ======================================================================
          GLOBAL PRECISION BACKGROUND MATRIX & AMBIENT MESH SYSTEM
          ====================================================================== */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        {/* Base Grid Layer with Radial Masking (Vercel / Linear effect) */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,#000_50%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,#000_50%,transparent_100%)]" />
        <div className="absolute inset-0 bg-dot-pattern opacity-80" />

        {/* Hero Center Spotlight (Stage Illumination) */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[900px] md:w-[1200px] h-[500px] rounded-full blur-[140px] transition-all duration-700 ${isDark ? 'bg-gradient-to-b from-[#0A44FF]/25 via-[#8B5CF6]/15 to-transparent' : 'bg-gradient-to-b from-[#0A44FF]/15 via-[#8B5CF6]/10 to-transparent'
          }`} />

        {/* Top-Left & Bottom-Right Corner Orbs */}
        <div className={`absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full mix-blend-screen filter blur-[110px] animate-float-blue transition-opacity duration-500 ${isDark ? 'bg-[#0A44FF]/25 opacity-90' : 'bg-[#0A44FF]/15 opacity-80'
          }`} />
        <div className={`absolute -bottom-32 -right-32 w-[550px] h-[550px] rounded-full mix-blend-screen filter blur-[110px] animate-float-orange transition-opacity duration-500 ${isDark ? 'bg-[#FF7A2F]/25 opacity-90' : 'bg-[#FF7A2F]/15 opacity-80'
          }`} />
      </div>

      {/* Mid-Page Distributed Document-Level Ambient Orbs (For Features, Sandbox, Architecture, Metrics) */}
      <div className="absolute inset-0 pointer-events-none -z-15 overflow-hidden">
        <div className={`absolute top-[22%] -right-40 w-[600px] h-[600px] rounded-full mix-blend-screen filter blur-[130px] animate-float-purple transition-opacity duration-500 ${isDark ? 'bg-[#8B5CF6]/20 opacity-80' : 'bg-[#8B5CF6]/12 opacity-70'
          }`} />
        <div className={`absolute top-[48%] -left-40 w-[650px] h-[650px] rounded-full mix-blend-screen filter blur-[130px] animate-float-cyan transition-opacity duration-500 ${isDark ? 'bg-[#06B6D4]/18 opacity-80' : 'bg-[#06B6D4]/12 opacity-70'
          }`} />
        <div className={`absolute top-[74%] -right-20 w-[550px] h-[550px] rounded-full mix-blend-screen filter blur-[120px] animate-float-blue transition-opacity duration-500 ${isDark ? 'bg-[#0A44FF]/22 opacity-80' : 'bg-[#0A44FF]/12 opacity-70'
          }`} />
      </div>

      {/* ======================================================================
          NAVBAR SLOT: Drop your saved Navbar component code right below this line
          ====================================================================== */}
      <header className={`fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-xl border-b px-4 md:px-12 py-4 transition-all duration-300 ${isDark
        ? 'bg-[#09090B]/80 border-slate-800 ring-1 ring-white/5 inset'
        : 'bg-[#FDFDFD]/80 border-slate-200/60 ring-1 ring-black/5 inset'
        }`}>
        <div className="w-full max-w-[1800px] mx-auto flex items-center justify-between gap-8">
          <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="flex items-center gap-3 md:gap-3.5 no-underline group shrink-0 select-none">
            <img
              src={sensaLogo}
              alt="Sensa Logo"
              className="w-12 h-12 md:w-[52px] md:h-[52px] object-contain drop-shadow-[0_0_14px_rgba(10,68,255,0.55)] group-hover:scale-105 transition-transform duration-300 shrink-0"
            />
            <span className={`text-2xl md:text-[32px] font-black tracking-[-0.03em] leading-none translate-y-[-1px] transition-colors duration-200 ${isDark ? 'text-white group-hover:text-[#FF7A2F]' : 'text-slate-900 group-hover:text-[#0A44FF]'
              }`}>
              Sensa
            </span>
          </a>

          <nav aria-label="Main Navigation" className="hidden lg:flex items-center justify-around flex-1 max-w-5xl mx-8">
            <ul className={`flex items-center justify-around w-full list-none m-0 p-0 text-xs font-mono font-bold uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
              {[
                { href: '#problem-solution', id: 'problem-solution', label: 'Why Sensa' },
                { href: '#features', id: 'features', label: 'Features' },
                { href: '#video', id: 'video', label: 'Demo Video' },
                { href: '#playground', id: 'playground', label: 'Live Sandbox' },
                { href: '#guide', id: 'guide', label: 'Installation' },
                { href: '#team', id: 'team', label: 'Capstone Team' },
              ].map((item) => {
                const isSelected = activeSection === item.id;
                return (
                  <li key={item.id} className="relative py-1">
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.id)}
                      aria-current={isSelected ? 'page' : undefined}
                      className={`relative py-1.5 px-2 transition-colors duration-200 group no-underline block ${isSelected
                        ? isDark
                          ? 'text-[#FF7A2F] font-extrabold'
                          : 'text-[#0A44FF] font-extrabold'
                        : isDark
                          ? 'hover:text-[#FF7A2F]'
                          : 'hover:text-[#0A44FF]'
                        }`}
                    >
                      {item.label}
                      <span
                        className={`absolute left-0 bottom-0 h-[2px] w-full rounded-full transition-all duration-300 ease-out ${isSelected
                          ? isDark
                            ? 'bg-[#FF7A2F] scale-x-100 opacity-100 shadow-[0_0_8px_rgba(255,122,47,0.8)]'
                            : 'bg-[#0A44FF] scale-x-100 opacity-100 shadow-[0_0_8px_rgba(10,68,255,0.6)]'
                          : isDark
                            ? 'bg-[#FF7A2F] scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                            : 'bg-[#0A44FF] scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                          }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center shrink-0">
            {/* Sleek Smooth-Sliding Segmented Theme Toggle */}
            <div className={`relative flex items-center p-1 rounded-full border backdrop-blur-md transition-colors duration-300 select-none ${isDark ? 'bg-[#24262B]/80 border-slate-800 ring-1 ring-white/5 inset' : 'bg-slate-100/80 border-slate-200/60 ring-1 ring-black/5 inset'
              }`}>
              {/* Animated Sliding Background Thumb */}
              <div
                className={`absolute left-1 top-1 bottom-1 w-[calc(50%-4px)] rounded-full transition-all duration-300 ease-out shadow-sm pointer-events-none ${isDark
                  ? 'translate-x-full bg-[#1C1C1E] border border-slate-700'
                  : 'translate-x-0 bg-white border border-slate-200 shadow-slate-200/50'
                  }`}
              />

              {/* Light Mode Button */}
              <button
                onClick={() => setTheme('light')}
                role="switch"
                aria-checked={!isDark}
                aria-label="Switch to Light Mode"
                className={`relative z-10 flex items-center justify-center gap-1.5 py-1.5 px-3 sm:px-3.5 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase transition-colors duration-300 cursor-pointer focus:outline-none ${!isDark ? 'text-[#0A44FF]' : 'text-slate-400 hover:text-slate-200'
                  }`}
                title="Switch to Light Mode"
              >
                <Sun size={13} className={`transition-transform duration-500 ${!isDark ? 'rotate-0 scale-100' : '-rotate-45 scale-90'}`} />
                <span>Light</span>
              </button>

              {/* Dark Mode Button */}
              <button
                onClick={() => setTheme('dark')}
                role="switch"
                aria-checked={isDark}
                aria-label="Switch to Dark Mode"
                className={`relative z-10 flex items-center justify-center gap-1.5 py-1.5 px-3 sm:px-3.5 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase transition-colors duration-300 cursor-pointer focus:outline-none ${isDark ? 'text-[#FF7A2F]' : 'text-slate-600 hover:text-slate-900'
                  }`}
                title="Switch to Dark Mode"
              >
                <Moon size={13} className={`transition-transform duration-500 ${isDark ? 'rotate-0 scale-100' : 'rotate-45 scale-90'}`} />
                <span>Dark</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main id="main-content" role="main" className="w-full">
        {/* ======================================================================
          END NAVBAR SLOT
          ====================================================================== */}

        {/* ======================================================================
          1. HERO SECTION (First Impression - Exact authentic welcome box feel)
          ====================================================================== */}
        <section id="hero" className="relative w-full min-h-screen flex flex-col justify-center scroll-mt-[76px] pt-28 pb-24 md:pt-36 md:pb-32 px-4 md:px-8 overflow-hidden">
          {/* Hero Cybernetic Grid Layer */}
          <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)] -z-10" />

          {/* ModeSelection Starter Popup Background Shade (Dual-Mode Fusion Aurora) */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[520px] rounded-full blur-[165px] pointer-events-none -z-10 transition-all duration-700 ${isDark
            ? 'bg-gradient-to-tr from-[#0A44FF]/26 via-[#8A56FF]/18 to-[#FF7A2F]/26'
            : 'bg-gradient-to-tr from-[#0A44FF]/16 via-[#8A56FF]/10 to-[#FF7A2F]/16'
            }`} />

          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

            {/* Authentic Logo with `animate-logo-light` exact drop-shadow animation */}
            <div className="mb-6 transform-gpu">
              <img
                src={sensaLogo}
                alt="Sensa Extension Logo"
                className="w-[98px] h-[98px] md:w-[110px] md:h-[110px] object-contain animate-logo-light mx-auto"
              />
            </div>

            {/* Authentic Title Gradient: `from-[#0A44FF] to-[#FF7A2F]` with bottom padding and relaxed line-height so descender 'y' is never cut off */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 py-2 pb-3 leading-[1.15] max-w-4xl bg-gradient-to-r from-[#0A44FF] via-[#8A56FF] to-[#FF7A2F] bg-clip-text text-transparent animate-pop">
              Sensa: AI-Powered Dual-Mode Accessibility & Sensory Assistant
            </h1>

            <p className={`text-base sm:text-lg md:text-xl max-w-3xl mb-10 leading-relaxed font-normal animate-pop ${isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
              Developed by BulSU IT researchers to break down digital barriers for low-vision and hearing-impaired users across the web. Engineered with hands-free voice navigation, intelligent live AI subtitles, `#FFFF00` high-contrast guided reading, and zero-latency audio capture.
            </p>

            <div className="flex items-center justify-center w-full mb-6 animate-pop">
              <a
                href="#guide"
                onClick={(e) => handleNavClick(e, 'guide')}
                className={`group relative inline-flex items-center justify-center gap-3 px-9 py-4.5 rounded-2xl font-black text-sm md:text-base uppercase tracking-wider overflow-hidden transition-all duration-300 ease-out active:scale-[0.98] focus:ring-2 focus:ring-[#0A44FF] focus:outline-none no-underline ${isDark
                  ? 'bg-gradient-to-r from-[#FF7A2F] to-[#FF5E00] text-white shadow-[0_10px_30px_rgba(255,122,47,0.35)] hover:shadow-[0_15px_40px_rgba(255,122,47,0.5)] border border-white/20 hover:border-white/40'
                  : 'bg-gradient-to-r from-[#0A44FF] to-[#002BC2] text-white shadow-[0_10px_30px_rgba(10,68,255,0.3)] hover:shadow-[0_15px_40px_rgba(10,68,255,0.45)] border border-white/20 hover:border-white/40'
                  }`}
              >
                {/* Animated Sheen / Shimmer Glint Effect */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-25deg] -translate-x-[250%] group-hover:translate-x-[350%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                {/* Glowing Inner Border Highlight */}
                <span className="absolute inset-0 rounded-2xl ring-1 ring-white/25 pointer-events-none" />

                {/* Button Content */}
                <Download size={20} className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
                <span className="relative z-10 tracking-[0.06em]">Add to Chrome - It's Free</span>
              </a>
            </div>
          </div>
        </section>

        {/* ======================================================================
          2. THE PROBLEM & SOLUTION (Why Capstone Exists) - Alternating Value Band
          ====================================================================== */}
        <section id="problem-solution" className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center scroll-mt-[76px] py-20 md:py-28 border-y transition-colors duration-500 ${isDark ? 'bg-[#121214] border-slate-800/80' : 'bg-[#F4F5F7] border-slate-200/80'
          }`}>
          {/* Ambient Problem & Solution Background Glows */}
          <div className={`absolute top-1/2 left-[-100px] -translate-y-1/2 w-[600px] h-[500px] rounded-full blur-[150px] pointer-events-none -z-10 transition-all duration-700 ${isDark ? 'bg-red-500/14' : 'bg-red-500/10'}`} />
          <div className={`absolute top-1/2 right-[-100px] -translate-y-1/2 w-[600px] h-[500px] rounded-full blur-[150px] pointer-events-none -z-10 transition-all duration-700 ${isDark ? 'bg-emerald-500/14' : 'bg-emerald-500/10'}`} />

          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                The Problem & The Sensa Solution
              </h2>
              <p className={`text-base md:text-lg leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Millions of individuals face daily sensory barriers navigating standard websites that lack responsive screen readers, real-time audio captions, or hands-free navigation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* The Problem Card */}
              <article className={`border border-l-2 border-l-red-500/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-red-500/40 ${isDark
                ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:bg-white/[0.03]'
                : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:bg-slate-50/80 shadow-sm'
                }`}>
                <div>
                  <h3 className="flex items-center gap-3 text-red-500 font-bold text-base md:text-lg mb-4 tracking-[-0.01em] m-0">
                    <AlertCircle size={22} className="shrink-0" />
                    <span>The Problem: Sensory Overload & Barriers</span>
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Standard web development assumes full sensory capability from all users. Visually impaired and deaf/hard-of-hearing (DHH) individuals routinely face critical roadblocks across the internet:
                  </p>
                </div>
                <ul className={`space-y-4 text-sm list-none p-0 m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-base leading-none mt-0.5">•</span>
                    <span><strong className={isDark ? 'text-white font-semibold' : 'text-slate-900 font-semibold'}>Lack of Native Screen Readers:</strong> External screen reading software is often clunky, fails to follow complex DOM mutations, or lacks natural voice controls.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-base leading-none mt-0.5">•</span>
                    <span><strong className={isDark ? 'text-white font-semibold' : 'text-slate-900 font-semibold'}>Missing Live Captions on Audio Streams:</strong> Countless educational webinars, podcasts, and video clips across the web provide zero closed captioning.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-base leading-none mt-0.5">•</span>
                    <span><strong className={isDark ? 'text-white font-semibold' : 'text-slate-900 font-semibold'}>Complex Keyboard & Mouse Navigation:</strong> Users with severe visual impairment or motor fatigue struggle with small clickable targets and nested drop-down menus.</span>
                  </li>
                </ul>
              </article>

              {/* The Sensa Solution Card */}
              <article className={`border border-l-2 border-l-emerald-500/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/40 ${isDark
                ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:bg-white/[0.03]'
                : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:bg-slate-50/80 shadow-sm'
                }`}>
                <div>
                  <h3 className="flex items-center gap-3 text-emerald-500 font-bold text-base md:text-lg mb-4 tracking-[-0.01em] m-0">
                    <CheckCircle2 size={22} className="shrink-0" />
                    <span>The Sensa Approach: Unified MV3 Companion</span>
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Sensa bridges this accessibility gap without requiring website developers to rewrite a single line of their existing codebase. By injecting intelligent content scripts:
                  </p>
                </div>
                <ul className={`space-y-4 text-sm list-none p-0 m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong className={isDark ? 'text-white font-semibold' : 'text-slate-900 font-semibold'}>Zero-Latency Hands-Free Voice Commands:</strong> Powered by the Web Speech API with exponential backoff and Levenshtein fuzzy scoring (&lt; 1.5s command execution).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong className={isDark ? 'text-white font-semibold' : 'text-slate-900 font-semibold'}>Universal Web Audio API & Tab Capture:</strong> Leverages Chrome `tabCapture` with real-time `AnalyserNode` frequency pipelines to transcribe and analyze audio streams instantly.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong className={isDark ? 'text-white font-semibold' : 'text-slate-900 font-semibold'}>High-Contrast Focus Ruler & Magnifier:</strong> Guided reading lines (#FFFF00) and customizable dyslexia-friendly typography toggles.</span>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* ======================================================================
          3. CORE FEATURES SHOWCASE (Dual-Mode Architecture)
          ====================================================================== */}
        <section id="features" className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center scroll-mt-[76px] py-20 md:py-28 border-t transition-colors duration-500 ${isDark ? 'border-slate-800/80' : 'border-slate-200/60'
          }`}>
          {/* VisualWelcomeOverlay Starter Shade (#0A44FF Royal Blue Behind Visual Mode Cards) */}
          <div className={`absolute top-[28%] left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[420px] rounded-full blur-[160px] pointer-events-none -z-10 transition-all duration-700 ${isDark ? 'bg-[#0A44FF]/24' : 'bg-[#0A44FF]/14'
            }`} />

          {/* AuditoryWelcomeOverlay Starter Shade (#FF7A2F Sunset Orange Behind Auditory Mode Cards) */}
          <div className={`absolute top-[75%] right-1/4 translate-x-1/2 -translate-y-1/2 w-[700px] h-[420px] rounded-full blur-[160px] pointer-events-none -z-10 transition-all duration-700 ${isDark ? 'bg-[#FF7A2F]/24' : 'bg-[#FF7A2F]/14'
            }`} />

          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Core Features Showcase
              </h2>
              <p className={`text-base md:text-lg leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Tailored specifically for two distinct sensory profiles with dedicated visual tokens, custom speech bridges, and intelligent floating docks.
              </p>
            </div>

            {/* Visual Mode Showcase (`#0A44FF` Brand Tokens) */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <h3 className={`text-xl md:text-2xl font-black m-0 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  👁️ Visual Mode (For Low-Vision & Blind Users)
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <article className={`border border-t-2 border-t-[#0A44FF]/80 rounded-2xl p-6 transition-all duration-300 hover:border-[#0A44FF]/40 ${isDark
                  ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:bg-white/[0.03]'
                  : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:bg-slate-50/80 shadow-sm'
                  }`}>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 border ${isDark ? 'bg-[#0A44FF]/15 text-[#6AA2FF] border-[#0A44FF]/30' : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20'
                    }`}>
                    <Mic size={20} />
                  </div>
                  <h3 className={`text-base font-bold mb-2 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Hands-Free Voice Navigation</h3>
                  <p className={`text-sm leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Navigate the web completely hands-free. Simply speak to your browser to scroll pages, open links, and fill out input forms without a mouse or keyboard.
                  </p>
                </article>

                <article className={`border border-t-2 border-t-[#0A44FF]/80 rounded-2xl p-6 transition-all duration-300 hover:border-[#0A44FF]/40 ${isDark
                  ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:bg-white/[0.03]'
                  : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:bg-slate-50/80 shadow-sm'
                  }`}>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 border ${isDark ? 'bg-[#0A44FF]/15 text-[#6AA2FF] border-[#0A44FF]/30' : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20'
                    }`}>
                    <Maximize2 size={20} />
                  </div>
                  <h3 className={`text-base font-bold mb-2 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Screen Magnifier & Guided Reading</h3>
                  <p className={`text-sm leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Isolate text lines as you read. Our clean, horizontal tracking ruler guides your eyes step-by-step to prevent skipping lines, optimized for dyslexia and low-vision comfort.
                  </p>
                </article>

                <article className={`border border-t-2 border-t-[#0A44FF]/80 rounded-2xl p-6 transition-all duration-300 hover:border-[#0A44FF]/40 ${isDark
                  ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:bg-white/[0.03]'
                  : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:bg-slate-50/80 shadow-sm'
                  }`}>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 border ${isDark ? 'bg-[#0A44FF]/15 text-[#6AA2FF] border-[#0A44FF]/30' : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20'
                    }`}>
                    <Volume2 size={20} />
                  </div>
                  <h3 className={`text-base font-bold mb-2 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Image Alt-Text AI Reader</h3>
                  <p className={`text-sm leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Hear the unwritten elements of the web. Sensa automatically uncovers descriptions for unlabeled images, graphics, and charts, reading them aloud using natural text-to-speech.
                  </p>
                </article>

                <article className={`border border-t-2 border-t-[#0A44FF]/80 rounded-2xl p-6 transition-all duration-300 hover:border-[#0A44FF]/40 ${isDark
                  ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:bg-white/[0.03]'
                  : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:bg-slate-50/80 shadow-sm'
                  }`}>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 border ${isDark ? 'bg-[#0A44FF]/15 text-[#6AA2FF] border-[#0A44FF]/30' : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20'
                    }`}>
                    <FileText size={20} />
                  </div>
                  <h3 className={`text-base font-bold mb-2 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Customizable Typography & Autoscroll</h3>
                  <p className={`text-sm leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Make any webpage comfortable to read. Instantly transition sites into high-contrast dark themes, switch to custom accessible fonts, and set comfortable automatic scrolling speeds.
                  </p>
                </article>
              </div>
            </div>

            {/* Auditory Mode Showcase (`#FF7A2F` Brand Tokens) */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <h3 className={`text-xl md:text-2xl font-black m-0 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  🦻 Auditory Mode (For Hearing Loss & DHH Users)
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <article className={`border border-t-2 border-t-[#FF7A2F]/80 rounded-2xl p-6 transition-all duration-300 hover:border-[#FF7A2F]/40 ${isDark
                  ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:bg-white/[0.03]'
                  : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:bg-slate-50/80 shadow-sm'
                  }`}>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 border ${isDark ? 'bg-[#FF7A2F]/15 text-[#FFC09B] border-[#FF7A2F]/30' : 'bg-[#FF7A2F]/10 text-[#FF7A2F] border-[#FF7A2F]/20'
                    }`}>
                    <Ear size={20} />
                  </div>
                  <h3 className={`text-base font-bold mb-2 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Live Multilingual AI Captions</h3>
                  <p className={`text-sm leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Real-time captions on any browser tab. Generate instant subtitles for video lectures, webinars, and podcasts with seamless live translation across multiple languages.
                  </p>
                </article>

                <article className={`border border-t-2 border-t-[#FF7A2F]/80 rounded-2xl p-6 transition-all duration-300 hover:border-[#FF7A2F]/40 ${isDark
                  ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:bg-white/[0.03]'
                  : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:bg-slate-50/80 shadow-sm'
                  }`}>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 border ${isDark ? 'bg-[#FF7A2F]/15 text-[#FFC09B] border-[#FF7A2F]/30' : 'bg-[#FF7A2F]/10 text-[#FF7A2F] border-[#FF7A2F]/20'
                    }`}>
                    <Zap size={20} />
                  </div>
                  <h3 className={`text-base font-bold mb-2 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Web Audio API Analyser & Visualizer</h3>
                  <p className={`text-sm leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    See the rhythm of sound. Dynamic visual waveform meters translate incoming audio into sleek frequency lines, providing clear visual cues for audio playback intensity.
                  </p>
                </article>

                <article className={`border border-t-2 border-t-[#FF7A2F]/80 rounded-2xl p-6 transition-all duration-300 hover:border-[#FF7A2F]/40 ${isDark
                  ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:bg-white/[0.03]'
                  : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:bg-slate-50/80 shadow-sm'
                  }`}>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 border ${isDark ? 'bg-[#FF7A2F]/15 text-[#FFC09B] border-[#FF7A2F]/30' : 'bg-[#FF7A2F]/10 text-[#FF7A2F] border-[#FF7A2F]/20'
                    }`}>
                    <CheckCircle2 size={20} />
                  </div>
                  <h3 className={`text-base font-bold mb-2 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Environmental Alerts & Sensory Noise Warnings</h3>
                  <p className={`text-sm leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Stay connected across hidden tabs. Faint, pulsing visual edge-alerts instantly notify you when background tabs play sudden audio indicators, chat alerts, or warning pings.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================================
          4. CAPSTONE DEMO VIDEO SECTION
          ====================================================================== */}
        <section id="video" className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center scroll-mt-[76px] py-20 md:py-28 border-y transition-colors duration-500 ${isDark ? 'bg-[#121214] border-slate-800/80' : 'bg-[#F4F5F7] border-slate-200/80'
          }`}>
          {/* Video Ambient Center Halo Layer */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] rounded-full blur-[160px] pointer-events-none -z-10 ${isDark ? 'bg-purple-600/[0.06]' : 'bg-purple-600/[0.04]'}`} />

          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Watch Sensa in Action
              </h2>
              <p className={`text-base md:text-lg leading-relaxed font-normal mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Experience our complete dual-mode accessibility demonstration, real-time speech navigation, and high-contrast focus tools built for WCAG 2.1 AAA compliance.
              </p>
            </div>

            {/* Main Showcase Video Player Container */}
            <div className={`relative max-w-5xl mx-auto rounded-2xl md:rounded-3xl border overflow-hidden shadow-2xl transition-all duration-300 aspect-video bg-black flex flex-col justify-center items-center ${isDark ? 'border-slate-800 ring-1 ring-white/5' : 'border-slate-200/80 ring-1 ring-black/5'
              }`}>
              <iframe
                title="Sensa Capstone Demo"
                src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1&mute=1"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* ======================================================================
          5. INTERACTIVE LIVE DEMO & PLAYGROUND SECTION
          ====================================================================== */}
        <section id="playground" className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center scroll-mt-[76px] py-20 md:py-28 border-y transition-colors duration-500 ${isDark ? 'bg-[#121214] border-slate-800/80' : 'bg-[#F4F5F7] border-slate-200/80'
          }`}>
          {/* Dynamic Mode-Responsive Playground Background Shade (Visual vs Auditory Overlay Tint) */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[480px] rounded-full blur-[165px] pointer-events-none -z-10 transition-colors duration-700 ${activeMode === 'visual'
            ? isDark ? 'bg-[#0A44FF]/26' : 'bg-[#0A44FF]/16'
            : activeMode === 'auditory'
              ? isDark ? 'bg-[#FF7A2F]/26' : 'bg-[#FF7A2F]/16'
              : isDark ? 'bg-gradient-to-r from-[#0A44FF]/18 to-[#FF7A2F]/18' : 'bg-gradient-to-r from-[#0A44FF]/12 to-[#FF7A2F]/12'
            }`} />

          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Interactive Live Demo / Playground
              </h2>
              <p className={`text-base md:text-lg leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Experience Sensa's dual-mode tools directly on this web page right now — no Chrome extension installation required!
              </p>
            </div>

            <div className={`border rounded-2xl p-6 md:p-8 backdrop-blur-xl ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset shadow-lg' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset shadow-md'
              }`}>
              {/* Toolbar */}
              <div className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b mb-6 ${isDark ? 'border-slate-800/80' : 'border-slate-200/60'
                }`}>
                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                  <span className={`text-xs font-mono font-bold tracking-widest uppercase mr-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Sandbox Controls:</span>

                  <button
                    onClick={() => setIsFocusRulerActive(!isFocusRulerActive)}
                    aria-pressed={isFocusRulerActive}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 active:scale-95 flex items-center gap-1.5 ${isFocusRulerActive
                      ? 'bg-yellow-400 text-black shadow-md shadow-yellow-400/30 font-black'
                      : isDark ? 'bg-black/40 border border-slate-800 text-slate-300 hover:border-yellow-400/60' : 'bg-slate-100 border border-slate-200/80 text-slate-700 hover:border-yellow-500'
                      }`}
                  >
                    📏 {isFocusRulerActive ? 'Disable' : 'Launch'} #FFFF00 Focus Ruler
                  </button>

                  <button
                    onClick={() => setIsSimulatingCaptions(!isSimulatingCaptions)}
                    aria-pressed={isSimulatingCaptions}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 active:scale-95 flex items-center gap-1.5 ${isSimulatingCaptions
                      ? 'bg-[#FF7A2F] text-white shadow-md shadow-[#FF7A2F]/35 font-black'
                      : isDark ? 'bg-black/40 border border-slate-800 text-slate-300 hover:border-[#FF7A2F]/60' : 'bg-slate-100 border border-slate-200/80 text-slate-700 hover:border-[#FF7A2F]'
                      }`}
                  >
                    💬 {isSimulatingCaptions ? 'Stop' : 'Simulate'} Live AI Subtitle Box
                  </button>

                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs ${isDark ? 'bg-black/40 border-slate-800' : 'bg-slate-100 border-slate-200/80'
                    }`}>
                    <span className={`font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>TTS Speed:</span>
                    <select
                      value={readingSpeed}
                      onChange={(e) => setReadingSpeed(parseFloat(e.target.value))}
                      aria-label="Adjust Text-to-Speech reading speed"
                      className={`bg-transparent font-bold border-none outline-none cursor-pointer pr-1 ${isDark ? 'text-white' : 'text-slate-900'}`}
                    >
                      <option value={1.0} className={isDark ? 'bg-[#1C1C1E] text-white' : 'bg-white text-slate-900'}>1.0x (Normal)</option>
                      <option value={1.2} className={isDark ? 'bg-[#1C1C1E] text-white' : 'bg-white text-slate-900'}>1.2x (Recommended)</option>
                      <option value={1.5} className={isDark ? 'bg-[#1C1C1E] text-white' : 'bg-white text-slate-900'}>1.5x (Fast Reading)</option>
                      <option value={2.0} className={isDark ? 'bg-[#1C1C1E] text-white' : 'bg-white text-slate-900'}>2.0x (Skimming)</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end md:self-center">
                  <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                    ● Live Sandbox Ready
                  </span>
                </div>
              </div>

              {/* Voice Command Simulator Box inside Playground */}
              <div className={`p-5 rounded-xl border flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8 ${isDark ? 'bg-black/40 border-slate-800/80 ring-1 ring-white/5 inset' : 'bg-slate-50 border-slate-200/60'
                }`}>
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#0A44FF] flex items-center justify-center text-white shadow-md shadow-[#0A44FF]/30 animate-pulse shrink-0">
                    <Mic size={20} />
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold m-0 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Voice Command Simulator</h3>
                    <p aria-live="polite" aria-atomic="true" className={`text-xs m-0 mt-0.5 font-mono font-medium ${isDark ? 'text-[#6AA2FF]' : 'text-[#0A44FF]'}`}>{voiceCommandStatus}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap w-full lg:w-auto">
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider mr-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Try testing command:</span>
                  <button
                    onClick={() => handleVoiceSimulator('Activate Visual Mode')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 active:scale-95 border ${isDark ? 'bg-[#24262B]/80 hover:bg-[#0A44FF] text-slate-300 hover:text-white border-slate-800' : 'bg-white hover:bg-[#0A44FF] text-slate-700 hover:text-white border-slate-200/80'
                      }`}
                  >
                    "Activate Visual Mode"
                  </button>
                  <button
                    onClick={() => handleVoiceSimulator('Activate Auditory Mode')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 active:scale-95 border ${isDark ? 'bg-[#24262B]/80 hover:bg-[#FF7A2F] text-slate-300 hover:text-white border-slate-800' : 'bg-white hover:bg-[#FF7A2F] text-slate-700 hover:text-white border-slate-200/80'
                      }`}
                  >
                    "Activate Auditory Mode"
                  </button>
                  <button
                    onClick={() => handleVoiceSimulator('Read Page Content')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 active:scale-95 border ${isDark ? 'bg-[#24262B]/80 hover:bg-emerald-600 text-slate-300 hover:text-white border-slate-800' : 'bg-white hover:bg-emerald-600 text-slate-700 hover:text-white border-slate-200/80'
                      }`}
                  >
                    "Read Page Content"
                  </button>
                </div>
              </div>

              {/* Mock Sample Article Sandbox */}
              <article aria-label="Sample Web Article Sandbox" className={`relative rounded-xl p-6 md:p-10 border overflow-hidden min-h-[340px] ${isDark ? 'bg-black/40 border-slate-800/80 ring-1 ring-white/5 inset' : 'bg-slate-50 border-slate-200/60'
                }`}>
                {/* Active Focus Ruler Overlay */}
                {isFocusRulerActive && (
                  <div className="absolute top-1/2 left-0 right-0 h-16 bg-yellow-400/25 border-y-2 border-yellow-400 pointer-events-none z-10 -translate-y-1/2 shadow-[0_0_25px_rgba(250,204,21,0.35)]" />
                )}

                <div className="max-w-3xl mx-auto py-2 relative z-0">
                  <span className={`text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-widest ${isDark ? 'text-[#6AA2FF]' : 'text-[#0A44FF]'}`}>
                    Sample Web Article • Capstone Accessibility Test
                  </span>
                  <h3 className={`text-2xl md:text-3xl font-black mt-2 mb-4 tracking-[-0.02em] leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    How Dual-Mode Extensions Revolutionize Web Accessibility in 2026
                  </h3>
                  <p className={`text-sm md:text-base leading-relaxed mb-4 font-normal ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Historically, accessibility tools forced users into rigid, single-purpose software solutions. Screen readers were designed exclusively for complete blindness, while video closed captioning tools operated entirely separately. This fragmented experience created immense friction for neurodivergent, low-vision, or elderly internet users.
                  </p>
                  <p className={`text-sm md:text-base leading-relaxed mb-6 font-normal ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    By leveraging Chrome Manifest V3 (<code className={`font-mono text-xs font-bold ${isDark ? 'text-[#6AA2FF]' : 'text-[#0A44FF]'}`}>chrome.tabCapture</code> and <code className={`font-mono text-xs font-bold ${isDark ? 'text-[#6AA2FF]' : 'text-[#0A44FF]'}`}>Offscreen Documents</code>) alongside the <strong className={isDark ? 'text-white font-semibold' : 'text-slate-900 font-semibold'}>Web Audio API</strong>, modern assistive tools like <strong className={isDark ? 'text-white font-semibold' : 'text-slate-900 font-semibold'}>Sensa</strong> synchronize voice navigation and real-time audio waveform analysis into one harmonious, low-latency companion dock.
                  </p>
                  <div className={`p-4 rounded-xl border text-sm italic ${isDark ? 'bg-black/40 border-slate-800 text-slate-400' : 'bg-white border-slate-200/60 text-slate-600'
                    }`}>
                    💡 <strong className={isDark ? 'text-slate-300 not-italic' : 'text-slate-800 not-italic'}>Panelist Tip:</strong> Try clicking <strong className="text-yellow-400 font-bold bg-yellow-400/10 px-1 rounded not-italic">"Launch #FFFF00 Focus Ruler"</strong> above to see how our horizontal tracking bar locks onto text lines to assist individuals with macular degeneration and dyslexia!
                  </div>
                </div>
              </article>

              {/* Simulated Auditory Subtitle Window */}
              {(isSimulatingCaptions || activeMode === 'auditory') && (
                <div className={`mt-6 border rounded-xl p-4 flex items-center justify-between gap-4 animate-pop ${isDark ? 'bg-black/60 border-[#FF7A2F]/40 ring-1 ring-white/5 inset' : 'bg-white border-[#FF7A2F]/60 shadow-sm'
                  }`}>
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-3 h-3 rounded-full bg-[#FF7A2F] animate-ping shrink-0" />
                    <p className={`m-0 truncate font-mono text-sm font-bold ${isDark ? 'text-[#6AA2FF]' : 'text-[#0A44FF]'}`}>{simulatedCaptionText}</p>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FFC09B] px-2.5 py-1 rounded bg-[#FF7A2F]/20 border border-[#FF7A2F]/40 shrink-0">
                    Live AI Audio Bridge
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ======================================================================
          6. INSTALLATION & USER GUIDE (Walkthrough)
          ====================================================================== */}
        <section id="guide" className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center scroll-mt-[76px] py-20 md:py-28 border-t transition-colors duration-500 ${isDark ? 'border-slate-800/80' : 'border-slate-200/60'
          }`}>
          {/* Guide Dot Pattern Background Overlay */}
          <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Installation & User Walkthrough
              </h2>
              <p className={`text-base md:text-lg leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Get up and running with Sensa across any Google Chrome or Chromium browser in 3 simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className={`border rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:border-slate-700 hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:border-slate-300 hover:bg-slate-50/80 shadow-sm'
                }`}>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`w-10 h-10 rounded-xl font-mono font-bold text-base flex items-center justify-center border ${isDark ? 'bg-[#0A44FF]/15 text-[#6AA2FF] border-[#0A44FF]/30' : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20'
                      }`}>
                      1
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Unpack & Load</span>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>1. Add to Chrome</h3>
                  <p className={`text-sm leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Download Sensa from your project portal or Web Store repository. Pin the extension icon directly to your browser toolbar for instant accessibility on any site.
                  </p>
                </div>
              </article>

              <article className={`border rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:border-slate-700 hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:border-slate-300 hover:bg-slate-50/80 shadow-sm'
                }`}>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`w-10 h-10 rounded-xl font-mono font-bold text-base flex items-center justify-center border ${isDark ? 'bg-[#FF7A2F]/15 text-[#FFC09B] border-[#FF7A2F]/30' : 'bg-[#FF7A2F]/10 text-[#FF7A2F] border-[#FF7A2F]/20'
                      }`}>
                      2
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Voice Onboarding</span>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>2. Choose Your Mode</h3>
                  <p className={`text-sm leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Launch Sensa and choose your sensory profile. Select Visual Mode for guided tracking and voice tools, or Auditory Mode for active captioning streams.
                  </p>
                </div>
              </article>

              <article className={`border rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:border-slate-700 hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:border-slate-300 hover:bg-slate-50/80 shadow-sm'
                }`}>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 font-mono font-bold text-base flex items-center justify-center border border-purple-500/30">
                      3
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Customize Dock</span>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>3. Browse Effortlessly</h3>
                  <p className={`text-sm leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Control your experience with our floating assistant dock. Adjust text-to-speech speeds, toggle tracking lines, or alter translation preferences on the fly.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ======================================================================
          7. ABOUT THE CAPSTONE RESEARCH TEAM
          ====================================================================== */}
        <section id="team" className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center scroll-mt-[76px] py-20 md:py-28 border-t transition-colors duration-500 ${isDark ? 'border-slate-800/80' : 'border-slate-200/60'
          }`}>
          {/* Team Section Grid Texture Layer */}
          <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0A44FF] dark:text-[#6AA2FF] mb-2 block">
                Bulacan State University (BulSU) • CICT Capstone Project 2026
              </span>
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Meet the Researchers & Engineers
              </h2>
              <p className={`text-base md:text-lg leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Dedicated IT researchers combining academic rigor with accessible UI engineering to eliminate sensory roadblocks across the modern web.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {/* Shane */}
              <article className={`border rounded-2xl p-6 flex flex-col items-center text-center justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:border-[#0A44FF]/60 hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:border-[#0A44FF]/60 hover:bg-slate-50/80'
                }`}>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#0A44FF] to-purple-600 flex items-center justify-center text-white font-black text-xl mb-4 shadow-lg shadow-[#0A44FF]/30">
                    ST
                  </div>
                  <h3 className={`text-base font-bold m-0 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Robert Shanedion M. Tantoco</h3>
                  <span className="text-xs font-semibold text-[#0A44FF] dark:text-[#6AA2FF] mb-2 block font-mono">Shane</span>
                  <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider border my-1 ${isDark ? 'bg-[#0A44FF]/15 text-[#6AA2FF] border-[#0A44FF]/30' : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20'
                    }`}>
                    UI/UX & Accessibility Designer
                  </span>
                  <p className={`text-xs leading-relaxed m-0 mt-3 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Architected dual-mode sensory interfaces, #FFFF00 tracking rulers, and WCAG 2.1 AAA high-contrast brand tokens.
                  </p>
                </div>
                <div className={`w-full mt-6 pt-4 border-t flex items-center justify-center gap-3 ${isDark ? 'border-slate-800/80' : 'border-slate-100'}`}>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Robert Shanedion M. Tantoco LinkedIn"
                    className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-white/5 hover:bg-[#0A44FF]/20 hover:text-[#6AA2FF] text-slate-400' : 'bg-slate-100 hover:bg-[#0A44FF]/10 hover:text-[#0A44FF] text-slate-600'}`}
                  >
                    <Linkedin size={15} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Robert Shanedion M. Tantoco GitHub"
                    className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-white/5 hover:bg-[#0A44FF]/20 hover:text-[#6AA2FF] text-slate-400' : 'bg-slate-100 hover:bg-[#0A44FF]/10 hover:text-[#0A44FF] text-slate-600'}`}
                  >
                    <Github size={15} />
                  </a>
                  <a
                    href="mailto:robertshanedion.tantoco@bulsu.edu.ph"
                    aria-label="Robert Shanedion M. Tantoco Email"
                    className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-white/5 hover:bg-[#0A44FF]/20 hover:text-[#6AA2FF] text-slate-400' : 'bg-slate-100 hover:bg-[#0A44FF]/10 hover:text-[#0A44FF] text-slate-600'}`}
                  >
                    <MailIcon size={15} />
                  </a>
                </div>
              </article>

              {/* Christian */}
              <article className={`border rounded-2xl p-6 flex flex-col items-center text-center justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:border-[#FF7A2F]/60 hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:border-[#FF7A2F]/60 hover:bg-slate-50/80'
                }`}>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#FF7A2F] to-amber-600 flex items-center justify-center text-white font-black text-xl mb-4 shadow-lg shadow-[#FF7A2F]/30">
                    CA
                  </div>
                  <h3 className={`text-base font-bold m-0 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Christian T. Adriano</h3>
                  <span className="text-xs font-semibold text-[#FF7A2F] mb-2 block font-mono">Christian</span>
                  <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider border my-1 ${isDark ? 'bg-[#FF7A2F]/15 text-[#FFC09B] border-[#FF7A2F]/30' : 'bg-[#FF7A2F]/10 text-[#FF7A2F] border-[#FF7A2F]/20'
                    }`}>
                    WebSocket & Backend Architect
                  </span>
                  <p className={`text-xs leading-relaxed m-0 mt-3 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Built the high-concurrency Node.js WebSocket engine on Render routing binary audio streams to Deepgram and DeepL.
                  </p>
                </div>
                <div className={`w-full mt-6 pt-4 border-t flex items-center justify-center gap-3 ${isDark ? 'border-slate-800/80' : 'border-slate-100'}`}>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Christian T. Adriano LinkedIn"
                    className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-white/5 hover:bg-[#FF7A2F]/20 hover:text-[#FFC09B] text-slate-400' : 'bg-slate-100 hover:bg-[#FF7A2F]/10 hover:text-[#FF7A2F] text-slate-600'}`}
                  >
                    <Linkedin size={15} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Christian T. Adriano GitHub"
                    className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-white/5 hover:bg-[#FF7A2F]/20 hover:text-[#FFC09B] text-slate-400' : 'bg-slate-100 hover:bg-[#FF7A2F]/10 hover:text-[#FF7A2F] text-slate-600'}`}
                  >
                    <Github size={15} />
                  </a>
                  <a
                    href="mailto:christian.adriano@bulsu.edu.ph"
                    aria-label="Christian T. Adriano Email"
                    className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-white/5 hover:bg-[#FF7A2F]/20 hover:text-[#FFC09B] text-slate-400' : 'bg-slate-100 hover:bg-[#FF7A2F]/10 hover:text-[#FF7A2F] text-slate-600'}`}
                  >
                    <MailIcon size={15} />
                  </a>
                </div>
              </article>

              {/* Leo */}
              <article className={`border rounded-2xl p-6 flex flex-col items-center text-center justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:border-[#0A44FF]/60 hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:border-[#0A44FF]/60 hover:bg-slate-50/80'
                }`}>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#0A44FF] to-cyan-500 flex items-center justify-center text-white font-black text-xl mb-4 shadow-lg shadow-[#0A44FF]/30">
                    LD
                  </div>
                  <h3 className={`text-base font-bold m-0 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Leo Lorenzo T. Dela Cruz</h3>
                  <span className="text-xs font-semibold text-[#0A44FF] dark:text-[#6AA2FF] mb-2 block font-mono">Leo</span>
                  <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider border my-1 ${isDark ? 'bg-[#0A44FF]/15 text-[#6AA2FF] border-[#0A44FF]/30' : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20'
                    }`}>
                    Chrome MV3 & DOM Specialist
                  </span>
                  <p className={`text-xs leading-relaxed m-0 mt-3 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Engineered the semantic DOM reader (`content.ts`), keyboard focus interception, and zero-latency tab communication.
                  </p>
                </div>
                <div className={`w-full mt-6 pt-4 border-t flex items-center justify-center gap-3 ${isDark ? 'border-slate-800/80' : 'border-slate-100'}`}>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Leo Lorenzo T. Dela Cruz LinkedIn"
                    className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-white/5 hover:bg-[#0A44FF]/20 hover:text-[#6AA2FF] text-slate-400' : 'bg-slate-100 hover:bg-[#0A44FF]/10 hover:text-[#0A44FF] text-slate-600'}`}
                  >
                    <Linkedin size={15} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Leo Lorenzo T. Dela Cruz GitHub"
                    className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-white/5 hover:bg-[#0A44FF]/20 hover:text-[#6AA2FF] text-slate-400' : 'bg-slate-100 hover:bg-[#0A44FF]/10 hover:text-[#0A44FF] text-slate-600'}`}
                  >
                    <Github size={15} />
                  </a>
                  <a
                    href="mailto:leolorenzo.delacruz@bulsu.edu.ph"
                    aria-label="Leo Lorenzo T. Dela Cruz Email"
                    className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-white/5 hover:bg-[#0A44FF]/20 hover:text-[#6AA2FF] text-slate-400' : 'bg-slate-100 hover:bg-[#0A44FF]/10 hover:text-[#0A44FF] text-slate-600'}`}
                  >
                    <MailIcon size={15} />
                  </a>
                </div>
              </article>

              {/* Russell */}
              <article className={`border rounded-2xl p-6 flex flex-col items-center text-center justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:border-[#FF7A2F]/60 hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:border-[#FF7A2F]/60 hover:bg-slate-50/80'
                }`}>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#FF7A2F] to-rose-500 flex items-center justify-center text-white font-black text-xl mb-4 shadow-lg shadow-[#FF7A2F]/30">
                    JS
                  </div>
                  <h3 className={`text-base font-bold m-0 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>John Russell SF. Sta.Ana</h3>
                  <span className="text-xs font-semibold text-[#FF7A2F] mb-2 block font-mono">Russell</span>
                  <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider border my-1 ${isDark ? 'bg-[#FF7A2F]/15 text-[#FFC09B] border-[#FF7A2F]/30' : 'bg-[#FF7A2F]/10 text-[#FF7A2F] border-[#FF7A2F]/20'
                    }`}>
                    QA & Usability Researcher
                  </span>
                  <p className={`text-xs leading-relaxed m-0 mt-3 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Spearheaded sensory usability testing, performance verification protocols, and capstone academic documentation.
                  </p>
                </div>
                <div className={`w-full mt-6 pt-4 border-t flex items-center justify-center gap-3 ${isDark ? 'border-slate-800/80' : 'border-slate-100'}`}>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="John Russell SF. Sta.Ana LinkedIn"
                    className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-white/5 hover:bg-[#FF7A2F]/20 hover:text-[#FFC09B] text-slate-400' : 'bg-slate-100 hover:bg-[#FF7A2F]/10 hover:text-[#FF7A2F] text-slate-600'}`}
                  >
                    <Linkedin size={15} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="John Russell SF. Sta.Ana GitHub"
                    className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-white/5 hover:bg-[#FF7A2F]/20 hover:text-[#FFC09B] text-slate-400' : 'bg-slate-100 hover:bg-[#FF7A2F]/10 hover:text-[#FF7A2F] text-slate-600'}`}
                  >
                    <Github size={15} />
                  </a>
                  <a
                    href="mailto:johnrussell.staana@bulsu.edu.ph"
                    aria-label="John Russell SF. Sta.Ana Email"
                    className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-white/5 hover:bg-[#FF7A2F]/20 hover:text-[#FFC09B] text-slate-400' : 'bg-slate-100 hover:bg-[#FF7A2F]/10 hover:text-[#FF7A2F] text-slate-600'}`}
                  >
                    <MailIcon size={15} />
                  </a>
                </div>
              </article>

              {/* Kian */}
              <article className={`border rounded-2xl p-6 flex flex-col items-center text-center justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:border-[#0A44FF]/60 hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:border-[#0A44FF]/60 hover:bg-slate-50/80'
                }`}>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#0A44FF] to-emerald-500 flex items-center justify-center text-white font-black text-xl mb-4 shadow-lg shadow-[#0A44FF]/30">
                    KA
                  </div>
                  <h3 className={`text-base font-bold m-0 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Kian Davey L. Antolin</h3>
                  <span className="text-xs font-semibold text-[#0A44FF] dark:text-[#6AA2FF] mb-2 block font-mono">Kian</span>
                  <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider border my-1 ${isDark ? 'bg-[#0A44FF]/15 text-[#6AA2FF] border-[#0A44FF]/30' : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20'
                    }`}>
                    Full-Stack Systems Engineer
                  </span>
                  <p className={`text-xs leading-relaxed m-0 mt-3 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Co-architected dual-mode sensory bridges, real-time auditory processing, and responsive presentation showcases.
                  </p>
                </div>
                <div className={`w-full mt-6 pt-4 border-t flex items-center justify-center gap-3 ${isDark ? 'border-slate-800/80' : 'border-slate-100'}`}>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Kian Davey L. Antolin LinkedIn"
                    className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-white/5 hover:bg-[#0A44FF]/20 hover:text-[#6AA2FF] text-slate-400' : 'bg-slate-100 hover:bg-[#0A44FF]/10 hover:text-[#0A44FF] text-slate-600'}`}
                  >
                    <Linkedin size={15} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Kian Davey L. Antolin GitHub"
                    className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-white/5 hover:bg-[#0A44FF]/20 hover:text-[#6AA2FF] text-slate-400' : 'bg-slate-100 hover:bg-[#0A44FF]/10 hover:text-[#0A44FF] text-slate-600'}`}
                  >
                    <Github size={15} />
                  </a>
                  <a
                    href="mailto:kiandavey.antolin@bulsu.edu.ph"
                    aria-label="Kian Davey L. Antolin Email"
                    className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-white/5 hover:bg-[#0A44FF]/20 hover:text-[#6AA2FF] text-slate-400' : 'bg-slate-100 hover:bg-[#0A44FF]/10 hover:text-[#0A44FF] text-slate-600'}`}
                  >
                    <MailIcon size={15} />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* ======================================================================
          FOOTER SLOT: Clean, Essential Capstone Footer
          ====================================================================== */}
      <footer className={`relative overflow-hidden w-full scroll-mt-[76px] border-t py-12 md:py-16 transition-colors duration-500 ${isDark ? 'bg-[#121214] border-slate-800' : 'bg-[#F4F5F7] border-slate-200/80'
        }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-6 flex-wrap justify-center sm:justify-start text-sm font-medium">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 no-underline transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}><Github size={16} className="text-[#0A44FF]" /> Open-Source Repository</a>
              <a href="#guide" onClick={(e) => handleNavClick(e, 'guide')} className={`flex items-center gap-2 no-underline transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}><FileText size={16} className="text-[#FF7A2F]" /> Thesis Working Paper</a>
              <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className={`flex items-center gap-2 no-underline transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}><CheckCircle2 size={16} className="text-emerald-500" /> Chrome MV3 & WCAG 2.1 AAA</a>
            </div>
          </div>

          <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-normal ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200/80 text-slate-600'
            }`}>
            <p className="m-0">© 2026 Sensa Capstone Research Team • Bulacan State University (BulSU) • College of Information and Communications Technology.</p>
            <div className="flex items-center gap-4 font-mono font-semibold">
              <span className="text-[#0A44FF]">Manifest V3 Companion</span>
              <span className="text-[#FF7A2F]">Stateless Privacy Guarantee</span>
            </div>
          </div>
        </div>
      </footer>
      {/* ======================================================================
          END FOOTER SLOT
          ====================================================================== */}

      {/* ======================================================================
          FLOATING EXTENSION DOCKS (`VisualDock` & `AuditoryDock` exact replicas)
          ====================================================================== */}
      {activeMode === 'visual' && (
        <div className="fixed bottom-4 left-4 md:left-8 z-50 animate-pop transition-all duration-300">
          <div className={`border rounded-2xl p-2.5 backdrop-blur-xl transition-all duration-300 flex flex-col gap-3 items-center ${isDark ? 'bg-[#161618]/95 border-slate-800 ring-1 ring-white/10 inset shadow-2xl' : 'bg-white/95 border-slate-200/80 ring-1 ring-black/5 inset shadow-xl'
            }`}>
            <div className={`text-center pb-1 border-b w-full ${isDark ? 'border-slate-800' : 'border-slate-200/80'}`}>
              <span className="text-[10px] font-mono font-black text-[#0A44FF] tracking-widest uppercase">Visual</span>
            </div>

            <button
              onClick={() => handleVoiceSimulator('Activate Visual Mode')}
              className="w-11 h-11 rounded-xl bg-[#0A44FF] hover:bg-[#0035D9] text-white flex items-center justify-center shadow-md shadow-[#0A44FF]/30 active:scale-95 transition-all duration-200 focus:ring-2 focus:ring-[#0A44FF] focus:outline-none cursor-pointer"
              title="Voice Navigation Active"
            >
              <Mic size={20} />
            </button>

            <button
              onClick={() => handleVoiceSimulator('Read Page Content')}
              className={`w-11 h-11 rounded-xl flex items-center justify-center active:scale-95 transition-all duration-200 focus:ring-2 focus:ring-[#0A44FF] focus:outline-none cursor-pointer ${ttsPlaying
                ? 'bg-yellow-400 text-black shadow-md shadow-yellow-400/35 font-extrabold'
                : isDark ? 'bg-black/40 hover:bg-slate-800 text-slate-300 border border-slate-800' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80'
                }`}
              title="TTS Article Reader"
            >
              <Volume2 size={20} />
            </button>

            <button
              onClick={() => setIsFocusRulerActive(!isFocusRulerActive)}
              className={`w-11 h-11 rounded-xl flex items-center justify-center active:scale-95 transition-all duration-200 focus:ring-2 focus:ring-[#0A44FF] focus:outline-none cursor-pointer ${isFocusRulerActive
                ? 'bg-yellow-400 text-black shadow-md shadow-yellow-400/35 font-extrabold'
                : isDark ? 'bg-black/40 hover:bg-slate-800 text-slate-300 border border-slate-800' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80'
                }`}
              title="Toggle Reading Focus Ruler (#FFFF00)"
            >
              <Maximize2 size={20} />
            </button>
          </div>
        </div>
      )}

      {activeMode === 'auditory' && (
        <div className="fixed bottom-4 right-4 md:right-8 z-50 max-w-[calc(100vw-2rem)] sm:max-w-sm w-full animate-pop transition-all duration-300">
          <div className={`border rounded-2xl p-4 backdrop-blur-xl transition-all duration-300 ${isDark ? 'bg-[#161618]/95 border-slate-800 ring-1 ring-white/10 inset shadow-2xl' : 'bg-white/95 border-slate-200/80 ring-1 ring-black/5 inset shadow-xl'
            }`}>
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5 mb-3">
              <div className="flex items-center gap-2">
                <Ear size={18} className="text-[#FF7A2F] shrink-0" />
                <span className={`text-xs font-mono font-bold uppercase tracking-wider truncate ${isDark ? 'text-white' : 'text-slate-900'}`}>Auditory Mode • Live Captions</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="px-2 py-0.5 rounded bg-[#FF7A2F] text-black text-[10px] font-mono font-black uppercase tracking-widest animate-pulse">LIVE</span>
                <button
                  onClick={() => setActiveMode('standard')}
                  className={`text-xs px-1 active:scale-95 transition-all focus:ring-2 focus:ring-[#FF7A2F] focus:outline-none cursor-pointer rounded ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                  title="Close Caption Box"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="bg-black/80 p-3.5 rounded-xl border border-slate-800/80 font-mono text-sm text-[#6AA2FF] leading-relaxed min-h-[68px] flex items-center mb-2.5 font-medium">
              {simulatedCaptionText}
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono font-medium text-slate-400">
              <span className="truncate mr-2">Web Audio Analyser: 48kHz Active</span>
              <span className="text-[#FFC09B] font-bold shrink-0">EN | ES | FR | TL</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
