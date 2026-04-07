import type { Partner } from '@/types'

const partners: Partner[] = [
  {
    id: 'mgh',
    name: 'Massachusetts General Hospital',
    logo: { src: '/images/partners/mgh.svg', alt: 'MGH', width: 120, height: 40 },
    url: 'https://www.massgeneral.org',
  },
  {
    id: 'siemens',
    name: 'Siemens Healthineers',
    logo: { src: '/images/partners/siemens.svg', alt: 'Siemens', width: 120, height: 40 },
  },
  {
    id: 'illumina',
    name: 'Illumina',
    logo: { src: '/images/partners/illumina.svg', alt: 'Illumina', width: 120, height: 40 },
  },
  {
    id: 'ibm',
    name: 'IBM Watson Health',
    logo: { src: '/images/partners/ibm.svg', alt: 'IBM', width: 120, height: 40 },
  },
  {
    id: 'stanford',
    name: 'Stanford Medicine',
    logo: { src: '/images/partners/stanford.svg', alt: 'Stanford', width: 120, height: 40 },
  },
]

export default partners
