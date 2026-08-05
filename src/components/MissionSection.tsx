import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { Mic, Volume2, MessageSquare, Zap } from 'lucide-react';

interface MissionSectionProps {
  isDark: boolean;
  problemRef: React.RefObject<HTMLDivElement>;
  isProblemVisible: boolean;
}

export default function MissionSection({ isDark, problemRef, isProblemVisible }: MissionSectionProps) {
  const terminalCards = [
    {
      id: 1,
      error: 'WARNING: CLICK_TARGETS_UNREACHABLE',
      errorDetail: 'Small interactive elements undetected by user.',
      patch: 'EXECUTING_SENSA_PATCH: VOICE_NAV_PROTOCOL...',
      success: 'SUCCESS: HANDS_FREE_CONTROL_ONLINE',
      successDetail: 'Voice navigation successfully established.',
      icon: Mic,
    },
    {
      id: 2,
      error: 'ERROR: DOM_NODE_CLUTTER_EXCEEDS_LIMITS',
      errorDetail: 'Excessive text nodes confusing standard screen readers.',
      patch: 'EXECUTING_SENSA_PATCH: DOM_CLEANUP...',
      success: 'SUCCESS: SMART_READER_SYNTHESIS_ACTIVE',
      successDetail: 'Core content isolated and synthesized into speech.',
      icon: Volume2,
    },
    {
      id: 3,
      error: 'WARNING: AUDIO_CAPTIONS_NOT_FOUND',
      errorDetail: 'Missing subtitle tracks and unsupported regional dialects.',
      patch: 'EXECUTING_SENSA_PATCH: NEURAL_TRANSLATION...',
      success: 'SUCCESS: AI_SUBTITLES_ONLINE',
      successDetail: 'Neural translations & live captions successfully generated.',
      icon: MessageSquare,
    },
    {
      id: 4,
      error: 'CRITICAL: SUDDEN_DECIBEL_SPIKE_DETECTED',
      errorDetail: 'Dangerous volume spike occurring without prior alert.',
      patch: 'EXECUTING_SENSA_PATCH: AUDIO_INTERCEPT...',
      success: 'SUCCESS: BIOMETRIC_VISUAL_ALERT_DEPLOYED',
      successDetail: 'Preventative visual alerts deployed successfully.',
      icon: Zap,
    },
  ];

  return (
    <section
      id="problem-solution"
      className={`relative w-full min-h-screen flex flex-col justify-center py-20 md:py-32 border-t ${isDark ? 'border-slate-800/80 bg-[#09090b]' : 'border-slate-200/60 bg-slate-50'
        }`}
    >
      {/* Matrix Code / Cybernetic Grid Layer */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)] -z-10 opacity-50" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full z-10">
        {/* Main Title & Intro Subtitle */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <h2
              className={`text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 uppercase font-mono ${isDark ? 'text-white' : 'text-slate-900'
                }`}
            >
              System Diagnostics
            </h2>
            <p
              className={`text-base md:text-xl leading-relaxed font-mono ${isDark ? 'text-emerald-500/70' : 'text-emerald-600/80'
                }`}
            >
              {'>'} ANALYZING_WEB_ACCESSIBILITY_PROTOCOLS...
              <br />
              {'>'} SENSING_CRITICAL_ERRORS... RUNNING_PATCHES...
            </p>
          </div>
        </ScrollReveal>

        {/* Hacker Terminal Grid */}
        <ScrollReveal delay={200}>
          <div
            ref={problemRef}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 transition-all duration-700 transform-gpu ${isProblemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
          >
            {terminalCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.id}
                  className={`group relative overflow-hidden rounded-xl border p-6 md:p-8 flex flex-col font-mono text-sm md:text-base transition-all duration-500 cursor-pointer shadow-xl ${isDark
                      ? 'bg-[#111113] border-slate-800/80 hover:border-emerald-500/50 hover:shadow-emerald-500/10'
                      : 'bg-[#1c1c1e] border-slate-700 hover:border-emerald-400 hover:shadow-emerald-500/20'
                    }`}
                >
                  {/* MacOS / Terminal Window Controls */}
                  <div className="flex items-center gap-2 mb-6 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="ml-auto text-[10px] tracking-[0.2em] uppercase text-slate-500">
                      SYS_DIAGNOSTIC_PORT_{card.id}
                    </span>
                  </div>

                  {/* Step 1: The Error (Red) */}
                  <div className="flex flex-col gap-1 mb-4 group-hover:opacity-40 transition-opacity duration-500">
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 mt-0.5">{`>`}</span>
                      <span className="text-red-500 font-bold tracking-tight shadow-red-500/20 drop-shadow-md">
                        {card.error}
                      </span>
                    </div>
                    <div className="flex items-start gap-3 opacity-70">
                      <span className="text-transparent mt-0.5">{`>`}</span>
                      <span className="text-red-400/80 text-xs">{card.errorDetail}</span>
                    </div>
                  </div>

                  {/* Step 2: The Patch Execution (Yellow) - Animates in on hover */}
                  <div className="flex flex-col gap-1 h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:mb-4 group-hover:opacity-100 transition-all duration-[400ms] ease-out">
                    <div className="flex items-start gap-3">
                      <span className="text-yellow-500 mt-0.5">{`>`}</span>
                      <span className="text-yellow-500 font-bold tracking-tight animate-pulse">
                        {card.patch}
                      </span>
                    </div>
                  </div>

                  {/* Step 3: The Success (Emerald) - Animates in delayed on hover */}
                  <div className="flex flex-col gap-1 h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-[600ms] delay-[300ms] ease-out">
                    <div className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-0.5">{`>`}</span>
                      <span className="text-emerald-400 font-bold tracking-tight drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">
                        {card.success}
                      </span>
                    </div>
                    <div className="flex items-start gap-3 opacity-90 mt-1">
                      <span className="text-emerald-400 mt-0.5"><Icon size={16} /></span>
                      <span className="text-emerald-300/80 text-xs">{card.successDetail}</span>
                    </div>
                  </div>
                  
                  {/* Subtle terminal scanline overlay */}
                  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
