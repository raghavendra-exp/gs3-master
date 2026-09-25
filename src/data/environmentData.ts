import { SpeciesProfile, EnvironmentalConvention } from '../types';

export const speciesDatabase: SpeciesProfile[] = [
  {
    id: 'spec-great-indian-bustard',
    commonName: 'Great Indian Bustard (GIB)',
    scientificName: 'Ardeotis nigriceps',
    taxonomy: 'Aves (Bird) - Otididae family',
    habitat: 'Arid and semi-arid grasslands, open thorn scrub, agricultural plains.',
    distributionInIndia: ['Thar Desert (Rajasthan - Desert National Park)', 'Kutch (Gujarat)', 'Small populations in Maharashtra, Andhra Pradesh, Karnataka'],
    iucnStatus: 'Critically Endangered',
    wpaSchedule: 'Schedule I',
    citesAppendix: 'Appendix I',
    threats: [
      'High-voltage overhead power transmission lines (collision risk due to poor frontal vision ~15% annual mortality).',
      'Habitat loss due to renewable energy (solar/wind parks) and agricultural intensification.',
      'Predation of ground nests and eggs by feral dogs and pigs.'
    ],
    conservationProjects: 'Project Great Indian Bustard (Rajasthan), Conservation breeding facility at Sam (Jaisalmer), Supreme Court Committee for power line undergrounding.',
    indianSignificance: 'Flagship bird of Indian grasslands; State bird of Rajasthan. Surviving global wild population is fewer than 150 birds.',
    recentDevelopments: 'Supreme Court landmark ruling in M.K. Ranjitsinh v. Union of India (March 2024): Recognized a Fundamental Right to be Free from Adverse Effects of Climate Change under Articles 14 & 21 while balancing power transmission and GIB protection.',
    prelimsFacts: [
      'Endemic to Indian subcontinent; omnivorous (eats grass seeds, locusts, beetles, snakes).',
      'Lays only 1 egg per year directly on bare ground without making a nest.',
      'SC constituted an expert committee to review feasibility of underground cables in priority vs potential bustard zones.'
    ],
    source: 'Wildlife Institute of India (WII) & MoEFCC'
  },
  {
    id: 'spec-bengal-tiger',
    commonName: 'Royal Bengal Tiger',
    scientificName: 'Panthera tigris',
    taxonomy: 'Mammalia (Carnivora - Felidae)',
    habitat: 'Tropical moist evergreen forests, dry deciduous forests, mangrove swamps (Sundarbans), high-altitude alpine meadows.',
    distributionInIndia: ['55+ Tiger Reserves spread across 18 states in 5 major landscapes (Shivalik-Gangetic, Central India, Western Ghats, Eastern Ghats, North East).'],
    iucnStatus: 'Endangered',
    wpaSchedule: 'Schedule I',
    citesAppendix: 'Appendix I',
    threats: ['Poaching for skin and body parts', 'Linear infrastructure fragmentation (highways, railways)', 'Human-wildlife conflict and prey depletion.'],
    conservationProjects: 'Project Tiger (launched in 1973; completed 50 years in 2023), National Tiger Conservation Authority (NTCA - statutory body under WPA 1972).',
    indianSignificance: 'National Animal of India. India holds ~75% of global wild tiger population (3,682 tigers estimated in 5th cycle of All India Tiger Estimation).',
    recentDevelopments: 'Launch of International Big Cat Alliance (IBCA) initiated by India to protect 7 major big cats (Tiger, Lion, Leopard, Snow Leopard, Cheetah, Jaguar, Puma).',
    prelimsFacts: [
      'NTCA was given statutory backing via 2006 amendment to Wildlife (Protection) Act, 1972.',
      'Madhya Pradesh has highest tiger population (785), followed by Karnataka (563) and Uttarakhand (560).',
      'M-STrIPES (Monitoring System for Tigers - Intensive Protection and Ecological Status) mobile app used for digital patrolling.'
    ],
    source: 'Status of Tigers in India 2022 (NTCA / WII) & MoEFCC'
  },
  {
    id: 'spec-gangetic-dolphin',
    commonName: 'South Asian River Dolphin (Gangetic Dolphin)',
    scientificName: 'Platanista gangetica',
    taxonomy: 'Mammalia (Cetacea - Platanistidae)',
    habitat: 'Freshwater river systems of the Ganga, Brahmaputra, Karnaphuli, and Megna rivers and their tributaries.',
    distributionInIndia: ['Assam, Uttar Pradesh, Bihar, West Bengal (Vikramshila Dolphin Sanctuary in Bhagalpur, Bihar is India\'s only dedicated dolphin sanctuary).'],
    iucnStatus: 'Endangered',
    wpaSchedule: 'Schedule I',
    citesAppendix: 'Appendix I',
    threats: [
      'Construction of barrages and dams (Farakka Barrage) restricting migration and fragmenting populations.',
      'Accidental entanglement in nylon gillnets by fishermen (bycatch).',
      'River pollution, sand mining, and underwater acoustic noise from mechanized vessel traffic (National Waterway 1).'
    ],
    conservationProjects: 'Project Dolphin (launched on lines of Project Tiger), National Aquatic Animal of India (declared in 2009), National Dolphin Day (October 5).',
    indianSignificance: 'Apex predator and indicator species for the health of freshwater river ecosystems; practically blind and navigates via echolocation (ultrasonic clicks).',
    recentDevelopments: 'Comprehensive river-bed acoustic monitoring and rescue protocol established under Namami Gange mission.',
    prelimsFacts: [
      'Locally called "Susu" due to the sound it makes while surfacing to breathe air.',
      'Cannot breathe underwater; must surface every 30 to 120 seconds.',
      'Indus River Dolphin (Platanista minor) is found in India only in the Beas River, Punjab.'
    ],
    source: 'National Mission for Clean Ganga (NMCG) & WII'
  },
  {
    id: 'spec-snow-leopard',
    commonName: 'Snow Leopard (Ghost of the Mountains)',
    scientificName: 'Panthera uncia',
    taxonomy: 'Mammalia (Carnivora - Felidae)',
    habitat: 'High-altitude alpine and subalpine zones (3,000 m to 4,500 m) in rugged, rocky mountainous terrain.',
    distributionInIndia: ['Ladakh (highest population ~477), Himachal Pradesh, Uttarakhand, Sikkim, Arunachal Pradesh.'],
    iucnStatus: 'Vulnerable',
    wpaSchedule: 'Schedule I',
    citesAppendix: 'Appendix I',
    threats: ['Retaliatory killing by pastoralists for livestock predation', 'Depletion of wild prey base (Blue sheep / Bharal, Asiatic ibex)', 'Climate warming pushing tree line higher.'],
    conservationProjects: 'Project Snow Leopard (launched 2009), SECURE Himalaya (GEF-UNDP partnership), SPAI (Snow Leopard Population Assessment in India).',
    indianSignificance: 'Top predator regulating high-altitude mountain ecosystems of the Trans-Himalayan region.',
    recentDevelopments: 'First-ever scientific census under SPAI revealed India hosts 718 snow leopards (Ladakh alone harbors 477).',
    prelimsFacts: [
      'Hemis National Park (Ladakh) is famous as the snow leopard capital of the world.',
      'Does not roar due to non-functioning vocal cords; communicates via mews, growls, and chuffs.',
      'Protected under Global Snow Leopard and Ecosystem Protection Program (GSLEP) Bishkek Declaration.'
    ],
    source: 'MoEFCC SPAI Report & Wildlife Institute of India'
  }
];

