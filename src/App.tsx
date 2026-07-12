import { useState, useEffect } from 'react';
import {
  Ear,
  Volume2,
  Code,
  Cpu,
  Play,
  Mic,
  Maximize2,
  Users,
  Award,
  Globe,
  Sun,
  Moon,
  CheckCircle2,
  Zap,
  BookOpen,
  ArrowRight,
  Download,
  FileText,
  Check,
  AlertCircle
} from 'lucide-react';

type SensoryMode = 'standard' | 'visual' | 'auditory';
type ThemeMode = 'dark' | 'light';

export default function App() {
  const [activeMode, setActiveMode] = useState<SensoryMode>('standard');
  // Initialize theme from localStorage (`sensa_theme`), defaulting to 'light' mode
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem('sensa_theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme as ThemeMode;
    }
    return 'light';
  });

  // Interactive Playground & Dock State
  const [isFocusRulerActive, setIsFocusRulerActive] = useState<boolean>(false);
  const [isSimulatingCaptions, setIsSimulatingCaptions] = useState<boolean>(false);
  const [readingSpeed, setReadingSpeed] = useState<number>(1.2);
  const [simulatedCaptionText, setSimulatedCaptionText] = useState<string>('[EN] Sensa AI: Transcribing active tab speech stream in real-time...');
  const [voiceCommandStatus, setVoiceCommandStatus] = useState<string>('Ready for voice command input...');
  const [ttsPlaying, setTtsPlaying] = useState<boolean>(false);

  const isDark = theme === 'dark';

  // Toggle dark/light theme on root attribute & save preference to localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sensa_theme', theme);
  }, [theme]);

  // Simulate real-time auditory captions ticker when enabled
  useEffect(() => {
    if (!isSimulatingCaptions && activeMode !== 'auditory') return;
    const captions = [
      '[EN] Sensa AI: Transcribing active tab speech stream in real-time...',
      '[EN] Speaker 1: "Welcome to our BulSU Capstone presentation on sensory accessibility."',
      '[EN] Speaker 1: "Notice how Sensa synchronizes audio capture with zero browser latency."',
      '[ES] Sensa AI Translation: "Bienvenido a nuestra presentación del proyecto universitario..."',
      '[TL] Sensa AI Translation: "Maligayang pagdating sa aming BulSU Capstone presentation..."'
    ];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % captions.length;
      setSimulatedCaptionText(captions[index]);
    }, 3200);
    return () => clearInterval(interval);
  }, [isSimulatingCaptions, activeMode]);

  // Handle voice command simulator
  const handleVoiceSimulator = (command: string) => {
    setVoiceCommandStatus(`🎤 Listening for phonetic input: "${command}"...`);
    setTimeout(() => {
      if (command.toLowerCase().includes('visual')) {
        setActiveMode('visual');
        setIsFocusRulerActive(true);
        setVoiceCommandStatus('✅ Recognized: "Visual Mode". Activated high-contrast theme & #FFFF00 focus ruler.');
      } else if (command.toLowerCase().includes('auditory')) {
        setActiveMode('auditory');
        setIsSimulatingCaptions(true);
        setVoiceCommandStatus('✅ Recognized: "Auditory Mode". Launched live multilingual AI caption window.');
      } else if (command.toLowerCase().includes('read')) {
        setTtsPlaying(true);
        setVoiceCommandStatus(`✅ Recognized: "Read Page". Sensa SpeechSynthesis TTS reading article at ${readingSpeed}x speed.`);
      } else {
        setVoiceCommandStatus(`✅ Recognized command: "${command}". System executed action hands-free.`);
      }
    }, 1200);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 relative overflow-x-hidden selection:bg-[#0A44FF] selection:text-white ${isDark ? 'bg-[#1C1C1E] text-gray-200' : 'bg-[#F8F9FC] text-gray-900'
      }`}>
      {/* Background Floating Orbs (`ModeSelection.tsx` authenticity) */}
      <div className={`fixed -top-32 -left-32 w-[550px] h-[550px] rounded-full mix-blend-screen filter blur-[110px] animate-float-blue pointer-events-none -z-10 ${isDark ? 'bg-[#0A44FF]/22' : 'bg-[#0A44FF]/14'
        }`} />
      <div className={`fixed -bottom-32 -right-32 w-[550px] h-[550px] rounded-full mix-blend-screen filter blur-[110px] animate-float-orange pointer-events-none -z-10 ${isDark ? 'bg-[#FF7A2F]/22' : 'bg-[#FF7A2F]/14'
        }`} />

      {/* ======================================================================
          NAVBAR SLOT: Drop your saved Navbar component code right below this line
          ====================================================================== */}
      <header className={`sticky top-0 z-50 w-full backdrop-blur-md border-b px-4 md:px-12 py-4 transition-all duration-300 ${isDark
        ? 'bg-[#1C1C1E]/85 border-[#3A3F4A]'
        : 'bg-white/85 border-[#E2E6F0] shadow-sm'
        }`}>
        <div className="w-full max-w-[1800px] mx-auto flex items-center justify-between gap-8">
          <a href="#hero" className="flex items-center gap-3.5 no-underline group shrink-0">
            <img
              src="/sensa-logo.png"
              alt="Sensa Logo"
              className="w-11 h-11 object-contain drop-shadow-[0_0_12px_rgba(10,68,255,0.5)] group-hover:scale-105 transition-transform duration-300"
            />
            <span className={`text-2xl md:text-3xl font-black tracking-tight transition-colors ${isDark ? 'text-white group-hover:text-[#6AA2FF]' : 'text-gray-900 group-hover:text-[#0A44FF]'
              }`}>
              Sensa
            </span>
          </a>

          <ul className={`hidden lg:flex items-center justify-around flex-1 max-w-5xl mx-8 list-none m-0 p-0 text-sm font-extrabold tracking-wide ${isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
            <li><a href="#problem-solution" className={`transition-colors ${isDark ? 'hover:text-[#FFC09B]' : 'hover:text-[#0A44FF]'}`}>Why Sensa</a></li>
            <li><a href="#features" className={`transition-colors ${isDark ? 'hover:text-[#6AA2FF]' : 'hover:text-[#0A44FF]'}`}>Dual-Mode Features</a></li>
            <li><a href="#playground" className={`transition-colors ${isDark ? 'hover:text-[#FFC09B]' : 'hover:text-[#0A44FF]'}`}>Live Demo Sandbox</a></li>
            <li><a href="#architecture" className={`transition-colors ${isDark ? 'hover:text-[#6AA2FF]' : 'hover:text-[#0A44FF]'}`}>Technical Architecture</a></li>
            <li><a href="#metrics" className={`transition-colors ${isDark ? 'hover:text-[#FFC09B]' : 'hover:text-[#0A44FF]'}`}>Research Metrics</a></li>
            <li><a href="#team" className={`transition-colors ${isDark ? 'hover:text-[#6AA2FF]' : 'hover:text-[#0A44FF]'}`}>Capstone Team</a></li>
          </ul>

          <div className="flex items-center shrink-0">
            {/* Sleek Smooth-Sliding Segmented Theme Toggle */}
            <div className={`relative flex items-center p-1 rounded-full border backdrop-blur-md transition-colors duration-300 shadow-inner select-none ${isDark ? 'bg-[#24262B]/90 border-[#3A3F4A]' : 'bg-gray-100/90 border-gray-200/80'
              }`}>
              {/* Animated Sliding Background Thumb */}
              <div
                className={`absolute left-1 top-1 bottom-1 w-[calc(50%-4px)] rounded-full transition-all duration-300 ease-out shadow-md pointer-events-none ${isDark
                  ? 'translate-x-full bg-[#1C1C1E] border border-[#3A3F4A] shadow-[#FF7A2F]/20'
                  : 'translate-x-0 bg-white border border-gray-200/60 shadow-[#0A44FF]/10'
                  }`}
              />

              {/* Light Mode Button */}
              <button
                onClick={() => setTheme('light')}
                className={`relative z-10 flex items-center justify-center gap-1.5 py-1.5 px-3 sm:px-3.5 rounded-full text-xs font-extrabold transition-colors duration-300 cursor-pointer focus:outline-none ${!isDark ? 'text-[#0A44FF]' : 'text-gray-400 hover:text-gray-200'
                  }`}
                title="Switch to Light Mode"
              >
                <Sun size={14} className={`transition-transform duration-500 ${!isDark ? 'rotate-0 scale-100' : '-rotate-45 scale-90'}`} />
                <span>Light</span>
              </button>

              {/* Dark Mode Button */}
              <button
                onClick={() => setTheme('dark')}
                className={`relative z-10 flex items-center justify-center gap-1.5 py-1.5 px-3 sm:px-3.5 rounded-full text-xs font-extrabold transition-colors duration-300 cursor-pointer focus:outline-none ${isDark ? 'text-[#FF7A2F]' : 'text-gray-600 hover:text-gray-900'
                  }`}
                title="Switch to Dark Mode"
              >
                <Moon size={14} className={`transition-transform duration-500 ${isDark ? 'rotate-0 scale-100' : 'rotate-45 scale-90'}`} />
                <span>Dark</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* ======================================================================
          END NAVBAR SLOT
          ====================================================================== */}

      {/* ======================================================================
          1. HERO SECTION (First Impression - Exact authentic welcome box feel)
          ====================================================================== */}
      <section id="hero" className="relative pt-16 pb-24 md:pt-24 md:pb-32 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

          {/* Authentic Logo with `animate-logo-light` exact drop-shadow animation */}
          <div className="mb-6 transform-gpu">
            <img
              src="/sensa-logo.png"
              alt="Sensa Extension Logo"
              className="w-[98px] h-[98px] md:w-[110px] md:h-[110px] object-contain animate-logo-light mx-auto"
            />
          </div>

          {/* Authentic Title Gradient: `from-[#0A44FF] to-[#FF7A2F]` */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1] max-w-4xl bg-gradient-to-r from-[#0A44FF] via-[#8A56FF] to-[#FF7A2F] bg-clip-text text-transparent animate-pop">
            Sensa: AI-Powered Dual-Mode Accessibility & Sensory Assistant
          </h1>

          <p className={`text-base sm:text-lg md:text-xl max-w-3xl mb-10 leading-relaxed font-medium animate-pop ${isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
            Empowering low-vision and hearing-impaired users across the web through hands-free voice navigation, intelligent live AI captions, high-contrast screen magnification, and adaptive text-to-speech.
          </p>

          <div className="flex items-center justify-center w-full mb-4 animate-pop">
            <a
              href="#guide"
              className={`inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-[22px] font-black text-base shadow-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-95 focus:ring-2 focus:ring-[#0A44FF] focus:outline-none ${isDark
                ? 'bg-[#FF7A2F] hover:bg-[#E8671F] text-white shadow-[#FF7A2F]/40'
                : 'bg-[#0A44FF] hover:bg-[#0035D9] text-white shadow-[#0A44FF]/40'
                }`}
            >
              <Download size={20} /> Add to Chrome - It's Free
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================================
          2. THE PROBLEM & SOLUTION (Why Capstone Exists)
          ====================================================================== */}
      <section id="problem-solution" className={`py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto border-t ${isDark ? 'border-[#3A3F4A]/60' : 'border-gray-200'
        }`}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            The Problem & The Sensa Solution
          </h2>
          <p className={`text-base md:text-lg leading-relaxed font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Millions of individuals face daily sensory barriers navigating standard websites that lack responsive screen readers, real-time audio captions, or hands-free navigation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* The Problem Card */}
          <div className={`backdrop-blur-md border-[2px] border-l-4 border-l-red-500 rounded-[22px] p-6 md:p-8 flex flex-col justify-between shadow-lg transition-all duration-300 hover:scale-[1.02] ${isDark
            ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-red-500/80 shadow-[0_10px_26px_rgba(0,0,0,0.35)]'
            : 'bg-white/85 border-[#E2E6F0] hover:border-red-500 shadow-[0_8px_22px_rgba(0,0,0,0.06)]'
            }`}>
            <div>
              <div className="flex items-center gap-3 text-red-500 font-extrabold text-lg md:text-xl mb-4">
                <AlertCircle size={26} className="shrink-0" />
                <span>The Problem: Sensory Overload & Barriers</span>
              </div>
              <p className={`text-sm md:text-base leading-relaxed mb-6 font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Standard web development assumes full sensory capability from all users. Visually impaired and deaf/hard-of-hearing (DHH) individuals routinely face critical roadblocks across the internet:
              </p>
            </div>
            <ul className={`space-y-4 text-sm list-none p-0 m-0 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-base leading-none mt-0.5">•</span>
                <span><strong className={isDark ? 'text-white' : 'text-gray-900'}>Lack of Native Screen Readers:</strong> External screen reading software is often clunky, fails to follow complex DOM mutations, or lacks natural voice controls.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-base leading-none mt-0.5">•</span>
                <span><strong className={isDark ? 'text-white' : 'text-gray-900'}>Missing Live Captions on Audio Streams:</strong> Countless educational webinars, podcasts, and video clips across the web provide zero closed captioning.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-base leading-none mt-0.5">•</span>
                <span><strong className={isDark ? 'text-white' : 'text-gray-900'}>Complex Keyboard & Mouse Navigation:</strong> Users with severe visual impairment or motor fatigue struggle with small clickable targets and nested drop-down menus.</span>
              </li>
            </ul>
          </div>

          {/* The Sensa Solution Card */}
          <div className={`backdrop-blur-md border-[2px] border-l-4 border-l-emerald-500 rounded-[22px] p-6 md:p-8 flex flex-col justify-between shadow-lg transition-all duration-300 hover:scale-[1.02] ${isDark
            ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-emerald-500/80 shadow-[0_10px_26px_rgba(0,0,0,0.35)]'
            : 'bg-white/85 border-[#E2E6F0] hover:border-emerald-500 shadow-[0_8px_22px_rgba(0,0,0,0.06)]'
            }`}>
            <div>
              <div className="flex items-center gap-3 text-emerald-500 font-extrabold text-lg md:text-xl mb-4">
                <CheckCircle2 size={26} className="shrink-0" />
                <span>The Sensa Approach: Unified MV3 Companion</span>
              </div>
              <p className={`text-sm md:text-base leading-relaxed mb-6 font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Sensa bridges this accessibility gap without requiring website developers to rewrite a single line of their existing codebase. By injecting intelligent content scripts:
              </p>
            </div>
            <ul className={`space-y-4 text-sm list-none p-0 m-0 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                <span><strong className={isDark ? 'text-white' : 'text-gray-900'}>Zero-Latency Hands-Free Voice Commands:</strong> Powered by the Web Speech API with exponential backoff and Levenshtein fuzzy scoring (&lt; 1.5s command execution).</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                <span><strong className={isDark ? 'text-white' : 'text-gray-900'}>Universal Web Audio API & Tab Capture:</strong> Leverages Chrome `tabCapture` with real-time `AnalyserNode` frequency pipelines to transcribe and analyze audio streams instantly.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                <span><strong className={isDark ? 'text-white' : 'text-gray-900'}>High-Contrast Focus Ruler & Magnifier:</strong> Guided reading lines (#FFFF00) and customizable dyslexia-friendly typography toggles.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ======================================================================
          3. CORE FEATURES SHOWCASE (Dual-Mode Architecture)
          ====================================================================== */}
      <section id="features" className={`py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto border-t ${isDark ? 'border-[#3A3F4A]/60' : 'border-gray-200'
        }`}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Core Features Showcase
          </h2>
          <p className={`text-base md:text-lg leading-relaxed font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Tailored specifically for two distinct sensory profiles with dedicated visual tokens, custom speech bridges, and intelligent floating docks.
          </p>
        </div>

        {/* Visual Mode Showcase (`#0A44FF` Brand Tokens) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h3 className={`text-2xl md:text-3xl font-black m-0 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              👁️ Visual Mode (For Low-Vision & Blind Users)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className={`backdrop-blur-md border-[2px] border-t-4 border-t-[#0A44FF] rounded-[22px] p-6 shadow-md transition-all duration-300 hover:scale-[1.02] ${isDark
              ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-[#0A44FF] hover:bg-[#262A31]/95 shadow-[0_10px_26px_rgba(0,0,0,0.35)]'
              : 'bg-white/85 border-[#E2E6F0] hover:border-[#0A44FF] shadow-[0_8px_22px_rgba(0,0,0,0.06)]'
              }`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border ${isDark ? 'bg-[#0A44FF]/22 text-[#6AA2FF] border-[#0A44FF]/40' : 'bg-[#0A44FF]/12 text-[#0A44FF] border-[#0A44FF]/30'
                }`}>
                <Mic size={24} />
              </div>
              <h4 className={`text-lg font-extrabold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Hands-Free Voice Navigation</h4>
              <p className={`text-sm leading-relaxed m-0 font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Execute commands like <em className={isDark ? 'text-gray-200 font-bold' : 'text-gray-800 font-bold'}>"Activate Visual Mode"</em>, <em className={isDark ? 'text-gray-200 font-bold' : 'text-gray-800 font-bold'}>"Read page"</em>, <em className={isDark ? 'text-gray-200 font-bold' : 'text-gray-800 font-bold'}>"Scroll down"</em>, or <em className={isDark ? 'text-gray-200 font-bold' : 'text-gray-800 font-bold'}>"Click submit"</em> without touching the keyboard or mouse.
              </p>
            </div>

            <div className={`backdrop-blur-md border-[2px] border-t-4 border-t-[#0A44FF] rounded-[22px] p-6 shadow-md transition-all duration-300 hover:scale-[1.02] ${isDark
              ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-[#0A44FF] hover:bg-[#262A31]/95 shadow-[0_10px_26px_rgba(0,0,0,0.35)]'
              : 'bg-white/85 border-[#E2E6F0] hover:border-[#0A44FF] shadow-[0_8px_22px_rgba(0,0,0,0.06)]'
              }`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border ${isDark ? 'bg-[#0A44FF]/22 text-[#6AA2FF] border-[#0A44FF]/40' : 'bg-[#0A44FF]/12 text-[#0A44FF] border-[#0A44FF]/30'
                }`}>
                <Maximize2 size={24} />
              </div>
              <h4 className={`text-lg font-extrabold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Screen Magnifier & Guided Reading</h4>
              <p className={`text-sm leading-relaxed m-0 font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Includes our signature horizontal <strong className="text-yellow-400 font-black bg-yellow-400/10 px-1 rounded">#FFFF00 Focus Ruler</strong> that isolates text line-by-line to prevent jumping, plus a customizable magnifying lens overlay.
              </p>
            </div>

            <div className={`backdrop-blur-md border-[2px] border-t-4 border-t-[#0A44FF] rounded-[22px] p-6 shadow-md transition-all duration-300 hover:scale-[1.02] ${isDark
              ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-[#0A44FF] hover:bg-[#262A31]/95 shadow-[0_10px_26px_rgba(0,0,0,0.35)]'
              : 'bg-white/85 border-[#E2E6F0] hover:border-[#0A44FF] shadow-[0_8px_22px_rgba(0,0,0,0.06)]'
              }`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border ${isDark ? 'bg-[#0A44FF]/22 text-[#6AA2FF] border-[#0A44FF]/40' : 'bg-[#0A44FF]/12 text-[#0A44FF] border-[#0A44FF]/30'
                }`}>
                <Volume2 size={24} />
              </div>
              <h4 className={`text-lg font-extrabold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Image Alt-Text AI Reader</h4>
              <p className={`text-sm leading-relaxed m-0 font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Automatically detects un-captioned images, infographics, and charts across DOM nodes and reads out clear, contextual descriptions via natural TTS voices.
              </p>
            </div>

            <div className={`backdrop-blur-md border-[2px] border-t-4 border-t-[#0A44FF] rounded-[22px] p-6 shadow-md transition-all duration-300 hover:scale-[1.02] ${isDark
              ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-[#0A44FF] hover:bg-[#262A31]/95 shadow-[0_10px_26px_rgba(0,0,0,0.35)]'
              : 'bg-white/85 border-[#E2E6F0] hover:border-[#0A44FF] shadow-[0_8px_22px_rgba(0,0,0,0.06)]'
              }`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border ${isDark ? 'bg-[#0A44FF]/22 text-[#6AA2FF] border-[#0A44FF]/40' : 'bg-[#0A44FF]/12 text-[#0A44FF] border-[#0A44FF]/30'
                }`}>
                <FileText size={24} />
              </div>
              <h4 className={`text-lg font-extrabold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Customizable Typography & Autoscroll</h4>
              <p className={`text-sm leading-relaxed m-0 font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Instantly convert any web article to high-contrast dark theme, toggle dyslexia-friendly fonts, and set hands-free autoscroll speed right from the floating dock.
              </p>
            </div>
          </div>
        </div>

        {/* Auditory Mode Showcase (`#FF7A2F` Brand Tokens) */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <h3 className={`text-2xl md:text-3xl font-black m-0 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              🦻 Auditory Mode (For Hearing Loss & DHH Users)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className={`backdrop-blur-md border-[2px] border-t-4 border-t-[#FF7A2F] rounded-[22px] p-6 shadow-md transition-all duration-300 hover:scale-[1.02] ${isDark
              ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-[#FF7A2F] hover:bg-[#262A31]/95 shadow-[0_10px_26px_rgba(0,0,0,0.35)]'
              : 'bg-white/85 border-[#E2E6F0] hover:border-[#FF7A2F] shadow-[0_8px_22px_rgba(0,0,0,0.06)]'
              }`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border ${isDark ? 'bg-[#FF7A2F]/22 text-[#FFC09B] border-[#FF7A2F]/40' : 'bg-[#FF7A2F]/12 text-[#FF7A2F] border-[#FF7A2F]/30'
                }`}>
                <Ear size={24} />
              </div>
              <h4 className={`text-lg font-extrabold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Live Multilingual AI Captions</h4>
              <p className={`text-sm leading-relaxed m-0 font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Showcase real-time transcription overlay (<code className="text-[#FF7A2F] font-mono font-bold text-xs">AuditoryCaptionWindow.tsx</code>) across browser audio streams with instant translation (`EN`, `ES`, `FR`, `TL`, `ZH`).
              </p>
            </div>

            <div className={`backdrop-blur-md border-[2px] border-t-4 border-t-[#FF7A2F] rounded-[22px] p-6 shadow-md transition-all duration-300 hover:scale-[1.02] ${isDark
              ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-[#FF7A2F] hover:bg-[#262A31]/95 shadow-[0_10px_26px_rgba(0,0,0,0.35)]'
              : 'bg-white/85 border-[#E2E6F0] hover:border-[#FF7A2F] shadow-[0_8px_22px_rgba(0,0,0,0.06)]'
              }`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border ${isDark ? 'bg-[#FF7A2F]/22 text-[#FFC09B] border-[#FF7A2F]/40' : 'bg-[#FF7A2F]/12 text-[#FF7A2F] border-[#FF7A2F]/30'
                }`}>
                <Zap size={24} />
              </div>
              <h4 className={`text-lg font-extrabold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Web Audio API Analyser & Visualizer</h4>
              <p className={`text-sm leading-relaxed m-0 font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Render dynamic sound waveforms and frequency bars directly on the screen using the <strong className={isDark ? 'text-white' : 'text-gray-900'}>Web Audio API AnalyserNode</strong> to visually represent sound intensity, pitch, and cadence.
              </p>
            </div>

            <div className={`backdrop-blur-md border-[2px] border-t-4 border-t-[#FF7A2F] rounded-[22px] p-6 shadow-md transition-all duration-300 hover:scale-[1.02] ${isDark
              ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-[#FF7A2F] hover:bg-[#262A31]/95 shadow-[0_10px_26px_rgba(0,0,0,0.35)]'
              : 'bg-white/85 border-[#E2E6F0] hover:border-[#FF7A2F] shadow-[0_8px_22px_rgba(0,0,0,0.06)]'
              }`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border ${isDark ? 'bg-[#FF7A2F]/22 text-[#FFC09B] border-[#FF7A2F]/40' : 'bg-[#FF7A2F]/12 text-[#FF7A2F] border-[#FF7A2F]/30'
                }`}>
                <CheckCircle2 size={24} />
              </div>
              <h4 className={`text-lg font-extrabold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Environmental Alerts & Sensory Noise Warnings</h4>
              <p className={`text-sm leading-relaxed m-0 font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Visual flashing warnings (`border-[#FF7A2F] animate-pulse`) instantly notify deaf/hard-of-hearing users when sudden loud environmental noises, warning beeps, or chat alarms occur on hidden background tabs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          4. INTERACTIVE LIVE DEMO & PLAYGROUND SECTION
          ====================================================================== */}
      <section id="playground" className={`py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto border-t ${isDark ? 'border-[#3A3F4A]/60' : 'border-gray-200'
        }`}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Interactive Live Demo / Playground
          </h2>
          <p className={`text-base md:text-lg leading-relaxed font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Experience Sensa's dual-mode tools directly on this web page right now — no Chrome extension installation required!
          </p>
        </div>

        <div className={`border rounded-[26px] p-4 sm:p-6 md:p-8 shadow-2xl backdrop-blur-md ${isDark ? 'bg-[#24262B]/90 border-[#3A3F4A]' : 'bg-white/95 border-[#E2E6F0]'
          }`}>
          {/* Toolbar */}
          <div className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b mb-6 ${isDark ? 'border-[#3A3F4A]' : 'border-gray-200'
            }`}>
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <span className={`text-sm font-bold mr-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Sandbox Controls:</span>

              <button
                onClick={() => setIsFocusRulerActive(!isFocusRulerActive)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${isFocusRulerActive
                  ? 'bg-yellow-400 text-black shadow-md shadow-yellow-400/30 font-black'
                  : isDark ? 'bg-[#1C1C1E] border border-[#3A3F4A] text-gray-300 hover:border-yellow-400' : 'bg-gray-100 border border-gray-300 text-gray-700 hover:border-yellow-500'
                  }`}
              >
                📏 {isFocusRulerActive ? 'Disable' : 'Launch'} #FFFF00 Focus Ruler
              </button>

              <button
                onClick={() => setIsSimulatingCaptions(!isSimulatingCaptions)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${isSimulatingCaptions
                  ? 'bg-[#FF7A2F] text-white shadow-md shadow-[#FF7A2F]/35 font-black'
                  : isDark ? 'bg-[#1C1C1E] border border-[#3A3F4A] text-gray-300 hover:border-[#FF7A2F]' : 'bg-gray-100 border border-gray-300 text-gray-700 hover:border-[#FF7A2F]'
                  }`}
              >
                💬 {isSimulatingCaptions ? 'Stop' : 'Simulate'} Live AI Subtitle Box
              </button>

              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs ${isDark ? 'bg-[#1C1C1E] border-[#3A3F4A]' : 'bg-gray-100 border-gray-300'
                }`}>
                <span className={`font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>TTS Speed:</span>
                <select
                  value={readingSpeed}
                  onChange={(e) => setReadingSpeed(parseFloat(e.target.value))}
                  className={`bg-transparent font-bold border-none outline-none cursor-pointer pr-1 ${isDark ? 'text-white' : 'text-gray-900'}`}
                >
                  <option value={1.0} className={isDark ? 'bg-[#1C1C1E] text-white' : 'bg-white text-gray-900'}>1.0x (Normal)</option>
                  <option value={1.2} className={isDark ? 'bg-[#1C1C1E] text-white' : 'bg-white text-gray-900'}>1.2x (Recommended)</option>
                  <option value={1.5} className={isDark ? 'bg-[#1C1C1E] text-white' : 'bg-white text-gray-900'}>1.5x (Fast Reading)</option>
                  <option value={2.0} className={isDark ? 'bg-[#1C1C1E] text-white' : 'bg-white text-gray-900'}>2.0x (Skimming)</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end md:self-center">
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                ● Live Sandbox Ready
              </span>
            </div>
          </div>

          {/* Voice Command Simulator Box inside Playground */}
          <div className={`p-5 rounded-[20px] border flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8 ${isDark ? 'bg-[#1C1C1E] border-[#3A3F4A]' : 'bg-gray-50 border-gray-200'
            }`}>
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#0A44FF] flex items-center justify-center text-white shadow-lg shadow-[#0A44FF]/40 animate-pulse shrink-0">
                <Mic size={24} />
              </div>
              <div>
                <h4 className={`text-sm font-bold m-0 ${isDark ? 'text-white' : 'text-gray-900'}`}>Voice Command Simulator</h4>
                <p className={`text-xs m-0 mt-0.5 font-semibold ${isDark ? 'text-[#6AA2FF]' : 'text-[#0A44FF]'}`}>{voiceCommandStatus}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap w-full lg:w-auto">
              <span className={`text-xs mr-1 font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Try testing command:</span>
              <button
                onClick={() => handleVoiceSimulator('Activate Visual Mode')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors border ${isDark ? 'bg-[#24262B] hover:bg-[#0A44FF] text-gray-300 hover:text-white border-[#3A3F4A]' : 'bg-white hover:bg-[#0A44FF] text-gray-700 hover:text-white border-gray-300'
                  }`}
              >
                "Activate Visual Mode"
              </button>
              <button
                onClick={() => handleVoiceSimulator('Activate Auditory Mode')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors border ${isDark ? 'bg-[#24262B] hover:bg-[#FF7A2F] text-gray-300 hover:text-white border-[#3A3F4A]' : 'bg-white hover:bg-[#FF7A2F] text-gray-700 hover:text-white border-gray-300'
                  }`}
              >
                "Activate Auditory Mode"
              </button>
              <button
                onClick={() => handleVoiceSimulator('Read Page Content')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors border ${isDark ? 'bg-[#24262B] hover:bg-emerald-600 text-gray-300 hover:text-white border-[#3A3F4A]' : 'bg-white hover:bg-emerald-600 text-gray-700 hover:text-white border-gray-300'
                  }`}
              >
                "Read Page Content"
              </button>
            </div>
          </div>

          {/* Mock Sample Article Sandbox */}
          <div className={`relative rounded-2xl p-6 md:p-10 border overflow-hidden min-h-[340px] ${isDark ? 'bg-[#1C1C1E]/90 border-[#3A3F4A]' : 'bg-gray-50 border-gray-200'
            }`}>
            {/* Active Focus Ruler Overlay */}
            {isFocusRulerActive && (
              <div className="absolute top-1/2 left-0 right-0 h-16 bg-yellow-400/25 border-y-2 border-yellow-400 pointer-events-none z-10 -translate-y-1/2 shadow-[0_0_25px_rgba(250,204,21,0.35)]" />
            )}

            <div className="max-w-3xl mx-auto py-2 relative z-0">
              <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-[#6AA2FF]' : 'text-[#0A44FF]'}`}>
                Sample Web Article • Capstone Accessibility Test
              </span>
              <h3 className={`text-2xl md:text-3xl font-black mt-2 mb-4 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                How Dual-Mode Extensions Revolutionize Web Accessibility in 2026
              </h3>
              <p className={`text-sm md:text-base leading-relaxed mb-4 font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Historically, accessibility tools forced users into rigid, single-purpose software solutions. Screen readers were designed exclusively for complete blindness, while video closed captioning tools operated entirely separately. This fragmented experience created immense friction for neurodivergent, low-vision, or elderly internet users.
              </p>
              <p className={`text-sm md:text-base leading-relaxed mb-6 font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                By leveraging Chrome Manifest V3 (<code className={`font-mono text-xs font-bold ${isDark ? 'text-[#6AA2FF]' : 'text-[#0A44FF]'}`}>chrome.tabCapture</code> and <code className={`font-mono text-xs font-bold ${isDark ? 'text-[#6AA2FF]' : 'text-[#0A44FF]'}`}>Offscreen Documents</code>) alongside the <strong className={isDark ? 'text-white' : 'text-gray-900'}>Web Audio API</strong>, modern assistive tools like <strong className={isDark ? 'text-white' : 'text-gray-900'}>Sensa</strong> synchronize voice navigation and real-time audio waveform analysis into one harmonious, low-latency companion dock.
              </p>
              <div className={`p-4 rounded-xl border text-sm italic ${isDark ? 'bg-[#24262B] border-[#3A3F4A] text-gray-400' : 'bg-white border-gray-200 text-gray-600'
                }`}>
                💡 <strong className={isDark ? 'text-gray-300' : 'text-gray-800'}>Panelist Tip:</strong> Try clicking <strong className="text-yellow-400 font-bold bg-yellow-400/10 px-1 rounded">"Launch #FFFF00 Focus Ruler"</strong> above to see how our horizontal tracking bar locks onto text lines to assist individuals with macular degeneration and dyslexia!
              </div>
            </div>
          </div>

          {/* Simulated Auditory Subtitle Window */}
          {(isSimulatingCaptions || activeMode === 'auditory') && (
            <div className={`mt-6 border rounded-2xl p-4 shadow-xl flex items-center justify-between gap-4 animate-pop ${isDark ? 'bg-[#1C1C1E] border-[#FF7A2F]/50' : 'bg-white border-[#FF7A2F]'
              }`}>
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-3 h-3 rounded-full bg-[#FF7A2F] animate-ping shrink-0" />
                <p className={`m-0 truncate font-mono text-sm font-bold ${isDark ? 'text-[#6AA2FF]' : 'text-[#0A44FF]'}`}>{simulatedCaptionText}</p>
              </div>
              <span className="text-[11px] text-[#FFC09B] font-extrabold uppercase px-2.5 py-1 rounded bg-[#FF7A2F]/20 border border-[#FF7A2F]/40 shrink-0">
                Live AI Audio Bridge
              </span>
            </div>
          )}
        </div>
      </section>

      {/* ======================================================================
          5. TECHNICAL ARCHITECTURE & SYSTEM WORKFLOW
          ====================================================================== */}
      <section id="architecture" className={`py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto border-t ${isDark ? 'border-[#3A3F4A]/60' : 'border-gray-200'
        }`}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Technical Architecture & System Workflow
          </h2>
          <p className={`text-base md:text-lg leading-relaxed font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Demonstrating engineering depth, type-safe MV3 architecture, and strict adherence to universal web design guidelines.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className={`backdrop-blur-md border-[2px] rounded-[22px] p-6 transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-[#0A44FF]' : 'bg-white/85 border-[#E2E6F0] hover:border-[#0A44FF]'
            }`}>
            <Code className="w-8 h-8 text-[#0A44FF] mb-3" />
            <h4 className={`text-lg font-extrabold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>React 18 & TypeScript (`.tsx`)</h4>
            <p className={`text-sm m-0 leading-relaxed font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Provides strict type safety and component modularity across both the Chrome extension popup (<code className={`font-mono text-xs font-bold ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>ModeSelection.tsx</code>) and this live capstone website.
            </p>
          </div>

          <div className={`backdrop-blur-md border-[2px] rounded-[22px] p-6 transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-[#FF7A2F]' : 'bg-white/85 border-[#E2E6F0] hover:border-[#FF7A2F]'
            }`}>
            <Cpu className="w-8 h-8 text-[#FF7A2F] mb-3" />
            <h4 className={`text-lg font-extrabold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Plasmo Extension Framework</h4>
            <p className={`text-sm m-0 leading-relaxed font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Automates complex multi-target bundling for Chrome MV3, hot module replacement (HMR), and clean content script injections across dynamic web DOMs.
            </p>
          </div>

          <div className={`backdrop-blur-md border-[2px] rounded-[22px] p-6 transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-[#0A44FF]' : 'bg-white/85 border-[#E2E6F0] hover:border-[#0A44FF]'
            }`}>
            <Zap className="w-8 h-8 text-[#0A44FF] mb-3" />
            <h4 className={`text-lg font-extrabold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Node.js & WebSocket Engine</h4>
            <p className={`text-sm m-0 leading-relaxed font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Custom, high-concurrency backend hosted on <strong className={isDark ? 'text-white' : 'text-gray-900'}>Render</strong> routing live binary audio streams over WebSockets directly to <strong className={isDark ? 'text-white' : 'text-gray-900'}>Deepgram</strong> (STT) and <strong className={isDark ? 'text-white' : 'text-gray-900'}>DeepL</strong> (Translation) with sub-200ms latency.
            </p>
          </div>

          <div className={`backdrop-blur-md border-[2px] rounded-[22px] p-6 transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-[#FF7A2F]' : 'bg-white/85 border-[#E2E6F0] hover:border-[#FF7A2F]'
            }`}>
            <Mic className="w-8 h-8 text-[#FF7A2F] mb-3" />
            <h4 className={`text-lg font-extrabold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Web Speech & Web Audio APIs</h4>
            <p className={`text-sm m-0 leading-relaxed font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Custom voice bridges (<code className={`font-mono text-xs font-bold ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>modeSelectionVoiceBridge.ts</code>) with exponential backoff (`300ms - 3000ms`) and real-time <strong className={isDark ? 'text-white' : 'text-gray-900'}>Web Audio API AnalyserNode</strong> pipelines for sound visualizers and environmental alerts.
            </p>
          </div>

          <div className={`backdrop-blur-md border-[2px] rounded-[22px] p-6 transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-[#0A44FF]' : 'bg-white/85 border-[#E2E6F0] hover:border-[#0A44FF]'
            }`}>
            <Globe className="w-8 h-8 text-[#0A44FF] mb-3" />
            <h4 className={`text-lg font-extrabold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Chrome MV3 & WCAG 2.1 AAA</h4>
            <p className={`text-sm m-0 leading-relaxed font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Utilizes secure `chrome.storage`, `chrome.tabs`, and `chrome.tabCapture` alongside strict ARIA accessibility attributes and `#FFFF00` focus guides.
            </p>
          </div>

          <div className={`backdrop-blur-md border-[2px] rounded-[22px] p-6 transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-[#FF7A2F]' : 'bg-white/85 border-[#E2E6F0] hover:border-[#FF7A2F]'
            }`}>
            <CheckCircle2 className="w-8 h-8 text-[#FF7A2F] mb-3" />
            <h4 className={`text-lg font-extrabold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Stateless Cloud Processing</h4>
            <p className={`text-sm m-0 leading-relaxed font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Enforces strict end-to-end encryption (`TLS 1.3 / AES-256`) across WebSocket streams. Audio packets sent to Deepgram and DeepL are processed entirely in-memory and never permanently stored or logged.
            </p>
          </div>
        </div>

        {/* System Workflow Step Diagram */}
        <div className={`border rounded-[26px] p-6 md:p-10 shadow-xl backdrop-blur-md ${isDark ? 'bg-[#24262B]/90 border-[#3A3F4A]' : 'bg-white/95 border-[#E2E6F0]'
          }`}>
          <div className="text-center mb-10">
            <h3 className={`text-xl md:text-2xl font-black m-0 ${isDark ? 'text-white' : 'text-gray-900'}`}>Sensa Real-Time Data & Execution Workflow</h3>
            <p className={`text-xs md:text-sm mt-1 font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>How Sensa synchronizes dual-mode commands with zero browser lag across tabs</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className={`border rounded-2xl p-5 relative ${isDark ? 'bg-[#1C1C1E] border-[#3A3F4A]' : 'bg-gray-50 border-gray-200'}`}>
              <span className="inline-block px-2.5 py-0.5 rounded text-xs font-black bg-[#0A44FF] text-white mb-3">
                Step 1
              </span>
              <h4 className={`text-base font-bold mb-1.5 ${isDark ? 'text-white' : 'text-gray-900'}`}>Content Script & DOM Capture</h4>
              <p className={`text-xs m-0 leading-relaxed font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                `content.ts` injects non-blocking listeners into active tabs to monitor keyboard focus, read semantic tags (`h1-h6`, `alt`), and capture audio streams.
              </p>
            </div>

            <div className={`border rounded-2xl p-5 relative ${isDark ? 'bg-[#1C1C1E] border-[#3A3F4A]' : 'bg-gray-50 border-gray-200'}`}>
              <span className="inline-block px-2.5 py-0.5 rounded text-xs font-black bg-[#FF7A2F] text-white mb-3">
                Step 2
              </span>
              <h4 className={`text-base font-bold mb-1.5 ${isDark ? 'text-white' : 'text-gray-900'}`}>Service Worker Synchronization</h4>
              <p className={`text-xs m-0 leading-relaxed font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Background worker (`background/index.ts`) coordinates tab communication, checks permission grants (`activeTab`, `microphone`), and manages state.
              </p>
            </div>

            <div className={`border rounded-2xl p-5 relative ${isDark ? 'bg-[#1C1C1E] border-[#3A3F4A]' : 'bg-gray-50 border-gray-200'}`}>
              <span className="inline-block px-2.5 py-0.5 rounded text-xs font-black bg-purple-600 text-white mb-3">
                Step 3
              </span>
              <h4 className={`text-base font-bold mb-1.5 ${isDark ? 'text-white' : 'text-gray-900'}`}>WebSocket Engine & AI Pipeline</h4>
              <p className={`text-xs m-0 leading-relaxed font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Active tab audio is streamed over high-concurrency WebSockets to our Node.js server (`Render`), where Deepgram transcribes and DeepL translates in real-time.
              </p>
            </div>

            <div className={`border rounded-2xl p-5 relative ${isDark ? 'bg-[#1C1C1E] border-[#3A3F4A]' : 'bg-gray-50 border-gray-200'}`}>
              <span className="inline-block px-2.5 py-0.5 rounded text-xs font-black bg-emerald-600 text-white mb-3">
                Step 4
              </span>
              <h4 className={`text-base font-bold mb-1.5 ${isDark ? 'text-white' : 'text-gray-900'}`}>Real-Time Sensory Rendering</h4>
              <p className={`text-xs m-0 leading-relaxed font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Visual or Auditory Docks dynamically render `#FFFF00` focus rulers, high-contrast themes, or live multilingual captions and environmental warning alerts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          6. CAPSTONE RESEARCH & VALIDATION METRICS
          ====================================================================== */}
      <section id="metrics" className={`py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto border-t ${isDark ? 'border-[#3A3F4A]/60' : 'border-gray-200'
        }`}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Capstone Research & Validation Metrics
          </h2>
          <p className={`text-base md:text-lg leading-relaxed font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Rigorous performance benchmarking and usability testing conducted to verify system responsiveness across sensory profiles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className={`backdrop-blur-md border-[2px] rounded-[22px] p-6 text-center shadow-lg transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-[#FF7A2F]' : 'bg-white/85 border-[#E2E6F0] hover:border-[#FF7A2F]'
            }`}>
            <div className="text-4xl md:text-5xl font-black text-[#0A44FF] mb-3 tracking-tight">&lt; 1.5s</div>
            <h4 className={`text-base font-extrabold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Voice Command Lockout Latency</h4>
            <p className={`text-xs m-0 leading-relaxed font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Average time from speech input (`"Activate Visual Mode"`) to full DOM theme and focus ruler injection.
            </p>
          </div>

          <div className={`backdrop-blur-md border-[2px] rounded-[22px] p-6 text-center shadow-lg transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-[#FF7A2F]' : 'bg-white/85 border-[#E2E6F0] hover:border-[#FF7A2F]'
            }`}>
            <div className="text-4xl md:text-5xl font-black text-[#FF7A2F] mb-3 tracking-tight">95%</div>
            <h4 className={`text-base font-extrabold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Hands-Free Task Completion Rate</h4>
            <p className={`text-xs m-0 leading-relaxed font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Achieved in usability testing with visually impaired and DHH participants navigating multi-page web applications.
            </p>
          </div>

          <div className={`backdrop-blur-md border-[2px] rounded-[22px] p-6 text-center shadow-lg transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-[#FF7A2F]' : 'bg-white/85 border-[#E2E6F0] hover:border-[#FF7A2F]'
            }`}>
            <div className="text-4xl md:text-5xl font-black text-[#0A44FF] mb-3 tracking-tight">98%</div>
            <h4 className={`text-base font-extrabold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Audio & Caption Synchronization</h4>
            <p className={`text-xs m-0 leading-relaxed font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              High accuracy scoring across complex YouTube, webinar, and HTML5 audio streams using Chrome `tabCapture` and Web Audio pipelines.
            </p>
          </div>

          <div className={`backdrop-blur-md border-[2px] rounded-[22px] p-6 text-center shadow-lg transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-[#FF7A2F]' : 'bg-white/85 border-[#E2E6F0] hover:border-[#FF7A2F]'
            }`}>
            <div className="text-4xl md:text-5xl font-black text-emerald-500 mb-3 tracking-tight">0</div>
            <h4 className={`text-base font-extrabold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Audio Bridge Crash Loops</h4>
            <p className={`text-xs m-0 leading-relaxed font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Zero audio recognition crashes or mic disconnects after implementing our custom exponential backoff recovery algorithm.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================================
          7. INSTALLATION & USER GUIDE (Walkthrough)
          ====================================================================== */}
      <section id="guide" className={`py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto border-t ${isDark ? 'border-[#3A3F4A]/60' : 'border-gray-200'
        }`}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Installation & User Walkthrough
          </h2>
          <p className={`text-base md:text-lg leading-relaxed font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Get up and running with Sensa across any Google Chrome or Chromium browser in 3 simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`backdrop-blur-md border-[2px] rounded-[22px] p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-[#0A44FF]' : 'bg-white/85 border-[#E2E6F0] hover:border-[#0A44FF]'
            }`}>
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className={`w-10 h-10 rounded-xl font-black text-lg flex items-center justify-center border ${isDark ? 'bg-[#0A44FF]/22 text-[#6AA2FF] border-[#0A44FF]/40' : 'bg-[#0A44FF]/12 text-[#0A44FF] border-[#0A44FF]/30'
                  }`}>
                  1
                </span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Unpack & Load</span>
              </div>
              <h4 className={`text-xl font-extrabold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Install Extension Package</h4>
              <p className={`text-sm leading-relaxed m-0 font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Download the Sensa release ZIP from our GitHub repository or Web Store. Open Chrome and navigate to <code className={`px-1.5 py-0.5 rounded font-mono text-xs font-bold ${isDark ? 'bg-[#1C1C1E] text-[#6AA2FF]' : 'bg-gray-100 text-[#0A44FF]'}`}>chrome://extensions</code>. Enable <strong className={isDark ? 'text-white' : 'text-gray-900'}>Developer Mode</strong> in the top right, then click <strong className={isDark ? 'text-white' : 'text-gray-900'}>Load unpacked</strong> and select the build folder.
              </p>
            </div>
          </div>

          <div className={`backdrop-blur-md border-[2px] rounded-[22px] p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-[#FF7A2F]' : 'bg-white/85 border-[#E2E6F0] hover:border-[#FF7A2F]'
            }`}>
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className={`w-10 h-10 rounded-xl font-black text-lg flex items-center justify-center border ${isDark ? 'bg-[#FF7A2F]/22 text-[#FFC09B] border-[#FF7A2F]/40' : 'bg-[#FF7A2F]/12 text-[#FF7A2F] border-[#FF7A2F]/30'
                  }`}>
                  2
                </span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Voice Onboarding</span>
              </div>
              <h4 className={`text-xl font-extrabold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Hands-Free Mode Selection</h4>
              <p className={`text-sm leading-relaxed m-0 font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                When the onboarding screen appears, simply say clearly into your microphone: <em className={isDark ? 'text-gray-300 font-bold' : 'text-gray-800 font-bold'}>"Sensa, Visual Mode"</em> or <em className={isDark ? 'text-gray-300 font-bold' : 'text-gray-800 font-bold'}>"Sensa, Auditory Mode"</em>. The extension will instantly configure your sensory profile and spawn the corresponding HUD dock.
              </p>
            </div>
          </div>

          <div className={`backdrop-blur-md border-[2px] rounded-[22px] p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-purple-500' : 'bg-white/85 border-[#E2E6F0] hover:border-purple-500'
            }`}>
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 font-black text-lg flex items-center justify-center border border-purple-500/30">
                  3
                </span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Customize Dock</span>
              </div>
              <h4 className={`text-xl font-extrabold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Fine-Tune Sensory Tools</h4>
              <p className={`text-sm leading-relaxed m-0 font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Use the floating dock on any webpage to toggle the #FFFF00 reading focus ruler, adjust natural TTS speaking speed (`1x to 2x`), or switch live AI subtitle translations (`English, Spanish, French, Tagalog`).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          8. CAPSTONE DEMO VIDEO SECTION
          ====================================================================== */}
      <section id="video" className={`py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto border-t ${isDark ? 'border-[#3A3F4A]/60' : 'border-gray-200'
        }`}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Watch Sensa in Action
          </h2>
          <p className={`text-base md:text-lg leading-relaxed font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            See our complete dual-mode accessibility demonstration, real-time speech navigation, and high-contrast focus tools.
          </p>
        </div>

        <div className={`relative max-w-4xl mx-auto border-2 border-dashed rounded-[26px] p-8 md:p-16 text-center shadow-2xl overflow-hidden group ${isDark ? 'bg-[#24262B]/85 border-[#0A44FF]/50' : 'bg-white/90 border-[#0A44FF]/40'
          }`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0A44FF]/10 via-transparent to-[#FF7A2F]/10 pointer-events-none" />

          <div className="w-20 h-20 rounded-full bg-[#0A44FF]/20 border-2 border-[#0A44FF] flex items-center justify-center text-[#0A44FF] mx-auto mb-6 shadow-lg shadow-[#0A44FF]/40 group-hover:scale-110 transition-transform duration-300">
            <Play size={36} className="ml-1" />
          </div>

          <div className="relative z-10">
            <h3 className={`text-2xl md:text-3xl font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>[ PLACEHOLDER: Capstone Demo Video ]</h3>
            <p className={`text-sm md:text-base max-w-lg mx-auto leading-relaxed font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Embed your official BulSU thesis presentation MP4 or YouTube iframe right here inside this container to showcase live browser audio capture and hands-free voice commands to evaluators!
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================================
          9. ABOUT THE CAPSTONE TEAM & ACKNOWLEDGMENTS
          ====================================================================== */}
      <section id="team" className={`py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto border-t ${isDark ? 'border-[#3A3F4A]/60' : 'border-gray-200'
        }`}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            About the Capstone Team
          </h2>
          <p className={`text-base md:text-lg leading-relaxed font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Department of Information Technology & Computer Science • Bulacan State University (BulSU) • Thesis Submission 2026
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <div className={`backdrop-blur-md border-[2px] rounded-[22px] p-6 text-center flex flex-col items-center justify-between transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-[#0A44FF]' : 'bg-white/85 border-[#E2E6F0] hover:border-[#0A44FF]'
            }`}>
            <div className={`w-20 h-20 rounded-full border flex flex-col items-center justify-center text-[#0A44FF] mb-4 shadow-inner ${isDark ? 'bg-[#1C1C1E] border-[#3A3F4A]' : 'bg-gray-100 border-gray-300'
              }`}>
              <Users size={26} className="mb-1" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">[ PHOTO ]</span>
            </div>
            <div>
              <h3 className={`text-lg font-extrabold m-0 ${isDark ? 'text-white' : 'text-gray-900'}`}>Shane</h3>
              <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold border my-2 ${isDark ? 'bg-[#0A44FF]/20 text-[#6AA2FF] border-[#0A44FF]/40' : 'bg-[#0A44FF]/12 text-[#0A44FF] border-[#0A44FF]/30'
                }`}>
                UI/UX & Accessibility Designer
              </span>
              <p className={`text-xs leading-relaxed m-0 mt-1 font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Designed the dual-mode sensory interfaces, #FFFF00 focus rulers, and WCAG 2.1 AAA high-contrast brand tokens.
              </p>
            </div>
          </div>

          <div className={`backdrop-blur-md border-[2px] rounded-[22px] p-6 text-center flex flex-col items-center justify-between transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-[#FF7A2F]' : 'bg-white/85 border-[#E2E6F0] hover:border-[#FF7A2F]'
            }`}>
            <div className={`w-20 h-20 rounded-full border flex flex-col items-center justify-center text-[#FF7A2F] mb-4 shadow-inner ${isDark ? 'bg-[#1C1C1E] border-[#3A3F4A]' : 'bg-gray-100 border-gray-300'
              }`}>
              <Users size={26} className="mb-1" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">[ PHOTO ]</span>
            </div>
            <div>
              <h3 className={`text-lg font-extrabold m-0 ${isDark ? 'text-white' : 'text-gray-900'}`}>Christian</h3>
              <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold border my-2 ${isDark ? 'bg-[#FF7A2F]/20 text-[#FFC09B] border-[#FF7A2F]/40' : 'bg-[#FF7A2F]/12 text-[#FF7A2F] border-[#FF7A2F]/30'
                }`}>
                WebSocket & Backend Architect
              </span>
              <p className={`text-xs leading-relaxed m-0 mt-1 font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Implemented the high-concurrency Node.js server pipeline on Render routing binary audio streams to Deepgram and DeepL.
              </p>
            </div>
          </div>

          <div className={`backdrop-blur-md border-[2px] rounded-[22px] p-6 text-center flex flex-col items-center justify-between transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-[#0A44FF]' : 'bg-white/85 border-[#E2E6F0] hover:border-[#0A44FF]'
            }`}>
            <div className={`w-20 h-20 rounded-full border flex flex-col items-center justify-center text-[#0A44FF] mb-4 shadow-inner ${isDark ? 'bg-[#1C1C1E] border-[#3A3F4A]' : 'bg-gray-100 border-gray-300'
              }`}>
              <Users size={26} className="mb-1" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">[ PHOTO ]</span>
            </div>
            <div>
              <h3 className={`text-lg font-extrabold m-0 ${isDark ? 'text-white' : 'text-gray-900'}`}>Leo</h3>
              <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold border my-2 ${isDark ? 'bg-[#0A44FF]/20 text-[#6AA2FF] border-[#0A44FF]/40' : 'bg-[#0A44FF]/12 text-[#0A44FF] border-[#0A44FF]/30'
                }`}>
                Chrome MV3 & DOM Specialist
              </span>
              <p className={`text-xs leading-relaxed m-0 mt-1 font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Developed the semantic DOM reader (`content.ts`), keyboard focus interception, and zero-latency tab communication.
              </p>
            </div>
          </div>

          <div className={`backdrop-blur-md border-[2px] rounded-[22px] p-6 text-center flex flex-col items-center justify-between transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-[#FF7A2F]' : 'bg-white/85 border-[#E2E6F0] hover:border-[#FF7A2F]'
            }`}>
            <div className={`w-20 h-20 rounded-full border flex flex-col items-center justify-center text-[#FF7A2F] mb-4 shadow-inner ${isDark ? 'bg-[#1C1C1E] border-[#3A3F4A]' : 'bg-gray-100 border-gray-300'
              }`}>
              <Users size={26} className="mb-1" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">[ PHOTO ]</span>
            </div>
            <div>
              <h3 className={`text-lg font-extrabold m-0 ${isDark ? 'text-white' : 'text-gray-900'}`}>Russell</h3>
              <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold border my-2 ${isDark ? 'bg-[#FF7A2F]/20 text-[#FFC09B] border-[#FF7A2F]/40' : 'bg-[#FF7A2F]/12 text-[#FF7A2F] border-[#FF7A2F]/30'
                }`}>
                QA & Usability Researcher
              </span>
              <p className={`text-xs leading-relaxed m-0 mt-1 font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Conducted sensory usability testing, performance latency benchmarks, and capstone academic documentation methodology.
              </p>
            </div>
          </div>

          <div className={`backdrop-blur-md border-[2px] rounded-[22px] p-6 text-center flex flex-col items-center justify-between transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-[#24262B]/85 border-[#3A3F4A] hover:border-[#0A44FF]' : 'bg-white/85 border-[#E2E6F0] hover:border-[#0A44FF]'
            }`}>
            <div className={`w-20 h-20 rounded-full border flex flex-col items-center justify-center text-[#0A44FF] mb-4 shadow-inner ${isDark ? 'bg-[#1C1C1E] border-[#3A3F4A]' : 'bg-gray-100 border-gray-300'
              }`}>
              <Users size={26} className="mb-1" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">[ PHOTO ]</span>
            </div>
            <div>
              <h3 className={`text-lg font-extrabold m-0 ${isDark ? 'text-white' : 'text-gray-900'}`}>Kd / Kian</h3>
              <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold border my-2 ${isDark ? 'bg-[#0A44FF]/20 text-[#6AA2FF] border-[#0A44FF]/40' : 'bg-[#0A44FF]/12 text-[#0A44FF] border-[#0A44FF]/30'
                }`}>
                Full-Stack Systems Engineer
              </span>
              <p className={`text-xs leading-relaxed m-0 mt-1 font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Co-architected the dual-mode sensory pipelines, real-time auditory processing, and capstone presentation interfaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          FOOTER SLOT: Drop your saved Footer component code right below this line
          ====================================================================== */}
      <footer className={`border-t pt-16 pb-12 px-4 md:px-8 ${isDark ? 'bg-[#1C1C1E] border-[#3A3F4A]' : 'bg-white border-gray-200'
        }`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/sensa-logo.png" alt="Sensa Logo" className="w-8 h-8 object-contain" />
              <span className={`text-xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>Sensa Capstone</span>
            </div>
            <p className={`text-sm leading-relaxed m-0 max-w-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              An advanced dual-mode accessibility extension offering live AI subtitles, translation, text-to-speech reading enhancements, and sensory customization across Google Chrome.
            </p>
          </div>

          <div>
            <h4 className={`font-extrabold mb-4 text-xs uppercase tracking-wider ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Links & Resources</h4>
            <ul className="text-sm space-y-2.5 list-none p-0 m-0 font-medium">
              <li><a href="#hero" className={`flex items-center gap-2 no-underline transition-colors ${isDark ? 'text-gray-400 hover:text-[#0A44FF]' : 'text-gray-600 hover:text-[#0A44FF]'}`}><ArrowRight size={14} className="text-[#0A44FF]" /> Official Capstone Overview</a></li>
              <li><a href="#problem-solution" className={`flex items-center gap-2 no-underline transition-colors ${isDark ? 'text-gray-400 hover:text-[#FF7A2F]' : 'text-gray-600 hover:text-[#FF7A2F]'}`}><ArrowRight size={14} className="text-[#FF7A2F]" /> Problem & Sensa Solution</a></li>
              <li><a href="#features" className={`flex items-center gap-2 no-underline transition-colors ${isDark ? 'text-gray-400 hover:text-[#0A44FF]' : 'text-gray-600 hover:text-[#0A44FF]'}`}><ArrowRight size={14} className="text-[#0A44FF]" /> Dual-Mode Architecture</a></li>
              <li><a href="#playground" className={`flex items-center gap-2 no-underline transition-colors ${isDark ? 'text-gray-400 hover:text-[#FF7A2F]' : 'text-gray-600 hover:text-[#FF7A2F]'}`}><ArrowRight size={14} className="text-[#FF7A2F]" /> Interactive Live Sandbox</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-extrabold mb-4 text-xs uppercase tracking-wider ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Documentation</h4>
            <ul className="text-sm space-y-2.5 list-none p-0 m-0 font-medium">
              <li><a href="#architecture" className={`flex items-center gap-2 no-underline transition-colors ${isDark ? 'text-gray-400 hover:text-[#0A44FF]' : 'text-gray-600 hover:text-[#0A44FF]'}`}><Code size={14} className="text-[#0A44FF]" /> Chrome MV3 Tech Stack</a></li>
              <li><a href="#metrics" className={`flex items-center gap-2 no-underline transition-colors ${isDark ? 'text-gray-400 hover:text-[#FF7A2F]' : 'text-gray-600 hover:text-[#FF7A2F]'}`}><Award size={14} className="text-[#FF7A2F]" /> Benchmarks & Validation</a></li>
              <li><a href="#guide" className={`flex items-center gap-2 no-underline transition-colors ${isDark ? 'text-gray-400 hover:text-[#0A44FF]' : 'text-gray-600 hover:text-[#0A44FF]'}`}><BookOpen size={14} className="text-[#0A44FF]" /> Installation Walkthrough</a></li>
              <li><a href="#team" className={`flex items-center gap-2 no-underline transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}><Users size={14} className="text-gray-400" /> BulSU Capstone Team</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-extrabold mb-4 text-xs uppercase tracking-wider ${isDark ? 'text-white' : 'text-gray-900'}`}>Privacy & Security Policy</h4>
            <div className={`text-xs leading-relaxed p-4 rounded-xl border font-medium ${isDark ? 'bg-[#24262B] border-[#3A3F4A] text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-700'
              }`}>
              🔒 <strong className={isDark ? 'text-white' : 'text-gray-900'}>Stateless Cloud Processing Guarantee:</strong> Voice navigation commands (`SpeechRecognition`) operate locally inside the browser. For live multilingual audio transcription and translation, audio streams are routed through an encrypted real-time WebSocket pipeline to our Node.js server (`Render`), which interfaces transiently with <strong className={isDark ? 'text-white' : 'text-gray-900'}>Deepgram</strong> (STT) and <strong className={isDark ? 'text-white' : 'text-gray-900'}>DeepL</strong> (Translation). All processing is strictly stateless (`AES-256 / TLS 1.3`), in-memory only, and zero audio data or transcriptions are ever logged, stored, or retained on external cloud servers.
            </div>
          </div>
        </div>

        <div className={`max-w-7xl mx-auto pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold ${isDark ? 'border-[#3A3F4A] text-gray-400' : 'border-gray-200 text-gray-600'
          }`}>
          <p className="m-0">© 2026 Sensa Capstone Team • Bulacan State University (BulSU) • All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-[#0A44FF] font-bold">Chrome MV3 Ready</span>
            <span className="text-[#FF7A2F] font-bold">WCAG 2.1 AAA Compliant</span>
          </div>
        </div>
      </footer>
      {/* ======================================================================
          END FOOTER SLOT
          ====================================================================== */}

      {/* ======================================================================
          FLOATING EXTENSION DOCKS (`VisualDock` & `AuditoryDock` exact replicas)
          ====================================================================== */}
      {activeMode === 'visual' && (
        <div className="fixed bottom-4 left-4 md:left-8 z-50 animate-pop transition-all duration-300">
          <div className={`border-2 rounded-[22px] p-2.5 shadow-[0_12px_36px_rgba(10,68,255,0.45)] backdrop-blur-md transition-all duration-300 flex flex-col gap-3 items-center ${isDark ? 'bg-[#24262B]/90 border-[#0A44FF]' : 'bg-white/90 border-[#0A44FF]'
            }`}>
            <div className={`text-center pb-1 border-b w-full ${isDark ? 'border-[#3A3F4A]' : 'border-gray-200'}`}>
              <span className="text-[10px] font-black text-[#0A44FF] tracking-wider uppercase">Visual</span>
            </div>

            <button
              onClick={() => handleVoiceSimulator('Activate Visual Mode')}
              className="w-11 h-11 rounded-2xl bg-[#0A44FF] hover:bg-[#0035D9] text-white flex items-center justify-center shadow-lg shadow-[#0A44FF]/45 hover:scale-[1.02] active:scale-95 transition-all duration-200 focus:ring-2 focus:ring-[#0A44FF] focus:outline-none cursor-pointer"
              title="Voice Navigation Active"
            >
              <Mic size={22} />
            </button>

            <button
              onClick={() => handleVoiceSimulator('Read Page Content')}
              className={`w-11 h-11 rounded-2xl flex items-center justify-center hover:scale-[1.02] active:scale-95 transition-all duration-200 focus:ring-2 focus:ring-[#0A44FF] focus:outline-none cursor-pointer ${ttsPlaying
                ? 'bg-yellow-400 text-black shadow-md shadow-yellow-400/45 font-extrabold'
                : isDark ? 'bg-[#1C1C1E] hover:bg-[#3A3F4A] text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              title="TTS Article Reader"
            >
              <Volume2 size={22} />
            </button>

            <button
              onClick={() => setIsFocusRulerActive(!isFocusRulerActive)}
              className={`w-11 h-11 rounded-2xl flex items-center justify-center hover:scale-[1.02] active:scale-95 transition-all duration-200 focus:ring-2 focus:ring-[#0A44FF] focus:outline-none cursor-pointer ${isFocusRulerActive
                ? 'bg-yellow-400 text-black shadow-md shadow-yellow-400/45 font-extrabold'
                : isDark ? 'bg-[#1C1C1E] hover:bg-[#3A3F4A] text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              title="Toggle Reading Focus Ruler (#FFFF00)"
            >
              <Maximize2 size={22} />
            </button>
          </div>
        </div>
      )}

      {activeMode === 'auditory' && (
        <div className="fixed bottom-4 right-4 md:right-8 z-50 max-w-[calc(100vw-2rem)] sm:max-w-sm w-full animate-pop transition-all duration-300">
          <div className={`border-2 rounded-[22px] p-4 shadow-[0_12px_36px_rgba(255,122,47,0.45)] backdrop-blur-md transition-all duration-300 ${isDark ? 'bg-[#24262B]/90 border-[#FF7A2F]' : 'bg-white/90 border-[#FF7A2F]'
            }`}>
            <div className="flex items-center justify-between border-b border-[#FF7A2F]/30 pb-2.5 mb-3">
              <div className="flex items-center gap-2">
                <Ear size={18} className="text-[#FF7A2F] shrink-0" />
                <span className={`text-xs font-bold uppercase tracking-wider truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>Auditory Mode • Live Captions</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="px-2 py-0.5 rounded bg-[#FF7A2F] text-black text-[10px] font-black animate-pulse">LIVE</span>
                <button
                  onClick={() => setActiveMode('standard')}
                  className={`text-xs px-1 hover:scale-[1.02] active:scale-95 transition-all focus:ring-2 focus:ring-[#FF7A2F] focus:outline-none cursor-pointer rounded ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                  title="Close Caption Box"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="bg-black/90 p-3.5 rounded-xl border border-[#FF7A2F]/40 font-mono text-sm text-[#6AA2FF] leading-relaxed min-h-[68px] flex items-center mb-2.5 font-semibold">
              {simulatedCaptionText}
            </div>

            <div className="flex items-center justify-between text-[11px] font-semibold text-gray-400">
              <span className="truncate mr-2">Web Audio Analyser: 48kHz Active</span>
              <span className="text-[#FFC09B] font-bold shrink-0">EN | ES | FR | TL</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
