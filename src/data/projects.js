import controllogoImg from "../assets/productimages/control_logo.svg";
import controlImg from "../assets/productimages/Control.png";
import lastOfUsImg from "../assets/images/last_of_us/LOU_step_4.png";
import surrealismImg from "../assets/productimages/Surrealism_Collage.jpg";
import twogatherhero from "../assets/productimages/2gather/2gather_hero.png";

const projects = [
  {
    slug: "2gather-event-app",
    title: "2GATHER",
    year: "2026",
    summary:
      "2GATHER er en social platform, der bringer mennesker sammen gennem lokale aktiviteter og fælles interesser.",
    description:
      "2GATHER er en social eventplatform, der gør det lettere at finde fællesskaber gennem lokale aktiviteter og fælles interesser. Brugerne kan udforske, oprette og deltage i events samt skabe kontakt til andre deltagere.",
    tags: ["React", "Figma", "JavaScript", "Jitter"],
    tools: ["Figma", "Jitter", "React", "JavaScript"],
    image: twogatherhero,
    links: [
      {
        label: "Se projekt",
        href: "#",
      },
    ],
  },
  {
    slug: "control",
    title: "Control",
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
    tags: [
      "Double Exposure",
      "Visuel hierarki",
      "Storytelling",
      "Compositing",
      "Adobe Photoshop",
    ],
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
    summary: "En collage med surrealistisk og experimental visuel stil.",
    description:
      "Dette projektkort viser et af dine collage-billeder fra productimages-mappen.",
    tags: ["Collage", "Surrealism", "Adobe Photoshop", "Compositing"],
    image: surrealismImg,
    links: [
      {
        label: "Se billede",
        href: "#",
      },
    ],
  },
];

export default projects;
