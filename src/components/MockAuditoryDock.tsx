import { MockTooltip as SharedTooltip } from "./MockTooltip"

interface AuditoryDockProps {
  isDark: boolean
  isMinimized: boolean
  isCaptionsActive: boolean
  onToggleCaptions: () => void
  onMinimizeToggle: () => void
  onOpenCaptionLanguage: () => void
  onOpenTranscriptHistory: () => void
  onOpenTextSize: () => void
  onOpenCaptionTransparency: () => void
  isFocusMode: boolean
  onToggleFocusMode: () => void
  onOpenSettings: () => void
  onClose: () => void
}

export default function MockAuditoryDock({
  isDark,
  isMinimized,
  isCaptionsActive,
  onToggleCaptions,
  onMinimizeToggle,
  onOpenCaptionLanguage,
  onOpenTranscriptHistory,
  onOpenTextSize,
  onOpenCaptionTransparency,
  isFocusMode,
  onToggleFocusMode,
  onOpenSettings,
  onClose
}: AuditoryDockProps) {

  const glassPanelClass = isDark
    ? "bg-[#1C1C1E]/85 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-3xl transform-gpu backface-hidden"
    : "bg-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-3xl transform-gpu backface-hidden"

  const controlPanelClass = isDark
    ? "bg-[#1C1C1E]/85 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-3xl transform-gpu backface-hidden"
    : "bg-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-3xl transform-gpu backface-hidden"

  const springTransition = "transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"

  const btnBaseClass = `relative group !w-[44px] !h-[44px] !min-w-[44px] !min-h-[44px] !p-0 !m-0 flex items-center justify-center rounded-full shrink-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FF7A2F]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent box-border will-change-[transform] transform-gpu backface-hidden ${springTransition}`

  const btnHoverClass = isDark
    ? "hover:bg-[#FF7A2F]/15 text-gray-300 hover:text-white"
    : "hover:bg-[#FF7A2F]/10 text-gray-600 hover:text-[#FF7A2F]"

  const closeBtnClass = `${btnBaseClass} text-gray-500 dark:text-gray-400 transition-all duration-200 active:scale-90 hover:scale-105 ${isDark ? 'hover:bg-red-500/80 hover:text-white' : 'hover:bg-red-500/90 hover:text-white'}`

  const activeButtonClass = `
    bg-gradient-to-br from-[#FF7A2F] to-[#E86A25] 
    text-white shadow-[0_4px_20px_rgba(255,122,47,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]
    hover:shadow-[0_4px_25px_rgba(255,122,47,0.6),inset_0_1px_0_rgba(255,255,255,0.3)]
    scale-105 ring-[0px] ring-[#FF7A2F]/0
  `

  const dividerClass = isDark
    ? "w-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-0.5"
    : "w-6 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent my-0.5"

  return (
    <div
      className="flex flex-col w-fit shrink-0 box-border relative z-50"
      role="toolbar"
      aria-label="Auditory and Caption Controls"
      data-sensa-auditory-dock
    >
      {/* Visualizer & Captions */}
      <div className={`relative flex flex-col items-center rounded-[28px] p-2 gap-1.5 shrink-0 z-30 transition-all duration-300 ${glassPanelClass}`}>
        
        {/* Glow layer */}
        <div
          className="sensa-dock-pill absolute inset-0 rounded-[28px] pointer-events-none transition-colors duration-150"
          style={{ willChange: 'box-shadow' }}
        />

        {/* Visualizer Frame (Mocked) */}
        <div className={`${btnBaseClass} bg-transparent cursor-default relative z-10`}>
          <SharedTooltip label="Sound Visualizer" isDark={isDark} isAuditory />
          {/* Static mocked visualizer bars since Web Audio API is stripped */}
          <div className="flex items-center justify-center gap-[2.5px] !w-[28px] !h-[20px] shrink-0">
             {[4, 8, 14, 8, 4].map((h, i) => (
                <div key={i} className="!w-[3.5px] rounded-full transition-colors duration-150 bg-[#FF7A2F]" style={{ height: `${h}px` }} />
             ))}
          </div>
          <svg viewBox="0 0 24 24" fill="currentColor" className={`absolute !w-[18px] !h-[18px] shrink-0 opacity-10 pointer-events-none ${isDark ? 'text-white' : 'text-black'}`}>
            <rect x="5" y="10" width="2" height="4" rx="1" />
            <rect x="9" y="7" width="2" height="10" rx="1" />
            <rect x="13" y="4" width="2" height="16" rx="1" />
            <rect x="17" y="8" width="2" height="8" rx="1" />
          </svg>
        </div>

        <div className={dividerClass} />

        <button
          type="button"
          onClick={onToggleCaptions}
          aria-pressed={isCaptionsActive}
          className={`${btnBaseClass} relative z-10 active:scale-90 ${isCaptionsActive
            ? activeButtonClass
            : `bg-gradient-to-br from-[#FF7A2F] to-[#E86A25] text-white/90 shadow-[0_2px_12px_rgba(255,122,47,0.3)] hover:shadow-[0_4px_20px_rgba(255,122,47,0.5)] hover:scale-105`
            }`}
        >
          <SharedTooltip label={isCaptionsActive ? "Turn Off Captions" : "Turn On Captions"} isDark={isDark} isAuditory />
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="!w-[22px] !h-[22px] shrink-0">
            <rect x="3" y="6" width="18" height="12" rx="2" />
            <path d="M10 10.5a2.5 2.5 0 0 0-3.5 0" />
            <path d="M10 13.5a2.5 2.5 0 0 1-3.5 0" />
            <path d="M17.5 10.5a2.5 2.5 0 0 0-3.5 0" />
            <path d="M17.5 13.5a2.5 2.5 0 0 1-3.5 0" />
          </svg>
          {/* Active Indicator Badge */}
          {isCaptionsActive && (
            <span className="absolute top-0 right-0 !w-3 !h-3 rounded-full bg-white shadow-[0_0_10px_white]">
              <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-75" />
            </span>
          )}
        </button>
      </div>

      {/* Settings */}
      <div
        className={`grid w-full transform-gpu backface-hidden will-change-[grid-template-rows] ${springTransition} ${isMinimized ? "grid-rows-[0fr] mt-0" : "grid-rows-[1fr] mt-3"
          }`}
      >
        <div className="min-h-0 flex justify-center w-full">
          <div
            className={`relative flex flex-col items-center rounded-[28px] p-2 gap-1.5 w-fit origin-top transform-gpu backface-hidden will-change-[opacity,transform] ${springTransition} ${glassPanelClass} ${isMinimized
              ? "opacity-0 scale-75 -translate-y-4 pointer-events-none"
              : "opacity-100 scale-100 translate-y-0 pointer-events-auto"
              }`}
          >
            {/* Glow layer */}
            <div
              className="sensa-dock-pill absolute inset-0 rounded-[28px] pointer-events-none transition-colors duration-150"
              style={{
                willChange: 'box-shadow'
              }}
            />

            <button
              onClick={onOpenTranscriptHistory}
              className={`${btnBaseClass} ${btnHoverClass} relative z-10 active:scale-90 hover:scale-105`}
              aria-label="Transcript History"
            >
              <SharedTooltip label="Transcript" isDark={isDark} isAuditory />
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="!w-[22px] !h-[22px] shrink-0">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </button>

            <button
              onClick={onToggleFocusMode}
              aria-pressed={isFocusMode}
              className={`${btnBaseClass} relative z-10 active:scale-90 ${isFocusMode
                ? activeButtonClass
                : `${btnHoverClass} hover:scale-105`
                }`}
            >
              <SharedTooltip label="Focus Mode" isDark={isDark} isAuditory />
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="!w-[22px] !h-[22px] shrink-0">
                <path d="M3 8V5a2 2 0 0 1 2-2h3" />
                <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                <path d="M21 16v3a2 2 0 0 1-2 2h-3" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>

            <div className={dividerClass} />

            <button
              onClick={onOpenCaptionLanguage}
              className={`${btnBaseClass} ${btnHoverClass} relative z-10 active:scale-90 hover:scale-105`}
              aria-label="Caption Language"
            >
              <SharedTooltip label="Caption Language" isDark={isDark} isAuditory />
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="!w-[22px] !h-[22px] shrink-0">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </button>

            <button
              onClick={onOpenTextSize}
              className={`${btnBaseClass} ${btnHoverClass} relative z-10 active:scale-90 hover:scale-105`}
              aria-label="Text Size"
            >
              <SharedTooltip label="Text Size" isDark={isDark} isAuditory />
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="!w-[22px] !h-[22px] shrink-0">
                <polyline points="4 7 4 4 20 4 20 7" />
                <line x1="12" y1="4" x2="12" y2="20" />
                <line x1="8" y1="20" x2="16" y2="20" />
              </svg>
            </button>

            <button
              onClick={onOpenCaptionTransparency}
              className={`${btnBaseClass} ${btnHoverClass} relative z-10 active:scale-90 hover:scale-105`}
              aria-label="Caption Transparency"
            >
              <SharedTooltip label="Caption Transparency" isDark={isDark} isAuditory />
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="!w-[22px] !h-[22px] shrink-0">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <rect x="7" y="13" width="10" height="4" rx="1" />
              </svg>
            </button>

            <button
              type="button"
              onClick={onOpenSettings}
              className={`${btnBaseClass} ${btnHoverClass} relative z-10 active:scale-90 hover:scale-105`}
              aria-label="Settings"
            >
              <SharedTooltip label="Settings" isDark={isDark} isAuditory />
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="!w-[24px] !h-[24px] shrink-0">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Window Controls */}
      <div className={`relative flex flex-col items-center rounded-[28px] p-2 gap-1.5 shrink-0 mt-3 z-20 transition-all duration-300 transform-gpu backface-hidden ${controlPanelClass}`}>
        <div
          className="sensa-dock-pill absolute inset-0 rounded-[28px] pointer-events-none transition-colors duration-150"
          style={{
            willChange: 'box-shadow'
          }}
        />

        <button
          type="button"
          onClick={onMinimizeToggle}
          aria-expanded={!isMinimized}
          className={`${btnBaseClass} ${btnHoverClass} relative z-10 active:scale-90 hover:scale-105 transform-gpu backface-hidden`}
          aria-label={isMinimized ? "Expand Menu" : "Minimize Menu"}
        >
          <SharedTooltip label={isMinimized ? "Expand" : "Minimize"} isDark={isDark} isAuditory />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="!w-[22px] !h-[22px] shrink-0 transform-gpu backface-hidden will-change-transform"
            style={{
              transform: `rotate(${isMinimized ? 180 : 0}deg) translateZ(0)`,
              transformOrigin: '50% 50%',
              willChange: 'transform',
              transition: 'transform 260ms cubic-bezier(0.2, 0.9, 0.2, 1)'
            }}
          >
            <polyline points="7 15 12 10 17 15" />
            <polyline points="7 9 12 4 17 9" />
          </svg>
        </button>

        <div className={dividerClass} />

        <button
          type="button"
          onClick={onClose}
          className={closeBtnClass}
          aria-label="Close Toolbar"
        >
          <SharedTooltip label="Close" isRed isDark={isDark} />
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="!w-5 !h-5 shrink-0" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  )
}
