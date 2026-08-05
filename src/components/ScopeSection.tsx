import { Server, ShieldCheck, CheckCircle2, Sparkles, Volume2, Smartphone, KeyRound, Laptop, AlertTriangle, Globe } from 'lucide-react';
import { playCardHoverSound } from '../utils/soundSystem';
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
      className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center py-20 md:py-28 border-y ${isDark ? 'border-slate-800/80' : 'border-slate-200/80'
        }`}
    >
      {/* Cybernetic Grid Layer */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)] -z-10" />

      {/* Ambient Glow */}
      <div
        className={`hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[160px] pointer-events-none -z-10 bg-[#0A44FF] gpu-accelerate ${isDark ? 'opacity-20' : 'opacity-10'
          }`}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        {/* Header */}
        <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Scope & Limitations
          </h2>
          <p className={`text-base md:text-xl leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Discover Sensa's core capabilities and current technical limitations.
          </p>
        </div>
        </ScrollReveal>

        {/* 2-Column Comparative Layout: Equal Height Cards (items-stretch) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Column 1: Project Scope (4 Items) */}
          <ScrollReveal delay={150} className="h-full">
          <div
            onMouseEnter={playCardHoverSound}
            className={`border rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between h-full ${isDark
                ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5'
                : 'bg-white border-slate-200/80 ring-1 ring-black/5 shadow-sm'
              }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#8A56FF]/30">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${isDark ? 'bg-gradient-to-br from-[#0A44FF]/20 via-[#8A56FF]/20 to-[#FF7A2F]/20 text-[#8A56FF]' : 'bg-gradient-to-br from-[#0A44FF]/10 via-[#8A56FF]/10 to-[#FF7A2F]/10 text-[#8A56FF]'}`}>
                  <CheckCircle2 size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3 className={`text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Project Scope
                  </h3>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#0A44FF] via-[#8A56FF] to-[#FF7A2F]">
                    Supported Features
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                {scopeItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4 items-start">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${isDark
                            ? 'bg-[#8A56FF]/10 text-[#8A56FF] border-[#8A56FF]/20'
                            : 'bg-[#8A56FF]/5 text-[#8A56FF] border-[#8A56FF]/20'
                          }`}
                      >
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className={`text-base font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
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

          {/* Column 2: Technical Limitations (4 Items) */}
          <ScrollReveal delay={300} className="h-full">
          <div
            onMouseEnter={playCardHoverSound}
            className={`border rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between h-full ${isDark
                ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5'
                : 'bg-white border-slate-200/80 ring-1 ring-black/5 shadow-sm'
              }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700/50">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${isDark ? 'bg-slate-800/60 text-amber-500/80' : 'bg-slate-100 text-amber-600/80'}`}>
                  <AlertTriangle size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3 className={`text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Limitations
                  </h3>
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider ${isDark ? 'text-amber-500/70' : 'text-amber-600/80'}`}>
                    Not Supported
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                {limitationItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4 items-start">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${isDark
                            ? 'bg-slate-800/40 text-amber-500/70 border-slate-700/50'
                            : 'bg-slate-50 text-amber-600/70 border-slate-200'
                          }`}
                      >
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className={`text-base font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
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
