import { Cpu, Server, Cloud, Globe, Mic, Volume2, Headphones, Eye, Network, Radio, ExternalLink } from 'lucide-react';
import azureLogo from '../assets/azure-logo.png';
import plasmoLogo from '../assets/plasmo-logo.png';
import renderLogo from '../assets/render-logo.png';
import ScrollReveal from './ScrollReveal';

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
  <img src={azureLogo} width={size} height={size} alt="Azure Logo" className="object-contain" />
);

const DeepgramLogo = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#000000" />
    <g transform="translate(3.5, 3.5) scale(0.70)">
      <path
        d="M11.203 24H1.517a.364.364 0 0 1-.258-.62l6.239-6.275a.366.366 0 0 1 .259-.108h3.52c2.723 0 5.025-2.127 5.107-4.845a5.004 5.004 0 0 0-4.999-5.148H7.613v4.646c0 .2-.164.364-.365.364H.968a.365.365 0 0 1-.363-.364V.364C.605.164.768 0 .969 0h10.416c6.684 0 12.111 5.485 12.01 12.187C23.293 18.77 17.794 24 11.202 24z"
        fill="#FFFFFF"
      />
    </g>
  </svg>
);

const GoogleLogo = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const PlasmoLogo = ({ size = 18 }: { size?: number }) => (
  <img src={plasmoLogo} width={size} height={size} alt="Plasmo Framework Logo" className="object-contain rounded-sm" />
);

