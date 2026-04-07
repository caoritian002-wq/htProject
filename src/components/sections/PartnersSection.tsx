import Image from 'next/image'
import type { Partner } from '@/types'
import AnimatedSection from '@/components/ui/AnimatedSection'

interface PartnersSectionProps {
  partners: Partner[]
}

export default function PartnersSection({ partners }: PartnersSectionProps) {
  return (
    <section className="py-16 bg-neutral-950 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-white/30 font-medium">
            Trusted Partners
          </p>
        </AnimatedSection>
        {/* Desktop grid */}
        <div className="hidden sm:flex flex-wrap justify-center gap-x-12 gap-y-8 items-center">
          {partners.map((p, i) => (
            <AnimatedSection key={p.id} delay={i * 0.08}>
              <PartnerLogo partner={p} />
            </AnimatedSection>
          ))}
        </div>
        {/* Mobile: horizontal scroll */}
        <div className="sm:hidden flex gap-8 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 scrollbar-none">
          {partners.map((p) => (
            <div key={p.id} className="flex-shrink-0 snap-center">
              <PartnerLogo partner={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PartnerLogo({ partner }: { partner: Partner }) {
  const inner = (
    <div className="h-10 w-32 relative opacity-40 hover:opacity-70 transition-opacity">
      <Image
        src={partner.logo.src}
        alt={partner.logo.alt}
        fill
        className="object-contain"
        sizes="128px"
      />
    </div>
  )
  return partner.url ? (
    <a href={partner.url} target="_blank" rel="noopener noreferrer" title={partner.name}>
      {inner}
    </a>
  ) : (
    <div title={partner.name}>{inner}</div>
  )
}
