import { Cpu, Server, Mic, Volume2, Headphones, Eye, Network, Radio, Code2, Cloud, Globe } from 'lucide-react';

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
    <path
      d="M37.2 6.8 C33.8 6.8 30.8 8.8 29.3 11.9 L4.8 66.8 C2.8 71.2 6.1 76.2 11 76.2 H41.6 L36.2 92 C35.2 95 38 97.8 41 97 L91.2 53.6 C93.6 51.5 93.6 47.7 91.2 45.6 L64 8.2 C62.5 6.8 60 6.8 58 6.8 H37.2 Z"
      fill="url(#az-fluent-1)"
    />
    <path
      d="M37.2 6.8 H58 C62 6.8 65.6 9.3 67.2 13 L93.6 69.5 C95.8 74.2 92.4 79.5 87.2 79.5 H64.2 C61.8 79.5 59.6 78 58.6 75.8 L37.2 6.8 Z"
      fill="url(#az-fluent-2)"
    />
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

const RenderCloudLogo = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="5" fill="#000000" />
    <path
      d="M7 17V7h5.5c2.2 0 3.8 1.4 3.8 3.3 0 1.4-.8 2.5-2.1 3l2.6 3.7H14.4l-2.3-3.3H9.2V17H7zm2.2-5.3h3.1c.9 0 1.6-.6 1.6-1.4 0-.8-.7-1.4-1.6-1.4H9.2v2.8z"
      fill="#46E3B7"
    />
  </svg>
);

