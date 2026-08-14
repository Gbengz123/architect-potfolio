export interface Project {
  id: string
  number: string
  title: string
  location: string
  type: string
  year: string
  summary: string
  concept: string
  heroImage: string
  images: { url: string; caption: string }[]
  tags: string[]
  details: { label: string; value: string }[]
  sections: { heading: string; body: string }[]
}

const projects: Project[] = [
  {
    id: "institute-of-directors",
    number: "01",
    title: "Institute of Directors' Headquarters",
    location: "Olu Holloway Rd, Ikoyi, Lagos",
    type: "Office",
    year: "2024",
    summary:
      "A 15-storey office building integrating both office and commercial spaces to serve the administrative and representational needs of the Institute of Directors Nigeria. The project aimed to improve energy efficiency through the use of an adaptive façade.",
    concept:
      "The design incorporates a podium + tower approach, where the podium houses public and commercial spaces while the tower houses private offices. A double-skin adaptive façade is added to the tower envelope to enhance energy efficiency and aesthetics. The façade concept is drawn from the Mimosa pudica plant — a sensitive plant that closes when touched. Kite-shaped panels open and close in response to solar radiation, providing solar shading and access control.",
    heroImage:
      "/images/IDO.png",
    images: [
      {
        url: "https://images.unsplash.com/photo-1786355095881-bd002e6205ec?w=1200&h=800&fit=crop&auto=format",
        caption: "Façade detail — adaptive brick and glass panels",
      },
      {
        url: "https://images.unsplash.com/photo-1774097439393-a3502dea982c?w=1200&h=800&fit=crop&auto=format",
        caption: "Tower elevation — IOD identity lettering",
      },
      {
        url: "https://images.unsplash.com/photo-1661332628354-3ec604f4411d?w=800&h=1000&fit=crop&auto=format",
        caption: "Street-level perspective with podium canopy",
      },
    ],
    tags: ["Office", "15 Floors", "Adaptive Façade", "Commercial"],
    details: [
      { label: "Location", value: "Ikoyi, Lagos" },
      { label: "Type", value: "Office / Commercial" },
      { label: "Scale", value: "15 Storeys" },
      { label: "Year", value: "2024" },
      { label: "Façade", value: "Adaptive Double-Skin" },
    ],
    sections: [
      {
        heading: "Site Analysis",
        body: "The site is located at the intersection of Olu Holloway Road and Molodegi Johnson Avenue in Ikoyi. Annual rainfall peaks between April and October; the roof was designed to support rainwater harvesting. Northeast trade winds (Harmattan) and southwest Atlantic breezes informed fenestration orientation to maximize natural ventilation. Sun-path analysis guided shading strategies — the adaptive façade responds to mid-day peak solar intensity.",
      },
      {
        heading: "Form Development",
        body: "The tower-on-podium typology separates public commerce from private office functions. A portion of the podium base is cut away to create covered parking beneath a green recreational roof terrace. The double-skin façade system uses strut-supported kite-form panels mounted on curtain wall strut sleeves that penetrate the primary structure, allowing the outer skin to move independently.",
      },
      {
        heading: "Adaptive Façade Concept",
        body: "Each panel is derived geometrically from the leaf form of the Mimosa pudica (sensitive plant), tapering to both ends in a kite shape. Panels are mounted on pivot axes and actuated to fold inward in response to solar radiation sensors. Closed panels reduce direct solar gain; open panels allow diffuse daylight and natural ventilation. The façade texture, viewed from a distance, reads as a rich woven surface animated by light.",
      },
      {
        heading: "Floor Plans",
        body: "The ground floor accommodates commercial retail and lobby. The first floor contains office workstations, hot-desk areas, meeting rooms, a gym, and locker rooms. The second-floor podium roof forms an outdoor lounge terrace with city views. Upper floors are dedicated private office suites with conference facilities, serviced by a central lift lobby and flanking escape stairs.",
      },
    ],
  },
  {
    id: "vinix-innovation-center",
    number: "02",
    title: "Vinix Innovation and Recreational Center",
    location: "Eko Atlantic, Lagos",
    type: "Recreational",
    year: "2024",
    summary:
      "A Work-Life Innovation and Recreation Hub that explores the architectural integration of professional, creative, and recreational functions within a unified environment. The project is conceived as a dynamic hub where innovation and leisure coexist.",
    concept:
      "The design concept is based on the idea of integration between work, creativity, and relaxation. A circular plan organises the three programmatic zones — work, create, and relax — around a central open courtyard. The equation: Work + Creativity + Relaxation = Balanced Lifestyle.",
    heroImage:
      "/images/vinix-innovation-hero.png",
    images: [
      {
        url: "https://images.unsplash.com/photo-1520386950581-900a51cbbc93?w=1200&h=800&fit=crop&auto=format",
        caption: "Aerial overview of the circular campus",
      },
      {
        url: "https://images.unsplash.com/photo-1631196945867-91465b8c495b?w=1200&h=800&fit=crop&auto=format",
        caption: "Site and street connection",
      },
    ],
    tags: ["Recreational", "Circular Plan", "Mixed-Use", "Lagos"],
    details: [
      { label: "Location", value: "Eko Atlantic, Lagos" },
      { label: "Type", value: "Innovation / Recreation" },
      { label: "Form", value: "Circular Campus" },
      { label: "Year", value: "2024" },
      { label: "Materials", value: "Brick, Timber, Glass" },
    ],
    sections: [
      {
        heading: "Design Concept",
        body: "The hub is organised as a circular annular plan with three distinct arc segments — Work, Create, and Relax — radiating from a shared central courtyard. Each segment has its own character: the Work arc is closed and focused; the Create arc opens to natural light through curtain wall glazing; the Relax arc flows outward to landscaped terraces and the courtyard garden.",
      },
      {
        heading: "Materials & Envelope",
        body: "The external envelope uses brick façades surrounded by timber-fin overhangs, with curtain wall systems introducing natural light and views across the campus. Wooden grills fixed to selected exterior walls add warmth and texture, referencing traditional Nigerian timber craft. The green roof reduces heat gain and provides occupants with accessible garden spaces.",
      },
      {
        heading: "Axonometric Breakdown",
        body: "The structural system combines aluminum-framed dark-tinted glass terrace shades with timber fins, steel column-and-beam supported glazed sky bridges, and brick façades with protruding timber grils. Planter zones are integrated at multiple levels to bring greenery into the interior courtyard.",
      },
      {
        heading: "Chalet Units",
        body: "Satellite chalet units arranged around the campus perimeter provide short-stay accommodation for participants attending extended residencies or retreats. Each chalet follows the curved geometry of the site, containing two bedrooms, a bathroom, kitchen, and living room within a compact arc-form plan.",
      },
    ],
  },
  {
    id: "eko-heritage-gallery",
    number: "03",
    title: "Eko Heritage Gallery",
    location: "Lagos",
    type: "Cultural",
    year: "2023",
    summary:
      "A Yoruba cultural centre with a geodesic glass dome as its centrepiece. The project focused on construction documentation — site plan, ground floor plan, door schedules, dome component details, and structural details for the parapet, stair, and roof.",
    concept:
      "The gallery is anchored by a geodesic glass dome — a hybrid of stained and reflective 10mm glazing panels mounted on a space-frame truss structure. The dome reads as a contemporary cultural beacon visible from the surrounding landscape, while the radiating plan geometry references traditional Yoruba courtyard spatial organisation.",
    heroImage:
      "/images/eko-heritage-hero.png",
    images: [
      {
        url: "https://images.unsplash.com/photo-1785075953347-bfd3b14953bb?w=1200&h=800&fit=crop&auto=format",
        caption: "Dome detail — curved roof profile",
      },
      {
        url: "https://images.unsplash.com/photo-1763401650604-f0770b538edc?w=1200&h=800&fit=crop&auto=format",
        caption: "Entrance approach — stone steps and dome",
      },
    ],
    tags: ["Cultural", "Yoruba Heritage", "Dome", "Construction Documents"],
    details: [
      { label: "Location", value: "Lagos" },
      { label: "Type", value: "Cultural / Gallery" },
      { label: "Structure", value: "Geodesic Dome" },
      { label: "Year", value: "2023" },
      { label: "Role", value: "Construction Drawings" },
    ],
    sections: [
      {
        heading: "Dome Construction",
        body: "The geodesic dome is composed of light-gauge steel trusses covered in 10mm double-glazed tempered glass — a hybrid of stained glass and reflective glass panels. A space truss canopy sits below the outer skin; dome base cladding is wrapped in metal sheets, grinded and sprayed to finish with anti-rust primer and epoxy finish. The structural ring beam connects the dome to the vertical support systems via gusset plates at uniform spacing.",
      },
      {
        heading: "Construction Documentation",
        body: "My role on this project focused on producing the full construction drawing set: site plan with driveway layout, dimensioned ground floor plan, door schedules for aluminium and timber door types, circular ring-to-dome connection details, parapet wall drainage details, interior column reinforcement details, and stair section and stair construction details.",
      },
      {
        heading: "Spatial Organisation",
        body: "The ground floor plan radiates outward from the central dome rotunda. Gallery spaces, a library, staff offices, and a restaurant ring the perimeter. The building's gear-like footprint on the site plan creates alternating entry bays and planted zones, reinforcing the rhythmic character of the façade.",
      },
    ],
  },
  {
    id: "kitchen-interior-design",
    number: "04",
    title: "Kitchen Interior Design",
    location: "Lagos",
    type: "Interior",
    year: "2023",
    summary:
      "In response to a client brief, the design incorporates a warm, contemporary kitchen featuring wood finishes, marble surfaces, integrated appliances, ample storage, a breakfast counter, and abundant natural light — creating a highly functional and visually refined space.",
    concept:
      "The kitchen balances warmth and precision. Dark-stained oak cabinetry provides visual weight; white Carrara marble countertops and splashback introduce luminosity. Floor-to-ceiling windows flood the worktop zone with natural light, while integrated appliances maintain the clean surface language.",
    heroImage:
      "/images/kitchen-interior-hero.png",
    images: [
      {
        url: "https://images.unsplash.com/photo-1656402887556-e727ffe1f6d7?w=1200&h=800&fit=crop&auto=format",
        caption: "Breakfast nook and dining integration",
      },
      {
        url: "https://images.unsplash.com/photo-1666003449012-61951d621555?w=1200&h=800&fit=crop&auto=format",
        caption: "Island counter and bar seating",
      },
    ],
    tags: ["Interior", "Residential", "Kitchen", "3D Visualization"],
    details: [
      { label: "Location", value: "Lagos" },
      { label: "Type", value: "Residential Interior" },
      { label: "Year", value: "2023" },
      { label: "Finish", value: "Oak, Marble, Steel" },
      { label: "Tools", value: "SketchUp, V-Ray, Photoshop" },
    ],
    sections: [
      {
        heading: "Material Strategy",
        body: "Dark oak veneer cabinets are used for lower and upper storage units. The splashback is Carrara marble with pronounced veining, continuing as the countertop surface. Black slate tiles ground the floor plane. Integrated stainless steel appliances flush-mount into the cabinetry to preserve the cabinet grid logic.",
      },
      {
        heading: "Lighting & Views",
        body: "Large windows above the sink and alongside the worktop zone bring in diffuse northern light throughout the day, reducing reliance on artificial lighting during working hours. Recessed ceiling lights supplement at task zones. The breakfast counter cantilevers from the island, creating a casual dining position distinct from the formal dining area.",
      },
    ],
  },
  {
    id: "the-meeting-point",
    number: "05",
    title: "The Meeting Point Co-Work Space",
    location: "Lagos",
    type: "Interior / Commercial",
    year: "2023",
    summary:
      "TMP Hub is a co-working interior designed for a contemporary professional community. The design cultivates a sense of belonging through warm materials, flexible workspaces, and a strong brand identity expressed through the TMP sign installation.",
    concept:
      "The space is conceived as a warm, branded professional environment where natural materials — timber cladding, warm lighting, live plants — counterbalance the formality of a typical office. The reception zone doubles as a lounge, and work pods offer varying degrees of enclosure.",
    heroImage:
      "/images/cowork-space-hero.png",
    images: [
      {
        url: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?w=1200&h=800&fit=crop&auto=format",
        caption: "Open plan workstation zone",
      },
    ],
    tags: ["Interior", "Co-Working", "Commercial", "3D Visualization"],
    details: [
      { label: "Location", value: "Lagos" },
      { label: "Type", value: "Commercial Interior" },
      { label: "Year", value: "2023" },
      { label: "Finish", value: "Timber, Steel, Soft Furnishings" },
      { label: "Tools", value: "SketchUp, V-Ray, Photoshop" },
    ],
    sections: [
      {
        heading: "Brand & Identity",
        body: "The TMP Hub identity is expressed through a large dimensional sign installation at the reception wall. The wordmark is mounted against a timber-slat panel, visible from the entry threshold. Brand colour runs as an accent through planters, soft furnishings, and the reception counter edge.",
      },
      {
        heading: "Spatial Zones",
        body: "The plan separates three distinct zones: an open hot-desk area with bench workstations; semi-private work pods with acoustic screens; and a lounge zone with casual seating near the reception. Natural planting is integrated throughout the plan to improve air quality and reduce acoustic reverberation.",
      },
    ],
  },
]

export default projects
