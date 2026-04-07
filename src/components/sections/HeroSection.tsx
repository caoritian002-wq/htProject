import Image from 'next/image'
import type { HeroSection as HeroData } from '@/types'
import CTAButton from '@/components/ui/CTAButton'

interface HeroSectionProps {
  data: HeroData
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.backgroundImage.src}
          alt={data.backgroundImage.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"

        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/50 to-neutral-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
          {data.headline}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-white/75 leading-relaxed">
          {data.subheadline}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CTAButton href={data.ctaPrimary.href} variant="primary">
            {data.ctaPrimary.label}
          </CTAButton>
          {data.ctaSecondary && (
            <CTAButton href={data.ctaSecondary.href} variant="secondary">
              {data.ctaSecondary.label}
            </CTAButton>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  )
}
