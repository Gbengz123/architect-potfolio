export interface Project {
  id: string;
  number: string;
  title: string;
  location: string;
  type: string;
  year: string;
  summary: string;
  concept: string;
  heroImage: string;
  tags: string[];
  details: { label: string; value: string }[];
  sections: {
    heading: string;
    body?: string;
    images?: { url: string; caption: string }[];
    imageDirection?: "row" | "column";
  }[];
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
    heroImage: "/images/IOD/IOD-hero.png",
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
        images: [
          {
            url: "/images/IOD/iod-site-analysis.png",
            caption: "site analysis image",
          },
        ],
      },
      {
        heading: "Form Development",
        body: "The design incorporates the podium + tower approach, such that the podium will house public/ commercial spaces while the tower will house the private offices. A double skin faced will be added to the tower envelope to enhance energy efficiency and esthetics.",
        images: [
          {
            url: "/images/IOD/iod-form-development.png",
            caption: "form development graphic image",
          },
        ],
      },
      {
        heading: "Adaptive Façade Concept",
        body: "The concept is for an adaptive panel that opens and closes by folding and unfolding. Inspired by the mimosa pudica plant which changes its physical form by closing when touched. The shape of the panel is kite like, and you can see from the individual leaf of the mimosa as it follows how it tappers to each end of the leaf.",
        images: [
          {
            url: "/images/IOD/iod-facade-1.png",
            caption: "Façade detail — adaptive brick and glass panels",
          },
          {
            url: "/images/IOD/iod-facade-2.png",
            caption: "Façade detail — adaptive brick and glass panels",
          },
        ],
      },
      {
        heading: "Floor Plans",
        body: "The ground floor accommodates commercial retail and lobby. The first floor contains office workstations, hot-desk areas, meeting rooms, a gym, and locker rooms. The second-floor podium roof forms an outdoor lounge terrace with city views. Upper floors are dedicated private office suites with conference facilities, serviced by a central lift lobby and flanking escape stairs.",
        images: [
          {
            url: "/images/IOD/iod-ground-floor.png",
            caption: "Ground floor plan",
          },
          {
            url: "/images/IOD/iod-first-floor.png",
            caption: "First floor plan",
          },
          {
            url: "/images/IOD/iod-second-floor.png",
            caption: "Second floor plan",
          },
          {
            url: "/images/IOD/iod-third-floor.png",
            caption: "Third floor plan",
          },
        ],
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
    heroImage: "/images/vinix/vinix-innovation-hero.png",
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
        body: "The design concept is based on the idea of integration between work, creativity, and relaxation. The project is conceived as a dynamic hub where professional activities, innovation, and leisure coexist within a unified environment.",
        images: [
          {
            url: "/images/vinix/vinix-design-concept.png",
            caption: "design concept detail",
          },
        ],
      },
      {
        heading: "Materials & Envelope",
        images: [
          {
            url: "/images/vinix/vinix-exterior.png",
            caption: "Vinix exterior",
          },
          {
            url: "/images/vinix/vinix-material-glass.png",
            caption:
              "curutain wall systems as part of the building envelope to enhance lighting and encourage occupants to aprociate view",
          },
          {
            url: "/images/vinix/vinix-material-wooden.png",
            caption:
              "wooden grills fixed to selected exterior walls to enhance",
          },
        ],
      },
      {
        heading: "Axonometric Design",
        images: [
          {
            url: "/images/vinix/vinix-axonometric-view-1.png",
            caption: "Axonometric view",
          },
        ],
      },
      {
        heading: "Floor plan",
        images: [
          {
            url: "/images/vinix/vinix-ground-floor-plan.png",
            caption: "Ground floor plan",
          },
          {
            url: "/images/vinix/vinix-second-floor-plan.png",
            caption: "Second floor plan",
          },
        ],
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
    heroImage: "/images/eko-heritage/eko-heritage-hero.png",
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
        heading: "Dome components & Site Plan",
        images: [
          {
            url: "/images/eko-heritage/eko-dome-components.png",
            caption: "Dome components",
          },
          {
            url: "/images/eko-heritage/eko-site-plan.png",
            caption: "Site plan",
          },
        ],
      },
      {
        heading: "Floor Plan",
        images: [
          {
            url: "/images/eko-heritage/eko-ground-floor-plan.png",
            caption: "Ground Floor plan",
          },
          {
            url: "/images/eko-heritage/eko-door-schedule-plan.png",
            caption: "Door schedule plan",
          },
        ],
      },
      {
        heading: "Spatial Organisation",
        body: "The ground floor plan radiates outward from the central dome rotunda. Gallery spaces, a library, staff offices, and a restaurant ring the perimeter. The building's gear-like footprint on the site plan creates alternating entry bays and planted zones, reinforcing the rhythmic character of the façade.",
        images: [],
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
    heroImage: "/images/kitchen/kitchen-interior-hero.png",
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
        heading: "Elevations",
        images: [
          {
            url: "/images/kitchen/elevation.png",
            caption: "Elevation A and B",
          },
          {
            url: "/images/kitchen/elevation-1.png",
            caption: "Elevation B and C",
          },
        ],
        imageDirection: "row",
      },
      {
        heading: "Lighting & Views",
        body: "Large windows above the sink and alongside the worktop zone bring in diffuse northern light throughout the day, reducing reliance on artificial lighting during the day. Recessed ceiling lights supplement at task zones. The breakfast counter cantilevers from the island, creating a casual dining position distinct from the formal dining area.",
        images: [
          {
            url: "/images/kitchen/kitchen-view-1.png",
            caption: "Kitchen View A",
          },
          {
            url: "/images/kitchen/kitchen-view-2.png",
            caption: "Kitchen View B",
          },
        ],
      },
      {
        heading: "Floor Plan",
        images: [
          {
            url: "/images/kitchen/kitchen-floor-plan.png",
            caption: "Floor plan",
          },
        ],
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
    heroImage: "/images/cowork-space/cowork-space-hero.png",
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
        heading: "Furniture Model A",
        images: [
          {
            url: "/images/cowork-space/cowork-furniture-model-A1.png",
            caption: "Furniture Model A",
          },
          {
            url: "/images/cowork-space/cowork-tv.png",
            caption: "1. TV Wall (Lounge area)",
          },
          {
            url: "/images/cowork-space/cowork-bar-seating.png",
            caption: "2. Bar Seating",
          },
        ],
      },
      {
        heading: "Furniture Model B",
        images: [
          {
            url: "/images/cowork-space/cowork-furniture-B1.png",
            caption: "Furniture Model B",
          },
          {
            url: "/images/cowork-space/cowork-reception-desk.png",
            caption: "3. Reception Desk",
          },
          {
            url: "/images/cowork-space/cowork-meeting-area.png",
            caption: "4. Informal Meeting Area",
          },
          {
            url: "/images/cowork-space/cowork-work-space.png",
            caption: "5. Work Space",
          },
        ],
        imageDirection: "row",
      },
    ],
  },
];

export default projects;
