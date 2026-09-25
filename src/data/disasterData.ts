import { DisasterHazard, DisasterCaseStudy } from '../types';

export const disasterHazards: DisasterHazard[] = [
  {
    id: 'hazard-earthquake',
    hazard: 'Earthquakes & Tectonic Seismicity',
    type: 'Geophysical',
    proneAreasInIndia: [
      'Zone V (Very High Damage Risk - MSK IX or greater): Entire North-East India, parts of Jammu & Kashmir, Ladakh, Himachal Pradesh, Uttarakhand, Rann of Kutch (Gujarat), parts of North Bihar, Andaman & Nicobar Islands.',
      'Zone IV (High Damage Risk - MSK VIII): Delhi-NCR, Jammu & Kashmir, remaining parts of UP, Bihar, Indo-Gangetic belt.',
      'Zone III (Moderate Risk) & Zone II (Low Risk: Peninsular shield).'
    ],
    causes: [
      'Continuous northward collision of the Indian tectonic plate with the Eurasian plate at ~4-5 cm/year.',
      'Accumulated strain along the Main Boundary Thrust (MBT) and Main Central Thrust (MCT) in the Himalayas.',
      'Intra-plate fault reactivation in Peninsular India (Killari/Latur 1993, Jabalpur 1997).'
    ],
    vulnerabilities: [
      'Dense unreinforced masonry buildings and non-engineered multi-storey constructions.',
      'Liquefaction of saturated sandy alluvial soils in river floodplains (Indo-Gangetic belt).',
      'Absence of strict enforcement of Bureau of Indian Standards (BIS 1893) seismic codes in municipal bylaws.'
    ],
    mitigationMeasures: [
      'Retrofitting critical lifeline infrastructure (hospitals, schools, bridges).',
      'Enforcing National Building Code (NBC 2016) and structural safety audits for high-rises.',
      'Installation of National Earthquake Early Warning System (pilot deployed by IIT Roorkee in Uttarakhand).'
    ],
    earlyWarningSystem: 'Earthquakes cannot be predicted days in advance. Secondary wave (S-wave) detection allows 15 to 45 seconds early warning sirens before damaging surface waves hit cities.',
    institutionalMechanism: 'National Centre for Seismology (NCS) under Ministry of Earth Sciences; NDMA guidelines on Earthquake Management.',
    recentCaseStudy: '2023 Turkey-Syria earthquake provided lessons for Himalayan seismicity: Failure of building columns ("pancake collapses") due to construction amnesties.'
  },
  {
    id: 'hazard-cyclone',
    hazard: 'Tropical Cyclones & Coastal Storm Surges',
    type: 'Hydrometeorological',
    proneAreasInIndia: [
      'East Coast (Bay of Bengal): Odisha, Andhra Pradesh, West Bengal, Tamil Nadu (bears 80% of severe cyclone impacts due to shallow bathymetry and funnel shape).',
      'West Coast (Arabian Sea): Gujarat, Maharashtra, Goa, Kerala (increasing frequency due to Arabian Sea thermal warming ~1.2°C anomaly).'
    ],
    causes: [
      'Warm sea surface temperature (> 26.5°C) providing latent heat of condensation.',
      'Coriolis force to generate cyclonic vortex.',
      'Low vertical wind shear between surface and upper troposphere.'
    ],
    vulnerabilities: [
      'Low-lying coastal populations, fishermen in motorized country craft without satellite communication.',
      'Destruction of natural bio-shields: Mangrove degradation, sand dune flattening for resort development.',
      'Storm surges penetrating 5-15 km inland, salinizing paddy fields and contaminating drinking water wells.'
    ],
    mitigationMeasures: [
      'National Cyclone Risk Mitigation Project (NCRMP) funded by World Bank: Construction of 1,000+ multi-purpose cyclone shelters.',
      'Underground cabling of coastal electrical grids to prevent multi-week blackout after landfall.',
      'Mangrove restoration through MISHTI (Mangrove Initiative for Shoreline Habitats & Tangible Incomes).'
    ],
    earlyWarningSystem: 'India Meteorological Department (IMD) 4-stage color-coded cyclone warning bulletin: 1. Cyclone Watch (72h), 2. Cyclone Alert (Yellow - 48h), 3. Cyclone Warning (Orange - 24h), 4. Post-landfall outlook (Red - 12h).',
    institutionalMechanism: 'IMD National Cyclone Warning Centre (New Delhi), Indian National Centre for Ocean Information Services (INCOIS, Hyderabad).',
    recentCaseStudy: 'Cyclone Biparjoy (2023, Gujarat coast) & Cyclone Michaung (2023, Chennai): Evacuation of ~1,00,000 people resulted in zero human casualties in Gujarat.'
  },
  {
    id: 'hazard-urban-flood',
    hazard: 'Urban Flooding & Stormwater Drainage Failure',
    type: 'Anthropogenic',
    proneAreasInIndia: [
      'Metropolitan cities: Chennai (2015 & 2023), Mumbai (2005 & regular monsoon inundation), Bengaluru (2022 IT corridor flooding), Delhi (Yamuna overflow 2023), Hyderabad (2020).'
    ],
    causes: [
      'Extreme rainfall intensity (100+ mm in a few hours) induced by urban heat island (UHI) effect.',
      'Indiscriminate concretization leading to 90% surface runoff vs natural 10% runoff.',
      'Encroachment and disappearance of cascading urban water bodies and wetlands (Bengaluru kere lakes, Chennai eris).',
      'Inadequate and silted stormwater drains designed for rainfall intensity of only 12-20 mm/hr.'
    ],
    vulnerabilities: [
      'Subterranean infrastructure: Metro basements, underground parking, hospitals with ground-floor ICU and generator rooms.',
      'Urban poor living in low-lying informal settlements along natural drainage nallahs.',
      'Disruption of digital servers, telecom exchanges, and financial transactions.'
    ],
    mitigationMeasures: [
      'Adopting "Sponge City" concept: Permeable pavements, bioswales, rain gardens, and urban retention ponds.',
      'Enforcing NDMA Guidelines on Urban Flooding (2010): Creating dedicated Urban Flood Management Units in Municipal Corporations.',
      'Real-time Doppler weather radar networks and I-FLOWS (Integrated Flood Warning System deployed in Mumbai and Chennai).'
    ],
    earlyWarningSystem: 'CWC flood forecast portal & IMD Urban Flash Flood Guidance System (UFFGS).',
    institutionalMechanism: 'Ministry of Housing and Urban Affairs (MoHUA), Municipal Corporations, State Disaster Management Authorities (SDMAs).',
    recentCaseStudy: 'Bengaluru September 2022 floods: IT hubs like Bellandur completely submerged due to encroachment of primary storm water drains (Rajakaluves).'
  }
];

