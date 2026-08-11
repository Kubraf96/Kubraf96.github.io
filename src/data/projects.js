import controllogoImg from "../assets/productimages/control_logo.svg";
import controlImg from "../assets/productimages/Control.png";
import lastOfUsImg from "../assets/productimages/LastOfUs_poster_preview.jpg";
import surrealismImg from "../assets/productimages/Surrealism_Collage.jpg";
import twoGatherLogo from "../assets/productimages/2gather/2gather_logo.svg";

const projects = [
  {
    slug: "Control",
    title: "Webshop",
    year: "2026",
    summary: "En personlig portfolio bygget med React, Vite og GitHub Pages.",
    description:
      "Portfolioen viser udvalgte projekter og fungerer som et udgangspunkt for at arbejde med komponenter, routing, styling og deployment.",
    tags: ["React", "Vite", "GitHub Pages"],
    image: controllogoImg,
    links: [
      {
        label: "Live site",
        href: "https://username.github.io",
      },
    ],
  },
  {
    slug: "case-study",
    title: "Case study",
    year: "2026",
    summary:
      "Et projektkort, som du kan kopiere og ændre til dit eget projekt.",
    description:
      "Beskriv problemet, processen, din rolle, de vigtigste valg og hvad du lærte.",
    tags: ["Design", "Frontend", "Proces"],
    image: controlImg,
    links: [
      {
        label: "Eksempel-link",
        href: "https://github.com",
      },
    ],
  },
  {
    slug: "last-of-us",
    title: "The Last of Us",
    subtitle: "Game poster",
    year: "2026",
    summary:
      "En alternativ plakat til spillet The Last of Us med fokus på stemning og visuel fortælling.",
    description: [
      "I dette projekt skabte jeg en plakat til spilserien The Last of Us ved hjælp af double exposure-teknikken. Jeg ville visualisere forbindelsen mellem karakteren Ellie og den verden, hun bevæger sig igennem - med fokus på stemning, fortælling og komposition.",

      "Projektet gav mig mulighed for at arbejde med billedmanipulation, lagmasker, blending og farvejustering for at få flere billeder til at smelte sammen til én samlet fortælling. Processen var iterativ, og jeg gik løbende tilbage og justerede tidligere elementer, efterhånden som nye lag blev tilføjet.",

      "Jeg er især interesseret i, hvordan man kan fortælle noget om en karakter og en historie uden at bruge ord.",
    ],
    tools: ["Adobe Photoshop"],
    tags: ["Double Exposure", "Visuel hierarki", "Storytelling", "Compositing"],
    process: [
      {
        title: "Idé og research",
        description:
          "Jeg arbejdede ud fra spillets stemning og visuelle univers og samlede forskellige referencebilleder til forgrund, mellemgrund og baggrund.",
      },
      {
        title: "Grundlag",
        description:
          "Jeg fritlagde portrætter af Ellie som fundament for kompositionen og begyndte at bygge billedets struktur op omkring hende.",
      },
      {
        title: "Double exposure",
        description:
          "Jeg benyttede double exposure-metoden og byggede scenen op med flere billedlag og integrerede mellemgrund og baggrund i kompositionen.",
      },
      {
        title: "Farve og lys",
        description:
          "Jeg arbejdede løbende med pensler, justeringlag, lys, farver og kontrast for at skabe sammenhæng mellem elementerne og fastholde Ellie som det visuelle fokus.",
      },
    ],
    image: lastOfUsImg,
    links: [
      {
        label: "Se billede",
        href: "#",
      },
    ],
  },
  {
    slug: "surreal-collage",
    subtitle: "Surreal Collage",
    title: "Surrealism collage",
    year: "2026",
    summary:
      "En surrealistisk Photoshop-collage, hvor religiøse og kosmiske elementer kombineres gennem compositing for at skabe en dramatisk og urealistisk scene.",
    description: [
  "I dette projekt skabte jeg en surrealistisk collage i Adobe Photoshop ved at kombinere forskellige billedelementer, som normalt ikke hører sammen.","Jeg tog udgangspunkt i en nonne og det kosmiske univers og ønskede at skabe en mørk, mystisk og eksistentiel stemning.", "Gennem kombinationen af religiøse og kosmiske motiver ville jeg skabe en scene, der føles både fascinerende og en smule foruroligende.", "Jeg arbejdede med billedmanipulation, fritlægning, lagmasker, compositing og farvejustering for at samle de forskellige elementer til én sammenhængende komposition. Den brændende planet, laserstrålerne, bjergene og planeterne blev valgt og placeret for at understøtte den dystre og surrealistiske atmosfære.", "Gennem kontraster i farve, størrelse og placering skabte jeg et tydeligt visuelt hierarki, hvor nonnen og den brændende planet fungerer som de primære fokuspunkter.", "Projektet gav mig mulighed for at undersøge, hvordan forskellige visuelle elementer kan kombineres til at skabe en ny og urealistisk virkelighed og samtidig fremkalde en bestemt stemning og følelsesmæssig reaktion hos beskueren.",
    ],
    tools: ["Adobe Photoshop"],
    tags: ["Collage", "Surrealism", "Image manipulation", "Compositing"],
    process: [
      {
        title: "Idé og eksperimentering",
        description:
          "Jeg tog udgangspunkt i kombinationen af nonnen og det kosmiske univers, som jeg fritlagde fra deres oprindelige billeder og fjernede øjnene på nonnen.",
      },
      {
        title: "Compositing",
        description:
          "Jeg fritlagde og sammensatte de udvalgte elementer i Photoshop. Jeg arbejdede med skalering, placering og overlap for at skabe dybde og et tydeligt visuelt hierarki. Den brændende planet og laserstrålerne blev centrale elementer i den endelige komposition.",
      },
      {
        title: "Farve og finpudsning",
        description:
          "Til sidst arbejdede jeg med farvejustering, kontrast og lys for at få de forskellige billeder til at fungere som én samlet scene.",
      },
    ],
    image: surrealismImg,
    links: [
      {
        label: "Se billede",
        href: "#",
      },
    ],
  },
  {
    slug: "2gather-event-app",
    title: "2GATHER event app",
    year: "2026",
    summary: "Event-app til at samle venner og organisere arrangementer.",
    description:
      "2GATHER er en event-app med chat, invitationer og bekræftelse af deltagelse. Dette er et eksempelprojekt med logo-thumbnail.",
    tags: ["React", "Events", "Chat"],
    image: twoGatherLogo,
    links: [
      {
        label: "Se projekt",
        href: "#",
      },
    ],
  },
];

export default projects;
