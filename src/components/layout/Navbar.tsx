'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import type { NavItem } from '@/types'
import { cn } from '@/lib/utils'
import CTAButton from '@/components/ui/CTAButton'

interface NavbarProps {
  items: NavItem[]
  siteName: string
}

export default function Navbar({ items, siteName }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300',
          scrolled || open
            ? 'bg-neutral-950/90 backdrop-blur-md border-b border-white/8'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-base font-bold tracking-tight hover:text-white/80 transition-colors">
            {siteName}
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm text-white/65 hover:text-white rounded-full hover:bg-white/5 transition-all duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <CTAButton href="#contact" variant="primary" className="py-2 px-5 text-xs">
              Schedule Exam
            </CTAButton>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-neutral-950/95 backdrop-blur-md border-b border-white/8 md:hidden"
          >
            <ul className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <CTAButton href="#contact" variant="primary" className="w-full justify-center">
                  Schedule Exam
                </CTAButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
