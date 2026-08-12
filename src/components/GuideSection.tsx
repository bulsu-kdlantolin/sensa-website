import { Download, MonitorPlay } from 'lucide-react';

import { playCardHoverSound } from '../utils/soundSystem';
import ScrollReveal from './ScrollReveal';

interface GuideSectionProps {
  isDark: boolean;
}

const InlineLoopVideo = ({ src, poster, isDark }: { src: string, poster: string, isDark: boolean }) => (
  <div className={`w-full aspect-video rounded-2xl mt-4 mb-5 overflow-hidden border shadow-inner ${isDark ? 'border-slate-800 bg-black/40' : 'border-slate-200 bg-slate-100/50'}`}>
    <video 
      autoPlay muted loop playsInline preload="none"
      className="w-full h-full object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-500"
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  </div>
);

export default function GuideSection({ isDark }: GuideSectionProps) {

  return (
    <section
      id="guide"
      className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center py-20 md:py-28 border-t ${
        isDark ? 'border-slate-800/80' : 'border-slate-200/60'
      }`}
    >
      {/* Background Ambient Glow & Grid */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)] -z-10" />
      <div
        className={`absolute top-1/3 left-1/4 w-96 h-96 blur-[150px] pointer-events-none -z-10 bg-[#0A44FF]/15 ${
          isDark ? 'opacity-30' : 'opacity-20'
        }`}
      />
      <div
        className={`absolute bottom-1/3 right-1/4 w-96 h-96 blur-[150px] pointer-events-none -z-10 bg-[#FF7A2F]/15 ${
          isDark ? 'opacity-30' : 'opacity-20'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              className={`text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Installation & User Walkthrough
            </h2>
            <p
              className={`text-base md:text-xl leading-relaxed font-normal ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Get Sensa up and running in under 60 seconds with simple setup steps and dual-mode onboarding.
            </p>
          </div>
        </ScrollReveal>

        {/* Stacked Layout */}
        <div className="flex flex-col gap-16 items-center">
          {/* COLUMN 1: Quick Installation */}
          <ScrollReveal delay={100} className="w-full flex flex-col gap-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div
                  className={`p-2.5 rounded-xl ${
                    isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'
                  }`}
                >
                  <Download size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3 className={`text-xl md:text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Part 1: Quick Installation
                  </h3>
                  <p className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Get Sensa from the Web Store
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-stretch">
            {/* Step 1: Add to Chrome */}
            <a
              href="https://chromewebstore.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playCardHoverSound}
              className={`block cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-purple-500 hover:-translate-y-1 group border rounded-3xl p-6 md:p-7 transition-all duration-300 relative overflow-hidden ${
                isDark
                  ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]'
                  : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset shadow-md hover:border-purple-300 hover:shadow-lg'
              }`}
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 font-black flex items-center justify-center border border-purple-500/40 text-sm shrink-0">
                    1
                  </span>
                  <h4 className={`text-lg font-bold m-0 group-hover:text-purple-500 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Add to Google Chrome
                  </h4>
                </div>
              </div>
              <p className={`text-xs md:text-sm leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Open the Chrome Web Store and click <strong>Add to Chrome</strong>. Sensa compiles safely in seconds with zero configuration required.
              </p>
              
              <InlineLoopVideo src="/assets/clips/install-step1.mp4" poster="/assets/clips/posters/step1.jpg" isDark={isDark} />
            </a>

            {/* Step 2: Pin Extension */}
            <article
              onMouseEnter={playCardHoverSound}
              className={`group border rounded-3xl p-6 md:p-7 transition-all duration-300 ${
                isDark
                  ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset hover:border-purple-500/50'
                  : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset shadow-md hover:border-purple-300'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 font-black flex items-center justify-center border border-purple-500/40 text-sm shrink-0">
                  2
                </span>
                <h4 className={`text-lg font-bold m-0 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Pin to Chrome Toolbar
                </h4>
              </div>
              <p className={`text-xs md:text-sm leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Click the puzzle piece icon <span className="font-mono text-purple-400 font-bold">🧩</span> in your upper-right Chrome bar and click the <strong>Pin</strong> button so Sensa is always 1-click away.
              </p>
              
              <InlineLoopVideo src="/assets/clips/install-step2.mp4" poster="/assets/clips/posters/step2.jpg" isDark={isDark} />
            </article>

            {/* Step 3: Grant Permissions */}
            <article
              onMouseEnter={playCardHoverSound}
              className={`group border rounded-3xl p-6 md:p-7 transition-all duration-300 ${
                isDark
                  ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset hover:border-purple-500/50'
                  : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset shadow-md hover:border-purple-300'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 font-black flex items-center justify-center border border-purple-500/40 text-sm shrink-0">
                  3
                </span>
                <h4 className={`text-lg font-bold m-0 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Grant Browser Permissions
                </h4>
              </div>
              <p className={`text-xs md:text-sm leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Allow microphone access for hands-free voice control and tab audio capture for live AI subtitling.
              </p>

              <InlineLoopVideo src="/assets/clips/install-step3.mp4" poster="/assets/clips/posters/step3.jpg" isDark={isDark} />
            </article>
            </div>
          </ScrollReveal>

          {/* COLUMN 2: User Walkthrough & Interactive Docks */}
          <ScrollReveal delay={200} className="w-full flex flex-col gap-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div
                  className={`p-2.5 rounded-xl ${
                    isDark ? 'bg-[#0A44FF]/20 text-[#6AA2FF]' : 'bg-[#0A44FF]/10 text-[#0A44FF]'
                  }`}
                >
                  <MonitorPlay size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3 className={`text-xl md:text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Part 2: User Walkthrough
                  </h3>
                  <p className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Voice Onboarding & Control Docks
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-stretch">
            {/* Interactive Voice Onboarding Simulator */}
            <article
              onMouseEnter={playCardHoverSound}
              className={`border rounded-3xl p-6 md:p-7 transition-all duration-300 ${
                isDark
                  ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset'
                  : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset shadow-md'
              }`}
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-[#0A44FF]/20 text-[#0A44FF] dark:text-[#6AA2FF] font-black flex items-center justify-center border border-[#0A44FF]/40 text-sm shrink-0">
                    1
                  </span>
                  <h4 className={`text-lg font-bold m-0 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Interactive Voice Onboarding
                  </h4>
                </div>
              </div>
              <p className={`text-xs md:text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Upon first click, Sensa speaks a welcome prompt and listens for your spoken mode selection.
              </p>
              <InlineLoopVideo src="/assets/clips/voice-onboarding.mp4" poster="/assets/clips/posters/voice-onboarding.jpg" isDark={isDark} />
            </article>

            {/* Interactive Dock Explorer */}
            <article
              onMouseEnter={playCardHoverSound}
              className={`border rounded-3xl p-6 md:p-7 transition-all duration-300 ${
                isDark
                  ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset'
                  : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset shadow-md'
              }`}
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-[#0A44FF]/20 text-[#0A44FF] dark:text-[#6AA2FF] font-black flex items-center justify-center border border-[#0A44FF]/40 text-sm shrink-0">
                    2
                  </span>
                  <h4 className={`text-lg font-bold m-0 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Explore Floating Docks
                  </h4>
                </div>
              </div>
              <p className={`text-xs md:text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                The Floating Control Docks provide users with instantaneous text-to-speech, font dyslexia toggles, screen magnification, and real-time AI live subtitles.
              </p>
              <InlineLoopVideo src="/assets/clips/docks-explorer.mp4" poster="/assets/clips/posters/docks-explorer.jpg" isDark={isDark} />
            </article>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