export const disasterCaseStudies: DisasterCaseStudy[] = [
  {
    id: 'case-odisha-cyclone',
    disaster: '1999 Super Cyclone vs 2013 Cyclone Phailin & Beyond',
    location: 'Odisha Coast',
    year: 2013,
    hazardType: 'Category 5 Tropical Cyclone',
    impact: '1999 Super Cyclone killed ~10,000 people due to lack of early warning. In contrast, Cyclone Phailin (2013) resulted in fewer than 25 deaths despite equal intensity.',
    responseHighlights: [
      'Mission Zero Casualty: Evacuation of nearly 1 million people within 48 hours to engineered multi-purpose cyclone shelters.',
      'Creation of OSDMA (Odisha State Disaster Management Authority), the first dedicated disaster agency in India, well before the national DM Act 2005.',
      'Community participation: Trained Aapda Mitra and youth volunteers managing local shelter food distribution.'
    ],
    techLeveraged: [
      'Doppler Weather Radars tracking eye of cyclone with 10 km accuracy.',
      'Early Warning Dissemination System (EWDS) sirens installed along entire 480 km coastline.',
      'Satellite-based SATPHONEs and VHF radios resilient to telecom tower collapse.'
    ],
    lessonsAndBestPractices: [
      'Preparedness and institutionalized Standard Operating Procedures (SOPs) save thousands of lives.',
      'Odisha model was hailed by the United Nations Office for Disaster Risk Reduction (UNDRR) as a global benchmark.'
    ],
    source: 'UNDRR Case Study Report & OSDMA Documentation'
  },
  {
    id: 'case-sikkim-glof',
    disaster: 'South Lhonak Glacial Lake Outburst Flood (GLOF)',
    location: 'Chungthang & Teesta Valley, Sikkim',
    year: 2023,
    hazardType: 'Glacial Lake Outburst Flood (GLOF) & Flash Flood',
    impact: 'Dam burst of the 1,200 MW Teesta-III Hydroelectric Project at Chungthang, washing away bridges, NH-10 highway, army camps, and causing 40+ fatalities.',
    responseHighlights: [
      'Immediate deployment of Indian Army and NDRF teams for rope bridge rescues in cut-off mountainous terrain.',
      'Specialized air-dropping of emergency ration and satellite phones by IAF helicopters.'
    ],
    techLeveraged: [
      'ISRO Cartosat and Sentinel satellite imagery mapping the sudden expansion of South Lhonak lake area by ~100 hectares within hours.',
      'Geological Survey of India (GSI) hazard mapping.'
    ],
    lessonsAndBestPractices: [
      'Urgent need for automated early warning sensors and lake-tapping siphons on high-risk moraine-dammed glacial lakes.',
      'Critical review of large hydro-electric dams located immediately downstream of vulnerable proglacial lakes in seismic zones.'
    ],
    source: 'National Remote Sensing Centre (NRSC) / ISRO & NDMA Post-Disaster Report'
  }
];

