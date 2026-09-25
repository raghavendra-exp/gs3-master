// ============================================================================
// GS-III COMPREHENSIVE DATA: AGRICULTURE, MARKETING, SUBSIDIES, PDS & FOOD PROCESSING
// ============================================================================

import { SyllabusSection } from './economyPlanningData';

export const agricultureComprehensiveData: SyllabusSection[] = [
  {
    id: 'cropping-patterns-irrigation',
    title: 'Cropping Patterns & Irrigation Systems',
    subTitle: 'Monocropping vs Crop Rotation, Ecological Fallout, Micro-Irrigation, PMKSY & National Water Policy',
    category: 'Cropping & Irrigation',
    description: 'Spatial and temporal arrangement of crops, determinants of cropping shifts, irrigation modes, and the ecological imperatives of water management in Indian agriculture.',
    coreConcepts: [
      {
        title: 'Determinants & Emerging Trends in Cropping Patterns',
        description: 'Why cropping patterns differ across India and how distorted incentives skew cultivation.',
        points: [
          'Types of Cropping Patterns: Monoculture (single crop season after season), Crop Rotation (sequential planting to restore soil nitrogen), Mixed Cropping (simultaneous cultivation without definite row pattern), Intercropping (simultaneous cultivation in definite row patterns).',
          'Determinants: Physiographic (soil, rainfall, temperature); Economic (MSP support, assured procurement, market price, credit availability); Technological (availability of tubewells, HYV seeds, farm machinery); Institutional (landholding size, tenancy security).',
          'Emerging Trends & Distortions: Unbalanced shift towards water-intensive rice-wheat monoculture in semi-arid north-western India (Punjab, Haryana, Western UP); expansion of sugarcane in water-stressed Marathwada; decline in acreage of climate-resilient nutri-cereals (millets/Shree Anna) and pulses.',
          'Long-Run Ecological Consequences: Severe groundwater depletion (dark zones), soil salinity and alkalization due to over-irrigation, micronutrient exhaustion (zinc, iron, boron), and seasonal air pollution from stubble burning (parali).'
        ],
        prelimsHook: 'Rice and Sugarcane together consume over 60% of India’s total agricultural irrigation water despite accounting for less than 25% of gross cropped area.',
        mainsHook: '"The MSP-procurement nexus has converted the semi-arid breadbasket of north-west India into an ecological disaster zone." Discuss cropping diversification solutions.',
        officialSource: 'CACP Reports / NITI Aayog Agriculture Sector Reviews'
      },
      {
        title: 'Irrigation Modes & The Micro-Irrigation Revolution',
        description: 'Canal, Tubewell, Drip, and Sprinkler systems compared across efficiency and water footprint.',
        points: [
          'Source Distribution: Ground water (Tubewells & Wells) accounts for ~64% of net irrigated area; Surface canals contribute ~23%; Tanks contribute ~2-3%; other sources make up the balance.',
          'Water Use Efficiency (WUE): Surface flood irrigation achieves only 30-40% efficiency due to conveyance and evaporation losses; Drip irrigation achieves 85-90% efficiency with direct root-zone delivery; Sprinkler achieves 70-80%.',
          'Pradhan Mantri Krishi Sinchayee Yojana (PMKSY): Built on 4 pillars: (1) Accelerated Irrigation Benefit Programme (AIBP - completing stalled major/medium projects); (2) Har Khet Ko Pani (surface minor irrigation and tank repair); (3) Per Drop More Crop (PDMC - micro-irrigation subsidies); (4) Watershed Development.',
          'Need for a National Water Policy: Ground water extraction in India exceeds that of the US and China combined. Shift needed from "water-supply augmentation" to "demand-side management", pricing agricultural electricity, and participatory irrigation management (Water Users Associations - WUAs).'
        ]
      }
    ],
    comparativeTable: {
      headers: ['Irrigation System', 'Water Application Efficiency', 'Suitability & Constraints', 'Govt Support Scheme'],
      rows: [
        ['Flood / Furrow', '30% – 40%', 'Causes waterlogging and salinity; high evaporation losses', 'Traditional canal command areas'],
        ['Drip Irrigation', '85% – 95%', 'Ideal for row crops, fruits, vegetables, sugarcane; saves 40-60% water', 'PMKSY - Per Drop More Crop (up to 55% subsidy)'],
        ['Sprinkler Irrigation', '70% – 80%', 'Suitable for undulating terrain, sandy soils, pulses & oilseeds', 'Micro Irrigation Fund (NABARD) with ₹10,000 Cr corpus'],
        ['Sub-surface Drip', '90% – 98%', 'Negligible evaporation; zero weed growth; higher initial capital outlay', 'Precision Agriculture Technology Missions']
      ]
    }
  },
  {
    id: 'agri-marketing-tech',
    title: 'Agricultural Marketing & E-Technology',
    subTitle: 'APMCs, e-NAM, FPOs, Contract Farming, Kisan Drones & AgriStack',
    category: 'Marketing & E-Tech',
    description: 'Transforming post-harvest agricultural marketing from fragmented, cartelized APMC mandis into a unified, transparent national market empowered by digital public infrastructure.',
    coreConcepts: [
      {
        title: 'Agricultural Marketing: Flaws of APMC & Modern Reforms',
        description: 'How middlemen and fragmented state laws suppress farmer realization prices.',
        points: [
          'Traditional Marketing Channels: Farmer ➔ Village Trader ➔ Commission Agent (Arhatiya) ➔ APMC Wholesaler ➔ Retailer ➔ Consumer. Farmers typically realize only 25-35% of the final consumer rupee (especially for perishables).',
          'Structural Flaws in APMCs: Conflict of interest (APMCs act as both regulator and market operator); high market fees, user charges, and commission rates; cartelization and secret bidding among licensed traders; fragmented markets (over 2,500 regulated mandis operating under independent state acts).',
          'Electronic National Agriculture Market (e-NAM): Pan-India electronic trading portal integrating 1,361+ mandis across 23 states/UTs; promotes single-window services, assaying facilities, warehouse-based trading, and online payment directly into farmers’ bank accounts.',
          'Farmer Producer Organisations (FPOs): Aggregating small and marginal farmers (who constitute 86% of holdings) to achieve economies of scale in input procurement, mechanization, credit access, and collective bargaining with bulk buyers.'
        ],
        prelimsHook: 'Under e-NAM, e-NWRs (Electronic Negotiable Warehouse Receipts) issued by WDRA-registered warehouses enable farmers to sell produce without physically transporting it to mandis.',
        mainsHook: '"Farmer Producer Organisations (FPOs) bridge the gap between fragmented smallholder farming and corporate supply chains." Analyze their potential and structural hurdles.',
        officialSource: 'Ministry of Agriculture / SFAC / NABARD'
      },
      {
        title: 'E-Technology & Digital Agriculture Missions',
        description: 'Drones, remote sensing, AI, and digital public infrastructure aiding agriculture.',
        points: [
          'AgriStack (India Digital Ecosystem for Agriculture - IDEA): A federated digital architecture creating farmer registries (Farmer IDs linked to land records), georeferenced farm plots, and digital crop surveys for automated PM-KISAN, crop insurance, and soil health monitoring.',
          'Kisan Drones: Subsidized under Sub-Mission on Agricultural Mechanization (SMAM); used for precision spraying of pesticides/nano-fertilizers, crop assessment, digitization of land records, and spraying 1 acre in 7-10 minutes with 90% water savings.',
          'Early Warning & Advisory Systems: Meghdoot App (joint IMD/ICAR weather advisories for 100+ crops); Damini App (lightning alerts); Kisan Call Centres (toll-free 1800-180-1551 in 22 regional languages).'
        ]
      }
    ],
    schemesAndPolicies: [
      {
        name: 'Formation & Promotion of 10,000 FPOs',
        objective: 'Central sector scheme with ₹6,865 Cr outlay to create vibrant farmer producer collectives.',
        salientFeatures: ['Equity grant up to ₹15 Lakh per FPO', 'Credit guarantee cover up to ₹2 Crore per FPO via NABARD/NCDC']
      },
      {
        name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
        objective: 'Yield and weather-indexed crop insurance with uniform low premium.',
        salientFeatures: ['2% premium for Kharif, 1.5% for Rabi, 5% for Annual Commercial/Horticultural crops', 'Tech-driven yield estimation using satellite data and drones']
      }
    ]
  },
  {
    id: 'subsidies-msp-pds',
    title: 'Farm Subsidies, MSP & Public Distribution System',
    subTitle: 'Fertilizer NBS, WTO Green/Amber Boxes, Shanta Kumar Committee, NFSA 2013 & Buffer Stocks',
    category: 'Subsidies, MSP & PDS',
    description: 'Comprehensive analysis of direct vs indirect farm subsidies, WTO trade conflicts, minimum support prices calculation, PDS supply-chain leakages, and national food security architecture.',
    coreConcepts: [
      {
        title: 'Farm Subsidies & The WTO Agreement on Agriculture (AoA)',
        description: 'Domestic support disciplines, trade distortions, and the peace clause dispute.',
        points: [
          'Direct vs. Indirect Subsidies: Direct subsidies transfer cash straight to the beneficiary (PM-KISAN ₹6,000/year, Rythu Bandhu); Indirect subsidies lower the cost of inputs (fertilizer subsidy, free agricultural power, canal water charges, interest subvention on Kisan Credit Card).',
          'Fertilizer Subsidy Distortions: Urea is price-controlled under statutory MRP (highly subsidized), while P & K fertilizers are under the Nutrient Based Subsidy (NBS) regime. This price differential has distorted the ideal N:P:K application ratio from 4:2:1 to over 8.2:3.2:1 in Punjab, degrading soil health.',
          'WTO AoA Box Classification: Green Box (non-trade distorting research, disaster relief - unlimited); Blue Box (production-limiting subsidies - permissible); Amber Box (trade-distorting price support, MSP, input subsidies - capped at 10% of total agricultural production value for developing nations under de minimis rule).',
          'Bali Ministerial Peace Clause: Shields India from WTO dispute challenges if public stockholding programs for food security breach the 10% Amber Box limit, provided transparency and non-export conditions are met.'
        ],
        prelimsHook: 'The WTO "Peace Clause" negotiated at the Bali Ministerial Conference (2013) grants legal immunity against challenges to developing countries’ public food procurement programmes.',
        mainsHook: '"Replacing input subsidies with a unified direct cash transfer will conserve fiscal resources, water, and soil health." Critically evaluate this proposal.',
        officialSource: 'WTO AoA / Ministry of Chemicals & Fertilizers'
      },
      {
        title: 'Minimum Support Price (MSP) Determination & Limitations',
        description: 'How CACP calculates prices and the structural shortcomings of the procurement regime.',
        points: [
          'CACP Cost Concepts: (1) A2: Actual paid-out costs on seeds, fertilizers, pesticides, hired labor, fuel, and irrigation; (2) A2 + FL: A2 plus an imputed value of unpaid Family Labor; (3) C2: Comprehensive cost including A2 + FL plus imputed rent on owned land and interest on owned fixed capital.',
          'Government Mandate: Government fixes MSP at a minimum of 1.5 times (50% margin) over A2+FL costs for 22 mandated crops plus Fair and Remunerative Price (FRP) for sugarcane.',
          'Structural Shortcomings: As highlighted by the Shanta Kumar Committee, only ~6% of total agricultural households in India effectively benefit from government MSP procurement, overwhelmingly concentrated in wheat and paddy in Punjab, Haryana, MP, and Chhattisgarh.',
          'Demand for Statutory Guarantee: Farmers demand statutory legal guarantee for MSP across all crops; counter-arguments cite potential ₹10+ Lakh Crore fiscal burden, inflationary pressures, export uncompetitiveness, and legal complexities in forcing private trade to buy above MSP.'
        ]
      },
      {
        title: 'Revamping the Public Distribution System (PDS) & Buffer Stocks',
        description: 'FCI operations, NFSA 2013 entitlements, and the Shanta Kumar reform blueprint.',
        points: [
          'National Food Security Act (NFSA) 2013: Covers up to 75% of rural and 50% of urban population (~67% of total population / 81 Crore people); provides 5 kg foodgrains per person per month (now free under PM Garib Kalyan Anna Yojana - PMGKAY); Antyodaya Anna Yojana (AAY) poorest households receive 35 kg/month.',
          'One Nation One Ration Card (ONORC): Enabled by biometric Aadhaar authentication and electronic Point of Sale (e-PoS) devices; allows migrant laborers to lift their food grain quota from any Fair Price Shop (FPS) across the nation.',
          'Shanta Kumar Committee Recommendations: (1) Unburden FCI by decentralizing procurement to states with surplus capacity; (2) Reduce NFSA coverage from 67% to 40% to target truly needy; (3) Gradually transition to Direct Benefit Transfer (cash transfers) in urban and food-surplus districts; (4) Outsource grain stocking to modern private steel silos; (5) Liquidate excess buffer stocks in open market/exports.'
        ]
      }
    ],
    comparativeTable: {
      headers: ['CACP Cost Metric', 'Components Included', 'Used for Current MSP?'],
      rows: [
        ['Cost A2', 'Paid-out cash & in-kind expenses (seeds, fertilizer, fuel, hired labor)', 'No (used as baseline)'],
        ['Cost A2 + FL', 'Cost A2 + Imputed monetary value of unpaid Family Labor', 'Yes (MSP = A2+FL + 50% profit margin)'],
        ['Cost C2', 'A2+FL + Imputed rent on owned land + Interest on owned capital', 'No (Demanded by Swaminathan Commission & Farmer Unions)']
      ]
    }
  },
  {
    id: 'animal-rearing-food-processing',
    title: 'Economics of Animal-Rearing & Food Processing',
    subTitle: 'Livestock Contribution, PM Matsya Sampada, Weber’s Location Theory & PM-SAMPADA',
    category: 'Animal Husbandry & Food Processing',
    description: 'Livestock as a socio-economic insurance policy for smallholders, dairy and blue revolutions, and the farm-to-fork value addition continuum.',
    coreConcepts: [
      {
        title: 'Economics of Animal Husbandry, Dairy & Fisheries',
        description: 'Livestock generates ~30% of agricultural GVA with higher stability than field crops.',
        points: [
          'Socio-Economic Safety Net: Livestock distribution is far more equitable than land ownership; small and marginal farmers own ~80% of livestock. Acts as an immediate cash liquidity cushion against drought and crop failures.',
          'Dairy Sector: India is the world’s #1 milk producer (~230+ MMT, ~24% of global output); White Revolution legacy via AMUL cooperative model; supported by Rashtriya Gokul Mission (indigenous breeds genetic upgradation and sex-sorted semen) and National Programme for Dairy Development.',
          'Fisheries & Aquaculture: Blue Revolution; India is the 2nd largest aquaculture and 3rd largest fish producing nation; Pradhan Mantri Matsya Sampada Yojana (PMMSY) with ₹20,050 Cr outlay focusing on modern fishing harbors, cold chain, and seaweed farming.',
          'Major Constraints: Severe deficit in green fodder (35% deficit) and dry fodder (11% deficit); widespread prevalence of Foot and Mouth Disease (FMD) and Brucellosis; lack of organized livestock processing and cold chains.'
        ],
        prelimsHook: 'The Kisan Credit Card (KCC) scheme was extended in 2018-19 to cover the working capital requirements of fisheries and animal husbandry farmers.',
        mainsHook: '"Livestock rearing is the most viable path to climate-resilient rural incomes and women empowerment in India." Elucidate with empirical evidence.',
        officialSource: 'Basic Animal Husbandry Statistics / Dept of Animal Husbandry & Dairying'
      },
      {
        title: 'Food Processing Industry: Scope, Location & Supply Chains',
        description: 'Transforming agricultural harvest into high-value manufactured consumer goods.',
        points: [
          'Scope & Significance: India produces enormous agricultural surplus (largest producer of milk, pulses, spices; 2nd largest of fruits, vegetables, foodgrains), yet processes only ~10% of total output (vs 60-80% in US/China). Post-harvest agricultural losses exceed ₹1 Lakh Crore annually.',
          'Weber’s Theory of Industrial Location: Weight-losing, highly perishable raw materials (sugar, dairy, fruits, vegetables) must locate processing units proximate to agricultural fields (raw-material oriented); shelf-stable packaged foods (bakery, beverages) locate near urban consumer markets (market-oriented).',
          'Upstream & Downstream Requirements: Upstream: Assured quality raw material, contract farming arrangements, primary processing centres, farm-gate refrigerated transport; Downstream: Cold chain distribution, brand equity, quality certifications (FSSAI, Codex Alimentarius), hyper-market retail tie-ups.',
          'Government Initiatives: (1) Pradhan Mantri Kisan SAMPADA Yojana (Mega Food Parks, Integrated Cold Chain, Agro-Processing Clusters); (2) PM Formalisation of Micro food processing Enterprises (PM-FME - One District One Product approach); (3) 100% FDI under automatic route for food processing.'
        ]
      }
    ],
    schemesAndPolicies: [
      {
        name: 'Pradhan Mantri Kisan SAMPADA Yojana (PMKSY)',
        objective: 'Comprehensive package creating modern infrastructure with efficient supply chain management.',
        salientFeatures: ['Mega Food Parks with plug-and-play industrial plots', 'Creation / Expansion of Food Processing & Preservation Capacities (CEFPPC)']
      },
      {
        name: 'PM Formalisation of Micro food processing Enterprises (PM-FME)',
        objective: 'Upgrading 200,000 unorganized micro-food processing units with financial and technical support.',
        salientFeatures: ['One District One Product (ODOP) framework', 'Credit-linked capital subsidy up to 35% of eligible project cost (max ₹10 Lakh)']
      }
    ]
  }
];
