import { MainsQuestion } from '../types';

export const mainsDirectivesGuide: Record<string, { explanation: string; examStrategy: string }> = {
  'Discuss': {
    explanation: 'Debate all aspects of the topic by considering different viewpoints, pros and cons, causes, and impacts before arriving at a balanced conclusion.',
    examStrategy: 'Dedicate equal weight to both positive dimensions and negative/limiting factors. Conclude with practical synthesis.'
  },
  'Examine': {
    explanation: 'Probe beneath the surface of the topic, uncovering facts, structural causes, and systemic realities rather than accepting surface claims.',
    examStrategy: 'Use precise data points, institutional mechanisms, and legal provisions to support your inspection.'
  },
  'Critically Examine': {
    explanation: 'Deeply dissect the merits and demerits, strengths and failures of the policy, scheme, or phenomenon. Back every criticism with an authoritative committee or empirical evidence.',
    examStrategy: 'Do NOT just oppose government policy. Provide constructive criticism followed by a viable, non-cynical Way Forward.'
  },
  'Evaluate': {
    explanation: 'Pass a reasoned judgment on the success, failure, effectiveness, or impact of a policy/programme against its stated original objectives.',
    examStrategy: 'Compare targets vs achievements (e.g. 500 GW target vs 195 GW achieved). Identify the missing links and institutional bottlenecks.'
  },
  'Analyze': {
    explanation: 'Break down the complex phenomenon into its constituent parts (economic, technological, ecological, legal, social) and explain how they interact.',
    examStrategy: 'Structure the body with clear thematic subheadings and flowcharts showing cause-and-effect interconnections.'
  },
  'Comment': {
    explanation: 'Express your informed viewpoint on a specific statement or quotation, providing reasoned arguments grounded in constitutional, legal, and economic principles.',
    examStrategy: 'Start by explaining the context of the quote, validate its core truth, highlight nuances or counter-realities, and summarize.'
  },
  'Elucidate': {
    explanation: 'Make something clear and easily understood by explaining the underlying scientific, economic, or legal concepts in simple, lucid language with illustrations.',
    examStrategy: 'Include well-labelled diagrams or formulas and clear real-world examples.'
  },
  'Assess': {
    explanation: 'Estimate or judge the extent, magnitude, importance, or value of a development or policy outcome.',
    examStrategy: 'Use statistical indices (NITI Aayog SDG Index, PLFS, CACP estimates) to measure the degree of transformation achieved.'
  }
};

