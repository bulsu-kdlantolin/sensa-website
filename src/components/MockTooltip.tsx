interface TooltipProps {
  label: string
  isDark?: boolean
  isRed?: boolean
  isAuditory?: boolean
}

export const MockTooltip = ({ label, isDark, isRed, isAuditory }: TooltipProps) => {
  const layout = isAuditory 
    ? "absolute bottom-full mb-3 left-1/2 -translate-x-1/2 z-50 pointer-events-none" 
    : "absolute right-full mr-3 top-1/2 -translate-y-1/2 z-50 pointer-events-none"
  const animation = "opacity-0 invisible " + (isAuditory ? "translate-y-2 group-hover:-translate-y-0" : "-translate-x-2 group-hover:translate-x-0") + " group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
  let typography = "px-5 py-2.5 rounded-lg text-[15px] font-semibold tracking-wide whitespace-nowrap shadow-lg border"
  let arrowSize = isAuditory
    ? "absolute top-full left-1/2 -translate-x-1/2 border-x-[7px] border-x-transparent border-t-[7px] border-b-0"
    : "absolute top-1/2 -right-[7px] -translate-y-1/2 border-y-[7px] border-y-transparent border-l-[7px] border-r-0"

  let colors = ""
  let arrowColor = ""

  if (isRed) {
    colors = "bg-red-500/90 text-white border-red-500/20 shadow-[0_4px_12px_rgba(239,68,68,0.2)]"
    arrowColor = "border-l-red-500/90"
  } else if (isDark) {
    colors = "bg-[#141416] text-gray-100 border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
    arrowColor = "border-l-[#141416]"
  } else if (isAuditory) {
    colors = "bg-white text-[#CC5D1F] border-black/5 shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
    arrowColor = "border-t-white"
  } else {
    colors = "bg-white text-[#0A44FF] border-black/5 shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
    arrowColor = "border-l-white"
  }

  if (isRed) {
    typography = "px-5 py-2.5 rounded-lg text-[15px] font-semibold tracking-wide whitespace-nowrap shadow-lg border"
  }

  return (
    <div className={`${layout} ${animation}`} role="tooltip">
      <div className={`relative ${typography} ${colors}`}>
        {label}
        <div className={`${arrowSize} ${arrowColor}`} />
      </div>
    </div>
  )
}
