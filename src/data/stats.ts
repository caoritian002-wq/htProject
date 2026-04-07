import type { StatItem } from '@/types'

const stats: StatItem[] = [
  {
    id: 'genomes',
    value: 50000,
    suffix: '+',
    label: 'Genomes Sequenced',
    duration: 2000,
  },
  {
    id: 'papers',
    value: 150,
    suffix: '+',
    label: 'Published Papers',
    duration: 1800,
  },
  {
    id: 'cancers',
    value: 12,
    suffix: '',
    label: 'Cancer Types Detected Early',
    duration: 1600,
  },
  {
    id: 'partners',
    value: 30,
    suffix: '+',
    label: 'Global Partners',
    duration: 1500,
  },
]

export default stats
