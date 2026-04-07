import type { StatItem } from '@/types'
import CountUp from '@/components/ui/CountUp'
import AnimatedSection from '@/components/ui/AnimatedSection'

interface StatsSectionProps {
  stats: StatItem[]
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section id="about" className="py-20 bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-white/40 font-medium">
            By the Numbers
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.id} delay={i * 0.1} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                <CountUp to={stat.value} duration={stat.duration} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-white/50">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
