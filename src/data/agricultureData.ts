import { CropData, StateAgriProfile, IrrigationModel, MspCrop } from '../types';

export const majorCropsData: CropData[] = [
  {
    id: 'crop-paddy-rice',
    name: 'Rice (Paddy)',
    season: 'Kharif',
    category: 'Foodgrain',
    soilRequirements: 'Deep clayey and loamy soils that can retain standing water; alluvial soil of Indo-Gangetic plains.',
    temperatureRange: '20°C - 35°C (Requires warm and humid climate)',
    rainfallRequirement: '100 cm - 200 cm (or assured canal/tubewell irrigation)',
    topProducingStates: ['West Bengal', 'Uttar Pradesh', 'Punjab', 'Telangana', 'Andhra Pradesh'],
    currentMsp: '₹2,300 / quintal (Common), ₹2,320 (Grade A)',
    cacpFormula: 'Calculated at 50% profit over Cost A2+FL',
    issues: [
      'Heavy methane emissions (anaerobic decomposition in flooded fields ~10% of global agri GHG).',
      'Massive groundwater depletion in Punjab and Haryana due to free electricity and assured procurement.',
      'Stubble burning (Paddy straw) causing severe winter air pollution in NCR.'
    ],
    examSignificance: 'India is the world\'s largest exporter of rice (~40% global trade share). Crucial for food security (NFSA).'
  },
  {
    id: 'crop-wheat',
    name: 'Wheat',
    season: 'Rabi',
    category: 'Foodgrain',
    soilRequirements: 'Well-drained fertile loamy and clayey loamy soils; temperate alluvial soils.',
    temperatureRange: '10°C - 15°C (at sowing) and 21°C - 26°C (at ripening/harvesting with bright sunshine)',
    rainfallRequirement: '50 cm - 75 cm evenly distributed during vegetative stage',
    topProducingStates: ['Uttar Pradesh', 'Madhya Pradesh', 'Punjab', 'Haryana', 'Rajasthan'],
    currentMsp: '₹2,425 / quintal',
    cacpFormula: 'Set at ~100%+ margin over Cost A2+FL',
    issues: [
      'Terminal heat stress: Sudden early heatwaves during grain filling stage in March-April reduce yields.',
      'High fertilizer sensitivity leading to urea overuse and soil alkalinity.',
      'Pest and yellow rust susceptibility in northwest plains.'
    ],
    examSignificance: 'Second most vital staple food; staple of Green Revolution. Export curbs imposed during global geopolitical shocks.'
  },
  {
    id: 'crop-millets-shree-anna',
    name: 'Millets (Shree Anna: Bajra, Jowar, Ragi)',
    season: 'Kharif',
    category: 'Millet',
    soilRequirements: 'Grows well on poor, sandy, light, and shallow black soils; drought-hardy.',
    temperatureRange: '25°C - 32°C (C4 photosynthetic pathway makes them climate-resilient)',
    rainfallRequirement: '30 cm - 50 cm (Requires 70% less water than rice)',
    topProducingStates: ['Rajasthan (Bajra)', 'Maharashtra (Jowar)', 'Karnataka (Ragi)', 'Uttar Pradesh'],
    currentMsp: 'Bajra: ₹2,625 / qtl, Jowar: ₹3,371 / qtl, Ragi: ₹4,290 / qtl',
    cacpFormula: 'Highest percentage margin over Cost A2+FL to incentivize dietary diversification',
    issues: [
      'Low consumer preference and historical neglect compared to wheat and rice.',
      'Short shelf life of millet flour (rapid rancidity due to high lipase activity).',
      'Limited public procurement and decentralized processing infrastructure.'
    ],
    examSignificance: 'UN International Year of Millets 2023. Dubbed "Shree Anna" in Budget for food, nutritional, and climate security.'
  },
  {
    id: 'crop-pulses-tur-chana',
    name: 'Pulses (Gram/Chana, Tur/Arhar, Moong)',
    season: 'Rabi', // Chana is Rabi; Tur is Kharif
    category: 'Pulse',
    soilRequirements: 'Dry, light to medium well-drained soils; cannot withstand waterlogging.',
    temperatureRange: '18°C - 30°C',
    rainfallRequirement: '40 cm - 60 cm (Rainfed crop)',
    topProducingStates: ['Madhya Pradesh', 'Maharashtra', 'Rajasthan', 'Karnataka', 'Uttar Pradesh'],
    currentMsp: 'Gram: ₹5,650 / qtl, Tur/Arhar: ₹7,550 / qtl',
    cacpFormula: 'A2+FL with special pulses bonus',
    issues: [
      'High price volatility; cobweb phenomenon causing boom-and-bust planting cycles.',
      'High import dependence on yellow peas, lentils from Canada, Australia, Mozambique.',
      'Susceptibility to pod borer insect pests and unseasonal rains at harvesting.'
    ],
    examSignificance: 'Leguminous crops that fix atmospheric nitrogen (biological nitrogen fixation), restoring soil fertility without synthetic fertilizers.'
  },
  {
    id: 'crop-sugarcane',
    name: 'Sugarcane',
    season: 'Kharif',
    category: 'Commercial',
    soilRequirements: 'Deep rich loamy soils, black cotton soil, alluvial soils with good drainage.',
    temperatureRange: '21°C - 27°C with hot and humid climate',
    rainfallRequirement: '75 cm - 150 cm (Requires 12 to 18 months crop duration)',
    topProducingStates: ['Uttar Pradesh', 'Maharashtra', 'Karnataka', 'Tamil Nadu'],
    currentMsp: 'FRP (Fair & Remunerative Price) ₹340 / quintal (linked to 10.25% sugar recovery)',
    cacpFormula: 'Determined as FRP under Sugarcane (Control) Order, 1966',
    issues: [
      'Huge water guzzler: Maharashtra Marathwada region facing severe drought while sugarcane acreage expands.',
      'Cane price arrears: Delayed payments by private sugar mills to cane farmers.',
      'Export restrictions and diversion to Ethanol Blending Programme (E20 target).'
    ],
    examSignificance: 'India is top producer and consumer of sugar. Ethanol blending (EBP) provides alternative revenue stream for sugar mills.'
  }
];

