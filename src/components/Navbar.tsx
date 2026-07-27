import { useState } from 'react';
import { Sun, Moon, PanelLeft, PanelTop, Menu, X } from 'lucide-react';
import sensaLogo from '../assets/Sensa-Logo.png';

export interface NavItem {
  href: string;
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface NavbarProps {
  isDark: boolean;
  setTheme: (theme: 'light' | 'dark') => void;
  isSidebarMode: boolean;
  setIsSidebarMode: (mode: boolean) => void;
  navItems: NavItem[];
  activeSection: string;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

export default function Navbar({
  isDark,
  setTheme,
  isSidebarMode,
  setIsSidebarMode,
  navItems,
  activeSection,
  handleNavClick,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setIsMobileMenuOpen(false);
    handleNavClick(e, targetId);
  };

  return (
    <>
      {/* TOP NAVBAR (Horizontal) */}
      <header
        className={`fixed top-3 left-3 right-3 md:top-6 md:left-1/2 z-50 w-[calc(100%-24px)] md:w-[calc(100%-64px)] md:max-w-7xl backdrop-blur-xl border py-2.5 md:py-3.5 px-4 md:px-8 rounded-3xl md:rounded-full shadow-lg transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isSidebarMode
            ? 'lg:-translate-y-[150%] lg:opacity-0 lg:pointer-events-none md:-translate-x-1/2'
            : 'translate-y-0 opacity-100 md:-translate-x-1/2'
        } ${
          isDark
            ? 'bg-[#1C1C1E]/70 border-white/10 ring-1 ring-white/5 ring-inset shadow-black/50'
            : 'bg-white/70 border-slate-200/80 ring-1 ring-black/5 ring-inset shadow-slate-200/50'
        }`}
      >
        <div className="w-full flex items-center justify-between gap-2 md:gap-8">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="flex items-center gap-2 md:gap-3.5 no-underline group shrink-0 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A44FF] rounded-lg"
          >
            <img
              src={sensaLogo}
              alt="Sensa Logo"
              className="w-9 h-9 md:w-[38px] md:h-[38px] object-contain drop-shadow-[0_0_14px_rgba(10,68,255,0.55)] group-hover:scale-105 transition-transform duration-300 shrink-0"
            />
            <span
              className={`text-xl md:text-[28px] font-black tracking-[-0.03em] leading-none translate-y-[-1px] transition-colors duration-200 ${
                isDark ? 'text-white group-hover:text-[#FF7A2F]' : 'text-slate-900 group-hover:text-[#0A44FF]'
              }`}
            >
              Sensa
            </span>
          </a>

          <nav aria-label="Main Navigation" className="hidden xl:flex items-center justify-center flex-1 mx-2 xl:mx-4 2xl:mx-8">
            <ul
              className={`flex items-center justify-center gap-2 lg:gap-3 xl:gap-5 2xl:gap-10 w-full list-none m-0 p-0 text-xs font-mono font-bold uppercase tracking-widest ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {navItems.map((item) => {
                const isSelected = activeSection === item.id;
                return (
                  <li key={item.id} className="relative py-1">
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.id)}
                      aria-current={isSelected ? 'page' : undefined}
                      className={`relative py-1.5 px-3 transition-colors duration-200 group no-underline block whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A44FF] rounded-md ${
                        isSelected
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
                        className={`absolute left-0 bottom-0 h-[2px] w-full rounded-full transition-all duration-300 ease-out ${
                          isSelected
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

          <div className="flex items-center gap-2 shrink-0">
            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`flex xl:hidden p-2 rounded-full border backdrop-blur-md transition-all duration-300 ${
                isDark
                  ? 'bg-[#24262B]/80 border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white'
                  : 'bg-slate-100/80 border-slate-200/60 hover:bg-slate-200 text-slate-500 hover:text-slate-900'
              }`}
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMobileMenuOpen ? <X size={16} aria-hidden="true" /> : <Menu size={16} aria-hidden="true" />}
            </button>
            <button
              onClick={() => setIsSidebarMode(true)}
              className={`hidden xl:flex mr-4 p-2 rounded-full border backdrop-blur-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A44FF] ${
                isDark
                  ? 'bg-[#24262B]/80 border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white'
                  : 'bg-slate-100/80 border-slate-200/60 hover:bg-slate-200 text-slate-500 hover:text-slate-900'
              }`}
              title="Switch to Sidebar Layout"
              aria-label="Switch to Sidebar Layout"
            >
              <PanelLeft size={16} aria-hidden="true" />
            </button>
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              role="switch"
              aria-checked={isDark}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className={`flex items-center justify-center w-9 h-9 rounded-full border backdrop-blur-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A44FF] ${
                isDark
                  ? 'bg-[#24262B]/80 border-slate-800 hover:bg-slate-800 text-[#FF7A2F]'
                  : 'bg-slate-100/80 border-slate-200/60 hover:bg-slate-200 text-[#0A44FF]'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <div className="relative w-4 h-4 flex items-center justify-center">
                <Sun
                  size={16}
                  aria-hidden="true"
                  className={`absolute transition-all duration-500 ${
                    isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                  }`}
                />
                <Moon
                  size={16}
                  aria-hidden="true"
                  className={`absolute transition-all duration-500 ${
                    !isDark ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY (Dropdown) */}
      <div
        className={`fixed inset-x-3 top-[76px] z-40 xl:hidden flex flex-col backdrop-blur-xl border py-4 px-4 rounded-3xl shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] origin-top ${
          isMobileMenuOpen ? 'scale-y-100 opacity-100 pointer-events-auto' : 'scale-y-95 opacity-0 pointer-events-none'
        } ${
          isDark
            ? 'bg-[#1C1C1E]/90 border-white/10 ring-1 ring-white/5 ring-inset shadow-black/60'
            : 'bg-white/95 border-slate-200/80 ring-1 ring-black/5 ring-inset shadow-slate-200/60'
        }`}
      >
        <nav aria-label="Mobile Navigation" className="flex flex-col">
          <ul className="flex flex-col gap-1.5 list-none p-0 m-0 w-full">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isSelected = activeSection === item.id;
              return (
                <li key={item.id} className="w-full">
                  <a
                    href={item.href}
                    onClick={(e) => handleMobileNavClick(e, item.id)}
                    className={`flex items-center gap-4 py-3.5 px-4 rounded-2xl font-bold uppercase tracking-widest text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A44FF] ${
                      isSelected
                        ? isDark
                          ? 'text-[#FF7A2F] bg-[#FF7A2F]/10'
                          : 'text-[#0A44FF] bg-[#0A44FF]/10'
                        : isDark
                        ? 'text-slate-300 hover:bg-white/5'
                        : 'text-slate-600 hover:bg-black/5'
                    }`}
                  >
                    <Icon size={16} aria-hidden="true" />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>


      {/* LEFT SIDEBAR (Vertical) - Desktop Only */}
      <header
        className={`fixed hidden xl:flex flex-col items-center justify-between z-50 backdrop-blur-xl border shadow-lg transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] top-6 left-6 bottom-6 w-[80px] rounded-[2rem] py-8 px-4 ${
          isSidebarMode ? 'translate-x-0 opacity-100' : '-translate-x-[150%] opacity-0 pointer-events-none'
        } ${
          isDark
            ? 'bg-[#1C1C1E]/70 border-white/10 ring-1 ring-white/5 ring-inset shadow-black/50'
            : 'bg-white/70 border-slate-200/80 ring-1 ring-black/5 ring-inset shadow-slate-200/50'
        }`}
      >
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="flex items-center justify-center no-underline group shrink-0 select-none w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A44FF] rounded-xl"
        >
          <img
            src={sensaLogo}
            alt="Sensa Logo"
            className="w-[38px] h-[38px] object-contain drop-shadow-[0_0_14px_rgba(10,68,255,0.55)] group-hover:scale-105 transition-transform duration-300 shrink-0"
          />
        </a>

        <nav aria-label="Main Navigation" className="flex flex-col items-center w-full flex-1 mt-10">
          <ul
            className={`flex flex-col items-center gap-4 w-full list-none m-0 p-0 text-xs font-mono font-bold uppercase tracking-widest ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isSelected = activeSection === item.id;
              return (
                <li key={item.id} className="relative py-1 w-full flex justify-center group/item">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.id)}
                    aria-current={isSelected ? 'page' : undefined}
                    aria-label={item.label}
                    className={`relative flex items-center justify-center transition-colors duration-200 group no-underline whitespace-nowrap w-12 h-12 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A44FF] ${
                      isSelected
                        ? isDark
                          ? 'text-[#FF7A2F] bg-[#FF7A2F]/10 font-extrabold'
                          : 'text-[#0A44FF] bg-[#0A44FF]/10 font-extrabold'
                        : isDark
                        ? 'hover:text-[#FF7A2F]'
                        : 'hover:text-[#0A44FF]'
                    }`}
                  >
                    <Icon size={20} aria-hidden="true" />
                    <span
                      className={`absolute left-full ml-4 px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 -translate-x-4 pointer-events-none transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0 whitespace-nowrap shadow-xl ${
                        isDark
                          ? 'bg-[#1C1C1E] border border-slate-800 text-white'
                          : 'bg-white border border-slate-200 text-slate-900'
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex flex-col items-center gap-4 w-full mt-auto">
          <button
            onClick={() => setIsSidebarMode(false)}
            className={`flex p-2 rounded-full border backdrop-blur-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A44FF] ${
              isDark
                ? 'bg-[#24262B]/80 border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white'
                : 'bg-slate-100/80 border-slate-200/60 hover:bg-slate-200 text-slate-500 hover:text-slate-900'
            }`}
            title="Switch to Top Navbar Layout"
            aria-label="Switch to Top Navbar Layout"
          >
            <PanelTop size={16} aria-hidden="true" />
          </button>
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            role="switch"
            aria-checked={isDark}
            aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className={`flex items-center justify-center w-9 h-9 rounded-full border backdrop-blur-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A44FF] ${
              isDark
                ? 'bg-[#24262B]/80 border-slate-800 hover:bg-slate-800 text-[#FF7A2F]'
                : 'bg-slate-100/80 border-slate-200/60 hover:bg-slate-200 text-[#0A44FF]'
            }`}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <div className="relative w-4 h-4 flex items-center justify-center">
              <Sun
                size={16}
                className={`absolute transition-all duration-500 ${
                  isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                }`}
               aria-hidden="true"/>
              <Moon
                size={16}
                className={`absolute transition-all duration-500 ${
                  !isDark ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                }`}
               aria-hidden="true"/>
            </div>
          </button>
        </div>
      </header>
    </>
  );
}
