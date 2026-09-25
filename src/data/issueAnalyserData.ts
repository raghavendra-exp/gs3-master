import { SignatureIssue } from '../types';

export const signatureIssues: SignatureIssue[] = [
  {
    id: 'issue-groundwater-depletion',
    title: 'Groundwater Depletion & The Agri-Power Nexus',
    category: 'Agriculture',
    tags: ['Groundwater', 'MSP', 'Power Subsidy', 'PMKSY', 'Atal Bhujal', 'Food Security'],
    what: 'Groundwater depletion is the persistent over-extraction of subterranean aquifers at rates exceeding natural hydrological recharge, leading to falling water tables, dry borewells, and toxic heavy metal leaching.',
    why: 'India is the world\'s largest extractor of groundwater (~251 billion cubic meters annually, accounting for >25% of global groundwater extraction), exceeding USA and China combined. Over 89% of this extracted groundwater is devoured by agriculture.',
    background: 'The Green Revolution introduced tubewell-driven irrigation with subsidized electricity in Punjab, Haryana, and Western UP. Over-reliance on flood irrigation of water-intensive crops (paddy and sugarcane) in semi-arid zones turned groundwater into an unpriced open-access resource (Tragedy of the Commons).',
    data: [
      { metric: 'Global Groundwater Extraction Share', value: '> 25% (World\'s Largest)', source: 'World Bank / UNESCO World Water Assessment', year: '2023' },
      { metric: 'Share consumed by Agriculture', value: '89%', source: 'Central Ground Water Board (CGWB)', year: '2023' },
      { metric: 'Over-Exploited / Critical Assessment Units', value: '~17% of all blocks (Over 75% in Punjab & Haryana)', source: 'Dynamic Ground Water Resources of India, MoJS', year: '2023' },
      { metric: 'Water to produce 1 kg of rice', value: '3,000 to 5,000 Litres (virtual water export)', source: 'Commission for Agricultural Costs and Prices (CACP)', year: '2022' }
    ],
    causes: [
      'Pervasive free or unmetered agricultural power supply encouraging farmers to keep tubewells running continuously.',
      'Assured procurement of water-guzzling paddy at Minimum Support Price (MSP), disincentivizing shift to dryland millets or pulses.',
      'Fragmented legal framework: Easements Act of 1882 links groundwater ownership to land ownership, allowing unlimited private extraction.',
      'Subsidized tubewell drilling and lack of mandatory aquifer recharge standards.'
    ],
    impact: {
      economic: 'Escalating farm debt as farmers take high-interest private loans to dig deeper borewells (up to 500-800 feet). Imposes massive fiscal burden of power subsidies on State Discoms.',
      social: 'Drinking water crises in rural habitations; women walk miles to fetch potable water; fluorosis and arsenic poisoning in deep water strata.',
      environmental: 'Loss of base flow in perennial rivers, drying of wetlands, land subsidence, and irreversible compaction of fossil aquifers.',
      security: 'Inter-state water disputes (e.g. Cauvery, Sutlej-Yamuna Link) triggering civil unrest and federal friction.'
    },
    stakeholders: [
      'Small and marginal farmers',
      'Large agrarian cultivators with deep-well capital',
      'State Electricity Distribution Companies (Discoms)',
      'Ministry of Jal Shakti & Central Ground Water Board (CGWB)',
      'Food Corporation of India (FCI)'
    ],
    govtMeasures: [
      'Atal Bhujal Yojana (₹6,000 cr): Community-led water budgeting and groundwater management across 8,220 water-stressed Gram Panchayats.',
      'PM-KUSUM: Solarizing agricultural pumps with grid-connected net-metering to monetize surplus electricity rather than wasting water.',
      'Jal Jeevan Mission (JJM): Har Ghar Jal drinking tap water connectivity to rural households.',
      'Mission Amrit Sarovar: Constructing/rejuvenating at least 75 water bodies per district.'
    ],
    technology: [
      'Automated telemetry sensors installed on borewells for real-time digital water-table monitoring.',
      'Subsurface drip irrigation with automated moisture sensor valves reducing water consumption by 50%.',
      'Artificial Aquifer Recharge structures (percolation tanks, check dams, recharge shafts) mapped via GIS.'
    ],
    environmentalDimension: 'Declining water table induces salinity ingress in coastal aquifers (Gujarat/Tamil Nadu) and mobilizes naturally occurring Arsenic and Fluoride into drinking water.',
    economicDimension: 'Virtual Water Export: By exporting over 15-20 million tonnes of rice annually, India effectively exports trillions of litres of precious subterranean fresh water overseas for free.',
    securityDimension: 'Water scarcity is emerging as an internal security trigger: farmers clashing over canal release schedules and cross-border river treaty frictions during low-flow seasons.',
    challenges: [
      'Political sensitivity of metering agricultural power connections.',
      'Tenant farmers unable to invest in expensive micro-irrigation assets.',
      'Lack of legal teeth for Central Ground Water Authority (CGWA) against illegal industrial borewells.'
    ],
    internationalExamples: [
      'Israel: 100% wastewater recycling for agriculture and nationwide computerized drip irrigation systems.',
      'Australia (Murray-Darling Basin): Cap-and-trade water entitlement markets where water rights are unbundled from land ownership.'
    ],
    wayForward: [
      'Decouple groundwater rights from land ownership by overhauling the archaic Easements Act 1882.',
      'Shift from physical MSP procurement to Price Deficiency Payment / Direct Income Support (PM-KISAN) to eliminate pro-rice bias.',
      'Scale up Punjab\'s "Pani Bachao, Paisa Kamao" pilot (cash cashback directly to farmers for saving metered electricity units).'
    ],
    prelimsFacts: [
      'Under the Indian Easements Act 1882, groundwater is legally considered private property of the landowner above it.',
      'Central Ground Water Authority (CGWA) was constituted under Section 3(3) of the Environment (Protection) Act, 1986.',
      'Atal Bhujal Yojana is co-funded 50:50 by the Government of India and the World Bank.'
    ],
    pyqs: [
      'UPSC Prelims 2020: "With reference to the management of groundwater in India, consider the following statements..."',
      'UPSC Mains 2020 (GS-3): "What are the major challenges of groundwater management in India? How does participatory groundwater management offer a solution?"'
    ],
    mainsQuestions: [
      'GS-3 (15 Marks, 250 Words): "The Green Revolution which made India food secure has paradoxically triggered an unprecedented ecological crisis in subterranean hydrology. Critically analyze the nexus between cropping patterns, power subsidies, and groundwater depletion. Suggest comprehensive policy reforms."'
    ]
  },
  {
    id: 'issue-ai-governance',
    title: 'Artificial Intelligence: Innovation, Sovereign Compute & Safety',
    category: 'Science & Tech',
    tags: ['Artificial Intelligence', 'IndiaAI Mission', 'Deepfakes', 'Compute Sovereignty', 'DPDP Act', 'Cybersecurity'],
    what: 'The rapid emergence of Generative AI, Large Language Models (LLMs), and autonomous algorithmic systems transforming economic productivity, labour markets, national security, and democratic discourse.',
    why: 'AI is projected to add $500 billion to India\'s GDP by 2030. However, deepfakes, algorithmic biases, privacy intrusions, automated cyberattacks, and high concentration of AI hardware (GPUs) in foreign tech monopolies pose acute sovereign vulnerabilities.',
    background: 'AI development moved from narrow machine learning to multimodal foundation models. Global governance models are diverging: the EU adopted the strict, risk-based EU AI Act (2024), the US issued Executive Orders focusing on voluntary standards, and China introduced algorithmic regulations.',
    data: [
      { metric: 'Projected AI Contribution to Indian GDP', value: '$450 - $500 Billion (by 2030)', source: 'NITI Aayog & MeitY Report', year: '2024' },
      { metric: 'IndiaAI Mission Budget Allocation', value: '₹10,372 Crore', source: 'Union Cabinet Approval', year: '2024' },
      { metric: 'Target Sovereign Compute Capacity', value: '10,000+ High-End GPUs', source: 'IndiaAI Compute Portal', year: '2024' },
      { metric: 'AI Patent Filings by Indian Entities', value: 'Surged by 240% over the decade', source: 'NASSCOM AI Patent Report', year: '2023' }
    ],
    causes: [
      'Exponential leaps in transformer model architectures and compute clusters.',
      'Monopolization of advanced AI chips by Nvidia and fabrication by TSMC.',
      'Availability of massive digitized Indian data through UPI, Aadhaar, and DigiLocker without strict initial regulatory guardrails.'
    ],
    impact: {
      economic: 'Massive productivity gains in software, customer service, and business intelligence, but high displacement risk for routine IT/BPO white-collar entry jobs.',
      social: 'Proliferation of deepfakes and non-consensual synthetic media eroding trust in elections, media, and personal reputation.',
      security: 'Automated polymorphic malware, AI-orchestrated phishing attacks, autonomous drone swarms, and synthetic bio-weapon synthesis risks.'
    },
    stakeholders: [
      'Tech giants & AI startups',
      'MeitY and IndiaAI Mission Directorate',
      'Knowledge workers, IT professionals, and gig workers',
      'Cybersecurity and defence agencies (CERT-In, NCIIPC, Defence AI Council)'
    ],
    govtMeasures: [
      'IndiaAI Mission (₹10,372 cr) covering 7 pillars: Compute Capacity, Innovation Centre, Datasets Platform, Application Development, FutureSkills, Startup Financing, and Safe AI.',
      'Digital Personal Data Protection (DPDP) Act, 2023 regulating training on personal biometric and behavioral data.',
      'Advisories issued by MeitY under IT Rules 2021 mandating platforms to remove deepfakes within 24-36 hours and label AI-generated content.'
    ],
    technology: [
      'Watermarking and cryptographic provenance metadata (C2PA standard) embedded into AI-generated images and audio.',
      'Small Language Models (SLMs) and edge-AI chips running locally without sending data to overseas servers.',
      'Reinforcement Learning with Human Feedback (RLHF) to align LLMs with constitutional ethics and safety guidelines.'
    ],
    environmentalDimension: 'Massive carbon and water footprint of AI data centres: training a single frontier model consumes gigawatt-hours of electricity and millions of litres of evaporative cooling water.',
    economicDimension: 'Risk of digital colonization: If India relies entirely on Western or Chinese foundational models, domestic businesses will remain dependent consumers paying perpetual API rents.',
    securityDimension: 'Hybrid warfare: Adversary intelligence agencies utilizing AI bot farms to spread hyper-personalized disinformation and trigger communal riots or financial runs on banks.',
    challenges: [
      'Balancing rapid startup innovation with stringent compliance burdens.',
      'Massive global shortage and high cost of advanced H100/B200 AI GPUs.',
      'Lack of high-quality Indian regional language training corpora for Indic LLMs.'
    ],
    internationalExamples: [
      'European Union: EU AI Act classifying AI applications into Unacceptable Risk (banned), High Risk (strictly audited), and Minimal Risk.',
      'United States: NIST AI Risk Management Framework (AI RMF) and Bletchley Park AI Safety Institute pacts.'
    ],
    wayForward: [
      'Build "Sovereign AI Infrastructure": Democratize access to government-subsidized GPU clusters for academic researchers and grassroots startups.',
      'Enact dedicated algorithmic transparency and AI safety standards without stifling innovation.',
      'Establish National AI Ethics and Safety Institute to audit foundational models for bias, jailbreaks, and national security vulnerabilities.'
    ],
    prelimsFacts: [
      'Global Partnership on Artificial Intelligence (GPAI) was established in 2020; India held the Lead Chairmanship in 2023-24.',
      'Bletchley Declaration on Frontier AI Safety was signed in 2023 by 28 countries including India, USA, China, and the UK.',
      'AIRAWAT is India\'s AI supercomputer installed at C-DAC, Pune, ranked among the world\'s top 100 supercomputers.'
    ],
    pyqs: [
      'UPSC Prelims 2020: "With the present state of development, Artificial Intelligence can effectively do which of the following?"',
      'UPSC Mains 2019 (GS-3): "What are the areas of prohibitive labor that can be sustainably replaced by robots? Discuss the challenges and prospects of robotic technology in India."'
    ],
    mainsQuestions: [
      'GS-3 (15 Marks, 250 Words): "Artificial Intelligence is a double-edged sword capable of accelerating economic growth while destabilizing democratic processes through deepfakes and cyber threats. In light of the IndiaAI Mission, discuss the measures required to build sovereign compute and robust regulatory frameworks."'
    ]
  },
  {
    id: 'issue-climate-netzero',
    title: 'Climate Change, Net-Zero 2070 & Energy Transition',
    category: 'Environment',
    tags: ['Climate Change', 'Net Zero 2070', 'Panchamrit', 'Renewable Energy', 'Carbon Market', 'Loss & Damage'],
    what: 'The existential challenge of global warming caused by anthropogenic greenhouse gas emissions, requiring a decarbonization of the global economy and India\'s pledge to achieve Net-Zero greenhouse gas emissions by 2070.',
    why: 'India is the 3rd largest emitter of GHGs in absolute terms (though per capita emissions are less than half the global average ~2.4 tCO2e vs 6.5 global). India is among the top 10 countries most vulnerable to extreme climate events (floods, cyclones, heatwaves).',
    background: 'At COP26 in Glasgow (2021), India announced the "Panchamrit" targets. In 2022, India submitted its Long-Term Low-Carbon Development Strategy (LT-LEDS) to UNFCCC, emphasizing energy security, renewable scaling, and Mission LiFE.',
    data: [
      { metric: 'India Net Zero Target Year', value: '2070', source: 'COP26 Declaration / LT-LEDS', year: '2021' },
      { metric: 'Non-Fossil Fuel Installed Electric Capacity', value: '> 45% (~195 GW already achieved)', source: 'Central Electricity Authority (CEA)', year: '2024' },
      { metric: 'Target Non-Fossil Power by 2030', value: '500 GW (Panchamrit Target)', source: 'Ministry of New & Renewable Energy', year: '2023' },
      { metric: 'Emissions Intensity Reduction Target', value: '45% by 2030 from 2005 levels', source: 'Updated NDC submitted to UNFCCC', year: '2022' }
    ],
    causes: [
      'Heavy dependence on coal-fired thermal power (~70% of current electricity generation) to meet surging industrial demand.',
      'Rapid motorization and fossil fuel consumption in transport and logistics.',
      'Deforestation, land degradation, and methane emissions from agriculture and livestock.'
    ],
    impact: {
      economic: 'Climate impacts could cost India up to 2.8% of GDP annually by 2050 (World Bank estimates) due to agricultural losses, infrastructure damage, and heat stress on worker productivity.',
      social: 'Displacement of coastal and agrarian communities; heatwaves threatening informal outdoor workers (construction, street vendors).',
      environmental: 'Retreating Himalayan glaciers threatening perennial river flows, ocean warming causing coral bleaching, and shifting monsoon rhythms.',
      security: 'Climate-induced cross-border migration from low-lying Bangladesh; geopolitical struggles over critical transition minerals.'
    },
    stakeholders: [
      'Coal mining dependent states (Jharkhand, Odisha, Chhattisgarh)',
      'Power Discoms struggling with legacy thermal PPAs',
      'Renewable energy developers and battery storage startups',
      'MoEFCC, MNRE, and international climate finance bodies'
    ],
    govtMeasures: [
      'Panchamrit: 500 GW non-fossil capacity, 50% energy from renewables, reduction of 1 billion tonnes CO2e, 45% carbon intensity reduction, Net-Zero by 2070.',
      'National Green Hydrogen Mission (₹19,744 cr): Target 5 MMT annual production by 2030.',
      'Carbon Credit Trading Scheme (CCTS): Establishing a domestic compliance and voluntary carbon market under the Energy Conservation (Amendment) Act 2022.',
      'PM Surya Ghar Muft Bijli Yojana: Solarizing 1 crore households.'
    ],
    technology: [
      'High-efficiency bifacial perovskite-silicon tandem solar photovoltaic cells.',
      'Green Hydrogen production through Proton Exchange Membrane (PEM) and Solid Oxide electrolysers.',
      'Carbon Capture, Utilisation and Storage (CCUS) for heavy industries (steel, cement).'
    ],
    environmentalDimension: 'Ensuring renewable energy expansion does not destroy local biodiversity (e.g. desert grasslands of GIB, deforestation for large solar parks).',
    economicDimension: 'Financing the Green Transition: Estimated investment requirement of $10 trillion between 2020 and 2070; risk of stranded coal assets for public banks.',
    securityDimension: 'Energy sovereignty: Transitioning from imported Middle Eastern crude oil to indigenous renewables insulates India from global geopolitical supply shocks.',
    challenges: [
      'Intermittency of solar and wind requiring expensive Battery Energy Storage Systems (BESS) and pumped hydro storage.',
      'Financial health of State Discoms delaying payments to green energy developers.',
      'Failure of developed nations to deliver on the $100 billion annual climate finance commitments.'
    ],
    internationalExamples: [
      'Germany\'s Energiewende: Rapid exit from nuclear and phase-down of coal, backed by heavy grid modernization.',
      'Denmark: Generates >50% of its power from offshore and onshore wind through community cooperative ownership.'
    ],
    wayForward: [
      'Just Transition Roadmap: Developing alternative economic livelihoods for coal belt workers in Eastern India before retiring thermal plants.',
      'Mandatory grid-scale energy storage tenders and scaling Pumped Hydro Projects (PHP).',
      'Operationalize Carbon Credit Trading Scheme (CCTS) with robust MRV (Monitoring, Reporting, and Verification) to drive industrial decarbonization.'
    ],
    prelimsFacts: [
      'India ratified the Paris Agreement on October 2, 2016 (Gandhi Jayanti).',
      'International Solar Alliance (ISA) was launched jointly by India and France at COP21 Paris with headquarters in Gurugram, India.',
      'Under the Energy Conservation (Amendment) Act 2022, the Central Govt can specify a carbon credit trading scheme.'
    ],
    pyqs: [
      'UPSC Prelims 2022: "In the context of India’s preparation for climate change, consider the following statements regarding \'Panchamrit\'..."',
      'UPSC Mains 2023 (GS-3): "Explain the purpose of the Green Hydrogen Mission and analyze how it will assist India in achieving energy independence and Net-Zero emissions."'
    ],
    mainsQuestions: [
      'GS-3 (15 Marks, 250 Words): "Achieving Net-Zero emissions by 2070 requires India to balance rapid economic development with deep industrial decarbonization. Analyze the technological, financial, and institutional hurdles in India\'s energy transition. How can a \'Just Transition\' framework safeguard vulnerable communities?"'
    ]
  }
];
