import { Mic, Maximize2, Volume2, FileText, Ear, Zap, CheckCircle2 } from 'lucide-react';

interface FeaturesSectionProps {
  isDark: boolean;
}

export default function FeaturesSection({ isDark }: FeaturesSectionProps) {
  // Optional: Place your GIF / Video clip URLs here (e.g. '/assets/voice-demo.gif')
  const featureClips = {
    voiceNav: '',       // Hands-Free Voice Navigation demo clip/GIF
    magnifier: '',      // Screen Magnifier & Reading Ruler demo clip/GIF
    altText: '',        // Image Alt-Text AI Reader demo clip/GIF
    typography: '',     // Customizable Typography demo clip/GIF
    captions: '',       // Live Multilingual AI Captions demo clip/GIF
    visualizer: '',     // Web Audio Visualizer demo clip/GIF
    sensoryAlerts: '',  // Sensory Noise Warnings demo clip/GIF
  };

  const visualFeatures = [
    {
      id: 'voiceNav',
      title: 'Hands-Free Voice Navigation',
      description: 'Control web pages completely hands-free. Speak to your browser to scroll pages, open links, and fill out forms.',
      icon: Mic,
      tag: 'Voice Engine',
      mediaKey: 'voiceNav' as keyof typeof featureClips,
    },
    {
      id: 'magnifier',
      title: 'Screen Magnifier & Focus Ruler',
      description: 'Focus on one line at a time. A high-contrast yellow reading ruler guides your eyes so you never lose your place.',
      icon: Maximize2,
      tag: 'Visual Assistance',
      mediaKey: 'magnifier' as keyof typeof featureClips,
    },
    {
      id: 'altText',
      title: 'Image Alt-Text AI Reader',
      description: 'Automatically reads unlabelled web images out loud using intelligent computer vision descriptions.',
      icon: Volume2,
      tag: 'Computer Vision',
      mediaKey: 'altText' as keyof typeof featureClips,
    },
    {
      id: 'typography',
      title: 'Customizable Typography & Autoscroll',
      description: 'Instantly transform websites into high-contrast themes, switch to dyslexia-friendly fonts, and set auto-scrolling.',
      icon: FileText,
      tag: 'DOM Reader',
      mediaKey: 'typography' as keyof typeof featureClips,
    },
  ];

  const auditoryFeatures = [
    {
      id: 'captions',
      title: 'Live Multilingual AI Subtitles',
      description: 'Generates real-time captions for video lectures, webinars, and audio streams with instant live translation.',
      icon: Ear,
      tag: 'Deepgram + DeepL',
      mediaKey: 'captions' as keyof typeof featureClips,
    },
    {
      id: 'visualizer',
      title: 'Web Audio Visualizer',
      description: 'See sound as it happens. Visual audio meters turn hidden website audio and sound effects into moving color bars.',
      icon: Zap,
      tag: 'Web Audio API',
      mediaKey: 'visualizer' as keyof typeof featureClips,
    },
    {
      id: 'sensoryAlerts',
      title: 'Sensory Noise Edge Warnings',
      description: 'Flashes subtle color alerts on the edges of your screen whenever sudden audio notifications or loud sounds occur.',
      icon: CheckCircle2,
      tag: 'Audio Proxy',
      mediaKey: 'sensoryAlerts' as keyof typeof featureClips,
    },
  ];

  return (
    <section
      id="features"
      className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center scroll-mt-[69px] md:scroll-mt-[71px] py-20 md:py-28 border-t ${
        isDark ? 'border-slate-800/80' : 'border-slate-200/60'
      }`}
    >
      {/* Cybernetic Grid Layer */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)] -z-10" />

      {/* Visual Mode Ambient Background Glow */}
      <div
        className={`absolute top-[25%] left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[420px] rounded-full blur-[160px] pointer-events-none -z-10 bg-[#0A44FF] gpu-accelerate ${
          isDark ? 'opacity-20' : 'opacity-10'
        }`}
      />

      {/* Auditory Mode Ambient Background Glow */}
      <div
        className={`absolute top-[75%] right-1/4 translate-x-1/2 -translate-y-1/2 w-[700px] h-[420px] rounded-full blur-[160px] pointer-events-none -z-10 bg-[#FF7A2F] gpu-accelerate ${
          isDark ? 'opacity-20' : 'opacity-10'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        {/* Section Main Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Core Features Showcase
          </h2>
          <p
            className={`text-base md:text-xl leading-relaxed font-normal ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Explore all 7 powerful accessibility modules designed to tear down visual and auditory barriers across any website.
          </p>
        </div>

        {/* ==========================================================================
           VISUAL MODE SUB-SECTION (#0A44FF Royal Blue Tokens)
           ========================================================================== */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-200/50 dark:border-slate-800/80">
            <h3 className={`text-2xl md:text-3xl font-black m-0 tracking-tight flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <span className="text-2xl md:text-3xl">👁️</span>
              Visual Mode Features
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {visualFeatures.map((feature) => {
              const Icon = feature.icon;
              const clipSrc = featureClips[feature.mediaKey];

              return (
                <article
                  key={feature.id}
                  className={`group border rounded-[2rem] p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] relative overflow-hidden ${
                    isDark
                      ? 'bg-[#161618] border-slate-800 hover:border-[#0A44FF]/70 hover:shadow-[0_0_35px_rgba(10,68,255,0.2)]'
                      : 'bg-white border-slate-200/80 shadow-sm hover:border-[#0A44FF]/50 hover:shadow-[0_12px_35px_rgba(10,68,255,0.12)]'
                  }`}
                >
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-[#0A44FF] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Uniform Media Frame Box */}
                  <div
                    className={`w-full h-52 mb-6 rounded-2xl border flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-300 ${
                      isDark
                        ? 'bg-black/50 border-slate-800 group-hover:border-slate-700'
                        : 'bg-slate-50 border-slate-200 group-hover:border-slate-300'
                    }`}
                  >
                    {/* Clean Icon without background box */}
                    {clipSrc ? (
                      <img src={clipSrc} alt={feature.title} className="w-full h-full object-cover rounded-2xl" />
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-center p-4">
                        <Icon size={28} className="text-[#0A44FF] dark:text-[#6AA2FF] transition-transform duration-300 group-hover:scale-110" />
                        <span className="text-xs md:text-sm font-mono font-bold text-slate-400 dark:text-slate-300">
                          [ {feature.title} Demo Clip / GIF ]
                        </span>
                        <span className="text-[11px] text-slate-500 font-mono">
                          Drop your screen recording GIF or MP4 here
                        </span>
                      </div>
                    )}

                    {/* Tech Tag Badge */}
                    <div
                      className={`absolute bottom-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold border backdrop-blur-md ${
                        isDark
                          ? 'bg-[#1C1C1E]/90 border-slate-700 text-slate-300'
                          : 'bg-white/90 border-slate-200 text-slate-700 shadow-sm'
                      }`}
                    >
                      {feature.tag}
                    </div>
                  </div>

                  {/* Feature Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Icon size={24} className="shrink-0 text-[#0A44FF] dark:text-[#6AA2FF]" />
                      <h3 className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {feature.title}
                      </h3>
                    </div>
                    <p className={`text-sm leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* ==========================================================================
           AUDITORY MODE SUB-SECTION (#FF7A2F Sunset Orange Tokens)
           ========================================================================== */}
        <div>
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-200/50 dark:border-slate-800/80">
            <h3 className={`text-2xl md:text-3xl font-black m-0 tracking-tight flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <span className="text-2xl md:text-3xl">🦻</span>
              Auditory Mode Features
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {auditoryFeatures.map((feature) => {
              const Icon = feature.icon;
              const clipSrc = featureClips[feature.mediaKey];

              return (
                <article
                  key={feature.id}
                  className={`group border rounded-[2rem] p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] relative overflow-hidden ${
                    isDark
                      ? 'bg-[#161618] border-slate-800 hover:border-[#FF7A2F]/70 hover:shadow-[0_0_35px_rgba(255,122,47,0.2)]'
                      : 'bg-white border-slate-200/80 shadow-sm hover:border-[#FF7A2F]/50 hover:shadow-[0_12px_35px_rgba(255,122,47,0.12)]'
                  }`}
                >
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-[#FF7A2F] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Uniform Media Frame Box */}
                  <div
                    className={`w-full h-52 mb-6 rounded-2xl border flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-300 ${
                      isDark
                        ? 'bg-black/50 border-slate-800 group-hover:border-slate-700'
                        : 'bg-slate-50 border-slate-200 group-hover:border-slate-300'
                    }`}
                  >
                    {/* Clean Icon without background box */}
                    {clipSrc ? (
                      <img src={clipSrc} alt={feature.title} className="w-full h-full object-cover rounded-2xl" />
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-center p-4">
                        <Icon size={28} className="text-[#FF7A2F] dark:text-[#FFC09B] transition-transform duration-300 group-hover:scale-110" />
                        <span className="text-xs md:text-sm font-mono font-bold text-slate-400 dark:text-slate-300">
                          [ {feature.title} Demo Clip / GIF ]
                        </span>
                        <span className="text-[11px] text-slate-500 font-mono">
                          Drop your screen recording GIF or MP4 here
                        </span>
                      </div>
                    )}

                    {/* Tech Tag Badge */}
                    <div
                      className={`absolute bottom-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold border backdrop-blur-md ${
                        isDark
                          ? 'bg-[#1C1C1E]/90 border-slate-700 text-slate-300'
                          : 'bg-white/90 border-slate-200 text-slate-700 shadow-sm'
                      }`}
                    >
                      {feature.tag}
                    </div>
                  </div>

                  {/* Feature Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Icon size={24} className="shrink-0 text-[#FF7A2F] dark:text-[#FFC09B]" />
                      <h3 className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {feature.title}
                      </h3>
                    </div>
                    <p className={`text-sm leading-relaxed m-0 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