export const disasterCyclePhases = [
  {
    phase: '1. Prevention & Mitigation (Pre-Disaster)',
    focus: 'Structural and non-structural actions taken to permanently reduce disaster risks before an event occurs.',
    actions: ['Hazard mapping and micro-zonation', 'Enforcing earthquake-resistant building codes (IS 1893)', 'Mangrove preservation along coasts (bio-shields)', 'Floodplain zoning regulations and dam safety audits.'],
    fundingSource: 'National Disaster Mitigation Fund (NDMF) created under DM Act Section 47.'
  },
  {
    phase: '2. Preparedness & Early Warning (Pre-Disaster)',
    focus: 'Equipping communities and emergency personnel with readiness plans, stockpiles, and instant forecasts.',
    actions: ['IMD / INCOIS color-coded early warning dissemination', 'Conducting mock drills and table-top exercises', 'Training 1 lakh+ community volunteers under "Aapda Mitra" scheme', 'Pre-positioning NDRF / SDRF battalions at strategic hubs.'],
    fundingSource: 'State Disaster Response Fund (SDRF) preparedness allocations.'
  },
  {
    phase: '3. Emergency Response & Relief (During Disaster)',
    focus: 'Immediate life-saving interventions within the "Golden Hour" of disaster occurrence.',
    actions: ['Search and rescue operations by NDRF, Armed forces, and Coast Guard', 'Emergency air-dropping of food packets, clean water, and oral rehydration salts', 'Setting up emergency field hospitals and mobile water filtration plants', 'Incident Response System (IRS) command post activation under District Magistrate.'],
    fundingSource: 'National Disaster Response Fund (NDRF).'
  },
  {
    phase: '4. Recovery, Rehabilitation & Reconstruction (Post-Disaster)',
    focus: 'Restoring livelihoods, rehousing displaced populations, and applying the "Build Back Better" principle.',
    actions: ['Psychosocial counseling for trauma victims', 'Disbursing crop and livestock compensation via Direct Benefit Transfer (DBT)', 'Rebuilding resilient disaster-proof schools, hospitals, and elevated pucca homes', 'Conducting Post-Disaster Needs Assessment (PDNA).'],
    fundingSource: 'Centrally Sponsored Reconstruction Packages & Multilateral assistance (World Bank, ADB).'
  }
];
