// ============================================================================
// GS-III UPPSC PCS & UP RO/ARO MASTER DATA BANK
// Official Source First: UP Govt Planning Dept, UP Budget, UPEIDA, UP Agriculture,
// ICAR, MoAFW, FSI, MHA, Census of India
// ============================================================================

export interface UPPSCModuleItem {
  id: string;
  category: 
    | 'Economic & Fiscal Systems' 
    | 'Agriculture & Irrigation' 
    | 'ODOP & MSME Clusters' 
    | 'Expressways & Logistics' 
    | 'Defence Corridor & Industry' 
    | 'Energy Matrix & Solar' 
    | 'Ecology & Pollution' 
    | 'Disaster Vulnerability' 
    | 'Law, Order & Borders';
  title: string;
  sectionCode: 'UPPSC_GS3_CORE' | 'UP_SPECIAL_SYSTEMS';
  marksPattern: '8-Mark (125 Words) / 12-Mark (200 Words)';
  keyFacts: string[];
  analyticalPoints: string[];
  mainsRelevance: string;
  diagramOrFramework: string;
  source: string;
}

// ----------------------------------------------------------------------------
// Section 2: UPPSC PCS — GS Paper III Descriptive Master Modules
// ----------------------------------------------------------------------------
export const uppscGS3Data: UPPSCModuleItem[] = [
  {
    id: 'up-1-trillion-economy',
    category: 'Economic & Fiscal Systems',
    title: 'Road to $1-Trillion Economy & Regional Disparities of UP',
    sectionCode: 'UP_SPECIAL_SYSTEMS',
    marksPattern: '8-Mark (125 Words) / 12-Mark (200 Words)',
    keyFacts: [
      'Target: UP has set an ambitious target to become a $1-Trillion Gross State Domestic Product (GSDP) economy by 2027-28.',
      'GSDP Current Status: UP GSDP is estimated at ~₹25-27 Lakh Crore (approx $320-330 Billion), making it India\'s 2nd largest state economy after Maharashtra.',
      'UP Global Investors Summit (GIS 2023): Garnered investment intents exceeding ₹33.5 Lakh Crore, with over ₹10 Lakh Crore grounded during successive Ground Breaking Ceremonies (GBC-IV).',
      'Fiscal Deficit Tracking: Governed by the UP FRBM Act; State Fiscal Deficit is capped within 3.5% of GSDP (3.0% baseline + 0.5% power sector reform incentive under 15th Finance Commission guidelines).'
    ],
    analyticalPoints: [
      'Four Regional Economic Archetypes: (1) Western UP (Harit Pradesh): Industrialized, high agricultural productivity, contributes ~48-50% to state GSDP; (2) Central UP: Mixed economy led by leather/textile Kanpur and service capital Lucknow; (3) Eastern UP (Purvanchal): Highest population density, fragmented landholdings, remittances-dependent, now being unlocked via expressways; (4) Bundelkhand: Historically arid, low HDI, being transformed via Defence Corridor and Solar Parks.',
      'Three-Pillar Growth Engine: Agriculture (aiming for 10%+ growth via food processing & allied sectors), Industry (manufacturing share targeted to rise to 25%), Services (IT hubs in Noida/Greater Noida, religious and cultural tourism circuits).',
      'Revenue Mobilization: State Own Tax Revenue (SOTR) contributes ~60% of total revenue receipts, driven by State GST (SGST), Stamp and Registration duties, and State Excise on liquor.'
    ],
    mainsRelevance: 'UPPSC Mains GS-3 / GS-5: "Evaluate the sectoral strategies required for Uttar Pradesh to achieve the milestone of a one-trillion-dollar economy while mitigating regional imbalances."',
    diagramOrFramework: 'Framework: Regional Disparities Matrix [Western UP (Industry/Sugar) vs Purvanchal (Services/Cereals) vs Bundelkhand (Mining/Solar) vs Central UP (Leather/Commerce)]',
    source: 'UP Department of Planning, UP Budget Analysis, NITI Aayog State Diagnostics'
  },
  {
    id: 'up-agri-agroclimatic-irrigation',
    category: 'Agriculture & Irrigation',
    title: '9 Agro-Climatic Zones, Sugarcane Pricing & Major Canal Systems',
    sectionCode: 'UP_SPECIAL_SYSTEMS',
    marksPattern: '8-Mark (125 Words) / 12-Mark (200 Words)',
    keyFacts: [
      '9 Agro-Climatic Zones of UP: (1) Tarai Zone, (2) Western Plain, (3) Central Western Plain, (4) South Western Semi-Arid, (5) Central Plain, (6) Bundelkhand Zone, (7) North Eastern Plain, (8) Eastern Plain, (9) Vindhyan Zone.',
      'Foodgrain Superpower: UP contributes ~19% of India\'s total foodgrain production. Ranks 1st nationally in Wheat, Sugarcane, Potato, and Total Milk production; 2nd in Rice (after West Bengal).',
      'Sugarcane FRP vs SAP Politics: Central govt declares Fair and Remunerative Price (FRP) under Sugarcane (Control) Order 1966; UP govt declares a higher State Advised Price (SAP) under UP Sugarcane (Regulation of Supply and Purchase) Act 1953, creating recurring cane arrears conflicts with private millers.',
      'Major Canal Infrastructure: Sarda Canal System (one of the world\'s largest irrigation networks with ~10,000 km channel length), Lower Ganga Canal (originates at Narora), Agra Canal, Betwa Canal in Bundelkhand.',
      'Ken-Betwa River Interlinking Project: India\'s first national river interlinking project under National Perspective Plan; transfers surplus water from Ken river (MP) to water-deficit Betwa basin in Bundelkhand, irrigating 10.6 lakh hectares.'
    ],
    analyticalPoints: [
      'Western UP Groundwater Stress: Tube wells irrigate ~75% of UP\'s net irrigated area. Over-exploitation in Western UP (districts like Saharanpur, Muzaffarnagar, Shamli declared "Critical" or "Dark Zones" by Central Ground Water Board).',
      'Crop Diversification Imperatives: Over-reliance on sugarcane monoculture depletes topsoil nutrients and water tables. State promotes crop diversification towards maize, yellow mustard, and millets (Bajra in South-West UP).',
      'Small and Marginal Landholding Bottleneck: More than 80% of farmers cultivate holdings < 1 hectare, necessitating Farmer Producer Organizations (FPOs) and cluster farming.'
    ],
    mainsRelevance: 'UPPSC Mains GS-3: "Discuss the agricultural regionalization of Uttar Pradesh based on its 9 agro-climatic zones and analyze the challenges of sustainable water management in Western UP."',
    diagramOrFramework: 'Map Layout: 9 Agro-Climatic Zones of UP overlayed with Canal networks (Sarda, Narora, Betwa) and Bundelkhand Ken-Betwa Link route.',
    source: 'UP Directorate of Agriculture, UP Irrigation Department, CACP Price Policy'
  },
  {
    id: 'up-odop-architecture',
    category: 'ODOP & MSME Clusters',
    title: 'One District One Product (ODOP) Institutional Infrastructure',
    sectionCode: 'UP_SPECIAL_SYSTEMS',
    marksPattern: '8-Mark (125 Words) / 12-Mark (200 Words)',
    keyFacts: [
      'Genesis: Launched on UP Diwas (January 24, 2018); became the national blueprint later replicated by Central Ministry of Commerce & Industry across all states.',
      'Target: Covers all 75 districts of UP, identifying unique heritage crafts, agro-produce, and specialized artisanal manufactured goods.',
      'Key High-Yield ODOP Mappings: Siddharthnagar (Kala Namak Rice - GI Tagged "Buddha Rice"), Bhadohi (Hand-knotted Carpets / Rugs), Firozabad (Glassware & Bangles), Kannauj (Natural Attar / Perfumes), Moradabad (Brassware / Metal Crafts), Aligarh (Locks & Hardware), Varanasi (Banarasi Silk & Wooden Toys), Lucknow (Chikan & Zardozi embroidery), Saharanpur (Wood Carvings), Agra (Leather goods).'
    ],
    analyticalPoints: [
      'Four Institutional Pillars of ODOP: (1) Common Facility Centres (CFCs): State provides up to 90% financial assistance for shared testing labs, design studios, and packaging units; (2) Margin Money Scheme: Subsidies on bank credit up to 25% (max ₹20 lakh); (3) Skill Development & Toolkits: Free master artisan training via institutional tie-ups; (4) Marketing & E-Commerce: Direct onboardings onto Amazon, Flipkart, and GeM portals.',
      'Export Multiplication: UP\'s merchandise exports surged from ~₹88,000 Crore in 2017 to over ₹1.75 Lakh Crore in 2023-24, with ODOP clusters accounting for over 50% of shipments.',
      'Critical Bottlenecks: Working capital delays by local cooperative banks, lack of design patenting leading to cheap machine-made imitations, effluent treatment compliance in Moradabad brass and Bhadohi carpet dyeing.'
    ],
    mainsRelevance: 'UPPSC Mains GS-3: "Evaluate the performance of the ODOP scheme in reviving traditional artisanal clusters and generating rural non-farm employment in Uttar Pradesh."',
    diagramOrFramework: 'Flowchart: Artisan -> Raw Material Bank -> Common Facility Centre (CFC) -> Quality Certification -> GeM/Export Hub',
    source: 'UP Department of MSME & Export Promotion, UP ODOP Directorate'
  },
  {
    id: 'up-expressway-model',
    category: 'Expressways & Logistics',
    title: 'Expressway-Led Development: Ganga, Purvanchal & Bundelkhand Network',
    sectionCode: 'UP_SPECIAL_SYSTEMS',
    marksPattern: '8-Mark (125 Words) / 12-Mark (200 Words)',
    keyFacts: [
      'Expressway Capital: UP boasts over 3,200 km of operational and under-construction access-controlled expressways (~50% of India\'s total expressway network), administered by UPEIDA.',
      'Ganga Expressway: 593.95 km (longest in UP), 6-lane expandable to 8-lane. Connects Bijauli (Meerut) to Judapur Dando (Prayagraj) traversing 12 districts: Meerut, Hapur, Bulandshahr, Amroha, Sambhal, Budaun, Shahjahanpur, Hardoi, Unnao, Rae Bareli, Pratapgarh, Prayagraj. Features a 3.5 km airstrip at Jalalabad (Shahjahanpur).',
      'Purvanchal Expressway: 340.82 km. Connects Chand Sarai (Lucknow) to Haidaria (Ghazipur) across 9 districts: Lucknow, Barabanki, Amethi, Sultanpur, Ayodhya, Ambedkar Nagar, Azamgarh, Mau, Ghazipur. 3.2 km emergency airstrip at Kurebhar (Sultanpur).',
      'Bundelkhand Expressway: 296.07 km. Connects Bharatkoop (Chitrakoot) to Kudrail (Etawah) where it merges into Agra-Lucknow Expressway, traversing 7 districts: Chitrakoot, Banda, Mahoba, Hamirpur, Jalaun, Auraiya, Etawah.',
      'Yamuna Expressway: 165.54 km. Connects Greater Noida to Agra across Gautam Buddha Nagar, Aligarh, Mathura, Hathras, Agra.'
    ],
    analyticalPoints: [
      'Economic Corridorization: Expressways are not merely transit ribbons; UPEIDA is developing Industrial Development Nodes (SEZs, logistics parks, food processing hubs) along expressway exits.',
      'Perishable Cold-Chain Integration: Reduced transit time from Purvanchal to Delhi-NCR from 15 hours to under 6 hours, allowing fresh vegetables, milk, and fish from Eastern UP to reach NCR markets overnight.',
      'Dual-Use Civil-Military Infrastructure: Concrete runway stretches designed to land Indian Air Force (IAF) fighter jets (Sukhoi-30MKI, Mirage-2000, Rafale) during wartime strategic emergencies.'
    ],
    mainsRelevance: 'UPPSC Mains GS-3: "Examine how the expressway-led infrastructure model is reshaping the economic geography of backward regions in Purvanchal and Bundelkhand."',
    diagramOrFramework: 'Route Geometry: Yamuna (165km) -> Agra-Lucknow (302km) -> Purvanchal (341km) + Ganga Exp (594km Meerut-Prayagraj spine) + Bundelkhand (296km).',
    source: 'UPEIDA Official Project Dossiers, MoRTH'
  },
  {
    id: 'up-defence-industrial-corridor',
    category: 'Defence Corridor & Industry',
    title: 'Uttar Pradesh Defence Industrial Corridor (UPDIC): 6 Strategic Nodes',
    sectionCode: 'UP_SPECIAL_SYSTEMS',
    marksPattern: '8-Mark (125 Words) / 12-Mark (200 Words)',
    keyFacts: [
      'Nodes Demarcation: 6 distinct nodes: (1) Aligarh, (2) Agra, (3) Kanpur, (4) Chitrakoot, (5) Jhansi, and (6) Lucknow.',
      'Administering Body: Uttar Pradesh Expressways Industrial Development Authority (UPEIDA); designated as the State Nodal Agency.',
      'Anchor Strategic Projects: BrahMos Aerospace unit at Lucknow node (producing BrahMos-NG cruise missiles); Adani Defence & Aerospace ammunition and missile complex at Kanpur node (South Asia\'s largest small arms and ammunition facility); Bharat Forge precision engineering units at Jhansi node.',
      'Land Allocation: Over 5,000 hectares earmarked, with 1,700+ hectares already allotted to tier-1 and tier-2 defence contractors.'
    ],
    analyticalPoints: [
      'Bundelkhand Revitalization: Allocating two anchor nodes to Jhansi and Chitrakoot directly links high-tech precision manufacturing with the drought-prone Bundelkhand region.',
      'MSME Defense Integration: UP already had a historical ordinance footprint (Field Gun Factory Kanpur, Small Arms Factory Kanpur, Ordnance Factory Muradnagar). UPDIC integrates private supply chains with Ordnance Factory Board (OFB corporatized entities).',
      'Quadruple Helix Model: Synergy between Government (UPEIDA single-window clearances), Industry (Tata, Adani, BrahMos, MKU), Academia (IIT Kanpur, IIT BHU providing defence testing incubators), and Military end-users.'
    ],
    mainsRelevance: 'UPPSC Mains GS-3: "Analyze the strategic and economic significance of the Uttar Pradesh Defence Industrial Corridor in achieving self-reliance in aerospace and defence manufacturing."',
    diagramOrFramework: 'Node Network: Western Cluster (Aligarh-Agra) <-> Central Cluster (Lucknow-Kanpur) <-> Southern Bundelkhand Cluster (Jhansi-Chitrakoot)',
    source: 'Ministry of Defence, UPEIDA UPDIC Progress Report 2024'
  },
  {
    id: 'up-energy-matrix',
    category: 'Energy Matrix & Solar',
    title: 'Energy Matrix of UP: Thermal, Narora Atomic & Solar Policy',
    sectionCode: 'UP_SPECIAL_SYSTEMS',
    marksPattern: '8-Mark (125 Words) / 12-Mark (200 Words)',
    keyFacts: [
      'Installed Power Capacity: Total installed capacity exceeds ~31,000 MW, dominated by Coal-based Thermal (~70%), followed by Hydro, Solar, and Nuclear.',
      'Thermal Power Backbone (UPRVUNL & NTPC): Obra Thermal Power Station (Sonbhadra), Anpara Super Thermal (Sonbhadra), Harduaganj (Aligarh - one of the oldest in India), Parichha (Jhansi), Singrauli Super Thermal (NTPC, Sonbhadra - "Energy Capital of India").',
      'Nuclear Power: Narora Atomic Power Station (NAPS, Bulandshahr) - 2 units of 220 MWe Pressurized Heavy Water Reactors (PHWRs) using indigenous heavy water and natural uranium fuel.',
      'UP Solar Energy Policy (2022-2027): Ambitious target of 22,000 MW (22 GW) solar power capacity by 2027 (14 GW utility scale solar parks, 6 GW solar rooftop, 2 GW solar irrigation pumps under PM-KUSUM).',
      'Bundelkhand Ultra Mega Solar Power Parks: Developing 4,000+ MW solar parks across Jalaun, Banda, Lalitpur, and Jhansi leveraging Bundelkhand\'s high solar irradiance (300+ sunny days/year).'
    ],
    analyticalPoints: [
      'DISCOM Financial Health (UPPCL): Severe financial stress caused by high Aggregate Technical & Commercial (AT&C) losses (~22-25%), legacy power purchase agreements (PPAs), and subsidized rural power supply; ongoing turnaround via Revamped Distribution Sector Scheme (RDSS).',
      'Ayodhya as Model Solar City: Being developed as UP\'s first 100% Solar City, utilizing solar trees, solar streetlights, public EV charging networks, and solar-powered passenger boats on Saryu river.'
    ],
    mainsRelevance: 'UPPSC Mains GS-3: "Critically evaluate the energy transition strategy of Uttar Pradesh. How far can the Bundelkhand solar parks compensate for the environmental footprint of Sonbhadra\'s thermal power hub?"',
    diagramOrFramework: 'Energy Balance: Sonbhadra (Thermal Giant) + Narora (Nuclear 440 MWe) + Bundelkhand (Solar 4 GW Hub) -> UPPCL Grid',
    source: 'UP New and Renewable Energy Development Agency (UPNEDA), UPRVUNL, CEA'
  },
  {
    id: 'up-ecology-river-pollution',
    category: 'Ecology & Pollution',
    title: 'Environmental Degradation: NCR AQI Crises, River Effluents & 10 Ramsar Sites',
    sectionCode: 'UP_SPECIAL_SYSTEMS',
    marksPattern: '8-Mark (125 Words) / 12-Mark (200 Words)',
    keyFacts: [
      'Air Quality Index (AQI) Crisis: Western UP districts falling within the National Capital Region (Noida, Greater Noida, Ghaziabad, Meerut, Baghpat, Bulandshahr) experience hazardous winter air quality (AQI > 400), subject to CAQM\'s Graded Response Action Plan (GRAP-I to IV).',
      'River Effluent Hotspots: (1) Ganga at Kanpur: Tanneries in Jajmau discharging toxic Chromium-VI into river streams (addressed via 20 MLD Common Effluent Treatment Plant - CETP); (2) Yamuna at Mathura-Agra: River enters UP virtually dead with zero Dissolved Oxygen (DO) from Delhi Okhla barrage; (3) Hindon River: Severe industrial effluent discharge from paper mills and sugar distilleries in Saharanpur, Muzaffarnagar, and Ghaziabad.',
      '10 Ramsar Wetlands of UP: (1) Upper Ganga River (Brijghat to Narora), (2) Nawabganj Bird Sanctuary (Unnao), (3) Samaspur Bird Sanctuary (Rae Bareli), (4) Sandi Bird Sanctuary (Hardoi), (5) Parvati Arga (Gonda), (6) Saman Bird Sanctuary (Mainpuri), (7) Sarsai Nawar Jheel (Etawah), (8) Sur Sarovar / Keetham (Agra), (9) Haiderpur Wetland (Muzaffarnagar/Bijnor), (10) Bakhira Wildlife Sanctuary (Sant Kabir Nagar).'
    ],
    analyticalPoints: [
      'Terai Arc Landscape (TAL) Conservation: High biodiversity corridor hosting Dudhwa Tiger Reserve (Lakhimpur Kheri), Pilibhit Tiger Reserve (TX2 Award winner), and Katarniaghat Wildlife Sanctuary. Threat: Severe human-tiger conflict in sugarcane border fields.',
      'Namami Gange Project Milestones: Zero untreated sewage discharge from Sisamau Nala in Kanpur (which previously dumped 140 MLD of raw sewage into Ganga); constructed multiple STPs and automated river water quality monitoring stations.'
    ],
    mainsRelevance: 'UPPSC Mains GS-3: "Discuss the major sources of river water pollution in Uttar Pradesh and assess the efficacy of industrial effluent treatment plants along the Ganga-Yamuna river basins."',
    diagramOrFramework: 'Wetland & River Map: Western UP (Hindon/NCR AQI) -> Doab (Yamuna at Agra) -> Central (Ganga at Kanpur tanneries) -> 10 Ramsar Sites Distributed.',
    source: 'UP Pollution Control Board (UPPCB), National Mission for Clean Ganga (NMCG), MoEFCC'
  },
  {
    id: 'up-disaster-risks',
    category: 'Disaster Vulnerability',
    title: 'Disaster Vulnerability of UP: Purvanchal Floods & Bundelkhand Droughts',
    sectionCode: 'UP_SPECIAL_SYSTEMS',
    marksPattern: '8-Mark (125 Words) / 12-Mark (200 Words)',
    keyFacts: [
      'Flood Hazard Profile: ~27 lakh hectares in UP are chronically flood-prone. Concentrated in Eastern UP (Purvanchal districts: Gorakhpur, Deoria, Kushinagar, Maharajganj, Siddharthnagar, Balrampur, Bahraich) along trans-boundary rivers originating in Nepal (Ghaghara/Karnali, Rapti, Gandak, Rohini).',
      'Drought Hazard Profile: Bundelkhand region (Jhansi, Lalitpur, Jalaun, Hamirpur, Mahoba, Banda, Chitrakoot) experiences recurring meteorological and hydrological droughts due to erratic monsoon rains and shallow granite bedrock.',
      'Heatwave Disasters: Severe summer heatwaves (temperatures exceeding 46-48°C) impacting Ballia, Prayagraj, and Banda, prompting the drafting of District Heat Action Plans (HAPs).',
      'Institutional Setup: UP State Disaster Management Authority (UPSDMA) chaired by the Chief Minister; State Disaster Response Force (SDRF) battalions stationed at Lucknow, Prayagraj, and Gorakhpur.'
    ],
    analyticalPoints: [
      'Transboundary River Dynamics with Nepal: Water releases from Nepal\'s catchment barrages (Banbasa, Girijapuri, Valmiki) cause rapid flash inundation in low-lying Purvanchal plains within 6 to 12 hours.',
      'Traditional Water Harvesting in Bundelkhand: Revival of historic Chandela and Bundela era masonry tanks (Talabs), check dams, and farm ponds under Khet Talab Yojana to recharge depleted aquifer fractures.'
    ],
    mainsRelevance: 'UPPSC Mains GS-3: "Analyze the contrasting disaster vulnerabilities of Eastern Uttar Pradesh (floods) and the Bundelkhand region (droughts). Suggest region-specific mitigation strategies."',
    diagramOrFramework: 'Disaster Matrix: Purvanchal (Trans-boundary Nepal river flood early warning) vs Bundelkhand (Khet Talab rainwater harvesting & Ken-Betwa link).',
    source: 'UPSDMA Flood Management Action Plan, Central Water Commission (CWC)'
  },
  {
    id: 'up-law-order-security',
    category: 'Law, Order & Borders',
    title: 'Security Architecture of UP: Police Commissionerates, ATS & Indo-Nepal Border',
    sectionCode: 'UP_SPECIAL_SYSTEMS',
    marksPattern: '8-Mark (125 Words) / 12-Mark (200 Words)',
    keyFacts: [
      'Police Commissionerate System: Shifted from Dual System (DM + SP) to Police Commissionerate System in 7 major metropolitan districts: Lucknow, Gautam Buddha Nagar (Noida), Kanpur Nagar, Varanasi, Agra, Ghaziabad, and Prayagraj. Empowers Commissioner of Police with magisterial powers under CrPC (preventive arrest, Sec 144, licensing).',
      'Specialized Security Formations: UP Police Special Task Force (STF - specialized in neutralizing mafia syndicates, organized paper leak gangs); UP Anti-Terrorist Squad (ATS - counter-terrorism commando hubs across border nodes); Anti-Land Mafia Task Force; Cyber Crime Police Stations established across ALL 75 districts.',
      'Indo-Nepal International Border: 551 km porous, unfenced border running across 7 UP districts: Pilibhit, Lakhimpur Kheri, Bahraich, Shravasti, Balrampur, Siddharthnagar, and Maharajganj. Guarded by Sashastra Seema Bal (SSB) with "No Man\'s Land" buffer.'
    ],
    analyticalPoints: [
      'Security Challenges on Indo-Nepal Frontier: Visa-free movement under 1950 Treaty exploited for Fake Indian Currency Notes (FICN) transit, third-country espionage penetration, human trafficking routes (via Sunauli and Rupaidiha checkpoints), and narcotics smuggling.',
      'Modern Countermeasures: Biometric digital facial recognition checkpoints installed at integrated check posts (ICPs), joint patrols by SSB and UP Police, and real-time intelligence sharing through the Subsidiary Multi-Agency Centre (SMAC).'
    ],
    mainsRelevance: 'UPPSC Mains GS-3 / GS-5: "Examine the security challenges along the open Indo-Nepal border in Uttar Pradesh and critically analyze the operational role of the Sashastra Seema Bal (SSB)."',
    diagramOrFramework: 'Border Layout: 7 Border Districts (Pilibhit -> Lakhimpur Kheri -> Bahraich -> Shravasti -> Balrampur -> Siddharthnagar -> Maharajganj) guarded by SSB.',
    source: 'UP Police Headquarters, Sashastra Seema Bal (SSB), MHA Border Management Division'
  }
];

