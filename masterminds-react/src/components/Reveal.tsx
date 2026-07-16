import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

interface RevealProps {
  children: ReactNode
  as?: ElementType
  className?: string
  style?: CSSProperties
  delay?: number
  id?: string
  onClick?: () => void
  ariaLabel?: string
}

/** Fade-and-rise wrapper that animates its children in on scroll. */
export function Reveal({ children, as: Tag = 'div', className, style, delay = 0, id, onClick, ariaLabel }: RevealProps) {
  const { ref, shown } = useReveal()
  return (
    <Tag
      ref={ref}
      id={id}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`reveal${shown ? ' is-visible' : ''}${className ? ' ' + className : ''}`}
      style={{ transitionDelay: shown ? `${delay}ms` : '0ms', ...style }}
    >
      {children}
    </Tag>
  )
}
