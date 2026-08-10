import { useState } from 'react';
import { Mic, Maximize2, Volume2, Ear, BellRing, Sparkles, Download, Eye, Languages, ShieldAlert, MousePointer, Activity, Play, X } from 'lucide-react';
import { playCardHoverSound } from '../utils/soundSystem';
import ScrollReveal from './ScrollReveal';

interface FeaturesSectionProps {
  isDark: boolean;
}

const WatchDemoThumbnail = ({ onClick, poster, theme, isDark, label = "Watch Demo" }: { onClick: () => void, poster: string, theme: 'visual' | 'auditory', isDark: boolean, label?: string }) => {
  const isVisual = theme === 'visual';
  const color = isVisual ? "text-[#0A44FF]" : "text-[#FF7A2F]";
  const hoverColor = isVisual ? "group-hover/video:bg-[#0A44FF]/20" : "group-hover/video:bg-[#FF7A2F]/20";
  const glowShadow = isVisual ? "group-hover/video:shadow-[0_0_20px_rgba(10,68,255,0.4)]" : "group-hover/video:shadow-[0_0_20px_rgba(255,122,47,0.4)]";

  return (
    <div 
      onClick={onClick}
      className={`w-full aspect-video rounded-2xl mb-6 relative overflow-hidden group/video border cursor-pointer transition-all duration-300 ${isDark ? 'border-slate-800 bg-slate-900/50 hover:border-slate-600' : 'border-slate-200 bg-slate-100 hover:border-slate-400'}`}
    >
      <img 
        src={poster} 
        alt={label} 
        className="w-full h-full object-cover opacity-60 group-hover/video:opacity-100 transition-all duration-500 group-hover/video:scale-105"
      />
      
      {/* Central Glass Play Button */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 ${isDark ? 'bg-black/50' : 'bg-white/70 shadow-lg'} ${hoverColor} ${glowShadow} group-hover/video:scale-110`}>
          <Play size={24} className={`${color} translate-x-[2px]`} fill="currentColor" />
        </div>
      </div>
      
      <span className={`absolute bottom-3 left-3 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-1 rounded bg-black/60 text-white backdrop-blur-md pointer-events-none transition-all duration-300 group-hover/video:translate-y-2 group-hover/video:opacity-0`}>
        {label}
      </span>
    </div>
  );
};

const ExtrasDemoButton = ({ onClick, theme, isDark }: { onClick: () => void, theme: 'visual' | 'auditory', isDark: boolean }) => {
  const isVisual = theme === 'visual';
  const baseClasses = "py-1.5 px-3 rounded-lg flex items-center gap-2 font-bold text-xs transition-all duration-300 border group/btn shrink-0";
  
  const visualClasses = isDark 
    ? "bg-[#0A44FF]/10 text-[#6AA2FF] border-[#0A44FF]/20 hover:bg-[#0A44FF]/20 hover:border-[#0A44FF]/40" 
    : "bg-[#0A44FF]/5 text-[#0A44FF] border-[#0A44FF]/10 hover:bg-[#0A44FF]/10 hover:border-[#0A44FF]/30";
    
  const auditoryClasses = isDark
    ? "bg-[#FF7A2F]/10 text-[#FFC09B] border-[#FF7A2F]/20 hover:bg-[#FF7A2F]/20 hover:border-[#FF7A2F]/40"
    : "bg-[#FF7A2F]/5 text-[#FF7A2F] border-[#FF7A2F]/10 hover:bg-[#FF7A2F]/10 hover:border-[#FF7A2F]/30";

  return (
    <button onClick={onClick} className={`${baseClasses} ${isVisual ? visualClasses : auditoryClasses}`}>
      <Play size={12} fill="currentColor" className="transition-transform group-hover/btn:scale-110" />
      Watch Demo
    </button>
  );
};

export default function FeaturesSection({ isDark }: FeaturesSectionProps) {
  const [activeVideo, setActiveVideo] = useState<{src: string, title: string, theme: 'visual'|'auditory'} | null>(null);

  return (
    <>
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setActiveVideo(null)} />
          <div className={`relative w-full max-w-5xl rounded-3xl overflow-hidden border ${activeVideo.theme === 'visual' ? 'border-[#0A44FF]/50 shadow-[0_0_50px_rgba(10,68,255,0.3)]' : 'border-[#FF7A2F]/50 shadow-[0_0_50px_rgba(255,122,47,0.3)]'} bg-black z-10 animate-in fade-in zoom-in duration-300`}>
            <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent flex justify-between items-start z-20 pointer-events-none">
              <h3 className="text-white font-bold tracking-wide pointer-events-auto text-lg drop-shadow-md px-2 py-1 bg-black/40 rounded-lg backdrop-blur-md border border-white/10">{activeVideo.title}</h3>
              <button onClick={() => setActiveVideo(null)} className="pointer-events-auto p-2 bg-black/50 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors border border-white/10">
                <X size={24} />
              </button>
            </div>
            <video src={activeVideo.src} autoPlay controls className="w-full aspect-video outline-none" />
          </div>
        </div>
      )}
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
        <ScrollReveal>
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
        </ScrollReveal>

        {/* ==========================================================================
           VISUAL ACCOMMODATION MODE (#0A44FF Royal Blue Theme)
           ========================================================================== */}
        <div className="mb-24">
          <ScrollReveal delay={100}>
          <div className="flex items-center gap-3 mb-10 pb-4 border-b border-[#0A44FF]/30">
            <h3 className={`text-2xl md:text-3xl lg:text-4xl font-black m-0 tracking-tight flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <span>👁️</span>
              <span>Visual Mode</span>
            </h3>
          </div>
          </ScrollReveal>

          {/* 3 Main Visual Feature Cards */}
          <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-10">
            {/* Card 1: Voice Command Navigation */}
            <article
              onMouseEnter={playCardHoverSound}
              className={`group border rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] relative overflow-hidden ${isDark
                  ? 'bg-[#161618] border-slate-800 hover:border-[#0A44FF]/70 hover:shadow-[0_0_35px_rgba(10,68,255,0.2)]'
                  : 'bg-white border-slate-200/80 shadow-sm hover:border-[#0A44FF]/50 hover:shadow-[0_12px_35px_rgba(10,68,255,0.12)]'
                }`}
            >
              <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-[#0A44FF] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <WatchDemoThumbnail onClick={() => setActiveVideo({src: '/assets/clips/voice-nav.mp4', title: 'Voice Command Navigation', theme: 'visual'})} poster="/assets/clips/posters/voice.jpg" theme="visual" isDark={isDark} label="Voice Navigation" />
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
              onMouseEnter={playCardHoverSound}
              className={`group border rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] relative overflow-hidden ${isDark
                  ? 'bg-[#161618] border-slate-800 hover:border-[#0A44FF]/70 hover:shadow-[0_0_35px_rgba(10,68,255,0.2)]'
                  : 'bg-white border-slate-200/80 shadow-sm hover:border-[#0A44FF]/50 hover:shadow-[0_12px_35px_rgba(10,68,255,0.12)]'
                }`}
            >
              <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-[#0A44FF] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <WatchDemoThumbnail onClick={() => setActiveVideo({src: '/assets/clips/screen-reader.mp4', title: 'Screen Reader (TTS Engine)', theme: 'visual'})} poster="/assets/clips/posters/reader.jpg" theme="visual" isDark={isDark} label="Screen Reader" />
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
              onMouseEnter={playCardHoverSound}
              className={`group border rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] relative overflow-hidden ${isDark
                  ? 'bg-[#161618] border-slate-800 hover:border-[#0A44FF]/70 hover:shadow-[0_0_35px_rgba(10,68,255,0.2)]'
                  : 'bg-white border-slate-200/80 shadow-sm hover:border-[#0A44FF]/50 hover:shadow-[0_12px_35px_rgba(10,68,255,0.12)]'
                }`}
            >
              <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-[#0A44FF] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <WatchDemoThumbnail onClick={() => setActiveVideo({src: '/assets/clips/magnifier.mp4', title: 'Screen Magnifier', theme: 'visual'})} poster="/assets/clips/posters/magnifier.jpg" theme="visual" isDark={isDark} label="Magnifier" />
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
          </ScrollReveal>

          {/* Visual Micro-Accommodations Banner (Extra Features) */}
          <ScrollReveal delay={300}>
          <div
            className={`border rounded-2xl p-6 ${isDark
                ? 'bg-[#0A44FF]/10 border-[#0A44FF]/30'
                : 'bg-[#0A44FF]/5 border-[#0A44FF]/20'
              }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={18} className="text-[#0A44FF] dark:text-[#6AA2FF]"  aria-hidden="true"/>
              <h5 className={`text-sm font-mono font-bold uppercase tracking-wider flex-1 ${isDark ? 'text-[#6AA2FF]' : 'text-[#0A44FF]'}`}>
                Helpful Visual Extras
              </h5>
              <ExtrasDemoButton onClick={() => setActiveVideo({src: '/assets/clips/visual-extras.mp4', title: 'Helpful Visual Extras Demo', theme: 'visual'})} theme="visual" isDark={isDark} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Micro 1: Voice Guide */}
              <div className={`p-4 rounded-xl border flex flex-col ${isDark ? 'bg-[#161618] border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center gap-2 mb-1.5">
                  <Mic size={16} className="text-[#0A44FF] dark:text-[#6AA2FF]"  aria-hidden="true"/>
                  <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Voice Guide</span>
                </div>
                <p className={`text-xs leading-relaxed m-0 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Hear the names of buttons when you rest your mouse over them.
                </p>
              </div>

              {/* Micro 2: Highlight Reader */}
              <div className={`p-4 rounded-xl border flex flex-col ${isDark ? 'bg-[#161618] border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center gap-2 mb-1.5">
                  <MousePointer size={16} className="text-[#0A44FF] dark:text-[#6AA2FF]"  aria-hidden="true"/>
                  <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Highlight Reader</span>
                </div>
                <p className={`text-xs leading-relaxed m-0 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Highlight any text with your mouse to instantly hear it read out loud.
                </p>
              </div>

              {/* Micro 3: Image Reader */}
              <div className={`p-4 rounded-xl border flex flex-col ${isDark ? 'bg-[#161618] border-slate-800' : 'bg-white border-slate-200'}`}>
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
          </ScrollReveal>
        </div>

        {/* ==========================================================================
           AUDITORY ACCOMMODATION MODE (#FF7A2F Sunset Orange Theme)
           ========================================================================== */}
        <div>
          <ScrollReveal delay={100}>
          <div className="flex items-center gap-3 mb-10 pb-4 border-b border-[#FF7A2F]/30">
            <h3 className={`text-2xl md:text-3xl lg:text-4xl font-black m-0 tracking-tight flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <span>👂</span>
              <span>Auditory Mode</span>
            </h3>
          </div>
          </ScrollReveal>

          {/* Main Auditory Feature Section: Multilingual Live Subtitles */}
          <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-10">
            {/* Card 1: Multilingual Language Engine */}
            <article
              onMouseEnter={playCardHoverSound}
              className={`group border rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] relative overflow-hidden ${isDark
                  ? 'bg-[#161618] border-slate-800 hover:border-[#FF7A2F]/70 hover:shadow-[0_0_35px_rgba(255,122,47,0.2)]'
                  : 'bg-white border-slate-200/80 shadow-sm hover:border-[#FF7A2F]/50 hover:shadow-[0_12px_35px_rgba(255,122,47,0.12)]'
                }`}
            >
              <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-[#FF7A2F] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <WatchDemoThumbnail onClick={() => setActiveVideo({src: '/assets/clips/subtitles.mp4', title: 'Multilingual AI Subtitles', theme: 'auditory'})} poster="/assets/clips/posters/subtitles.jpg" theme="auditory" isDark={isDark} label="Subtitles" />
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
              onMouseEnter={playCardHoverSound}
              className={`group border rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] relative overflow-hidden ${isDark
                  ? 'bg-[#161618] border-slate-800 hover:border-[#FF7A2F]/70 hover:shadow-[0_0_35px_rgba(255,122,47,0.2)]'
                  : 'bg-white border-slate-200/80 shadow-sm hover:border-[#FF7A2F]/50 hover:shadow-[0_12px_35px_rgba(255,122,47,0.12)]'
                }`}
            >
              <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-[#FF7A2F] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <WatchDemoThumbnail onClick={() => setActiveVideo({src: '/assets/clips/focus.mp4', title: 'Caption Styling & Focus Mode', theme: 'auditory'})} poster="/assets/clips/posters/focus.jpg" theme="auditory" isDark={isDark} label="Focus Mode" />
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
              onMouseEnter={playCardHoverSound}
              className={`group border rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] relative overflow-hidden ${isDark
                  ? 'bg-[#161618] border-slate-800 hover:border-[#FF7A2F]/70 hover:shadow-[0_0_35px_rgba(255,122,47,0.2)]'
                  : 'bg-white border-slate-200/80 shadow-sm hover:border-[#FF7A2F]/50 hover:shadow-[0_12px_35px_rgba(255,122,47,0.12)]'
                }`}
            >
              <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-[#FF7A2F] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <WatchDemoThumbnail onClick={() => setActiveVideo({src: '/assets/clips/transcript.mp4', title: 'Transcript Logging Drawer', theme: 'auditory'})} poster="/assets/clips/posters/transcript.jpg" theme="auditory" isDark={isDark} label="Transcript Log" />
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
          </ScrollReveal>

          {/* Auditory Micro-Accommodations Banner (Extra Features) */}
          <ScrollReveal delay={300}>
          <div
            className={`border rounded-2xl p-6 ${isDark
                ? 'bg-[#FF7A2F]/10 border-[#FF7A2F]/30'
                : 'bg-[#FF7A2F]/5 border-[#FF7A2F]/20'
              }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <BellRing size={18} className="text-[#FF7A2F] dark:text-[#FFC09B]"  aria-hidden="true"/>
              <h5 className={`text-sm font-mono font-bold uppercase tracking-wider flex-1 ${isDark ? 'text-[#FFC09B]' : 'text-[#FF7A2F]'}`}>
                Helpful Auditory Extras
              </h5>
              <ExtrasDemoButton onClick={() => setActiveVideo({src: '/assets/clips/auditory-extras.mp4', title: 'Helpful Auditory Extras Demo', theme: 'auditory'})} theme="auditory" isDark={isDark} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Micro 1: Sudden Sound Warning */}
              <div className={`p-5 rounded-xl border flex flex-col items-start gap-4 ${isDark ? 'bg-[#161618] border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0">
                      <ShieldAlert size={20}  aria-hidden="true"/>
                    </div>
                    <div>
                      <h6 className={`text-sm font-bold m-0 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Sudden Sound Warning
                      </h6>
                      <p className={`text-xs leading-relaxed m-0 mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        Flashes a visual warning on your screen if a sudden loud noise plays, protecting your ears.
                      </p>
                    </div>
                  </div>
                  <span className="hidden md:inline-flex px-3 py-1 rounded-full text-[10px] font-mono font-bold border bg-rose-500/10 text-rose-500 border-rose-500/20 uppercase tracking-wider shrink-0">
                    Visual Alert
                  </span>
                </div>
              </div>

              {/* Micro 2: Real-time Audio Visualizer */}
              <div className={`p-5 rounded-xl border flex flex-col items-start gap-4 ${isDark ? 'bg-[#161618] border-slate-800' : 'bg-white border-slate-200'}`}>
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
          </ScrollReveal>
        </div>
      </div>
    </section>
    </>
  );
}
