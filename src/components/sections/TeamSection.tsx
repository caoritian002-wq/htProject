import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import type { TeamMember } from '@/types'
import AnimatedSection from '@/components/ui/AnimatedSection'

interface TeamSectionProps {
  members: TeamMember[]
}

export default function TeamSection({ members }: TeamSectionProps) {
  return (
    <section id="team" className="py-24 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-widest text-white/40 font-medium mb-3">
            Leadership
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Science-First Leadership
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {members.map((member, i) => (
            <AnimatedSection key={member.id} delay={i * 0.15}>
              <MemberCard member={member} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex gap-5 p-6 rounded-2xl border border-white/8 bg-white/3">
      <div className="relative w-20 h-20 flex-shrink-0 rounded-full overflow-hidden bg-neutral-800">
        <Image
          src={member.photo.src}
          alt={member.photo.alt}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-base">{member.name}</h3>
            <p className="text-sm text-white/50">{member.title}</p>
          </div>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors flex-shrink-0"
              aria-label={`${member.name} on LinkedIn`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
        <p className="mt-3 text-sm text-white/55 leading-relaxed line-clamp-3">{member.bio}</p>
        {member.credentials && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {member.credentials.map((c) => (
              <span key={c} className="text-xs border border-white/15 rounded-full px-2.5 py-0.5 text-white/50">
                {c}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
