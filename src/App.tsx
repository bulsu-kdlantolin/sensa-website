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
  FileText,
  MousePointerClick,
  VolumeX,
  BellOff,
  MessageSquare,
  PanelLeft,
  PanelTop,
  Target,
  Sparkles,
  MonitorPlay,
  Box,
  Download,
  Users,
} from 'lucide-react';
import PlaygroundSection from './components/PlaygroundSection';

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




type ThemeMode = 'dark' | 'light';

const ChromeIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height={size} width={size} className={className}>
    <defs>
      <linearGradient id="chrome-a" x1="3.2173" y1="15" x2="44.7812" y2="15" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#d93025" />
        <stop offset="1" stopColor="#ea4335" />
      </linearGradient>
      <linearGradient id="chrome-b" x1="20.7219" y1="47.6791" x2="41.5039" y2="11.6837" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#fcc934" />
        <stop offset="1" stopColor="#fbbc04" />
      </linearGradient>
      <linearGradient id="chrome-c" x1="26.5981" y1="46.5015" x2="5.8161" y2="10.506" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#1e8e3e" />
        <stop offset="1" stopColor="#34a853" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="23.9947" r="12" fill="#fff" />
    <path d="M3.2154,36A24,24,0,1,0,12,3.2154,24,24,0,0,0,3.2154,36ZM34.3923,18A12,12,0,1,1,18,13.6077,12,12,0,0,1,34.3923,18Z" fill="none" />
    <path d="M24,12H44.7812a23.9939,23.9939,0,0,0-41.5639.0029L13.6079,30l.0093-.0024A11.9852,11.9852,0,0,1,24,12Z" fill="url(#chrome-a)" />
    <circle cx="24" cy="24" r="9.5" fill="#1a73e8" />
    <path d="M34.3913,30.0029,24.0007,48A23.994,23.994,0,0,0,44.78,12.0031H23.9989l-.0025.0093A11.985,11.985,0,0,1,34.3913,30.0029Z" fill="url(#chrome-b)" />
    <path d="M13.6086,30.0031,3.218,12.006A23.994,23.994,0,0,0,24.0025,48L34.3931,30.0029l-.0067-.0068a11.9852,11.9852,0,0,1-20.7778.007Z" fill="url(#chrome-c)" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = ({ isDark }: { isDark: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path fill={isDark ? '#FFFFFF' : '#181717'} d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const GmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66" width="24" height="24">
    <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
    <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
    <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
    <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
    <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
  </svg>
);
// Custom Hook for Scroll Reveal Animation
function useScrollReveal(options: IntersectionObserverInit = { threshold: 0.15 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options.threshold]);

  return [ref, isVisible] as const;
}

