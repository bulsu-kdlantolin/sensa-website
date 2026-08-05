import { Server, ShieldCheck, CheckCircle2, Sparkles, Volume2, Smartphone, KeyRound, Laptop, AlertTriangle, Globe } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface ScopeSectionProps {
  isDark: boolean;
}

export default function ScopeSection({ isDark }: ScopeSectionProps) {
  const scopeItems = [
    {
      title: 'Google Chrome & Microsoft Edge',
      description: 'Delivers optimal performance on Google Chrome and Microsoft Edge desktop browsers for seamless voice controls and live audio capture.',
      icon: Laptop,
    },
    {
      title: 'Dual Accessibility Features',
      description: 'Gives you easy-to-use tools for both low-vision reading assistance and hearing-impaired live audio captions.',
      icon: Sparkles,
    },
    {
      title: 'Live Webpage Audio Capture',
      description: 'Captures playing tab audio in real time to generate instant AI speech recognition and live translated subtitles.',
      icon: Volume2,
    },
    {
      title: '100% Private & Secure',
      description: 'Built with privacy-first principles. Your audio is processed in memory and never saved or stored anywhere.',
      icon: ShieldCheck,
    },
  ];

  const limitationItems = [
    {
      title: 'Browser Compatibility',
      description: 'Voice commands are disabled on Brave and Opera due to built-in shield restrictions, and non-Chromium browsers like Firefox or Safari are not compatible.',
      icon: Globe,
    },
    {
      title: 'Desktop Computers Only',
      description: 'Designed exclusively for desktop operating systems; mobile devices (iOS and Android phones or tablets) are not supported.',
      icon: Smartphone,
    },
    {
      title: 'Initial Server Startup',
      description: 'Because Sensa uses free cloud hosting services, the server sleeps when idle and takes 15 to 30 seconds to wake up on first launch.',
      icon: Server,
    },
    {
      title: 'Monthly Service Limits',
      description: 'Relies on free developer API tiers for translation and speech AI; features may pause if monthly quotas are reached.',
      icon: KeyRound,
    },
  ];

  return (
    <section
      id="scope"
      className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center py-20 md:py-32 border-y ${isDark ? 'border-slate-800/80 bg-[#060608]' : 'border-slate-200/80 bg-slate-50'
        }`}
    >
      {/* Cybernetic Grid Layer */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)] -z-10" />

      {/* Ambient Glow */}
      <div
        className={`hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[160px] pointer-events-none -z-10 bg-[#0A44FF] gpu-accelerate ${isDark ? 'opacity-10' : 'opacity-[0.03]'
          }`}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 font-mono uppercase ${isDark ? 'text-white' : 'text-slate-900'}`}>
              System Specs
            </h2>
            <p className={`text-base md:text-xl leading-relaxed font-mono tracking-wide ${isDark ? 'text-cyan-500/80' : 'text-cyan-700/80'}`}>
              {'>'} INITIALIZING_HARDWARE_DIAGNOSTIC...
              <br/>
              {'>'} REVIEWING_CAPABILITIES_AND_CONSTRAINTS...
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Comparative Layout: Equal Height Cards (items-stretch) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch relative">
          
          {/* Subtle scanning laser over the grid */}
          <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden rounded-3xl hidden md:block">
            <div className="w-full h-1/4 bg-gradient-to-b from-transparent to-cyan-500/5 -translate-y-[100%] animate-[laser-scan_4s_ease-in-out_infinite]" />
          </div>

          {/* Column 1: Project Scope (Supported Protocols) */}
          <ScrollReveal delay={150} className="h-full relative z-10">
            <div
              className={`relative overflow-hidden border rounded-[2rem] p-6 md:p-10 flex flex-col justify-between h-full group ${isDark
                  ? 'bg-[#0b0f16]/90 border-cyan-900/50 shadow-[0_0_30px_rgba(34,211,238,0.05)]'
                  : 'bg-[#f0f9ff]/90 border-cyan-200 shadow-sm'
                } backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50`}
            >
              {/* Subtle Tech Grid Background inside card */}
              <div className={`absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] bg-[size:20px_20px] ${isDark ? 'text-cyan-400' : 'text-cyan-900'}`} />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-cyan-500/30">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${isDark ? 'bg-cyan-500/10 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]' : 'bg-cyan-100 text-cyan-600'}`}>
                    <CheckCircle2 size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className={`text-2xl md:text-3xl font-black tracking-tight font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Supported Protocols
                    </h3>
                    <span className="text-xs font-mono text-cyan-500 font-bold uppercase tracking-[0.2em]">
                      {'>'} STATUS: ONLINE & VERIFIED
                    </span>
                  </div>
                </div>

                <div className="space-y-6 md:space-y-8">
                  {scopeItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex gap-4 items-start group/item">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${isDark
                              ? 'bg-cyan-950/40 text-cyan-500 border-cyan-900/50 group-hover/item:border-cyan-500/50 group-hover/item:text-cyan-400'
                              : 'bg-cyan-50 text-cyan-600 border-cyan-200 group-hover/item:border-cyan-400'
                            }`}
                        >
                          <Icon size={20} />
                        </div>
                        <div>
                          <h4 className={`text-base font-bold mb-1 font-mono transition-colors ${isDark ? 'text-slate-200 group-hover/item:text-white' : 'text-slate-800'}`}>
                            {item.title}
                          </h4>
                          <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Column 2: Technical Limitations (Known Constraints) */}
          <ScrollReveal delay={300} className="h-full relative z-10">
            <div
              className={`relative overflow-hidden border rounded-[2rem] p-6 md:p-10 flex flex-col justify-between h-full group ${isDark
                  ? 'bg-[#16110b]/90 border-amber-900/50 shadow-[0_0_30px_rgba(245,158,11,0.05)]'
                  : 'bg-[#fffbeb]/90 border-amber-200 shadow-sm'
                } backdrop-blur-xl transition-all duration-300 hover:border-amber-500/50`}
            >
              {/* Subtle Tech Grid Background inside card */}
              <div className={`absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] bg-[size:20px_20px] ${isDark ? 'text-amber-400' : 'text-amber-900'}`} />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-amber-500/30">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${isDark ? 'bg-amber-500/10 text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]' : 'bg-amber-100 text-amber-600'}`}>
                    <AlertTriangle size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className={`text-2xl md:text-3xl font-black tracking-tight font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Known Constraints
                    </h3>
                    <span className="text-xs font-mono text-amber-500 font-bold uppercase tracking-[0.2em]">
                      {'>'} STATUS: HARDWARE_LIMITS
                    </span>
                  </div>
                </div>

                <div className="space-y-6 md:space-y-8">
                  {limitationItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex gap-4 items-start group/item">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${isDark
                              ? 'bg-amber-950/40 text-amber-500 border-amber-900/50 group-hover/item:border-amber-500/50 group-hover/item:text-amber-400'
                              : 'bg-amber-50 text-amber-600 border-amber-200 group-hover/item:border-amber-400'
                            }`}
                        >
                          <Icon size={20} />
                        </div>
                        <div>
                          <h4 className={`text-base font-bold mb-1 font-mono transition-colors ${isDark ? 'text-slate-200 group-hover/item:text-white' : 'text-slate-800'}`}>
                            {item.title}
                          </h4>
                          <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