export const stateAgriProfiles: StateAgriProfile[] = [
  {
    id: 'state-up',
    name: 'Uttar Pradesh',
    majorCrops: ['Wheat', 'Sugarcane', 'Paddy', 'Potato', 'Mustard', 'Mango'],
    croppingPattern: 'Paddy-Wheat dominant in Eastern UP; Sugarcane-Wheat-Paddy in Western UP.',
    soilType: 'Deep fertile Alluvial soil of Ganga-Yamuna Doab and Terai belt.',
    irrigationCoveragePercent: 86,
    majorIssues: [
      'Small and fragmented landholdings (average farm size < 0.75 hectare).',
      'Flooding and waterlogging in Eastern UP / Purvanchal (Ghaghara, Gandak, Rapti rivers).',
      'Groundwater over-exploitation in Western UP districts.'
    ],
    flagshipSchemes: ['PM-KISAN', 'Mukhyamantri Krishak Durghatna Kalyan Yojana', 'UP Agriculture Export Policy', 'Mission Natural Farming'],
    agriExports: ['Basmati & Non-Basmati Rice', 'Sugar & Molasses', 'Meat & Meat Products', 'Mango (Malihabad)'],
    currentDevelopments: 'Rapid expansion of One District One Product (ODOP) food processing clusters (Amla in Pratapgarh, Kala Namak Rice in Siddharthnagar).',
    pyqFocus: 'UPPSC Mains GS-3 & GS-5 (UP Special): Cropping patterns, irrigation disparities between Western and Eastern UP.'
  },
  {
    id: 'state-punjab',
    name: 'Punjab',
    majorCrops: ['Wheat', 'Paddy', 'Cotton', 'Maize', 'Basmati Rice'],
    croppingPattern: 'Intensive Paddy-Wheat Monoculture covering ~80% of net sown area.',
    soilType: 'Alluvial soils (Khadar and Bhangar) enriched by Indus river tributaries.',
    irrigationCoveragePercent: 99,
    majorIssues: [
      'Depletion of deep aquifers (>75% administrative blocks classified as "Over-exploited" by CGWB).',
      'Stubble burning resulting in trans-boundary smog and particulate spikes.',
      'Cancer belt in Malwa region attributed to pesticide and heavy chemical runoff.'
    ],
    flagshipSchemes: ['Crop Diversification Scheme', 'Pani Bachao Paisa Kamao', 'In-situ Crop Residue Management (CRM)'],
    agriExports: ['Premium Basmati Rice', 'Kinnow', 'Wheat flour'],
    currentDevelopments: 'Encouraging Direct Seeding of Rice (DSR) and short-duration PR-126 paddy varieties to conserve 20% irrigation water.',
    pyqFocus: 'UPSC Mains GS-3: Ecological crisis of the Green Revolution, groundwater governance, stubble management.'
  },
  {
    id: 'state-maharashtra',
    name: 'Maharashtra',
    majorCrops: ['Soybean', 'Cotton', 'Sugarcane', 'Pulses (Tur, Gram)', 'Onion', 'Grapes', 'Pomegranate'],
    croppingPattern: 'Kharif cotton/soybean in Vidarbha/Marathwada; Sugarcane & horticulture in Western Maharashtra.',
    soilType: 'Black cotton soil (Regur) rich in clay and moisture-retentive, derived from Deccan lava traps.',
    irrigationCoveragePercent: 20,
    majorIssues: [
      'Agrarian distress and farmer indebtedness in Vidarbha and Marathwada rainfed regions.',
      'Sugarcane occupies only 4% of cultivated area but consumes 65% of state irrigation water.',
      'Frequent drought cycles and onion price crash causing farmer losses.'
    ],
    flagshipSchemes: ['Jalyukt Shivar Abhiyan', 'Nanaji Deshmukh Krishi Sanjivani Prakalp (PoCRA)', 'MahaDBT Farmer Portal'],
    agriExports: ['Grapes (Nashik)', 'Onions', 'Pomegranate', 'Alphonso Mango', 'Soybean meal'],
    currentDevelopments: 'Pioneered Farmer Producer Organizations (FPOs) and cluster-based horticulture export value chains.',
    pyqFocus: 'UPSC & MPSC Mains: Agrarian distress causes, micro-irrigation mandate for sugarcane, horticulture marketing.'
  },
  {
    id: 'state-mp',
    name: 'Madhya Pradesh',
    majorCrops: ['Wheat (Sharbati)', 'Soybean', 'Gram (Chana)', 'Mustard', 'Garlic', 'Lentils'],
    croppingPattern: 'Soybean-Wheat rotation; Pulses-Oilseeds dominant in Bundelkhand and Malwa.',
    soilType: 'Medium to deep black soils in Malwa; alluvial in Chambal; red and yellow in Baghelkhand.',
    irrigationCoveragePercent: 48,
    majorIssues: [
      'Drought vulnerability in Bundelkhand region.',
      'Soil erosion and ravines in the Chambal basin.',
      'Storage and procurement bottlenecks during peak harvest.'
    ],
    flagshipSchemes: ['Bhavantar Bhugtan Yojana (Price Deficiency Payment Pioneer)', 'Mukhyamantri Solar Pump Yojana'],
    agriExports: ['Organic Wheat (Sharbati)', 'Non-GMO Soybean Meal', 'Pulses'],
    currentDevelopments: 'Largest producer of organic certified food in India; record Krishi Karman Award recipient.',
    pyqFocus: 'Bhavantar Bhugtan Yojana as an alternative to physical MSP procurement (NITI Aayog model).'
  }
];