// ----------------------------------------------------------------------------
// Section 3: UP RO/ARO — GS Paper III Allied Domains (Factual Speed Matrices)
// ----------------------------------------------------------------------------

export interface RoAroAgriRanking {
  commodity: string;
  nationalRankUP: string;
  shareInIndia: string;
  leadDistrictsInUP: string;
  keyExamFact: string;
}

export const roAroAgriRankingsData: RoAroAgriRanking[] = [
  {
    commodity: 'Wheat',
    nationalRankUP: '1st Rank',
    shareInIndia: '~32% - 34%',
    leadDistrictsInUP: 'Hardoi, Aligarh, Gorakhpur, Budaun',
    keyExamFact: 'UP ranks 1st in total production; however, Punjab and Haryana rank higher in per-hectare productivity.'
  },
  {
    commodity: 'Sugarcane',
    nationalRankUP: '1st Rank',
    shareInIndia: '~45% - 48%',
    leadDistrictsInUP: 'Muzaffarnagar, Bijnor, Lakhimpur Kheri, Meerut',
    keyExamFact: 'Highest cane growing acreage in India; Western UP is known as the "Sugar Belt of North India".'
  },
  {
    commodity: 'Potato',
    nationalRankUP: '1st Rank',
    shareInIndia: '~35%',
    leadDistrictsInUP: 'Agra, Firozabad, Farrukhabad, Kannauj',
    keyExamFact: 'Agra division alone accounts for over 28% of UP\'s potato harvest; exported under the brand name "Taj Potato".'
  },
  {
    commodity: 'Milk',
    nationalRankUP: '1st Rank (vies with Rajasthan)',
    shareInIndia: '~15.7%',
    leadDistrictsInUP: 'Jaunpur, Meerut, Bulandshahr, Mathura',
    keyExamFact: 'Operation Flood pioneer; state apex dairy cooperative is Pradeshik Cooperative Dairy Federation (PCDF / Parag brand).'
  },
  {
    commodity: 'Mango',
    nationalRankUP: '1st Rank',
    shareInIndia: '~23%',
    leadDistrictsInUP: 'Lucknow (Malihabad - Dasheri), Saharanpur (Chausa), Varanasi (Langra)',
    keyExamFact: 'Malihabadi Dasheri has a registered Geographical Indication (GI) tag; exported as "Nawab Mango".'
  },
  {
    commodity: 'Meat',
    nationalRankUP: '1st Rank',
    shareInIndia: '~15%',
    leadDistrictsInUP: 'Aligarh, Meerut, Ghaziabad, Unnao',
    keyExamFact: 'Leading state in buffalo meat (carabeef) export processing recognized by APEDA.'
  },
  {
    commodity: 'Rice',
    nationalRankUP: '2nd Rank (after West Bengal)',
    shareInIndia: '~13% - 15%',
    leadDistrictsInUP: 'Shahjahanpur, Barabanki, Maharajganj, Siddharthnagar',
    keyExamFact: 'Siddharthnagar\'s GI-tagged Kala Namak rice is renowned as the scented "Buddha Rice".'
  },
  {
    commodity: 'Total Foodgrains',
    nationalRankUP: '1st Rank',
    shareInIndia: '~18.5% - 19.2%',
    leadDistrictsInUP: 'Statewide distributed across 75 districts',
    keyExamFact: 'UP has the largest net cropped area under foodgrains in India.'
  }
];

