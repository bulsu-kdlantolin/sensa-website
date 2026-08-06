import { Shield, Lock, HardDrive, Globe, EyeOff, FileText, ChevronRight } from 'lucide-react';

interface PrivacyPolicyProps {
  isDark: boolean;
}

export default function PrivacyPolicy({ isDark }: PrivacyPolicyProps) {
  return (
    <div className={`min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
      
      {/* Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A44FF]/10 text-[#0A44FF] text-sm font-semibold mb-6">
          <Shield className="w-4 h-4" />
          <span>Privacy & Security</span>
        </div>
        <h1 className={`text-4xl md:text-6xl font-black tracking-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Privacy Policy
        </h1>
        <p className="text-lg md:text-xl opacity-80 leading-relaxed max-w-3xl">
          At Sensa, your privacy is our top priority. We build accessibility tools that process your data securely, locally, and transparently. We never sell your data, and we do not monitor your personal web history.
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
            <HardDrive className="w-6 h-6 text-[#0A44FF]" />
            1. Data Processed Locally
          </h2>
          <p className="leading-relaxed">
            Sensa is designed to process as much information as possible directly on your device. The preferences you configure (such as subtitle sizes, colors, voices, and reading speeds) are stored exclusively in your browser's local storage (<code>chrome.storage.local</code>). This data never leaves your device and is never uploaded to our servers.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className={`text-2xl font-bold flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            <Globe className="w-6 h-6 text-[#0A44FF]" />
            2. Audio & Text Processing
          </h2>
          <p className="leading-relaxed">
            To provide live subtitles, translation, and text-to-speech features, Sensa must securely process the audio and text from the websites you visit:
          </p>
          <ul className="list-none space-y-3 pl-4">
            <li className="flex gap-3">
              <ChevronRight className="w-5 h-5 shrink-0 text-[#0A44FF] mt-0.5" />
              <span><strong>Audio Processing:</strong> When Auditory Mode is active, the extension securely captures tab audio and streams it to our backend via encrypted WebSockets to interface with Deepgram and Azure Translator. This audio is processed <em>ephemerally</em>—meaning it is transcribed instantly and then immediately discarded. We do not store, record, or log any audio streams.</span>
            </li>
            <li className="flex gap-3">
              <ChevronRight className="w-5 h-5 shrink-0 text-[#0A44FF] mt-0.5" />
              <span><strong>Text Extraction:</strong> When Visual Mode's Smart Reader is active, Sensa reads the HTML text of the current page. This extraction happens entirely locally within your browser using Mozilla Readability and built-in AI models. The text is never transmitted to us.</span>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className={`text-2xl font-bold flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            <EyeOff className="w-6 h-6 text-[#0A44FF]" />
            3. Web History & Tracking
          </h2>
          <p className="leading-relaxed">
            <strong>We do not track your web history.</strong> While Sensa requires the "Read and change all your data on all websites" host permission to inject its accessibility overlays (like subtitles and screen magnifiers) onto the pages you visit, we do not monitor, log, or store which URLs you navigate to. Sensa only activates its features when you explicitly interact with it.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className={`text-2xl font-bold flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            <Lock className="w-6 h-6 text-[#0A44FF]" />
            4. Third-Party Services
          </h2>
          <p className="leading-relaxed">
            Sensa utilizes robust third-party AI services to power its real-time capabilities. These include:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 opacity-90">
            <li><strong>Deepgram:</strong> Used for real-time speech-to-text transcription.</li>
            <li><strong>Microsoft Azure:</strong> Used for real-time language translation.</li>
            <li><strong>Google Chrome APIs:</strong> Used for local text-to-speech synthesis and speech recognition.</li>
          </ul>
          <p className="leading-relaxed mt-4">
            These services receive the ephemeral data required to perform their functions (e.g., an audio stream to transcribe). Sensa acts as a secure proxy to these services, ensuring your personal identity and browser environment remain anonymous to them.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className={`text-2xl font-bold flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            <FileText className="w-6 h-6 text-[#0A44FF]" />
            5. Your Consent
          </h2>
          <p className="leading-relaxed">
            By installing and using the Sensa Chrome Extension, you consent to this Privacy Policy. If you have any questions, concerns, or require clarification regarding how your data is processed, please contact the BulSU Sensa Capstone Research Team.
          </p>
        </section>
      </div>

    </div>
  );
}