export const irrigationModels: IrrigationModel[] = [
  {
    id: 'irrig-drip',
    name: 'Drip Micro-Irrigation',
    costIntensity: 'High',
    waterUseEfficiencyPercent: 90,
    suitableCrops: ['Sugarcane', 'Cotton', 'Horticulture (Banana, Grapes, Citrus)', 'Vegetables', 'Plantation'],
    advantages: [
      'Saves 40% - 60% irrigation water by delivering droplets directly to the root zone.',
      'Enables fertigation (dissolving fertilizer in water), boosting fertilizer use efficiency by 30%.',
      'Suppresses weed growth and reduces pumping power bills.'
    ],
    limitations: [
      'High initial capital cost (₹60,000 - ₹1,00,000 per hectare).',
      'Emitter clogging due to silt, algae, and salt deposits in hard water.',
      'Plastic tubing vulnerable to rodent attacks and damage during tillage.'
    ],
    govtScheme: 'PM Krishi Sinchayee Yojana (PMKSY) - Per Drop More Crop (PDMC) with 55% subsidy for small/marginal farmers.'
  },
  {
    id: 'irrig-sprinkler',
    name: 'Sprinkler Irrigation',
    costIntensity: 'Medium',
    waterUseEfficiencyPercent: 75,
    suitableCrops: ['Wheat', 'Gram', 'Mustard', 'Groundnut', 'Millets', 'Tea/Coffee'],
    advantages: [
      'Ideal for undulating and undulating topography where canal flow is impossible.',
      'Protects crops against frost during harsh North Indian winters by creating a humid microclimate.',
      'Eliminates need for field channels and land leveling.'
    ],
    limitations: [
      'High water evaporation losses during high wind velocity or hot daylight hours.',
      'Requires continuous power pressure to rotate sprinkler nozzles.',
      'Not suitable for crops requiring standing water (paddy).'
    ],
    govtScheme: 'PMKSY - Per Drop More Crop & National Mission on Sustainable Agriculture (NMSA).'
  },
  {
    id: 'irrig-canal',
    name: 'Canal Flow Irrigation',
    costIntensity: 'Low',
    waterUseEfficiencyPercent: 35,
    suitableCrops: ['Paddy', 'Wheat', 'Sugarcane', 'Jute'],
    advantages: [
      'Low operational cost for farmers once dam and main/branch canals are constructed.',
      'Perennial water supply from Himalayan rivers (Indira Gandhi Canal, Bhakra, Sharda Canal).',
      'Recharges adjacent groundwater table through seepage.'
    ],
    limitations: [
      'Extremely poor water use efficiency (30-38%) due to unlined canal seepage and flood irrigation.',
      'Tail-end deprivation: Farmers at canal ends often receive zero water.',
      'Leads to soil waterlogging and secondary salinization in command areas.'
    ],
    govtScheme: 'Accelerated Irrigation Benefits Programme (AIBP) and Command Area Development (CAD).'
  }
];

