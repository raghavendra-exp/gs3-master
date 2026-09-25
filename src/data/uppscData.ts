export interface UPPSCModuleItem {
  id: string;
  category: 'Agriculture & Irrigation' | 'Industry & Corridors' | 'Infrastructure' | 'Environment & Forests' | 'Disaster Vulnerability' | 'Internal Security' | 'UPPSC PYQs';
  title: string;
  keyFacts: string[];
  analyticalPoints: string[];
  mainsRelevance: string;
  source: string;
}

export const uppscGS3Data: UPPSCModuleItem[] = [
  {
    id: 'up-agri-cropping',
    category: 'Agriculture & Irrigation',
    title: 'Uttar Pradesh Cropping Patterns & Regional Disparities',
    keyFacts: [
      'UP contributes ~19% of India\'s total foodgrain output, ranking 1st in Wheat, Sugarcane, Potato, and Milk production.',
      'Western UP has high irrigation coverage (~98%), high chemical fertilizer intensity, and dominates in sugarcane-wheat monoculture.',
      'Eastern UP (Purvanchal) suffers from small fragmented landholdings (< 0.6 ha), recurring floods (Rapti, Ghaghara), and low private capital investment.',
      'Bundelkhand is an arid rainfed zone dependent on pulses (Gram, Lentil) and oilseeds, vulnerable to recurring droughts.'
    ],
    analyticalPoints: [
      'Crop Diversification Need: The state is pushing farmers to move from water-intensive sugarcane and paddy to maize, millets (Bajra, Jowar), and oilseeds (Mustard).',
      'One District One Product (ODOP) Agri-Clusters: Kala Namak Rice (Siddharthnagar - "Buddha Rice" with GI tag), Amla (Pratapgarh), Guava (Prayagraj), Banana (Kushinagar).'
    ],
    mainsRelevance: 'Directly tested in UPPSC Mains GS Paper 3 / GS Paper 5: Agrarian economy of UP, cropping pattern variations across 9 agro-climatic zones.',
    source: 'UP Department of Agriculture & UP Economic Survey'
  },
  {
    id: 'up-defence-corridor',
    category: 'Industry & Corridors',
    title: 'Uttar Pradesh Defence Industrial Corridor (UPDIC)',
    keyFacts: [
      'Planned across 6 strategic industrial nodes: Aligarh, Agra, Kanpur, Chitrakoot, Jhansi, and Lucknow.',
      'Administered by Uttar Pradesh Expressways Industrial Development Authority (UPEIDA).',
      'Over 5,000+ hectares of land earmarked with plug-and-play infrastructure and 24x7 power supply.'
    ],
    analyticalPoints: [
      'BrahMos Aerospace: Established a manufacturing unit in Lucknow node to produce next-generation BrahMos-NG cruise missiles.',
      'Ammunition & Small Arms: Massive facilities set up in Jhansi node (e.g. Adani Defence & Bharat Forge) to produce precision artillery shells and UAVs.',
      'Bundelkhand Economic Transformation: Jhansi and Chitrakoot nodes leverage Bundelkhand Expressway to transform historically drought-prone, backward regions into engineering hubs.'
    ],
    mainsRelevance: 'UPPSC Mains GS-3/GS-5: Industrial development in UP, public-private partnership in defence production.',
    source: 'UPEIDA & Ministry of Defence'
  },
  {
    id: 'up-expressway-infra',
    category: 'Infrastructure',
    title: 'Expressway Capital of India & Jewar International Airport',
    keyFacts: [
      'UP has over 3,200+ km of operational and under-construction expressways, accounting for >50% of India\'s expressway network.',
      'Operational expressways: Yamuna Expressway (165 km), Agra-Lucknow Expressway (302 km), Purvanchal Expressway (341 km), Bundelkhand Expressway (296 km), Gorakhpur Link Expressway (91 km).',
      'Ganga Expressway: 594 km 6-lane access-controlled expressway under construction connecting Meerut (Western UP) to Prayagraj (Eastern UP).',
      'Noida International Airport (Jewar): Developing as Asia\'s largest greenfield airport with multi-modal cargo hub linking to Western Dedicated Freight Corridor (WDFC).'
    ],
    analyticalPoints: [
      'Logistics cost compression: Reduces travel time from Eastern UP to Delhi from 15 hours to under 6 hours, unlocking cold chain connectivity for perishables.',
      'Emergency airstrips: Purvanchal, Agra-Lucknow, and Ganga expressways feature 3.5 km reinforced concrete airstrips capable of landing IAF fighter jets (Mirage-2000, Sukhoi-30MKI) during national emergencies.'
    ],
    mainsRelevance: 'UPPSC Mains GS-3: Infrastructure development, multimodal logistics, and industrial corridor backward linkages.',
    source: 'UPEIDA & Government of Uttar Pradesh'
  },
  {
    id: 'up-environment-terai',
    category: 'Environment & Forests',
    title: 'Terai Arc Landscape, Dudhwa & Pilibhit Tiger Reserves',
    keyFacts: [
      'UP total forest and tree cover is ~9.23% of geographical area (ISFR 2021), significantly below the national average of 24.62%.',
      'Dudhwa National Park (Lakhimpur Kheri) forms part of the rich Dudhwa-Tiger Reserve alongside Kishanpur and Katarniaghat Wildlife Sanctuaries.',
      'Pilibhit Tiger Reserve (PTR) won the prestigious International TX2 Award for doubling its wild tiger population from 25 to 65 in record time.',
      'Ranipur Tiger Reserve (Chitrakoot) notified in 2022 as UP\'s 4th tiger reserve (after Dudhwa, Pilibhit, and Amangarh).'
    ],
    analyticalPoints: [
      'Human-Wildlife Conflict in Terai: High sugarcane cultivation right up to forest boundaries acts as surrogate forest for tigers, causing tragic attacks on cane cutters.',
      'Ramsar Sites: UP has 10 designated Ramsar wetlands including Upper Ganga River, Haiderpur Wetland, Sur Sarovar (Keetham), and Bakhira Sanctuary.'
    ],
    mainsRelevance: 'UPPSC Mains GS-3/GS-5: Biodiversity conservation in UP, wetlands management, and tiger corridors.',
    source: 'UP Forest Department & FSI'
  },
  {
    id: 'up-indo-nepal-security',
    category: 'Internal Security',
    title: 'Indo-Nepal Open Border Management (UP Sector)',
    keyFacts: [
      'UP shares a 551 km porous international border with Nepal across 7 districts: Pilibhit, Lakhimpur Kheri, Bahraich, Shravasti, Balrampur, Siddharthnagar, and Maharajganj.',
      'Guarded primarily by Sashastra Seema Bal (SSB) under Ministry of Home Affairs.',
      '1950 Indo-Nepal Treaty of Peace and Friendship permits free visa-free movement of citizens across the frontier.'
    ],
    analyticalPoints: [
      'Security vulnerabilities: Trans-border smuggling of counterfeit currency (FICN), Chinese electronics, gold, and illegal firearms.',
      'Human Trafficking Route: Vulnerable young women and children trafficked from rural Nepal via Sunauli, Rupaidiha, and Gauriphanta checkpoints.',
      'Countermeasures: UP Anti-Terrorist Squad (ATS) specialized commando units stationed in border districts; integrated digital checkpoints with facial recognition and biometrics.'
    ],
    mainsRelevance: 'UPPSC Mains GS-3/GS-5: Border security issues in UP, role of SSB, and management of open borders.',
    source: 'UP Police & Sashastra Seema Bal'
  }
];
