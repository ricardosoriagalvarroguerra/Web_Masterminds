interface ConvergenceArtProps {
  title: string
  lenses: string[] // exactly 3: económico, coyuntural, político
  outLabel: string
}

/**
 * Editorial brand illustration — three analytical lenses (economic, situational,
 * political) flowing in from the left and CONVERGING into a single clear reading.
 * A meaningful visual (not a chart) that echoes the interwoven logo and the
 * tagline "Perspectivas que convergen".
 */
export function ConvergenceArt({ title, lenses, outLabel }: ConvergenceArtProps) {
  const sources = [150, 260, 370] // y-positions for the three lenses
  const cx = 360
  const cy = 258

  return (
    <svg className="conv" viewBox="0 0 520 520" role="img" aria-label={title}>
      <defs>
        <linearGradient id="convLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#4bbfc2" stopOpacity="0.35" />
          <stop offset="0.6" stopColor="#5fd0d2" />
          <stop offset="1" stopColor="#7fe3e5" />
        </linearGradient>
        <radialGradient id="convGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#7fe3e5" stopOpacity="0.55" />
          <stop offset="1" stopColor="#7fe3e5" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* faint secondary threads */}
      <g fill="none" stroke="#4bbfc2" strokeOpacity="0.22" strokeWidth="0.9">
        <path className="conv-path" pathLength={1} style={{ animationDelay: '0.15s' }} d="M70,163 C 200,177 268,212 360,266" />
        <path className="conv-path" pathLength={1} style={{ animationDelay: '0.3s' }} d="M70,247 C 205,247 270,251 360,250" />
        <path className="conv-path" pathLength={1} style={{ animationDelay: '0.45s' }} d="M70,357 C 200,344 268,300 360,250" />
      </g>

      {/* primary threads */}
      <g fill="none" stroke="url(#convLine)" strokeWidth="1.8" strokeLinecap="round">
        <path className="conv-path" pathLength={1} style={{ animationDelay: '0s' }} d="M70,150 C 195,150 262,196 360,258" />
        <path className="conv-path" pathLength={1} style={{ animationDelay: '0.15s' }} d="M70,260 C 195,260 266,258 360,258" />
        <path className="conv-path" pathLength={1} style={{ animationDelay: '0.3s' }} d="M70,370 C 195,370 262,320 360,258" />
      </g>

      {/* the clear reading — output line */}
      <path className="conv-out" pathLength={1} fill="none" stroke="#7fe3e5" strokeWidth="2.4" strokeLinecap="round" d="M360,258 C 418,250 448,205 478,132" />

      {/* source nodes + lens labels */}
      {sources.map((y, i) => (
        <g key={i}>
          <circle cx={70} cy={y} r={4} fill="#4bbfc2" />
          <text x={62} y={y - 16} className="conv-label">{lenses[i]}</text>
        </g>
      ))}

      {/* convergence node */}
      <circle cx={cx} cy={cy} r={26} fill="url(#convGlow)" />
      <circle className="conv-ring" cx={cx} cy={cy} r={13} fill="none" stroke="#7fe3e5" strokeOpacity="0.5" strokeWidth="1" />
      <circle cx={cx} cy={cy} r={5.5} fill="#eaffff" />

      {/* output node + label */}
      <circle className="conv-pulse" cx={478} cy={132} r={5.5} fill="#7fe3e5" />
      <text x={462} y={116} className="conv-out-label" textAnchor="end">{outLabel}</text>

      {/* corner title */}
      <text x={28} y={40} className="conv-title">{title}</text>
    </svg>
  )
}
