export interface CTAButton {
  label: string
  href: string
  variant: 'primary' | 'secondary' | 'ghost'
  target?: '_blank'
}

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  locale: string
  contact: {
    email: string
    phone?: string
    address?: string
  }
  social: {
    linkedin?: string
    twitter?: string
    youtube?: string
  }
}

export interface HeroSection {
  headline: string
  subheadline: string
  ctaPrimary: CTAButton
  ctaSecondary?: CTAButton
  backgroundImage: {
    src: string
    alt: string
  }
}

export interface StatItem {
  id: string
  value: number
  suffix?: string
  label: string
  duration?: number
}

export interface Partner {
  id: string
  name: string
  logo: {
    src: string
    alt: string
    width: number
    height: number
  }
  url?: string
}

export interface ServiceItem {
  id: string
  icon: string
  title: string
  summary: string
  detailAnchor?: string
}

export interface CaseStudy {
  id: string
  title: string
  summary: string
  content: string
  metrics: Array<{
    label: string
    value: string
  }>
  image: {
    src: string
    alt: string
  }
  publishedAt: string
}

export interface TeamMember {
  id: string
  name: string
  title: string
  bio: string
  photo: {
    src: string
    alt: string
  }
  credentials?: string[]
  linkedin?: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface ContactFormInput {
  name: string
  email: string
  phone?: string
  inquiry: string
  consent: true
}

export type ContactFormResult =
  | { success: true; message: string }
  | {
      success: false
      error: string
      fieldErrors?: Partial<Record<keyof ContactFormInput, string>>
    }
