import { useState } from 'react';
import { Download, MonitorPlay, Mic, ArrowUpRight, CheckCircle2, ShieldCheck, Pin, Sparkles, Volume2, Eye, Headphones, Layers, Command } from 'lucide-react';

import chromeWebStoreLogo from '../assets/chrome-webstore.svg';
import ScrollReveal from './ScrollReveal';

interface GuideSectionProps {
  isDark: boolean;
}

export default function GuideSection({ isDark }: GuideSectionProps) {
  const [activeDockTab, setActiveDockTab] = useState<'visual' | 'auditory'>('visual');
  const [simulatedVoiceCommand, setSimulatedVoiceCommand] = useState<string>('Activate Visual Mode');
  const [isSimulatingMic, setIsSimulatingMic] = useState<boolean>(false);

  const handleSimulateVoice = (command: string) => {
    setSimulatedVoiceCommand(command);
    setIsSimulatingMic(true);
    setTimeout(() => {
      setIsSimulatingMic(false);
    }, 2000);
  };

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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-sm bg-purple-500/10 border-purple-500/30 text-purple-400">
              <Sparkles size={14} aria-hidden="true" />
              <span>Setup & Interactive Walkthrough</span>
            </div>
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

        {/* 2 Main Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* COLUMN 1: Quick Installation */}
          <ScrollReveal delay={100} className="flex flex-col gap-6">
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
              <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border bg-purple-500/10 text-purple-400 border-purple-500/20">
                Manifest V3
              </span>
            </div>

            {/* Step 1: Add to Chrome */}
            <article
              className={`group border rounded-3xl p-6 md:p-7 transition-all duration-300 relative overflow-hidden ${
                isDark
                  ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset hover:border-purple-500/50'
                  : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset shadow-md hover:border-purple-300'
              }`}
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 font-black flex items-center justify-center border border-purple-500/40 text-sm shrink-0">
                    1
                  </span>
                  <h4 className={`text-lg font-bold m-0 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Add to Google Chrome
                  </h4>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border bg-emerald-500/10 text-emerald-400 border-emerald-500/20 font-bold">
                  Free Extension
                </span>
              </div>
              <p className={`text-xs md:text-sm leading-relaxed mb-5 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Open the Chrome Web Store and click <strong>Add to Chrome</strong>. Sensa compiles safely in seconds with zero configuration required.
              </p>

              {/* Chrome Store Preview Badge Box */}
              <div
                className={`p-4 rounded-2xl border mb-5 flex flex-col sm:flex-row items-center justify-between gap-4 ${
                  isDark ? 'bg-black/40 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0A44FF] to-[#8A56FF] p-0.5 shrink-0 flex items-center justify-center shadow-md">
                    <img src="/sensa-logo.png" alt="Sensa" className="w-7 h-7 object-contain" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Sensa Extension</span>
                      <span className="text-[10px] font-mono font-bold text-amber-400">5.0 ★★★★★</span>
                    </div>
                    <span className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      BulSU Capstone Research • Accessibility
                    </span>
                  </div>
                </div>

                <a
                  href="https://chromewebstore.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold no-underline transition-all duration-300 hover:scale-[1.03] shadow-md ${
                    isDark
                      ? 'bg-[#FF7A2F] text-white hover:bg-[#E65C00]'
                      : 'bg-[#0A44FF] text-white hover:bg-[#0038E0]'
                  }`}
                >
                  <img src={chromeWebStoreLogo} alt="Chrome Web Store" className="w-4 h-4 shrink-0" />
                  <span>Get Extension</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </article>

            {/* Step 2: Pin Extension */}
            <article
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
              <p className={`text-xs md:text-sm leading-relaxed mb-4 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Click the puzzle piece icon <span className="font-mono text-purple-400 font-bold">🧩</span> in your upper-right Chrome bar and click the <strong>Pin</strong> button so Sensa is always 1-click away.
              </p>

              {/* Simulated Chrome Extensions Toolbar */}
              <div
                className={`p-3 rounded-xl border flex items-center justify-between font-mono text-xs ${
                  isDark ? 'bg-black/50 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 opacity-60">chrome://extensions</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-500/10 px-3 py-1 rounded-lg border border-purple-500/20 text-purple-400 font-bold">
                  <Pin size={12} className="rotate-45" aria-hidden="true" />
                  <span>Sensa Pinned</span>
                </div>
              </div>
            </article>

            {/* Step 3: Grant Permissions */}
            <article
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
              <p className={`text-xs md:text-sm leading-relaxed mb-4 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Allow microphone access for hands-free voice control and tab audio capture for live AI subtitling.
              </p>

              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-2 rounded-xl border border-emerald-500/20">
                <ShieldCheck size={16} aria-hidden="true" />
                <span>100% In-Memory Privacy Guarantee • No Server Logs</span>
              </div>
            </article>
          </ScrollReveal>

          {/* COLUMN 2: User Walkthrough & Interactive Docks */}
          <ScrollReveal delay={200} className="flex flex-col gap-6">
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
              <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border bg-[#0A44FF]/10 text-[#0A44FF] dark:text-[#6AA2FF] border-[#0A44FF]/20">
                Dual Docks
              </span>
            </div>

            {/* Interactive Voice Onboarding Simulator */}
            <article
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
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border bg-blue-500/10 text-blue-400 border-blue-500/20 font-bold">
                  Voice First
                </span>
              </div>
              <p className={`text-xs md:text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Upon first click, Sensa speaks a welcome prompt and listens for your spoken mode selection. Test the voice triggers below:
              </p>

              {/* Interactive Voice Trigger Test Box */}
              <div
                className={`p-4 rounded-2xl border flex flex-col gap-3 ${
                  isDark ? 'bg-black/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mic
                      size={18}
                      className={`${
                        isSimulatingMic
                          ? 'text-rose-500 animate-pulse'
                          : isDark
                          ? 'text-[#6AA2FF]'
                          : 'text-[#0A44FF]'
                      }`}
                    />
                    <span className={`text-xs font-mono font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {isSimulatingMic ? 'Listening...' : 'Voice Command:'}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">
                    "{simulatedVoiceCommand}"
                  </span>
                </div>

                {/* Voice Command Test Buttons */}
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <button
                    onClick={() => handleSimulateVoice('Activate Visual Mode')}
                    className={`py-2 px-3 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all duration-200 ${
                      simulatedVoiceCommand === 'Activate Visual Mode'
                        ? 'bg-[#0A44FF] text-white shadow-md'
                        : isDark
                        ? 'bg-white/5 hover:bg-white/10 text-slate-300'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    <Eye size={13} aria-hidden="true" />
                    <span>Visual Mode</span>
                  </button>

                  <button
                    onClick={() => handleSimulateVoice('Activate Auditory Mode')}
                    className={`py-2 px-3 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all duration-200 ${
                      simulatedVoiceCommand === 'Activate Auditory Mode'
                        ? 'bg-[#FF7A2F] text-white shadow-md'
                        : isDark
                        ? 'bg-white/5 hover:bg-white/10 text-slate-300'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    <Headphones size={13} aria-hidden="true" />
                    <span>Auditory Mode</span>
                  </button>
                </div>
              </div>
            </article>

            {/* Interactive Dock Explorer */}
            <article
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

                {/* Dock Switcher Buttons */}
                <div
                  className={`p-1 rounded-xl border flex items-center gap-1 ${
                    isDark ? 'bg-black/50 border-slate-800' : 'bg-slate-100 border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => setActiveDockTab('visual')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all duration-200 ${
                      activeDockTab === 'visual'
                        ? 'bg-[#0A44FF] text-white shadow-sm'
                        : isDark
                        ? 'text-slate-400 hover:text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Visual Dock
                  </button>
                  <button
                    onClick={() => setActiveDockTab('auditory')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all duration-200 ${
                      activeDockTab === 'auditory'
                        ? 'bg-[#FF7A2F] text-white shadow-sm'
                        : isDark
                        ? 'text-slate-400 hover:text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Auditory Dock
                  </button>
                </div>
              </div>

              {/* Dynamic Dock Content Box */}
              {activeDockTab === 'visual' ? (
                <div className="space-y-4">
                  <p className={`text-xs md:text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    The <strong>Visual Control Dock</strong> provides low-vision users with instantaneous text-to-speech, font dyslexia toggles, screen magnification, and voice controls.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div
                      className={`p-3 rounded-xl border flex items-center gap-3 ${
                        isDark ? 'bg-black/40 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <Volume2 size={16} className="text-[#0A44FF] shrink-0" />
                      <span><strong>TTS Speed:</strong> 0.5x to 2.0x playback controls</span>
                    </div>
                    <div
                      className={`p-3 rounded-xl border flex items-center gap-3 ${
                        isDark ? 'bg-black/40 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <Eye size={16} className="text-[#0A44FF] shrink-0" />
                      <span><strong>Magnifier:</strong> Instant 2x to 5x screen zoom</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className={`text-xs md:text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    The <strong>Auditory Control Dock</strong> streams real-time AI live subtitles, language translation, and audio decibel safety alerts.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div
                      className={`p-3 rounded-xl border flex items-center gap-3 ${
                        isDark ? 'bg-black/40 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <Headphones size={16} className="text-[#FF7A2F] shrink-0" />
                      <span><strong>Live Captions:</strong> Deepgram AI speech-to-text</span>
                    </div>
                    <div
                      className={`p-3 rounded-xl border flex items-center gap-3 ${
                        isDark ? 'bg-black/40 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <Layers size={16} className="text-[#FF7A2F] shrink-0" />
                      <span><strong>Translation:</strong> 135+ Azure Neural Languages</span>
                    </div>
                  </div>
                </div>
              )}
            </article>
          </ScrollReveal>
        </div>

        {/* Quick Keyboard Shortcuts & Features Ribbon */}
        <ScrollReveal delay={300}>
          <div
            className={`mt-12 p-6 rounded-3xl border flex flex-col md:flex-row items-center justify-between gap-6 ${
              isDark
                ? 'bg-gradient-to-r from-[#0A44FF]/10 via-purple-500/10 to-[#FF7A2F]/10 border-slate-800'
                : 'bg-gradient-to-r from-[#0A44FF]/5 via-purple-500/5 to-[#FF7A2F]/5 border-slate-200'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-gradient-to-tr from-[#0A44FF] to-[#8A56FF] text-white shadow-lg shrink-0">
                <Command size={20} aria-hidden="true" />
              </div>
              <div>
                <h4 className={`text-base font-bold m-0 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Quick Shortcut Reference
                </h4>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Use simple voice triggers or Chrome toolbar shortcuts to switch modes anytime.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-bold">
              <span className={`px-3 py-1.5 rounded-xl border ${isDark ? 'bg-black/40 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'}`}>
                🗣️ "Activate Visual"
              </span>
              <span className={`px-3 py-1.5 rounded-xl border ${isDark ? 'bg-black/40 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'}`}>
                🎧 "Activate Auditory"
              </span>
              <span className={`px-3 py-1.5 rounded-xl border ${isDark ? 'bg-black/40 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'}`}>
                🔒 100% In-Memory
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
