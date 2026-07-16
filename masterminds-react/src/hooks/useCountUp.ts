import { useEffect, useRef, useState } from 'react'

/** Animate a number from 0 → target once the element scrolls into view. */
export function useCountUp(target: number, duration = 1500) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [value, setValue] = useState(0)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !done.current) {
            done.current = true
            const t0 = performance.now()
            const tick = (now: number) => {
              const p = Math.min(1, (now - t0) / duration)
              const eased = 1 - Math.pow(1 - p, 3)
              setValue(Math.round(target * eased))
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
            io.disconnect()
          }
        })
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, duration])

  return { ref, value }
}
