import { useState, useEffect, useRef } from 'react';
import { Target, Sparkles, MonitorPlay, Download, ShieldAlert, Users } from 'lucide-react';

import Navbar, { type NavItem } from './components/Navbar';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import FeaturesSection from './components/FeaturesSection';
import DemoSection from './components/DemoSection';
import ScopeSection from './components/ScopeSection';
import GuideSection from './components/GuideSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

type ThemeMode = 'dark' | 'light';

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
    const sectionIds = ['hero', 'problem-solution', 'features', 'video', 'scope', 'guide', 'team'];
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScrollingRef.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection((prev) => (prev !== entry.target.id ? entry.target.id : prev));
          }
        });
      },
      {
        rootMargin: '-30% 0px -30% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems: NavItem[] = [
    { href: '#problem-solution', id: 'problem-solution', label: 'Mission', icon: Target },
    { href: '#features', id: 'features', label: 'Features', icon: Sparkles },
    { href: '#video', id: 'video', label: 'Demo', icon: MonitorPlay },
    { href: '#scope', id: 'scope', label: 'Scope', icon: ShieldAlert },
    { href: '#guide', id: 'guide', label: 'Install', icon: Download },
    { href: '#team', id: 'team', label: 'Team', icon: Users },
  ];

  return (
    <div
      className={`min-h-screen font-sans relative overflow-x-hidden selection:bg-[#0A44FF] selection:text-white ${isDark ? 'bg-[#09090B] text-slate-200' : 'bg-[#FDFDFD] text-slate-900'
        }`}
    >
      {/* Skip to Main Content Bypass Link (WCAG 2.4.1 Level AA/AAA) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-6 focus:py-3 focus:bg-[#0A44FF] focus:text-white focus:font-bold focus:rounded-xl focus:shadow-2xl focus:ring-4 focus:ring-yellow-400 transition-all no-underline"
      >
        Skip to main content
      </a>

      {/* Global Ambient Background Orbs */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,#000_50%,transparent_100%)]" />
        <div className="absolute inset-0 bg-dot-pattern opacity-80" />
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-[900px] md:w-[1200px] h-[500px] rounded-full blur-[140px] bg-gradient-to-b from-[#0A44FF] via-[#8B5CF6] to-transparent gpu-accelerate ${isDark ? 'opacity-25' : 'opacity-15'
            }`}
        />
        <div
          className={`absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full blur-[110px] bg-[#0A44FF] gpu-accelerate ${isDark ? 'opacity-25' : 'opacity-15'
            }`}
        />
        <div
          className={`absolute -bottom-32 -right-32 w-[550px] h-[550px] rounded-full blur-[110px] bg-[#FF7A2F] gpu-accelerate ${isDark ? 'opacity-25' : 'opacity-15'
            }`}
        />
      </div>

      {/* Navigation Header */}
      <Navbar
        isDark={isDark}
        setTheme={setTheme}
        isSidebarMode={isSidebarMode}
        setIsSidebarMode={setIsSidebarMode}
        navItems={navItems}
        activeSection={activeSection}
        handleNavClick={handleNavClick}
      />

      {/* Main Page Content */}
      <main id="main-content" role="main" className="w-full">
        <HeroSection isDark={isDark} handleNavClick={handleNavClick} />
        <MissionSection isDark={isDark} problemRef={problemRef as React.RefObject<HTMLDivElement>} isProblemVisible={isProblemVisible} />
        <FeaturesSection isDark={isDark} />
        <DemoSection isDark={isDark} />
        <ScopeSection isDark={isDark} />
        <GuideSection isDark={isDark} />
        <TeamSection isDark={isDark} />
      </main>

      {/* Footer */}
      <Footer isDark={isDark} handleNavClick={handleNavClick} />
    </div>
  );
}