export default function App() {
  const [isSidebarMode, setIsSidebarMode] = useState<boolean>(() => {
    return localStorage.getItem('sensa_sidebar') === 'true';
  });
  // Initialize theme from localStorage (`sensa_theme`), defaulting to 'light' mode
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem('sensa_theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme as ThemeMode;
    }
    return 'light';
  });

  const [activeSection, setActiveSection] = useState<string>('hero');

  // Force scroll to top on page reload
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Scroll Reveal Refs
  const [problemRef, isProblemVisible] = useScrollReveal();

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

  // Persist sidebar state
  useEffect(() => {
    localStorage.setItem('sensa_sidebar', String(isSidebarMode));
  }, [isSidebarMode]);

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
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { href: '#problem-solution', id: 'problem-solution', label: 'Mission', icon: Target },
    { href: '#features', id: 'features', label: 'Features', icon: Sparkles },
    { href: '#video', id: 'video', label: 'Demo', icon: MonitorPlay },
    { href: '#playground', id: 'playground', label: 'Simulator', icon: Box },
    { href: '#guide', id: 'guide', label: 'Install', icon: Download },
    { href: '#team', id: 'team', label: 'Team', icon: Users },
  ];

  return (
    <div className={`min-h-screen font-sans relative overflow-x-hidden selection:bg-[#0A44FF] selection:text-white ${isDark ? 'bg-[#09090B] text-slate-200' : 'bg-[#FDFDFD] text-slate-900'
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
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[900px] md:w-[1200px] h-[500px] rounded-full blur-[140px] bg-gradient-to-b from-[#0A44FF] via-[#8B5CF6] to-transparent  ${isDark ? 'opacity-25' : 'opacity-15'
          }`} />

        {/* Top-Left & Bottom-Right Corner Orbs */}
        <div className={`absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full blur-[110px] animate-float-blue bg-[#0A44FF]  ${isDark ? 'opacity-25' : 'opacity-15'
          }`} />
        <div className={`absolute -bottom-32 -right-32 w-[550px] h-[550px] rounded-full blur-[110px] animate-float-orange bg-[#FF7A2F]  ${isDark ? 'opacity-25' : 'opacity-15'
          }`} />
      </div>

      {/* Mid-Page Distributed Document-Level Ambient Orbs (For Features, Simulator, Architecture, Metrics) */}
      <div className="absolute inset-0 pointer-events-none -z-15 overflow-hidden">
        <div className={`absolute top-[22%] -right-40 w-[600px] h-[600px] rounded-full blur-[130px] animate-float-purple bg-[#8B5CF6]  ${isDark ? 'opacity-20' : 'opacity-10'
          }`} />
        <div className={`absolute top-[48%] -left-40 w-[650px] h-[650px] rounded-full blur-[130px] animate-float-cyan bg-[#06B6D4]  ${isDark ? 'opacity-20' : 'opacity-10'
          }`} />
        <div className={`absolute top-[74%] -right-20 w-[550px] h-[550px] rounded-full blur-[120px] animate-float-blue bg-[#0A44FF]  ${isDark ? 'opacity-20' : 'opacity-10'
          }`} />
      </div>

      {/* ======================================================================
          TOP NAVBAR (Horizontal)
          ====================================================================== */}
      <header className={`fixed top-3 left-3 right-3 md:top-6 md:left-1/2 z-50 w-[calc(100%-24px)] md:w-full md:max-w-5xl backdrop-blur-xl border py-2.5 md:py-3.5 px-4 md:px-6 rounded-3xl md:rounded-full shadow-lg transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isSidebarMode ? 'lg:-translate-y-[150%] lg:opacity-0 lg:pointer-events-none md:-translate-x-1/2' : 'translate-y-0 opacity-100 md:-translate-x-1/2'
        } ${isDark ? 'bg-[#1C1C1E]/70 border-white/10 ring-1 ring-white/5 ring-inset shadow-black/50' : 'bg-white/70 border-slate-200/80 ring-1 ring-black/5 ring-inset shadow-slate-200/50'
        }`}>
        <div className="w-full flex items-center justify-between gap-4 md:gap-8">
          <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="flex items-center gap-3 md:gap-3.5 no-underline group shrink-0 select-none">
            <img src={sensaLogo} alt="Sensa Logo" className="w-9 h-9 md:w-[38px] md:h-[38px] object-contain drop-shadow-[0_0_14px_rgba(10,68,255,0.55)] group-hover:scale-105 transition-transform duration-300 shrink-0" />
            <span className={`text-xl md:text-[28px] font-black tracking-[-0.03em] leading-none translate-y-[-1px] transition-colors duration-200 ${isDark ? 'text-white group-hover:text-[#FF7A2F]' : 'text-slate-900 group-hover:text-[#0A44FF]'}`}>
              Sensa
            </span>
          </a>

          <nav aria-label="Main Navigation" className="hidden lg:flex items-center justify-center flex-1 mx-4 lg:mx-8">
            <ul className={`flex items-center justify-center gap-4 lg:gap-8 xl:gap-10 w-full list-none m-0 p-0 text-xs font-mono font-bold uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {navItems.map((item) => {
                const isSelected = activeSection === item.id;
                return (
                  <li key={item.id} className="relative py-1">
                    <a href={item.href} onClick={(e) => handleNavClick(e, item.id)} aria-current={isSelected ? 'page' : undefined} className={`relative py-1.5 px-3 transition-colors duration-200 group no-underline block whitespace-nowrap ${isSelected ? (isDark ? 'text-[#FF7A2F] font-extrabold' : 'text-[#0A44FF] font-extrabold') : (isDark ? 'hover:text-[#FF7A2F]' : 'hover:text-[#0A44FF]')}`}>
                      {item.label}
                      <span className={`absolute left-0 bottom-0 h-[2px] w-full rounded-full transition-all duration-300 ease-out ${isSelected ? (isDark ? 'bg-[#FF7A2F] scale-x-100 opacity-100 shadow-[0_0_8px_rgba(255,122,47,0.8)]' : 'bg-[#0A44FF] scale-x-100 opacity-100 shadow-[0_0_8px_rgba(10,68,255,0.6)]') : (isDark ? 'bg-[#FF7A2F] scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100' : 'bg-[#0A44FF] scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100')}`} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center shrink-0">
            <button onClick={() => setIsSidebarMode(true)} className={`hidden lg:flex mr-4 p-2 rounded-full border backdrop-blur-md transition-all duration-300 ${isDark ? 'bg-[#24262B]/80 border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100/80 border-slate-200/60 hover:bg-slate-200 text-slate-500 hover:text-slate-900'}`} title="Switch to Sidebar Layout">
              <PanelLeft size={16} />
            </button>
            <button onClick={() => setTheme(isDark ? 'light' : 'dark')} role="switch" aria-checked={isDark} aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"} className={`flex items-center justify-center w-9 h-9 rounded-full border backdrop-blur-md transition-all duration-300 ${isDark ? 'bg-[#24262B]/80 border-slate-800 hover:bg-slate-800 text-[#FF7A2F]' : 'bg-slate-100/80 border-slate-200/60 hover:bg-slate-200 text-[#0A44FF]'}`} title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
              <div className="relative w-4 h-4 flex items-center justify-center">
                <Sun size={16} className={`absolute transition-all duration-500 ${isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
                <Moon size={16} className={`absolute transition-all duration-500 ${!isDark ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ======================================================================
          LEFT SIDEBAR (Vertical) - Desktop Only
          ====================================================================== */}
      <header className={`fixed hidden lg:flex flex-col items-center justify-between z-50 backdrop-blur-xl border shadow-lg transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] top-6 left-6 bottom-6 w-[80px] rounded-[2rem] py-8 px-4 ${isSidebarMode ? 'translate-x-0 opacity-100' : '-translate-x-[150%] opacity-0 pointer-events-none'
        } ${isDark ? 'bg-[#1C1C1E]/70 border-white/10 ring-1 ring-white/5 ring-inset shadow-black/50' : 'bg-white/70 border-slate-200/80 ring-1 ring-black/5 ring-inset shadow-slate-200/50'
        }`}>
        <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="flex items-center justify-center no-underline group shrink-0 select-none w-full">
          <img src={sensaLogo} alt="Sensa Logo" className="w-[38px] h-[38px] object-contain drop-shadow-[0_0_14px_rgba(10,68,255,0.55)] group-hover:scale-105 transition-transform duration-300 shrink-0" />
        </a>

        <nav aria-label="Main Navigation" className="flex flex-col items-center w-full flex-1 mt-10">
          <ul className={`flex flex-col items-center gap-4 w-full list-none m-0 p-0 text-xs font-mono font-bold uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isSelected = activeSection === item.id;
              return (
                <li key={item.id} className="relative py-1 w-full flex justify-center group/item">
                  <a href={item.href} onClick={(e) => handleNavClick(e, item.id)} aria-current={isSelected ? 'page' : undefined} className={`relative flex items-center justify-center transition-colors duration-200 group no-underline whitespace-nowrap w-12 h-12 rounded-xl ${isSelected ? (isDark ? 'text-[#FF7A2F] bg-[#FF7A2F]/10 font-extrabold' : 'text-[#0A44FF] bg-[#0A44FF]/10 font-extrabold') : (isDark ? 'hover:text-[#FF7A2F]' : 'hover:text-[#0A44FF]')}`}>
                    <Icon size={20} />
                    {/* Hover Label Tooltip */}
                    <span className={`absolute left-full ml-4 px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 -translate-x-4 pointer-events-none transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0 whitespace-nowrap shadow-xl ${isDark ? 'bg-[#1C1C1E] border border-slate-800 text-white' : 'bg-white border border-slate-200 text-slate-900'}`}>
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex flex-col items-center gap-4 w-full mt-auto">
          <button onClick={() => setIsSidebarMode(false)} className={`flex p-2 rounded-full border backdrop-blur-md transition-all duration-300 ${isDark ? 'bg-[#24262B]/80 border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100/80 border-slate-200/60 hover:bg-slate-200 text-slate-500 hover:text-slate-900'}`} title="Switch to Top Navbar Layout">
            <PanelTop size={16} />
          </button>
          <button onClick={() => setTheme(isDark ? 'light' : 'dark')} role="switch" aria-checked={isDark} aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"} className={`flex items-center justify-center w-9 h-9 rounded-full border backdrop-blur-md transition-all duration-300 ${isDark ? 'bg-[#24262B]/80 border-slate-800 hover:bg-slate-800 text-[#FF7A2F]' : 'bg-slate-100/80 border-slate-200/60 hover:bg-slate-200 text-[#0A44FF]'}`} title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
            <div className="relative w-4 h-4 flex items-center justify-center">
              <Sun size={16} className={`absolute transition-all duration-500 ${isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
              <Moon size={16} className={`absolute transition-all duration-500 ${!isDark ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
            </div>
          </button>
        </div>
      </header>
      <main id="main-content" role="main" className="w-full">
        {/* ======================================================================
          END NAVBAR SLOT
          ====================================================================== */}

        {/* ======================================================================
          1. HERO SECTION (First Impression - Exact authentic welcome box feel)
          ====================================================================== */}
        <section id="hero" className="relative w-full min-h-screen flex flex-col justify-center scroll-mt-[69px] md:scroll-mt-[71px] pt-28 pb-24 md:pt-36 md:pb-32 px-4 md:px-8 overflow-hidden">
          {/* Hero Cybernetic Grid Layer */}
          <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)] -z-10" />

          {/* AI Neural Mesh Background */}
          <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-60">
            <svg className={`absolute w-[120%] h-[120%] max-w-none ${isDark ? 'animate-float-orange' : 'animate-float-blue'}`} viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <g stroke={isDark ? "rgba(255,122,47,0.15)" : "rgba(10, 68, 255, 0.2)"} strokeWidth="1.5" fill="none">
                <path d="M100,100 L250,150 L400,100 L550,200 L700,150" />
                <path d="M150,300 L250,150 L350,350 L550,200 L650,400" />
                <path d="M100,500 L150,300 L300,450 L350,350 L500,500 L650,400 L750,550" />
                <path d="M400,100 L350,350 L500,500" />
                <path d="M700,150 L650,400" />
                {/* Cross connections */}
                <path d="M250,150 L300,450" className="animate-pulse" style={{ animationDuration: '3s' }} />
                <path d="M550,200 L500,500" className="animate-pulse" style={{ animationDuration: '4s' }} />
              </g>
              <g fill={isDark ? "rgba(255,122,47,0.5)" : "rgba(10, 68, 255, 0.6)"}>
                <circle cx="100" cy="100" r="3" className="animate-ping" style={{ animationDuration: '3s' }} />
                <circle cx="250" cy="150" r="4" />
                <circle cx="400" cy="100" r="3" />
                <circle cx="550" cy="200" r="5" className="animate-pulse" />
                <circle cx="700" cy="150" r="3" />
                <circle cx="150" cy="300" r="4" />
                <circle cx="350" cy="350" r="5" className="animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                <circle cx="650" cy="400" r="4" />
                <circle cx="100" cy="500" r="3" />
                <circle cx="300" cy="450" r="4" />
                <circle cx="500" cy="500" r="3" className="animate-pulse" />
                <circle cx="750" cy="550" r="3" />
              </g>
            </svg>
            {/* Ambient Background Glow behind the nodes */}
            <div className={`absolute w-[600px] h-[400px] rounded-full blur-[120px] bg-gradient-to-tr from-[#0A44FF] to-[#8A56FF] ${isDark ? 'opacity-10' : 'opacity-5'}`} />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">



            {/* Liquid Water Flow Title Gradient */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 py-2 pb-3 leading-[1.15] max-w-4xl text-transparent animate-pop cursor-default transition-all duration-700 bg-[length:200%_auto] hover:animate-water-flow hover:scale-[1.02] hover:drop-shadow-[0_10px_20px_rgba(10,68,255,0.15)]`}
              style={{
                backgroundImage: `linear-gradient(to right, #0A44FF, #8A56FF, #FF7A2F, #8A56FF, #0A44FF)`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
              }}
            >
              Sensa: AI-Powered Dual-Mode Accessibility & Sensory Assistant
            </h1>

            <p className={`text-base sm:text-lg md:text-xl max-w-3xl mb-10 leading-relaxed font-normal animate-pop ${isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
              Created by IT students from Bulacan State University to make the internet accessible for people with low vision or hearing impairments. It features hands-free voice controls, live AI subtitles, a high-contrast reading guide, and real-time audio capture.
            </p>

            <div className="relative flex items-center justify-center w-full mb-6 animate-pop group">
              {/* Button Ambient Backglow */}
              <div className={`absolute w-[160px] h-[50px] blur-2xl rounded-full bg-gradient-to-r from-[#0A44FF] to-[#FF7A2F] transition-all duration-500 ease-out ${isDark ? 'opacity-40 group-hover:opacity-75 group-hover:scale-110' : 'opacity-30 group-hover:opacity-60 group-hover:scale-110'}`} />

              <a
                href="#guide"
                onClick={(e) => handleNavClick(e, 'guide')}
                className={`relative z-10 inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-bold text-base transition-all duration-300 ease-out active:scale-[0.98] focus:ring-2 focus:ring-offset-2 focus:outline-none no-underline shadow-sm hover:-translate-y-0.5 hover:shadow-xl border ${isDark
                  ? 'bg-[#1C1C1E] hover:bg-[#2C2C2E] border-slate-700/50 text-white focus:ring-[#FF7A2F] focus:ring-offset-[#09090B] hover:border-slate-600'
                  : 'bg-white hover:bg-[#FDFDFD] border-slate-200/80 text-slate-800 focus:ring-[#0A44FF] focus:ring-offset-[#FDFDFD] hover:border-slate-300'
                  }`}
              >
                <ChromeIcon size={22} className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105" />
                <span>Add to Chrome</span>
              </a>
            </div>
          </div>
        </section>

        {/* ======================================================================
          2. THE MISSION (Interactive Infographic)
          ====================================================================== */}
        <section id="problem-solution" className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center scroll-mt-[69px] md:scroll-mt-[71px] py-20 md:py-28 border-t ${isDark ? 'border-slate-800/80' : 'border-slate-200/60'
          }`}>
          {/* Cybernetic Grid Layer */}
          <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)] -z-10" />

          {/* Ambient Mission Gradients */}
          <div className={`absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none -z-10 bg-red-500 animate-pulse ${isDark ? 'opacity-[0.08]' : 'opacity-[0.04]'}`} />
          <div className={`absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none -z-10 bg-emerald-500 animate-pulse ${isDark ? 'opacity-[0.08]' : 'opacity-[0.04]'}`} />

          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
            <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
              <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                The Mission
              </h2>
              <p className={`text-base md:text-xl leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                The modern web was built for the sighted and hearing. Sensa exists to decode the digital divide and tear down accessibility barriers instantly.
              </p>
            </div>

            {/* Infographic Transformation Pipeline */}
            <div ref={problemRef as React.RefObject<HTMLDivElement>} className={`relative w-full flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-0 transition-all duration-[1000ms] transform ${isProblemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>

              <style>{`
                .flow-line-red {
                  stroke-dasharray: 8 8;
                  animation: flow-red 1s linear infinite;
                }
                @keyframes flow-red {
                  from { stroke-dashoffset: 16; }
                  to { stroke-dashoffset: 0; }
                }
                .flow-line-green {
                  stroke-dasharray: 8 8;
                  animation: flow-green 1s linear infinite;
                }
                @keyframes flow-green {
                  from { stroke-dashoffset: 16; }
                  to { stroke-dashoffset: 0; }
                }
              `}</style>

              {/* Column 1: The Roadblocks */}
              <div className="w-full lg:w-[380px] flex flex-col gap-4 z-10">
                <h3 className={`text-xs font-black uppercase tracking-widest text-center mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Problem</h3>

                {/* Visual Problem 1 */}
                <div className={`p-5 md:p-6 rounded-[2rem] border backdrop-blur-md flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 ${isDark ? 'bg-[#1C1C1E] border-slate-800 hover:bg-red-500/5 hover:border-red-500/30 hover:shadow-[0_0_20px_rgba(239,68,68,0.08)]' : 'bg-white border-slate-200 shadow-sm hover:bg-red-50/50 hover:border-red-200 hover:shadow-[0_8px_30px_rgba(239,68,68,0.08)]'}`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'}`}>
                    <MousePointerClick size={24} />
                  </div>
                  <div>
                    <h4 className={`text-base font-bold mb-0.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Hard to Click</h4>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Small buttons are hard to see and click.</p>
                  </div>
                </div>

                {/* Visual Problem 2 */}
                <div className={`p-5 md:p-6 rounded-[2rem] border backdrop-blur-md flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 ${isDark ? 'bg-[#1C1C1E] border-slate-800 hover:bg-red-500/5 hover:border-red-500/30 hover:shadow-[0_0_20px_rgba(239,68,68,0.08)]' : 'bg-white border-slate-200 shadow-sm hover:bg-red-50/50 hover:border-red-200 hover:shadow-[0_8px_30px_rgba(239,68,68,0.08)]'}`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'}`}>
                    <FileText size={24} />
                  </div>
                  <div>
                    <h4 className={`text-base font-bold mb-0.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Screen Clutter</h4>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Too much text confuses screen readers.</p>
                  </div>
                </div>

                {/* Auditory Problem 1 */}
                <div className={`p-5 md:p-6 rounded-[2rem] border backdrop-blur-md flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 ${isDark ? 'bg-[#1C1C1E] border-slate-800 hover:bg-red-500/5 hover:border-red-500/30 hover:shadow-[0_0_20px_rgba(239,68,68,0.08)]' : 'bg-white border-slate-200 shadow-sm hover:bg-red-50/50 hover:border-red-200 hover:shadow-[0_8px_30px_rgba(239,68,68,0.08)]'}`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'}`}>
                    <VolumeX size={24} />
                  </div>
                  <div>
                    <h4 className={`text-base font-bold mb-0.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>No Subtitles</h4>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Many videos don't have captions.</p>
                  </div>
                </div>

                {/* Auditory Problem 2 */}
                <div className={`p-5 md:p-6 rounded-[2rem] border backdrop-blur-md flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 ${isDark ? 'bg-[#1C1C1E] border-slate-800 hover:bg-red-500/5 hover:border-red-500/30 hover:shadow-[0_0_20px_rgba(239,68,68,0.08)]' : 'bg-white border-slate-200 shadow-sm hover:bg-red-50/50 hover:border-red-200 hover:shadow-[0_8px_30px_rgba(239,68,68,0.08)]'}`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'}`}>
                    <BellOff size={24} />
                  </div>
                  <div>
                    <h4 className={`text-base font-bold mb-0.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Missed Sounds</h4>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Hard to hear important notifications.</p>
                  </div>
                </div>
              </div>

              {/* Left Gap SVG Connections */}
              <div className="hidden lg:block flex-1 relative -mx-2 -z-20">
                <svg className="absolute inset-0 w-full h-full overflow-visible opacity-50" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M 0 15 C 50 15 50 50 100 50" fill="none" stroke="rgba(239, 68, 68, 0.6)" strokeWidth="2" vectorEffect="non-scaling-stroke" className="flow-line-red" />
                  <path d="M 0 40 C 50 40 50 50 100 50" fill="none" stroke="rgba(239, 68, 68, 0.6)" strokeWidth="2" vectorEffect="non-scaling-stroke" className="flow-line-red" />
                  <path d="M 0 65 C 50 65 50 50 100 50" fill="none" stroke="rgba(239, 68, 68, 0.6)" strokeWidth="2" vectorEffect="non-scaling-stroke" className="flow-line-red" />
                  <path d="M 0 90 C 50 90 50 50 100 50" fill="none" stroke="rgba(239, 68, 68, 0.6)" strokeWidth="2" vectorEffect="non-scaling-stroke" className="flow-line-red" />
                </svg>
              </div>

              {/* Column 2: The Sensa Protocol (Center Engine) */}
              <div className="relative shrink-0 flex flex-col items-center justify-center z-10 py-10 lg:py-0 w-48">
                {/* Core Node Container for perfect alignment */}
                <div className="relative w-36 h-36 flex items-center justify-center">

                  {/* Soft Ambient Static Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] rounded-full bg-gradient-to-tr from-[#0A44FF]/20 via-[#8A56FF]/20 to-[#FF7A2F]/20 blur-xl pointer-events-none" />

                  {/* Core Node Bubble */}
                  <div className="relative z-10 w-full h-full rounded-full p-[2px] bg-gradient-to-br from-[#0A44FF] via-[#8A56FF] to-[#FF7A2F] shadow-[0_0_20px_rgba(138,86,255,0.2)]">
                    <div className={`w-full h-full rounded-full flex items-center justify-center ${isDark ? 'bg-[#09090B]' : 'bg-white'}`}>
                      <img src={sensaLogo} alt="Sensa" className="w-16 h-16 object-contain drop-shadow-[0_0_12px_rgba(10,68,255,0.3)]" />
                    </div>
                  </div>
                  {/* Title positioned absolutely so it doesn't break flex alignment */}
                  <h3 className={`absolute -bottom-8 text-xl md:text-2xl font-black uppercase tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-[#0A44FF] via-[#8A56FF] to-[#FF7A2F]`}>Sensa</h3>
                </div>
              </div>

              {/* Right Gap SVG Connections */}
              <div className="hidden lg:block flex-1 relative -mx-2 -z-20">
                <svg className="absolute inset-0 w-full h-full overflow-visible opacity-50" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M 0 50 C 50 50 50 15 100 15" fill="none" stroke="rgba(16, 185, 129, 0.6)" strokeWidth="2" vectorEffect="non-scaling-stroke" className="flow-line-green" />
                  <path d="M 0 50 C 50 50 50 40 100 40" fill="none" stroke="rgba(16, 185, 129, 0.6)" strokeWidth="2" vectorEffect="non-scaling-stroke" className="flow-line-green" />
                  <path d="M 0 50 C 50 50 50 65 100 65" fill="none" stroke="rgba(16, 185, 129, 0.6)" strokeWidth="2" vectorEffect="non-scaling-stroke" className="flow-line-green" />
                  <path d="M 0 50 C 50 50 50 90 100 90" fill="none" stroke="rgba(16, 185, 129, 0.6)" strokeWidth="2" vectorEffect="non-scaling-stroke" className="flow-line-green" />
                </svg>
              </div>

              {/* Column 3: The Breakthrough */}
              <div className="w-full lg:w-[380px] flex flex-col gap-4 z-10">
                <h3 className={`text-xs font-black uppercase tracking-widest text-center mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Solution</h3>

                {/* Visual Solution 1 */}
                <div className={`p-5 md:p-6 rounded-[2rem] border backdrop-blur-md flex items-center gap-4 transition-transform hover:-translate-y-1 ${isDark ? 'bg-[#1C1C1E] border-slate-800 hover:border-emerald-500/40 hover:bg-emerald-500/5 hover:shadow-[0_0_20px_rgba(16,185,129,0.08)]' : 'bg-white border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 shadow-sm hover:shadow-[0_8px_30px_rgba(16,185,129,0.08)]'}`}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-emerald-500/10 text-emerald-500">
                    <Mic size={24} />
                  </div>
                  <div>
                    <h4 className={`text-base font-bold mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>Voice Control</h4>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Control the browser with your voice.</p>
                  </div>
                </div>

                {/* Visual Solution 2 */}
                <div className={`p-5 md:p-6 rounded-[2rem] border backdrop-blur-md flex items-center gap-4 transition-transform hover:-translate-y-1 ${isDark ? 'bg-[#1C1C1E] border-slate-800 hover:border-emerald-500/40 hover:bg-emerald-500/5 hover:shadow-[0_0_20px_rgba(16,185,129,0.08)]' : 'bg-white border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 shadow-sm hover:shadow-[0_8px_30px_rgba(16,185,129,0.08)]'}`}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-emerald-500/10 text-emerald-500">
                    <Volume2 size={24} />
                  </div>
                  <div>
                    <h4 className={`text-base font-bold mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>Smart Reader</h4>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Reads only the important text out loud.</p>
                  </div>
                </div>

                {/* Auditory Solution 1 */}
                <div className={`p-5 md:p-6 rounded-[2rem] border backdrop-blur-md flex items-center gap-4 transition-transform hover:-translate-y-1 ${isDark ? 'bg-[#1C1C1E] border-slate-800 hover:border-emerald-500/40 hover:bg-emerald-500/5 hover:shadow-[0_0_20px_rgba(16,185,129,0.08)]' : 'bg-white border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 shadow-sm hover:shadow-[0_8px_30px_rgba(16,185,129,0.08)]'}`}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-emerald-500/10 text-emerald-500">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className={`text-base font-bold mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>Live Multilingual Captions</h4>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Live subtitles for any playing audio.</p>
                  </div>
                </div>

                {/* Auditory Solution 2 */}
                <div className={`p-5 md:p-6 rounded-[2rem] border backdrop-blur-md flex items-center gap-4 transition-transform hover:-translate-y-1 ${isDark ? 'bg-[#1C1C1E] border-slate-800 hover:border-emerald-500/40 hover:bg-emerald-500/5 hover:shadow-[0_0_20px_rgba(16,185,129,0.08)]' : 'bg-white border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 shadow-sm hover:shadow-[0_8px_30px_rgba(16,185,129,0.08)]'}`}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-emerald-500/10 text-emerald-500">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className={`text-base font-bold mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>Visual Radar</h4>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>See color flashes for sounds.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================================
          3. CORE FEATURES SHOWCASE (Dual-Mode Architecture)
          ====================================================================== */}
        <section id="features" className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center scroll-mt-[69px] md:scroll-mt-[71px] py-20 md:py-28 border-t ${isDark ? 'border-slate-800/80' : 'border-slate-200/60'
          }`}>
          {/* Cybernetic Grid Layer */}
          <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)] -z-10" />

          {/* VisualWelcomeOverlay Starter Shade (#0A44FF Royal Blue Behind Visual Mode Cards) */}
          <div className={`absolute top-[28%] left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[420px] rounded-full blur-[160px] pointer-events-none -z-10 bg-[#0A44FF] animate-float-blue ${isDark ? 'opacity-25' : 'opacity-15'
            }`} />

          {/* AuditoryWelcomeOverlay Starter Shade (#FF7A2F Sunset Orange Behind Auditory Mode Cards) */}
          <div className={`absolute top-[75%] right-1/4 translate-x-1/2 -translate-y-1/2 w-[700px] h-[420px] rounded-full blur-[160px] pointer-events-none -z-10 bg-[#FF7A2F] animate-float-orange ${isDark ? 'opacity-25' : 'opacity-15'
            }`} />

          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Core Features Showcase
              </h2>
              <p className={`text-base md:text-lg leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Built specifically for two distinct needs, providing tools for both visual and auditory accessibility in one easy-to-use extension.
              </p>
            </div>

            {/* Visual Mode Showcase (`#0A44FF` Brand Tokens) */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <h3 className={`text-xl md:text-2xl font-black m-0 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  👁️ Visual Mode (For Low-Vision & Blind Users)
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
                {/* Voice Navigation: Spans 2 cols on LG */}
                <article className={`lg:col-span-2 group border border-t-2 border-t-[#0A44FF]/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#0A44FF]/60 hover:shadow-[0_0_40px_rgba(10,68,255,0.15)] relative overflow-hidden ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset' : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset'}`}>
                  {/* Micro-Visual */}
                  {/* Micro-Visual: Sensa VisualDock Mockup */}
                  <div className={`w-full h-40 mb-6 rounded-2xl flex items-center justify-center relative overflow-hidden border transition-colors ${isDark ? 'bg-black/40 border-slate-800 group-hover:border-[#0A44FF]/30' : 'bg-slate-50 border-slate-100 group-hover:border-[#0A44FF]/20'}`}>

                    {/* Floating VisualDock */}
                    <div className="relative flex flex-col items-center gap-3 mt-4 group-hover:-translate-y-2 transition-transform duration-500">

                      {/* Top Voice Panel */}
                      <div className={`flex flex-col items-center p-2.5 gap-2.5 rounded-2xl border shadow-xl backdrop-blur-md transition-colors ${isDark ? 'bg-[#1C1C1E]/80 border-white/10' : 'bg-white/90 border-slate-200/80 shadow-black/5'}`}>

                        {/* GodTierMicIcon (Animated Visualizer) */}
                        <div className="w-10 h-10 rounded-xl bg-transparent flex items-center justify-center gap-1">
                          {[12, 18, 26, 18, 12].map((h, i) => (
                            <div
                              key={i}
                              className={`w-1 rounded-full bg-[#0A44FF] animate-wave-pulse transition-all duration-300 opacity-30 group-hover:opacity-100 group-hover:shadow-[0_0_8px_rgba(10,68,255,0.8)]`}
                              style={{ height: `${h}px`, animationDelay: `${i * 0.15}s` }}
                            />
                          ))}
                        </div>

                        {/* Voice Command Active Button */}
                        <div className="w-10 h-10 rounded-xl bg-[#0A44FF] shadow-[0_0_0_1px_rgba(10,68,255,0.18),0_0_24px_rgba(10,68,255,0.42)] ring-4 ring-[#0A44FF]/30 flex items-center justify-center text-white scale-95 group-hover:scale-100 transition-transform duration-300">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0 opacity-100"><rect x="6" y="6" width="12" height="12" rx="2" /></svg>
                        </div>
                      </div>

                      {/* Middle Panel (Play/Pause) */}
                      <div className={`flex flex-col items-center p-2 rounded-2xl border shadow-xl backdrop-blur-md transition-all duration-500 origin-top delay-75 ${isDark ? 'bg-[#1C1C1E]/80 border-white/10' : 'bg-white/90 border-slate-200/80 shadow-black/5'} opacity-0 scale-75 -translate-y-4 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0`}>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${isDark ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5"><polygon points="6 4 19 12 6 20 6 4" /></svg>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center border ${isDark ? 'bg-[#0A44FF]/15 text-[#6AA2FF] border-[#0A44FF]/30' : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20'}`}>
                        <Mic size={20} />
                      </div>
                      <h3 className={`text-xl md:text-2xl font-bold tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Hands-Free Voice Navigation</h3>
                    </div>
                    <p className={`text-sm md:text-base leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Navigate the web completely hands-free. Simply speak to your browser to scroll pages, open links, and fill out input forms without a mouse or keyboard.
                    </p>
                  </div>
                </article>

                {/* Magnifier: Spans 1 col */}
                <article className={`lg:col-span-1 group border border-t-2 border-t-[#0A44FF]/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#0A44FF]/60 hover:shadow-[0_0_40px_rgba(10,68,255,0.15)] relative overflow-hidden ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset' : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset'}`}>
                  {/* Micro-Visual: Sensa Screen Magnifier Mockup */}
                  <div className={`w-full h-36 mb-6 rounded-2xl flex flex-col items-center justify-center p-4 relative overflow-hidden border transition-colors ${isDark ? 'bg-black/40 border-slate-800 group-hover:border-[#0A44FF]/30' : 'bg-slate-50 border-slate-100 group-hover:border-[#0A44FF]/20'}`}>

                    {/* Background Text */}
                    <div className="w-full space-y-2 opacity-30 px-2 blur-[1px]">
                      <div className="w-3/4 h-2 bg-slate-500 rounded" />
                      <div className="w-full h-2 bg-slate-500 rounded" />
                      <div className="w-5/6 h-2 bg-slate-500 rounded" />
                      <div className="w-4/5 h-2 bg-slate-500 rounded" />
                    </div>

                    {/* Circular Lens Overlay */}
                    <div className="absolute w-20 h-20 rounded-full border-[3.5px] border-[#0A44FF] shadow-[0_24px_64px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.2)] bg-white dark:bg-[#1C1C1E] z-10 overflow-hidden flex flex-col items-center justify-center p-2 transform group-hover:scale-110 transition-transform duration-300 pointer-events-none group-hover:translate-x-2 group-hover:-translate-y-1">
                      {/* Scaled up text inside lens to simulate magnification */}
                      <div className="w-[200%] space-y-3 opacity-90 scale-150 transform -translate-x-1 translate-y-1">
                        <div className={`w-full h-2 rounded ${isDark ? 'bg-slate-300' : 'bg-slate-700'}`} />
                        <div className={`w-5/6 h-2 rounded ${isDark ? 'bg-slate-300' : 'bg-slate-700'}`} />
                      </div>
                    </div>

                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center border ${isDark ? 'bg-[#0A44FF]/15 text-[#6AA2FF] border-[#0A44FF]/30' : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20'}`}>
                        <Maximize2 size={20} />
                      </div>
                      <h3 className={`text-xl font-bold tracking-[-0.01em] leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>Screen Magnifier & Ruler</h3>
                    </div>
                    <p className={`text-sm leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Focus on one line at a time. Our bright reading ruler guides your eyes so you don't lose your place.
                    </p>
                  </div>
                </article>

                {/* Alt-Text AI Reader: Spans 1 col */}
                <article className={`lg:col-span-1 group border border-t-2 border-t-[#0A44FF]/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#0A44FF]/60 hover:shadow-[0_0_40px_rgba(10,68,255,0.15)] relative overflow-hidden ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset' : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset'}`}>
                  {/* Micro-Visual: Sensa AI Image Alt-Text Mockup */}
                  <div className={`w-full h-36 mb-6 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden border transition-colors ${isDark ? 'bg-black/40 border-slate-800 group-hover:border-[#0A44FF]/30' : 'bg-slate-50 border-slate-100 group-hover:border-[#0A44FF]/20'}`}>
                    {/* Web Page Image Mockup */}
                    <div className="w-24 h-24 bg-slate-300 dark:bg-slate-700 rounded-lg flex items-center justify-center relative overflow-visible transition-all duration-500 group-hover:border-4 group-hover:border-[#0A44FF] group-hover:shadow-[0_0_20px_rgba(10,68,255,0.4)]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-slate-400 dark:text-slate-500"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>

                      {/* Sensa Alt-Text Tooltip */}
                      <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1.5 rounded-md text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300 transform translate-y-2 group-hover:translate-y-0 ${isDark ? 'bg-[#1C1C1E] border border-white/10 text-white shadow-[0_4px_12px_rgba(0,0,0,0.5)]' : 'bg-white border border-slate-200 text-slate-800 shadow-lg'}`}>
                        <div className="flex items-center gap-1.5">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#0A44FF]"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" /></svg>
                          "A golden retriever running in a park"
                        </div>
                      </div>

                      {/* Corner Highlight Dots */}
                      <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#0A44FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
                      <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#0A44FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center border ${isDark ? 'bg-[#0A44FF]/15 text-[#6AA2FF] border-[#0A44FF]/30' : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20'}`}>
                        <Volume2 size={20} />
                      </div>
                      <h3 className={`text-xl font-bold tracking-[-0.01em] leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>Image Alt-Text AI Reader</h3>
                    </div>
                    <p className={`text-sm leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Hear what's on screen. Sensa reads unlabelled images automatically.
                    </p>
                  </div>
                </article>

                {/* Typography: Spans 2 cols */}
                <article className={`lg:col-span-2 group border border-t-2 border-t-[#0A44FF]/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#0A44FF]/60 hover:shadow-[0_0_40px_rgba(10,68,255,0.15)] relative overflow-hidden ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset' : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset'}`}>
                  {/* Micro-Visual */}
                  <div className={`w-full h-36 mb-6 rounded-2xl flex items-center justify-center p-6 border transition-colors ${isDark ? 'bg-black/40 border-slate-800 group-hover:border-[#0A44FF]/30' : 'bg-slate-50 border-slate-100 group-hover:border-[#0A44FF]/20'}`}>
                    <div className="flex items-center gap-8 md:gap-16 text-3xl md:text-5xl font-bold">
                      <span className="font-sans opacity-20 group-hover:opacity-100 group-hover:text-[#0A44FF] transition-all duration-500 scale-90 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(10,68,255,0.4)]">Aa</span>
                      <span className="font-serif opacity-20 group-hover:opacity-100 group-hover:text-[#0A44FF] transition-all duration-500 delay-100 scale-90 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(10,68,255,0.4)]">Aa</span>
                      <span className="font-mono opacity-20 group-hover:opacity-100 group-hover:text-[#0A44FF] transition-all duration-500 delay-200 scale-90 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(10,68,255,0.4)]">Aa</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center border ${isDark ? 'bg-[#0A44FF]/15 text-[#6AA2FF] border-[#0A44FF]/30' : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20'}`}>
                        <FileText size={20} />
                      </div>
                      <h3 className={`text-xl md:text-2xl font-bold tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Customizable Typography & Autoscroll</h3>
                    </div>
                    <p className={`text-sm md:text-base leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Make any webpage comfortable to read. Instantly transition sites into high-contrast themes, switch to accessible fonts, and set automatic scrolling.
                    </p>
                  </div>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
                {/* Live Captions: Spans 2 cols */}
                <article className={`md:col-span-2 group border border-t-2 border-t-[#FF7A2F]/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#FF7A2F]/60 hover:shadow-[0_0_40px_rgba(255,122,47,0.15)] relative overflow-hidden ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset' : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset'}`}>
                  {/* Micro-Visual */}
                  <div className={`w-full h-40 mb-6 rounded-2xl flex items-end justify-center p-4 relative overflow-hidden border transition-colors ${isDark ? 'bg-black/40 border-slate-800 group-hover:border-[#FF7A2F]/30' : 'bg-slate-50 border-slate-100 group-hover:border-[#FF7A2F]/20'}`}>
                    {/* Background Stage */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FF7A2F]/5 z-10" />
                    {/* Mock Browser Video */}
                    <div className="absolute top-4 left-4 right-4 bottom-[-10px] rounded-xl bg-slate-900 overflow-hidden border-2 border-slate-700/50 flex flex-col justify-between pb-4 shadow-2xl">
                      <div className="w-full h-8 bg-slate-800/80 border-b border-slate-700 flex items-center px-3 gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      </div>
                      {/* Captions Box (Mocking LiveCaptionBox.tsx) */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-[#1a1a1c]/95 rounded-xl px-4 py-3 backdrop-blur-md z-20 shadow-[0_12px_40px_rgba(0,0,0,0.8)] border border-white/10 flex flex-col gap-2 transform group-hover:scale-105 transition-transform duration-500">

                        {/* langBadge */}
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FF7A2F]/15 border border-[#FF7A2F]/35 self-start -mt-6">
                          <span className="w-2 h-2 rounded-full bg-[#FF7A2F] shadow-[0_0_8px_#FF7A2F]" />
                          <span className="text-[10px] font-semibold text-[#FF9F0A] tracking-wider uppercase">English audio</span>
                        </div>

                        {/* Original Text (Dimmed, Italic) */}
                        <div className="text-white/60 text-xs italic font-medium mt-1">
                          Welcome to the digital accessibility revolution.
                        </div>

                        {/* Translated Text (Bright, Bold, Typewriter effect) */}
                        <div className="text-white text-sm font-bold tracking-tight">
                          <span className="animate-typewriter inline-block whitespace-nowrap overflow-hidden border-r-2 border-[#FF7A2F] pr-1">Bienvenido a la revolución de la accesibilidad...</span>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center border ${isDark ? 'bg-[#FF7A2F]/15 text-[#FFC09B] border-[#FF7A2F]/30' : 'bg-[#FF7A2F]/10 text-[#FF7A2F] border-[#FF7A2F]/20'}`}>
                        <Ear size={20} />
                      </div>
                      <h3 className={`text-xl md:text-2xl font-bold tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Live Multilingual AI Captions</h3>
                    </div>
                    <p className={`text-sm md:text-base leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Real-time captions on any browser tab. Generate instant subtitles for video lectures, webinars, and podcasts with seamless live translation across multiple languages.
                    </p>
                  </div>
                </article>

                {/* Web Audio API Analyser: Spans 1 col */}
                <article className={`md:col-span-1 group border border-t-2 border-t-[#FF7A2F]/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#FF7A2F]/60 hover:shadow-[0_0_40px_rgba(255,122,47,0.15)] relative overflow-hidden ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset' : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset'}`}>
                  {/* Micro-Visual */}
                  <div className={`w-full h-36 mb-6 rounded-2xl flex items-center justify-center gap-2 md:gap-3 p-4 relative overflow-hidden border transition-colors ${isDark ? 'bg-black/40 border-slate-800 group-hover:border-[#FF7A2F]/30' : 'bg-slate-50 border-slate-100 group-hover:border-[#FF7A2F]/20'}`}>
                    {[40, 85, 50, 90, 60, 45].map((height, i) => (
                      <div key={i} className={`w-4 md:w-5 rounded-full bg-gradient-to-t from-[#FF7A2F] to-[#FFA066] animate-wave-pulse shadow-[0_0_12px_rgba(255,122,47,0.6)] opacity-30 group-hover:opacity-100 transition-opacity duration-300`} style={{ height: `${height}%`, animationDelay: `${i * 0.12}s` }} />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center border ${isDark ? 'bg-[#FF7A2F]/15 text-[#FFC09B] border-[#FF7A2F]/30' : 'bg-[#FF7A2F]/10 text-[#FF7A2F] border-[#FF7A2F]/20'}`}>
                        <Zap size={20} />
                      </div>
                      <h3 className={`text-xl font-bold tracking-[-0.01em] leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>Web Audio Visualizer</h3>
                    </div>
                    <p className={`text-sm leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      See sound as it happens. Our visual audio meters turn sounds into moving bars.
                    </p>
                  </div>
                </article>

                {/* Alerts: Spans 1 col */}
                <article className={`md:col-span-1 group border border-t-2 border-t-[#FF7A2F]/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#FF7A2F]/60 hover:shadow-[0_0_40px_rgba(255,122,47,0.15)] relative overflow-hidden ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset' : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset'}`}>
                  {/* Micro-Visual */}
                  <div className={`w-full h-36 mb-6 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden border transition-colors ${isDark ? 'bg-black/40 border-slate-800 group-hover:border-[#FF7A2F]/30' : 'bg-slate-50 border-slate-100 group-hover:border-[#FF7A2F]/20'}`}>
                    {/* Simulated Screen with Edge Flash */}
                    <div className="relative w-32 h-20 bg-slate-900 rounded-lg border border-slate-700 overflow-hidden group-hover:border-[#FF7A2F]/70 transition-colors duration-500 shadow-xl">
                      <div className="absolute inset-0 bg-transparent group-hover:bg-[#FF7A2F]/10 transition-colors duration-500" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[inset_0_0_24px_#FF7A2F]" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <CheckCircle2 size={24} className="text-slate-500 group-hover:text-[#FF7A2F] transition-colors duration-300 drop-shadow-[0_0_8px_rgba(255,122,47,0.8)]" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center border ${isDark ? 'bg-[#FF7A2F]/15 text-[#FFC09B] border-[#FF7A2F]/30' : 'bg-[#FF7A2F]/10 text-[#FF7A2F] border-[#FF7A2F]/20'}`}>
                        <CheckCircle2 size={20} />
                      </div>
                      <h3 className={`text-xl font-bold tracking-[-0.01em] leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>Sensory Noise Warnings</h3>
                    </div>
                    <p className={`text-sm leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Subtle visual alerts on the edges of your screen for sudden audio notifications.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================================
          4. CAPSTONE DEMO VIDEO SECTION
          ====================================================================== */}
        <section id="video" className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center scroll-mt-[69px] md:scroll-mt-[71px] py-20 md:py-28 border-y ${isDark ? 'border-slate-800/80' : 'border-slate-200/80'
          }`}>
          {/* Cybernetic Grid Layer */}
          <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)] -z-10" />

          {/* Cinematic Stage Spotlight */}
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] blur-[120px] pointer-events-none -z-10 bg-gradient-to-b from-[#8B5CF6]/40 to-transparent ${isDark ? 'opacity-40' : 'opacity-20'}`} />
          {/* Video Ambient Center Halo Layer */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] rounded-full blur-[160px] pointer-events-none -z-10 bg-[#0A44FF] animate-pulse ${isDark ? 'opacity-15' : 'opacity-[0.06]'}`} />

          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Watch Sensa in Action
              </h2>
              <p className={`text-base md:text-lg leading-relaxed font-normal mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                See our accessibility tools in action. Watch how our real-time voice controls and high-contrast reading tools work together.
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
        <PlaygroundSection isDark={isDark} />

        {/* ======================================================================
          6. INSTALLATION & USER GUIDE (Walkthrough)
          ====================================================================== */}
        <section id="guide" className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center scroll-mt-[69px] md:scroll-mt-[71px] py-20 md:py-28 border-t ${isDark ? 'border-slate-800/80' : 'border-slate-200/60'
          }`}>
          {/* Cybernetic Grid Layer */}
          <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)] -z-10" />

          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Installation & User Walkthrough
              </h2>
              <p className={`text-base md:text-lg leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Start using Sensa on any Google Chrome browser in 3 simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              {/* Column 1: Quick Installation */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg ${isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                    <Download size={24} />
                  </div>
                  <h3 className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Part 1: Quick Installation
                  </h3>
                </div>

                {/* Step 1 */}
                <article className={`border rounded-2xl p-6 transition-all duration-300 ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset' : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset shadow-sm'}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-8 h-8 rounded-full bg-purple-500/15 text-purple-500 font-bold flex items-center justify-center border border-purple-500/30 shrink-0">1</span>
                    <h4 className={`text-lg font-bold m-0 ${isDark ? 'text-white' : 'text-slate-900'}`}>Add to Chrome</h4>
                  </div>
                  <p className={`text-sm leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Navigate to the Chrome Web Store and click <strong>Add to Chrome</strong>. Sensa installs in seconds and is completely free.
                  </p>
                </article>

                {/* Step 2 */}
                <article className={`border rounded-2xl p-6 transition-all duration-300 ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset' : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset shadow-sm'}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-8 h-8 rounded-full bg-purple-500/15 text-purple-500 font-bold flex items-center justify-center border border-purple-500/30 shrink-0">2</span>
                    <h4 className={`text-lg font-bold m-0 ${isDark ? 'text-white' : 'text-slate-900'}`}>Pin the Extension</h4>
                  </div>
                  <p className={`text-sm leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Click the puzzle icon in your Chrome toolbar and pin Sensa so it's always accessible when you need it on any webpage.
                  </p>
                </article>

                {/* Step 3 */}
                <article className={`border rounded-2xl p-6 transition-all duration-300 ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset' : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset shadow-sm'}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-8 h-8 rounded-full bg-purple-500/15 text-purple-500 font-bold flex items-center justify-center border border-purple-500/30 shrink-0">3</span>
                    <h4 className={`text-lg font-bold m-0 ${isDark ? 'text-white' : 'text-slate-900'}`}>Allow Permissions</h4>
                  </div>
                  <p className={`text-sm leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Sensa requires microphone permissions for Voice Commands and tab audio capture for Live Captions. Grant access when prompted.
                  </p>
                </article>
              </div>

              {/* Column 2: User Walkthrough */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg ${isDark ? 'bg-[#0A44FF]/20 text-[#6AA2FF]' : 'bg-[#0A44FF]/10 text-[#0A44FF]'}`}>
                    <MonitorPlay size={24} />
                  </div>
                  <h3 className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Part 2: User Walkthrough
                  </h3>
                </div>

                {/* Step 1 */}
                <article className={`border rounded-2xl p-6 transition-all duration-300 ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset' : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset shadow-sm'}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`w-8 h-8 rounded-full font-bold flex items-center justify-center border shrink-0 ${isDark ? 'bg-[#0A44FF]/15 text-[#6AA2FF] border-[#0A44FF]/30' : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20'}`}>1</span>
                    <h4 className={`text-lg font-bold m-0 ${isDark ? 'text-white' : 'text-slate-900'}`}>Voice Onboarding</h4>
                  </div>
                  <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Click the Sensa icon in your toolbar to open the Welcome popup. You will be prompted to grant Microphone permissions for voice commands and AI Captions. Speak <strong>"Activate Visual Mode"</strong> or <strong>"Activate Auditory Mode"</strong> to proceed.
                  </p>
                  <div className={`w-full h-24 rounded-xl flex items-center justify-center border ${isDark ? 'bg-black/40 border-slate-800' : 'bg-slate-50 border-slate-200/80'}`}>
                    <div className="flex flex-col items-center gap-2">
                      <Mic size={24} className={isDark ? 'text-[#6AA2FF]' : 'text-[#0A44FF]'} />
                      <span className={`text-xs font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Listening for mode selection...</span>
                    </div>
                  </div>
                </article>

                {/* Step 2 */}
                <article className={`border rounded-2xl p-6 transition-all duration-300 ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset' : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset shadow-sm'}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`w-8 h-8 rounded-full font-bold flex items-center justify-center border shrink-0 ${isDark ? 'bg-[#0A44FF]/15 text-[#6AA2FF] border-[#0A44FF]/30' : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20'}`}>2</span>
                    <h4 className={`text-lg font-bold m-0 ${isDark ? 'text-white' : 'text-slate-900'}`}>Interact with the Docks</h4>
                  </div>
                  <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Depending on your mode, Sensa will inject a floating glassmorphic dock into your web pages.
                  </p>
                  <ul className={`text-sm space-y-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 shrink-0 text-[#0A44FF]">👁️</span>
                      <span><strong>Visual Mode:</strong> Use the dock to adjust TTS reading speeds, activate the screen magnifier, or toggle the high-contrast Focus Ruler.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 shrink-0 text-[#FF7A2F]">🦻</span>
                      <span><strong>Auditory Mode:</strong> Sensa automatically starts capturing tab audio. The dock will display the Live Caption box and allow you to select your target translation language.</span>
                    </li>
                  </ul>
                </article>

              </div>
            </div>
          </div>
        </section>

        {/* ======================================================================
          7. ABOUT THE CAPSTONE RESEARCH TEAM
          ====================================================================== */}
        <section id="team" className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center scroll-mt-[69px] md:scroll-mt-[71px] py-20 md:py-28 border-t ${isDark ? 'border-slate-800/80' : 'border-slate-200/60'
          }`}>
          {/* Cybernetic Grid Layer */}
          <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)] -z-10" />

          {/* Stage Spotlight Glow */}
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] blur-[120px] pointer-events-none -z-10 bg-gradient-to-b from-[#0A44FF]/30 to-transparent ${isDark ? 'opacity-40' : 'opacity-10'}`} />

          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0A44FF] dark:text-[#6AA2FF] mb-2 block">
                Bulacan State University (BulSU) • CICT Capstone Project 2026
              </span>
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Meet the Researchers & Engineers
              </h2>
              <p className={`text-base md:text-lg leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                A group of dedicated IT students building accessible web tools to eliminate digital roadblocks for everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {/* Shane */}
              <article className={`border rounded-2xl p-6 flex flex-col items-center text-center justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset hover:border-[#0A44FF]/60 hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset hover:border-[#0A44FF]/60 hover:bg-slate-50/80'
                }`}>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#0A44FF] to-purple-600 flex items-center justify-center text-white font-black text-xl mb-4 shadow-lg shadow-[#0A44FF]/30">
                    ST
                  </div>
                  <h3 className={`text-base font-bold m-0 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Robert Shanedion Tantoco</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider border my-1 ${isDark ? 'bg-[#0A44FF]/15 text-[#6AA2FF] border-[#0A44FF]/30' : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20'
                    }`}>
                    Graphics Designer & Video Editor
                  </span>
                  <p className={`text-xs leading-relaxed m-0 mt-3 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Created the project's visual design, edited the demonstration videos, and made the high-contrast graphics.
                  </p>
                </div>
                <div className={`w-full mt-6 pt-4 border-t flex items-center justify-center gap-5 ${isDark ? 'border-slate-800/80' : 'border-slate-100'}`}>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-1 transition-transform duration-300 hover:-translate-y-1 hover:scale-110">
                    <LinkedInIcon />
                  </a>
                  <a href="mailto:robertshanedion.tantoco@bulsu.edu.ph" className="p-1 transition-transform duration-300 hover:-translate-y-1 hover:scale-110">
                    <GmailIcon />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-1 transition-transform duration-300 hover:-translate-y-1 hover:scale-110">
                    <GitHubIcon isDark={isDark} />
                  </a>
                </div>
              </article>

              {/* Christian */}
              <article className={`border rounded-2xl p-6 flex flex-col items-center text-center justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset hover:border-[#FF7A2F]/60 hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset hover:border-[#FF7A2F]/60 hover:bg-slate-50/80'
                }`}>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#FF7A2F] to-amber-600 flex items-center justify-center text-white font-black text-xl mb-4 shadow-lg shadow-[#FF7A2F]/30">
                    CA
                  </div>
                  <h3 className={`text-base font-bold m-0 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Christian Adriano</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider border my-1 ${isDark ? 'bg-[#FF7A2F]/15 text-[#FFC09B] border-[#FF7A2F]/30' : 'bg-[#FF7A2F]/10 text-[#FF7A2F] border-[#FF7A2F]/20'
                    }`}>
                    Documentation & Research Paper
                  </span>
                  <p className={`text-xs leading-relaxed m-0 mt-3 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Wrote the main research paper, handled the project documentation, and conducted the literature review.
                  </p>
                </div>
                <div className={`w-full mt-6 pt-4 border-t flex items-center justify-center gap-5 ${isDark ? 'border-slate-800/80' : 'border-slate-100'}`}>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-1 transition-transform duration-300 hover:-translate-y-1 hover:scale-110">
                    <LinkedInIcon />
                  </a>
                  <a href="mailto:christian.adriano@bulsu.edu.ph" className="p-1 transition-transform duration-300 hover:-translate-y-1 hover:scale-110">
                    <GmailIcon />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-1 transition-transform duration-300 hover:-translate-y-1 hover:scale-110">
                    <GitHubIcon isDark={isDark} />
                  </a>
                </div>
              </article>

              {/* Leo */}
              <article className={`border rounded-2xl p-6 flex flex-col items-center text-center justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset hover:border-[#0A44FF]/60 hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset hover:border-[#0A44FF]/60 hover:bg-slate-50/80'
                }`}>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#0A44FF] to-cyan-500 flex items-center justify-center text-white font-black text-xl mb-4 shadow-lg shadow-[#0A44FF]/30">
                    LD
                  </div>
                  <h3 className={`text-base font-bold m-0 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Leo Lorenzo Dela Cruz</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider border my-1 ${isDark ? 'bg-[#0A44FF]/15 text-[#6AA2FF] border-[#0A44FF]/30' : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20'
                    }`}>
                    QA & Usability Tester
                  </span>
                  <p className={`text-xs leading-relaxed m-0 mt-3 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Tested the extension to make sure it works well, checked for accessibility compliance, and reported bugs.
                  </p>
                </div>
                <div className={`w-full mt-6 pt-4 border-t flex items-center justify-center gap-5 ${isDark ? 'border-slate-800/80' : 'border-slate-100'}`}>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-1 transition-transform duration-300 hover:-translate-y-1 hover:scale-110">
                    <LinkedInIcon />
                  </a>
                  <a href="mailto:leolorenzo.delacruz@bulsu.edu.ph" className="p-1 transition-transform duration-300 hover:-translate-y-1 hover:scale-110">
                    <GmailIcon />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-1 transition-transform duration-300 hover:-translate-y-1 hover:scale-110">
                    <GitHubIcon isDark={isDark} />
                  </a>
                </div>
              </article>

              {/* Russell */}
              <article className={`border rounded-2xl p-6 flex flex-col items-center text-center justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset hover:border-[#FF7A2F]/60 hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset hover:border-[#FF7A2F]/60 hover:bg-slate-50/80'
                }`}>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#FF7A2F] to-rose-500 flex items-center justify-center text-white font-black text-xl mb-4 shadow-lg shadow-[#FF7A2F]/30">
                    JS
                  </div>
                  <h3 className={`text-base font-bold m-0 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>John Russell Sta.Ana</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider border my-1 ${isDark ? 'bg-[#FF7A2F]/15 text-[#FFC09B] border-[#FF7A2F]/30' : 'bg-[#FF7A2F]/10 text-[#FF7A2F] border-[#FF7A2F]/20'
                    }`}>
                    Project Manager
                  </span>
                  <p className={`text-xs leading-relaxed m-0 mt-3 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Managed the project timeline, organized team tasks, and made sure all requirements for the capstone were met on time.
                  </p>
                </div>
                <div className={`w-full mt-6 pt-4 border-t flex items-center justify-center gap-5 ${isDark ? 'border-slate-800/80' : 'border-slate-100'}`}>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-1 transition-transform duration-300 hover:-translate-y-1 hover:scale-110">
                    <LinkedInIcon />
                  </a>
                  <a href="mailto:johnrussell.staana@bulsu.edu.ph" className="p-1 transition-transform duration-300 hover:-translate-y-1 hover:scale-110">
                    <GmailIcon />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-1 transition-transform duration-300 hover:-translate-y-1 hover:scale-110">
                    <GitHubIcon isDark={isDark} />
                  </a>
                </div>
              </article>

              {/* Kian */}
              <article className={`border rounded-2xl p-6 flex flex-col items-center text-center justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md ${isDark ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset hover:border-[#0A44FF]/60 hover:bg-white/[0.03]' : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset hover:border-[#0A44FF]/60 hover:bg-slate-50/80'
                }`}>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#0A44FF] to-emerald-500 flex items-center justify-center text-white font-black text-xl mb-4 shadow-lg shadow-[#0A44FF]/30">
                    KA
                  </div>
                  <h3 className={`text-base font-bold m-0 tracking-[-0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>Kian Davey Antolin</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider border my-1 ${isDark ? 'bg-[#0A44FF]/15 text-[#6AA2FF] border-[#0A44FF]/30' : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20'
                    }`}>
                    Developer
                  </span>
                  <p className={`text-xs leading-relaxed m-0 mt-3 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Built the main Chrome extension, developed the Node.js backend server, and website.
                  </p>
                </div>
                <div className={`w-full mt-6 pt-4 border-t flex items-center justify-center gap-5 ${isDark ? 'border-slate-800/80' : 'border-slate-100'}`}>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-1 transition-transform duration-300 hover:-translate-y-1 hover:scale-110">
                    <LinkedInIcon />
                  </a>
                  <a href="mailto:kiandavey.antolin@bulsu.edu.ph" className="p-1 transition-transform duration-300 hover:-translate-y-1 hover:scale-110">
                    <GmailIcon />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-1 transition-transform duration-300 hover:-translate-y-1 hover:scale-110">
                    <GitHubIcon isDark={isDark} />
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
      <footer className={`relative overflow-hidden w-full scroll-mt-[69px] md:scroll-mt-[71px] border-t py-12 md:py-16 ${isDark ? 'bg-[#121214] border-slate-800' : 'bg-[#F4F5F7] border-slate-200/80'
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
    </div>
  );
}
