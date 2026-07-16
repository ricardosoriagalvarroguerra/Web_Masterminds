import { useEffect, useRef, useState } from 'react'

/**
 * Reveal-on-scroll. Returns a ref + a boolean that flips true once the
 * element enters the viewport (or immediately if reduced motion is on).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }
    // Already in view on mount → show without waiting.
    const r = el.getBoundingClientRect()
    if (r.top < (window.innerHeight || 800) * 0.92 && r.bottom > 0) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true)
            io.disconnect()
          }
        })
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return { ref, shown }
}
