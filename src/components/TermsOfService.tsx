import { Scale, BookOpen, AlertCircle, FileText, ChevronRight } from 'lucide-react';

interface TermsOfServiceProps {
  isDark: boolean;
}

export default function TermsOfService({ isDark }: TermsOfServiceProps) {
  return (
    <div className={`min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
      
      {/* Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A44FF]/10 text-[#0A44FF] text-sm font-semibold mb-6">
          <Scale className="w-4 h-4" />
          <span>Legal & Guidelines</span>
        </div>
        <h1 className={`text-4xl md:text-6xl font-black tracking-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Terms of Service
        </h1>
        <p className="text-lg md:text-xl opacity-80 leading-relaxed max-w-3xl">
          Please read these terms carefully before using the Sensa Chrome Extension and Website. By accessing or using our tools, you agree to be bound by these terms.
        </p>
        <div className="mt-8 text-sm opacity-60 font-medium">
          Last Updated: August 2026
        </div>
      </div>

      {/* Main Content */}
      <div className={`space-y-12 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
        
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className={`text-2xl font-bold flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            <BookOpen className="w-6 h-6 text-[#0A44FF]" />
            1. Academic Research Nature
          </h2>
          <p className="leading-relaxed">
            The Sensa Chrome Extension and its associated services are currently being developed as an academic capstone research project by students at Bulacan State University (BulSU). 
          </p>
          <p className="leading-relaxed">
            As a research prototype, the software is provided in a <strong>beta/experimental state</strong>. While we strive for high quality and reliability, Sensa may undergo rapid updates, experience temporary downtime, or feature modifications as part of the research and development lifecycle.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className={`text-2xl font-bold flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            <AlertCircle className="w-6 h-6 text-[#0A44FF]" />
            2. Disclaimer of Warranties (As-Is)
          </h2>
          <p className="leading-relaxed">
            The service is provided on an <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> basis, without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>
          <ul className="list-none space-y-3 pl-4">
            <li className="flex gap-3">
              <ChevronRight className="w-5 h-5 shrink-0 text-[#0A44FF] mt-0.5" />
              <span>We do not warrant that the extension will function uninterrupted, perfectly secure, or completely error-free across all websites on the internet.</span>
            </li>
            <li className="flex gap-3">
              <ChevronRight className="w-5 h-5 shrink-0 text-[#0A44FF] mt-0.5" />
              <span>AI transcription and translation accuracy relies on third-party services (Deepgram and Azure) and may occasionally contain inaccuracies. Sensa is an assistive tool and should not be relied upon for critical medical, legal, or life-safety situations.</span>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className={`text-2xl font-bold flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            <FileText className="w-6 h-6 text-[#0A44FF]" />
            3. Fair Usage
          </h2>
          <p className="leading-relaxed">
            Sensa utilizes cloud AI computing resources to provide live transcription and translation. You agree to use the extension for its intended personal assistive purposes and agree not to:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 opacity-90">
            <li>Reverse engineer, decompile, or attempt to extract the source code or API keys from the extension backend.</li>
            <li>Use automated scripts, bots, or scraping tools to artificially generate massive amounts of audio traffic through the extension.</li>
            <li>Use the extension for any illegal or unauthorized purpose.</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