const RenderCloudLogo = ({ size = 18 }: { size?: number }) => (
  <img src={renderLogo} width={size} height={size} alt="Render Cloud Logo" className="object-contain rounded-sm" />
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
        { name: 'Plasmo Framework', detail: 'Modern Chrome extension framework supporting Manifest V3 for high performance, security, and modularity.', Logo: PlasmoLogo, url: 'https://docs.plasmo.com/' },
        { name: 'React 18 & TypeScript', detail: 'Powers fast, interactive overlay tools with strict type-safety to prevent runtime errors.', Logo: ReactLogo, url: 'https://react.dev/' },
        { name: 'Tailwind CSS & Lucide', detail: 'Utility-first design system delivering high-contrast WCAG 2.1 AAA visual themes and accessible icons.', Logo: TailwindLogo, url: 'https://tailwindcss.com/' },
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
        { name: 'Render Cloud Hosting', detail: 'Secure 24/7 cloud infrastructure hosting our speech relay servers with low-latency global connections.', Logo: RenderCloudLogo, url: 'https://render.com/' },
        { name: 'Node.js & WebSocket Proxy', detail: 'Real-time backend relay streaming live browser audio directly to our AI engines without delay.', Logo: NodeLogo, url: 'https://nodejs.org/' },
      ],
    },
  ];

  // Part 2: 15 Integrated APIs Specification across 3 Architectural Layers
  const architecturalLayers = [
    {
      layerNumber: 'Layer 1',
      title: 'External Cloud APIs',
      icon: Cloud,
      color: 'text-[#FF7A2F] dark:text-[#FFC09B]',
      borderHover: 'hover:border-[#FF7A2F]/60 hover:shadow-[0_0_30px_rgba(255,122,47,0.18)]',
      accentLine: 'bg-[#FF7A2F]',
      gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      apis: [
        {
          name: 'Azure Translator Text API',
          spec: 'v3.0 REST API',
          purpose: 'Real-time cloud translation engine converting live speech into 135+ supported languages.',
          Logo: AzureLogo,
          url: 'https://learn.microsoft.com/en-us/azure/ai-services/translator/',
        },
        {
          name: 'Deepgram Speech-to-Text WebSocket API',
          spec: 'Nova-3 Model',
          purpose: 'AI-powered speech recognition engine (Nova-3) providing instant, highly accurate live subtitling.',
          Logo: DeepgramLogo,
          url: 'https://developers.deepgram.com/docs/speech-to-text',
        },
        {
          name: 'Google Fonts Developer API',
          spec: 'Google Web Fonts v1',
          purpose: 'Loads accessible, specialized web fonts (like OpenDyslexic, Outfit, and Inter) for effortless reading.',
          Logo: GoogleLogo,
          url: 'https://developers.google.com/fonts/docs/developer_api',
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
          purpose: 'Monitors tab audio frequencies to instantly alert users when sudden loud sounds occur.',
          Logo: Radio,
          url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API',
        },
        {
          name: 'Web Speech API — SpeechRecognition',
          spec: 'webkitSpeechRecognition',
          purpose: 'Captures voice commands through your microphone for complete hands-free site navigation.',
          Logo: Mic,
          url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition',
        },
        {
          name: 'Web Speech API — SpeechSynthesis',
          spec: 'window.speechSynthesis, SpeechSynthesisUtterance',
          purpose: 'Converts webpage text into natural spoken audio so users can listen instead of straining their eyes.',
          Logo: Volume2,
          url: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis',
        },
        {
          name: 'MediaStreams API & Sink Audio Bridge',
          spec: 'MediaStream, HTMLAudioElement.setSinkId',
          purpose: 'Captures live tab audio for subtitle processing while keeping original video sound playing smoothly.',
          Logo: Headphones,
          url: 'https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API',
        },
        {
          name: 'MutationObserver API',
          spec: 'DOM Mutation Observer',
          purpose: 'Tracks DOM page changes in real time so active text highlighting stays synced while scrolling.',
          Logo: Eye,
          url: 'https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver',
        },
        {
          name: 'WebSocket API',
          spec: 'new WebSocket',
          purpose: 'Establishes persistent full-duplex connections for instant, continuous audio and caption streaming.',
          Logo: Network,
          url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSocket',
        },
      ],
    },
    {
      layerNumber: 'Layer 3',
      title: 'Chrome Extension Manifest V3 APIs',
      icon: Cpu,
      color: 'text-[#0A44FF] dark:text-[#6AA2FF]',
      borderHover: 'hover:border-[#0A44FF]/60 hover:shadow-[0_0_35px_rgba(10,68,255,0.18)]',
      accentLine: 'bg-[#0A44FF]',
      gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      apis: [
        {
          name: 'chrome.tabCapture API',
          spec: 'Manifest V3 Tab Capture',
          purpose: 'Safely captures live audio directly from the active browser tab to generate real-time subtitles.',
          Logo: ChromeTechLogo,
          url: 'https://developer.chrome.com/docs/extensions/reference/api/tabCapture',
        },
        {
          name: 'chrome.offscreen API',
          spec: 'Offscreen Document Sandbox',
          purpose: 'Runs audio processing securely in background documents without slowing down your active web pages.',
          Logo: ChromeTechLogo,
          url: 'https://developer.chrome.com/docs/extensions/reference/api/offscreen',
        },
        {
          name: 'chrome.storage.local API',
          spec: 'Persistent Extension Storage',
          purpose: 'Saves custom user preferences locally on your device without storing any private data in the cloud.',
          Logo: ChromeTechLogo,
          url: 'https://developer.chrome.com/docs/extensions/reference/api/storage',
        },
        {
          name: 'chrome.scripting API',
          spec: 'Dynamic Script Injection',
          purpose: 'Injects dynamic accessibility overlays, color filters, and reader tools directly onto visited sites.',
          Logo: ChromeTechLogo,
          url: 'https://developer.chrome.com/docs/extensions/reference/api/scripting',
        },
        {
          name: 'chrome.runtime API',
          spec: 'Extension Messaging Bus',
          purpose: 'Handles fast internal messaging between extension components, background workers, and overlays.',
          Logo: ChromeTechLogo,
          url: 'https://developer.chrome.com/docs/extensions/reference/api/runtime',
        },
        {
          name: 'chrome.tabs API',
          spec: 'Tab Management Engine',
          purpose: 'Identifies the active browser tab to activate targeted subtitles, voice controls, and visual tools.',
          Logo: ChromeTechLogo,
          url: 'https://developer.chrome.com/docs/extensions/reference/api/tabs',
        },
      ],
    },
  ];

  return (
    <section
      id="tech-stack"
      className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center py-20 md:py-28 border-t ${isDark ? 'border-slate-800/80' : 'border-slate-200/60'
        }`}
    >
      {/* Cybernetic Grid Layer */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)] -z-10" />

      {/* Ambient Glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[160px] pointer-events-none -z-10 bg-[#0A44FF] transform-gpu ${isDark ? 'opacity-20' : 'opacity-10'
          }`}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        {/* Section Header */}
        <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            How Sensa Works
          </h2>
          <p className={`text-base md:text-xl leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            A look behind the scenes at the powerful technologies that make Sensa run smoothly and securely.
          </p>
        </div>
        </ScrollReveal>

        {/* Part 1: Frontend vs Backend Core Infrastructure */}
        <ScrollReveal delay={100}>
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Cpu size={22} className="text-[#0A44FF] dark:text-[#6AA2FF]" aria-hidden="true" />
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
                  className={`group border rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.005] relative overflow-hidden ${side.borderHover} ${isDark
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
                          <a
                            key={iIdx}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-3.5 rounded-2xl border flex flex-col gap-0.5 transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A44FF] ${isDark
                                ? 'bg-black/40 border-slate-800/80 hover:border-slate-600 hover:bg-black/60'
                                : 'bg-slate-50/80 border-slate-200/60 hover:border-slate-300 hover:bg-slate-100'
                              }`}
                          >
                            <span className={`text-sm font-bold flex items-center justify-between gap-2.5 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                              <span className="flex items-center gap-2.5">
                                <span className={`shrink-0 flex items-center justify-center ${side.color}`}>
                                  <ItemLogo size={18} />
                                </span>
                                {item.name}
                              </span>
                              <ExternalLink size={13} className={`shrink-0 opacity-40 group-hover:opacity-100 transition-opacity ${side.color}`} aria-hidden="true" />
                            </span>
                            <p className={`text-xs leading-relaxed m-0 pl-7 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                              {item.detail}
                            </p>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        </ScrollReveal>

        {/* Part 2: 15 Integrated APIs Specification across 3 Architectural Layers */}
        <div>
          <ScrollReveal delay={150}>
          <div className="flex items-center gap-3 mb-8">
            <Globe size={22} className="text-[#8A56FF] dark:text-[#A855F7]" aria-hidden="true" />
            <h3 className={`text-2xl md:text-3xl lg:text-4xl font-black m-0 tracking-tight flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              The 3 Core Layers of Sensa
            </h3>
          </div>
          </ScrollReveal>

          <div className="space-y-12">
            {architecturalLayers.map((layer, lIdx) => {
              const LayerIcon = layer.icon;
              return (
                <ScrollReveal delay={150 + (lIdx * 100)} key={lIdx}>
                <div
                  className={`border rounded-[2.5rem] p-6 md:p-8 transition-all duration-500 relative overflow-hidden ${layer.borderHover} ${isDark
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
                        <a
                          key={aIdx}
                          href={api.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-4 rounded-2xl border flex flex-col justify-between transition-all duration-300 group hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A44FF] ${isDark
                              ? 'bg-black/40 border-slate-800/80 hover:border-slate-600 hover:bg-black/60'
                              : 'bg-slate-50/90 border-slate-200/70 hover:border-slate-300 hover:bg-slate-100'
                            }`}
                        >
                          <div>
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <span className={`text-sm font-bold flex items-center gap-2.5 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                                <span className={`shrink-0 flex items-center justify-center ${layer.color}`}>
                                  <ApiLogoComponent size={18} />
                                </span>
                                {api.name}
                              </span>
                              <ExternalLink size={13} className={`shrink-0 opacity-40 group-hover:opacity-100 transition-opacity ${layer.color}`} aria-hidden="true" />
                            </div>
                            <span className={`block text-xs font-mono font-semibold mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                              {api.spec}
                            </span>
                            <p className={`text-xs leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                              {api.purpose}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
