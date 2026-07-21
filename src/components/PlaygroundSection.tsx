import { useState, useEffect } from 'react';
import { Mic, Ear, Play, MonitorPlay, Sparkles, Target, Volume2, Maximize2, Settings } from 'lucide-react';
import MockVisualDock from './MockVisualDock';
import MockAuditoryDock from './MockAuditoryDock';

interface PlaygroundSectionProps {
  isDark: boolean;
}

export default function PlaygroundSection({ isDark }: PlaygroundSectionProps) {
  const [sandboxMode, setSandboxMode] = useState<'visual' | 'auditory'>('visual');
  const [isFocusRulerActive, setIsFocusRulerActive] = useState(false);
  const [isPlayingTTS, setIsPlayingTTS] = useState(false);

  const [isMinimized, setIsMinimized] = useState(false);
  const [isVoiceCommandActive, setIsVoiceCommandActive] = useState(false);
  const [isCaptionsActive, setIsCaptionsActive] = useState(true);
  const [simulatedCaptionText, setSimulatedCaptionText] = useState('[EN] Sensa AI: Waiting for audio...');

  // Auditory Mode Caption Simulation
  useEffect(() => {
    if (sandboxMode !== 'auditory') {
      setSimulatedCaptionText('[EN] Sensa AI: Waiting for audio...');
      return;
    }
    const captions = [
      '[EN] Speaker: "Welcome to our Capstone presentation on web accessibility."',
      '[EN] Speaker: "Notice how Sensa synchronizes audio capture with zero latency."',
      '[ES] Sensa AI Translation: "Bienvenido a nuestra presentación del proyecto..."',
      '[TL] Sensa AI Translation: "Maligayang pagdating sa aming Capstone presentation..."'
    ];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % captions.length;
      setSimulatedCaptionText(captions[idx]);
    }, 3500);
    return () => clearInterval(interval);
  }, [sandboxMode]);

  return (
    <section id="playground" className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center scroll-mt-[69px] md:scroll-mt-[71px] py-20 md:py-28 border-y ${isDark ? 'border-slate-800/80' : 'border-slate-200/80'}`}>
      {/* Cybernetic Grid Layer */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)] -z-10" />

      {/* Dynamic Mode-Responsive Playground Background Shade */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[480px] rounded-full blur-[165px] pointer-events-none -z-10 transition-colors duration-1000 ${sandboxMode === 'visual' ? 'bg-[#0A44FF]' : 'bg-[#FF7A2F]'
        } ${isDark ? 'opacity-25' : 'opacity-15'}`} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Interactive Mode Simulator
          </h2>
          <p className={`text-base md:text-lg leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Experience exactly how the Sensa extension works. Switch modes below to see how our docks interact with different websites.
          </p>
        </div>

        {/* Unified Sandbox Toggle Switch */}
        <div className="flex justify-center mb-8">
          <div className={`relative inline-flex items-center p-1.5 rounded-full border shadow-sm backdrop-blur-md ${isDark ? 'bg-[#1C1C1E]/80 border-slate-800' : 'bg-white border-slate-200'}`}>
            
            {/* Sliding Pill Background */}
            <div 
              className={`absolute top-1.5 bottom-1.5 left-1.5 w-[180px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                sandboxMode === 'visual' 
                  ? 'translate-x-0 bg-[#0A44FF] shadow-md shadow-[#0A44FF]/30' 
                  : 'translate-x-full bg-[#FF7A2F] shadow-md shadow-[#FF7A2F]/30'
              }`}
            />

            <button
              onClick={() => setSandboxMode('visual')}
              className={`relative z-10 flex items-center justify-center gap-2.5 w-[180px] py-3 rounded-full text-sm font-bold transition-colors duration-300 ${
                sandboxMode === 'visual'
                ? 'text-white'
                : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
            >
              <Mic size={18} /> Visual Mode
            </button>
            <button
              onClick={() => setSandboxMode('auditory')}
              className={`relative z-10 flex items-center justify-center gap-2.5 w-[180px] py-3 rounded-full text-sm font-bold transition-colors duration-300 ${
                sandboxMode === 'auditory'
                ? 'text-white'
                : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
            >
              <Ear size={18} /> Auditory Mode
            </button>
          </div>
        </div>

        <div className={`border rounded-2xl p-4 md:p-8 backdrop-blur-xl ${isDark ? 'bg-[#161618]/90 border-slate-800 ring-1 ring-white/5 ring-inset shadow-lg' : 'bg-white/90 border-slate-200/80 ring-1 ring-black/5 ring-inset shadow-md'}`}>

          {/* Mock Webpage Frame */}
          <div className={`relative rounded-xl border overflow-hidden min-h-[720px] transition-colors duration-500 ${isDark ? 'bg-[#000000] border-slate-800' : 'bg-white border-slate-300'}`}>

            {/* Host Page Navbar Mockup */}
            <div className={`h-12 border-b flex items-center px-4 ${isDark ? 'bg-[#24262B] border-slate-800' : 'bg-slate-100 border-slate-200'}`}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className={`mx-4 flex-1 h-6 rounded-md max-w-sm flex items-center px-3 text-[10px] font-mono ${isDark ? 'bg-[#1C1C1E] text-slate-500' : 'bg-white text-slate-400'}`}>
                {sandboxMode === 'visual' ? 'example.com/article' : 'example.com/video'}
              </div>
            </div>

            {/* =========================================================
                VISUAL MODE ENVIRONMENT (Text Article)
                ========================================================= */}
            {sandboxMode === 'visual' && (
              <div className={`w-full min-h-[720px] animate-fade-in relative transition-colors duration-500 ${isDark ? 'bg-[#121212]' : 'bg-[#F9FAFB]'}`}>
                {/* Active Focus Ruler Overlay */}
                {isFocusRulerActive && (
                  <div className="absolute top-[35%] left-0 right-0 h-24 bg-yellow-400/25 border-y-2 border-yellow-400 pointer-events-none z-10 shadow-[0_0_25px_rgba(250,204,21,0.35)]" />
                )}

                <div className="flex max-w-6xl mx-auto py-10 px-6 lg:px-12 gap-16 relative z-0">
                  
                  {/* Main Article */}
                  <div className="flex-1 max-w-3xl">
                    {/* Hero Image Mock */}
                    <div className="w-full h-64 rounded-3xl bg-gradient-to-br from-[#0A44FF]/20 to-purple-500/20 mb-8 border border-[#0A44FF]/10 flex items-center justify-center">
                       <Sparkles size={48} className="text-[#0A44FF]/40" />
                    </div>

                    <span className={`text-[11px] font-mono font-bold uppercase tracking-widest ${isDark ? 'text-[#0A44FF]' : 'text-[#0A44FF]'}`}>
                      Technology & Accessibility
                    </span>

                    {/* TTS Highlight effect simulated on title if playing */}
                    <h3 className={`text-4xl md:text-5xl font-black mt-4 mb-6 tracking-tight leading-tight transition-colors duration-300 ${isPlayingTTS ? (isDark ? 'text-emerald-400' : 'text-emerald-600') : (isDark ? 'text-slate-100' : 'text-slate-900')}`}>
                      How Dual-Mode Extensions Revolutionize the Web
                    </h3>

                    <div className="flex items-center gap-4 mb-10">
                       <div className="w-12 h-12 rounded-full bg-slate-300 dark:bg-slate-700" />
                       <div>
                         <p className={`text-sm font-bold m-0 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Sarah Jenkins</p>
                         <p className={`text-xs m-0 mt-0.5 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Published Oct 12 • 5 min read</p>
                       </div>
                    </div>

                    <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      In the past, accessibility tools were scattered and difficult to integrate. Screen readers were designed exclusively for complete blindness, and video captions lived in entirely separate applications. This fragmentation made browsing the web deeply frustrating for users with low vision, learning disabilities, or neurodivergent needs.
                    </p>
                    <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Leveraging modern browser APIs, <strong className={isDark ? 'text-white' : 'text-slate-900'}>Sensa</strong> brings voice controls, screen magnification, and real-time audio captions together into a unified, beautifully designed interface.
                    </p>

                    <div className={`p-5 rounded-2xl border flex items-start gap-4 ${isDark ? 'bg-[#0A44FF]/10 border-[#0A44FF]/20 text-slate-300' : 'bg-white border-[#0A44FF]/20 shadow-sm text-slate-700'}`}>
                      <div className="p-2 bg-[#0A44FF]/10 dark:bg-[#0A44FF]/20 rounded-xl text-[#0A44FF]"><Target size={20} /></div>
                      <p className="m-0 pt-0.5 text-sm leading-relaxed">
                        Test the <strong className={isDark ? 'text-white' : 'text-black'}>Visual Dock</strong> on the right! Click the <strong className={isDark ? 'text-white' : 'text-black'}>Ruler</strong> to activate reading focus, or click <strong className={isDark ? 'text-white' : 'text-black'}>Play</strong> to simulate text-to-speech reading this exact article.
                      </p>
                    </div>
                  </div>

                  {/* Sidebar Mock */}
                  <div className="hidden xl:block w-72 space-y-6 shrink-0">
                    <div className={`p-6 rounded-3xl border ${isDark ? 'bg-[#1C1C1E] border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                      <h4 className={`text-sm font-bold mb-6 uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Related Articles</h4>
                      {[1,2,3].map(i => (
                        <div key={i} className="flex gap-4 mb-5 last:mb-0 cursor-pointer group">
                          <div className="w-16 h-16 rounded-xl bg-slate-200 dark:bg-slate-800 shrink-0 group-hover:opacity-80 transition-opacity" />
                          <div className="flex flex-col justify-center">
                            <div className="w-32 h-3 bg-slate-300 dark:bg-slate-700 rounded-full mb-2.5" />
                            <div className="w-24 h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* EXACT VISUAL DOCK REPLICA */}
                <div className="absolute top-10 right-6 z-20 hover:-translate-y-1 transition-transform duration-300">
                  <MockVisualDock 
                    isDark={false}
                    isMinimized={isMinimized}
                    readingSpeed={1.25}
                    isPlaying={isPlayingTTS}
                    isVoiceCommandActive={isVoiceCommandActive}
                    canRestart={true}
                    onTogglePlay={() => setIsPlayingTTS(!isPlayingTTS)}
                    onToggleVoiceCommand={() => setIsVoiceCommandActive(!isVoiceCommandActive)}
                    onNext={() => {}}
                    onPrev={() => {}}
                    onRestart={() => {}}
                    onMinimizeToggle={() => setIsMinimized(!isMinimized)}
                    onOpenReadingSpeed={() => {}}
                    onOpenSettings={() => setIsFocusRulerActive(!isFocusRulerActive)}
                    onClose={() => {}}
                  />
                </div>
              </div>
            )}

            {/* =========================================================
                AUDITORY MODE ENVIRONMENT (Media Site)
                ========================================================= */}
            {sandboxMode === 'auditory' && (
              <div className={`w-full min-h-[720px] animate-fade-in relative transition-colors duration-500 ${isDark ? 'bg-[#0F0F0F]' : 'bg-[#F9FAFB]'}`}>
                
                <div className="max-w-6xl mx-auto py-8 px-6 lg:px-12">
                  {/* Mock Video Player */}
                  <div className="w-full aspect-video max-h-[460px] rounded-3xl overflow-hidden relative flex flex-col items-center justify-center bg-black shadow-2xl mb-8 group cursor-pointer">
                    {/* Subtle video background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#FF7A2F]/20 via-black to-black" />

                    <MonitorPlay size={80} className="text-white/10 mb-6 relative z-10" />
                    <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center animate-pulse group-hover:bg-[#FF7A2F] transition-all duration-300 relative z-10 backdrop-blur-md">
                      <Play size={32} fill="currentColor" className="text-white ml-2" />
                    </div>

                    {/* Mock Video Controls */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                       <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden mb-4 cursor-pointer">
                         <div className="h-full bg-[#FF7A2F] w-[45%]" />
                       </div>
                       <div className="flex items-center justify-between text-white/90">
                          <div className="flex items-center gap-6">
                            <Play size={20} fill="currentColor" className="hover:text-[#FF7A2F] transition-colors" />
                            <Volume2 size={20} className="hover:text-white transition-colors" />
                            <span className="text-xs font-mono tracking-wide opacity-80">12:04 / 26:30</span>
                          </div>
                          <div className="flex items-center gap-5">
                            <Settings size={18} className="hover:rotate-90 transition-transform duration-300 opacity-80 hover:opacity-100" />
                            <Maximize2 size={18} className="hover:scale-110 transition-transform opacity-80 hover:opacity-100" />
                          </div>
                       </div>
                    </div>
                  </div>

                  {/* Video Metadata */}
                  <div className="flex gap-8">
                     <div className="flex-1">
                        <h2 className={`text-2xl font-black tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Understanding Accessibility in Web Development</h2>
                        <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                           <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 shadow-md shrink-0" />
                              <div>
                                 <p className={`font-bold m-0 text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>Tech Edu Channel</p>
                                 <p className={`text-xs m-0 mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>1.2M subscribers</p>
                              </div>
                              <button className="ml-6 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 rounded-full text-sm font-bold transition-colors">Subscribe</button>
                           </div>
                           <div className="flex gap-3">
                              <div className={`px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-bold cursor-pointer transition-colors ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-slate-200 hover:bg-slate-300 text-slate-800'}`}>
                                👍 14K | 👎
                              </div>
                              <div className={`px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-bold cursor-pointer transition-colors ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-slate-200 hover:bg-slate-300 text-slate-800'}`}>
                                Share
                              </div>
                           </div>
                        </div>
                        <div className={`p-5 rounded-2xl text-sm leading-relaxed ${isDark ? 'bg-white/5 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                           <p className="font-bold mb-2 text-black dark:text-white text-[13px]">254,192 views • Premiered Oct 12, 2023</p>
                           <p>In this video, we explore how modern tools like the Sensa extension can completely change the way we interact with media. <br/><br/>The Auditory Dock below is fully functional! Try toggling captions or interacting with the menu to see how it handles this video environment.</p>
                        </div>
                     </div>
                     <div className="hidden xl:block w-[350px] space-y-4 shrink-0">
                        {[1,2,3,4].map(i => (
                           <div key={i} className="flex gap-3 cursor-pointer group">
                             <div className="w-40 h-[90px] bg-slate-200 dark:bg-slate-800 rounded-xl shrink-0 group-hover:opacity-80 transition-opacity" />
                             <div className="flex flex-col py-1">
                                <div className="w-full h-3.5 bg-slate-300 dark:bg-slate-700 rounded-full mb-2 group-hover:bg-slate-400 dark:group-hover:bg-slate-600 transition-colors" />
                                <div className="w-3/4 h-3.5 bg-slate-300 dark:bg-slate-700 rounded-full mb-3 group-hover:bg-slate-400 dark:group-hover:bg-slate-600 transition-colors" />
                                <div className="w-1/2 h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full" />
                             </div>
                           </div>
                        ))}
                     </div>
                  </div>
                </div>

                {/* EXACT AUDITORY DOCK REPLICA AND LIVE CAPTION BOX */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-row-reverse items-end justify-start gap-6 z-20 animate-pop">
                  
                  {/* Dock Container */}
                  <div className="mb-2 hover:-translate-y-1 transition-transform duration-300">
                    <MockAuditoryDock 
                      isDark={false}
                      isMinimized={isMinimized}
                      isCaptionsActive={isCaptionsActive}
                      onToggleCaptions={() => setIsCaptionsActive(!isCaptionsActive)}
                      onMinimizeToggle={() => setIsMinimized(!isMinimized)}
                      onOpenCaptionLanguage={() => {}}
                      onOpenTranscriptHistory={() => {}}
                      onOpenTextSize={() => {}}
                      onOpenCaptionTransparency={() => {}}
                      isFocusMode={false}
                      onToggleFocusMode={() => {}}
                      onOpenSettings={() => {}}
                      onClose={() => {}}
                    />
                  </div>

                  {/* Caption Box Container (only visible if captions active) */}
                  <div className={`flex-1 transition-all duration-300 origin-bottom ${isCaptionsActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                    <div className="w-full bg-[#1a1a1c]/95 rounded-xl px-5 py-4 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.9)] border border-white/10 flex flex-col gap-3">
                      
                      {/* Header row */}
                      <div className="flex items-center justify-between">
                        {/* langBadge */}
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FF7A2F]/15 border border-[#FF7A2F]/35">
                          <span className="w-2 h-2 rounded-full bg-[#FF7A2F] shadow-[0_0_8px_#FF7A2F] animate-pulse" />
                          <span className="text-[10px] font-semibold text-[#FF9F0A] tracking-wider uppercase">English Audio Detected</span>
                        </div>

                        {/* Visualizer Mock */}
                        <div className="flex items-center gap-1">
                          {[40, 80, 50, 90, 60, 45].map((h, i) => (
                            <div
                              key={i}
                              className="w-1.5 rounded-full bg-[#FF7A2F] animate-wave-pulse"
                              style={{ height: `${h / 4}px`, animationDelay: `${i * 0.15}s` }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Captions Text */}
                      <div className="bg-black/60 rounded-lg p-3 border border-white/5 min-h-[60px] flex items-center">
                        <p className="text-white text-sm font-medium leading-relaxed m-0 animate-pop font-mono">
                          {simulatedCaptionText}
                        </p>
                      </div>

                      {/* Footer Row */}
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Target: English, Spanish, Tagalog</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
