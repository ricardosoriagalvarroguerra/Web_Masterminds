import { useEffect, useState } from 'react'

/** Fraction (0–1) of the page scrolled — for the top progress bar. */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const se = document.scrollingElement || document.documentElement
      const h = se.scrollHeight - se.clientHeight
      setProgress(h > 0 ? se.scrollTop / h : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return progress
}
