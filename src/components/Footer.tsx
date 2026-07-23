import { ShieldCheck, HeartHandshake, ArrowUpRight, Code2, Cpu } from 'lucide-react';
import sensaLogo from '../assets/Sensa-Logo.png';

const GithubIcon = ({ size = 16, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface FooterProps {
  isDark: boolean;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

export default function Footer({ isDark, handleNavClick }: FooterProps) {
  return (
    <footer
      className={`relative overflow-hidden w-full scroll-mt-[69px] md:scroll-mt-[71px] border-t py-16 md:py-20 ${
        isDark ? 'bg-[#0E0E10] border-slate-800/80' : 'bg-[#F4F5F8] border-slate-200/80'
      }`}
    >
      {/* Subtle Ambient Glow */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-48 blur-[140px] pointer-events-none -z-10 bg-gradient-to-r from-[#0A44FF]/20 via-[#8A56FF]/20 to-[#FF7A2F]/20 ${
          isDark ? 'opacity-30' : 'opacity-15'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Footer 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 items-start">
          {/* Column 1: Brand & Academic Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={sensaLogo} alt="Sensa Logo" className="w-9 h-9 object-contain" />
              <span className="text-xl font-black uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#0A44FF] via-[#8A56FF] to-[#FF7A2F]">
                SENSA
              </span>
            </div>
            <p className={`text-xs md:text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Dual-mode web accessibility Chrome extension empowering low-vision, blind, and hearing-impaired users to navigate the digital world seamlessly.
            </p>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold border ${isDark ? 'bg-[#0A44FF]/20 text-[#6AA2FF] border-[#0A44FF]/30' : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20'}`}>
              <HeartHandshake size={12} />
              <span>BulSU CICT Capstone Project 2026</span>
            </div>
          </div>

          {/* Column 2: Section Navigation */}
          <div>
            <h4 className={`text-xs font-mono font-bold uppercase tracking-widest mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Navigation
            </h4>
            <ul className="space-y-2.5 p-0 m-0 list-none text-xs md:text-sm">
              {[
                { name: 'The Mission', id: 'problem-solution' },
                { name: 'Core Features', id: 'features' },
                { name: 'Video Demonstration', id: 'video' },
                { name: 'Scope & Limitations', id: 'scope' },
                { name: 'Installation Guide', id: 'guide' },
                { name: 'Meet the Team', id: 'team' },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`no-underline transition-colors flex items-center gap-1.5 ${
                      isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tech & Architecture Stack */}
          <div>
            <h4 className={`text-xs font-mono font-bold uppercase tracking-widest mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Technical Architecture
            </h4>
            <ul className="space-y-2.5 p-0 m-0 list-none text-xs md:text-sm font-mono">
              <li className={`flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                <Cpu size={14} className="text-[#0A44FF]" />
                <span>Chrome Manifest V3</span>
              </li>
              <li className={`flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                <Code2 size={14} className="text-[#FF7A2F]" />
                <span>Deepgram Nova-3 Speech AI</span>
              </li>
              <li className={`flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                <Code2 size={14} className="text-purple-400" />
                <span>DeepL Neural Translation</span>
              </li>
              <li className={`flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                <ShieldCheck size={14} className="text-emerald-500" />
                <span>100% Stateless Sandbox</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Institutional Accreditation & Open-Source */}
          <div>
            <h4 className={`text-xs font-mono font-bold uppercase tracking-widest mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Academic Institutional
            </h4>
            <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Bulacan State University (BulSU)<br />
              College of Information and Communications Technology (CICT)<br />
              City of Malolos, Bulacan, Philippines
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold no-underline transition-transform hover:scale-105 shadow-md ${
                isDark
                  ? 'bg-white text-slate-900 hover:bg-slate-100'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              <GithubIcon size={14} />
              <span>GitHub Repository</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom Copyright & Standards Bar */}
        <div
          className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-normal ${
            isDark ? 'border-slate-800/80 text-slate-400' : 'border-slate-200/80 text-slate-600'
          }`}
        >
          <p className="m-0 text-center sm:text-left">
            © 2026 Sensa Capstone Research Team • Bulacan State University (BulSU) • College of Information and Communications Technology.
          </p>

          <div className="flex items-center gap-4 font-mono font-bold text-[11px] shrink-0">
            <span className="text-[#0A44FF]">Manifest V3</span>
            <span className="text-slate-400">•</span>
            <span className="text-emerald-500">WCAG 2.1 AAA</span>
            <span className="text-slate-400">•</span>
            <span className="text-[#FF7A2F]">Open-Source</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
