import { Cpu, Server, Radio, Code2, Sparkles, Terminal } from 'lucide-react';

interface TechStackSectionProps {
  isDark: boolean;
}

export default function TechStackSection({ isDark }: TechStackSectionProps) {
  const stackCategories = [
    {
      title: 'Extension Architecture',
      tag: 'Frontend Engine',
      icon: Cpu,
      color: 'text-[#0A44FF] dark:text-[#6AA2FF]',
      borderHover: 'hover:border-[#0A44FF]/60 hover:shadow-[0_0_30px_rgba(10,68,255,0.18)]',
      accentLine: 'bg-[#0A44FF]',
      techs: [
        { name: 'Plasmo Framework', detail: 'Next-gen modular Chrome extension architecture' },
        { name: 'Chrome Manifest V3', detail: 'Service worker background scripts & secure API rules' },
        { name: 'React 18 & TypeScript', detail: 'Strongly-typed component UI logic' },
        { name: 'Tailwind CSS & Lucide', detail: 'High-contrast accessible theme styling' },
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
        { name: 'Deepgram Nova-3 AI', detail: 'Low-latency real-time speech-to-text WebSocket engine' },
        { name: 'Azure Translator API', detail: 'Neural machine translation supporting 135+ languages' },
        { name: 'Node.js & WebSockets', detail: 'Real-time proxy server hosted on Render Cloud' },
        { name: 'Stateless Pipeline', detail: 'Zero data retention — streams processed live in memory' },
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
        { name: 'Chrome tabCapture API', detail: 'Raw audio stream interception from active browser tabs' },
        { name: 'Chrome offscreen API', detail: 'Background Web Audio API processing sandbox' },
        { name: 'Web Audio RMS Analyzer', detail: 'Real-time decibel analysis for >85dB sound warnings' },
        { name: 'Canvas Audio Meter', detail: 'Visual frequency spectrum bar rendering' },
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
        { name: 'Web Speech API', detail: 'Hands-free voice recognition with fuzzy matching' },
        { name: 'DOM Tracking Engine', detail: 'Live element bounding box magnifier lens tracking' },
        { name: 'SpeechSynthesis Utterance', detail: 'Multilingual Text-to-Speech webpage narrator' },
        { name: 'Levenshtein Matcher', detail: 'Correction algorithm for imperfect voice inputs' },
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
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold border mb-4 ${
            isDark ? 'bg-[#0A44FF]/20 text-[#6AA2FF] border-[#0A44FF]/30' : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20'
          }`}>
            <Terminal size={14} />
            <span>Technical Specification</span>
          </div>
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
                    {category.techs.map((tech, tIdx) => (
                      <div
                        key={tIdx}
                        className={`p-3.5 rounded-2xl border flex flex-col gap-0.5 transition-colors ${
                          isDark ? 'bg-black/30 border-slate-800/80 group-hover:border-slate-700/80' : 'bg-slate-50/80 border-slate-200/60 group-hover:border-slate-300'
                        }`}
                      >
                        <span className={`text-sm font-bold flex items-center gap-2 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                          <Sparkles size={14} className={category.color} />
                          {tech.name}
                        </span>
                        <span className={`text-xs leading-relaxed pl-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                          {tech.detail}
                        </span>
                      </div>
                    ))}
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
