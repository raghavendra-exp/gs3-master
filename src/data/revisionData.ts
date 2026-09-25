export interface Flashcard {
  id: string;
  category: 'Concept' | 'Formula' | 'Scheme' | 'Species' | 'Convention' | 'Security Agency';
  question: string;
  answer: string;
  keyFact: string;
}

export interface MnemonicItem {
  id: string;
  topic: string;
  mnemonic: string;
  expandedMeaning: string[];
  explanation: string;
}

export const flashcardsData: Flashcard[] = [
  {
    id: 'fc-01',
    category: 'Formula',
    question: 'How is Fiscal Deficit calculated?',
    answer: 'Fiscal Deficit = Total Budget Expenditure - (Revenue Receipts + Non-Debt Capital Receipts)',
    keyFact: 'Non-debt capital receipts include recovery of past loans and disinvestment proceeds.'
  },
  {
    id: 'fc-02',
    category: 'Formula',
    question: 'What is Primary Deficit?',
    answer: 'Primary Deficit = Fiscal Deficit - Net Interest Payments',
    keyFact: 'Reflects current year borrowing requirement excluding legacy debt servicing obligations.'
  },
  {
    id: 'fc-03',
    category: 'Convention',
    question: 'What are the 3 Rio Conventions (1992 Earth Summit)?',
    answer: '1. UNFCCC (Climate Change), 2. CBD (Biological Diversity), 3. UNCCD (Desertification)',
    keyFact: 'All three emerged from the 1992 United Nations Conference on Environment and Development (UNCED) in Rio de Janeiro.'
  },
  {
    id: 'fc-04',
    category: 'Species',
    question: 'What is the IUCN and WPA status of Great Indian Bustard (GIB)?',
    answer: 'IUCN: Critically Endangered | WPA 1972: Schedule I | CITES: Appendix I',
    keyFact: 'Fewer than 150 birds survive in the wild, primarily in Desert National Park, Rajasthan.'
  },
  {
    id: 'fc-05',
    category: 'Security Agency',
    question: 'Which ministry exercises administrative control over Assam Rifles?',
    answer: 'Dual Control: Administrative control lies with Ministry of Home Affairs (MHA); Operational control lies with Ministry of Defence (Indian Army).',
    keyFact: 'Oldest paramilitary force of India, raised in 1835 as Cachar Levy; known as "Sentinels of the North East".'
  },
  {
    id: 'fc-06',
    category: 'Scheme',
    question: 'What is the core target of PM-KUSUM scheme?',
    answer: 'De-dieselization and solarization of agricultural pumps with 3 components (Decentralized solar plants, standalone solar pumps, and grid-connected solar pumps).',
    keyFact: 'Component C allows farmers to sell surplus solar power back to Discoms for extra income.'
  }
];

export const mnemonicsData: MnemonicItem[] = [
  {
    id: 'mnem-samadhan',
    topic: 'Anti-Naxal Operational Strategy',
    mnemonic: 'S - A - M - A - D - H - A - N',
    expandedMeaning: [
      'S: Smart Leadership',
      'A: Aggressive Strategy',
      'M: Motivation and Training',
      'A: Actionable Intelligence',
      'D: Dashboard Based KPIs',
      'H: Harnessing Technology',
      'A: Action plan for each theatre',
      'N: No access to financing (Choking terror funding)'
    ],
    explanation: 'Unveiled by the Ministry of Home Affairs (MHA) in 2017 as the comprehensive operational framework for security forces combating Left Wing Extremism.'
  },
  {
    id: 'mnem-sendai-priorities',
    topic: 'Sendai Framework 4 Priorities for Action (2015-2030)',
    mnemonic: 'U - G - I - B ("You Get It Better")',
    expandedMeaning: [
      'U: Understanding disaster risk',
      'G: Strengthening disaster risk Governance',
      'I: Investing in disaster risk reduction for resilience',
      'B: Enhancing disaster preparedness for effective response & to "Build Back Better"'
    ],
    explanation: 'The Sendai Framework outlines 4 specific Priorities for Action and 7 Global Targets to achieve substantial reduction of disaster risk and losses by 2030.'
  },
  {
    id: 'mnem-money-laundering',
    topic: '3 Stages of Money Laundering',
    mnemonic: 'P - L - I ("Please Launder Illicitly")',
    expandedMeaning: [
      'P: Placement (Introducing physical dirty cash into financial system)',
      'L: Layering (Complex series of transactions and transfers to obscure the audit trail)',
      'I: Integration (Re-entering cleaned funds into legitimate economy as real estate or luxury assets)'
    ],
    explanation: 'Universal standard recognized by Financial Action Task Force (FATF) and Enforcement Directorate (ED).'
  },
  {
    id: 'mnem-panchamrit',
    topic: 'India\'s 5 Climate Action Commitments (COP26 Glasgow)',
    mnemonic: '5 - 5 - 1 - 4 - 7 ("Fifty-Fifty, One, Four, Seven")',
    expandedMeaning: [
      '5: Reach 500 GW Non-fossil energy capacity by 2030',
      '5: Meet 50% of energy requirements from Renewable Energy by 2030',
      '1: Reduce total projected Carbon emissions by 1 Billion tonnes by 2030',
      '4: Reduce Carbon Intensity of economy by 45% by 2030 (over 2005 levels)',
      '7: Achieve target of Net-Zero emissions by 2070'
    ],
    explanation: 'The five nectar elements (Panchamrit) announced by the Prime Minister of India at the COP26 World Leaders Summit in Glasgow.'
  }
];
