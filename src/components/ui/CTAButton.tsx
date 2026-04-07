'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import type { ButtonHTMLAttributes } from 'react'

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
  loading?: boolean
  target?: '_blank'
  className?: string
}

const variantClasses = {
  primary:
    'bg-white text-neutral-950 hover:bg-neutral-100 font-semibold shadow-lg',
  secondary:
    'border border-white/40 text-white hover:bg-white/10 font-medium',
  ghost:
    'text-white/80 hover:text-white underline-offset-4 hover:underline font-medium',
}

export default function CTAButton({
  variant = 'primary',
  href,
  loading = false,
  target,
  className,
  children,
  disabled,
  ...props
}: CTAButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:pointer-events-none disabled:opacity-50'
  const classes = cn(base, variantClasses[variant], className)

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <Link
        href={href}
        target={isExternal ? '_blank' : target}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {children}
      </Link>
    )
  }

  return (
    <button disabled={disabled || loading} className={classes} {...props}>
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  )
}
