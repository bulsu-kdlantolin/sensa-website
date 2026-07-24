import { Cpu, Server, Radio, Code2, Sparkles } from 'lucide-react';

interface ArchitectureSectionProps {
  isDark: boolean;
}

// Tech Logos (SVG Helpers)
const ReactLogo = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);


const TailwindLogo = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8" />
  </svg>
);

const ChromeTechLogo = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="12" fill="#fff" />
    <path d="M3.2154,36A24,24,0,1,0,12,3.2154,24,24,0,0,0,3.2154,36ZM34.3923,18A12,12,0,1,1,18,13.6077,12,12,0,0,1,34.3923,18Z" fill="none" />
    <path d="M24,12H44.7812a23.9939,23.9939,0,0,0-41.5639.0029L13.6079,30l.0093-.0024A11.9852,11.9852,0,0,1,24,12Z" fill="#EA4335" />
    <circle cx="24" cy="24" r="9.5" fill="#1A73E8" />
    <path d="M34.3913,30.0029,24.0007,48A23.994,23.994,0,0,0,44.78,12.0031H23.9989l-.0025.0093A11.985,11.985,0,0,1,34.3913,30.0029Z" fill="#FBBC04" />
    <path d="M13.6086,30.0031,3.218,12.006A23.994,23.994,0,0,0,24.0025,48L34.3931,30.0029l-.0067-.0068a11.9852,11.9852,0,0,1-20.7778.007Z" fill="#34A853" />
  </svg>
);

const NodeLogo = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3L3 10.5v15L16 33l13-7.5v-15L16 3z" fill="#5FA04E" />
    <path d="M16 3L3 10.5v15L16 33" fill="#68A063" />
    <path d="M16 3v30l13-7.5v-15L16 3z" fill="#43853D" />
  </svg>
);

const AzureLogo = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Darker Left Leg / Pillar */}
    <path
      d="M37.2 6.8 C33.8 6.8 30.8 8.8 29.3 11.9 L4.8 66.8 C2.8 71.2 6.1 76.2 11 76.2 H41.6 L36.2 92 C35.2 95 38 97.8 41 97 L91.2 53.6 C93.6 51.5 93.6 47.7 91.2 45.6 L64 8.2 C62.5 6.8 60 6.8 58 6.8 H37.2 Z"
      fill="url(#az-fluent-1)"
    />
    {/* Light Blue Front Sweeping Ribbon */}
    <path
      d="M37.2 6.8 H58 C62 6.8 65.6 9.3 67.2 13 L93.6 69.5 C95.8 74.2 92.4 79.5 87.2 79.5 H64.2 C61.8 79.5 59.6 78 58.6 75.8 L37.2 6.8 Z"
      fill="url(#az-fluent-2)"
    />
    {/* Middle Blue Triangle Crossbar */}
    <path
      d="M29.5 62.5 L60 90.8 C61.8 92.5 64.8 91.2 64.8 88.8 V62.5 H29.5 Z"
      fill="url(#az-fluent-3)"
    />
    <defs>
      <linearGradient id="az-fluent-1" x1="4.8" y1="6.8" x2="64" y2="97" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0B55B3" />
        <stop offset="1" stopColor="#0078D4" />
      </linearGradient>
      <linearGradient id="az-fluent-2" x1="37.2" y1="6.8" x2="93.6" y2="79.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#50E6FF" />
        <stop offset="0.5" stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0078D4" />
      </linearGradient>
      <linearGradient id="az-fluent-3" x1="29.5" y1="62.5" x2="64.8" y2="90.8" gradientUnits="userSpaceOnUse">
        <stop stopColor="#004578" />
        <stop offset="1" stopColor="#0078D4" />
      </linearGradient>
    </defs>
  </svg>
);

const DeepgramLogo = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="5" fill="#000000" />
    <path
      d="M5.5 5.5A1 1 0 0 1 6.5 4.5h5A7.5 7.5 0 0 1 19 12v0a7.5 7.5 0 0 1-7.5 7.5h-5a1 1 0 0 1-1-1v-13zM9 8v8h2.5A3.5 3.5 0 0 0 15 12v0A3.5 3.5 0 0 0 11.5 8H9z"
      fill="#FFFFFF"
    />
  </svg>
);