export interface ICARInstituteInUP {
  instituteName: string;
  locationDistrict: string;
  specializationField: string;
  prelimsMatchPair: string;
}

export const icarInstitutesUPData: ICARInstituteInUP[] = [
  {
    instituteName: 'Indian Institute of Pulses Research (IIPR)',
    locationDistrict: 'Kanpur',
    specializationField: 'Pulse crop genetics, chickpea, pigeonpea and lentil HYV seeds',
    prelimsMatchPair: 'IIPR → Kanpur'
  },
  {
    instituteName: 'Indian Institute of Sugarcane Research (IISR)',
    locationDistrict: 'Lucknow',
    specializationField: 'Sugarcane breeding, ratoon management, jaggery tech',
    prelimsMatchPair: 'IISR → Lucknow'
  },
  {
    instituteName: 'Central Potato Research Station (CPRS)',
    locationDistrict: 'Modipuram (Meerut)',
    specializationField: 'Sub-station of CPRI Shimla; true potato seed tech for Indo-Gangetic plains',
    prelimsMatchPair: 'CPRS → Modipuram (Meerut)'
  },
  {
    instituteName: 'Indian Veterinary Research Institute (IVRI)',
    locationDistrict: 'Izatnagar (Bareilly)',
    specializationField: 'Apex national institute for veterinary pathology and animal vaccines',
    prelimsMatchPair: 'IVRI → Izatnagar, Bareilly'
  },
  {
    instituteName: 'Central Institute for Subtropical Horticulture (CISH)',
    locationDistrict: 'Rehmankhera (Lucknow)',
    specializationField: 'Tropical and subtropical fruits (Mango, Guava, Amla, Jamun)',
    prelimsMatchPair: 'CISH → Rehmankhera, Lucknow'
  },
  {
    instituteName: 'National Bureau of Fish Genetic Resources (NBFGR)',
    locationDistrict: 'Lucknow',
    specializationField: 'Fish gene banking, aquaculture biodiversity conservation',
    prelimsMatchPair: 'NBFGR → Lucknow'
  },
  {
    instituteName: 'Indian Institute of Vegetable Research (IIVR)',
    locationDistrict: 'Varanasi',
    specializationField: 'Hybrid vegetable seed breeding and disease-resistant cultivars',
    prelimsMatchPair: 'IIVR → Varanasi'
  },
  {
    instituteName: 'Central Agroforestry Research Institute (CAFRI)',
    locationDistrict: 'Jhansi',
    specializationField: 'Agroforestry systems for semi-arid Bundelkhand ecosystems',
    prelimsMatchPair: 'CAFRI → Jhansi'
  },
  {
    instituteName: 'National Sugar Institute (NSI)',
    locationDistrict: 'Kanpur',
    specializationField: 'Sugar technology and alcohol fermentation engineering (Under Dept of Food)',
    prelimsMatchPair: 'NSI → Kanpur'
  },
  {
    instituteName: 'Central Institute of Medicinal and Aromatic Plants (CIMAP - CSIR)',
    locationDistrict: 'Lucknow',
    specializationField: 'Mentha (mint), citronella, and high-value herbal extraction',
    prelimsMatchPair: 'CIMAP → Lucknow'
  }
];

