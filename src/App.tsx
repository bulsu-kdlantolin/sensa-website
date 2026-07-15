import { useState, useEffect, useRef } from 'react';
import {
  Ear,
  Volume2,
  Code,
  Cpu,
  Play,
  Mic,
  Maximize2,
  Users,
  Award,
  Globe,
  Sun,
  Moon,
  CheckCircle2,
  Zap,
  BookOpen,
  Download,
  FileText,
  Check,
  AlertCircle,
  Pause,
  SkipForward
} from 'lucide-react';

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

  // Interactive Video Showcase State
  const [activeVideoChapter, setActiveVideoChapter] = useState<number>(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [videoPlayerMode, setVideoPlayerMode] = useState<'interactive' | 'embed'>('interactive');

  const videoChapters = [
    {
      id: 0,
      title: 'Full Capstone System Walkthrough',
      duration: '05:24',
      badge: 'Overview',
      description: 'Comprehensive tour of Sensa’s dual-mode accessibility architecture built for WCAG 2.1 AAA compliance.',
      embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1',
      highlights: ['System Architecture & Extension Lifecycle', 'Manifest V3 Permissions & Security', 'Live Audio Tab Stream Integration']
    },
    {
      id: 1,
      title: 'Visual Mode: Voice Navigation & Focus Ruler',
      duration: '01:45',
      badge: 'Visual Mode',
      description: 'Demonstrating hands-free Web Speech API scrolling, link activation, and dyslexia-optimized horizontal tracking ruler.',
      embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1',
      highlights: ['Web Speech API Voice Command Parsing', 'Step-by-Step Line Tracking Ruler', 'Instant AI Image Alt-Text Reader']
    },
    {
      id: 2,
      title: 'Auditory Mode: Live Captions & Smart TTS',
      duration: '02:10',
      badge: 'Auditory Mode',
      description: 'Real-time tab audio capture, multi-language speech-to-text transcription, and adjustable TTS reading speeds.',
      embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1',
      highlights: ['Chrome TabCapture & Offscreen Audio Processing', 'Dynamic Caption Dock & Contrast Filters', 'On-the-Fly TTS Voice Customization']
    },
    {
      id: 3,
      title: 'Extension Floating Dock & Settings Sync',
      duration: '01:29',
      badge: 'Dock & Profile',
      description: 'Exploring the non-intrusive floating accessibility panel, theme toggles, and customizable user sensory profiles.',
      embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1',
      highlights: ['Non-blocking Draggable Floating UI', 'Persistent Profile Sync via Chrome Storage', 'One-Click Accessibility Mode Switching']
    }
  ];

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
    const sectionIds = ['hero', 'problem-solution', 'features', 'playground', 'architecture', 'metrics', 'guide', 'video', 'team'];
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
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % captions.length;
      setSimulatedCaptionText(captions[index]);
    }, 3200);
    return () => clearInterval(interval);
  }, [isSimulatingCaptions, activeMode]);

  // Handle voice command simulator
  const handleVoiceSimulator = (command: string) => {
    setVoiceCommandStatus(`🎤 Listening for phonetic input: "${command}"...`);
    setTimeout(() => {
      if (command.toLowerCase().includes('visual')) {
        setActiveMode('visual');
        setIsFocusRulerActive(true);
        setVoiceCommandStatus('✅ Recognized: "Visual Mode". Activated high-contrast theme & #FFFF00 focus ruler.');
      } else if (command.toLowerCase().includes('auditory')) {
        setActiveMode('auditory');
        setIsSimulatingCaptions(true);
        setVoiceCommandStatus('✅ Recognized: "Auditory Mode". Launched live multilingual AI caption window.');
      } else if (command.toLowerCase().includes('read')) {
        setTtsPlaying(true);
        setVoiceCommandStatus(`✅ Recognized: "Read Page". Sensa SpeechSynthesis TTS reading article at ${readingSpeed}x speed.`);
      } else {
        setVoiceCommandStatus(`✅ Recognized command: "${command}". System executed action hands-free.`);
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
              src="/sensa-logo.png"
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
                { href: '#features', id: 'features', label: 'Dual-Mode Features' },
                { href: '#playground', id: 'playground', label: 'Live Demo Sandbox' },
                { href: '#architecture', id: 'architecture', label: 'Technical Architecture' },
                { href: '#metrics', id: 'metrics', label: 'Research Metrics' },
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
                src="/sensa-logo.png"
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
              Empowering low-vision and hearing-impaired users across the web through hands-free voice navigation, intelligent live AI captions, high-contrast screen magnification, and adaptive text-to-speech.
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
          4. INTERACTIVE LIVE DEMO & PLAYGROUND SECTION - Alternating Value Band
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
          5. TECHNICAL ARCHITECTURE & SYSTEM WORKFLOW (Asymmetrical Bento Grid)
          ====================================================================== */}
        <section id="architecture" className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center scroll-mt-[76px] py-20 md:py-28 border-t transition-colors duration-500 ${isDark ? 'border-slate-800/80' : 'border-slate-200/60'
          }`}>
          {/* Architecture Precision Engineering Grid Layer */}
          <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_65%,transparent_100%)] -z-10" />

          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Technical Architecture & System Workflow
              </h2>
              <p className={`text-base md:text-lg leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Demonstrating engineering depth, type-safe MV3 architecture, and strict adherence to universal web design guidelines.
              </p>
            </div>

            {/* Asymmetrical Bento Box Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <article className={`border rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-slate-700 dark:hover:border-slate-700 md:col-span-1 lg:col-span-1 ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:bg-slate-50/80 shadow-sm'
                }`}>
                <div>
                  <Code className="w-7 h-7 text-[#0A44FF] mb-4" />
                  <h3 className={`text-lg font-bold mb-2 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>React 18 & TypeScript (`.tsx`)</h3>
                  <p className={`text-sm m-0 leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Provides strict type safety and component modularity across both the Chrome extension popup (<code className={`font-mono text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>ModeSelection.tsx</code>) and this live capstone website.
                  </p>
                </div>
              </article>

              <article className={`border rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-slate-700 dark:hover:border-slate-700 md:col-span-1 lg:col-span-2 ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:bg-slate-50/80 shadow-sm'
                }`}>
                <div>
                  <Cpu className="w-7 h-7 text-[#FF7A2F] mb-4" />
                  <h3 className={`text-lg font-bold mb-2 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Plasmo Extension Framework</h3>
                  <p className={`text-sm m-0 leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Automates complex multi-target bundling for Chrome MV3, hot module replacement (HMR), and clean content script injections across dynamic web DOMs.
                  </p>
                </div>
              </article>

              <article className={`border rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-slate-700 dark:hover:border-slate-700 md:col-span-2 lg:col-span-2 ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:bg-slate-50/80 shadow-sm'
                }`}>
                <div>
                  <Zap className="w-7 h-7 text-[#0A44FF] mb-4" />
                  <h3 className={`text-lg font-bold mb-2 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Node.js & WebSocket Engine</h3>
                  <p className={`text-sm m-0 leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Custom, high-concurrency backend hosted on <strong className={isDark ? 'text-white font-semibold' : 'text-slate-900 font-semibold'}>Render</strong> routing live binary audio streams over WebSockets directly to <strong className={isDark ? 'text-white font-semibold' : 'text-slate-900 font-semibold'}>Deepgram</strong> (STT) and <strong className={isDark ? 'text-white font-semibold' : 'text-slate-900 font-semibold'}>DeepL</strong> (Translation) with sub-200ms latency.
                  </p>
                </div>
              </article>

              <article className={`border rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-slate-700 dark:hover:border-slate-700 md:col-span-1 lg:col-span-1 ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:bg-slate-50/80 shadow-sm'
                }`}>
                <div>
                  <Mic className="w-7 h-7 text-[#FF7A2F] mb-4" />
                  <h3 className={`text-lg font-bold mb-2 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Web Speech & Web Audio APIs</h3>
                  <p className={`text-sm m-0 leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Custom voice bridges (<code className={`font-mono text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>modeSelectionVoiceBridge.ts</code>) with exponential backoff (`300ms - 3000ms`) and real-time <strong className={isDark ? 'text-white font-semibold' : 'text-slate-900 font-semibold'}>Web Audio API AnalyserNode</strong> pipelines for sound visualizers and environmental alerts.
                  </p>
                </div>
              </article>

              <article className={`border rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-slate-700 dark:hover:border-slate-700 md:col-span-1 lg:col-span-1 ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:bg-slate-50/80 shadow-sm'
                }`}>
                <div>
                  <Globe className="w-7 h-7 text-[#0A44FF] mb-4" />
                  <h3 className={`text-lg font-bold mb-2 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Chrome MV3 & WCAG 2.1 AAA</h3>
                  <p className={`text-sm m-0 leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Utilizes secure `chrome.storage`, `chrome.tabs`, and `chrome.tabCapture` alongside strict ARIA accessibility attributes and `#FFFF00` focus guides.
                  </p>
                </div>
              </article>

              <article className={`border rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-slate-700 dark:hover:border-slate-700 md:col-span-2 lg:col-span-2 ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:bg-slate-50/80 shadow-sm'
                }`}>
                <div>
                  <CheckCircle2 className="w-7 h-7 text-[#FF7A2F] mb-4" />
                  <h3 className={`text-lg font-bold mb-2 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Stateless Cloud Processing</h3>
                  <p className={`text-sm m-0 leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Enforces strict end-to-end encryption (`TLS 1.3 / AES-256`) across WebSocket streams. Audio packets sent to Deepgram and DeepL are processed entirely in-memory and never permanently stored or logged.
                  </p>
                </div>
              </article>
            </div>

            {/* System Workflow Step Diagram */}
            <div className={`border rounded-2xl p-6 md:p-8 backdrop-blur-xl ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset shadow-lg' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset shadow-md'
              }`}>
              <div className="text-center mb-10">
                <h3 className={`text-xl md:text-2xl font-black m-0 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>Sensa Real-Time Data & Execution Workflow</h3>
                <p className={`text-xs md:text-sm mt-1 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>How Sensa synchronizes dual-mode commands with zero browser lag across tabs</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className={`border rounded-xl p-5 relative transition-all duration-300 ${isDark ? 'bg-black/40 border-slate-800/80 ring-1 ring-white/5 inset hover:border-slate-700' : 'bg-slate-50/80 border-slate-200/60 hover:border-slate-300'}`}>
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-widest bg-[#0A44FF] text-white mb-3">
                    Step 1
                  </span>
                  <h4 className={`text-base font-bold mb-1.5 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Content Script & DOM Capture</h4>
                  <p className={`text-xs m-0 leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    `content.ts` injects non-blocking listeners into active tabs to monitor keyboard focus, read semantic tags (`h1-h6`, `alt`), and capture audio streams.
                  </p>
                </div>

                <div className={`border rounded-xl p-5 relative transition-all duration-300 ${isDark ? 'bg-black/40 border-slate-800/80 ring-1 ring-white/5 inset hover:border-slate-700' : 'bg-slate-50/80 border-slate-200/60 hover:border-slate-300'}`}>
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-widest bg-[#FF7A2F] text-white mb-3">
                    Step 2
                  </span>
                  <h4 className={`text-base font-bold mb-1.5 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Service Worker Synchronization</h4>
                  <p className={`text-xs m-0 leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Background worker (`background/index.ts`) coordinates tab communication, checks permission grants (`activeTab`, `microphone`), and manages state.
                  </p>
                </div>

                <div className={`border rounded-xl p-5 relative transition-all duration-300 ${isDark ? 'bg-black/40 border-slate-800/80 ring-1 ring-white/5 inset hover:border-slate-700' : 'bg-slate-50/80 border-slate-200/60 hover:border-slate-300'}`}>
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-widest bg-purple-600 text-white mb-3">
                    Step 3
                  </span>
                  <h4 className={`text-base font-bold mb-1.5 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>WebSocket Engine & AI Pipeline</h4>
                  <p className={`text-xs m-0 leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Active tab audio is streamed over high-concurrency WebSockets to our Node.js server (`Render`), where Deepgram transcribes and DeepL translates in real-time.
                  </p>
                </div>

                <div className={`border rounded-xl p-5 relative transition-all duration-300 ${isDark ? 'bg-black/40 border-slate-800/80 ring-1 ring-white/5 inset hover:border-slate-700' : 'bg-slate-50/80 border-slate-200/60 hover:border-slate-300'}`}>
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-widest bg-emerald-600 text-white mb-3">
                    Step 4
                  </span>
                  <h4 className={`text-base font-bold mb-1.5 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Real-Time Sensory Rendering</h4>
                  <p className={`text-xs m-0 leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Visual or Auditory Docks dynamically render `#FFFF00` focus rulers, high-contrast themes, or live multilingual captions and environmental warning alerts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================================
          6. CAPSTONE RESEARCH & VALIDATION METRICS - Alternating Value Band
          ====================================================================== */}
        <section id="metrics" className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center scroll-mt-[76px] py-20 md:py-28 border-y transition-colors duration-500 ${isDark ? 'bg-[#121214] border-slate-800/80' : 'bg-[#F4F5F7] border-slate-200/80'
          }`}>
          {/* Metrics Ambient Halo Layer */}
          <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full blur-[160px] pointer-events-none -z-10 ${isDark ? 'bg-amber-500/[0.05]' : 'bg-amber-500/[0.04]'}`} />

          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Capstone Research & Validation Metrics
              </h2>
              <p className={`text-base md:text-lg leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Rigorous performance benchmarking and usability testing conducted to verify system responsiveness across sensory profiles.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <article className={`border rounded-2xl p-6 text-center transition-all duration-300 hover:border-slate-700 ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:bg-slate-50/80 shadow-sm'
                }`}>
                <div className="text-4xl md:text-5xl font-black text-[#0A44FF] mb-3 tracking-tighter">&lt; 1.5s</div>
                <h3 className={`text-base font-bold mb-2 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Voice Command Lockout Latency</h3>
                <p className={`text-xs m-0 leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Average time from speech input (`"Activate Visual Mode"`) to full DOM theme and focus ruler injection.
                </p>
              </article>

              <article className={`border rounded-2xl p-6 text-center transition-all duration-300 hover:border-slate-700 ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:bg-slate-50/80 shadow-sm'
                }`}>
                <div className="text-4xl md:text-5xl font-black text-[#FF7A2F] mb-3 tracking-tighter">95%</div>
                <h3 className={`text-base font-bold mb-2 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Hands-Free Task Completion Rate</h3>
                <p className={`text-xs m-0 leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Achieved in usability testing with visually impaired and DHH participants navigating multi-page web applications.
                </p>
              </article>

              <article className={`border rounded-2xl p-6 text-center transition-all duration-300 hover:border-slate-700 ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:bg-slate-50/80 shadow-sm'
                }`}>
                <div className="text-4xl md:text-5xl font-black text-[#0A44FF] mb-3 tracking-tighter">98%</div>
                <h3 className={`text-base font-bold mb-2 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Audio & Caption Synchronization</h3>
                <p className={`text-xs m-0 leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  High accuracy scoring across complex YouTube, webinar, and HTML5 audio streams using Chrome `tabCapture` and Web Audio pipelines.
                </p>
              </article>

              <article className={`border rounded-2xl p-6 text-center transition-all duration-300 hover:border-slate-700 ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:bg-slate-50/80 shadow-sm'
                }`}>
                <div className="text-4xl md:text-5xl font-black text-emerald-500 mb-3 tracking-tighter">0</div>
                <h3 className={`text-base font-bold mb-2 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Audio Bridge Crash Loops</h3>
                <p className={`text-xs m-0 leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Zero audio recognition crashes or mic disconnects after implementing our custom exponential backoff recovery algorithm.
                </p>
              </article>
            </div>

            {/* Validation Quote / Archive Card */}
            <div className="mt-12">
              <article className={`p-8 rounded-3xl border transition-all duration-300 ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset shadow-sm'
                }`}>
                <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                  <span className="font-mono text-xs font-bold text-[#FF7A2F] uppercase tracking-widest">BulSU Capstone Verification Protocol</span>
                  <span className={`text-xs font-mono px-3 py-1 rounded-full ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>Institutional Release 2026</span>
                </div>
                <p className={`text-sm md:text-base leading-relaxed m-0 italic font-normal ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  "Sensa proves that enterprise-grade web accessibility does not require sacrificing modern developer aesthetics or browsing speed. By offloading heavy multilingual AI audio models to a dedicated stateless cloud pipeline while keeping critical DOM interactions local, the extension delivers unprecedented dual-mode autonomy for low-vision and hearing-impaired users."
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ======================================================================
          7. INSTALLATION & USER GUIDE (Walkthrough)
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
          8. CAPSTONE DEMO VIDEO SECTION - Alternating Value Band
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
              <p className={`text-base md:text-lg leading-relaxed font-normal mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Experience our complete dual-mode accessibility demonstration, real-time speech navigation, and high-contrast focus tools built for WCAG 2.1 AAA compliance.
              </p>

              {/* Mode Toggle Bar for Player Type */}
              <div className="inline-flex items-center p-1.5 rounded-xl border transition-colors duration-300 bg-slate-500/10 border-slate-500/20">
                <button
                  type="button"
                  onClick={() => setVideoPlayerMode('interactive')}
                  aria-pressed={videoPlayerMode === 'interactive'}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition-all duration-200 ${videoPlayerMode === 'interactive'
                    ? 'bg-[#0A44FF] text-white shadow-md shadow-[#0A44FF]/25'
                    : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                >
                  <Code size={15} />
                  <span>Interactive Simulation</span>
                </button>
                <button
                  type="button"
                  onClick={() => setVideoPlayerMode('embed')}
                  aria-pressed={videoPlayerMode === 'embed'}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition-all duration-200 ${videoPlayerMode === 'embed'
                    ? 'bg-[#0A44FF] text-white shadow-md shadow-[#0A44FF]/25'
                    : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                >
                  <Play size={15} />
                  <span>Video Stream Embed</span>
                </button>
              </div>
            </div>

            {/* Main Showcase Player Container */}
            <div className={`relative max-w-5xl mx-auto rounded-2xl md:rounded-3xl border overflow-hidden shadow-2xl transition-all duration-300 mb-12 ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset shadow-slate-200/60'
              }`}>
              {videoPlayerMode === 'interactive' ? (
                <div className="relative">
                  {!isVideoPlaying ? (
                    /* Interactive Player Poster View */
                    <div className="relative aspect-video w-full flex flex-col justify-between p-6 md:p-12 text-left overflow-hidden group">
                      {/* Background Decorative Gradients & Grid */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0A44FF]/15 via-[#161618]/90 to-purple-600/15 pointer-events-none" />
                      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

                      {/* Top Bar inside Video Poster */}
                      <div className="relative z-10 flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono font-bold text-white">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>BULSU CAPSTONE THESIS 2026</span>
                        </div>
                        <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono text-slate-300">
                          Duration: {videoChapters[activeVideoChapter].duration}
                        </div>
                      </div>

                      {/* Center Animated Play Action */}
                      <div className="relative z-10 my-auto text-center py-6">
                        <button
                          type="button"
                          onClick={() => setIsVideoPlaying(true)}
                          aria-label={`Play demonstration for ${videoChapters[activeVideoChapter].title}`}
                          className="group/btn inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0A44FF] text-white shadow-xl shadow-[#0A44FF]/40 hover:scale-110 hover:bg-[#1A54FF] transition-all duration-300 relative focus:outline-none focus:ring-4 focus:ring-white/30"
                        >
                          <span className="absolute inset-0 rounded-full bg-[#0A44FF] animate-ping opacity-40" />
                          <Play size={36} className="ml-1 relative z-10 fill-current" />
                        </button>
                        <h3 className="text-xl md:text-3xl font-black text-white mt-6 mb-2 tracking-tight">
                          {videoChapters[activeVideoChapter].title}
                        </h3>
                        <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto">
                          {videoChapters[activeVideoChapter].description}
                        </p>
                      </div>

                      {/* Bottom Highlights Row */}
                      <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
                        <div className="flex flex-wrap gap-2">
                          {videoChapters[activeVideoChapter].highlights.map((item, idx) => (
                            <span key={idx} className="bg-white/10 backdrop-blur-sm text-white/90 text-[11px] font-medium px-2.5 py-1 rounded-md border border-white/10">
                              ✓ {item}
                            </span>
                          ))}
                        </div>
                        <span className="text-xs font-mono font-bold text-purple-300 flex items-center gap-1.5">
                          <CheckCircle2 size={14} className="text-emerald-400" />
                          WCAG 2.1 AAA Validated
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* Active Simulated Video Playback Screen */
                    <div className="relative aspect-video w-full flex flex-col justify-between bg-[#0B0B0E] p-4 md:p-8 text-white overflow-hidden">
                      {/* Top Status Bar */}
                      <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 backdrop-blur-md">
                        <div className="flex items-center gap-3">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                          <span className="font-mono text-xs font-bold text-red-400 tracking-wider">LIVE CAPTURE SIMULATION</span>
                          <span className="text-slate-500">|</span>
                          <span className="text-xs font-semibold text-slate-200 truncate max-w-[200px] md:max-w-md">
                            {videoChapters[activeVideoChapter].title}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setIsVideoPlaying(false)}
                          aria-label="Stop video simulation"
                          className="text-xs font-mono font-bold text-slate-400 hover:text-white px-2.5 py-1 rounded bg-white/10 transition-colors"
                        >
                          Reset Demo
                        </button>
                      </div>

                      {/* Simulated Stage Content */}
                      <div className="my-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-4">
                        <div className="bg-black/60 rounded-xl border border-slate-800 p-5 space-y-4">
                          <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
                            <span className="flex items-center gap-1.5 text-purple-400 font-bold">
                              <Cpu size={14} /> Sensa Accessibility Dock
                            </span>
                            <span>Manifest V3 Active</span>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                              <div className="flex items-center gap-2.5">
                                <Mic size={16} className="text-[#0A44FF]" />
                                <span className="text-xs font-medium">Voice Command Engine</span>
                              </div>
                              <span className="text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">LISTENING</span>
                            </div>
                            <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                              <div className="flex items-center gap-2.5">
                                <Ear size={16} className="text-[#FF7A2F]" />
                                <span className="text-xs font-medium">Tab Audio Capture</span>
                              </div>
                              <span className="text-[10px] font-mono font-bold bg-[#FF7A2F]/20 text-[#FF7A2F] px-2 py-0.5 rounded">STREAMING</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-900/30 to-[#0A44FF]/20 rounded-xl border border-purple-500/30 p-5 flex flex-col justify-between min-h-[180px]">
                          <div className="text-xs font-mono text-purple-300 font-bold flex items-center justify-between">
                            <span>LIVE CAPTION & VOICE LOG</span>
                            <span>01:14 / {videoChapters[activeVideoChapter].duration}</span>
                          </div>
                          <div className="py-4 font-mono text-xs md:text-sm text-emerald-300 leading-relaxed bg-black/40 p-3 rounded-lg border border-white/5 my-2">
                            {activeVideoChapter === 1
                              ? '> User Speech: "Scroll down and focus on next link." -> Action executed in 84ms.'
                              : activeVideoChapter === 2
                                ? '> Tab Audio: "Welcome to the Bulacan State University Capstone defense..." [Captions rendered]'
                                : '> Sensa Extension initialized successfully with high-contrast AAA color profiles.'}
                          </div>
                          <div className="text-[10px] text-slate-400 flex items-center justify-between">
                            <span>Latency: 42ms</span>
                            <span className="text-emerald-400 font-bold">● Audio-Sync Lock</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Playback Scrubber & Controls */}
                      <div className="bg-black/80 backdrop-blur-md rounded-xl p-3 border border-white/10 space-y-2">
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-[#0A44FF] h-full w-[35%] transition-all duration-500 rounded-full" />
                        </div>
                        <div className="flex items-center justify-between text-xs font-mono text-slate-300 pt-1">
                          <div className="flex items-center gap-4">
                            <button
                              type="button"
                              onClick={() => setIsVideoPlaying(false)}
                              className="hover:text-white transition-colors flex items-center gap-1"
                              aria-label="Pause playback"
                            >
                              <Pause size={14} className="fill-current text-purple-400" /> Pause
                            </button>
                            <button
                              type="button"
                              onClick={() => setActiveVideoChapter((prev) => (prev + 1) % videoChapters.length)}
                              className="hover:text-white transition-colors flex items-center gap-1"
                              aria-label="Next chapter"
                            >
                              <SkipForward size={14} /> Next Chapter
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-slate-400">Speed: 1.0x</span>
                            <span className="text-emerald-400 font-bold">1080p 60FPS</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* Video Stream Embed Mode */
                <div className="relative aspect-video w-full bg-black flex flex-col justify-center items-center">
                  <iframe
                    title={`Sensa Capstone Demo - ${videoChapters[activeVideoChapter].title}`}
                    src={videoChapters[activeVideoChapter].embedUrl}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>

            {/* Interactive Chapter Playlist Grid */}
            <div className="mb-12">
              <h3 className={`text-sm font-mono font-bold uppercase tracking-widest mb-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Select Video Chapter
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" role="tablist" aria-label="Demo Video Chapters">
                {videoChapters.map((chapter, idx) => {
                  const isActive = activeVideoChapter === idx;
                  return (
                    <button
                      key={chapter.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls="video"
                      onClick={() => {
                        setActiveVideoChapter(idx);
                        setIsVideoPlaying(false);
                      }}
                      className={`text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between relative group focus:outline-none focus:ring-2 focus:ring-[#0A44FF] ${isActive
                        ? isDark
                          ? 'bg-purple-900/20 border-[#0A44FF] ring-1 ring-[#0A44FF]'
                          : 'bg-[#0A44FF]/5 border-[#0A44FF] ring-1 ring-[#0A44FF]'
                        : isDark
                          ? 'bg-[#161618] border-slate-800/80 hover:border-slate-700 hover:bg-white/[0.03]'
                          : 'bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/80 shadow-sm'
                        }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border ${isActive
                            ? 'bg-[#0A44FF] text-white border-[#0A44FF]'
                            : isDark ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-200'
                            }`}>
                            0{idx + 1}
                          </span>
                          <span className={`text-xs font-mono font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                            {chapter.duration}
                          </span>
                        </div>
                        <h4 className={`text-base font-bold mb-2 leading-snug tracking-tight ${isActive ? (isDark ? 'text-white' : 'text-[#0A44FF]') : isDark ? 'text-slate-200' : 'text-slate-900'
                          }`}>
                          {chapter.title}
                        </h4>
                        <p className={`text-xs leading-relaxed line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                          {chapter.description}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-500/10 flex items-center justify-between text-[11px] font-mono font-bold">
                        <span className={isActive ? 'text-[#0A44FF]' : isDark ? 'text-slate-400' : 'text-slate-500'}>
                          {chapter.badge}
                        </span>
                        <span className={`flex items-center gap-1 ${isActive ? 'text-[#0A44FF]' : 'text-slate-400 group-hover:translate-x-0.5 transition-transform'}`}>
                          Play Chapter →
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Evaluator Resources Action Bar */}
            <div className={`rounded-2xl p-6 md:p-8 border flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 ${isDark ? 'bg-gradient-to-r from-purple-900/20 to-[#0A44FF]/10 border-purple-500/30' : 'bg-gradient-to-r from-purple-500/5 to-[#0A44FF]/5 border-purple-500/20'
              }`}>
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className={`text-lg font-bold tracking-tight mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Evaluating Sensa for BulSU Capstone Defense?
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Download our full WCAG 2.1 AAA accessibility audit checklist, architectural design tokens, and Chrome Extension manifest specifications.
                  </p>
                </div>
              </div>
              <a
                href="#architecture"
                className="px-6 py-3 rounded-xl bg-[#0A44FF] hover:bg-[#1A54FF] text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-[#0A44FF]/25 flex items-center gap-2 shrink-0"
              >
                <Download size={16} />
                <span>Review Technical Specs</span>
              </a>
            </div>
          </div>
        </section>

        {/* ======================================================================
          9. ABOUT THE CAPSTONE TEAM & ACKNOWLEDGMENTS
          ====================================================================== */}
        <section id="team" className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center scroll-mt-[76px] py-20 md:py-28 border-t transition-colors duration-500 ${isDark ? 'border-slate-800/80' : 'border-slate-200/60'
          }`}>
          {/* Team Section Grid Texture Layer */}
          <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                About the Capstone Team
              </h2>
              <p className={`text-base md:text-lg leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Department of Information Technology & Computer Science • Bulacan State University (BulSU) • Thesis Submission 2026
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              <article className={`border rounded-2xl p-6 text-center flex flex-col items-center justify-between transition-all duration-300 ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:border-slate-700 hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:border-slate-300 hover:bg-slate-50/80 shadow-sm'
                }`}>
                <div className={`w-20 h-20 rounded-full border flex flex-col items-center justify-center text-[#0A44FF] mb-4 ${isDark ? 'bg-black/40 border-slate-800 ring-1 ring-white/5 inset' : 'bg-slate-100 border-slate-200/80'
                  }`}>
                  <Users size={24} className="mb-1" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">[ PHOTO ]</span>
                </div>
                <div>
                  <h3 className={`text-lg font-bold m-0 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Shane</h3>
                  <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider border my-2 ${isDark ? 'bg-[#0A44FF]/15 text-[#6AA2FF] border-[#0A44FF]/30' : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20'
                    }`}>
                    UI/UX & Accessibility Designer
                  </span>
                  <p className={`text-xs leading-relaxed m-0 mt-1 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Designed the dual-mode sensory interfaces, #FFFF00 focus rulers, and WCAG 2.1 AAA high-contrast brand tokens.
                  </p>
                </div>
              </article>

              <article className={`border rounded-2xl p-6 text-center flex flex-col items-center justify-between transition-all duration-300 ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:border-slate-700 hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:border-slate-300 hover:bg-slate-50/80 shadow-sm'
                }`}>
                <div className={`w-20 h-20 rounded-full border flex flex-col items-center justify-center text-[#FF7A2F] mb-4 ${isDark ? 'bg-black/40 border-slate-800 ring-1 ring-white/5 inset' : 'bg-slate-100 border-slate-200/80'
                  }`}>
                  <Users size={24} className="mb-1" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">[ PHOTO ]</span>
                </div>
                <div>
                  <h3 className={`text-lg font-bold m-0 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Christian</h3>
                  <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider border my-2 ${isDark ? 'bg-[#FF7A2F]/15 text-[#FFC09B] border-[#FF7A2F]/30' : 'bg-[#FF7A2F]/10 text-[#FF7A2F] border-[#FF7A2F]/20'
                    }`}>
                    WebSocket & Backend Architect
                  </span>
                  <p className={`text-xs leading-relaxed m-0 mt-1 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Implemented the high-concurrency Node.js server pipeline on Render routing binary audio streams to Deepgram and DeepL.
                  </p>
                </div>
              </article>

              <article className={`border rounded-2xl p-6 text-center flex flex-col items-center justify-between transition-all duration-300 ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:border-slate-700 hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:border-slate-300 hover:bg-slate-50/80 shadow-sm'
                }`}>
                <div className={`w-20 h-20 rounded-full border flex flex-col items-center justify-center text-[#0A44FF] mb-4 ${isDark ? 'bg-black/40 border-slate-800 ring-1 ring-white/5 inset' : 'bg-slate-100 border-slate-200/80'
                  }`}>
                  <Users size={24} className="mb-1" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">[ PHOTO ]</span>
                </div>
                <div>
                  <h3 className={`text-lg font-bold m-0 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Leo</h3>
                  <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider border my-2 ${isDark ? 'bg-[#0A44FF]/15 text-[#6AA2FF] border-[#0A44FF]/30' : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20'
                    }`}>
                    Chrome MV3 & DOM Specialist
                  </span>
                  <p className={`text-xs leading-relaxed m-0 mt-1 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Developed the semantic DOM reader (`content.ts`), keyboard focus interception, and zero-latency tab communication.
                  </p>
                </div>
              </article>

              <article className={`border rounded-2xl p-6 text-center flex flex-col items-center justify-between transition-all duration-300 ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:border-slate-700 hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:border-slate-300 hover:bg-slate-50/80 shadow-sm'
                }`}>
                <div className={`w-20 h-20 rounded-full border flex flex-col items-center justify-center text-[#FF7A2F] mb-4 ${isDark ? 'bg-black/40 border-slate-800 ring-1 ring-white/5 inset' : 'bg-slate-100 border-slate-200/80'
                  }`}>
                  <Users size={24} className="mb-1" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">[ PHOTO ]</span>
                </div>
                <div>
                  <h3 className={`text-lg font-bold m-0 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Russell</h3>
                  <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider border my-2 ${isDark ? 'bg-[#FF7A2F]/15 text-[#FFC09B] border-[#FF7A2F]/30' : 'bg-[#FF7A2F]/10 text-[#FF7A2F] border-[#FF7A2F]/20'
                    }`}>
                    QA & Usability Researcher
                  </span>
                  <p className={`text-xs leading-relaxed m-0 mt-1 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Conducted sensory usability testing, performance latency benchmarks, and capstone academic documentation methodology.
                  </p>
                </div>
              </article>

              <article className={`border rounded-2xl p-6 text-center flex flex-col items-center justify-between transition-all duration-300 ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 inset hover:border-slate-700 hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 inset hover:border-slate-300 hover:bg-slate-50/80 shadow-sm'
                }`}>
                <div className={`w-20 h-20 rounded-full border flex flex-col items-center justify-center text-[#0A44FF] mb-4 ${isDark ? 'bg-black/40 border-slate-800 ring-1 ring-white/5 inset' : 'bg-slate-100 border-slate-200/80'
                  }`}>
                  <Users size={24} className="mb-1" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">[ PHOTO ]</span>
                </div>
                <div>
                  <h3 className={`text-lg font-bold m-0 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Kian</h3>
                  <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider border my-2 ${isDark ? 'bg-[#0A44FF]/15 text-[#6AA2FF] border-[#0A44FF]/30' : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20'
                    }`}>
                    Full-Stack Systems Engineer
                  </span>
                  <p className={`text-xs leading-relaxed m-0 mt-1 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Co-architected the dual-mode sensory pipelines, real-time auditory processing, and capstone presentation interfaces.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* ======================================================================
          FOOTER SLOT: Drop your saved Footer component code right below this line - Alternating Value Band
          ====================================================================== */}
      <footer className={`relative overflow-hidden w-full scroll-mt-[76px] border-t py-12 md:py-16 transition-colors duration-500 ${isDark ? 'bg-[#121214] border-slate-800' : 'bg-[#F4F5F7] border-slate-200/80'
        }`}>
        {/* Footer Dot Matrix Background Overlay */}
        <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/sensa-logo.png" alt="Sensa Logo" className="w-8 h-8 object-contain" />
                <span className={`text-xl font-black tracking-[-0.02em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Sensa Capstone</span>
              </div>
              <p className={`text-sm leading-relaxed m-0 max-w-sm font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                An advanced dual-mode accessibility extension offering live AI subtitles, translation, text-to-speech reading enhancements, and sensory customization across Google Chrome.
              </p>
            </div>

            <div>
              <h4 className={`font-mono font-bold mb-4 text-[11px] uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>Technical Assets</h4>
              <ul className="text-sm space-y-3 list-none p-0 m-0 font-normal">
                <li><a href="#architecture" className={`flex items-center gap-2 no-underline transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}><Code size={14} className="text-[#0A44FF] shrink-0" /> Manifest V3 Architecture</a></li>
                <li><a href="#architecture" className={`flex items-center gap-2 no-underline transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}><Cpu size={14} className="text-[#FF7A2F] shrink-0" /> Service Worker (`background.ts`)</a></li>
                <li><a href="#architecture" className={`flex items-center gap-2 no-underline transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}><FileText size={14} className="text-[#0A44FF] shrink-0" /> DOM Content Chunks (`content.ts`)</a></li>
                <li><a href="#architecture" className={`flex items-center gap-2 no-underline transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}><Globe size={14} className="text-[#FF7A2F] shrink-0" /> Open-Source GitHub Repository</a></li>
              </ul>
            </div>

            <div>
              <h4 className={`font-mono font-bold mb-4 text-[11px] uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>Research & Verification</h4>
              <ul className="text-sm space-y-3 list-none p-0 m-0 font-normal">
                <li><a href="#metrics" className={`flex items-center gap-2 no-underline transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}><CheckCircle2 size={14} className="text-[#FF7A2F] shrink-0" /> WCAG 2.1 AAA Audit Log</a></li>
                <li><a href="#metrics" className={`flex items-center gap-2 no-underline transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}><Zap size={14} className="text-[#0A44FF] shrink-0" /> Usability Latency Metrics</a></li>
                <li><a href="#metrics" className={`flex items-center gap-2 no-underline transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}><BookOpen size={14} className="text-[#FF7A2F] shrink-0" /> BulSU Capstone Archives</a></li>
                <li><a href="#guide" className={`flex items-center gap-2 no-underline transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}><Download size={14} className="text-[#0A44FF] shrink-0" /> Download Thesis Build (`.ZIP`)</a></li>
              </ul>
            </div>

            <div>
              <h4 className={`font-mono font-bold mb-4 text-[11px] uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>Compliance & Legal</h4>
              <ul className="text-sm space-y-3 list-none p-0 m-0 font-normal">
                <li><a href="#architecture" className={`flex items-center gap-2 no-underline transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}><Check size={14} className="text-[#0A44FF] shrink-0" /> Stateless Privacy Guarantee</a></li>
                <li><a href="#architecture" className={`flex items-center gap-2 no-underline transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}><AlertCircle size={14} className="text-[#FF7A2F] shrink-0" /> Data Safety Declarations</a></li>
                <li><a href="#guide" className={`flex items-center gap-2 no-underline transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}><Award size={14} className="text-[#0A44FF] shrink-0" /> Chrome Web Store Policy</a></li>
                <li><a href="#team" className={`flex items-center gap-2 no-underline transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}><FileText size={14} className="text-[#FF7A2F] shrink-0" /> MIT Open-Source License</a></li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <div className={`text-xs leading-relaxed p-5 rounded-2xl border transition-colors duration-300 ${isDark ? 'bg-[#161618] border-slate-800/80 ring-1 ring-white/5 inset text-slate-400' : 'bg-white border-slate-200/80 text-slate-600 shadow-sm'
              }`}>
              🔒 <strong className={isDark ? 'text-white font-semibold' : 'text-slate-900 font-semibold'}>Stateless Cloud Processing Guarantee:</strong> Voice navigation commands (`SpeechRecognition`) operate locally inside the browser. For live multilingual audio transcription and translation, audio streams are routed through an encrypted real-time WebSocket pipeline to our Node.js server (`Render`), which interfaces transiently with <strong className={isDark ? 'text-white font-semibold' : 'text-slate-900 font-semibold'}>Deepgram</strong> (STT) and <strong className={isDark ? 'text-white font-semibold' : 'text-slate-900 font-semibold'}>DeepL</strong> (Translation). All processing is strictly stateless (`AES-256 / TLS 1.3`), in-memory only, and zero audio data or transcriptions are ever logged, stored, or retained on external cloud servers.
            </div>
          </div>

          <div className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-normal ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200/80 text-slate-600'
            }`}>
            <p className="m-0">© 2026 Sensa Capstone Team • Bulacan State University (BulSU) • All Rights Reserved.</p>
            <div className="flex items-center gap-6 font-mono font-semibold">
              <span className="text-[#0A44FF]">Chrome MV3 Ready</span>
              <span className="text-[#FF7A2F]">WCAG 2.1 AAA Compliant</span>
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
