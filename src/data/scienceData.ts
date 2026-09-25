import { TechPillar, SpaceMission } from '../types';

export const techPillars: TechPillar[] = [
  {
    id: 'tech-ai-dpi',
    title: 'Artificial Intelligence & Digital Public Infrastructure (DPI)',
    category: 'AI & Computing',
    whatIsIt: 'DPI refers to interoperable, open-source digital building blocks (Identity, Payments, Data Exchange) that enable societal-scale public and private services. AI adds cognitive intelligence over these digital rails.',
    howItWorks: 'DPI uses open APIs and protocol specifications (like Beckn for ONDC, UPI for NPCI). AI models process massive datasets generated across these rails to deliver predictive analytics, automated translation, and fraud detection.',
    corePrinciple: 'Open Architecture, Data Empowerment and Protection Architecture (DEPA), and Responsible/Trustworthy AI.',
    applications: [
      'UPI: Real-time mobile payments crossing 14+ billion transactions per month.',
      'ONDC: Democratizing e-commerce for small mom-and-pop retailers against platform monopolies.',
      'Bhashini: National AI language translation mission breaking linguistic barriers for public service delivery.',
      'Ayushman Bharat Digital Mission (ABDM): Longitudinal electronic health records linked to ABHA ID.'
    ],
    indianDevelopments: [
      'IndiaAI Mission approved with ₹10,372 crore budget to establish 10,000+ high-end GPUs compute infrastructure.',
      'Digital Personal Data Protection (DPDP) Act, 2023 enacted to protect individual digital privacy.',
      'Development of Sovereign Indic LLMs (BharatGPT, Sarvam AI, Hanooman).'
    ],
    advantages: [
      'Zero-cost or near-zero transaction fee financial inclusion.',
      'Plugs ghost beneficiaries in welfare schemes (Direct Benefit Transfer savings > ₹2.7 lakh crore).',
      'Scales without vendor lock-in due to open protocols.'
    ],
    limitationsAndRisks: [
      'Deepfakes, financial fraud, phishing, and non-consensual synthetic media.',
      'Algorithmic bias against marginalized dialects, accents, or facial features.',
      'Digital divide leaving senior citizens and rural poor without access.'
    ],
    ethicalConcerns: 'Mass state surveillance risk, automated decision-making without grievance redressal, right to privacy as fundamental right (Puttaswamy 2017).',
    economicAndSecurityRelevance: 'AI contributes to GDP productivity; weaponized AI and automated cyberattacks threaten critical infrastructure (power grids, banking).',
    currentAffairsLink: 'Global Partnership on Artificial Intelligence (GPAI) New Delhi Declaration & DPDP Rules rollout.',
    prelimsFacts: [
      'India Stack consists of 3 layers: Identity (Aadhaar), Payments (UPI), and Data Governance (DEPA / Account Aggregator).',
      'DPDP Act applies to processing of digital personal data within India and abroad if offering goods/services to Indian data principals.',
      'Data Protection Board of India adjudicates non-compliance with penalties up to ₹250 crore per breach.'
    ],
    mainsRelevance: 'Direct question in GS-3 on DPI as an instrument of inclusive growth, governance reforms, and AI safety framework.',
    source: 'MeitY, NITI Aayog National Strategy for AI & PIB'
  },
  {
    id: 'tech-biotech-crispr',
    title: 'Biotechnology: CRISPR-Cas9 & CAR-T Cell Therapy',
    category: 'Biotechnology',
    whatIsIt: 'CRISPR-Cas9 is a molecular gene-editing tool that acts as biochemical "scissors" allowing scientists to modify, delete, or insert specific DNA sequences with pinpoint accuracy.',
    howItWorks: 'A guide RNA (gRNA) directs the Cas9 endonuclease enzyme to a specific sequence in the genome. Cas9 makes a double-stranded cut; the cell\'s repair mechanism then incorporates the desired genetic modification.',
    corePrinciple: 'Site-directed nuclease (SDN) technology. India classifies genome edited organisms into SDN-1, SDN-2, and SDN-3.',
    applications: [
      'Therapeutics: Sickle Cell Anemia and Thalassemia gene therapy (Casgevy).',
      'Oncology: CAR-T (Chimeric Antigen Receptor T-cell) immunotherapy reprogramming patient T-cells to destroy cancer cells.',
      'Agriculture: Developing climate-resilient, drought-tolerant, and bio-fortified crops without inserting foreign DNA.'
    ],
    indianDevelopments: [
      'NexCAR19: India\'s first indigenous CAR-T cell therapy developed by IIT Bombay & Tata Memorial Centre (costs 1/10th of Western therapy).',
      'Exemption of SDN-1 and SDN-2 categories from stringent GMO rules under Rule 20 of 1989 Rules (Department of Biotechnology).',
      'Bio-E3 Policy (Biotechnology for Economy, Environment and Employment) approved by Union Cabinet in 2024.'
    ],
    advantages: [
      'Cures previously terminal monogenic genetic disorders at source.',
      'SDN-1 and SDN-2 do not introduce foreign foreign DNA (unlike transgenic GM crops), bypassing long regulatory delays.',
      'Scalable bio-manufacturing for biofuels and therapeutic enzymes.'
    ],
    limitationsAndRisks: [
      'Off-target cuts creating unintended mutations and genomic instability.',
      'Exorbitant clinical costs of cellular gene therapy.',
      'Somatic vs Germline editing boundary: Germline modifications alter future generations permanently.'
    ],
    ethicalConcerns: 'Designer babies, eugenics, unequal access favoring affluent classes, biosecurity risks from rogue synthetic pathogens.',
    economicAndSecurityRelevance: 'Bio-economy targeted to reach $300 billion by 2030; dual-use biotechnology poses biowarfare and biosecurity threats.',
    currentAffairsLink: 'Launch of National Sickle Cell Anaemia Elimination Mission (targeting eradication by 2047) utilizing genetic screening.',
    prelimsFacts: [
      'Nobel Prize in Chemistry 2020 awarded to Emmanuelle Charpentier and Jennifer Doudna for CRISPR-Cas9.',
      'GEAC (Genetic Engineering Appraisal Committee) functions under MoEFCC, not Ministry of Science & Tech.',
      'SDN-1 and SDN-2 edits are non-transgenic; SDN-3 involves introduction of foreign gene and requires full GEAC clearance.'
    ],
    mainsRelevance: 'GS-3: Applications of biotechnology in health and agriculture, regulatory hurdles, Bio-E3 policy.',
    source: 'Department of Biotechnology (DBT), ICMR & Nature'
  },
  {
    id: 'tech-quantum-semiconductors',
    title: 'Quantum Computing & Semiconductor Fab Ecosystem',
    category: 'Quantum & Semiconductors',
    whatIsIt: 'Quantum computing exploits principles of quantum mechanics (superposition and entanglement) using qubits to perform calculations exponentially faster than classical supercomputers. Semiconductors are the microscopic hardware brains driving all computation.',
    howItWorks: 'Unlike classical bits (0 or 1), a qubit exists in a superposition of both states simultaneously. Semiconductor fabrication etches billions of nanometer-scale transistors onto silicon wafers using extreme ultraviolet (EUV) photolithography.',
    corePrinciple: 'Quantum Superposition, Entanglement, Quantum Tunneling, Moore\'s Law, and Nanoscale Photolithography.',
    applications: [
      'Cryptography: Quantum Key Distribution (QKD) enabling unbreakable military communication.',
      'Drug Discovery: Simulating molecular docking and protein folding in seconds.',
      'Semiconductors: Essential for 5G/6G base stations, electric vehicles, defence missiles, and AI data centres.'
    ],
    indianDevelopments: [
      'National Quantum Mission (NQM) launched with ₹6,003 crore outlay to develop 50-1000 physical qubits in 8 years.',
      'India Semiconductor Mission (ISM) with ₹76,000 crore incentive package (Tata-PSMC Fab at Dholera, Micron ATMP at Sanand, CG Semi at Sanand).',
      'DRDO & IIT Delhi successfully demonstrated Quantum Key Distribution across 100+ km fiber link.'
    ],
    advantages: [
      'Strategic autonomy from global semiconductor choke points (Taiwan Strait, ASML, TSMC).',
      'Transforms financial portfolio optimization, weather forecasting, and logistics routing.'
    ],
    limitationsAndRisks: [
      'Qubit decoherence: Qubits lose quantum state due to thermal noise; requires near absolute zero (-273°C) cryogenic cooling.',
      'Post-Quantum Cryptography: Shor\'s algorithm on quantum computers can break modern RSA/ECC public-key encryption.',
      'Semiconductor fabs require millions of gallons of ultra-pure water and uninterrupted power daily.'
    ],
    ethicalConcerns: 'Breakdown of global banking security if quantum decryption is monopolized by one superpower.',
    economicAndSecurityRelevance: 'Semiconductors are the new oil of the 21st century. India imports $50B+ in electronic components.',
    currentAffairsLink: 'Groundbreaking of India\'s first commercial semiconductor fabrication plant in Dholera, Gujarat.',
    prelimsFacts: [
      'NQM covers four thematic hubs: Quantum Computing, Quantum Communication, Quantum Sensing & Metrology, and Quantum Materials.',
      'Silicon is a semiconductor with bandgap of ~1.1 eV; Gallium Nitride (GaN) and Silicon Carbide (SiC) are wide-bandgap semiconductors for high power.'
    ],
    mainsRelevance: 'GS-3: Geopolitics of technology, Semiconductor supply chains, Quad Critical Tech initiatives, and National Quantum Mission.',
    source: 'DST, Ministry of Electronics & IT (MeitY) & ISM'
  },
  {
    id: 'tech-ipr-patents',
    title: 'Intellectual Property Rights (IPR): Section 3(d) & Compulsory Licensing',
    category: 'IPR',
    whatIsIt: 'IPR provides legal monopoly rights to creators for inventions (Patents), creative works (Copyright), brand symbols (Trademarks), and regional heritage (Geographical Indications). India balances innovation incentives with public health safeguards.',
    howItWorks: 'Under the Indian Patents Act, 1970, a patent is granted for 20 years for a new product/process involving an inventive step and industrial application. Section 3 lists non-patentable inventions.',
    corePrinciple: 'TRIPS Agreement compliance with public interest flexibilities (Doha Declaration on TRIPS and Public Health, 2001).',
    applications: [
      'Pharmaceutical affordability: Prevents multinational pharma companies from artificially extending drug monopolies.',
      'Compulsory Licensing: Enables domestic generic drugmakers to manufacture life-saving drugs at affordable rates during health emergencies.',
      'Geographical Indications (GI): Protects indigenous products like Darjeeling Tea, Basmati, Pochampally Ikat, Kashmiri Saffron.'
    ],
    indianDevelopments: [
      'Landmark Novartis v. Union of India (2013): Supreme Court upheld Section 3(d), rejecting patent for anti-cancer drug Glivec.',
      'First Compulsory License granted in 2012 to Natco Pharma for Bayer\'s kidney/liver cancer drug Nexavar, reducing price from ₹2.8 lakh to ₹8,800/month.',
      'National IPR Policy 2016 administered by DPIIT with motto "Creative India; Innovative India".'
    ],
    advantages: [
      'Positions India as the "Pharmacy of the Developing World", supplying 20% of global generic medicines and 60% of vaccines.',
      'Protects traditional knowledge through CSIR\'s Traditional Knowledge Digital Library (TKDL).'
    ],
    limitationsAndRisks: [
      'Constant friction with United States Trade Representative (USTR) Special 301 Report placing India on Priority Watch List.',
      'Patent examination backlogs in Indian Patent Office (IPO).'
    ],
    ethicalConcerns: 'Human right to life and affordable medicines vs corporate incentive to invest billions in R&D.',
    economicAndSecurityRelevance: 'Critical for biomedical sovereignty, biosecurity, and technology transfer from the Global North.',
    currentAffairsLink: 'India-South Africa joint proposal at WTO for TRIPS waiver on COVID-19 medical tools and subsequent discussions.',
    prelimsFacts: [
      'Section 3(d) bars patenting of a new form of a known substance unless it demonstrates significantly enhanced efficacy (prevents Evergreening).',
      'Section 84 allows application for Compulsory License 3 years after patent grant if reasonable public requirements are not satisfied.',
      'Controller General of Patents, Designs and Trade Marks (CGPDTM) operates under DPIIT, Ministry of Commerce & Industry.'
    ],
    mainsRelevance: 'Frequent question in GS-3: IPR issues, TRIPS flexibilities, Evergreening vs innovation, generic pharma industry.',
    source: 'Indian Patents Act 1970, DPIIT & Supreme Court Rulings'
  }
];