export interface RoAroExpresswaySpec {
  name: string;
  exactLengthKm: string;
  laneCount: string;
  startingPoint: string;
  endingPoint: string;
  districtsTraversed: string[];
  specialFeature: string;
}

export const roAroExpresswaysSpecsData: RoAroExpresswaySpec[] = [
  {
    name: 'Ganga Expressway',
    exactLengthKm: '593.947 km (~594 km)',
    laneCount: '6-Lane (expandable to 8-lane)',
    startingPoint: 'Bijauli village, Meerut (NH-334)',
    endingPoint: 'Judapur Dando village, Prayagraj (NH-19 bypass)',
    districtsTraversed: ['Meerut', 'Hapur', 'Bulandshahr', 'Amroha', 'Sambhal', 'Budaun', 'Shahjahanpur', 'Hardoi', 'Unnao', 'Rae Bareli', 'Pratapgarh', 'Prayagraj'],
    specialFeature: 'Longest expressway in UP; features 3.5 km emergency airstrip in Jalalabad (Shahjahanpur).'
  },
  {
    name: 'Purvanchal Expressway',
    exactLengthKm: '340.824 km',
    laneCount: '6-Lane',
    startingPoint: 'Chand Sarai village, Lucknow (Lucknow-Sultanpur Road NH-731)',
    endingPoint: 'Haidaria village, Ghazipur (NH-31)',
    districtsTraversed: ['Lucknow', 'Barabanki', 'Amethi', 'Sultanpur', 'Ayodhya', 'Ambedkar Nagar', 'Azamgarh', 'Mau', 'Ghazipur'],
    specialFeature: '3.2 km reinforced airstrip at Kurebhar (Sultanpur) for fighter aircraft landing.'
  },
  {
    name: 'Bundelkhand Expressway',
    exactLengthKm: '296.070 km',
    laneCount: '4-Lane (expandable to 6-lane)',
    startingPoint: 'Bharatkoop near Gonda village, Chitrakoot (NH-35)',
    endingPoint: 'Kudrail village, Etawah (merges with Agra-Lucknow Expressway)',
    districtsTraversed: ['Chitrakoot', 'Banda', 'Mahoba', 'Hamirpur', 'Jalaun', 'Auraiya', 'Etawah'],
    specialFeature: 'Completed in record 28 months; backbone of the Bundelkhand Defence Corridor.'
  },
  {
    name: 'Agra-Lucknow Expressway',
    exactLengthKm: '302.222 km',
    laneCount: '6-Lane',
    startingPoint: 'Agra inner ring road (Etmadpur)',
    endingPoint: 'Sarosa Bharosa village, Mohan Road, Lucknow',
    districtsTraversed: ['Agra', 'Firozabad', 'Mainpuri', 'Etawah', 'Auraiya', 'Kannauj', 'Kanpur Nagar', 'Hardoi', 'Unnao', 'Lucknow'],
    specialFeature: 'India\'s first expressway with a 3.3 km dedicated fighter jet runway strip (in Unnao).'
  },
  {
    name: 'Yamuna Expressway',
    exactLengthKm: '165.537 km',
    laneCount: '6-Lane',
    startingPoint: 'Pari Chowk, Greater Noida',
    endingPoint: 'Kuberpur on NH-2, Agra',
    districtsTraversed: ['Gautam Buddha Nagar', 'Aligarh', 'Mathura', 'Hathras', 'Agra'],
    specialFeature: 'Developed by YEIDA; connects directly to upcoming Noida International Airport (Jewar).'
  },
  {
    name: 'Gorakhpur Link Expressway',
    exactLengthKm: '91.352 km',
    laneCount: '4-Lane',
    startingPoint: 'Jaitpur, Gorakhpur (NH-27)',
    endingPoint: 'Salarpur, Azamgarh (merges with Purvanchal Expressway)',
    districtsTraversed: ['Gorakhpur', 'Sant Kabir Nagar', 'Ambedkar Nagar', 'Azamgarh'],
    specialFeature: 'Connects the Gorakhpur industrial zone directly to Lucknow and Delhi markets.'
  }
];

