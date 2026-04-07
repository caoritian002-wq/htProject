import type { ServiceItem } from '@/types'

const services: ServiceItem[] = [
  {
    id: 'genomics',
    icon: 'Dna',
    title: 'Whole Genome Sequencing',
    summary: 'Complete analysis of your 6 billion DNA base pairs to identify hereditary risks before symptoms appear.',
    detailAnchor: 'services',
  },
  {
    id: 'imaging',
    icon: 'ScanLine',
    title: 'Advanced Imaging',
    summary: 'Full-body MRI and CT scans reviewed by AI and specialists to detect abnormalities at the earliest stage.',
    detailAnchor: 'services',
  },
  {
    id: 'microbiome',
    icon: 'Microscope',
    title: 'Microbiome Analysis',
    summary: 'Deep profiling of your gut microbiome to understand its role in metabolic and immune health.',
    detailAnchor: 'services',
  },
  {
    id: 'ai',
    icon: 'BrainCircuit',
    title: 'AI Health Intelligence',
    summary: 'Our proprietary models integrate all your data into a personalised longevity roadmap.',
    detailAnchor: 'services',
  },
]

export default services
