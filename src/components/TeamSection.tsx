import robertImg from '../assets/robert.png';
import christianImg from '../assets/christian.png';
import leoImg from '../assets/leo.png';
import russellImg from '../assets/russell.png';
import kianImg from '../assets/kian.jpg';

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = ({ isDark }: { isDark: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path fill={isDark ? '#FFFFFF' : '#181717'} d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const GmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66" width="24" height="24">
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
      description: 'Created the project\'s visual design, edited demonstration videos, and crafted high-contrast graphics.',
      image: robertImg,
      imageClass: 'brightness-[1.18] contrast-[1.08] saturate-[1.05]',
      email: 'robertshanedion.tantoco@bulsu.edu.ph',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      accentGradient: 'from-[#0A44FF] via-[#8A56FF] to-purple-600',
      badgeColor: isDark ? 'bg-[#0A44FF]/15 text-[#6AA2FF] border-[#0A44FF]/30' : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20',
      hoverBorder: 'hover:border-[#0A44FF]/60',
    },
    {
      name: 'Christian Adriano',
      role: 'Documentation & Research Paper',
      description: 'Authored the primary research study, led technical documentation, and synthesized academic literature.',
      image: christianImg,
      imageClass: 'brightness-[1.18] contrast-[1.08] saturate-[1.05]',
      email: 'christian.adriano@bulsu.edu.ph',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      accentGradient: 'from-[#FF7A2F] via-[#FFA066] to-amber-600',
      badgeColor: isDark ? 'bg-[#FF7A2F]/15 text-[#FFC09B] border-[#FF7A2F]/30' : 'bg-[#FF7A2F]/10 text-[#FF7A2F] border-[#FF7A2F]/20',
      hoverBorder: 'hover:border-[#FF7A2F]/60',
    },
    {
      name: 'Leo Lorenzo Dela Cruz',
      role: 'QA & Usability Tester',
      description: 'Evaluated system accessibility compliance, conducted rigorous QA testing, and managed bug tracking.',
      image: leoImg,
      imageClass: 'brightness-[1.20] contrast-[1.10] saturate-[1.08]',
      email: 'leolorenzo.delacruz@bulsu.edu.ph',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      accentGradient: 'from-[#0A44FF] via-[#38BDF8] to-cyan-500',
      badgeColor: isDark ? 'bg-[#0A44FF]/15 text-[#6AA2FF] border-[#0A44FF]/30' : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20',
      hoverBorder: 'hover:border-[#0A44FF]/60',
    },
    {
      name: 'John Russell Sta.Ana',
      role: 'Project Manager',
      description: 'Directed project milestones, synchronized team workflows, and ensured all capstone deliverables succeeded on schedule.',
      image: russellImg,
      imageClass: 'brightness-[1.18] contrast-[1.08] saturate-[1.05]',
      email: 'johnrussell.staana@bulsu.edu.ph',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      accentGradient: 'from-[#FF7A2F] via-[#F43F5E] to-rose-500',
      badgeColor: isDark ? 'bg-[#FF7A2F]/15 text-[#FFC09B] border-[#FF7A2F]/30' : 'bg-[#FF7A2F]/10 text-[#FF7A2F] border-[#FF7A2F]/20',
      hoverBorder: 'hover:border-[#FF7A2F]/60',
    },
    {
      name: 'Kian Davey Antolin',
      role: 'Lead Full-Stack Developer',
      description: 'Engineered the Chrome extension architecture, built the real-time Node.js WebSocket backend, and developed the web platform.',
      image: kianImg,
      imageClass: '',
      email: 'kiandavey.antolin@bulsu.edu.ph',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      accentGradient: 'from-[#0A44FF] via-[#10B981] to-emerald-500',
      badgeColor: isDark ? 'bg-[#0A44FF]/15 text-[#6AA2FF] border-[#0A44FF]/30' : 'bg-[#0A44FF]/10 text-[#0A44FF] border-[#0A44FF]/20',
      hoverBorder: 'hover:border-[#0A44FF]/60',
    },
  ];

  return (
    <section
      id="team"
      className={`relative overflow-hidden w-full min-h-screen flex flex-col justify-center scroll-mt-[69px] md:scroll-mt-[71px] py-20 md:py-28 border-t ${isDark ? 'border-slate-800/80' : 'border-slate-200/60'
        }`}
    >
      {/* Cybernetic Grid Layer */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_75%,transparent_100%)] -z-10" />

      {/* Stage Spotlight Glow */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] blur-[120px] pointer-events-none -z-10 bg-gradient-to-b from-[#0A44FF]/30 via-[#8A56FF]/15 to-transparent gpu-accelerate ${isDark ? 'opacity-40' : 'opacity-10'
          }`}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
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
            Bulacan State University (BulSU) • CICT Capstone Research Team 2026.
          </p>
        </div>

        {/* 5-Column Responsive Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
          {teamMembers.map((member, idx) => (
            <article
              key={idx}
              className={`group border rounded-3xl p-6 flex flex-col items-center text-center justify-between transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl ${member.hoverBorder} ${isDark
                  ? 'bg-[#161618] border-slate-800 ring-1 ring-white/5 ring-inset hover:bg-white/[0.04]'
                  : 'bg-white border-slate-200/80 ring-1 ring-black/5 ring-inset hover:bg-slate-50/80'
                }`}
            >
              <div className="flex flex-col items-center w-full">
                {/* Photo Avatar Frame with Gradient Ring */}
                <div className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[3px] bg-gradient-to-tr ${member.accentGradient} mb-5 shadow-xl shadow-black/25 shrink-0 overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className={`w-full h-full object-cover object-top rounded-full transform-gpu ${member.imageClass}`}
                  />
                </div>

                <h3 className={`text-base md:text-lg font-bold m-0 tracking-tight leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {member.name}
                </h3>

                <span
                  className={`inline-block px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider border my-2 ${member.badgeColor}`}
                >
                  {member.role}
                </span>

                <p className={`text-xs leading-relaxed m-0 mt-2 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {member.description}
                </p>
              </div>

              {/* Social Contacts Bar */}
              <div
                className={`w-full mt-6 pt-4 border-t flex items-center justify-center gap-5 ${isDark ? 'border-slate-800/80' : 'border-slate-100'
                  }`}
              >
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} LinkedIn`}
                  className="p-1 transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  aria-label={`Email ${member.name}`}
                  className="p-1 transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
                >
                  <GmailIcon />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} GitHub`}
                  className="p-1 transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
                >
                  <GitHubIcon isDark={isDark} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