const PlasmoLogo = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#8A56FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ArchitectureSection({ isDark }: ArchitectureSectionProps) {
  const stackCategories = [
    {
      title: 'Extension Architecture',
      tag: 'Frontend Engine',
      icon: Cpu,
      color: 'text-[#0A44FF] dark:text-[#6AA2FF]',
      borderHover: 'hover:border-[#0A44FF]/60 hover:shadow-[0_0_30px_rgba(10,68,255,0.18)]',
      accentLine: 'bg-[#0A44FF]',
      techs: [
        { name: 'Plasmo Framework', detail: 'Next-gen modular Chrome extension architecture', Logo: PlasmoLogo },
        { name: 'Chrome Manifest V3', detail: 'Service worker background scripts & secure API rules', Logo: ChromeTechLogo },
        { name: 'React 18 & TypeScript', detail: 'Strongly-typed component UI logic', Logo: ReactLogo },
        { name: 'Tailwind CSS & Lucide', detail: 'High-contrast accessible theme styling', Logo: TailwindLogo },
      ],
    },
    {
      title: 'AI & Cloud Infrastructure',
      tag: 'Backend Services',
      icon: Server,
      color: 'text-[#FF7A2F] dark:text-[#FFC09B]',
      borderHover: 'hover:border-[#FF7A2F]/60 hover:shadow-[0_0_30px_rgba(255,122,47,0.18)]',
      accentLine: 'bg-[#FF7A2F]',
      techs: [
        { name: 'Deepgram Nova-3 AI', detail: 'Low-latency real-time speech-to-text WebSocket engine', Logo: DeepgramLogo },
        { name: 'Azure Translator API', detail: 'Neural machine translation supporting 135+ languages', Logo: AzureLogo },
        { name: 'Node.js & WebSockets', detail: 'Real-time proxy server hosted on Render Cloud', Logo: NodeLogo },
        { name: 'Stateless Pipeline', detail: 'Zero data retention — streams processed live in memory', Logo: Sparkles },
      ],
    },
    {
      title: 'Audio Capture Pipeline',
      tag: 'Web Audio Engine',
      icon: Radio,
      color: 'text-[#8A56FF] dark:text-[#A855F7]',
      borderHover: 'hover:border-[#8A56FF]/60 hover:shadow-[0_0_30px_rgba(138,86,255,0.18)]',
      accentLine: 'bg-[#8A56FF]',
      techs: [
        { name: 'Chrome tabCapture API', detail: 'Raw audio stream interception from active browser tabs', Logo: ChromeTechLogo },
        { name: 'Chrome offscreen API', detail: 'Background Web Audio API processing sandbox', Logo: ChromeTechLogo },
        { name: 'Web Audio RMS Analyzer', detail: 'Real-time decibel analysis for >85dB sound warnings', Logo: Radio },
        { name: 'Canvas Audio Meter', detail: 'Visual frequency spectrum bar rendering', Logo: Sparkles },
      ],
    },
    {
      title: 'Speech & DOM Engine',
      tag: 'Browser APIs',
      icon: Code2,
      color: 'text-emerald-500 dark:text-emerald-400',
      borderHover: 'hover:border-emerald-500/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.18)]',
      accentLine: 'bg-emerald-500',
      techs: [
        { name: 'Web Speech API', detail: 'Hands-free voice recognition with fuzzy matching', Logo: ChromeTechLogo },
        { name: 'DOM Tracking Engine', detail: 'Live element bounding box magnifier lens tracking', Logo: Code2 },
        { name: 'SpeechSynthesis Utterance', detail: 'Multilingual Text-to-Speech webpage narrator', Logo: Sparkles },
        { name: 'Levenshtein Matcher', detail: 'Correction algorithm for imperfect voice inputs', Logo: Code2 },
      ],
    },
  ];

  return (
    <section
      id="tech-stack"
      className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center scroll-mt-[69px] md:scroll-mt-[71px] py-20 md:py-28 border-t ${
        isDark ? 'border-slate-800/80' : 'border-slate-200/60'
      }`}
    >
      {/* Cybernetic Grid Layer */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)] -z-10" />

      {/* Ambient Glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[160px] pointer-events-none -z-10 bg-[#0A44FF] transform-gpu ${
          isDark ? 'opacity-20' : 'opacity-10'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            System Architecture
          </h2>
          <p className={`text-base md:text-xl leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Built on modern web standards, cloud AI APIs, and browser extension APIs for low-latency accessibility.
          </p>
        </div>

        {/* 4 Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {stackCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <article
                key={idx}
                className={`group border rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.01] relative overflow-hidden ${category.borderHover} ${
                  isDark
                    ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 shadow-sm'
                    : 'bg-white border-slate-200/80 ring-1 ring-black/5 shadow-sm'
                }`}
              >
                <div className={`absolute top-0 left-8 right-8 h-1 rounded-b-full ${category.accentLine} opacity-40 group-hover:opacity-100 transition-opacity duration-300`} />
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Icon size={26} className={category.color} />
                      <h3 className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {category.title}
                      </h3>
                    </div>
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold border ${
                      isDark ? 'bg-white/5 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}>
                      {category.tag}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {category.techs.map((tech, tIdx) => {
                      const TechLogoComponent = tech.Logo;
                      return (
                        <div
                          key={tIdx}
                          className={`p-3.5 rounded-2xl border flex flex-col gap-0.5 transition-colors ${
                            isDark ? 'bg-black/30 border-slate-800/80 group-hover:border-slate-700/80' : 'bg-slate-50/80 border-slate-200/60 group-hover:border-slate-300'
                          }`}
                        >
                          <span className={`text-sm font-bold flex items-center gap-2.5 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                            <span className="shrink-0 flex items-center justify-center">
                              <TechLogoComponent size={18} />
                            </span>
                            {tech.name}
                          </span>
                          <span className={`text-xs leading-relaxed pl-7 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            {tech.detail}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
