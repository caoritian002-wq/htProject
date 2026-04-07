import type { TeamMember } from '@/types'

const team: TeamMember[] = [
  {
    id: 'founder',
    name: 'J. Craig Venter, PhD',
    title: 'Co-Founder & Executive Chairman',
    bio: 'Dr. Venter led the first draft sequencing of the human genome in 2000. He founded Human Longevity to apply genomics at population scale for disease prevention. A pioneer in synthetic biology and genomics, he has authored over 300 scientific papers.',
    photo: { src: '/images/team/venter.jpg', alt: 'Dr. J. Craig Venter' },
    credentials: ['PhD Biochemistry', 'National Medal of Science'],
    linkedin: 'https://linkedin.com/in/jcraigventer',
  },
  {
    id: 'cmo',
    name: 'Dr. David Karow, MD, PhD',
    title: 'Chief Medical Officer',
    bio: 'Dr. Karow is a neuroradiologist and physician-scientist specializing in AI-assisted imaging interpretation. He leads the clinical program integrating genomics, imaging, and machine learning into actionable patient insights.',
    photo: { src: '/images/team/karow.jpg', alt: 'Dr. David Karow' },
    credentials: ['MD', 'PhD Bioengineering', 'Board Certified Radiologist'],
  },
]

export default team
