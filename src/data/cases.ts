import type { CaseStudy } from '@/types'

const cases: CaseStudy[] = [
  {
    id: 'pancreatic-cancer',
    title: 'Early Detection Saves Lives',
    summary: 'A routine Health Intelligence Exam detected stage 1 pancreatic cancer — one of the hardest cancers to find early.',
    content:
      'A 58-year-old executive with no symptoms underwent our comprehensive imaging protocol. Our AI flagged a 7mm lesion in the pancreas head. Subsequent biopsy confirmed stage 1 adenocarcinoma. With surgical resection, the patient is now five years cancer-free. Without early detection, this cancer is typically diagnosed at stage 4, where survival rates drop below 3%.',
    metrics: [
      { label: 'Stage at detection', value: 'Stage 1' },
      { label: '5-year survival (early)', value: '>30%' },
      { label: 'Without screening', value: 'Stage 4' },
    ],
    image: { src: '/images/cases/case-1.jpg', alt: 'Medical imaging results' },
    publishedAt: '2024-03-15',
  },
  {
    id: 'cardiac-risk',
    title: 'Reversing Cardiac Risk Before a Heart Attack',
    summary: 'Genetic markers identified an elevated ASCVD risk, enabling preventive intervention 10 years before predicted onset.',
    content:
      'Whole genome sequencing revealed a rare PCSK9 variant associated with familial hypercholesterolaemia in a 42-year-old woman. Combined with lipid panel and coronary calcium scoring, her 10-year cardiac event risk was 28%. An aggressive preventive protocol — medication, dietary intervention, and quarterly monitoring — reduced that risk to 6% within 18 months.',
    metrics: [
      { label: 'Initial 10-yr risk', value: '28%' },
      { label: 'Risk after intervention', value: '6%' },
      { label: 'Reduction', value: '79%' },
    ],
    image: { src: '/images/cases/case-2.jpg', alt: 'Cardiac risk assessment' },
    publishedAt: '2024-07-22',
  },
]

export default cases