export const mspCropList: MspCrop[] = [
  {
    crop: 'Paddy (Common)',
    category: 'Kharif',
    currentMsp: '₹2,300 / quintal',
    costConceptUsed: 'A2+FL (50% margin minimum)',
    cacpBasis: 'Covers paid-out costs (seeds, fertilizer, hired labour, diesel) + imputed family labour.',
    procurementReality: 'Heavily procured in Punjab, Haryana, Telangana, Andhra Pradesh, and Chhattisgarh by FCI.',
    regionalIssues: 'Neglected in Bihar and Eastern UP where distress sale occurs below MSP to local intermediaries.',
    mainsDimension: 'Distorts crop choices towards water-intensive rice at the cost of nutrition-rich pulses and millets.',
    source: 'CACP Price Policy Report 2024-25 / Ministry of Agriculture'
  },
  {
    crop: 'Wheat',
    category: 'Rabi',
    currentMsp: '₹2,425 / quintal',
    costConceptUsed: 'A2+FL (50% margin minimum)',
    cacpBasis: 'Calculated using projected Cost A2+FL; gives highest return of ~102% over cost of production.',
    procurementReality: 'Robust procurement by FCI and State Civil Supplies corporations under open-ended procurement.',
    regionalIssues: 'Storage loss in open cover-and-plinth (CAP) storage during monsoon.',
    mainsDimension: 'Ensures national buffer stock for PM Garib Kalyan Anna Yojana and NFSA food security.',
    source: 'CACP Rabi Price Policy Report'
  },
  {
    crop: 'Moong (Green Gram)',
    category: 'Kharif',
    currentMsp: '₹8,682 / quintal',
    costConceptUsed: 'A2+FL (50% margin minimum)',
    cacpBasis: 'Highest absolute MSP among major Kharif foodgrains to incentivize pulse acreage.',
    procurementReality: 'Procurement undertaken by NAFED under Price Support Scheme (PSS), but volumes remain limited.',
    regionalIssues: 'Short-duration crop harvested during monsoon rains; market prices crash when moisture is high.',
    mainsDimension: 'Essential for addressing protein malnutrition and soil nitrogen replenishment.',
    source: 'Cabinet Committee on Economic Affairs (CCEA)'
  },
  {
    crop: 'Mustard / Rapeseed',
    category: 'Rabi',
    currentMsp: '₹5,950 / quintal',
    costConceptUsed: 'A2+FL (50% margin minimum)',
    cacpBasis: 'Substantial margin provided to reduce India\'s 55% edible oil import dependency ($15B+ foreign exchange bill).',
    procurementReality: 'NAFED intervenes when market prices fall below MSP under PM-AASHA.',
    regionalIssues: 'Vulnerable to sudden frost and white rust infestation in Rajasthan and Haryana.',
    mainsDimension: 'National Mission on Edible Oils - Oilseeds (NMEO-OS) leverages MSP to achieve self-reliance (Atmanirbharta).',
    source: 'Ministry of Agriculture & Farmers Welfare'
  }
];

