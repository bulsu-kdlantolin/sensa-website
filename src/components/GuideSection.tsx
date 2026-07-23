import { Download, MonitorPlay, Mic } from 'lucide-react';

interface GuideSectionProps {
  isDark: boolean;
}

export default function GuideSection({ isDark }: GuideSectionProps) {
  return (
    <section
      id="guide"
      className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center scroll-mt-[69px] md:scroll-mt-[71px] py-20 md:py-28 border-t ${
        isDark ? 'border-slate-800/80' : 'border-slate-200/60'
      }`}
    >
      {/* Cybernetic Grid Layer */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Installation & User Walkthrough
          </h2>
          <p
            className={`text-base md:text-lg leading-relaxed font-normal ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Start using Sensa on any Google Chrome browser in 3 simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Column 1: Quick Installation */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <div
                className={`p-2 rounded-lg ${
                  isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'
                }`}
              >
                <Download size={24} />
              </div>
              <h3 className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Part 1: Quick Installation
              </h3>
            </div>

            {/* Step 1 */}
            <article
              className={`border rounded-2xl p-6 transition-all duration-300 ${
                isDark
                  ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset'
                  : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset shadow-sm'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-8 rounded-full bg-purple-500/15 text-purple-500 font-bold flex items-center justify-center border border-purple-500/30 shrink-0">
                  1
                </span>
                <h4 className={`text-lg font-bold m-0 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Add to Chrome
                </h4>
              </div>
              <p className={`text-sm leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Navigate to the Chrome Web Store and click <strong>Add to Chrome</strong>. Sensa installs in seconds and is completely free.
              </p>
            </article>

            {/* Step 2 */}
            <article
              className={`border rounded-2xl p-6 transition-all duration-300 ${
                isDark
                  ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset'
                  : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset shadow-sm'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-8 rounded-full bg-purple-500/15 text-purple-500 font-bold flex items-center justify-center border border-purple-500/30 shrink-0">
                  2
                </span>
                <h4 className={`text-lg font-bold m-0 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Pin the Extension
                </h4>
              </div>
              <p className={`text-sm leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Click the puzzle icon in your Chrome toolbar and pin Sensa so it's always accessible when you need it on any webpage.
              </p>
            </article>

            {/* Step 3 */}
            <article
              className={`border rounded-2xl p-6 transition-all duration-300 ${
                isDark
                  ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset'
                  : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset shadow-sm'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-8 rounded-full bg-purple-500/15 text-purple-500 font-bold flex items-center justify-center border border-purple-500/30 shrink-0">
                  3
                </span>
                <h4 className={`text-lg font-bold m-0 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Allow Permissions
                </h4>
              </div>
              <p className={`text-sm leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Sensa requires microphone permissions for Voice Commands and tab audio capture for Live Captions. Grant access when prompted.
              </p>
            </article>
          </div>

          {/* Column 2: User Walkthrough */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <div
                className={`p-2 rounded-lg ${
                  isDark ? 'bg-[#0A44FF]/20 text-[#6AA2FF]' : 'bg-[#0A44FF]/10 text-[#0A44FF]'
                }`}
              >
                <MonitorPlay size={24} />
              </div>
              <h3 className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Part 2: User Walkthrough
              </h3>
            </div>

            {/* Step 1 */}
            <article
              className={`border rounded-2xl p-6 transition-all duration-300 ${
                isDark
                  ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset'
                  : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset shadow-sm'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <span
                  className={`w-8 h-8 rounded-full font-bold flex items-center justify-center border shrink-0 ${
                    isDark
                      ? 'bg-[#0A44FF]/15 text-[#6AA2FF] border-[#0A44FF]/30'
                      : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20'
                  }`}
                >
                  1
                </span>
                <h4 className={`text-lg font-bold m-0 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Voice Onboarding
                </h4>
              </div>
              <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Click the Sensa icon in your toolbar to open the Welcome popup. You will be prompted to grant Microphone permissions for voice commands and AI Captions. Speak <strong>"Activate Visual Mode"</strong> or <strong>"Activate Auditory Mode"</strong> to proceed.
              </p>
              <div
                className={`w-full h-24 rounded-xl flex items-center justify-center border ${
                  isDark ? 'bg-black/40 border-slate-800' : 'bg-slate-50 border-slate-200/80'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <Mic size={24} className={isDark ? 'text-[#6AA2FF]' : 'text-[#0A44FF]'} />
                  <span className={`text-xs font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Listening for mode selection...
                  </span>
                </div>
              </div>
            </article>

            {/* Step 2 */}
            <article
              className={`border rounded-2xl p-6 transition-all duration-300 ${
                isDark
                  ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset'
                  : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset shadow-sm'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <span
                  className={`w-8 h-8 rounded-full font-bold flex items-center justify-center border shrink-0 ${
                    isDark
                      ? 'bg-[#0A44FF]/15 text-[#6AA2FF] border-[#0A44FF]/30'
                      : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20'
                  }`}
                >
                  2
                </span>
                <h4 className={`text-lg font-bold m-0 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Interact with the Docks
                </h4>
              </div>
              <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Depending on your selected mode, Sensa displays a simple floating control bar on your screen.
              </p>
              <ul className={`text-sm space-y-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                <li className="flex items-start gap-2">
                  <span className="mt-1 shrink-0 text-[#0A44FF]">👁️</span>
                  <span>
                    <strong>Visual Mode:</strong> Use the floating bar to adjust read-out-loud speech speed, turn on the screen magnifier, or activate the reading ruler.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 shrink-0 text-[#FF7A2F]">🦻</span>
                  <span>
                    <strong>Auditory Mode:</strong> Sensa automatically starts capturing playing audio on the page. The floating bar will show live subtitles and let you pick your preferred translation language.
                  </span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
