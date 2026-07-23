import { ShieldAlert, Server, ShieldCheck, HeartHandshake, Code2, CheckCircle2, AlertTriangle, Cpu } from 'lucide-react';

const ChromeIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height={size} width={size} className={className}>
    <defs>
      <linearGradient id="chrome-a-scope" x1="3.2173" y1="15" x2="44.7812" y2="15" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#d93025" />
        <stop offset="1" stopColor="#ea4335" />
      </linearGradient>
      <linearGradient id="chrome-b-scope" x1="20.7219" y1="47.6791" x2="41.5039" y2="11.6837" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#fcc934" />
        <stop offset="1" stopColor="#fbbc04" />
      </linearGradient>
      <linearGradient id="chrome-c-scope" x1="26.5981" y1="46.5015" x2="5.8161" y2="10.506" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#1e8e3e" />
        <stop offset="1" stopColor="#34a853" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="23.9947" r="12" fill="#fff" />
    <path d="M3.2154,36A24,24,0,1,0,12,3.2154,24,24,0,0,0,3.2154,36ZM34.3923,18A12,12,0,1,1,18,13.6077,12,12,0,0,1,34.3923,18Z" fill="none" />
    <path d="M24,12H44.7812a23.9939,23.9939,0,0,0-41.5639.0029L13.6079,30l.0093-.0024A11.9852,11.9852,0,0,1,24,12Z" fill="url(#chrome-a-scope)" />
    <circle cx="24" cy="24" r="9.5" fill="#1a73e8" />
    <path d="M34.3913,30.0029,24.0007,48A23.994,23.994,0,0,0,44.78,12.0031H23.9989l-.0025.0093A11.985,11.985,0,0,1,34.3913,30.0029Z" fill="url(#chrome-b-scope)" />
    <path d="M13.6086,30.0031,3.218,12.006A23.994,23.994,0,0,0,24.0025,48L34.3931,30.0029l-.0067-.0068a11.9852,11.9852,0,0,1-20.7778.007Z" fill="url(#chrome-c-scope)" />
  </svg>
);

interface ScopeSectionProps {
  isDark: boolean;
}

export default function ScopeSection({ isDark }: ScopeSectionProps) {
  const scopeItems = [
    {
      title: 'Desktop Chrome Browsers',
      description: 'Works on Google Chrome, Brave, and Microsoft Edge desktop web browsers.',
      icon: ChromeIcon,
      tag: 'Desktop Browsers',
    },
    {
      title: '7 Core Accessibility Features',
      description: 'Includes 4 Visual tools (Voice Control, Focus Ruler, Alt-Text AI Reader, Typography) and 3 Auditory tools (Live Subtitles, Sound Visualizer, Noise Warnings).',
      icon: Cpu,
      tag: 'Visual + Auditory',
    },
    {
      title: 'Active Tab Audio Capturing',
      description: 'Captures playing audio directly inside any active browser tab, such as YouTube videos, online lectures, or video calls.',
      icon: Code2,
      tag: 'Tab Audio',
    },
    {
      title: 'Stateless Privacy Protection',
      description: 'Your audio and subtitles are processed live in real time. Sensa never records, saves, or stores any personal data or voice recordings.',
      icon: ShieldCheck,
      tag: 'Zero Data Saved',
    },
  ];

  const limitationItems = [
    {
      title: 'Desktop Browsers Only',
      description: 'Supports desktop computers only. Mobile devices (iOS/Android) and Firefox are not supported due to browser extension rules.',
      icon: AlertTriangle,
      tag: 'Desktop Only',
    },
    {
      title: 'Tab Audio Boundary',
      description: 'Captures sound playing inside your browser tabs. Separate desktop applications (like Spotify desktop or Zoom app) are not captured for security reasons.',
      icon: ShieldAlert,
      tag: 'Browser Tabs Only',
    },
    {
      title: 'Cloud AI API Limits',
      description: 'Uses live AI speech recognition and translation services. During peak usage, speech services may occasionally pause if developer quotas are reached.',
      icon: Server,
      tag: 'Free Developer Limits',
    },
  ];

  return (
    <section
      id="scope"
      className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center scroll-mt-[69px] md:scroll-mt-[71px] py-20 md:py-28 border-y ${
        isDark ? 'border-slate-800/80' : 'border-slate-200/80'
      }`}
    >
      {/* Cybernetic Grid Layer */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)] -z-10" />

      {/* Ambient Glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[160px] pointer-events-none -z-10 bg-[#0A44FF] gpu-accelerate ${
          isDark ? 'opacity-20' : 'opacity-10'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Scope & Limitations
          </h2>
          <p className={`text-base md:text-xl leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Here is a clear summary of what Sensa can do (Scope) and what it does not support (Limitations).
          </p>
        </div>

        {/* 2-Column Comparative Layout: Scope vs Limitations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-start">
          {/* Column 1: Project Scope (What Sensa Covers) */}
          <div
            className={`border rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between ${
              isDark
                ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5'
                : 'bg-white border-slate-200/80 ring-1 ring-black/5 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-500/30">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                <CheckCircle2 size={22} />
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
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                        isDark
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                          : 'bg-emerald-50 text-emerald-600 border-emerald-200'
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {item.title}
                        </h4>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                            isDark
                              ? 'bg-slate-800 text-slate-400 border-slate-700'
                              : 'bg-slate-100 text-slate-600 border-slate-200'
                          }`}
                        >
                          {item.tag}
                        </span>
                      </div>
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Technical Limitations (Red Accent) */}
          <div
            className={`border rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between ${
              isDark
                ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5'
                : 'bg-white border-slate-200/80 ring-1 ring-black/5 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-rose-500/30">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">
                <AlertTriangle size={22} />
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
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                        isDark
                          ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                          : 'bg-rose-50 text-rose-600 border-rose-200'
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {item.title}
                        </h4>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                            isDark
                              ? 'bg-slate-800 text-rose-400 border-rose-900/40'
                              : 'bg-rose-50 text-rose-700 border-rose-200'
                          }`}
                        >
                          {item.tag}
                        </span>
                      </div>
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

        {/* Bottom Banner */}
        <div
          className={`border rounded-2xl p-6 text-center max-w-4xl mx-auto ${
            isDark
              ? 'bg-white/[0.02] border-slate-800 text-slate-400'
              : 'bg-slate-50 border-slate-200 text-slate-600'
          }`}
        >
          <div className={`flex items-center justify-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider font-bold ${isDark ? 'text-[#6AA2FF]' : 'text-[#0A44FF]'}`}>
            <HeartHandshake size={16} />
            <span>BulSU CICT Capstone Research Commitment</span>
          </div>
          <p className="text-xs md:text-sm leading-relaxed m-0 font-normal">
            Sensa is a capstone research project developed by IT students at Bulacan State University (BulSU) to make web browsing accessible for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}
