import { SecurityThreat, SecurityAgency } from '../types';

export const securityThreats: SecurityThreat[] = [
  {
    id: 'threat-lwe-naxalism',
    domain: 'Left Wing Extremism',
    nature: 'Maoist insurgency aiming to overthrow the parliamentary democratic state through protracted people\'s war (armed guerrilla warfare by PLGA - People\'s Liberation Guerrilla Army).',
    rootCauses: [
      'Historical alienation and dispossession of tribal lands (Jal, Jungle, Jameen).',
      'Governance and development deficit in remote forested interiors.',
      'Displacement caused by large mining and industrial projects without equitable Rehabilitation & Resettlement (R&R).'
    ],
    geographicalSpread: [
      'Historically known as the "Red Corridor" (Pashupati to Tirupati).',
      'Drastically shrunk from 126 districts in 2014 to under 38 districts in 2024, concentrated mainly in Bastar division of Chhattisgarh (Sukma, Bijapur, Dantewada, Narayanpur), and border tri-junctions of Odisha, Maharashtra, and Jharkhand.'
    ],
    modusOperandi: [
      'Ambush attacks using Improvised Explosive Devices (IEDs) targeting security forces.',
      'Extortion from contractors, tendu leaf traders, and mining operators ("revolutionary taxes").',
      'Tactical Counter Offensive Campaigns (TCOC) launched during summer months.'
    ],
    stateAndNonStateActors: 'CPI (Maoist) Central Committee and its armed wing PLGA; supported by frontal urban mass organisations.',
    govtResponseAndFramework: [
      'National Policy and Action Plan to address LWE (2015): Holistic two-pronged approach uniting Security and Development.',
      'SAMADHAN Doctrine: S-Smart Leadership, A-Aggressive Strategy, M-Motivation & Training, A-Actionable Intelligence, D-Dashboard Based KPIs, H-Harnessing Technology, A-Action plan for each theatre, N-No access to financing.',
      'Development push: Road Requirement Plan (RRP) building 12,000+ km roads, 4,000+ mobile telecom towers, Eklavya Model Residential Schools (EMRS), and opening bank branches/ATMs.'
    ],
    technologyCountermeasures: [
      'Unmanned Aerial Vehicles (UAVs / Drones) for real-time aerial surveillance over dense Sal forest canopies.',
      'Mine Protected Vehicles (MPVs) and Ground Penetrating Radar (GPR) to detect buried pressure-plate IEDs.',
      'Satellite-based secure communication terminals for CAPF operating bases.'
    ],
    criticalChallenges: [
      'Tactical knowledge of inhospitable terrain by local insurgent cadres.',
      'Civilian casualties during cross-fire and threat to surrendered cadres.',
      'Ideological penetration in urban educational and legal circles ("Urban Naxals" debate).'
    ],
    wayForward: [
      'Sustained operational dominance by CoBRA (CRPF) combined with winning hearts and minds (Civic Action Programmes).',
      'Effective implementation of Panchayats (Extension to Scheduled Areas) Act (PESA 1996) and Forest Rights Act (FRA 2006) to grant community forest rights.',
      'Transparent surrender and rehabilitation packages offering vocational training and dignified reintegration.'
    ]
  },
  {
    id: 'threat-cybersecurity-cii',
    domain: 'Cybersecurity',
    nature: 'State-sponsored cyber espionage, advanced persistent threats (APTs), financial ransomware, deepfakes, and attacks on Critical Information Infrastructure (CII).',
    rootCauses: [
      'Rapid digital penetration (UPI, cloud services, smart grid) without commensurate cyber hygiene among users.',
      'High dependence on imported hardware (chips, routers, servers) with potential hidden backdoors.',
      'Anonymity provided by Dark Web, bulletproof hosting, and privacy coins (Monero) for ransom payment.'
    ],
    geographicalSpread: ['Pan-India digital footprint; threat actors operating from safe harbors in China, Russia, Pakistan, North Korea.'],
    modusOperandi: [
      'Ransomware encrypting critical databases (e.g. AIIMS Delhi hospital server attack 2022 disabling 3-4 crore patient records for weeks).',
      'Spear-phishing emails targeting military and diplomatic personnel with Trojan malware.',
      'Distributed Denial of Service (DDoS) overwhelming government portals and financial switchboards.'
    ],
    stateAndNonStateActors: 'State-backed APT groups (e.g. APT41, RedEcho) collaborating with decentralized cybercriminal syndicates.',
    govtResponseAndFramework: [
      'National Critical Information Infrastructure Protection Centre (NCIIPC) established under Section 70A of Information Technology Act, 2000.',
      'Indian Computer Emergency Response Team (CERT-In) issuing mandatory 6-hour cybersecurity incident reporting directions.',
      'Indian Cybercrime Coordination Centre (I4C) under MHA operating the 1930 national helpline for citizen cyber fraud.',
      'National Cyber Coordination Centre (NCCC) for multi-agency real-time metadata analysis.'
    ],
    technologyCountermeasures: [
      'Deploying AI-driven Security Information and Event Management (SIEM) systems for automated anomaly detection.',
      'Cyber Swachhta Kendra (Botnet Cleaning and Malware Analysis Centre) offering free desktop security tools.',
      'Quantum Key Distribution (QKD) pilot networks for military and strategic communications.'
    ],
    criticalChallenges: [
      'Severe shortage of certified cybersecurity professionals in public sector.',
      'Attribution problem: Determining whether an attack is state-sponsored or rogue individual.',
      'Jurisdictional limits: Extradition of foreign hackers is virtually impossible.'
    ],
    wayForward: [
      'Adopting a "Zero Trust" architecture across all government and defence data pipelines.',
      'Mandatory indigenous security testing and Common Criteria certification for all imported telecom gear.',
      'Active participation in formulating a binding UN Cybercrime Treaty while protecting privacy rights.'
    ]
  },
  {
    id: 'threat-money-laundering',
    domain: 'Organised Crime & Hawala',
    nature: 'The process of converting illicit funds derived from criminal activities (narcotics, corruption, illegal arms trade) into ostensibly clean legal assets.',
    rootCauses: [
      'Traditional Hawala (informal value transfer systems) operating parallel to official banking.',
      'Proliferation of shell corporations and offshore tax havens (Mauritius, Cayman Islands, BVI).',
      'Emergence of decentralized virtual digital assets (cryptocurrencies, decentralized finance, privacy mixers).'
    ],
    geographicalSpread: ['Pan-India, with cross-border linkages to Dubai, Hong Kong, London, and offshore financial centres.'],
    modusOperandi: [
      'Three-stage cycle: 1. Placement (introducing cash into financial system), 2. Layering (complex series of wire transfers, round-tripping, fake invoices to obscure source), 3. Integration (re-investing funds into real estate, luxury assets, stock market).',
      'Trade-Based Money Laundering (TBML): Over-invoicing or under-invoicing of import/export shipments.',
      'Smurfing: Breaking huge sums into small deposits below the mandatory ₹10 lakh reporting threshold.'
    ],
    stateAndNonStateActors: 'Transnational organized crime syndicates, corrupt public officials, hawala operators, and terror financing networks.',
    govtResponseAndFramework: [
      'Prevention of Money Laundering Act (PMLA), 2002: Enforcement Directorate (ED) empowered to arrest, attach, and confiscate proceeds of crime.',
      'Financial Intelligence Unit - India (FIU-IND): Central national agency processing Suspicious Transaction Reports (STRs) and Cash Transaction Reports (CTRs).',
      'Fugitive Economic Offenders Act, 2018: Confiscation of domestic and overseas properties of economic offenders fleeing Indian jurisdiction.',
      'FATF (Financial Action Task Force) Compliance: India placed in top "regular follow-up" category during 2024 mutual evaluation.'
    ],
    technologyCountermeasures: [
      'Big Data analytics by CBDT (Project Insight) matching tax filings against high-value banking and lifestyle expenditure.',
      'Blockchain forensics tracing cryptocurrency transfers to blacklisted mixer addresses.'
    ],
    criticalChallenges: [
      'Stringent twin conditions for bail under Section 45 of PMLA criticized for long pre-trial detention.',
      'Low conviction rate in PMLA trials despite thousands of provisional asset attachments.',
      'Rapid migration of illicit transactions to peer-to-peer (P2P) decentralized cryptocurrency networks.'
    ],
    wayForward: [
      'Specialized economic courts and fast-tracking PMLA trials to achieve swift convictions.',
      'Strengthening beneficial ownership registries to pierce corporate veil of multi-layered shell companies.',
      'Deepening real-time intelligence exchange under Egmont Group of FIUs.'
    ]
  }
];

