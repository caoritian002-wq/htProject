import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import type { SiteConfig, NavItem } from '@/types'

interface FooterProps {
  site: SiteConfig
  items: NavItem[]
}

export default function Footer({ site, items }: FooterProps) {
  return (
    <footer className="bg-neutral-950 border-t border-white/8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="font-bold text-base mb-2">{site.name}</p>
            <p className="text-sm text-white/40 max-w-xs">{site.tagline}</p>
            <div className="mt-4 flex gap-3">
              {site.social.linkedin && (
                <SocialLink href={site.social.linkedin} label="LinkedIn">
                  <span className="text-xs font-medium">in</span>
                </SocialLink>
              )}
              {site.social.twitter && (
                <SocialLink href={site.social.twitter} label="Twitter / X">
                  <span className="text-xs font-medium">𝕏</span>
                </SocialLink>
              )}
              {site.social.youtube && (
                <SocialLink href={site.social.youtube} label="YouTube">
                  <ExternalLink className="w-3.5 h-3.5" />
                </SocialLink>
              )}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/30 font-medium mb-4">Navigation</p>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/30 font-medium mb-4">Contact</p>
            <address className="not-italic space-y-1.5 text-sm text-white/50">
              <p>{site.contact.email}</p>
              {site.contact.phone && <p>{site.contact.phone}</p>}
              {site.contact.address && <p>{site.contact.address}</p>}
            </address>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/25">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors"
    >
      {children}
    </a>
  )
}
