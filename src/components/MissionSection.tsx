import { useState } from 'react';
import { MousePointerClick, FileText, VolumeX, BellOff, Mic, Volume2, MessageSquare, Zap } from 'lucide-react';
import sensaLogo from '../assets/sensa-logo.webp';
import ScrollReveal from './ScrollReveal';

interface MissionSectionProps {
  isDark: boolean;
  problemRef: React.RefObject<HTMLDivElement>;
  isProblemVisible: boolean;
}

export default function MissionSection({ isDark, problemRef, isProblemVisible }: MissionSectionProps) {
  // State for active hovered pair ID (1, 2, 3, or 4). Null when not hovering.
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  // State for hovering on the central Sensa Core engine logo
  const [isCoreHovered, setIsCoreHovered] = useState(false);

  const problemCards = [
    {
      id: 1,
      title: 'ERR_01: HARD_TO_CLICK',
      description: 'SYSTEM WARNING: Small interactive elements undetected by low-vision users.',
      icon: MousePointerClick,
    },
    {
      id: 2,
      title: 'ERR_02: DATA_CLUTTER',
      description: 'SYSTEM WARNING: Excessive DOM nodes confusing standard screen readers.',
      icon: FileText,
    },
    {
      id: 3,
      title: 'ERR_03: AUDIO_BARRIER',
      description: 'SYSTEM WARNING: Missing subtitle tracks and unsupported regional dialects.',
      icon: VolumeX,
    },
    {
      id: 4,
      title: 'ERR_04: VOLUME_SPIKE',
      description: 'SYSTEM WARNING: Sudden decibel spikes detected without prior user alert.',
      icon: BellOff,
    },
  ];

  const solutionCards = [
    {
      id: 1,
      title: 'SYS_01: VOICE_CONTROL',
      description: 'DATA PURIFIED: Hands-free vocal navigation successfully established.',
      icon: Mic,
    },
    {
      id: 2,
      title: 'SYS_02: SMART_READER',
      description: 'DATA PURIFIED: Core content successfully isolated and synthesized into speech.',
      icon: Volume2,
    },
    {
      id: 3,
      title: 'SYS_03: AI_SUBTITLES',
      description: 'DATA PURIFIED: Neural translations & live captions successfully generated.',
      icon: MessageSquare,
    },
    {
      id: 4,
      title: 'SYS_04: NOISE_WARNING',
      description: 'DATA PURIFIED: Preventative visual biometric alerts deployed successfully.',
      icon: Zap,
    },
  ];

  // Exact vertical centers pointing dead-center at each of the 4 cards (12.5%, 37.5%, 62.5%, 87.5%)
  const lines = [
    { id: 1, y: 12.5 },
    { id: 2, y: 37.5 },
    { id: 3, y: 62.5 },
    { id: 4, y: 87.5 },
  ];

  const isAnyActive = hoveredId !== null || isCoreHovered;

  return (
    <section
      id="problem-solution"
      className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center py-20 md:py-28 border-t ${isDark ? 'border-slate-800/80' : 'border-slate-200/60'
        }`}
    >
      {/* Cybernetic Grid Layer */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)] -z-10" />

      {/* Dynamic Ambient Mission Gradients */}
      <div
        className={`hidden md:block absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none -z-10 bg-red-500 transition-opacity duration-300 transform-gpu ${isAnyActive
            ? isDark
              ? 'opacity-[0.16]'
              : 'opacity-[0.08]'
            : isDark
              ? 'opacity-[0.06]'
              : 'opacity-[0.03]'
          }`}
      />
      <div
        className={`hidden md:block absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none -z-10 bg-cyan-500 transition-opacity duration-300 transform-gpu ${isAnyActive
            ? isDark
              ? 'opacity-[0.16]'
              : 'opacity-[0.08]'
            : isDark
              ? 'opacity-[0.06]'
              : 'opacity-[0.03]'
          }`}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        {/* Main Title & Intro Subtitle */}
        <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2
            className={`text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 ${isDark ? 'text-white' : 'text-slate-900'
              }`}
          >
            The Mission
          </h2>
          <p
            className={`text-base md:text-xl leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
          >
            Most websites are not designed for people with disabilities. Sensa helps low-vision, blind, and hearing-impaired users browse the web easily.
          </p>
        </div>
        </ScrollReveal>

        {/* Section Column Headers Row (Problem & Solution) - Desktop Only */}
        <ScrollReveal delay={150}>
        <div className="hidden lg:flex w-full items-center justify-between mb-6 px-2">
          <div className="w-full lg:w-[380px] text-center">
            <h3
              className={`text-sm md:text-base font-black uppercase tracking-widest transition-all duration-300 ${isAnyActive
                  ? 'text-red-500 dark:text-red-400 opacity-100'
                  : 'text-red-500/70 dark:text-red-400/70 opacity-70'
                }`}
            >
              Problem
            </h3>
          </div>
          <div className="hidden lg:block w-48"></div>
          <div className="w-full lg:w-[380px] text-center">
            <h3
              className={`text-sm md:text-base font-black uppercase tracking-widest transition-all duration-300 ${isAnyActive
                  ? 'text-cyan-600 dark:text-cyan-400 opacity-100'
                  : 'text-cyan-600/90 dark:text-cyan-400/70 opacity-90'
                }`}
            >
              Solution
            </h3>
          </div>
        </div>
        </ScrollReveal>

        {/* Infographic Transformation Pipeline Grid */}
        <ScrollReveal delay={250}>
        <div
          ref={problemRef}
          className={`relative w-full flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-0 transition-all duration-700 transform-gpu ${isProblemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          <style>{`
            .flow-line-red {
              stroke-dasharray: 8 8;
              animation: flow-red 1.5s linear infinite;
              will-change: stroke-dashoffset;
            }
            .flow-line-red-active {
              stroke-dasharray: 10 10;
              animation: flow-red 0.6s linear infinite;
              will-change: stroke-dashoffset;
            }
            @keyframes flow-red {
              from { stroke-dashoffset: 16; }
              to { stroke-dashoffset: 0; }
            }
            .flow-line-green {
              stroke-dasharray: 8 8;
              animation: flow-green 1.5s linear infinite;
              will-change: stroke-dashoffset;
            }
            .flow-line-green-active {
              stroke-dasharray: 10 10;
              animation: flow-green 0.6s linear infinite;
              will-change: stroke-dashoffset;
            }
            @keyframes flow-green {
              from { stroke-dashoffset: 16; }
              to { stroke-dashoffset: 0; }
            }
          `}</style>

          {/* Column 1: The Roadblocks (Problem Cards ONLY - Explicit z-20) */}
          <div className="relative z-20 w-full lg:w-[380px] flex flex-col gap-4">
            {/* Mobile-only Problem Header */}
            <h3 className="lg:hidden text-center text-sm md:text-base font-black uppercase tracking-widest text-red-500 dark:text-red-400 mb-2 mt-4 lg:mt-0">
              Problem
            </h3>
            {problemCards.map((card) => {
              const Icon = card.icon;
              const isHovered = hoveredId === card.id || isCoreHovered;
              const isSpecificHover = hoveredId === card.id;
              const isOtherHovered = hoveredId !== null && !isSpecificHover && !isCoreHovered;

              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setHoveredId(card.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`relative z-20 p-5 md:p-6 rounded-[2rem] border flex items-center gap-4 transition-all duration-300 cursor-pointer transform-gpu ${isSpecificHover
                      ? isDark
                        ? 'bg-[#291717] border-red-500/80 shadow-lg shadow-red-500/10 scale-[1.02] ring-1 ring-red-500/40'
                        : 'bg-[#fff5f5] border-red-300 shadow-lg shadow-red-500/10 scale-[1.02] ring-1 ring-red-200'
                      : isCoreHovered
                        ? isDark
                          ? 'bg-[#1f1717] border-red-500/40'
                          : 'bg-[#fffafa] border-red-200'
                        : isOtherHovered
                          ? 'opacity-40 scale-[0.98]'
                          : isDark
                            ? 'bg-[#161618] border-slate-800 hover:bg-[#1f1717] hover:border-red-500/30'
                            : 'bg-white border-slate-200 shadow-sm hover:bg-[#fffafa] hover:border-red-200'
                    }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${isHovered
                        ? 'bg-red-500 text-white shadow-md shadow-red-500/30 scale-105'
                        : 'bg-red-500/10 text-red-500 dark:bg-red-500/15 dark:text-red-400'
                      }`}
                  >
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4
                      className={`text-sm md:text-base font-mono font-bold mb-1 transition-colors ${isHovered
                          ? 'text-red-500 dark:text-red-400 font-black'
                          : isDark
                            ? 'text-slate-300'
                            : 'text-slate-700'
                        }`}
                    >
                      {card.title}
                    </h4>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Left Gap SVG Connections (Lower z-0) */}
          <div className="hidden lg:block flex-1 relative -mx-2 z-0 pointer-events-none">
            <svg
              className="absolute inset-0 w-full h-full overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              {lines.map((line) => {
                const isHovered = hoveredId === line.id || isCoreHovered;
                const isSpecificHover = hoveredId === line.id;
                const isOtherHovered = hoveredId !== null && !isSpecificHover && !isCoreHovered;

                return (
                  <path
                    key={line.id}
                    d={`M 0 ${line.y} C 50 ${line.y} 50 50 100 50`}
                    fill="none"
                    stroke={
                      isHovered
                        ? 'rgba(239, 68, 68, 1)'
                        : isOtherHovered
                          ? 'rgba(239, 68, 68, 0.15)'
                          : 'rgba(239, 68, 68, 0.4)'
                    }
                    strokeWidth={isHovered ? (isCoreHovered ? '3.5' : '4') : '2'}
                    vectorEffect="non-scaling-stroke"
                    className={isHovered ? 'flow-line-red-active' : 'flow-line-red'}
                    style={{
                      opacity: isOtherHovered ? 0.2 : 1,
                      transition: 'stroke 0.3s, stroke-width 0.3s, opacity 0.3s',
                    }}
                  />
                );
              })}
            </svg>
          </div>

          {/* Column 2: The Sensa Protocol (Interactive Center Engine Node - Explicit z-20) */}
          <div className="hidden lg:flex relative z-20 shrink-0 flex-col items-center justify-center py-10 lg:py-0 w-48 self-center">
            <div
              className="relative w-36 h-36 flex items-center justify-center cursor-pointer group"
              onMouseEnter={() => setIsCoreHovered(true)}
              onMouseLeave={() => setIsCoreHovered(false)}
            >
              {/* Interactive Sensa Core Multi-color Glow on Hover */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-lg transition-all duration-300 pointer-events-none transform-gpu ${isCoreHovered
                    ? 'w-[160px] h-[160px] bg-gradient-to-tr from-[#0A44FF] via-[#8A56FF] to-[#FF7A2F] opacity-80 scale-110'
                    : hoveredId !== null
                      ? 'w-[140px] h-[140px] bg-gradient-to-tr from-[#0A44FF] via-[#8A56FF] to-[#FF7A2F] opacity-40'
                      : 'w-[125px] h-[125px] bg-gradient-to-tr from-[#0A44FF]/20 via-[#8A56FF]/20 to-[#FF7A2F]/20 opacity-20'
                  }`}
              />

              <div
                className={`relative z-10 w-full h-full rounded-full p-[2px] bg-gradient-to-br from-[#0A44FF] via-[#8A56FF] to-[#FF7A2F] transition-all duration-300 transform-gpu ${isCoreHovered
                    ? 'scale-110 shadow-xl shadow-[#8A56FF]/30 ring-2 ring-[#8A56FF]/40'
                    : hoveredId !== null
                      ? 'scale-105 shadow-md shadow-[#8A56FF]/20'
                      : 'shadow-sm shadow-[#8A56FF]/10'
                  }`}
              >
                <div
                  className={`w-full h-full rounded-full flex items-center justify-center transition-transform duration-300 ${isDark ? 'bg-[#09090B]' : 'bg-white'
                    }`}
                >
                  <img
                    src={sensaLogo}
                    alt="Sensa"
                    className={`w-16 h-16 object-contain transition-all duration-300 transform-gpu ${isCoreHovered
                        ? 'scale-110 rotate-3'
                        : hoveredId !== null
                          ? 'scale-105'
                          : 'scale-100'
                      }`}
                  />
                </div>
              </div>

              {/* Sensa Title Label */}
              <h3 className="absolute -bottom-12 z-20 text-xl md:text-2xl font-black uppercase tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-[#0A44FF] via-[#8A56FF] to-[#FF7A2F]">
                Sensa
              </h3>
            </div>
          </div>

          {/* Right Gap SVG Connections (Lower z-0) */}
          <div className="hidden lg:block flex-1 relative -mx-2 z-0 pointer-events-none">
            <svg
              className="absolute inset-0 w-full h-full overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              {lines.map((line) => {
                const isHovered = hoveredId === line.id || isCoreHovered;
                const isSpecificHover = hoveredId === line.id;
                const isOtherHovered = hoveredId !== null && !isSpecificHover && !isCoreHovered;

                return (
                  <path
                    key={line.id}
                    d={`M 0 50 C 50 50 50 ${line.y} 100 ${line.y}`}
                    fill="none"
                    stroke={
                      isHovered
                        ? 'rgba(6, 182, 212, 1)'
                        : isOtherHovered
                          ? 'rgba(6, 182, 212, 0.15)'
                          : 'rgba(6, 182, 212, 0.4)'
                    }
                    strokeWidth={isHovered ? (isCoreHovered ? '3.5' : '4') : '2'}
                    vectorEffect="non-scaling-stroke"
                    className={isHovered ? 'flow-line-green-active' : 'flow-line-green'}
                    style={{
                      opacity: isOtherHovered ? 0.2 : 1,
                      transition: 'stroke 0.3s, stroke-width 0.3s, opacity 0.3s',
                    }}
                  />
                );
              })}
            </svg>
          </div>

          {/* Column 3: The Breakthrough (Solution Cards ONLY - Explicit z-20) */}
          <div className="relative z-20 w-full lg:w-[380px] flex flex-col gap-4">
            {/* Mobile-only Solution Header */}
            <h3 className="lg:hidden text-center text-sm md:text-base font-black uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-2 mt-8 lg:mt-0">
              Solution
            </h3>
            {solutionCards.map((card) => {
              const Icon = card.icon;
              const isHovered = hoveredId === card.id || isCoreHovered;
              const isSpecificHover = hoveredId === card.id;
              const isOtherHovered = hoveredId !== null && !isSpecificHover && !isCoreHovered;

              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setHoveredId(card.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`relative z-20 p-5 md:p-6 rounded-[2rem] border flex items-center gap-4 transition-all duration-300 cursor-pointer transform-gpu ${isSpecificHover
                      ? isDark
                        ? 'bg-[#0f172a] border-cyan-500/80 shadow-lg shadow-cyan-500/10 scale-[1.02] ring-1 ring-cyan-500/40'
                        : 'bg-[#ecfeff] border-cyan-800 shadow-lg shadow-cyan-500/10 scale-[1.02] ring-1 ring-cyan-600'
                      : isCoreHovered
                        ? isDark
                          ? 'bg-[#0f172a] border-cyan-500/40'
                          : 'bg-[#f8fafc] border-cyan-500'
                        : isOtherHovered
                          ? 'opacity-40 scale-[0.98]'
                          : isDark
                            ? 'bg-[#161618] border-slate-800 hover:border-cyan-500/40 hover:bg-[#0f172a]'
                            : 'bg-white border-slate-200 shadow-sm hover:border-cyan-500 hover:bg-[#f8fafc]'
                    }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${isHovered
                        ? 'bg-cyan-900 text-white shadow-md shadow-cyan-900/30 scale-105 dark:bg-cyan-500'
                        : 'bg-cyan-950/15 text-cyan-950 dark:bg-cyan-500/15 dark:text-cyan-400'
                      }`}
                  >
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4
                      className={`text-sm md:text-base font-mono font-bold mb-1 transition-colors ${isHovered
                          ? 'text-cyan-800 dark:text-cyan-400 font-black'
                          : isDark
                            ? 'text-white'
                            : 'text-slate-900'
                        }`}
                    >
                      {card.title}
                    </h4>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