export const securityAgencies: SecurityAgency[] = [
  {
    id: 'agency-bsf',
    name: 'Border Security Force',
    shortName: 'BSF',
    ministry: 'Ministry of Home Affairs',
    legalBasis: 'Border Security Force Act, 1968',
    mandate: 'First line of defence protecting the borders of India during peacetime and preventing trans-border crimes.',
    jurisdictionAndBorders: 'Manning the 3,323 km India-Pakistan border (including Line of Control alongside Army) and the 4,096 km India-Bangladesh border.',
    majorFunctions: [
      'Promote a sense of security among people living in border areas.',
      'Prevent trans-border crimes, unauthorized entry into or exit from Indian territory.',
      'Interdict cross-border smuggling of narcotics, arms, cattle, and counterfeit currency.',
      'Provide anti-infiltration grid support to Indian Army in Jammu & Kashmir.'
    ],
    specialRole: 'Specialized riverine patrol units (floating border outposts in Sundarbans and Brahmaputra) and Camel mounted contingents in Thar Desert.',
    motto: 'Duty Unto Death (जीवन पर्यन्त कर्तव्य)',
    keyFacts: [
      'Raised on December 1, 1965 in the wake of the 1965 Indo-Pak War under the leadership of K.F. Rustamji.',
      'World\'s largest dedicated border guarding force with over 2.65 lakh personnel.',
      'In 2021, MHA extended BSF jurisdiction from 15 km to 50 km inside international borders in Punjab, West Bengal, and Assam.'
    ]
  },
  {
    id: 'agency-crpf',
    name: 'Central Reserve Police Force',
    shortName: 'CRPF',
    ministry: 'Ministry of Home Affairs',
    legalBasis: 'Central Reserve Police Force Act, 1949',
    mandate: 'Primary force of the Union of India for internal security management, counter-insurgency, and maintenance of public order.',
    jurisdictionAndBorders: 'Pan-India deployment wherever requested by States/UTs; principal force tackling Left Wing Extremism and counter-terror in J&K.',
    majorFunctions: [
      'Counter-insurgency and anti-Naxal operations in dense forested hinterlands.',
      'Crowd control and riot management through Rapid Action Force (RAF - specialized blue-helmeted wing).',
      'VIP security and conducting free and fair elections (securing polling booths across the country).'
    ],
    specialRole: 'CoBRA (Commando Battalion for Resolute Action) - elite jungle warfare commando unit specially raised to eliminate Maoist guerrillas.',
    motto: 'Service and Loyalty (सेवा और निष्ठा)',
    keyFacts: [
      'Originally raised as Crown Representative\'s Police in 1939; renamed CRPF by Sardar Vallabhbhai Patel post-independence.',
      'India\'s largest Central Armed Police Force (CAPF) with ~3.25 lakh personnel across 246+ battalions.',
      'Pioneered the world\'s first all-female UN peacekeeping contingent in Liberia in 2007.'
    ]
  },
  {
    id: 'agency-itbp',
    name: 'Indo-Tibetan Border Police',
    shortName: 'ITBP',
    ministry: 'Ministry of Home Affairs',
    legalBasis: 'Indo-Tibetan Border Police Force Act, 1992',
    mandate: 'Guard the high-altitude Indo-China border from Karakoram Pass in Ladakh to Jachep La in Arunachal Pradesh.',
    jurisdictionAndBorders: '3,488 km mountainous India-China border (Line of Actual Control) at altitudes ranging from 9,000 to 18,700 feet.',
    majorFunctions: [
      'Vigilance on northern borders and detection and prevention of border violations.',
      'High-altitude search and rescue operations during avalanches and mountaineering expeditions.',
      'Security cover for Kailash Mansarovar Yatra pilgrims.'
    ],
    specialRole: 'Super-high altitude mountain warfare specialists trained in sub-zero survival (-40°C) and snow craft.',
    motto: 'Valour, Steadfastness and Commitment (शौर्य-दृढ़ता-कर्म निष्ठा)',
    keyFacts: [
      'Raised on October 24, 1962 during the Sino-Indian War as an elite guerrilla and intelligence force.',
      'Personnel are fondly called "Himveers".',
      'Sanctioned 7 new border battalions in 2023 along with a new operational sector headquarters in Arunachal Pradesh.'
    ]
  },
  {
    id: 'agency-nia',
    name: 'National Investigation Agency',
    shortName: 'NIA',
    ministry: 'Ministry of Home Affairs',
    legalBasis: 'National Investigation Agency Act, 2008 (Amended in 2019)',
    mandate: 'Central counter-terrorism law enforcement agency empowered to investigate and prosecute offenses affecting the sovereignty, security, and integrity of India.',
    jurisdictionAndBorders: 'Pan-India concurrent jurisdiction without requiring prior consent from state governments; extraterritorial jurisdiction to investigate offenses against Indian citizens/interests abroad.',
    majorFunctions: [
      'Investigation of terror attacks, terror financing, and cross-border conspiracy cases.',
      'Probing offenses under Unlawful Activities (Prevention) Act (UAPA), Anti-Hijacking Act, and Atomic Energy Act.',
      'Maintaining National Terror Database and tracking foreign fighter flows.'
    ],
    specialRole: 'Maintains extraordinary conviction rate exceeding 94% in specialized NIA courts.',
    motto: 'In Excellence We Excel',
    keyFacts: [
      'Constituted in the immediate aftermath of the 26/11 Mumbai terror attacks to fill the vacuum of a federal investigative agency.',
      '2019 Amendment empowered NIA to investigate cyberterrorism, human trafficking, counterfeit currency, and attacks on Indian embassies abroad.'
    ]
  }
];

