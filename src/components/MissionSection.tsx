import { useState } from 'react';
import { MousePointerClick, FileText, VolumeX, BellOff, Mic, Volume2, MessageSquare, Zap } from 'lucide-react';
import sensaLogo from '../assets/Sensa-Logo.png';

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
      title: 'Hard to Click',
      description: 'Small buttons are hard to see and click.',
      icon: MousePointerClick,
    },
    {
      id: 2,
      title: 'Screen Clutter',
      description: 'Too much text confuses screen readers.',
      icon: FileText,
    },
    {
      id: 3,
      title: 'No Subtitles',
      description: 'Many videos don\'t have captions.',
      icon: VolumeX,
    },
    {
      id: 4,
      title: 'Missed Sounds',
      description: 'Hard to hear important notifications.',
      icon: BellOff,
    },
  ];

  const solutionCards = [
    {
      id: 1,
      title: 'Voice Control',
      description: 'Control the browser with your voice.',
      icon: Mic,
    },
    {
      id: 2,
      title: 'Smart Reader',
      description: 'Reads only the important text out loud.',
      icon: Volume2,
    },
    {
      id: 3,
      title: 'Live Multilingual Captions',
      description: 'Live subtitles for any playing audio.',
      icon: MessageSquare,
    },
    {
      id: 4,
      title: 'Visual Radar',
      description: 'See color flashes for sounds.',
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
      className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center scroll-mt-[69px] md:scroll-mt-[71px] py-20 md:py-28 border-t ${
        isDark ? 'border-slate-800/80' : 'border-slate-200/60'
      }`}
    >
      {/* Cybernetic Grid Layer */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)] -z-10" />

      {/* Dynamic Ambient Mission Gradients */}
      <div
        className={`absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none -z-10 bg-red-500 transition-opacity duration-500 gpu-accelerate ${
          isAnyActive
            ? isDark
              ? 'opacity-[0.18]'
              : 'opacity-[0.10]'
            : isDark
            ? 'opacity-[0.08]'
            : 'opacity-[0.04]'
        }`}
      />
      <div
        className={`absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none -z-10 bg-emerald-500 transition-opacity duration-500 gpu-accelerate ${
          isAnyActive
            ? isDark
              ? 'opacity-[0.18]'
              : 'opacity-[0.10]'
            : isDark
            ? 'opacity-[0.08]'
            : 'opacity-[0.04]'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        {/* Main Title & Intro Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2
            className={`text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            The Mission
          </h2>
          <p
            className={`text-base md:text-xl leading-relaxed font-normal ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Most websites are not designed for people with disabilities. Sensa helps low-vision, blind, and hearing-impaired users browse the web easily.
          </p>
        </div>

        {/* Section Column Headers Row (Problem & Solution) */}
        <div className="w-full flex items-center justify-between mb-6 px-2">
          <div className="w-full lg:w-[380px] text-center">
            <h3
              className={`text-sm md:text-base font-black uppercase tracking-widest transition-all duration-300 ${
                isAnyActive
                  ? 'text-red-500 dark:text-red-400 opacity-100 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]'
                  : 'text-red-500/70 dark:text-red-400/70 opacity-70'
              }`}
            >
              Problem
            </h3>
          </div>
          <div className="hidden lg:block w-48"></div>
          <div className="w-full lg:w-[380px] text-center">
            <h3
              className={`text-sm md:text-base font-black uppercase tracking-widest transition-all duration-300 ${
                isAnyActive
                  ? 'text-emerald-950 dark:text-emerald-400 opacity-100 drop-shadow-[0_0_8px_rgba(2,44,34,0.3)]'
                  : 'text-emerald-950/90 dark:text-emerald-400/70 opacity-90'
              }`}
            >
              Solution
            </h3>
          </div>
        </div>

        {/* Infographic Transformation Pipeline Grid */}
        <div
          ref={problemRef}
          className={`relative w-full flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-0 transition-all duration-[1000ms] transform ${
            isProblemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          <style>{`
            .flow-line-red {
              stroke-dasharray: 8 8;
              animation: flow-red 1.2s linear infinite;
            }
            .flow-line-red-active {
              stroke-dasharray: 10 10;
              animation: flow-red 0.5s linear infinite;
            }
            @keyframes flow-red {
              from { stroke-dashoffset: 16; }
              to { stroke-dashoffset: 0; }
            }
            .flow-line-green {
              stroke-dasharray: 8 8;
              animation: flow-green 1.2s linear infinite;
            }
            .flow-line-green-active {
              stroke-dasharray: 10 10;
              animation: flow-green 0.5s linear infinite;
            }
            @keyframes flow-green {
              from { stroke-dashoffset: 16; }
              to { stroke-dashoffset: 0; }
            }
          `}</style>

          {/* Column 1: The Roadblocks (Problem Cards ONLY) */}
          <div className="w-full lg:w-[380px] flex flex-col gap-4 z-10">
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
                  className={`p-5 md:p-6 rounded-[2rem] border backdrop-blur-md flex items-center gap-4 transition-all duration-300 cursor-pointer ${
                    isSpecificHover
                      ? isDark
                        ? 'bg-[#1C1C1E] border-red-500/80 bg-red-500/10 shadow-[0_0_25px_rgba(239,68,68,0.25)] scale-[1.03] ring-1 ring-red-500/40'
                        : 'bg-white border-red-300 bg-red-50/80 shadow-[0_12px_30px_rgba(239,68,68,0.18)] scale-[1.03] ring-1 ring-red-200'
                      : isCoreHovered
                      ? isDark
                        ? 'bg-[#1C1C1E] border-red-500/40 bg-red-500/5'
                        : 'bg-white border-red-200 bg-red-50/40'
                      : isOtherHovered
                      ? 'opacity-40 scale-[0.98]'
                      : isDark
                      ? 'bg-[#1C1C1E] border-slate-800 hover:bg-red-500/5 hover:border-red-500/30'
                      : 'bg-white border-slate-200 shadow-sm hover:bg-red-50/50 hover:border-red-200'
                  }`}
                >
                  {/* Problem Card Icon: Reddish default tint, glowing solid red on hover */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isHovered
                        ? 'bg-red-500 text-white shadow-md shadow-red-500/40 scale-110'
                        : 'bg-red-500/10 text-red-500 dark:bg-red-500/15 dark:text-red-400'
                    }`}
                  >
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4
                      className={`text-base font-bold mb-0.5 transition-colors ${
                        isHovered
                          ? 'text-red-500 dark:text-red-400 font-extrabold'
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

          {/* Left Gap SVG Connections (Dead-Center Aligned to Card Centers) */}
          <div className="hidden lg:block flex-1 relative -mx-2 -z-20">
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
                        : 'rgba(239, 68, 68, 0.5)'
                    }
                    strokeWidth={isHovered ? (isCoreHovered ? '3.5' : '4') : '2'}
                    vectorEffect="non-scaling-stroke"
                    className={isHovered ? 'flow-line-red-active' : 'flow-line-red'}
                    style={{
                      filter: isHovered ? 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.9))' : 'none',
                      opacity: isOtherHovered ? 0.2 : 1,
                      transition: 'stroke 0.3s, stroke-width 0.3s, opacity 0.3s',
                    }}
                  />
                );
              })}
            </svg>
          </div>

          {/* Column 2: The Sensa Protocol (Interactive Center Engine Node) */}
          <div className="relative shrink-0 flex flex-col items-center justify-center z-10 py-10 lg:py-0 w-48">
            <div
              className="relative w-36 h-36 flex items-center justify-center cursor-pointer group"
              onMouseEnter={() => setIsCoreHovered(true)}
              onMouseLeave={() => setIsCoreHovered(false)}
            >
              {/* Interactive Sensa Core Multi-color Light Show on Hover */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl transition-all duration-500 pointer-events-none ${
                  isCoreHovered
                    ? 'w-[170px] h-[170px] bg-gradient-to-tr from-[#0A44FF] via-[#8A56FF] to-[#FF7A2F] opacity-90 animate-spin scale-125'
                    : hoveredId !== null
                    ? 'w-[145px] h-[145px] bg-gradient-to-tr from-[#0A44FF] via-[#8A56FF] to-[#FF7A2F] opacity-40 animate-pulse'
                    : 'w-[130px] h-[130px] bg-gradient-to-tr from-[#0A44FF]/20 via-[#8A56FF]/20 to-[#FF7A2F]/20 opacity-20'
                }`}
                style={{ animationDuration: isCoreHovered ? '6s' : '2s' }}
              />

              <div
                className={`relative z-10 w-full h-full rounded-full p-[2px] bg-gradient-to-br from-[#0A44FF] via-[#8A56FF] to-[#FF7A2F] transition-all duration-300 ${
                  isCoreHovered
                    ? 'scale-115 shadow-[0_0_35px_rgba(138,86,255,0.8)] ring-4 ring-[#8A56FF]/40'
                    : hoveredId !== null
                    ? 'scale-105 shadow-[0_0_25px_rgba(138,86,255,0.4)]'
                    : 'shadow-[0_0_15px_rgba(138,86,255,0.2)]'
                }`}
              >
                <div
                  className={`w-full h-full rounded-full flex items-center justify-center transition-transform duration-300 ${
                    isDark ? 'bg-[#09090B]' : 'bg-white'
                  }`}
                >
                  <img
                    src={sensaLogo}
                    alt="Sensa"
                    className={`w-16 h-16 object-contain transition-all duration-500 ${
                      isCoreHovered
                        ? 'scale-125 drop-shadow-[0_0_20px_rgba(10,68,255,0.9)] rotate-6'
                        : hoveredId !== null
                        ? 'scale-110 drop-shadow-[0_0_12px_rgba(10,68,255,0.6)]'
                        : 'drop-shadow-[0_0_10px_rgba(10,68,255,0.3)]'
                    }`}
                  />
                </div>
              </div>

              {/* Sensa Title Label */}
              <h3 className="absolute -bottom-12 z-20 text-xl md:text-2xl font-black uppercase tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-[#0A44FF] via-[#8A56FF] to-[#FF7A2F] drop-shadow-sm">
                Sensa
              </h3>
            </div>
          </div>

          {/* Right Gap SVG Connections (Dead-Center Aligned to Card Centers) */}
          <div className="hidden lg:block flex-1 relative -mx-2 -z-20">
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
                        ? 'rgba(16, 185, 129, 1)'
                        : isOtherHovered
                        ? 'rgba(16, 185, 129, 0.15)'
                        : 'rgba(16, 185, 129, 0.5)'
                    }
                    strokeWidth={isHovered ? (isCoreHovered ? '3.5' : '4') : '2'}
                    vectorEffect="non-scaling-stroke"
                    className={isHovered ? 'flow-line-green-active' : 'flow-line-green'}
                    style={{
                      filter: isHovered ? 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.9))' : 'none',
                      opacity: isOtherHovered ? 0.2 : 1,
                      transition: 'stroke 0.3s, stroke-width 0.3s, opacity 0.3s',
                    }}
                  />
                );
              })}
            </svg>
          </div>

          {/* Column 3: The Breakthrough (Solution Cards ONLY) */}
          <div className="w-full lg:w-[380px] flex flex-col gap-4 z-10">
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
                  className={`p-5 md:p-6 rounded-[2rem] border backdrop-blur-md flex items-center gap-4 transition-all duration-300 cursor-pointer ${
                    isSpecificHover
                      ? isDark
                        ? 'bg-[#1C1C1E] border-emerald-500/80 bg-emerald-500/10 shadow-[0_0_25px_rgba(16,185,129,0.25)] scale-[1.03] ring-1 ring-emerald-500/40'
                        : 'bg-white border-emerald-800 bg-emerald-50/90 shadow-[0_12px_30px_rgba(2,44,34,0.2)] scale-[1.03] ring-1 ring-emerald-600'
                      : isCoreHovered
                      ? isDark
                        ? 'bg-[#1C1C1E] border-emerald-500/40 bg-emerald-500/5'
                        : 'bg-white border-emerald-500 bg-emerald-50/60'
                      : isOtherHovered
                      ? 'opacity-40 scale-[0.98]'
                      : isDark
                      ? 'bg-[#1C1C1E] border-slate-800 hover:border-emerald-500/40 hover:bg-emerald-500/5'
                      : 'bg-white border-slate-200 shadow-sm hover:border-emerald-500 hover:bg-emerald-50/50'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isHovered
                        ? 'bg-emerald-900 text-white shadow-md shadow-emerald-900/40 scale-110 dark:bg-emerald-500'
                        : 'bg-emerald-950/15 text-emerald-950 dark:bg-emerald-500/15 dark:text-emerald-400'
                    }`}
                  >
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4
                      className={`text-base font-bold mb-0.5 transition-colors ${
                        isHovered
                          ? 'text-emerald-950 dark:text-emerald-400 font-black'
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
      </div>
    </section>
  );
}
