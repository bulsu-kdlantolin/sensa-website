import { ArrowUpRight, FileText, Activity, GitBranch, BookOpen } from 'lucide-react';
import sensaLogo from '../assets/sensa-logo.png';

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
}

export default function Footer({ isDark }: FooterProps) {
  return (
    <footer
      className={`relative overflow-hidden w-full border-t py-10 md:py-12 ${isDark ? 'bg-[#0E0E10] border-slate-800/80' : 'bg-[#F4F5F8] border-slate-200/80'
        }`}
    >
      {/* Subtle Ambient Glow */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-36 blur-[140px] pointer-events-none -z-10 bg-gradient-to-r from-[#0A44FF]/20 via-[#8A56FF]/20 to-[#FF7A2F]/20 ${isDark ? 'opacity-30' : 'opacity-15'
          }`}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Footer 4-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-10 items-start">
          {/* Column 1: Brand & Academic Mission */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img src={sensaLogo} alt="Sensa Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-black uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#0A44FF] via-[#8A56FF] to-[#FF7A2F]">
                SENSA
              </span>
            </div>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Dual-mode web accessibility Chrome extension empowering low-vision, blind, and hearing-impaired users to navigate the digital world seamlessly.
            </p>
          </div>

          {/* Column 2: Research & Documentation Links */}
          <div className="space-y-3">
            <h3 className={`text-xs font-mono font-bold uppercase tracking-widest mb-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Research & Resources
            </h3>
            <ul className="space-y-2 text-xs p-0 m-0 list-none font-medium">
              <li>
                <a
                  href="https://github.com/bulsu-kdlantolin/sensa-chrome-extension"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 transition-colors hover:text-[#0A44FF] dark:hover:text-[#6AA2FF] ${isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                >
                  <GithubIcon size={14} aria-hidden="true" />
                  <span>GitHub Repository</span>
                  <ArrowUpRight size={12} className="opacity-60" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/bulsu-kdlantolin/sensa-chrome-extension#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 transition-colors hover:text-[#0A44FF] dark:hover:text-[#6AA2FF] ${isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                >
                  <FileText size={14} aria-hidden="true" />
                  <span>Technical Documentation</span>
                  <ArrowUpRight size={12} className="opacity-60" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/bulsu-kdlantolin/sensa-chrome-extension"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 transition-colors hover:text-[#0A44FF] dark:hover:text-[#6AA2FF] ${isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                >
                  <BookOpen size={14} aria-hidden="true" />
                  <span>Research Paper (PDF)</span>
                  <ArrowUpRight size={12} className="opacity-60" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Project Status & Build Details */}
          <div className="space-y-3">
            <h3 className={`text-xs font-mono font-bold uppercase tracking-widest mb-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Project Release Status
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 font-mono">
                <GitBranch size={14} className="text-[#8A56FF]" aria-hidden="true" />
                <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Build:</span>
                <span className="font-bold text-[#0A44FF] dark:text-[#6AA2FF]">v1.0.0 (Beta)</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Activity size={14} className="text-[#FF7A2F]" aria-hidden="true" />
                <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Last Updated:</span>
                <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>July 2026</span>
              </div>
            </div>
          </div>

          {/* Column 4: Technical Standards & Compliance */}
          <div className="space-y-3">
            <h3 className={`text-xs font-mono font-bold uppercase tracking-widest mb-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Standards & Specs
            </h3>
            <ul className="space-y-2 text-xs p-0 m-0 list-none font-mono font-bold">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A44FF]" />
                <span className="text-[#0A44FF] dark:text-[#6AA2FF]">Manifest V3</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-emerald-500">WCAG 2.1 AAA</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A2F]" />
                <span className="text-[#FF7A2F]">Open-Source</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-emerald-500">100% In-Memory Privacy Policy</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div
          className={`pt-6 border-t flex justify-center text-center text-xs font-normal ${isDark ? 'border-slate-800/80 text-slate-400' : 'border-slate-200/80 text-slate-600'
            }`}
        >
          <p className="m-0 text-center max-w-3xl mx-auto leading-relaxed">
            © 2026–2027 Sensa Capstone Research Team • Bulacan State University (BulSU) • College of Information and Communications Technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