export interface RoAroSchemeFactual {
  schemeName: string;
  launchYear: string;
  nodalMinistryOrDept: string;
  fundingPattern: string;
  targetBeneficiaries: string;
  financialQuantum: string;
}

export const roAroSchemesData: RoAroSchemeFactual[] = [
  {
    schemeName: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
    launchYear: '2019 (effective from 1 Dec 2018)',
    nodalMinistryOrDept: 'Ministry of Agriculture & Farmers Welfare, GoI',
    fundingPattern: '100% Central Sector Scheme (Zero state share)',
    targetBeneficiaries: 'All landholding farmer families across India',
    financialQuantum: '₹6,000 per year paid in three equal 4-monthly installments of ₹2,000 via DBT.'
  },
  {
    schemeName: 'Pradhan Mantri Awas Yojana - Gramin (PMAY-G)',
    launchYear: '2016 (restructured from Indira Awaas Yojana)',
    nodalMinistryOrDept: 'Ministry of Rural Development, GoI',
    fundingPattern: '60:40 (Plains states like UP), 90:10 (NE & Himalayan states)',
    targetBeneficiaries: 'Houseless families and those living in kutcha/dilapidated houses (SECC 2011)',
    financialQuantum: '₹1.20 lakh per unit in plains; ₹1.30 lakh in hilly areas + 90 days MGNREGA wages.'
  },
  {
    schemeName: 'Ayushman Bharat - PM Jan Arogya Yojana (AB-PMJAY)',
    launchYear: '2018 (launched from Ranchi, Jharkhand)',
    nodalMinistryOrDept: 'National Health Authority (NHA) / MoHFW',
    fundingPattern: '60:40 (Centre : State split in UP)',
    targetBeneficiaries: 'Bottom 40% vulnerable population (~12 Crore families across India)',
    financialQuantum: '₹5,00,000 health insurance cover per family per year for secondary/tertiary hospitalization.'
  },
  {
    schemeName: 'Jal Jeevan Mission (Har Ghar Jal)',
    launchYear: '2019 (Target: FHTC by 2024)',
    nodalMinistryOrDept: 'Department of Drinking Water & Sanitation, Ministry of Jal Shakti',
    fundingPattern: '50:50 (Normal states including UP), 90:10 (Himalayan/NE states), 100% (UTs)',
    targetBeneficiaries: 'Every rural household in India',
    financialQuantum: '55 liters per capita per day (lpcd) of prescribed quality potable tap water.'
  },
  {
    schemeName: 'Mukhyamantri Kanya Sumangala Yojana (UP)',
    launchYear: '2019 (Administered by UP Govt)',
    nodalMinistryOrDept: 'Women and Child Development Department, Uttar Pradesh',
    fundingPattern: '100% State Funded (UP State Budget)',
    targetBeneficiaries: 'Girl children of UP domicile families with annual income < ₹3 Lakh',
    financialQuantum: 'Enhanced to ₹25,000 total grant (from ₹15,000) given across 6 educational milestone stages.'
  }
];

