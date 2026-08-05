import { MousePointerClick, FileText, VolumeX, BellOff, Mic, Volume2, MessageSquare, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface MissionSectionProps {
  isDark: boolean;
  problemRef: React.RefObject<HTMLDivElement>;
  isProblemVisible: boolean;
}

export default function MissionSection({ isDark, problemRef, isProblemVisible }: MissionSectionProps) {
  // Node Component for Blueprint
  const BlueprintNode = ({ problem, solution, desc, icon: Icon, positionClasses }: any) => (
    <div className={`absolute z-40 group cursor-pointer ${positionClasses}`}>
      {/* Target Node Visual */}
      <div className="relative flex items-center justify-center w-6 h-6">
        {/* Flashing Red Alert Ring (turns cyan on hover) */}
        <div className="absolute inset-0 rounded-full border-2 border-red-500 group-hover:border-cyan-400 opacity-80 group-hover:animate-ping transition-colors duration-300" />
        <div className="absolute inset-0 rounded-full bg-red-500/40 animate-pulse group-hover:bg-cyan-400/40 transition-colors duration-300" />
        
        {/* Core Dot */}
        <div className="relative w-2 h-2 rounded-full bg-red-500 group-hover:bg-cyan-400 shadow-[0_0_8px_rgba(239,68,68,1)] group-hover:shadow-[0_0_12px_rgba(34,211,238,1)] transition-colors duration-300" />
      </div>

      {/* Holographic Pop-up Card */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-64 p-5 rounded-xl border border-cyan-500/40 bg-[#09090b]/95 backdrop-blur-md opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 pointer-events-none scale-95 group-hover:scale-100 shadow-2xl shadow-cyan-500/10 flex flex-col gap-3">
        {/* Error State (Crossed out) */}
        <div className="flex items-start gap-2 text-red-400/60 line-through text-xs font-mono mb-2">
          <span className="text-red-500/50">ERROR:</span>
          {problem}
        </div>
        
        {/* Solution State (Cyan) */}
        <div className="flex items-center gap-3 text-cyan-400">
          <div className="p-2 bg-cyan-950 rounded-lg shrink-0">
            <Icon size={18} />
          </div>
          <h4 className="font-black text-sm uppercase tracking-wide">
            {solution}
          </h4>
        </div>
        
        <p className="text-xs text-slate-300 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );

  return (
    <section
      id="problem-solution"
      className={`relative w-full min-h-screen flex flex-col justify-center py-20 md:py-32 border-t ${
        isDark ? 'border-slate-800/80 bg-[#050505]' : 'border-slate-200/60 bg-slate-900'
      } overflow-hidden`}
    >
      <style>{`
        @keyframes laser-scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        .animate-laser-scan {
          animation: laser-scan 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .blueprint-line {
          background-image: linear-gradient(to right, rgba(51, 65, 85, 0.4) 50%, transparent 50%);
          background-size: 16px 2px;
        }
      `}</style>

      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-20" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Holographic Blueprint
            </h2>
            <p className="text-base md:text-xl font-mono text-cyan-500/80 tracking-wide">
              Hover over the red anomalies to deploy Sensa augmentations.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div 
            ref={problemRef}
            className={`relative w-full aspect-[3/4] md:aspect-[16/9] border-2 border-slate-700/60 rounded-xl bg-[#0a0a0c]/80 backdrop-blur-sm p-4 md:p-8 flex flex-col gap-4 shadow-2xl transition-all duration-1000 transform-gpu ${
              isProblemVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`}
          >
            {/* The Sweeping Laser Scanner */}
            <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden rounded-xl">
              <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-cyan-500/5 to-cyan-400/30 border-b-[3px] border-cyan-300 drop-shadow-[0_5px_15px_rgba(34,211,238,0.6)] animate-laser-scan" />
            </div>

            {/* --- WIREFRAME UI --- */}

            {/* Wireframe Header */}
            <div className="w-full h-12 md:h-16 border-2 border-slate-700/50 rounded-lg flex items-center justify-between px-4 md:px-6 relative">
              <div className="w-24 md:w-32 h-3 md:h-4 bg-slate-700/40 rounded" />
              <div className="flex gap-4 items-center">
                <div className="hidden md:block w-16 h-3 bg-slate-700/40 rounded" />
                <div className="w-12 h-3 bg-slate-700/40 rounded" />
                <div className="w-8 md:w-20 h-6 md:h-8 border-2 border-slate-700/50 rounded-full" />
                
                {/* NODE 1: Hard to Click -> Voice Control */}
                <BlueprintNode 
                  problem="Click Target Unreachable"
                  solution="Voice Control"
                  desc="Navigate complex headers and small icons using completely hands-free vocal commands."
                  icon={Mic}
                  positionClasses="-bottom-2 -right-2"
                />
              </div>
            </div>

            {/* Wireframe Body */}
            <div className="flex flex-1 gap-6 relative">
              {/* Sidebar */}
              <div className="hidden md:flex w-1/4 h-full border-2 border-slate-700/50 rounded-lg p-6 flex-col gap-6">
                <div className="w-full h-24 border-2 border-slate-700/30 rounded-lg border-dashed" />
                <div className="w-full h-32 border-2 border-slate-700/30 rounded-lg border-dashed" />
                <div className="w-3/4 h-3 bg-slate-700/30 rounded mt-auto" />
                <div className="w-1/2 h-3 bg-slate-700/30 rounded" />
              </div>

              {/* Main Content */}
              <div className="flex-1 h-full border-2 border-slate-700/50 rounded-lg p-6 flex flex-col gap-6 relative">
                
                {/* Text Block (Screen Clutter) */}
                <div className="w-full flex flex-col gap-3 relative">
                  <div className="w-3/4 h-6 md:h-8 bg-slate-700/50 rounded mb-2" />
                  <div className="w-full h-3 bg-slate-700/30 rounded" />
                  <div className="w-full h-3 bg-slate-700/30 rounded" />
                  <div className="w-5/6 h-3 bg-slate-700/30 rounded" />
                  <div className="w-full h-3 bg-slate-700/30 rounded" />
                  <div className="w-4/5 h-3 bg-slate-700/30 rounded" />

                  {/* NODE 2: Screen Clutter -> Smart Reader */}
                  <BlueprintNode 
                    problem="Data Clutter / Node Overload"
                    solution="Smart Reader"
                    desc="Isolates the core article text, stripping away ads and reading it aloud clearly."
                    icon={Volume2}
                    positionClasses="top-1/2 -left-3"
                  />
                </div>

                {/* Video Placeholder */}
                <div className="w-full flex-1 border-2 border-slate-700/40 border-dashed rounded-xl mt-4 flex items-center justify-center relative bg-slate-800/10">
                  <div className="w-16 h-16 rounded-full border-2 border-slate-700/50 flex items-center justify-center text-slate-600">
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                  
                  {/* NODE 3: Audio Barriers -> AI Subtitles */}
                  <BlueprintNode 
                    problem="Missing Audio Captions"
                    solution="AI Subtitles"
                    desc="Generates live neural subtitles and translates spoken audio into 135+ languages."
                    icon={MessageSquare}
                    positionClasses="top-4 left-4"
                  />

                  {/* NODE 4: Sudden Loud Sounds -> Noise Warning */}
                  <BlueprintNode 
                    problem="Sudden Decibel Spike"
                    solution="Noise Warning"
                    desc="Flashes a preventative visual alert seconds before a loud sound occurs."
                    icon={Zap}
                    positionClasses="bottom-4 right-4"
                  />
                </div>

              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