export const mainsQuestionsBank: MainsQuestion[] = [
  {
    id: 'mains-q-001',
    exam: 'UPSC',
    year: 2024,
    marks: 15,
    wordLimit: 250,
    topic: 'Economy',
    questionText: '“While the Indian economy has maintained robust macroeconomic stability and high GDP growth, achieving inclusive growth and generating quality non-farm employment remains a paramount structural challenge.” Critically examine this statement in light of recent Periodic Labour Force Survey (PLFS) and Economic Survey findings.',
    directive: 'Critically Examine',
    directiveExplanation: 'Analyze the dichotomy between high GDP growth (~7-8%) and the nature of employment generation (quality, formality, gender participation, and real wage growth).',
    framework: {
      introHook: 'Define Inclusive Growth (growth that creates opportunities for all segments of society, reducing income and regional inequalities). Cite India’s position as the fastest-growing major economy (7.8% GDP growth) contrasted with an employment elasticity of growth hovering below 0.1.',
      bodyDimensions: [
        {
          dimension: 'Macroeconomic Triumphs & Growth Drivers',
          points: [
            'Record public capex (₹11.11 lakh crore) creating high multiplier physical infrastructure.',
            'Twin Balance Sheet Advantage: Commercial bank gross NPAs down to multi-year low of ~2.8%.',
            'Robust tax buoyancy with GST collections averaging ₹1.7-1.8 lakh crore monthly.'
          ]
        },
        {
          dimension: 'Structural Employment & Inclusivity Bottlenecks',
          points: [
            'Disguised unemployment in agriculture: Employs 45% of workforce but generates only 18% of GVA.',
            'Quality of jobs: Over 88% of employment remains informal without pension, paid leave, or healthcare coverage.',
            'Nature of rising Female LFPR: PLFS shows rural female participation surged to ~37%, but largely in unpaid family labour or low-productivity self-employment (distress employment).',
            'MSME credit gap: Missing middle phenomenon where tiny enterprises cannot scale due to regulatory compliance burden.'
          ]
        },
        {
          dimension: 'Policy Interventions & Missing Links',
          points: [
            'PLI Scheme: Focuses on capital-intensive electronics and pharma; low direct employment generation compared to textile and leather.',
            'Skill mismatch: Only ~5% of Indian workforce has formal vocational skills vs 96% in South Korea and 75% in Germany.'
          ]
        }
      ],
      conclusionOutlook: 'Conclude with a futuristic synthesis: To harness the demographic dividend closing by 2045, India must pivot toward labor-intensive manufacturing clusters, light engineering, tourism, the care economy, and operationalization of the four Labour Codes with social security boards.'
    },
    diagramSuggestion: 'Dual-axis comparison chart: High GDP Growth trajectory (7-8%) contrasted with Stagnant Manufacturing Employment Share (~11-12%). Flowchart: Agriculture -> Formal Vocational Skilling -> Labor-Intensive MSMEs -> Inclusive Growth.',
    dataToCite: [
      'PLFS UR: 3.2% headline unemployment with ~45% stuck in agriculture.',
      'Economic Survey: 7.85 million non-farm jobs required annually until 2030.',
      'Oxfam / World Inequality Lab: Top 1% owns over 40% of national wealth.'
    ],
    committeesToMention: ['Santosh Gangwar / Labour Code Task Force', 'Arvind Panagariya Task Force on Employment', 'Bibek Debroy Committee']
  },
  {
    id: 'mains-q-002',
    exam: 'UPSC',
    year: 2023,
    marks: 15,
    wordLimit: 250,
    topic: 'Agriculture',
    questionText: '“The existing regime of agricultural input subsidies in India has outlived its historical utility, leading to severe environmental degradation, fiscal distress, and soil nutrient depletion.” Discuss the case for transitioning from input subsidies to Direct Benefit Transfers (DBT) and investments in public agri-infrastructure.',
    directive: 'Discuss',
    directiveExplanation: 'Analyze how fertilizer, power, and canal water subsidies distort farm practices, examine the fiscal load on Union and State exchequers, and discuss the viability and equity of direct cash transfers.',
    framework: {
      introHook: 'Trace historical genesis: Input subsidies were introduced during the 1960s Green Revolution to incentivize adoption of High-Yielding Varieties (HYV) and achieve national food self-sufficiency. Today, the annual agri-subsidy bill exceeds ₹3.5 lakh crore.',
      bodyDimensions: [
        {
          dimension: 'Distortions Induced by Input Subsidies',
          points: [
            'Distorted N:P:K ratio: Heavily subsidized urea (MRP fixed) has pushed soil nitrogen ratio to 8.2:3.2:1 in Punjab (against ideal 4:2:1), causing soil salinization and zinc/micronutrient starvation.',
            'Depletion of subterranean water: Free agricultural power promotes indiscriminate tubewell extraction; 75%+ of blocks in Punjab are over-exploited.',
            'Inequitable benefit capture: Over 70% of fertilizer and power subsidies are captured by large and medium farmers with large landholdings and tubewells.'
          ]
        },
        {
          dimension: 'Fiscal Multiplier Comparison: Subsidy vs Public Capex',
          points: [
            'Studies by Ashok Gulati (ICRIER) and IFPRI show: ₹1 spent on agri-R&D and rural roads yields ₹10-14 in farm income; ₹1 spent on input subsidies yields only ₹0.80 - ₹1.20.'
          ]
        },
        {
          dimension: 'Transition to Direct Benefit Transfer (DBT)',
          points: [
            'De-link support from specific crop inputs to promote natural crop diversification toward pulses, oilseeds, and millets.',
            'Direct income transfer (on the lines of Rythu Bandhu, KALIA, or enhanced PM-KISAN) per acre or per farmer.',
            'Challenges: Identification of non-land-owning tenant farmers and sharecroppers who pay for inputs but do not possess land titles.'
          ]
        }
      ],
      conclusionOutlook: 'Conclude that subsidizing farmers\' bank accounts rather than subsidizing resource destruction is the cornerstone of sustainable agriculture and fiscal discipline, paving the way for the Doubling of Farmers\' Income vision.'
    },
    diagramSuggestion: 'Causal Chain Flowchart: Free Power + Underpriced Urea -> Flood Irrigation of Paddy -> Soil Alkalinity + Aquifer Depletion + Fiscal Deficit -> Agrarian Distress -> Solution: Decoupled DBT + Micro-Irrigation Infra.',
    dataToCite: [
      'Fertilizer subsidy allocation: ~₹1.64 lakh crore in Union Budget.',
      'CACP estimate: Punjab pumps 3x more groundwater than natural annual recharge.',
      'ICRIER study on agricultural public expenditure multiplier.'
    ],
    committeesToMention: ['Ashok Dalwai Committee on Doubling Farmers\' Income', 'Shanta Kumar High-Level Committee on FCI Reforms (2015)', 'Swaminathan Commission (2006)']
  },
  {
    id: 'mains-q-003',
    exam: 'UPSC',
    year: 2024,
    marks: 10,
    wordLimit: 150,
    topic: 'Internal Security',
    questionText: '“The convergence of cyber attacks, artificial intelligence, and physical sabotage represents the advent of Hybrid Warfare.” In this context, evaluate India’s institutional preparedness to protect its Critical Information Infrastructure (CII).',
    directive: 'Evaluate',
    directiveExplanation: 'Assess the threats posed by hybrid warfare targeting power grids, financial switches, and nuclear control systems, and judge the efficacy and gaps of India\'s institutional cybersecurity apparatus.',
    framework: {
      introHook: 'Define Hybrid Warfare: A synchronized military strategy blending conventional sabotage, irregular guerrilla warfare, cyber offensive operations, and algorithmic disinformation to paralyze a state without crossing the threshold of open war.',
      bodyDimensions: [
        {
          dimension: 'Emerging Hybrid Cyber Threats to Indian CII',
          points: [
            'Attacks on national power grids (e.g. RedEcho cyber intrusions targeting Ladakh and Mumbai electricity load dispatch centers).',
            'Health and banking disruptions: 2022 AIIMS ransomware crippling patient records; attacks on Kudankulam nuclear plant administrative network in 2019.',
            'Subsea internet cables: 95% of international digital traffic travels via underwater fiber optics landing at Mumbai and Chennai, vulnerable to underwater drone sabotage.'
          ]
        },
        {
          dimension: 'Evaluation of Institutional Architecture',
          points: [
            'NCIIPC (Section 70A IT Act): Designated 7 critical sectors (Power, Banking, Telecom, Transport, Government, Strategic & Healthcare).',
            'CERT-In 2022 directions: Mandatory 6-hour incident reporting and strict VPN log retention.',
            'Defence Cyber Agency (DCyA): Tri-service cyber command integrating Army, Navy, and Air Force capabilities.',
            'Gaps: Absence of a comprehensive National Cyber Security Strategy document; acute deficit of certified white-hat penetration testers; legal jurisdictional limitations in prosecuting foreign state-sponsored Advanced Persistent Threats (APTs).'
          ]
        }
      ],
      conclusionOutlook: 'Conclude with the necessity of adopting a proactive "Zero Trust Architecture", indigenizing critical telecom and SCADA hardware under Make in India, and negotiating multilateral cyber defense alliances under Quad Critical and Emerging Technology frameworks.'
    },
    diagramSuggestion: 'Concentric Defense Circles: Outer Tier (CERT-In / I4C Incident Response) -> Intermediate Tier (NCIIPC Sectoral Computer Emergency Response) -> Inner Core (Air-Gapped Critical SCADA Grid).',
    dataToCite: [
      'CERT-In handled over 13+ lakh cybersecurity incidents in recent reporting years.',
      'India was among the top 3 targeted countries for ransomware in Asia-Pacific.'
    ],
    committeesToMention: ['Gulshan Rai Committee on Cyber Security Architecture', 'B.N. Srikrishna Committee', 'National Security Advisory Board (NSAB)']
  },
  {
    id: 'mains-q-004',
    exam: 'UPPSC',
    year: 2023,
    marks: 12,
    wordLimit: 200,
    topic: 'Environment',
    questionText: 'Examine the key factors responsible for frequent flood disasters in the Eastern districts of Uttar Pradesh (Purvanchal). Suggest long-term flood management strategies integrating ecological and technological interventions.',
    directive: 'Examine',
    directiveExplanation: 'Focus on transboundary river systems originating in Nepal (Ghaghara, Gandak, Rapti, Sharda), geographic bowl depression of Terai, and structural vs non-structural flood mitigations.',
    framework: {
      introHook: 'Highlight Purvanchal’s vulnerability: Over 2.5 million hectares in Eastern UP (Gorakhpur, Basti, Siddharthnagar, Deoria, Bahraich) face recurring inundation every monsoon, eroding agricultural productivity and trapping the region in poverty.',
      bodyDimensions: [
        {
          dimension: 'Underlying Factors for Purvanchal Floods',
          points: [
            'Transboundary rivers: High sedimentation and sudden water discharge from Nepal catchment areas (Ghaghara, Rapti, Rohini rivers).',
            'Gentle gradient and saucer-shaped topography of Eastern Gangetic plains causing water stagnation for months.',
            'Embankment failures: Breach of earthen bunds built in the 1970s; embankments trap rainwater behind them ("jacketing effect"), worsening waterlogging.',
            'Encroachment of natural oxbow lakes (Taals) and wetlands in Gorakhpur and adjoining districts.'
          ]
        },
        {
          dimension: 'Integrated Long-Term Flood Strategies',
          points: [
            'Bilateral Nepal cooperation: High-dam construction and joint real-time hydrological telemetry in upper catchment basins (Pancheshwar, Sapta Kosi).',
            'Ecological restoration: Reconnecting palaeochannels and rejuvenating oxbow lakes under Mission Amrit Sarovar to absorb flood surges.',
            'Technological integration: Drone-based embankment health monitoring and GIS-based Flood Plain Zoning enforcement under UP Flood Plain Zoning laws.',
            'Agricultural adaptation: Promoting flood-tolerant Sub-1 paddy varieties (Swarna-Sub1) capable of surviving 14 days under submerged water.'
          ]
        }
      ],
      conclusionOutlook: 'Conclude that moving from reactive flood relief to proactive "Living with Floods" resilience is indispensable for achieving UP’s vision of a $1 Trillion State Economy.'
    },
    diagramSuggestion: 'Topographical Cross-Section: Nepal Hills (Steep gradient & siltation) -> Terai Plains (Sudden flattening) -> Breached Embankments -> Waterlogged Agricultural Land. Proposed Taals Buffer Retention Basin.',
    dataToCite: [
      'UP accounts for ~10% of India’s flood-prone area (nearly 73 lakh hectares).',
      'Purvanchal flood losses exceed ₹1,500-2,000 crore annually in standing crops.'
    ],
    committeesToMention: ['National Flood Commission (Rashtriya Barh Ayog)', 'Ganga Flood Control Commission (GFCC)', 'Madhav Chitale Committee on Desiltation of Ganga']
  },
  {
    id: 'mains-q-005',
    exam: 'UPSC',
    year: 2024,
    marks: 15,
    wordLimit: 250,
    topic: 'Economy',
    questionText: '“Land reforms in India succeeded in abolishing feudal intermediaries but largely failed in achieving tenancy security and equitable asset redistribution.” Discuss the socio-economic impacts and examine how 21st-century digital land initiatives like SVAMITVA and DILRMP can unlock rural prosperity.',
    directive: 'Discuss',
    directiveExplanation: 'Analyze the historical balance sheet of post-independence land reforms (abolition of intermediaries vs tenancy/ceilings failure) and link with contemporary digital property rights.',
    framework: {
      introHook: 'Begin by stating that land reforms were conceptualized as the institutional linchpin for breaking feudal agrarian hierarchies and raising agricultural productivity post-1947. Note that while zamindari abolition brought ~20 million tenants into direct contact with the state, structural land inequality remained entrenched.',
      bodyDimensions: [
        {
          dimension: 'Where Land Reforms Succeeded vs Where They Stumbled',
          points: [
            'Abolition of Intermediaries: Highly successful; ended revenue farming by Zamindars/Jagirdars and freed large wastelands for state management.',
            'Tenancy Reforms: Largely backfired; landowners carried out mass evictions under the pretext of "personal cultivation", pushing tenants into informal, unrecorded sharecropping without legal rights.',
            'Land Ceilings: Dismal failure (<2% of operated area redistributed) due to benami transfers, fictitious divorces, and legal exemptions for plantations and religious trusts.',
            'Consolidation of Holdings: Confined geographically to the Green Revolution belt (Punjab, Haryana, Western UP).'
          ]
        },
        {
          dimension: '21st Century Digital Interventions: SVAMITVA & DILRMP',
          points: [
            'SVAMITVA Scheme: Uses drone survey technology to map inhabited rural Abadi parcels, issuing legal "Property Cards" that eliminate boundary disputes and allow villagers to monetize land as loan collateral.',
            'DILRMP (Digital India Land Records Modernization Programme): Computerizes Records of Rights (RoRs), digitizes cadastral maps, and links sub-registrar deeds to curb fraudulent double-mortgaging.',
            'Model Land Leasing Act 2016: Formalizes agricultural tenancy without threatening landowners’ titles, enabling tenant farmers to access institutional credit, PM-KISAN, and PMFBY insurance.'
          ]
        }
      ],
      conclusionOutlook: 'Conclude that shifting the land discourse from "physical redistribution" to "digital titling, secure leasing, and dispute-free monetization" is essential for transforming rural India from subsistence agriculture into a capital-generating asset economy.'
    },
    diagramSuggestion: 'Comparative Quadrant Flowchart: (1) Intermediaries Abolished (Success) vs (2) Tenancy Reforms (Informalized) vs (3) Land Ceilings (Benami Loophole) -> Solution: SVAMITVA Drone Mapping + DILRMP Digital RoR -> Institutional Credit Access.',
    dataToCite: [
      'Small and marginal farmers (<2 hectares) constitute 86.2% of total operational holdings in India (Agriculture Census).',
      'Over 60% of all civil court litigation in India originates from property and land boundary disputes (NITI Aayog).'
    ],
    committeesToMention: ['Kumarappa Committee (Agrarian Reforms Committee 1949)', 'T. Haque Committee on Model Land Leasing Act (2016)', 'NITI Aayog Committee on Land Titling']
  },
  {
    id: 'mains-q-006',
    exam: 'UPSC',
    year: 2024,
    marks: 15,
    wordLimit: 250,
    topic: 'Internal Security',
    questionText: 'The suspension of the Free Movement Regime (FMR) along the 1,643 km Indo-Myanmar border marks a paradigm shift from porous border management to border sealing. Critically examine the security imperatives behind this decision and the ethnic and diplomatic challenges it poses for India’s Act East Policy.',
    directive: 'Critically Examine',
    directiveExplanation: 'Analyze the national security drivers (illegal migration, insurgent transit, narco-trafficking) versus local socio-cultural disruption and diplomatic relations with Naypyidaw.',
    framework: {
      introHook: 'Define the Free Movement Regime (FMR) established in 2018 under India’s Act East Policy, which permitted border residents on both sides to travel up to 16 km inside each other’s territory without visas. Note the early 2024 announcement by MHA terminating the FMR and sanctioning comprehensive smart border fencing.',
      bodyDimensions: [
        {
          dimension: 'Security Imperatives Driving FMR Suspension',
          points: [
            'Insurgent Safe Havens: Insurgent outfits (Meitei valley groups like UNLF/PLA and Naga factions) exploit FMR to strike in Manipur and retreat into camps in Myanmar’s Sagaing region.',
            'Golden Triangle Narco-Terrorism: Porous borders allow massive inflow of synthetic drugs (methamphetamine, Yaba tablets) and heroin from Myanmar, financing local militant groups.',
            'Civil War Fallout in Myanmar: Post-2021 military coup and Operation 1027 triggered influx of thousands of refugees, Chin migrants, and deserting Myanmar soldiers into Mizoram and Manipur, straining local resources and upsetting demographic balances.',
            'Cross-Border Infiltration & Arms Smuggling: Unregulated movement facilitates the smuggling of Chinese-made assault rifles and drone components.'
          ]
        },
        {
          dimension: 'Socio-Cultural, Ethnic & Diplomatic Repercussions',
          points: [
            'Divided Kinship: Border artificially cuts across ethnically contiguous tribes (Kuki-Zo-Chin-Mizo communities and Nagas living on both sides of the border); strong political opposition in Mizoram and Nagaland.',
            'Diplomatic Delicate Balance: Requires cooperation with Myanmar’s military Junta (Tatmadaw) which controls shrinking border territory opposite ethnic armed organizations (ARAKAN Army, CNF).',
            'Friction with Act East Connectivity: Border sealing and rigid visa checkpoints could hinder border trade corridors (Kaladan Multi-Modal Transit Transport Project, India-Myanmar-Thailand Trilateral Highway).'
          ]
        }
      ],
      conclusionOutlook: 'Conclude that while territorial integrity necessitates border regulation, physical fencing must be accompanied by biometric smart checkpoints, local community consultation, and accelerated development under the Border Area Development Programme (BADP).'
    },
    diagramSuggestion: 'Border Geography Schematic: Northeast States (Arunachal, Nagaland, Manipur, Mizoram) <---> 1,643 km Border <---> Myanmar (Sagaing / Chin State). Highlight: Golden Triangle narcotics inflow + Cross-border ethnic kinship zones.',
    dataToCite: [
      'Four Indian states share the 1,643 km border with Myanmar: Arunachal Pradesh (520 km), Nagaland (215 km), Manipur (398 km), and Mizoram (510 km).',
      'Assam Rifles is the designated border guarding force deploying 20+ battalions along this frontier.'
    ],
    committeesToMention: ['Madhukar Gupta Committee on Border Protection', 'Kargil Review Committee recommendations on Border Management', 'MHA High-Level Committee on Northeast Border Security']
  }
];