export interface RoAroProtectedAreaMatch {
  id: string;
  sanctuaryOrPark: string;
  districtLocation: string;
  faunalHighlight: string;
  type: 'National Park' | 'Tiger Reserve' | 'Wildlife Sanctuary' | 'Bird Sanctuary' | 'Ramsar Site';
}

export const roAroProtectedAreasData: RoAroProtectedAreaMatch[] = [
  {
    id: 'pa-1',
    sanctuaryOrPark: 'Dudhwa National Park',
    districtLocation: 'Lakhimpur Kheri',
    faunalHighlight: 'Royal Bengal Tiger, Swamp Deer (Barasingha), One-horned Rhinoceros',
    type: 'National Park'
  },
  {
    id: 'pa-2',
    sanctuaryOrPark: 'Chandraprabha Wildlife Sanctuary',
    districtLocation: 'Chandauli',
    faunalHighlight: 'Historical habitat of Asiatic Lions reintroduction in 1957, Chinkara, Leopard',
    type: 'Wildlife Sanctuary'
  },
  {
    id: 'pa-3',
    sanctuaryOrPark: 'National Chambal Sanctuary',
    districtLocation: 'Agra & Etawah (Tri-state sanctuary with MP & Rajasthan)',
    faunalHighlight: 'Critically Endangered Gharial (Gavialis gangeticus), Gangetic River Dolphin, Red-crowned roofed turtle',
    type: 'Wildlife Sanctuary'
  },
  {
    id: 'pa-4',
    sanctuaryOrPark: 'Hastinapur Wildlife Sanctuary',
    districtLocation: 'Meerut, Ghaziabad, Amroha, Bijnor, Muzaffarnagar',
    faunalHighlight: 'Largest wildlife sanctuary in UP (2,073 sq km); Swamp Deer (Barasingha), Nilgai',
    type: 'Wildlife Sanctuary'
  },
  {
    id: 'pa-5',
    sanctuaryOrPark: 'Okhla Bird Sanctuary',
    districtLocation: 'Gautam Buddha Nagar (Noida)',
    faunalHighlight: 'Migratory waterbirds on Yamuna river, Spot-billed Pelican, Black-bellied Tern',
    type: 'Bird Sanctuary'
  },
  {
    id: 'pa-6',
    sanctuaryOrPark: 'Katarniaghat Wildlife Sanctuary',
    districtLocation: 'Bahraich',
    faunalHighlight: 'Forms strategic wildlife corridor between Dudhwa and Bardia National Park (Nepal); Gharial, Tiger',
    type: 'Wildlife Sanctuary'
  },
  {
    id: 'pa-7',
    sanctuaryOrPark: 'Kishanpur Wildlife Sanctuary',
    districtLocation: 'Lakhimpur Kheri',
    faunalHighlight: 'Part of Dudhwa Tiger Reserve; dense Sal forests, Bengal Florican, Otters',
    type: 'Wildlife Sanctuary'
  },
  {
    id: 'pa-8',
    sanctuaryOrPark: 'Ranipur Tiger Reserve & Sanctuary',
    districtLocation: 'Chitrakoot',
    faunalHighlight: 'Notified in 2022 as UP\'s 4th Tiger Reserve; Bundelkhand dry deciduous forest, Sloth Bear',
    type: 'Tiger Reserve'
  },
  {
    id: 'pa-9',
    sanctuaryOrPark: 'Sohelwa (Suhelwa) Wildlife Sanctuary',
    districtLocation: 'Shravasti & Balrampur',
    faunalHighlight: 'International border forest with Nepal; Leopard, Tiger, Barking Deer',
    type: 'Wildlife Sanctuary'
  },
  {
    id: 'pa-10',
    sanctuaryOrPark: 'Kaimoor Wildlife Sanctuary',
    districtLocation: 'Mirzapur & Sonbhadra',
    faunalHighlight: 'Blackbuck, Leopard, ancient prehistoric rock paintings',
    type: 'Wildlife Sanctuary'
  },
  {
    id: 'pa-11',
    sanctuaryOrPark: 'Sur Sarovar (Keetham Lake)',
    districtLocation: 'Agra',
    faunalHighlight: 'Ramsar Wetland, Bear Rescue Facility (world\'s largest sloth bear sanctuary)',
    type: 'Ramsar Site'
  },
  {
    id: 'pa-12',
    sanctuaryOrPark: 'Bakhira Bird Sanctuary',
    districtLocation: 'Sant Kabir Nagar',
    faunalHighlight: 'Ramsar Wetland; largest natural floodplain lake in Eastern UP, winter migratory birds',
    type: 'Ramsar Site'
  },
  {
    id: 'pa-13',
    sanctuaryOrPark: 'Nawabganj Bird Sanctuary (Shahid Chandra Shekhar Azad)',
    districtLocation: 'Unnao',
    faunalHighlight: 'Ramsar Wetland; Sarus Crane, Greylag Goose, Pintail',
    type: 'Ramsar Site'
  },
  {
    id: 'pa-14',
    sanctuaryOrPark: 'Samaspur Bird Sanctuary',
    districtLocation: 'Rae Bareli',
    faunalHighlight: 'Ramsar Wetland; perennial freshwater marsh supporting over 250 bird species',
    type: 'Ramsar Site'
  },
  {
    id: 'pa-15',
    sanctuaryOrPark: 'Sandi Bird Sanctuary',
    districtLocation: 'Hardoi',
    faunalHighlight: 'Ramsar Wetland; Indo-Gangetic shallow lake, vital wintering ground for Common Teal',
    type: 'Ramsar Site'
  },
  {
    id: 'pa-16',
    sanctuaryOrPark: 'Haiderpur Wetland',
    districtLocation: 'Muzaffarnagar & Bijnor',
    faunalHighlight: 'Ramsar Wetland formed on Madhya Ganga Barrage; Swamp Deer, Gharials, Hog Deer',
    type: 'Ramsar Site'
  }
];

