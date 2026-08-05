import robertImg from '../assets/robert.webp';
import christianImg from '../assets/christian.webp';
import leoImg from '../assets/leo.webp';
import russellImg from '../assets/russell.webp';
import kianImg from '../assets/kian.jpg';
import { playHoverSound } from '../utils/soundSystem';
import ScrollReveal from './ScrollReveal';
import React from 'react';

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
    <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = ({ isDark }: { isDark: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
    <path fill={isDark ? '#FFFFFF' : '#181717'} d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const GmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66" width="24" height="24" aria-hidden="true">
    <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
    <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
    <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
    <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
    <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
  </svg>
);

interface TeamSectionProps {
  isDark: boolean;
}

export default function TeamSection({ isDark }: TeamSectionProps) {
  const teamMembers = [
    {
      name: 'Robert Shanedion Tantoco',
      role: 'Graphics Designer & Video Editor',
      description: 'Crafted Sensa\'s visual design branding and produced capstone video demonstrations.',
      image: robertImg,
      imageClass: 'brightness-[1.18] contrast-[1.08] saturate-[1.05]',
      email: 'robertshanediontantoco@gmail.com',
      linkedin: 'https://www.linkedin.com/in/robert-shanedion-tantoco/',
      github: 'https://github.com/bulsu-rsmtantoco',
      accentGradient: isDark ? 'from-[#FF7A2F] to-[#FF9D66]' : 'from-[#CC4900] to-[#FF7A2F]',
      roleColor: isDark ? 'text-[#FF9D66]' : 'text-[#FF7A2F]',
      badgeBg: isDark ? 'bg-[#FF9D66]/20' : 'bg-[#FF7A2F]/20',
      hoverBorder: isDark ? 'hover:border-[#FF9D66]/60' : 'hover:border-[#FF7A2F]/60',
    },
    {
      name: 'Christian Adriano',
      role: 'Research & Documentation',
      description: 'Authored the capstone research paper, led technical documentation, and compiled academic literature.',
      image: christianImg,
      imageClass: 'brightness-[1.18] contrast-[1.08] saturate-[1.05]',
      email: 'chrstn.adrian37@gmail.com',
      linkedin: 'https://www.linkedin.com/in/christian-adriano-092476382',
      github: 'https://github.com/bulsu-ctadriano',
      accentGradient: isDark ? 'from-[#8A56FF] to-[#A855F7]' : 'from-[#5514E6] to-[#8A56FF]',
      roleColor: isDark ? 'text-[#A855F7]' : 'text-[#8A56FF]',
      badgeBg: isDark ? 'bg-[#A855F7]/20' : 'bg-[#8A56FF]/20',
      hoverBorder: isDark ? 'hover:border-[#A855F7]/60' : 'hover:border-[#8A56FF]/60',
    },
    {
      name: 'John Russell Sta.Ana',
      role: 'Project Manager',
      description: 'Managed project milestones, synchronized team workflows, and ensured capstone deliverables succeeded on schedule.',
      image: russellImg,
      imageClass: 'brightness-[1.18] contrast-[1.08] saturate-[1.05]',
      email: 'staanajohnrussell75@gmail.com',
      linkedin: 'https://www.linkedin.com/in/john-russell-sta-ana-022366403',
      github: 'https://github.com/bulsu-jrsfstaana',
      accentGradient: isDark ? 'from-[#0A44FF] to-[#3B82F6]' : 'from-[#0026AA] to-[#0A44FF]',
      roleColor: isDark ? 'text-[#3B82F6]' : 'text-[#0A44FF]',
      badgeBg: isDark ? 'bg-[#3B82F6]/20' : 'bg-[#0A44FF]/20',
      hoverBorder: isDark ? 'hover:border-[#3B82F6]/60' : 'hover:border-[#0A44FF]/60',
    },
    {
      name: 'Kian Davey Antolin',
      role: 'Developer',
      description: 'Developed the browser extension codebase, cloud backend API services, and web platform.',
      image: kianImg,
      imageClass: '',
      email: 'kiandaveyantolin@gmail.com',
      linkedin: 'https://www.linkedin.com/in/kian-davey-antolin-13b60a372/',
      github: 'https://github.com/bulsu-kdlantolin',
      accentGradient: isDark ? 'from-[#06B6D4] to-[#38BDF8]' : 'from-[#037A99] to-[#06B6D4]',
      roleColor: isDark ? 'text-[#38BDF8]' : 'text-[#06B6D4]',
      badgeBg: isDark ? 'bg-[#38BDF8]/20' : 'bg-[#06B6D4]/20',
      hoverBorder: isDark ? 'hover:border-[#38BDF8]/60' : 'hover:border-[#06B6D4]/60',
    },
    {
      name: 'Leo Lorenzo\nDela Cruz',
      role: 'QA & Usability Tester',
      description: 'Evaluated accessibility compliance, conducted usability testing, and managed system QA bug tracking.',
      image: leoImg,
      imageClass: 'brightness-[1.20] contrast-[1.10] saturate-[1.08]',
      email: 'leolorenzodelacruz26@gmail.com',
      linkedin: 'https://www.linkedin.com/in/leo-lorenzo-dela-cruz-872665311?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      github: 'https://github.com/bulsu-lltdelacruz',
      accentGradient: isDark ? 'from-[#4F46E5] to-[#818CF8]' : 'from-[#312E81] to-[#4F46E5]',
      roleColor: isDark ? 'text-[#818CF8]' : 'text-[#4F46E5]',
      badgeBg: isDark ? 'bg-[#818CF8]/20' : 'bg-[#4F46E5]/20',
      hoverBorder: isDark ? 'hover:border-[#818CF8]/60' : 'hover:border-[#4F46E5]/60',
    },
  ];

  return (
    <section
      id="team"
      className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center py-20 md:py-28 border-t ${isDark ? 'border-slate-800/80' : 'border-slate-200/60'
        }`}
    >
      {/* Cybernetic Grid Layer */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)] -z-10" />

      {/* Stage Spotlight Glow */}
      <div
        className={`hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] blur-[120px] pointer-events-none -z-10 bg-gradient-to-b from-[#0A44FF]/30 via-[#8A56FF]/15 to-transparent gpu-accelerate ${isDark ? 'opacity-40' : 'opacity-10'
          }`}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              className={`text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'
                }`}
            >
              Meet the Researchers
            </h2>
            <p
              className={`text-base md:text-xl leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
            >
              Bulacan State University (BulSU) • CICT Capstone Research Team S.Y. 2026–2027.
            </p>
          </div>
        </ScrollReveal>

        {/* 5-Column Grid Layout for smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, idx) => (
            <React.Fragment key={idx}>
              <ScrollReveal delay={idx * 100} className="w-full h-full">
                <article
                  onMouseEnter={playHoverSound}
                  className={`group relative overflow-hidden rounded-2xl flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-2xl w-full h-full border ${
                  isDark
                    ? 'bg-[#121214]/80 backdrop-blur-md border-white/10 ring-1 ring-white/5 ring-inset'
                    : 'bg-white/80 backdrop-blur-md border-slate-300 ring-1 ring-black/5 ring-inset'
                }`}
              >
                {/* ID Badge Header Bar */}
                <div className={`w-full flex justify-between items-center px-4 py-2 text-[10px] font-mono font-bold tracking-[0.2em] border-b ${isDark ? 'bg-black/40 border-white/10 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-500'}`}>
                  <span>ID:// {10042 + idx}</span>
                  <div className="relative w-16 h-5">
                    <span className={`absolute inset-0 flex items-center justify-center rounded-full bg-slate-500/20 ${isDark ? 'text-slate-400' : 'text-slate-500'} group-hover:opacity-0 transition-opacity duration-300 delay-[2s]`}>
                      STANDBY
                    </span>
                    <span className={`absolute inset-0 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[2s] ${member.badgeBg} ${member.roleColor}`}>
                      ACTIVE
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-1 relative p-5">
                  {/* Glowing Overlay on Hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-b ${member.accentGradient} pointer-events-none`} />

                  {/* Square Profile Photo */}
                  <div className={`relative w-full aspect-square rounded-xl p-[2px] bg-gradient-to-tr ${member.accentGradient} mb-5 overflow-hidden`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className={`w-full h-full object-cover object-top rounded-[10px] group-hover:scale-110 transition-transform duration-700 ${member.imageClass}`}
                    />
                    {/* Enhanced Laser Scanline Effect */}
                    <div className="absolute inset-0 overflow-hidden rounded-[10px] pointer-events-none z-10">
                      <div className="absolute top-0 left-0 w-full h-[150%] bg-gradient-to-b from-transparent via-white/10 to-white/40 border-b-[3px] border-white/80 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] -translate-y-[100%] group-hover:translate-y-[80%] transition-transform duration-[2.5s] ease-in-out" />
                    </div>

                    {/* Biometrics Verified Overlay */}
                    <div className="absolute inset-0 bg-black/60 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[2s] pointer-events-none flex items-center justify-center backdrop-blur-[2px] z-20">
                      <div className="border border-green-500/50 bg-green-500/20 px-3 py-1.5 rounded text-green-400 font-mono text-xs font-bold tracking-[0.3em] flex items-center gap-2 scale-90 group-hover:scale-100 transition-transform duration-300 delay-[2s]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        VERIFIED
                      </div>
                    </div>
                  </div>

                  <h3 className={`text-base md:text-lg font-black m-0 tracking-tight leading-snug uppercase whitespace-pre-line ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {member.name}
                  </h3>

                  {/* Terminal Stacking Role */}
                  <div className="flex flex-col mt-3 mb-2 p-3 rounded-lg border border-dashed border-current/20 bg-black/5 dark:bg-white/5" style={{ color: isDark ? '#fff' : '#000' }}>
                    <span className={`text-[9px] md:text-[10px] font-mono tracking-[0.2em] uppercase opacity-60 mb-1 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>ROLE:</span>
                    <div className="flex items-start gap-2">
                      <p className={`text-xs md:text-sm font-mono font-bold uppercase leading-snug ${member.roleColor}`}>
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <p className={`text-[11px] md:text-xs leading-relaxed m-0 mt-2 font-normal flex-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {member.description}
                  </p>
                </div>

                {/* Social Contacts Bar */}
                <div
                  className={`w-full px-5 py-4 border-t flex items-center justify-between gap-2 ${
                    isDark ? 'border-white/10 bg-black/20' : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <span className={`text-[10px] font-mono tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    CONTACT_LOG
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                      className="transition-transform hover:scale-125 focus:outline-none"
                    >
                      <LinkedInIcon />
                    </a>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(member.email)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Send Gmail to ${member.name}`}
                      className="transition-transform hover:scale-125 focus:outline-none"
                    >
                      <GmailIcon />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} GitHub`}
                      className="transition-transform hover:scale-125 focus:outline-none"
                    >
                      <GitHubIcon isDark={isDark} />
                    </a>
                  </div>
                </div>
              </article>
              </ScrollReveal>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
