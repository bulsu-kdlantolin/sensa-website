import { Accessibility, CheckCircle2, Headphones, Keyboard, ShieldCheck } from 'lucide-react';

interface AccessibilityStatementProps {
  isDark: boolean;
}

export default function AccessibilityStatement({ isDark }: AccessibilityStatementProps) {
  return (
    <div className={`min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
      
      {/* Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF7A2F]/10 text-[#FF7A2F] text-sm font-semibold mb-6">
          <Accessibility className="w-4 h-4" />
          <span>Commitment to Inclusion</span>
        </div>
        <h1 className={`text-4xl md:text-6xl font-black tracking-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Accessibility Statement
        </h1>
        <p className="text-lg md:text-xl opacity-80 leading-relaxed max-w-3xl">
          At Sensa, accessibility isn't just an afterthought—it is the core foundation of our research. We are deeply committed to ensuring digital inclusion for everyone, regardless of sensory, cognitive, or motor abilities.
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
            <ShieldCheck className="w-6 h-6 text-[#FF7A2F]" />
            Conformance Status
          </h2>
          <p className="leading-relaxed">
            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
          </p>
          <p className="leading-relaxed">
            We are actively striving to ensure that the Sensa website and Chrome Extension are fully conformant with <strong>WCAG 2.1 Level AAA</strong> standards. We continuously audit our contrast ratios, keyboard navigation paths, and screen-reader compatibility to meet and exceed these rigorous guidelines.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className={`text-2xl font-bold flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            <Keyboard className="w-6 h-6 text-[#FF7A2F]" />
            Continuous Improvements
          </h2>
          <p className="leading-relaxed">
            We have integrated several accessibility features directly into our web platform:
          </p>
          <ul className="list-none space-y-3 pl-4">
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 shrink-0 text-[#FF7A2F] mt-0.5" />
              <span><strong>Keyboard Navigation:</strong> All interactive elements, including navigation links, buttons, and modals, are fully accessible via the <code>Tab</code> key with highly visible focus states.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 shrink-0 text-[#FF7A2F] mt-0.5" />
              <span><strong>Screen Reader Compatibility:</strong> We utilize extensive ARIA attributes to ensure users interacting with standard screen readers receive accurate semantic context.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 shrink-0 text-[#FF7A2F] mt-0.5" />
              <span><strong>High Contrast & Sensory Adjustments:</strong> Our platform includes robust Dark/Light mode toggling, respecting system-level sensory preferences like <code>prefers-reduced-motion</code>.</span>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className={`text-2xl font-bold flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            <Headphones className="w-6 h-6 text-[#FF7A2F]" />
            Feedback & Support
          </h2>
          <p className="leading-relaxed">
            We welcome your feedback on the accessibility of Sensa. While we strive to meet the highest standards, we understand that true accessibility requires continuous listening and iteration. If you encounter accessibility barriers, or if you require assistance utilizing our tool, please reach out to us:
          </p>
          <div className={`p-6 mt-4 rounded-xl border ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
            <p className="font-semibold mb-2">BulSU Sensa Capstone Research Team</p>
            <p><strong>GitHub Issues:</strong> <a href="https://github.com/bulsu-kdlantolin/sensa-chrome-extension/issues" target="_blank" rel="noopener noreferrer" className="text-[#0A44FF] hover:underline">Report an Accessibility Barrier</a></p>
          </div>
        </section>
      </div>

    </div>
  );
}
