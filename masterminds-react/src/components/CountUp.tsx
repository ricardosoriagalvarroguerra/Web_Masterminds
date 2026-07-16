import { useCountUp } from '../hooks/useCountUp'

/** Renders a number that counts up from 0 when scrolled into view. */
export function CountUp({ value, suffix }: { value: number; suffix?: string }) {
  const { ref, value: current } = useCountUp(value)
  return (
    <span>
      <span ref={ref}>{current}</span>
      {suffix}
    </span>
  )
}
