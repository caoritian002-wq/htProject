import Image from 'next/image'
import type { CaseStudy } from '@/types'
import AnimatedSection from '@/components/ui/AnimatedSection'

interface CaseStudiesSectionProps {
  cases: CaseStudy[]
}

export default function CaseStudiesSection({ cases }: CaseStudiesSectionProps) {
  return (
    <section id="cases" className="py-24 bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-widest text-white/40 font-medium mb-3">
            Real Stories
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Early Detection Changes Everything
          </h2>
        </AnimatedSection>
        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <AnimatedSection key={c.id} delay={i * 0.15}>
              <CaseCard caseStudy={c} />
            </AnimatedSection>
          ))}
        </div>
        {/* Mobile: horizontal scroll */}
        <div className="md:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-none">
          {cases.map((c) => (
            <div key={c.id} className="flex-shrink-0 w-[85vw] snap-center">
              <CaseCard caseStudy={c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <article className="rounded-2xl border border-white/8 bg-white/3 overflow-hidden hover:border-white/15 transition-colors">
      <div className="relative h-48 bg-neutral-800">
        <Image
          src={caseStudy.image.src}
          alt={caseStudy.image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 85vw, 50vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{caseStudy.title}</h3>
        <p className="text-sm text-white/55 leading-relaxed mb-4">{caseStudy.summary}</p>
        <div className="flex flex-wrap gap-2">
          {caseStudy.metrics.map((m) => (
            <span
              key={m.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-xs"
            >
              <span className="text-white/50">{m.label}:</span>
              <span className="font-semibold">{m.value}</span>
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