// ----------------------------------------------------------------------------
// Comparative Evaluation Matrix: GS-3 Applied Dimensions
// ----------------------------------------------------------------------------
export interface ComparativeMatrixRow {
  parameter: string;
  upscCseGS3: string;
  uppscPcsGS3: string;
  upRoAro: string;
}

export const comparativeEvaluationMatrix: ComparativeMatrixRow[] = [
  {
    parameter: 'Testing Paradigm & Question Structure',
    upscCseGS3: 'Macroeconomic concepts, multi-layered policy trade-offs, global geopolitical linkages, structural internal security architecture. 20 compulsory questions (10M / 150 words & 15M / 250 words). Total: 250 Marks.',
    uppscPcsGS3: 'Analytical national concepts layered with specialized, high-weightage UP economy, expressways, regional disparity, and border management topics. 20 compulsory questions (8M / 125 words & 12M / 200 words). Total: 200 Marks.',
    upRoAro: 'Objective, data-heavy, speed-oriented factual extraction covering national and UP special statistics. Prelims Paper-I (140 MCQs), Mains GS (120 MCQs), Hindi Essay.'
  },
  {
    parameter: 'Agriculture & Food Economy Profile',
    upscCseGS3: 'Focuses on pricing models (A2+FL vs C2), global WTO subsidy classification boxes (Green/Amber/Blue), macro food security (NFSA), and structural value chains.',
    uppscPcsGS3: 'Evaluates the 9 agro-climatic zones of UP, sugarcane cash crop pricing politics (FRP vs SAP), state canal interlinking engineering (Ken-Betwa), and ODOP farm clusters.',
    upRoAro: 'Tests precise national production ranks (UP 1st in wheat, cane, potato, milk; 2nd in rice), ICAR institutional locations (IIPR, IISR, IVRI), NPK ratio distortion figures, and crop yields.'
  },
  {
    parameter: 'Infrastructure & Industrial Lens',
    upscCseGS3: 'Investment models (HAM, BOT, EPC), National Infrastructure Pipeline (₹111 Lakh Cr), National Logistics Policy (NLP), and multi-modal PM Gati Shakti mechanics.',
    uppscPcsGS3: 'In-depth routing mapping of UP expressways, node allocation in the UP Defence Industrial Corridor (6 nodes), and regional power setups (Sonbhadra vs Bundelkhand solar).',
    upRoAro: 'Exact lengths of expressways (Purvanchal 340.8 km, Ganga 594 km, Bundelkhand 296 km), specific districts traversed by projects, starting/ending village points, and scheme fund splits.'
  },
  {
    parameter: 'Security, Ecology & Disaster Lens',
    upscCseGS3: 'Sendai framework 4 priorities, global terror funding lines (FATF), encryption laws, asymmetric warfare equations, and national CAPFs mandates.',
    uppscPcsGS3: 'Namami Gange sewage interception (Kanpur Sisamau), NCR air mitigation GRAP systems, Indo-Nepal cross-border smuggling controls (551 km across 7 districts), and Police Commissionerates.',
    upRoAro: 'Ramsar site designations (10 wetlands in UP), wildlife sanctuary district correlations (Match List-I with List-II), structural anti-graft bodies, and environmental chemical formulas.'
  }
];
