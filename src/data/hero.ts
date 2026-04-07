import type { HeroSection } from '@/types'

const hero: HeroSection = {
  headline: 'Early Detection for a Longer, Healthier Life',
  subheadline:
    'We combine the world\'s most comprehensive health data with advanced AI to detect disease early — giving you the time to act.',
  ctaPrimary: {
    label: 'Schedule a Health Intelligence Exam',
    href: '#contact',
    variant: 'primary',
  },
  ctaSecondary: {
    label: 'Learn More',
    href: '#services',
    variant: 'secondary',
  },
  backgroundImage: {
    src: '/images/hero-bg.jpg',
    alt: 'Advanced medical imaging technology',
  },
}

export default hero
