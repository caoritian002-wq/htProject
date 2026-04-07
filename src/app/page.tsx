import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import ServicesSection from '@/components/sections/ServicesSection'
import PartnersSection from '@/components/sections/PartnersSection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import TeamSection from '@/components/sections/TeamSection'
import ContactSection from '@/components/sections/ContactSection'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import hero from '@/data/hero'
import stats from '@/data/stats'
import services from '@/data/services'
import partners from '@/data/partners'
import cases from '@/data/cases'
import team from '@/data/team'
import navigation from '@/data/navigation'
import site from '@/data/site'

export default function Home() {
  return (
    <>
      <Navbar items={navigation} siteName={site.name} />
      <main>
        <HeroSection data={hero} />
        <StatsSection stats={stats} />
        <PartnersSection partners={partners} />
        <ServicesSection services={services} />
        <CaseStudiesSection cases={cases} />
        <TeamSection members={team} />
        <ContactSection />
      </main>
      <Footer site={site} items={navigation} />
    </>
  )
}
