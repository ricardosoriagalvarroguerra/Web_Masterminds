interface TerrainArtProps {
  label: string
}

// Fixed organic wobble so every contour nests cleanly (deterministic — no chart).
const WOBBLE = [1.0, 0.9, 1.09, 0.85, 1.13, 0.94, 1.06, 0.87, 1.11, 0.9, 1.05, 0.97]
const CX = 262
const CY = 210

function smoothClosed(pts: [number, number][]): string {
  const n = pts.length
  let d = `M ${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)} `
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n]
    const p1 = pts[i]
    const p2 = pts[(i + 1) % n]
    const p3 = pts[(i + 2) % n]
    const c1x = p1[0] + (p2[0] - p0[0]) / 6
    const c1y = p1[1] + (p2[1] - p0[1]) / 6
    const c2x = p2[0] - (p3[0] - p1[0]) / 6
    const c2y = p2[1] - (p3[1] - p1[1]) / 6
    d += `C ${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)} `
  }
  return d + 'Z'
}

function ring(r: number): string {
  const pts = WOBBLE.map((w, i) => {
    const a = (i / WOBBLE.length) * Math.PI * 2
    return [CX + Math.cos(a) * r * w, CY + Math.sin(a) * r * w * 0.82] as [number, number]
  })
  return smoothClosed(pts)
}

/**
 * Editorial "terrain" illustration — nested topographic contours representing the
 * complex Bolivian environment being read in full. Supports the section text;
 * deliberately not a data chart.
 */
export function TerrainArt({ label }: TerrainArtProps) {
  const levels = [30, 54, 78, 103, 129, 156, 184]
  return (
    <svg className="terrain" viewBox="0 0 520 420" role="img" aria-label={label}>
      <g fill="none" stroke="#4bbfc2" strokeLinejoin="round">
        {levels.map((r, i) => {
          const highlight = i === 3
          return (
            <path
              key={i}
              className="terrain-ring"
              d={ring(r)}
              strokeWidth={highlight ? 1.7 : 1}
              stroke={highlight ? '#7fe3e5' : '#4bbfc2'}
              strokeOpacity={highlight ? 0.9 : 0.16 + i * 0.06}
              style={{ animationDelay: `${i * 0.12}s` }}
            />
          )
        })}
      </g>

      {/* the point we've read to */}
      <line x1={CX - 16} y1={CY} x2={CX + 16} y2={CY} stroke="#eaffff" strokeOpacity="0.7" strokeWidth="1" />
      <line x1={CX} y1={CY - 16} x2={CX} y2={CY + 16} stroke="#eaffff" strokeOpacity="0.7" strokeWidth="1" />
      <circle className="conv-pulse" cx={CX} cy={CY} r={4.5} fill="#eaffff" />

      <text x={28} y={38} className="conv-title">{label}</text>
    </svg>
  )
}