export const environmentalConventions: EnvironmentalConvention[] = [
  {
    id: 'conv-unfccc-paris',
    name: 'UNFCCC & Paris Agreement (COP21, 2015)',
    yearAdopted: 2015,
    purpose: 'Legally binding international treaty to hold global average temperature increase to well below 2°C above pre-industrial levels and pursue efforts to limit it to 1.5°C.',
    indiasRole: 'Original signatory and ratification champion. Led the International Solar Alliance (ISA) alongside France and championed Mission LiFE (Lifestyle for Environment).',
    keyProvisions: [
      'Nationally Determined Contributions (NDCs): Nationally self-determined climate action pledges updated every 5 years.',
      'Article 6: Carbon market mechanisms (Article 6.2 bilateral trading & Article 6.4 multilateral crediting mechanism).',
      'Common But Differentiated Responsibilities and Respective Capabilities (CBDR-RC) in light of different national circumstances.',
      'Loss and Damage Fund operationalized at COP28 (UAE) to compensate vulnerable developing nations.'
    ],
    currentRelevance: 'Focus has shifted to NCQG (New Collective Quantified Goal) on climate finance replacing the obsolete $100 billion/year commitment from developed countries.',
    prelimsFacts: [
      'Kyoto Protocol had legally binding emission targets for Annex I countries; Paris Agreement relies on bottom-up voluntary NDCs for ALL countries.',
      'India updated its NDC in 2022: 45% emissions intensity reduction by 2030, 50% non-fossil electric capacity by 2030, 2.5-3 billion tonnes CO2e carbon sink, and Net Zero by 2070.'
    ],
    source: 'UNFCCC Secretariat & MoEFCC'
  },
  {
    id: 'conv-cbd-kunming-montreal',
    name: 'Convention on Biological Diversity (CBD) & Kunming-Montreal GBF',
    yearAdopted: 1992,
    purpose: 'Conservation of biological diversity, sustainable use of its components, and fair and equitable sharing of benefits arising from genetic resources.',
    indiasRole: 'Enacted the Biological Diversity Act, 2002 (amended in 2023) and created a 3-tier statutory framework: NBA (National), SBB (State), and BMC (Biodiversity Management Committees).',
    keyProvisions: [
      'Kunming-Montreal Global Biodiversity Framework (GBF) adopted at COP15 (2022) with 4 global goals and 23 targets for 2030.',
      'Target 3 ("30x30"): Protect and conserve at least 30% of global land, inland waters, and coastal/marine areas by 2030.',
      'Target 19: Mobilize at least $200 billion per year in domestic and international biodiversity finance.',
      'Protocols: Cartagena Protocol on Biosafety (2000) and Nagoya Protocol on Access and Benefit Sharing (ABS, 2010).'
    ],
    currentRelevance: 'Biodiversity Act 2023 amendment decentralized access for AYUSH practitioners and decriminalized offenses, attracting civil society debate on ABS enforcement.',
    prelimsFacts: [
      'People\'s Biodiversity Register (PBR) is documented at Panchayat level by local Biodiversity Management Committees.',
      'National Biodiversity Authority (NBA) headquarters is in Chennai, Tamil Nadu.',
      'Cartagena Protocol deals with Living Modified Organisms (LMOs); Nagoya Protocol deals with Access and Benefit Sharing (ABS).'
    ],
    source: 'CBD Secretariat & National Biodiversity Authority'
  },
  {
    id: 'conv-ramsar-wetlands',
    name: 'Ramsar Convention on Wetlands',
    yearAdopted: 1971,
    purpose: 'Intergovernmental treaty for the conservation and wise use of wetlands and their resources across the globe.',
    indiasRole: 'Designated 85+ wetlands of international importance covering over 1.35 million hectares (highest in South Asia).',
    keyProvisions: [
      'Wise Use Concept: Maintenance of ecological character within context of sustainable development.',
      'Montreux Record: Register of wetland sites on the Ramsar List where changes in ecological character have occurred, are occurring, or are likely to occur due to technological developments, pollution, or human interference.',
      'Amrit Dharohar scheme launched by Government of India in 2023 to promote conservation of Ramsar sites through local community participation.'
    ],
    currentRelevance: 'Rapid urbanization has encroached on urban wetland sponges (e.g. Bellandur lake in Bengaluru, Pallikaranai marsh in Chennai), amplifying urban flood vulnerability.',
    prelimsFacts: [
      'Currently two Indian sites are on the Montreux Record: Keoladeo National Park (Rajasthan) and Loktak Lake (Manipur).',
      'Chilika Lake (Odisha) was placed on the Montreux Record in 1993 but removed in 2002 after successful ecological restoration.',
      'Tamil Nadu has the maximum number of Ramsar sites in India (16), followed by Uttar Pradesh (10).'
    ],
    source: 'Ramsar Convention Secretariat & MoEFCC'
  }
];

