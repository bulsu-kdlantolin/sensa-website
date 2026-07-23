interface HeroSectionProps {
  isDark: boolean;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const ChromeIcon = ({ size = 22, className = '' }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height={size} width={size} className={className}>
    <defs>
      <linearGradient id="chrome-a-hero" x1="3.2173" y1="15" x2="44.7812" y2="15" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#d93025" />
        <stop offset="1" stopColor="#ea4335" />
      </linearGradient>
      <linearGradient id="chrome-b-hero" x1="20.7219" y1="47.6791" x2="41.5039" y2="11.6837" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#fcc934" />
        <stop offset="1" stopColor="#fbbc04" />
      </linearGradient>
      <linearGradient id="chrome-c-hero" x1="26.5981" y1="46.5015" x2="5.8161" y2="10.506" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#1e8e3e" />
        <stop offset="1" stopColor="#34a853" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="23.9947" r="12" fill="#fff" />
    <path d="M3.2154,36A24,24,0,1,0,12,3.2154,24,24,0,0,0,3.2154,36ZM34.3923,18A12,12,0,1,1,18,13.6077,12,12,0,0,1,34.3923,18Z" fill="none" />
    <path d="M24,12H44.7812a23.9939,23.9939,0,0,0-41.5639.0029L13.6079,30l.0093-.0024A11.9852,11.9852,0,0,1,24,12Z" fill="url(#chrome-a-hero)" />
    <circle cx="24" cy="24" r="9.5" fill="#1a73e8" />
    <path d="M34.3913,30.0029,24.0007,48A23.994,23.994,0,0,0,44.78,12.0031H23.9989l-.0025.0093A11.985,11.985,0,0,1,34.3913,30.0029Z" fill="url(#chrome-b-hero)" />
    <path d="M13.6086,30.0031,3.218,12.006A23.994,23.994,0,0,0,24.0025,48L34.3931,30.0029l-.0067-.0068a11.9852,11.9852,0,0,1-20.7778.007Z" fill="url(#chrome-c-hero)" />
  </svg>
);

export default function HeroSection({ isDark, handleNavClick }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-center scroll-mt-[69px] md:scroll-mt-[71px] pt-28 pb-24 md:pt-36 md:pb-32 px-4 md:px-8 overflow-hidden"
    >
      {/* Hero Cybernetic Grid Layer */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)] -z-10" />

      {/* AI Neural Mesh Background */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-60">
        <svg
          className={`absolute w-[120%] h-[120%] max-w-none ${
            isDark ? 'animate-float-orange' : 'animate-float-blue'
          }`}
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke={isDark ? 'rgba(255,122,47,0.15)' : 'rgba(10, 68, 255, 0.2)'} strokeWidth="1.5" fill="none">
            <path d="M100,100 L250,150 L400,100 L550,200 L700,150" />
            <path d="M150,300 L250,150 L350,350 L550,200 L650,400" />
            <path d="M100,500 L150,300 L300,450 L350,350 L500,500 L650,400 L750,550" />
            <path d="M400,100 L350,350 L500,500" />
            <path d="M700,150 L650,400" />
            {/* Cross connections */}
            <path d="M250,150 L300,450" className="animate-pulse" style={{ animationDuration: '3s' }} />
            <path d="M550,200 L500,500" className="animate-pulse" style={{ animationDuration: '4s' }} />
          </g>
          <g fill={isDark ? 'rgba(255,122,47,0.5)' : 'rgba(10, 68, 255, 0.6)'}>
            <circle cx="100" cy="100" r="3" className="animate-ping" style={{ animationDuration: '3s' }} />
            <circle cx="250" cy="150" r="4" />
            <circle cx="400" cy="100" r="3" />
            <circle cx="550" cy="200" r="5" className="animate-pulse" />
            <circle cx="700" cy="150" r="3" />
            <circle cx="150" cy="300" r="4" />
            <circle
              cx="350"
              cy="350"
              r="5"
              className="animate-ping"
              style={{ animationDuration: '4s', animationDelay: '1s' }}
            />
            <circle cx="650" cy="400" r="4" />
            <circle cx="100" cy="500" r="3" />
            <circle cx="300" cy="450" r="4" />
            <circle cx="500" cy="500" r="3" className="animate-pulse" />
            <circle cx="750" cy="550" r="3" />
          </g>
        </svg>
        {/* Ambient Background Glow behind the nodes */}
        <div
          className={`absolute w-[600px] h-[400px] rounded-full blur-[120px] bg-gradient-to-tr from-[#0A44FF] to-[#8A56FF] ${
            isDark ? 'opacity-10' : 'opacity-5'
          }`}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Liquid Water Flow Title Gradient */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 py-2 pb-3 leading-[1.15] max-w-4xl text-transparent animate-pop cursor-default transition-all duration-700 bg-[length:200%_auto] hover:animate-water-flow hover:scale-[1.02] hover:drop-shadow-[0_10px_20px_rgba(10,68,255,0.15)]`}
          style={{
            backgroundImage: `linear-gradient(to right, #0A44FF, #8A56FF, #FF7A2F, #8A56FF, #0A44FF)`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
        >
          Sensa: AI-Powered Dual-Mode Accessibility & Sensory Assistant
        </h1>

        <p
          className={`text-base sm:text-lg md:text-xl max-w-3xl mb-10 leading-relaxed font-normal animate-pop ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          Created by IT students from Bulacan State University to make the internet accessible for people with low vision or hearing impairments. It features hands-free voice controls, live AI subtitles, a high-contrast reading guide, and real-time audio capture.
        </p>

        <div className="relative flex items-center justify-center w-full mb-6 animate-pop group">
          {/* Button Ambient Backglow */}
          <div
            className={`absolute w-[160px] h-[50px] blur-2xl rounded-full bg-gradient-to-r from-[#0A44FF] to-[#FF7A2F] transition-all duration-500 ease-out ${
              isDark ? 'opacity-40 group-hover:opacity-75 group-hover:scale-110' : 'opacity-30 group-hover:opacity-60 group-hover:scale-110'
            }`}
          />

          <a
            href="#guide"
            onClick={(e) => handleNavClick(e, 'guide')}
            className={`relative z-10 inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-bold text-base transition-all duration-300 ease-out active:scale-[0.98] focus:ring-2 focus:ring-offset-2 focus:outline-none no-underline shadow-sm hover:-translate-y-0.5 hover:shadow-xl border ${
              isDark
                ? 'bg-[#1C1C1E] hover:bg-[#2C2C2E] border-slate-700/50 text-white focus:ring-[#FF7A2F] focus:ring-offset-[#09090B] hover:border-slate-600'
                : 'bg-white hover:bg-[#FDFDFD] border-slate-200/80 text-slate-800 focus:ring-[#0A44FF] focus:ring-offset-[#FDFDFD] hover:border-slate-300'
            }`}
          >
            <ChromeIcon size={22} className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105" />
            <span>Add to Chrome</span>
          </a>
        </div>
      </div>
    </section>
  );
}