export const spaceMissions: SpaceMission[] = [
  {
    id: 'mission-chandrayaan-3',
    name: 'Chandrayaan-3',
    agency: 'ISRO',
    launchYear: '2023',
    launchVehicle: 'LVM3-M4',
    orbit: 'Lunar Orbit & Soft Landing at 69.37° S (Shiv Shakti Point)',
    objective: 'Demonstrate end-to-end safe soft-landing on lunar south polar region and roving capability.',
    payloads: ['Vikram Lander: ChaSTE, RAMBHA-LP, ILSA', 'Pragyan Rover: APXS, LIBS', 'Propulsion Module: SHAPE'],
    significance: 'India became the 1st country to land near the Moon\'s south pole and the 4th country overall to achieve a lunar soft landing. Declared August 23 as National Space Day.',
    status: 'Completed',
    source: 'ISRO Official Mission Overview'
  },
  {
    id: 'mission-aditya-l1',
    name: 'Aditya-L1',
    agency: 'ISRO',
    launchYear: '2023',
    launchVehicle: 'PSLV-C57 (XL)',
    orbit: 'Halo Orbit around Sun-Earth Lagrange Point 1 (L1) ~1.5 million km from Earth',
    objective: 'Continuous uninterrupted observation of the Sun, solar corona, chromosphere, coronal mass ejections (CMEs), and space weather.',
    payloads: ['VELC (Visible Emission Line Coronagraph)', 'SUIT (Solar Ultraviolet Imaging Telescope)', 'ASPEX', 'PAPA', 'SoLEXS', 'HEL1OS', 'Magnetometer'],
    significance: 'India\'s first dedicated solar observatory space mission; provides early warning for solar storms disrupting satellites and power grids.',
    status: 'Operational',
    source: 'ISRO Aditya-L1 Mission Report'
  },
  {
    id: 'mission-gaganyaan',
    name: 'Gaganyaan Programme',
    agency: 'ISRO',
    launchYear: '2025-2026',
    launchVehicle: 'Human-Rated LVM3 (HLVM3)',
    orbit: 'Low Earth Orbit (LEO) at ~400 km for 3 days',
    objective: 'Demonstrate indigenous human spaceflight capability by sending a crew of 3 astronauts to LEO and bringing them back safely with a sea landing in Indian waters.',
    payloads: ['Crew Module (CM)', 'Service Module (SM)', 'Crew Escape System (CES)', 'Vyommitra (Half-humanoid robot)'],
    significance: 'Establishes India as 4th nation with human spaceflight capability (after Russia, USA, China); precursor to Bharatiya Antariksh Station (BAS by 2035) and Moon landing (by 2040).',
    status: 'Upcoming',
    source: 'ISRO Gaganyaan Mission Directorate & PIB'
  },
  {
    id: 'mission-nisar',
    name: 'NISAR (NASA-ISRO Synthetic Aperture Radar)',
    agency: 'NASA & ISRO Joint Collaboration',
    launchYear: '2025',
    launchVehicle: 'GSLV Mk II',
    orbit: 'Sun-synchronous Polar Orbit (LEO, 747 km)',
    objective: 'Global mapping of Earth surface changes, tectonic plate movements, glacier melt rates, biomass changes, and natural hazard management.',
    payloads: ['L-band Radar (NASA JPL)', 'S-band Radar (ISRO SAC)', '12-meter deployable mesh reflector antenna'],
    significance: 'First satellite mission to use dual-frequency Synthetic Aperture Radar (L-band and S-band); provides all-weather, day-and-night imaging with sub-centimeter deformation sensitivity.',
    status: 'Upcoming',
    source: 'NASA-JPL & ISRO Joint Mission Brief'
  }
];
