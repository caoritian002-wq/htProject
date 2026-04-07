import { icons } from 'lucide-react'
import type { ServiceItem } from '@/types'
import AnimatedSection from '@/components/ui/AnimatedSection'

interface ServicesSectionProps {
  services: ServiceItem[]
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="py-24 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-widest text-white/40 font-medium mb-3">
            Our Approach
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            A Multimodal Method to Detect What Others Miss
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <AnimatedSection key={svc.id} delay={i * 0.1}>
              <ServiceCard service={svc} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: ServiceItem }) {
  const IconComponent = (icons as Record<string, React.ComponentType<{ className?: string }>>)[service.icon]
  return (
    <div className="group p-6 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/6 hover:border-white/15 transition-all duration-300">
      <div className="mb-4 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
        {IconComponent && <IconComponent className="w-5 h-5 text-white" />}
      </div>
      <h3 className="text-base font-semibold mb-2">{service.title}</h3>
      <p className="text-sm text-white/55 leading-relaxed">{service.summary}</p>
      {service.detailAnchor && (
        <a
          href={`#${service.detailAnchor}`}
          className="mt-4 inline-block text-xs text-white/40 hover:text-white transition-colors"
        >
          Learn more →
        </a>
      )}
    </div>
  )
}
