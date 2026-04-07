'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { useCountUp } from '@/hooks/useCountUp'

interface CountUpProps {
  to: number
  duration?: number
  suffix?: string
}

export default function CountUp({ to, duration = 2000, suffix = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const count = useCountUp(to, duration, inView)

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