export const eiaLifecycleSteps = [
  {
    step: '1. Screening',
    description: 'Determines whether a proposed project requires an Environmental Clearance (EC) based on its scale, investment, and location.',
    subcategories: 'Category A projects (appraised at Centre by EAC) vs Category B projects (appraised at State by SEIAA/SEAC; B1 requires full EIA, B2 is exempt).'
  },
  {
    step: '2. Scoping',
    description: 'Formulates comprehensive Terms of Reference (ToR) detailing baseline data collection, environmental parameters to monitor, and impact assessment scope.',
    subcategories: 'Standard ToRs vs Project-specific ToRs issued by Expert Appraisal Committee (EAC).'
  },
  {
    step: '3. Baseline Data Collection & EIA Report',
    description: 'Accredited consultant agency conducts 3-season air, water, soil, noise, socio-economic and biodiversity baseline studies and prepares Draft EIA Report.'
  },
  {
    step: '4. Public Consultation',
    description: 'Statutory public hearing organized by State Pollution Control Board (SPCB) at project site to record objections and local community concerns.',
    subcategories: 'Exemptions: Defence/national security projects, linear border projects within 100 km of LAC/LoC, industrial park units.'
  },
  {
    step: '5. Appraisal & Environmental Clearance (EC)',
    description: 'EAC/SEAC scrutinizes the Final EIA report and public hearing proceedings to recommend grant or rejection of EC with specific mitigation conditions.'
  },
  {
    step: '6. Post-Clearance Compliance & Monitoring',
    description: 'Project proponent must submit half-yearly compliance reports. Regional Offices of MoEFCC conduct inspections and third-party green audits.'
  }
];
