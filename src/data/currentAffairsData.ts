import { CurrentAffairItem } from '../types';

export const currentAffairsData: CurrentAffairItem[] = [
  {
    id: 'ca-nisar-deployment',
    title: 'NASA-ISRO Synthetic Aperture Radar (NISAR) Satellite Mission Final Integration',
    date: '2025-01-15',
    category: 'Science & Tech',
    source: 'ISRO Press Release / NASA JPL',
    sourceUrl: 'https://www.isro.gov.in/nisar_mission.html',
    lastVerified: '2026-02-10',
    sourceType: 'FACT',
    summary: 'The NASA-ISRO Synthetic Aperture Radar (NISAR) earth-observation satellite has undergone final acoustic and thermal vacuum integration at U.R. Rao Satellite Centre, Bengaluru. It carries the first dual-frequency L-band and S-band radar to map Earth\'s land and ice surfaces globally every 12 days.',
    keyDataPoints: [
      'Dual-frequency radar: L-band (24 cm wavelength from NASA) and S-band (9 cm wavelength from ISRO).',
      'Orbit: 747 km Sun-Synchronous LEO orbit with 12-meter deployable wire mesh reflector.',
      'Precision: Capable of detecting Earth surface displacements down to fractions of an inch (centimeter-scale accuracy).'
    ],
    staticLinker: {
      coreConcept: 'Active Microwave Remote Sensing & Dual-Frequency Synthetic Aperture Radar (SAR)',
      gsSyllabusTopic: 'Science and Technology - developments and their applications and effects in everyday life; Achievements of Indians in science & technology; indigenization of technology.',
      constitutionalOrLegalBasis: 'Article 51A(h) - Duty to develop scientific temper, humanism, and spirit of inquiry; Indian Space Policy 2023.',
      policyOrGovtScheme: 'Indian Space Policy 2023 / IN-SPACe international collaboration framework.',
      pyqRef: 'UPSC Prelims 2021: Remote sensing applications in agriculture and forest canopy; UPSC Mains 2016 GS-3: Space technology in disaster mitigation.',
      prelimsPracticePrompt: 'Which statement is correct regarding NISAR? 1. It utilizes both L-band and S-band radar. 2. It will operate in Geostationary Orbit. 3. It can penetrate cloud cover and vegetation.',
      mainsQuestionPrompt: 'Discuss the strategic, scientific, and disaster mitigation significance of the NISAR satellite mission. How does international cooperation in space technology enhance India’s geospatial capabilities?',
      diagramSuggestion: 'Flowchart: Dual-frequency Radar -> Penetration of forest canopy/ice sheets -> Ground deformation tracking -> Early disaster warning & Crop yield assessment.'
    }
  },
  {
    id: 'ca-ccts-carbon-market',
    title: 'MoEFCC & Bureau of Energy Efficiency (BEE) Rollout of Carbon Credit Trading Scheme (CCTS)',
    date: '2025-02-04',
    category: 'Environment',
    source: 'Press Information Bureau (PIB) / BEE Notification',
    sourceUrl: 'https://pib.gov.in',
    lastVerified: '2026-02-15',
    sourceType: 'GOVT_CLAIM',
    summary: 'The Ministry of Power and MoEFCC operationalized the detailed compliance and voluntary mechanisms under the Carbon Credit Trading Scheme (CCTS). High-emission obligated entities in steel, cement, pulp & paper, and thermal power are assigned greenhouse gas emission reduction targets (Greenhouse Gas Emission Intensity targets) for trading Carbon Credit Certificates (CCCs).',
    keyDataPoints: [
      'Each Carbon Credit Certificate (CCC) represents 1 metric tonne of CO2 equivalent (tCO2e) emissions avoided or removed.',
      'Governed by the National Steering Committee on Indian Carbon Market headed by Power & Environment Secretaries.',
      'Registry managed by Grid Controller of India Limited (Grid-India); trading conducted on power exchanges approved by CERC.'
    ],
    staticLinker: {
      coreConcept: 'Cap-and-Trade Market Instruments, Carbon Pricing & Article 6 of Paris Agreement',
      gsSyllabusTopic: 'Environment - Conservation, environmental pollution and degradation, environmental impact assessment; Indian Economy - Resource mobilization.',
      constitutionalOrLegalBasis: 'Energy Conservation (Amendment) Act, 2022; Article 48A (Protection and improvement of environment).',
      policyOrGovtScheme: 'Indian Carbon Market (ICM) & Perform, Achieve and Trade (PAT) transition scheme.',
      pyqRef: 'UPSC Prelims 2014 & 2018: "Carbon Credits and Certified Emission Reductions (CERs)"; UPSC Mains 2021 GS-3: COP26 Glasgow outcomes.',
      prelimsPracticePrompt: 'Under the Carbon Credit Trading Scheme (CCTS), who functions as the registry for tracking carbon credit issuance and transactions?',
      mainsQuestionPrompt: 'Evaluate the design and implementation challenges of India’s Carbon Credit Trading Scheme (CCTS). How can the market prevent greenwashing while preserving the competitiveness of MSMEs?',
      diagramSuggestion: 'Diagram: Obligated Entity -> Energy efficiency audit -> Surplus CCC generated -> Traded on Power Exchange -> Deficit Entity buys CCC -> Net industrial decarbonization.'
    }
  },
  {
    id: 'ca-fatf-india-evaluation',
    title: 'Financial Action Task Force (FATF) Adopts India’s 2024 Mutual Evaluation Report',
    date: '2024-06-28',
    category: 'Internal Security',
    source: 'FATF Plenary Outcome & Ministry of Finance',
    sourceUrl: 'https://www.fatf-gafi.org',
    lastVerified: '2026-01-20',
    sourceType: 'FACT',
    summary: 'The Financial Action Task Force (FATF) adopted India\'s 4th Mutual Evaluation Report at its Singapore Plenary, placing India in the highest performance category ("Regular Follow-Up"), a rating shared by only four other G20 nations. The report praised India\'s anti-money laundering (AML) and counter-terror financing (CFT) framework, including PMLA enforcement, digital payments tracking, and dismantling terror finance networks.',
    keyDataPoints: [
      'Category: "Regular Follow-Up" (highest tier; requires follow-up reporting only after 3 years).',
      'Over 90% compliance across the 40 FATF Recommendations on technical compliance.',
      'Noted high effectiveness of FIU-IND and operational integration of Jan Dhan-Aadhaar-Mobile (JAM) trinity.'
    ],
    staticLinker: {
      coreConcept: 'Money Laundering (Placement-Layering-Integration), Terror Financing & Transnational Financial Governance',
      gsSyllabusTopic: 'Internal Security - Money laundering and its prevention; Linkages of organized crime with terrorism; Security challenges and their management in border areas.',
      constitutionalOrLegalBasis: 'Prevention of Money Laundering Act (PMLA), 2002; Unlawful Activities (Prevention) Act (UAPA), 1967.',
      policyOrGovtScheme: 'Enforcement Directorate (ED) & Financial Intelligence Unit - India (FIU-IND) operational frameworks.',
      pyqRef: 'UPSC Mains 2018 GS-3: Money laundering cycle and PMLA measures; UPSC Mains 2021 GS-3: Terror financing through informal and digital channels.',
      prelimsPracticePrompt: 'Which international body maintains the "Grey List" (jurisdictions under increased monitoring) and "Black List" (high-risk jurisdictions call for action)?',
      mainsQuestionPrompt: 'Analyze the significance of India securing the "Regular Follow-Up" rating in the FATF Mutual Evaluation. What strategic gaps in non-profit oversight and Virtual Digital Assets (cryptocurrencies) still warrant vigilance?',
      diagramSuggestion: 'Flowchart: Illicit Proceeds -> Hawala/Crypto Layering -> FIU-IND Automated STR Flagging -> Enforcement Directorate Attachment -> PMLA Adjudicating Authority.'
    }
  },
  {
    id: 'ca-direct-seeding-rice',
    title: 'Scaling Direct Seeding of Rice (DSR) & Short Duration Paddy PR-126 in Northwest Plains',
    date: '2024-05-18',
    category: 'Agriculture',
    source: 'Punjab Agricultural University (PAU) & ICAR Bulletins',
    sourceUrl: 'https://www.icar.gov.in',
    lastVerified: '2026-01-10',
    sourceType: 'RESEARCH_FINDING',
    summary: 'Agricultural universities and ICAR have expanded field demonstrations of Direct Seeding of Rice (DSR) using "Tar-Wattar DSR" technique alongside short-duration varieties (PR-126). Unlike conventional puddled transplantation requiring 3-4 weeks in nurseries and standing water, DSR seeds are sown directly with tractor-driven seed drills, conserving 20-25% groundwater and slashing methane emissions by 30%.',
    keyDataPoints: [
      'Groundwater saving: 15-20% reduction in irrigation water (approx 3-4 lakh litres of water saved per acre).',
      'Labor cost savings: ₹3,000 - ₹4,000 per acre by bypassing manual paddy transplantation.',
      'Duration advantage: PR-126 matures in 93 days after transplanting (vs 130-145 days for Pusa-44), leaving 25-30 days buffer before wheat sowing, dramatically curbing stubble burning pressure.'
    ],
    staticLinker: {
      coreConcept: 'Climate-Smart Agriculture, Aerobic Rice Cultivation & Groundwater Conservation',
      gsSyllabusTopic: 'Major crops and cropping patterns in various parts of the country; Different types of irrigation and irrigation systems storage; E-technology in the aid of farmers.',
      constitutionalOrLegalBasis: 'Entry 14 of State List (Seventh Schedule) - Agriculture; PM Krishi Sinchayee Yojana (PMKSY) guidelines.',
      policyOrGovtScheme: 'Crop Diversification Programme (CDP) & In-situ Crop Residue Management (CRM) Scheme.',
      pyqRef: 'UPSC Prelims 2021: "System of Rice Intensification (SRI)"; UPSC Mains 2020 GS-3: How does direct seeding of rice conserve water and check air pollution?',
      prelimsPracticePrompt: 'How does Direct Seeding of Rice (DSR) differ from traditional puddle transplantation? Consider water use, methane emissions, and weed management.',
      mainsQuestionPrompt: 'The water-power-cereal nexus in North-Western India has reached ecological tipping points. Critically examine technological innovations like Direct Seeding of Rice (DSR) and short-duration crop cultivars in reconciling food security with aquifer replenishment.',
      diagramSuggestion: 'Comparative Matrix: Conventional Puddled Rice (standing water 40 days, high methane, labor intense) VS DSR (zero nursery, mechanical sowing, 20% water saving, early harvest).'
    }
  },
  {
    id: 'ca-vibrant-villages-infra',
    title: 'Vibrant Villages Programme (VVP) Accelerated Infrastructure Along Northern Borders',
    date: '2024-11-12',
    category: 'Internal Security',
    source: 'Ministry of Home Affairs / PIB',
    sourceUrl: 'https://pib.gov.in',
    lastVerified: '2026-02-18',
    sourceType: 'GOVT_CLAIM',
    summary: 'The Union Ministry of Home Affairs fast-tracked comprehensive development of 662 border villages across 19 districts in 4 states (Himachal Pradesh, Uttarakhand, Sikkim, Arunachal Pradesh) and 1 UT (Ladakh) bordering China. The scheme focuses on all-weather road connectivity, 4G telecom towers, clean drinking water, off-grid renewable energy, and promoting eco-tourism to arrest outbound migration.',
    keyDataPoints: [
      'Total Financial Outlay: ₹4,800 crore (including ₹2,500 crore dedicated exclusively for border road infrastructure).',
      'Scope: Comprehensive Village Action Plans (VAP) prepared at Gram Panchayat level.',
      'Strategic objective: Populated border habitations act as civilian eyes and ears for ITBP and Army against external encroachment.'
    ],
    staticLinker: {
      coreConcept: 'Border Infrastructure, Civil-Military Synergy & Reversing Border Depopulation',
      gsSyllabusTopic: 'Security challenges and their management in border areas; Linkages of organized crime with terrorism; Infrastructure: Energy, Ports, Roads, Airports, Railways.',
      constitutionalOrLegalBasis: 'Article 355 (Duty of the Union to protect States against external aggression and internal disturbance).',
      policyOrGovtScheme: 'Vibrant Villages Programme (VVP) & Border Area Development Programme (BADP).',
      pyqRef: 'UPSC Mains 2021 GS-3: Border infrastructure development and cross-border security challenges along LAC.',
      prelimsPracticePrompt: 'Which state/UT border areas are covered under the Vibrant Villages Programme (VVP)? Does it apply to the Pakistan border?',
      mainsQuestionPrompt: 'Empty border villages pose grave territorial defense risks. Analyze how the Vibrant Villages Programme integrates economic development, border tourism, and national security to strengthen India’s northern frontiers.',
      diagramSuggestion: 'Map/Framework: Border Habitats -> All-Weather Roads & 4G -> Livelihood & Border Tourism -> Local Civilian Presence -> Intelligence Sharing with ITBP/Army -> Secured LAC.'
    }
  }
];