export const foodProcessingFlow = [
  {
    stage: '1. Farm Gate Production',
    actor: 'Farmer / FPO',
    action: 'Harvesting, primary sorting, grading, and cleaning at the farm or village collection center.',
    lossPoint: 'Lack of on-farm cold rooms leads to 10-15% initial spoilage in perishables (fruits & vegetables).'
  },
  {
    stage: '2. Aggregation & Cold Chain Logistics',
    actor: 'Aggregator / Transporter',
    action: 'Transport in refrigerated reefer containers to primary processing centres (PPCs).',
    lossPoint: 'Only 4% of total agri-produce moves through cold chain in India compared to 85% in USA.'
  },
  {
    stage: '3. Primary & Secondary Processing',
    actor: 'Food Park / Processing Unit',
    action: 'Milling, dehydration, pulp extraction, freezing, canning, aseptic packaging.',
    lossPoint: 'India processes only ~10% of its total food output (vs 70% in China and 80% in USA).'
  },
  {
    stage: '4. Warehousing & Quality Certification',
    actor: 'FSSAI / WDRA / APEDA',
    action: 'Quality testing, phytosanitary checks, barcoding, nutritional labeling.',
    lossPoint: 'Stringent Maximum Residue Limits (MRL) by EU/USA often leads to export rejections (e.g. basmati, shrimp).'
  },
  {
    stage: '5. Retail & Global Export',
    actor: 'Domestic Supermarket / Export Shipper',
    action: 'Final distribution to consumer tables or global shipment via air/sea freight.',
    lossPoint: 'Value-addition capture: India gets low margin on raw commodities; finished branding captures 80% margin.'
  }
];
