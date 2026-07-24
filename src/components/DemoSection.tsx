interface DemoSectionProps {
  isDark: boolean;
}

export default function DemoSection({ isDark }: DemoSectionProps) {
  // Official YouTube Embed URL
  const demoVideoUrl = 'https://www.youtube-nocookie.com/embed/grPCOJdMRAA?rel=0&modestbranding=1';

  const isLocalVideo = demoVideoUrl.endsWith('.mp4') || demoVideoUrl.endsWith('.webm');

  return (
    <section
      id="video"
      className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center scroll-mt-[69px] md:scroll-mt-[71px] py-20 md:py-28 border-y ${
        isDark ? 'border-slate-800/80' : 'border-slate-200/80'
      }`}
    >
      {/* Cybernetic Grid Layer */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)] -z-10" />

      {/* Cinematic Stage Spotlight */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] blur-[120px] pointer-events-none -z-10 bg-gradient-to-b from-[#8B5CF6]/40 via-[#0A44FF]/20 to-transparent gpu-accelerate ${
          isDark ? 'opacity-40' : 'opacity-20'
        }`}
      />
      
      {/* Ambient Center Glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[160px] pointer-events-none -z-10 bg-[#0A44FF] gpu-accelerate ${
          isDark ? 'opacity-15' : 'opacity-[0.06]'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2
            className={`text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Watch Sensa in Action
          </h2>
          <p
            className={`text-base md:text-xl leading-relaxed font-normal ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            See how Sensa helps low-vision and hearing-impaired users with voice controls, screen reader, and live subtitles.
          </p>
        </div>

        {/* Pure Clean Video Frame */}
        <div className="max-w-5xl mx-auto">
          <div
            className={`relative rounded-3xl border overflow-hidden shadow-2xl transition-all duration-500 aspect-video bg-black ${
              isDark
                ? 'border-slate-800 ring-1 ring-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)]'
                : 'border-slate-200/80 ring-1 ring-black/5 shadow-[0_25px_60px_rgba(0,0,0,0.15)]'
            }`}
          >
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
                title="Sensa Capstone Video Demonstration"
                src={demoVideoUrl}
                className="w-full h-full border-0 absolute inset-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
