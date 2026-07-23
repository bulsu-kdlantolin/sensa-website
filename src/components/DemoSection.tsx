import { Film } from 'lucide-react';

interface DemoSectionProps {
  isDark: boolean;
}

export default function DemoSection({ isDark }: DemoSectionProps) {
  // Replace with your YouTube URL (e.g. 'https://www.youtube-nocookie.com/embed/YOUR_VIDEO_ID')
  // OR a local MP4 file path (e.g. '/assets/sensa-demo-video.mp4')
  const demoVideoUrl = 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=0&mute=0';

  const isLocalVideo = demoVideoUrl.endsWith('.mp4') || demoVideoUrl.endsWith('.webm');

  return (
    <section
      id="video"
      className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center scroll-mt-[69px] md:scroll-mt-[71px] py-20 md:py-28 border-y ${isDark ? 'border-slate-800/80' : 'border-slate-200/80'
        }`}
    >
      {/* Cybernetic Grid Layer */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)] -z-10" />

      {/* Cinematic Stage Spotlight */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] blur-[120px] pointer-events-none -z-10 bg-gradient-to-b from-[#8B5CF6]/40 via-[#0A44FF]/20 to-transparent gpu-accelerate ${isDark ? 'opacity-40' : 'opacity-20'
          }`}
      />
      {/* Video Ambient Center Halo Layer */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] rounded-full blur-[160px] pointer-events-none -z-10 bg-[#0A44FF] gpu-accelerate ${isDark ? 'opacity-15' : 'opacity-[0.06]'
          }`}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <h2
            className={`text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'
              }`}
          >
            Watch Sensa in Action
          </h2>
          <p
            className={`text-base md:text-xl leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
          >
            See our accessibility extension in action. Watch how our real-time voice controls, image alt-text AI reader, and live captions work together.
          </p>
        </div>

        {/* Cinematic Video Showcase Player Frame */}
        <div
          className={`relative max-w-5xl mx-auto rounded-3xl border overflow-hidden shadow-2xl transition-all duration-500 group aspect-video bg-slate-950 flex flex-col justify-center items-center ${isDark
            ? 'border-slate-800 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]'
            : 'border-slate-300 ring-1 ring-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.15)]'
            }`}
        >
          {/* Top Mac-style Player Bar */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 z-20 flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 font-bold">
              <Film size={12} className="text-purple-400" />
              Sensa Capstone Demo Walkthrough.mp4
            </span>
            <div className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px] font-mono font-bold border border-purple-500/30">
              1080p HD
            </div>
          </div>

          {/* Video Player Render (Supports both local MP4 and iframe YouTube embed) */}
          <div className="w-full h-full pt-10">
            {isLocalVideo ? (
              <video
                controls
                controlsList="nodownload"
                poster="/assets/video-poster.jpg"
                className="w-full h-full object-cover"
              >
                <source src={demoVideoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <iframe
                title="Sensa Capstone Video Demo"
                src={demoVideoUrl}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