export default function ArchitectureSection({ isDark }: ArchitectureSectionProps) {
  // Part 1: Frontend vs Backend Core Infrastructure
  const coreInfrastructure = [
    {
      title: 'Frontend Architecture',
      tag: 'Chrome Extension Client',
      icon: Cpu,
      color: 'text-[#0A44FF] dark:text-[#6AA2FF]',
      borderHover: 'hover:border-[#0A44FF]/60 hover:shadow-[0_0_35px_rgba(10,68,255,0.2)]',
      accentLine: 'bg-[#0A44FF]',
      items: [
        { name: 'Plasmo Framework', detail: 'Next-gen modular Manifest V3 extension architecture', Logo: PlasmoLogo },
        { name: 'React 18 & TypeScript', detail: 'Strongly-typed component UI state & reactive hooks', Logo: ReactLogo },
        { name: 'Tailwind CSS & Lucide', detail: 'High-contrast accessible theme styling system', Logo: TailwindLogo },
        { name: 'DOM Lens & Levenshtein Engine', detail: 'Live element magnifier lens tracking & fuzzy voice matcher', Logo: Code2 },
      ],
    },
    {
      title: 'Backend Architecture',
      tag: 'Cloud Server Infrastructure',
      icon: Server,
      color: 'text-[#FF7A2F] dark:text-[#FFC09B]',
      borderHover: 'hover:border-[#FF7A2F]/60 hover:shadow-[0_0_35px_rgba(255,122,47,0.2)]',
      accentLine: 'bg-[#FF7A2F]',
      items: [
        { name: 'Render Cloud Hosting', detail: 'Scalable cloud server host for Sensa real-time proxy service', Logo: RenderCloudLogo },
        { name: 'Node.js & WebSocket Proxy', detail: 'Low-latency streaming gateway between Chrome Extension & Cloud AI', Logo: NodeLogo },
        { name: 'Stateless Streaming Pipeline', detail: 'Zero data retention — streams processed live in memory', Logo: Code2 },
        { name: 'Privacy-First Architecture', detail: 'No user audio or transcripts stored on backend servers', Logo: Globe },
      ],
    },
  ];

  // Part 2: 14 Integrated APIs Specification across 3 Architectural Layers
  const architecturalLayers = [
    {
      layerNumber: 'Layer 1',
      title: 'External Cloud AI APIs',
      icon: Cloud,
      color: 'text-[#FF7A2F] dark:text-[#FFC09B]',
      borderHover: 'hover:border-[#FF7A2F]/60 hover:shadow-[0_0_30px_rgba(255,122,47,0.18)]',
      accentLine: 'bg-[#FF7A2F]',
      gridCols: 'grid-cols-1 md:grid-cols-2',
      apis: [
        {
          name: 'Azure Translator Text API',
          spec: 'v3.0 REST API',
          purpose: 'Real-time neural translation of live subtitles into 135+ target languages.',
          Logo: AzureLogo,
        },
        {
          name: 'Deepgram Speech-to-Text WebSocket API',
          spec: 'Nova-3 Model',
          purpose: 'High-speed, real-time audio transcription with word-level timestamps across 47+ spoken languages.',
          Logo: DeepgramLogo,
        },
      ],
    },
    {
      layerNumber: 'Layer 2',
      title: 'Browser & Web Platform Native APIs',
      icon: Globe,
      color: 'text-[#8A56FF] dark:text-[#A855F7]',
      borderHover: 'hover:border-[#8A56FF]/60 hover:shadow-[0_0_30px_rgba(138,86,255,0.18)]',
      accentLine: 'bg-[#8A56FF]',
      gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      apis: [
        {
          name: 'Web Audio API',
          spec: 'AudioContext, AnalyserNode, ScriptProcessorNode',
          purpose: 'Tab audio capture processing, real-time volume RMS visualization, and sudden sound warning alerts (>85dB).',
          Logo: Radio,
        },
        {
          name: 'Web Speech API — SpeechRecognition',
          spec: 'webkitSpeechRecognition',
          purpose: 'Hands-free voice command recognition ("read", "stop", "faster", "slower", "magnifier").',
          Logo: Mic,
        },
        {
          name: 'Web Speech API — SpeechSynthesis',
          spec: 'window.speechSynthesis, SpeechSynthesisUtterance',
          purpose: 'Screen reader text-to-speech narration, hover mouse reader, and UI voice guide audio feedback.',
          Logo: Volume2,
        },
        {
          name: 'MediaStreams API & Sink Audio Bridge',
          spec: 'MediaStream, HTMLAudioElement.setSinkId',
          purpose: 'Routes captured tab audio back to user speakers/headphones while generating subtitles to prevent audio muting.',
          Logo: Headphones,
        },
        {
          name: 'MutationObserver API',
          spec: 'DOM Mutation Observer',
          purpose: 'Live DOM change tracking for screen magnifier lens pop-in and real-time paragraph element highlighting.',
          Logo: Eye,
        },
        {
          name: 'WebSocket API',
          spec: 'new WebSocket',
          purpose: 'Low-latency, bi-directional streaming connection between the Chrome Extension and Node.js backend.',
          Logo: Network,
        },
      ],
    },
    {
      layerNumber: 'Layer 3',
      title: 'Chrome Extension Manifest V3 APIs',
      icon: Cpu,
      color: 'text-[#0A44FF] dark:text-[#6AA2FF]',
      borderHover: 'hover:border-[#0A44FF]/60 hover:shadow-[0_0_30px_rgba(10,68,255,0.18)]',
      accentLine: 'bg-[#0A44FF]',
      gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      apis: [
        {
          name: 'chrome.tabCapture API',
          spec: 'Manifest V3 Tab Capture',
          purpose: 'Captures raw playing audio streams from active browser tabs (YouTube, lectures, calls).',
          Logo: ChromeTechLogo,
        },
        {
          name: 'chrome.offscreen API',
          spec: 'Offscreen Document Sandbox',
          purpose: 'Manages background offscreen documents (audioproxy.html) to process audio streams continuously without being terminated by MV3 service worker timeouts.',
          Logo: ChromeTechLogo,
        },
        {
          name: 'chrome.storage.local API',
          spec: 'Persistent Extension Storage',
          purpose: 'Persistent local storage for user preferences, sensory settings, font choices, custom colors, and transcript logs.',
          Logo: ChromeTechLogo,
        },
        {
          name: 'chrome.scripting API',
          spec: 'Dynamic Script Injection',
          purpose: 'Dynamically injects content scripts and accessibility overlays across active web tabs.',
          Logo: ChromeTechLogo,
        },
        {
          name: 'chrome.runtime API',
          spec: 'Extension Messaging Bus',
          purpose: 'Inter-component messaging between Popup, Content Scripts, Service Worker, and Offscreen Document.',
          Logo: ChromeTechLogo,
        },
        {
          name: 'chrome.tabs API',
          spec: 'Tab Management Engine',
          purpose: 'Tab management, tab audio stream identification, and cross-tab UI state broadcasting.',
          Logo: ChromeTechLogo,
        },
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
            Sensa's Frontend Chrome Extension and Render-hosted Backend, coupled with 14 native & cloud APIs across 3 architectural layers.
          </p>
        </div>

        {/* Part 1: Frontend vs Backend Core Infrastructure */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Cpu size={22} className="text-[#0A44FF] dark:text-[#6AA2FF]" />
            <h3 className={`text-xl md:text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Frontend & Backend Core Infrastructure
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {coreInfrastructure.map((side, idx) => {
              const MainIcon = side.icon;
              return (
                <article
                  key={idx}
                  className={`group border rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.005] relative overflow-hidden ${side.borderHover} ${
                    isDark
                      ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 shadow-md'
                      : 'bg-white border-slate-200/80 ring-1 ring-black/5 shadow-md'
                  }`}
                >
                  <div className={`absolute top-0 left-8 right-8 h-1 rounded-b-full ${side.accentLine} opacity-50`} />

                  <div>
                    <div className="flex items-center gap-3.5 mb-6 pb-6 border-b border-slate-200/60 dark:border-slate-800/80">
                      <div className={`p-3.5 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-slate-100'} shrink-0`}>
                        <MainIcon size={28} className={side.color} />
                      </div>
                      <div>
                        <h4 className={`text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {side.title}
                        </h4>
                        <p className={`text-xs font-semibold ${side.color}`}>
                          {side.tag}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {side.items.map((item, iIdx) => {
                        const ItemLogo = item.Logo;
                        return (
                          <div
                            key={iIdx}
                            className={`p-3.5 rounded-2xl border flex flex-col gap-0.5 transition-colors ${
                              isDark ? 'bg-black/40 border-slate-800/80 hover:border-slate-700' : 'bg-slate-50/80 border-slate-200/60 hover:border-slate-300'
                            }`}
                          >
                            <span className={`text-sm font-bold flex items-center gap-2.5 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                              <span className="shrink-0 flex items-center justify-center">
                                <ItemLogo size={18} className={side.color} />
                              </span>
                              {item.name}
                            </span>
                            <p className={`text-xs leading-relaxed m-0 pl-7 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                              {item.detail}
                            </p>
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

        {/* Part 2: 14 Integrated APIs Specification across 3 Architectural Layers */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Globe size={22} className="text-[#8A56FF] dark:text-[#A855F7]" />
            <h3 className={`text-xl md:text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              14 Integrated APIs Across 3 Architectural Layers
            </h3>
          </div>

          <div className="space-y-12">
            {architecturalLayers.map((layer, lIdx) => {
              const LayerIcon = layer.icon;
              return (
                <div
                  key={lIdx}
                  className={`border rounded-[2.5rem] p-6 md:p-8 transition-all duration-500 relative overflow-hidden ${layer.borderHover} ${
                    isDark
                      ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 shadow-md'
                      : 'bg-white border-slate-200/80 ring-1 ring-black/5 shadow-md'
                  }`}
                >
                  <div className={`absolute top-0 left-8 right-8 h-1 rounded-b-full ${layer.accentLine} opacity-50`} />

                  {/* Layer Header */}
                  <div className="flex items-center gap-3.5 mb-8 pb-6 border-b border-slate-200/60 dark:border-slate-800/80">
                    <div className={`p-3 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-slate-100'} shrink-0`}>
                      <LayerIcon size={26} className={layer.color} />
                    </div>
                    <div>
                      <span className={`text-xs font-mono font-bold uppercase tracking-wider ${layer.color}`}>
                        {layer.layerNumber}
                      </span>
                      <h4 className={`text-xl md:text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {layer.title}
                      </h4>
                    </div>
                  </div>

                  {/* API Cards Grid */}
                  <div className={`grid ${layer.gridCols} gap-4 items-stretch`}>
                    {layer.apis.map((api, aIdx) => {
                      const ApiLogoComponent = api.Logo;
                      return (
                        <div
                          key={aIdx}
                          className={`p-4 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
                            isDark
                              ? 'bg-black/40 border-slate-800/80 hover:border-slate-700'
                              : 'bg-slate-50/90 border-slate-200/70 hover:border-slate-300'
                          }`}
                        >
                          <div>
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <span className={`text-sm font-bold flex items-center gap-2.5 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                                <span className="shrink-0 flex items-center justify-center">
                                  <ApiLogoComponent size={18} className={layer.color} />
                                </span>
                                {api.name}
                              </span>
                            </div>
                            <span className={`inline-block text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md mb-2.5 border ${
                              isDark ? 'bg-white/5 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-500'
                            }`}>
                              {api.spec}
                            </span>
                            <p className={`text-xs leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                              {api.purpose}
                            </p>
                          </div>
                        </div>
                      );
                    })}
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
