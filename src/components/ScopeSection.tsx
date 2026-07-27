import { Server, ShieldCheck, CheckCircle2, Sparkles, Volume2, Smartphone, KeyRound, MicOff, Laptop, AlertTriangle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface ScopeSectionProps {
  isDark: boolean;
}

export default function ScopeSection({ isDark }: ScopeSectionProps) {
  const scopeItems = [
    {
      title: 'Desktop Chrome Browsers',
      description: 'Fully compatible with any Chromium-based desktop browser, including Google Chrome, Brave, and Microsoft Edge.',
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
    {
      title: 'Audio Quality Dependency',
      description: 'Subtitles work best on clear spoken voices and may struggle to understand words during loud background music.',
      icon: MicOff,
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
            className={`border rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between h-full ${isDark
                ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5'
                : 'bg-white border-slate-200/80 ring-1 ring-black/5 shadow-sm'
              }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-500/30">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                  <CheckCircle2 size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3 className={`text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Project Scope
                  </h3>
                  <span className="text-xs font-mono text-emerald-500 font-bold uppercase tracking-wider">
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
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                            : 'bg-emerald-50 text-emerald-600 border-emerald-200'
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
            className={`border rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between h-full ${isDark
                ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5'
                : 'bg-white border-slate-200/80 ring-1 ring-black/5 shadow-sm'
              }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-rose-500/30">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">
                  <AlertTriangle size={22} className="text-rose-500" aria-hidden="true" />
                </div>
                <div>
                  <h3 className={`text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Limitations
                  </h3>
                  <span className="text-xs font-mono text-rose-500 font-bold uppercase tracking-wider">
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
                            ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                            : 'bg-rose-50 text-rose-600 border-rose-200'
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
