import type { Project } from "./types";

const projects: Project[] = [
  /* ══════════════════════════════════════════════════════════
     01 — Institute of Directors' Headquarters
     ══════════════════════════════════════════════════════════ */
  {
    id: "institute-of-directors",
    number: "01",
    title: "Institute of Directors' Headquarters",
    location: "Olu Holloway Rd, Ikoyi, Lagos",
    type: "Office",
    year: "2024",
    summary:
      "A fifteen-storey headquarters for the Institute of Directors Nigeria, combining commercial floors at street level with private office suites above. The building is organised as a podium and a tower, and wrapped on its exposed elevations by a double-skin façade that opens and closes with the sun.",
    concept:
      "The façade takes its behaviour from Mimosa pudica, the sensitive plant that folds its leaves when touched. Kite-shaped panels — drawn from the taper of a single mimosa leaflet — fold inward against solar radiation and unfold when it passes, so the envelope reads differently at every hour of the day.",
    hero: {
      src: "/images/IOD/iod-entrance.webp",
      alt: "Street-level view of the Institute of Directors headquarters, showing the timber-finned entrance canopy and glazed commercial frontage",
      aspect: "16/9",
      priority: true,
    },
    cover: {
      src: "/images/IOD/iod-tower-corner.webp",
      alt: "The Institute of Directors tower seen from the street corner, the adaptive façade in shadow against brick",
      aspect: "1197/1655",
    },
    tags: ["Office", "15 Storeys", "Adaptive Façade", "Commercial"],
    details: [
      { label: "Location", value: "Ikoyi, Lagos" },
      { label: "Type", value: "Office / Commercial" },
      { label: "Scale", value: "15 Storeys" },
      { label: "Year", value: "2024" },
      { label: "Envelope", value: "Adaptive Double-Skin" },
    ],
    blocks: [
      {
        kind: "text",
        label: "Overview",
        surface: "paper",
        lead: true,
        body: [
          "A fifteen-storey headquarters for the Institute of Directors Nigeria, combining commercial floors at street level with private office suites above.",
          "The brief asked for a building that could hold both the administrative and the representational life of the institute — a working office that also performs in public. The answer separates the two: a broad podium that belongs to the street, and a slender tower that belongs to the skyline.",
        ],
      },
      {
        // FIXED: was [iod-tower-corner, iod-locality] — tower-corner belongs to the
        // Ground Floor spread further down, not the title page. This should be the
        // title-page pairing: locality map (left) + entrance close-up (right).
        // NOTE: verify alt/caption/aspect for iod-facade-detail — it was unused in
        // your original file so I've written a best-guess based on the PDF crop
        // (the "O D" brick/glass close-up above the street-level entrance shot).
        kind: "media",
        layout: "duo",
        surface: "sheet",
        images: [
          {
            src: "/images/IOD/iod-locality.webp",
            alt: "Locality plan showing the site outlined in red at the junction of Olu Holloway Road and Mobolaji Johnson Avenue",
            caption: "Locality plan",
            fit: "contain",
            surface: "sheet",
            aspect: "4533/3686",
          },
          {
            src: "/images/IOD/iod-facade-detail.png",
            alt: "Close-up of the tower's brick and glass corner, showing the perforated brick screen and the OD lettering above the entrance",
            caption: "The corner, close up",
            fit: "cover",
            aspect: "3/4", // VERIFY: placeholder aspect ratio, check actual image dimensions
          },
        ],
      },
      {
        kind: "notes",
        label: "01 — Site",
        heading: "Site Analysis",
        surface: "sheet",
        body: "The site sits between Olu Holloway Road and Mobolaji Johnson Avenue in Ikoyi, hemmed in by existing high-rise neighbours. Orientation, wind and noise did most of the early design work.",
        images: [
          {
            src: "/images/IOD/iod-site-analysis.webp",
            alt: "Annotated site analysis diagram recording sun path, prevailing winds, noise sources, drainage and vegetation around the Ikoyi site",
            caption:
              "Site analysis — sun path, prevailing winds, noise and drainage",
            fit: "contain",
            surface: "sheet",
            aspect: "2097/1069",
            mobileAspect: "2097/1069",
            pan: true,
          },
        ],
        notes: [
          {
            term: "Sunrise, 06:34",
            detail:
              "Soft, low morning light on the east façade. Occupied areas are oriented to take it.",
          },
          {
            term: "Midday sun",
            detail:
              "The most intense heat and light of the day. Glazing is paired with shading rather than reduced.",
          },
          {
            term: "Sunset, west façade",
            detail:
              "Evening light arrives hot and at a low angle. Large glazing here is shaded; service areas take the worst of it.",
          },
          {
            term: "Northeast trade winds",
            detail:
              "The Harmattan — warm, dusty and dry. Fenestration on this face is tuned for ventilation, not exposure.",
          },
          {
            term: "Southwest trade winds",
            detail:
              "Cool and humid off the Atlantic. Openings on this face carry the bulk of natural ventilation.",
          },
          {
            term: "Average temperature, 29°C",
            detail: "Shading and cross-ventilation are required year-round.",
          },
          {
            term: "Topography",
            detail:
              "Relatively flat — 5.06 m at the highest point, 4.29 m at the lowest.",
          },
          {
            term: "Rainfall, April–October",
            detail:
              "The roof is sized for heavy rain; harvesting feeds back into the building. Existing kerb drainage runs along the road edge.",
          },
          {
            term: "Noise",
            detail:
              "Two sources — the busy access road and the nursery to the north-east.",
          },
          {
            term: "Vegetation",
            detail: "Existing trees line the access road and are retained.",
          },
        ],
      },
      {
        kind: "notes",
        label: "02 — Form",
        heading: "Form Development",
        surface: "sheet",
        body: "The design incorporates the podium + tower approach, such that the podium will house public/ commercial spaces while the tower will house the private offices. A double skin faced will be added to the tower envelope to enhance energy efficiency and esthetics.",
        numbered: true,
        images: [
          {
            src: "/images/IOD/iod-form-development.jpg",
            alt: "Three-stage massing diagram: tower set on a podium base, a double-skin adaptive façade added to the tower, and the podium roof turned over to green recreational space",
            caption: "Form development — three moves, left to right",
            fit: "contain",
            surface: "sheet",
            aspect: "4408/1493",
            mobileAspect: "4408/1493",
            pan: true,
          },
        ],
        notes: [
          {
            term: "Tower on podium",
            detail:
              "A portion of the podium base is cut away to make room for parking beneath.",
          },
          {
            term: "Double-skin adaptive façade",
            detail:
              "Wrapped over the tower envelope for energy performance and for the look of the building.",
          },
          {
            term: "Green podium top",
            detail:
              "The roof of the podium becomes recreational space, with parking held below.",
          },
        ],
      },
      {
        kind: "notes",
        label: "03 — Facade Concept",
        heading: "Adaptive Facade Concept",
        surface: "sheet",
        body: 
          "The concept is for an adaptive panel that opens and closes by folding and unfolding. Inspired by the mimosa pudica plant which changes its physical form by closing when touched. The shape of the panel is kite like, and you can see from the individual leaf of the mimosa as it follows how it tappers to each end of the leaf.",
        images: [
          {
            src: "/images/IOD/iod-panel-diagram.tiff",
            alt: "Concept diagram deriving the kite-shaped panel from a mimosa leaf, showing the closed and open states, the folding mechanism, and solar shading behaviour",
            caption: "Derivation, states and solar behaviour",
            fit: "contain",
            surface: "sheet",
            aspect: "806/1024",
          },
          {
            src: "/images/IOD/iod-mimosa-sketch1.tiff",
            alt: "Botanical sketches of a mimosa pudica leaf, open and closed",
            caption: "Mimosa pudica — open and closed",
            fit: "contain",
            surface: "sheet",
            aspect: "678/349",
          },
          {
            src: "/images/IOD/iod-facade-panel-day.webp",
            alt: "The adaptive façade in daylight with panels unfolded, casting sharp shadows across the glazing behind",
            caption: "Panels unfolded",
            aspect: "926/844",
          },
          {
            src: "/images/IOD/iod-facade-panel-dusk.webp",
            alt: "The adaptive façade with panels folded flat against the envelope, reading as a continuous perforated surface",
            caption: "Panels folded",
            aspect: "884/748",
          },
        ],
      },
      {
        // FIXED: PDF order on this spread is Ground Floor Plan (top-left) →
        // "LEFT VIEW" elevation (bottom-left) → big tower render (right).
        // Was [tower-corner, elevation-side, plan-ground]; also switched
        // longImagePosition to "right" since the tall photo sits on the right
        // in the source spread.
        kind: "media",
        layout: "asymmetric",
        longImagePosition: "right",
        surface: "sheet",
        images: [
          {
            src: "/images/IOD/iod-plan-ground.webp",
            alt: "Ground floor plan showing the banking hall, teller desks, cash vault, cafeteria, reception lobby and surface parking",
            caption: "Ground floor — banking hall, cafeteria, lobby, parking",
            fit: "contain",
            surface: "sheet",
            aspect: "2245/1235",
          },
          {
            src: "/images/IOD/iod-elevation-side.webp",
            alt: "Side elevation showing the full extent of the adaptive panel field across the west face",
            caption: "Side elevation",
            fit: "contain",
            surface: "sheet",
            aspect: "1285/714",
          },
          {
            src: "/images/IOD/iod-tower-corner.webp",
            alt: "The Institute of Directors tower seen from the street corner, the adaptive façade in shadow against brick",
            aspect: "1197/1655",
          },
        ],
      },
      {
        // FIXED: same correction for the First Floor spread — plan, then
        // "FRONT VIEW" elevation, then the big tower render.
        kind: "media",
        layout: "asymmetric",
        longImagePosition: "right",
        surface: "sheet",
        images: [
          {
            src: "/images/IOD/iod-plan-first.webp",
            alt: "Ground floor plan showing the banking hall, teller desks, cash vault, cafeteria, reception lobby and surface parking",
            caption: "Ground floor — banking hall, cafeteria, lobby, parking",
            fit: "contain",
            surface: "sheet",
            aspect: "1285/714",
          },
          {
            src: "/images/IOD/iod-elevation-front.webp",
            alt: "Side elevation showing the full extent of the adaptive panel field across the west face",
            caption: "Side elevation",
            fit: "contain",
            surface: "sheet",
            aspect: "2244/1129",
          },
          {
            src: "/images/IOD/iod-tower-front.webp",
            alt: "The Institute of Directors tower seen from the street corner, the adaptive façade in shadow against brick",
            aspect: "1197/1655",
          },
        ],
      },
      {
        // Already correct — plan then the outdoor terrace photo.
        kind: "media",
        layout: "duo",
        surface: "sheet",
        images: [
          {
            src: "/images/IOD/iod-plan-second.webp",
            alt: "Second floor plan showing the banquet hall, retail store, display area and the outdoor lounge on the podium roof",
            caption: "Second floor — banquet hall, retail, outdoor lounge",
            fit: "contain",
            surface: "sheet",
            aspect: "1762/1546",
          },
          {
            src: "/images/IOD/iod-podium-terrace.webp",
            alt: "Ground floor plan showing the banking hall, teller desks, cash vault, cafeteria, reception lobby and surface parking",
            caption:
              "outdoor lounge at the top portion of the podium serves as a space for relaxation and also light work while enjoying the city view and refreshing greenrey",
            fit: "cover",
            aspect: "1285/714",
            span: "full",
          },
        ],
      },
      {
        // FIXED: PDF reading order on the final spread is longitudinal section
        // (top-left) → panel exploded diagram (top-right) → third floor plan
        // (bottom-left) → interior photo (bottom-right). Was
        // [plan-third, panel-exploded, facade-section, interior-office].
        kind: "media",
        layout: "grid",
        surface: "sheet",
        images: [
          {
            src: "/images/IOD/iod-facade-section.webp",
            alt: "Longitudinal section through two floor plates showing the strut sleeves passing through the curtain wall to support the fabric mesh frames",
            caption: "Longitudinal section at the façade",
            fit: "contain",
            surface: "sheet",
            aspect: "4977/2640",
            mobileAspect: "4977/2640",
            pan: true,
          },
          {
            src: "/images/IOD/iod-panel-exploded.webp",
            alt: "Exploded diagram of one adaptive façade panel showing the fabric mesh and its supporting frame and sub-frame",
            caption: "Panel components",
            fit: "contain",
            surface: "sheet",
            aspect: "4338/1833",
            mobileAspect: "4338/1833",
            pan: true,
            span: "half",
          },
          {
            src: "/images/IOD/iod-plan-third.webp",
            alt: "Second floor plan showing the banquet hall, retail store, display area and the outdoor lounge on the podium roof",
            caption: "Second floor — banquet hall, retail, outdoor lounge",
            fit: "contain",
            surface: "sheet",
            aspect: "1376/1661",
          },
          {
            src: "/images/IOD/iod-interior-office.webp",
            alt: "Open-plan office interior seen from within, the folded adaptive panels reading as a screen of light and shadow across the full-height glazing",
            caption: "The same skin, from the inside",
            aspect: "2/1",
            mobileAspect: "4/3",
          },
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     02 — Vinix Innovation and Recreational Center
     ══════════════════════════════════════════════════════════ */
  {
    id: "vinix-innovation-center",
    number: "02",
    title: "Vinix Innovation and Recreational Center",
    location: "Eko Atlantic, Lagos",
    type: "Recreational",
    year: "2024",
    summary:
      "A work–life innovation and recreation hub on the Eko Atlantic waterfront. Professional, creative and recreational programmes are held in one circular plan, so that moving between them is a matter of a few steps rather than a journey.",
    concept:
      "A hub where work, creativity and relaxation exist together. Three zones — work, create, relax — are set around a shared central court, with connection and flow between them treated as the primary design problem.",
    hero: {
      src: "/images/vinix/vinix-exterior-dusk.webp",
      alt: "The Vinix centre at dusk — a long brick and timber elevation lit from within, seen across lawn",
      aspect: "16/9",
      priority: true,
    },
    cover: {
      src: "/images/vinix/vinix-aerial.webp",
      alt: "Aerial view of the circular Vinix campus set in green landscape, chalets ranged behind it",
      aspect: "1064/1543",
    },
    tags: ["Recreational", "Circular Plan", "Mixed-Use", "Eko Atlantic"],
    details: [
      { label: "Location", value: "Eko Atlantic, Lagos" },
      { label: "Type", value: "Innovation / Recreation" },
      { label: "Form", value: "Circular Campus" },
      { label: "Year", value: "2024" },
      { label: "Materials", value: "Brick, Timber, Glass" },
    ],
    blocks: [
      {
        kind: "text",
        label: "Overview",
        surface: "paper",
        lead: true,
        body: [
          "A work–life innovation and recreation hub, where professional, creative and recreational functions share a single circular plan.",
          "The project explores what happens when those three programmes are not separated into different buildings but wrapped around one another — an environment in which innovation and leisure are expected to coexist.",
        ],
      },
      {
        // FIXED: title page is locality map (left) → aerial render (right).
        // Was [aerial, locality].
        kind: "media",
        layout: "duo",
        surface: "paper",
        images: [
          {
            src: "/images/vinix/vinix-locality.webp",
            alt: "Locality plan of the Eko Atlantic site, the plot outlined against the reclaimed shoreline",
            caption: "Eko Atlantic — the site against the shoreline",
            fit: "contain",
            aspect: "414/372",
            surface: "sheet",
          },
          {
            src: "/images/vinix/vinix-aerial.webp",
            alt: "Aerial view of the circular campus, its petal roofs opening around a central court, with chalets and courts in the landscape beyond",
            caption: "The campus from above — the ring and its landscape",
            aspect: "1064/1543",
          },
        ],
      },
      {
        // Already correct — Ground Floor Plan then Second Floor Plan.
        kind: "notes",
        label: "01 — Plan",
        heading: "Floor Plan",
        surface: "sheet",
        images: [
          {
            src: "/images/vinix/vinix-plan-ground.webp",
            alt: "Circular ground floor plan with radiating segments of workshop, studio and auditorium space around a central court",
            caption: "Ground floor",
            fit: "contain",
            surface: "sheet",
            aspect: "2163/1962",
          },
          {
            src: "/images/vinix/vinix-plan-second.webp",
            alt: "Circular second floor plan with a full ring of rooms around the open central void and a wedge of tiered seating",
            caption: "Second floor",
            fit: "contain",
            surface: "sheet",
            aspect: "2203/2025",
          },
        ],
      },
      {
        // FIXED: "Concept" heading is the left column, "Axonometric view" is
        // the right column — was [axonometric, concept].
        kind: "notes",
        label: "02 — Concept",
        heading: "Design Concept",
        surface: "sheet",
        body: "The design concept is based on the idea of integration between work, creativity, and relaxation. The project is conceived as a dynamic hub where professional activities, innovation, and leisure coexist within a unified environment.",
        images: [
          {
            src: "/images/vinix/vinix-concept.webp",
            alt: "Concept diagram showing work, create and relax zones arranged around a central green court, with natural light and material notes",
            caption: "Concept — three zones, one centre",
            fit: "contain",
            surface: "sheet",
            aspect: "707/371",
            mobileAspect: "707/371",
          },
          {
            src: "/images/vinix/vinix-axonometric1.png",
            alt: "Exploded axonometric of the circular building, annotated with timber fins, brick façade, timber grills, glazed sky bridge and planters",
            caption: "Exploded axonometric",
            fit: "contain",
            surface: "sheet",
            aspect: "1490/800",
            mobileAspect: "1433/1181",
          },
        ],
      },
      {
        // Already correct — main photo then the glass material swatch.
        kind: "media",
        layout: "duo",
        surface: "sheet",
        images: [
          {
            src: "/images/vinix/vinix-exterior-bridge.webp",
            alt: "Exterior view of the curved brick volume with the glazed sky bridge spanning between wings above the entrance court",
            caption:
              "The glazed sky bridge, carried on steel between the wings",
            aspect: "1866/868",
            mobileAspect: "4/3",
            main: true,
          },
          {
            caption:
              "curutain wall systems as part of the building envelope to enhance lighting and encourage occupants to aprociate views",
            alt: "vinix material glass",
            src: "/images/vinix/vinix-material-glass.webp",
            fit: "contain",
            surface: "sheet",
            aspect: "729/418",
          },
        ],
      },
      {
        // Already correct — main dusk photo then the timber material swatch.
        kind: "media",
        layout: "duo",
        surface: "sheet",
        images: [
          {
            src: "/images/vinix/vinix-exterior-dusk.webp",
            alt: "Exterior view of the curved brick volume with the glazed sky bridge spanning between wings above the entrance court",
            caption:
              "The glazed sky bridge, carried on steel between the wings",
            aspect: "1866/868",
            mobileAspect: "4/3",
            main: true,
          },
          {
            caption:
              "wooden grills fixed to selected exterior walls to enhance",
            alt: "vinix material wood",
            src: "/images/vinix/vinix-material-timber.webp",
            fit: "contain",
            surface: "sheet",
            aspect: "556/410",
          },
        ],
      },
      {
        // FIXED: "Challet Design" spread is plan (left) → photo (right).
        // Was [chalet photo, chalet plan].
        kind: "media",
        layout: "duo",
        surface: "sheet",
        images: [
          {
            src: "/images/vinix/vinix-plan-chalet.webp",
            alt: "Curved chalet plan with two bedrooms, two toilets, a kitchen and a living room arranged along an arc",
            caption: "Chalet plan — two bedrooms on an arc",
            fit: "contain",
            surface: "sheet",
            aspect: "1183/581",
          },
          {
            src: "/images/vinix/vinix-chalet.webp",
            alt: "A brick chalet at dusk with timber-screened windows and a lit interior spilling onto the terrace",
            caption: "Chalet",
            aspect: "1533/868",
            main: true,
          },
        ],
      },
      {
        // Already correct — "Leisure Area Design" spread is plan then photo.
        kind: "media",
        layout: "duo",
        surface: "sheet",
        images: [
          {
            src: "/images/vinix/vinix-plan-leisure.webp",
            alt: "Curved chalet plan with two bedrooms, two toilets, a kitchen and a living room arranged along an arc",
            caption: "Chalet plan — two bedrooms on an arc",
            fit: "contain",
            surface: "sheet",
            aspect: "2184/956",
          },
          {
            src: "/images/vinix/vinix-leisure.webp",
            alt: "A brick chalet at dusk with timber-screened windows and a lit interior spilling onto the terrace",
            caption: "Chalet",
            aspect: "1533/868",
          },
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     03 — Eko Heritage Gallery
     ══════════════════════════════════════════════════════════ */
  {
    id: "eko-heritage-gallery",
    number: "03",
    title: "Eko Heritage Gallery",
    location: "Lagos",
    type: "Cultural",
    year: "2023",
    summary:
      "A Yoruba cultural centre organised around a geodesic glass dome. The work on this project was the construction documentation — site plan, floor plans, door schedules, dome components and the details that make them buildable.",
    concept:
      "The dome is assembled rather than shaped: a circular ring beam, a space-frame truss, a cladding band and a hybrid skin of stained and reflective glass. Drawing it as a set of separable components is what allowed it to be priced, fabricated and set out on site.",
    hero: {
      src: "/images/eko-heritage/eko-aerial.webp",
      alt: "Aerial view of the Eko Heritage Gallery, its patterned geodesic dome rising from a ring of pavilions in green landscape",
      aspect: "16/9",
      priority: true,
    },
    cover: {
      src: "/images/eko-heritage/eko-aerial.webp",
      alt: "Aerial view of the Eko Heritage Gallery and its patterned geodesic dome",
      aspect: "1294/1271",
    },
    tags: [
      "Cultural",
      "Yoruba Heritage",
      "Geodesic Dome",
      "Construction Drawings",
    ],
    details: [
      { label: "Location", value: "Lagos" },
      { label: "Type", value: "Cultural / Gallery" },
      { label: "Structure", value: "Geodesic Dome" },
      { label: "Year", value: "2023" },
      { label: "Role", value: "Construction Drawings" },
    ],
    blocks: [
      {
        kind: "text",
        label: "Overview",
        surface: "paper",
        lead: true,
        body: [
          "A Yoruba cultural centre with a geodesic glass dome at its centre.",
          "The contribution here was the construction package rather than the concept — the drawings that translate a form into something a contractor can set out, order and build. The dome, the doors and the wet details carried most of that work.",
        ],
      },
      {
        // FIXED (moved + renumbered): in the PDF this "Site Plan / Ground Floor
        // Plan" spread is the FIRST content spread after the title page —
        // it was previously block 2 but numbered "01" while Dome Components
        // (which appears last in the PDF) was placed first. Moved here as "01".
        kind: "media",
        layout: "duo",
        surface: "sheet",
        label: "01 — Setting out",
        heading: "Site and plan",
        body: "The building's gear-like footprint alternates entry bays with planted pockets. Gallery spaces, library, offices and restaurant ring the central rotunda, so the dome is read from every room.",
        images: [
          {
            src: "/images/eko-heritage/eko-site-plan.webp",
            alt: "Site plan with the proposed building outlined inside a red dashed boundary, the hatched driveway running along the western edge",
            caption: "Site plan — boundary, driveway and setting out",
            fit: "contain",
            surface: "sheet",
            aspect: "3084/3272",
            mobileAspect: "3084/3272",
            pan: true,
          },
          {
            src: "/images/eko-heritage/eko-plan-ground.webp",
            alt: "Ground floor construction plan showing the radiating gallery bays around the central rotunda, with grid lines and section marks",
            caption: "Ground floor — gridded and dimensioned",
            fit: "contain",
            surface: "sheet",
            aspect: "2205/2094",
            mobileAspect: "2205/2094",
            pan: true,
          },
        ],
      },
      {
        // FIXED (renumbered "02" — was "03"): Door Schedule is the second
        // spread in the PDF, right after Site/Ground Floor Plan.
        kind: "table",
        label: "02 — Schedule",
        heading: "Door schedule",
        surface: "sheet",
        body: "Three door types serve the whole building. The schedule plan tags each opening; the schedule itself fixes what gets ordered.",
        columns: ["Type", "Description", "Location"],
        rows: [
          [
            "AD 1",
            "Aluminium door — 60mm thick composite aluminum single leaf inward swing door, with fixed panel above, complete with heavy duty door closer & door viewer",
            "Ground floor, first floor, second floor",
          ],
          [
            "TD 1",
            "Timber door — 44mm thick single leaf, semi solid core polished timber flush door, with h/w lipping on all edges complete with stainless steel ironmongery set to architects approval",
            "Ground floor, basement floor",
          ],
          [
            "TD 2",
            "Timber door — 44mm thick single leaf, semi solid core polished timber flush door, with h/w lipping on all edges complete with stainless steel ironmongery set to architects approval",
            "Ground floor",
          ],
        ],
        image: {
          src: "/images/eko-heritage/eko-plan-doors.webp",
          alt: "Door schedule plan, each door position tagged in orange across the radiating ground floor",
          caption: "Door schedule plan — every opening tagged",
          fit: "contain",
          surface: "sheet",
          aspect: "2163/2038",
          mobileAspect: "2163/2038",
          pan: true,
        },
      },
      {
        // FIXED (renumbered "03" — was "01"): Dome Components is the LEFT
        // column of the final spread in the PDF (Dome Components | Details),
        // so it now comes after the Schedule and directly precedes Details.
        kind: "notes",
        label: "03 — Structure",
        heading: "The dome, taken apart",
        surface: "sheet",
        body: "Read from the top down, the dome is five separable layers. Drawing it this way meant each could be specified, procured and installed on its own.",
        images: [
          {
            src: "/images/eko-heritage/eko-dome-components.webp",
            alt: "Exploded axonometric of the dome showing, from top to bottom, the geodesic glass skin, the space truss canopy, the clad base band, the space frame trusses and the circular ring beam",
            caption: "Dome components, exploded",
            fit: "contain",
            surface: "sheet",
            aspect: "2164/2226",
          },
        ],
        notes: [
          {
            term: "Geodesic glass dome",
            detail:
              "Light-gauge steel trusses covered in 10 mm double-glazed tempered glass — a hybrid of stained and reflective glass.",
          },
          {
            term: "Space truss canopy",
            detail: "Sits beneath the glass and carries it.",
          },
          {
            term: "Dome base cladding",
            detail:
              "Wrapped in metal sheets, ground and sprayed to finish with anti-rust primer and epoxy.",
          },
          {
            term: "Space frame dome trusses",
            detail:
              "Connected with gusset plates at uniform spacing, to the structural engineers' details.",
          },
          {
            term: "Circular ring beam",
            detail:
              "Steel trusses with connecting channels tying the vertical support systems to the dome.",
          },
        ],
      },
      {
        // Stays "04" — already last, and internal image order (ring, parapet,
        // column, stair) already matches the PDF's top-left→bottom-right
        // reading order. No change to the images array.
        kind: "media",
        layout: "grid",
        surface: "sheet",
        label: "04 — Details",
        heading: "Details",
        body: "Four details carry the junctions that the rest of the package depends on — where the dome meets its ring, where water leaves the roof, how the internal columns are reinforced and finished, and how the stairs are built.",
        images: [
          {
            src: "/images/eko-heritage/eko-detail-ring.webp",
            alt: "Circular ring to dome detail, annotated with double-glazed tempered glass, light-gauge steel trusses, gusset plate and reinforced concrete slab and beam",
            caption: "Circular ring to dome",
            fit: "contain",
            surface: "sheet",
            aspect: "968/703",
            mobileAspect: "1062/524",
            pan: true,
          },
          {
            src: "/images/eko-heritage/eko-detail-parapet.webp",
            alt: "Parapet wall drainage detail showing concrete coping, roof drain, cement sand screed to fall and the gutter slab",
            caption: "Parapet wall drainage",
            fit: "contain",
            surface: "sheet",
            aspect: "968/703",
            mobileAspect: "1172/449",
            pan: true,
          },
          {
            src: "/images/eko-heritage/eko-detail-column.webp",
            alt: "Interior column detail with laminated bamboo fins, 20 mm main column reinforcement and 8 mm stirrups",
            caption: "Interior column",
            fit: "contain",
            surface: "sheet",
            aspect: "870/680",
            mobileAspect: "1039/776",
            pan: true,
          },
          {
            src: "/images/eko-heritage/eko-detail-stair.webp",
            alt: "Axonometric stair detail with enlarged nosing, connection and handrail details",
            caption: "Stair, in axonometric",
            fit: "contain",
            surface: "sheet",
            aspect: "870/680",
            mobileAspect: "1968/1330",
            pan: true,
          },
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     04 — Kitchen Interior Design
     ══════════════════════════════════════════════════════════ */
  {
    id: "kitchen-interior-design",
    number: "04",
    title: "Kitchen Interior Design",
    location: "Lagos",
    type: "Interior",
    year: "2023",
    summary:
      "A warm, contemporary kitchen for a private client: wood finishes, marble surfaces, integrated appliances, generous storage, a breakfast counter, and as much daylight as the room could be made to hold.",
    concept:
      "The room is small and has more doors than a kitchen wants. The plan answers with an L — a tight work triangle along two walls, storage everywhere it can be hidden, and the breakfast bar turned to face the light.",
    hero: {
      src: "/images/kitchen/kitchen-render-main.webp",
      alt: "The finished kitchen — walnut cabinetry, white marble counter and splashback, black marble floor, daylight from the window above the sink",
      aspect: "16/9",
      priority: true,
    },
    cover: {
      src: "/images/kitchen/kitchen-render-main.webp",
      alt: "Walnut and marble kitchen interior with daylight across the worktop",
      aspect: "1953/1762",
    },
    tags: ["Interior", "Residential", "Kitchen", "Visualisation"],
    details: [
      { label: "Location", value: "Lagos" },
      { label: "Type", value: "Residential Interior" },
      { label: "Year", value: "2023" },
      { label: "Finish", value: "Walnut, Marble, Steel" },
      { label: "Tools", value: "SketchUp, V-Ray, Photoshop" },
    ],
    blocks: [
      {
        kind: "text",
        label: "Overview",
        surface: "paper",
        lead: true,
        body: [
          "A warm, contemporary kitchen: wood finishes, marble surfaces, integrated appliances, ample storage, a breakfast counter and abundant natural light.",
          "The client asked for an L-shaped kitchen that could hold all of it inside a compact footprint. Space limitations and multiple door openings were resolved through efficient cabinetry planning and a streamlined work triangle.",
        ],
      },
      {
        // MOVED (was directly after Overview): the PDF has Floor Plan +
        // Elevations as the spread right after the title page, and this
        // full-bleed wide render only appears on the spread AFTER that
        // (paired with the materials strip). Relocated below Elevations.
        kind: "notes",
        label: "01 — Plan",
        heading: "A compact footprint",
        surface: "sheet",
        body: "The layout was designed to maximise functionality within a compact footprint, responding to the client's request for an L-shaped kitchen with integrated appliances, ample storage and a breakfast bar.",
        images: [
          {
            src: "/images/kitchen/kitchen-plan.webp",
            alt: "Kitchen floor plan showing the L-shaped run of units, sink beneath the window, range, island and the two door swings into the room",
            caption: "Floor plan",
            fit: "contain",
            surface: "sheet",
            aspect: "1308/1607",
          },
        ],
        notes: [
          {
            term: "The L",
            detail:
              "Two working walls meeting in a corner, which keeps the third and fourth walls free for doors.",
          },
          {
            term: "Work triangle",
            detail:
              "Sink, range and refrigeration kept within a few steps of each other.",
          },
          {
            term: "Multiple door openings",
            detail: "Absorbed by the cabinetry layout rather than fought with.",
          },
          {
            term: "Breakfast bar",
            detail:
              "Cantilevered off the island, seating two, clear of the working run.",
          },
        ],
      },
      {
        kind: "media",
        layout: "grid",
        surface: "sheet",
        label: "02 — Elevations",
        heading: "Four walls",
        images: [
          {
            src: "/images/kitchen/kitchen-elev-a.webp",
            alt: "Elevation A — tall units flanking the integrated refrigerator, oven and microwave stack, with marble splashback beside",
            caption: "A — appliance wall",
            fit: "contain",
            surface: "sheet",
            aspect: "564/465",
          },
          {
            src: "/images/kitchen/kitchen-elev-b.webp",
            alt: "Elevation B — the sink run beneath a wide window, base units below and a single wall cabinet to one side",
            caption: "B — sink and window",
            fit: "contain",
            surface: "sheet",
            aspect: "508/465",
          },
          {
            src: "/images/kitchen/kitchen-elev-c.webp",
            alt: "Elevation C — the breakfast bar seen head-on, two stools beneath a thick marble top",
            caption: "C — breakfast bar",
            fit: "contain",
            surface: "sheet",
            aspect: "464/398",
          },
          {
            src: "/images/kitchen/kitchen-elev-d.webp",
            alt: "Elevation D — the entry door alongside a low run of storage units",
            caption: "D — entry and storage",
            fit: "contain",
            surface: "sheet",
            aspect: "603/399",
          },
        ],
      },
      {
        // MOVED here from right after Overview — this is the "the L, seen
        // whole" wide render that sits alongside the materials strip in the
        // PDF, appearing after Floor Plan/Elevations.
        kind: "media",
        layout: "bleed",
        surface: "paper",
        images: [
          {
            src: "/images/kitchen/kitchen-render-main.webp",
            alt: "Wide view of the kitchen showing the full L of cabinetry, the marble splashback behind the range, and the window over the sink",
            caption: "The L, seen whole",
            aspect: "2/1",
            mobileAspect: "4/3",
          },
        ],
      },
      {
        // Already correct order — wood, marble, floor tile, appliances,
        // handles (matches the PDF materials strip top-to-bottom), then the
        // colour swatches in the same left-to-right order as the palette page.
        kind: "materials",
        label: "03 — Materials",
        heading: "Warm above, dark below",
        surface: "paper",
        body: "Five finishes do the whole room. The palette runs from a near-black floor through walnut and grey to the white of the marble.",
        items: [
          {
            name: "Warm wood cabinetry",
            note: "Walnut, run horizontally",
            src: "/images/kitchen/kitchen-mat-wood.webp",
          },
          {
            name: "White marble",
            note: "Counter top and backsplash",
            src: "/images/kitchen/kitchen-mat-marble.webp",
          },
          {
            name: "Black marble floor tile",
            note: "Non-slip",
            src: "/images/kitchen/kitchen-mat-floor.webp",
          },
          {
            name: "Matte grey appliances",
            note: "Integrated where possible",
            src: "/images/kitchen/kitchen-mat-appliance.webp",
          },
          {
            name: "Brushed nickel handles",
            note: "Full-width bar pulls",
            src: "/images/kitchen/kitchen-mat-handle.webp",
          },
          { name: "Charcoal", swatch: "#2c2924" },
          { name: "Slate grey", swatch: "#746d68" },
          { name: "Walnut", swatch: "#664b35" },
          { name: "Greige", swatch: "#cdc2b8" },
          { name: "Chalk", swatch: "#f5f2f0" },
        ],
      },
      {
        // Already correct — bar seating, marble counter, tap, storage matches
        // the PDF's "Key features" grid reading order.
        kind: "media",
        layout: "grid",
        surface: "paper",
        label: "04 — Details",
        heading: "Key features",
        images: [
          {
            src: "/images/kitchen/kitchen-feat-bar.webp",
            alt: "The breakfast bar with two upholstered stools and a bowl of fruit on the marble top",
            caption: "Bar seating",
            aspect: "646/613",
          },
          {
            src: "/images/kitchen/kitchen-feat-counter.webp",
            alt: "Close view of the thick marble counter top meeting the veined splashback, with utensils and a dish rack",
            caption: "Thick marble counter top",
            aspect: "621/613",
          },
          {
            src: "/images/kitchen/kitchen-feat-tap.webp",
            alt: "Polished single-lever tap at the undermounted sink beneath the window",
            caption: "Polished single-lever tap",
            aspect: "646/560",
          },
          {
            src: "/images/kitchen/kitchen-feat-storage.webp",
            alt: "Walnut drawer fronts with full-width brushed nickel bar pulls",
            caption: "Ample storage in warm wood",
            aspect: "511/504",
          },
        ],
      },
      {
        kind: "media",
        layout: "duo",
        surface: "ink",
        label: "05 — Light",
        heading: "Lighting and views",
        body: "Windows above the sink and along the worktop bring diffuse light through most of the day, so little artificial light is needed before evening. A recessed cove washes the ceiling; the rest is task lighting where it is actually used.",
        images: [
          {
            src: "/images/kitchen/kitchen-render-bar.webp",
            alt: "View across the breakfast bar towards the cabinetry, with the cove-lit ceiling and daylight falling across the counter",
            caption: "Toward the breakfast bar",
            aspect: "1216/1426",
          },
          {
            src: "/images/kitchen/kitchen-render-window.webp",
            alt: "The worktop and sink beneath the window, marble splashback catching the light",
            caption: "The window run",
            aspect: "1294/1271",
          },
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     05 — The Meeting Point Co-Work Space
     ══════════════════════════════════════════════════════════ */
  {
    id: "the-meeting-point",
    number: "05",
    title: "The Meeting Point Co-Work Space",
    location: "Gudu, Abuja",
    type: "Interior / Commercial",
    year: "2023",
    summary:
      "An interior fit-out at The Meeting Point Event Center in Gudu, Abuja. The work here was the 3D modelling of custom furniture elements and on-site supervision — making sure what was drawn was what got built.",
    concept:
      "The furniture does the spatial work. Open steel frames divide the floor without closing it; timber slats warm the surfaces they meet; planting and colour are allowed in at the points where people actually stop.",
    hero: {
      src: "/images/cowork-space/cowork-tv-wall.webp",
      alt: "The lounge at TMP Hub — steel shelving, timber slat wall, low seating and a coffee table on a dark rug",
      aspect: "16/9",
      priority: true,
    },
    cover: {
      src: "/images/cowork-space/cowork-lounge.webp",
      alt: "Lounge seating at TMP Hub against a timber slat wall",
      aspect: "990/1434",
    },
    tags: ["Interior", "Co-Working", "Furniture", "Site Supervision"],
    details: [
      { label: "Location", value: "Gudu, Abuja" },
      { label: "Type", value: "Commercial Interior" },
      { label: "Year", value: "2023" },
      { label: "Role", value: "3D Modelling · Supervision" },
      { label: "Finish", value: "Timber, Steel, Textile" },
    ],
    blocks: [
      {
        kind: "text",
        label: "Overview",
        surface: "paper",
        lead: true,
        body: [
          "An interior design project at The Meeting Point Event Center, Gudu, Abuja.",
          "The role covered 3D modelling of the custom furniture elements and on-site supervision, ensuring that the designed furniture and interior details were accurately executed during construction. The pairing below runs each model against the piece as built.",
        ],
      },
      {
        // FIXED: title page is the locality/street map (left) → lounge photo
        // (right). Was [lounge, locality].
        kind: "media",
        layout: "duo",
        surface: "paper",
        images: [
          {
            src: "/images/cowork-space/cowork-locality.webp",
            alt: "Locality plan of the Gudu site in Abuja with the plot marked between Oladipo Diya Street and Olaniran Olayinka Street",
            caption: "Gudu, Abuja",
            fit: "contain",
            aspect: "1286/1152",
            surface: "sheet",
          },
          {
            src: "/images/cowork-space/cowork-lounge.webp",
            alt: "The lounge corner with upholstered benches, an orange pouffe and a timber coffee table against the slat wall",
            caption: "The lounge, as built",
            aspect: "990/1434",
          },
        ],
      },
      {
        kind: "notes",
        label: "01 — Lounge",
        heading: "Furniture model — lounge",
        surface: "sheet",
        body: "The lounge model sets the TV wall and the bar run against each other across an open floor, with the shelving frames left deliberately unfilled.",
        numbered: true,
        images: [
          {
            src: "/images/cowork-space/cowork-model-lounge.webp",
            alt: "Line axonometric model of the lounge showing the slatted TV wall, open steel shelving units and the bar counter, numbered one and two",
            caption: "Lounge furniture model",
            fit: "contain",
            surface: "sheet",
            aspect: "1424/708",
          },
        ],
        notes: [
          {
            term: "TV wall",
            detail:
              "Vertical timber slats, full height, framed by open steel shelving.",
          },
          {
            term: "Bar seating",
            detail: "A high counter and stools set against the hex screen.",
          },
        ],
      },
      {
        // Already correct — 1. TV Wall then 2. Bar seating.
        kind: "media",
        layout: "duo",
        surface: "paper",
        images: [
          {
            src: "/images/cowork-space/cowork-tv-wall.webp",
            alt: "The completed TV wall in the lounge area, timber slats beside the hexagonal steel screen, with soft seating in front",
            caption: "1 — TV wall, lounge area",
            aspect: "1212/751",
          },
          {
            src: "/images/cowork-space/cowork-bar-seating.webp",
            alt: "The completed bar run with metal stools along a timber counter, a yellow hanging chair alongside",
            caption: "2 — Bar seating",
            aspect: "1214/932",
          },
        ],
      },
      {
        kind: "notes",
        label: "02 — Workspace",
        heading: "Furniture model — workspace",
        surface: "sheet",
        body: "The workspace model lays out the reception desk, the informal meeting screen and the shared work tables as one continuous field of steel frames.",
        numbered: true,
        startAt: 3,
        images: [
          {
            src: "/images/cowork-space/cowork-model-work.webp",
            alt: "Wide line axonometric model of the workspace showing desks, screens and open steel shelving units numbered three, four and five",
            caption: "Workspace furniture model",
            fit: "contain",
            surface: "sheet",
            aspect: "1505/705",
            mobileAspect: "1505/705",
            pan: true,
          },
        ],
        notes: [
          {
            term: "Reception desk",
            detail: "Slatted timber front beneath the TMP Hub sign.",
          },
          {
            term: "Informal meeting area",
            detail: "A planted steel grid that screens without enclosing.",
          },
          {
            term: "Work space",
            detail:
              "Shared tables under pendant lighting, backed by a green wall.",
          },
        ],
      },
      {
        // Already correct — 3. Reception, 4. Meeting, 5. Workspace.
        kind: "media",
        layout: "grid",
        surface: "paper",
        images: [
          {
            src: "/images/cowork-space/cowork-reception.webp",
            alt: "The reception desk in slatted timber below the TMP HUB lettering, with a plant to one side",
            caption: "3 — Reception desk",
            aspect: "761/806",
          },
          {
            src: "/images/cowork-space/cowork-meeting.webp",
            alt: "The informal meeting screen — an open steel grid filled with timber boxes, artwork and trailing plants",
            caption: "4 — Informal meeting area",
            aspect: "852/801",
          },
          {
            src: "/images/cowork-space/cowork-workspace.webp",
            alt: "The shared work room with long timber tables, task chairs and pendant lights over a lit rear wall",
            caption: "5 — Work space",
            aspect: "909/792",
          },
        ],
      },
    ],
  },
];

export default projects;
export type { Project } from "./types";

// {
//   kind: "notes",
//   label: "03 — Facade Concept",
//   heading: "Adaptive Facade Concept",
//   surface: "sheet",
//   body: "The concept is for an adaptive panel that opens and closes by folding and unfolding. Inspired by the mimosa pudica plant which changes its physical form by closing when touched. The shape of the panel is kite like, and you can see from the individual leaf of the mimosa as it follows how it tappers to each end of the leaf.",
//   numbered: true,
//   images: [
//     {
//       src: "/images/IOD/iod-panel-diagram.webp",
//       alt: "Concept diagram deriving the kite-shaped panel from a mimosa leaf, showing the closed and open states, the folding mechanism, and solar shading behaviour",
//       caption: "Derivation, states and solar behaviour",
//       fit: "contain",
//       aspect: "1243/1551",
//     },
//     {
//       src: "/images/IOD/iod-mimosa-sketch.webp",
//       alt: "Botanical sketches of a mimosa pudica leaf, open and closed",
//       caption: "Mimosa pudica — open and closed",
//       fit: "contain",
//       aspect: "794/440",
//     },
//     {
//       src: "/images/IOD/iod-facade-panel-day.webp",
//       alt: "The adaptive façade in daylight with panels unfolded, casting sharp shadows across the glazing behind",
//       caption: "Panels unfolded",
//       aspect: "926/844",
//     },
//     {
//       src: "/images/IOD/iod-facade-panel-dusk.webp",
//       alt: "The adaptive façade with panels folded flat against the envelope, reading as a continuous perforated surface",
//       caption: "Panels folded",
//       aspect: "884/748",
//     },
//   ],
//   notes: [
//     {
//       term: "Tower on podium",
//       detail:
//         "A portion of the podium base is cut away to make room for parking beneath.",
//     },
//     {
//       term: "Double-skin adaptive façade",
//       detail:
//         "Wrapped over the tower envelope for energy performance and for the look of the building.",
//     },
//     {
//       term: "Green podium top",
//       detail:
//         "The roof of the podium becomes recreational space, with parking held below.",
//     },
//   ],
// },
