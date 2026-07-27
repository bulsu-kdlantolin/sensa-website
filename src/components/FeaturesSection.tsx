import { Mic, Maximize2, Volume2, Ear, BellRing, Sparkles, Download, Eye, Languages, ShieldAlert, MousePointer, Activity } from 'lucide-react';

interface FeaturesSectionProps {
  isDark: boolean;
}

export default function FeaturesSection({ isDark }: FeaturesSectionProps) {
  return (
    <section
      id="features"
      className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center py-20 md:py-28 border-t ${isDark ? 'border-slate-800/80' : 'border-slate-200/60'
        }`}
    >
      {/* Cybernetic Grid Layer */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)] -z-10" />

      {/* Visual Mode Ambient Background Glow */}
      <div
        className={`absolute top-[20%] left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[420px] rounded-full blur-[160px] pointer-events-none -z-10 bg-[#0A44FF] transform-gpu ${isDark ? 'opacity-20' : 'opacity-10'
          }`}
      />

      {/* Auditory Mode Ambient Background Glow */}
      <div
        className={`absolute top-[70%] right-1/4 translate-x-1/2 -translate-y-1/2 w-[700px] h-[420px] rounded-full blur-[160px] pointer-events-none -z-10 bg-[#FF7A2F] transform-gpu ${isDark ? 'opacity-20' : 'opacity-10'
          }`}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        {/* Section Main Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2
            className={`text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'
              }`}
          >
            Core Features Showcase
          </h2>
          <p
            className={`text-base md:text-xl leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
          >
            A comprehensive suite of visual and auditory accessibility tools engineered to tear down web barriers.
          </p>
        </div>

        {/* ==========================================================================
           VISUAL ACCOMMODATION MODE (#0A44FF Royal Blue Theme)
           ========================================================================== */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10 pb-4 border-b border-[#0A44FF]/30">
            <h3 className={`text-2xl md:text-3xl lg:text-4xl font-black m-0 tracking-tight flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <span>👁️</span>
              <span>Visual Mode</span>
            </h3>
          </div>

          {/* 3 Main Visual Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-10">
            {/* Card 1: Voice Command Navigation */}
            <article
              className={`group border rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] relative overflow-hidden ${isDark
                  ? 'bg-[#161618] border-slate-800 hover:border-[#0A44FF]/70 hover:shadow-[0_0_35px_rgba(10,68,255,0.2)]'
                  : 'bg-white border-slate-200/80 shadow-sm hover:border-[#0A44FF]/50 hover:shadow-[0_12px_35px_rgba(10,68,255,0.12)]'
                }`}
            >
              <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-[#0A44FF] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A44FF]/10 text-[#0A44FF] dark:text-[#6AA2FF] flex items-center justify-center shrink-0">
                    <Mic size={24}  aria-hidden="true"/>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold border bg-[#0A44FF]/10 text-[#0A44FF] dark:text-[#6AA2FF] border-[#0A44FF]/20 uppercase tracking-wider">
                    Voice Recognition
                  </span>
                </div>
                <h4 className={`text-xl font-bold tracking-tight mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Voice Command Navigation
                </h4>
                <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Control the website using just your voice. Our smart system understands what you say, even if you don't say the command perfectly.
                </p>

                <div className={`p-4 rounded-2xl border ${isDark ? 'bg-black/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-xs font-mono font-bold text-[#0A44FF] dark:text-[#6AA2FF] uppercase tracking-wider block mb-2">
                    Supported Commands:
                  </span>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {['"read"', '"stop"', '"next"', '"previous"', '"faster"', '"slower"', '"magnifier"'].map((cmd, i) => (
                      <span key={i} className={`px-2 py-0.5 rounded border ${isDark ? 'bg-slate-900 border-slate-700 text-slate-300' : 'bg-white border-slate-300 text-slate-700'}`}>
                        {cmd}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Card 2: Screen Reader (Text-to-Speech) */}
            <article
              className={`group border rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] relative overflow-hidden ${isDark
                  ? 'bg-[#161618] border-slate-800 hover:border-[#0A44FF]/70 hover:shadow-[0_0_35px_rgba(10,68,255,0.2)]'
                  : 'bg-white border-slate-200/80 shadow-sm hover:border-[#0A44FF]/50 hover:shadow-[0_12px_35px_rgba(10,68,255,0.12)]'
                }`}
            >
              <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-[#0A44FF] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A44FF]/10 text-[#0A44FF] dark:text-[#6AA2FF] flex items-center justify-center shrink-0">
                    <Volume2 size={24}  aria-hidden="true"/>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold border bg-[#0A44FF]/10 text-[#0A44FF] dark:text-[#6AA2FF] border-[#0A44FF]/20 uppercase tracking-wider">
                    Text-to-Speech
                  </span>
                </div>
                <h4 className={`text-xl font-bold tracking-tight mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Screen Reader (TTS Engine)
                </h4>
                <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  A smart reader that reads the webpage out loud to you. It highlights each paragraph as it reads so you never lose your place.
                </p>

                <div className="space-y-3 text-xs">
                  <div className={`p-3 rounded-xl border ${isDark ? 'bg-black/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="font-bold text-[#0A44FF] dark:text-[#6AA2FF] block mb-1">Playback Controls:</span>
                    <p className={`m-0 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Read, Stop, Next, Previous, & Restart paragraph.</p>
                  </div>
                  <div className={`p-3 rounded-xl border ${isDark ? 'bg-black/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="font-bold text-[#0A44FF] dark:text-[#6AA2FF] block mb-1">Customizations:</span>
                    <p className={`m-0 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Speech rate speed, TTS voice selector, auto-scrolling, & paragraph highlight colors.</p>
                  </div>
                </div>
              </div>
            </article>

            {/* Card 3: Screen Magnifier */}
            <article
              className={`group border rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] relative overflow-hidden ${isDark
                  ? 'bg-[#161618] border-slate-800 hover:border-[#0A44FF]/70 hover:shadow-[0_0_35px_rgba(10,68,255,0.2)]'
                  : 'bg-white border-slate-200/80 shadow-sm hover:border-[#0A44FF]/50 hover:shadow-[0_12px_35px_rgba(10,68,255,0.12)]'
                }`}
            >
              <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-[#0A44FF] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A44FF]/10 text-[#0A44FF] dark:text-[#6AA2FF] flex items-center justify-center shrink-0">
                    <Maximize2 size={24}  aria-hidden="true"/>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold border bg-[#0A44FF]/10 text-[#0A44FF] dark:text-[#6AA2FF] border-[#0A44FF]/20 uppercase tracking-wider">
                    Magnifying Glass
                  </span>
                </div>
                <h4 className={`text-xl font-bold tracking-tight mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Screen Magnifier
                </h4>
                <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  A floating magnifying glass that helps you read small text easily.
                </p>

                <div className={`p-4 rounded-2xl border ${isDark ? 'bg-black/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <ul className="space-y-2 text-xs m-0 p-0 list-none">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A44FF]" />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}><strong>Instant Display:</strong> Appears the second you need it.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A44FF]" />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}><strong>Smart Tracking:</strong> Follows the text you are currently reading.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A44FF]" />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}><strong>Adjustable Zoom:</strong> Make text as big as you need.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>

          {/* Visual Micro-Accommodations Banner (Extra Features) */}
          <div
            className={`border rounded-2xl p-6 ${isDark
                ? 'bg-[#0A44FF]/10 border-[#0A44FF]/30'
                : 'bg-[#0A44FF]/5 border-[#0A44FF]/20'
              }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={18} className="text-[#0A44FF] dark:text-[#6AA2FF]"  aria-hidden="true"/>
              <h5 className={`text-sm font-mono font-bold uppercase tracking-wider ${isDark ? 'text-[#6AA2FF]' : 'text-[#0A44FF]'}`}>
                Helpful Visual Extras
              </h5>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Micro 1: Voice Guide */}
              <div className={`p-4 rounded-xl border ${isDark ? 'bg-[#161618] border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center gap-2 mb-1.5">
                  <Mic size={16} className="text-[#0A44FF] dark:text-[#6AA2FF]"  aria-hidden="true"/>
                  <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Voice Guide</span>
                </div>
                <p className={`text-xs leading-relaxed m-0 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Hear the names of buttons when you rest your mouse over them.
                </p>
              </div>

              {/* Micro 2: Highlight Reader */}
              <div className={`p-4 rounded-xl border ${isDark ? 'bg-[#161618] border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center gap-2 mb-1.5">
                  <MousePointer size={16} className="text-[#0A44FF] dark:text-[#6AA2FF]"  aria-hidden="true"/>
                  <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Highlight Reader</span>
                </div>
                <p className={`text-xs leading-relaxed m-0 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Highlight any text with your mouse to instantly hear it read out loud.
                </p>
              </div>

              {/* Micro 3: Image Reader */}
              <div className={`p-4 rounded-xl border ${isDark ? 'bg-[#161618] border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center gap-2 mb-1.5">
                  <Eye size={16} className="text-[#0A44FF] dark:text-[#6AA2FF]"  aria-hidden="true"/>
                  <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Image Reader</span>
                </div>
                <p className={`text-xs leading-relaxed m-0 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Reads hidden text descriptions of images out loud so you know what the picture is.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================================================
           AUDITORY ACCOMMODATION MODE (#FF7A2F Sunset Orange Theme)
           ========================================================================== */}
        <div>
          <div className="flex items-center gap-3 mb-10 pb-4 border-b border-[#FF7A2F]/30">
            <h3 className={`text-2xl md:text-3xl lg:text-4xl font-black m-0 tracking-tight flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <span>👂</span>
              <span>Auditory Mode</span>
            </h3>
          </div>

          {/* Main Auditory Feature Section: Multilingual Live Subtitles */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-10">
            {/* Card 1: Multilingual Language Engine */}
            <article
              className={`group border rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] relative overflow-hidden ${isDark
                  ? 'bg-[#161618] border-slate-800 hover:border-[#FF7A2F]/70 hover:shadow-[0_0_35px_rgba(255,122,47,0.2)]'
                  : 'bg-white border-slate-200/80 shadow-sm hover:border-[#FF7A2F]/50 hover:shadow-[0_12px_35px_rgba(255,122,47,0.12)]'
                }`}
            >
              <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-[#FF7A2F] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF7A2F]/10 text-[#FF7A2F] dark:text-[#FFC09B] flex items-center justify-center shrink-0">
                    <Languages size={24}  aria-hidden="true"/>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold border bg-[#FF7A2F]/10 text-[#FF7A2F] dark:text-[#FFC09B] border-[#FF7A2F]/20 uppercase tracking-wider">
                    Language Matrix
                  </span>
                </div>
                <h4 className={`text-xl font-bold tracking-tight mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Multilingual AI Subtitles
                </h4>
                <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Instantly turns any spoken audio into subtitles and translates it into your preferred language.
                </p>

                <div className={`p-4 rounded-2xl border ${isDark ? 'bg-black/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="space-y-3 text-xs font-mono">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Spoken Audio:</span>
                      <span className="font-bold text-[#FF7A2F] dark:text-[#FFC09B]">45+ Languages</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Translation Target:</span>
                      <span className="font-bold text-[#FF7A2F] dark:text-[#FFC09B]">135+ Languages</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Card 2: Caption Styling & Focus Mode */}
            <article
              className={`group border rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] relative overflow-hidden ${isDark
                  ? 'bg-[#161618] border-slate-800 hover:border-[#FF7A2F]/70 hover:shadow-[0_0_35px_rgba(255,122,47,0.2)]'
                  : 'bg-white border-slate-200/80 shadow-sm hover:border-[#FF7A2F]/50 hover:shadow-[0_12px_35px_rgba(255,122,47,0.12)]'
                }`}
            >
              <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-[#FF7A2F] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF7A2F]/10 text-[#FF7A2F] dark:text-[#FFC09B] flex items-center justify-center shrink-0">
                    <Ear size={24}  aria-hidden="true"/>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold border bg-[#FF7A2F]/10 text-[#FF7A2F] dark:text-[#FFC09B] border-[#FF7A2F]/20 uppercase tracking-wider">
                    Custom Subtitle Studio
                  </span>
                </div>
                <h4 className={`text-xl font-bold tracking-tight mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Caption Styling & Focus Mode
                </h4>
                <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Make subtitles look exactly how you want, and dim the rest of the page to help you focus.
                </p>

                <div className="space-y-3 text-xs">
                  <div className={`p-3 rounded-xl border ${isDark ? 'bg-black/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="font-bold text-[#FF7A2F] dark:text-[#FFC09B] block mb-1">Custom Styling:</span>
                    <p className={`m-0 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Adjust text size, opacity, font family (100+ Google Fonts catalog), & colors.</p>
                  </div>
                  <div className={`p-3 rounded-xl border ${isDark ? 'bg-black/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="font-bold text-[#FF7A2F] dark:text-[#FFC09B] block mb-1">Focus Mode:</span>
                    <p className={`m-0 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Dims surrounding webpage clutter to focus entirely on live audio subtitles.</p>
                  </div>
                </div>
              </div>
            </article>

            {/* Card 3: Transcript Logging Drawer */}
            <article
              className={`group border rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] relative overflow-hidden ${isDark
                  ? 'bg-[#161618] border-slate-800 hover:border-[#FF7A2F]/70 hover:shadow-[0_0_35px_rgba(255,122,47,0.2)]'
                  : 'bg-white border-slate-200/80 shadow-sm hover:border-[#FF7A2F]/50 hover:shadow-[0_12px_35px_rgba(255,122,47,0.12)]'
                }`}
            >
              <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-[#FF7A2F] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF7A2F]/10 text-[#FF7A2F] dark:text-[#FFC09B] flex items-center justify-center shrink-0">
                    <Download size={24}  aria-hidden="true"/>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold border bg-[#FF7A2F]/10 text-[#FF7A2F] dark:text-[#FFC09B] border-[#FF7A2F]/20 uppercase tracking-wider">
                    Transcript History
                  </span>
                </div>
                <h4 className={`text-xl font-bold tracking-tight mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Transcript Logging Drawer
                </h4>
                <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Saves everything that was spoken so you can read it later or download it to your computer.
                </p>

                <div className={`p-4 rounded-2xl border ${isDark ? 'bg-black/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <ul className="space-y-2 text-xs m-0 p-0 list-none">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A2F]" />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}><strong>Complete History:</strong> Live scrolling transcript drawer</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A2F]" />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}><strong>Dual Export:</strong> Save original & translated logs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A2F]" />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}><strong>1-Click Download:</strong> Export as .txt</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>

          {/* Auditory Micro-Accommodations Banner (Extra Features) */}
          <div
            className={`border rounded-2xl p-6 ${isDark
                ? 'bg-[#FF7A2F]/10 border-[#FF7A2F]/30'
                : 'bg-[#FF7A2F]/5 border-[#FF7A2F]/20'
              }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <BellRing size={18} className="text-[#FF7A2F] dark:text-[#FFC09B]"  aria-hidden="true"/>
              <h5 className={`text-sm font-mono font-bold uppercase tracking-wider ${isDark ? 'text-[#FFC09B]' : 'text-[#FF7A2F]'}`}>
                Helpful Auditory Extras
              </h5>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Micro 1: Sudden Sound Warning */}
              <div className={`p-5 rounded-xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${isDark ? 'bg-[#161618] border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0">
                    <ShieldAlert size={20}  aria-hidden="true"/>
                  </div>
                  <div>
                    <h6 className={`text-sm font-bold m-0 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Sudden Sound Warning (Loud Noise Alert)
                    </h6>
                    <p className={`text-xs leading-relaxed m-0 mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Flashes a visual warning on your screen if a sudden loud noise plays, protecting your ears.
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold border bg-rose-500/10 text-rose-500 border-rose-500/20 uppercase tracking-wider shrink-0">
                  Visual Alert
                </span>
              </div>

              {/* Micro 2: Real-time Audio Visualizer */}
              <div className={`p-5 rounded-xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${isDark ? 'bg-[#161618] border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FF7A2F]/10 text-[#FF7A2F] flex items-center justify-center shrink-0">
                    <Activity size={20}  aria-hidden="true"/>
                  </div>
                  <div>
                    <h6 className={`text-sm font-bold m-0 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Real-time Audio Visualizer
                    </h6>
                    <p className={`text-xs leading-relaxed m-0 mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Shows visual audio bars so you know when sound is currently playing on the page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