export const borderManagementData = [
  {
    frontier: 'India - Pakistan Border',
    lengthKm: 3323,
    states: ['Gujarat', 'Rajasthan', 'Punjab', 'Jammu & Kashmir', 'Ladakh'],
    terrain: 'Salt marshes of Rann of Kutch, Thar desert sand dunes, riverine plains of Punjab, rugged mountain ridges of J&K.',
    guardingForce: 'BSF (IB and Sir Creek); Indian Army & BSF (Line of Control)',
    challenges: [
      'Cross-border infiltration of trained terrorists with night-vision scopes.',
      'Surge in consumer/commercial drone sorties dropping arms, ammunition, and Afghan heroin into Punjab.',
      'Cross-border subterranean tunnels discovered beneath the fence in Jammu sector.',
      'Unresolved territorial dispute at Sir Creek estuary affecting maritime fishing rights.'
    ],
    techSolutions: [
      'Comprehensive Integrated Border Management System (CIBMS): Smart fence integrating thermal imagers, infrared sensors, and unattended ground sensors.',
      'Anti-Drone Systems deployed with soft-kill (RF jamming) and hard-kill (laser interception) capabilities.',
      'Underground seismic acoustic sensors to detect tunnel digging.'
    ]
  },
  {
    frontier: 'India - China Border (LAC)',
    lengthKm: 3488,
    states: ['Ladakh', 'Himachal Pradesh', 'Uttarakhand', 'Sikkim', 'Arunachal Pradesh'],
    terrain: 'High-altitude cold desert, glacial valleys, snow-bound mountain passes exceeding 15,000 feet.',
    guardingForce: 'ITBP & Indian Army',
    challenges: [
      'Undemarcated Line of Actual Control (LAC) leading to differing perceptions of border alignment and military face-offs (Galwan 2020, Yangtse/Tawang 2022).',
      'Rapid infrastructure expansion by PLA (dual-use Xiaokang border villages, railway networks, airfields).',
      'Severe weather conditions causing altitude sickness, frostbite, and winter logistics cut-offs.'
    ],
    techSolutions: [
      'Vibrant Villages Programme (VVP): Centrally sponsored scheme to develop border villages with tourism, road connectivity, and renewable micro-grids to reverse out-migration.',
      'Border Roads Organisation (BRO) construction of all-weather tunnels (Atal Tunnel Rohtang, Sela Tunnel Arunachal, Shinku La).',
      'Dedicated satellite reconnaissance (RISAT and Cartosat series).'
    ]
  },
  {
    frontier: 'India - Bangladesh Border',
    lengthKm: 4096,
    states: ['West Bengal', 'Assam', 'Meghalaya', 'Tripura', 'Mizoram'],
    terrain: 'Dense riverine floodplains, char lands (shifting sandbars), tea gardens, and hilly jungle tracts.',
    guardingForce: 'BSF',
    challenges: [
      'Longest international land border of India with densely populated settlements right up to the zero line.',
      'Illegal migration and cross-border smuggling of cattle, sugar, medicines, and counterfeit currency.',
      'Changing river courses making physical fencing challenging across hundreds of riverine kilometers.'
    ],
    techSolutions: [
      'Project BOLD-QIT (Border Electronically Dominated QRT Interception Technique) using smart sensor networks along riverine Brahmaputra.',
      'Implementation of historic Land Boundary Agreement (LBA 2015) exchanging 111 Indian enclaves and 51 Bangladeshi enclaves.'
    ]
  },
  {
    frontier: 'India - Myanmar Border',
    lengthKm: 1643,
    states: ['Arunachal Pradesh', 'Nagaland', 'Manipur', 'Mizoram'],
    terrain: 'Steep forested mountainous ridges of the Patkai and Chin hills.',
    guardingForce: 'Assam Rifles',
    challenges: [
      'Operation of North-East insurgent camps in safe havens inside Myanmar jungles.',
      'Flow of Golden Triangle narcotics (Yaba tablets, methamphetamine, heroin) through the porous border.',
      'Spillover of post-2021 Myanmar civil war (refugee influx into Mizoram and Manipur).'
    ],
    techSolutions: [
      'Government of India decision in 2024 to scrap the Free Movement Regime (FMR 16 km) and construct a smart border fence along the entire 1,643 km stretch.',
      'Biometric identification and camp monitoring of undocumented migrants.'
    ]
  }
];
