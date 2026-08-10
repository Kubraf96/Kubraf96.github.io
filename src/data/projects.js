import controllogoImg from "../assets/productimages/control_logo.svg";
import controlImg from "../assets/productimages/Control.png";
import lastOfUsImg from "../assets/productimages/LastOfUs_poster_preview.jpg";
import surrealismImg from "../assets/productimages/Surrealism_Collage.jpg";

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
    title: "Last of Us poster",
    year: "2025",
    summary: "Et visuelt projekt med stærke farver og filmisk komposition.",
    description:
      "I denne case arbejdede jeg med double exposure i Adobe Photoshop for at skabe en poster inspireret af spillet The Last of Us. Fokus var på at skabe et sammenhængende visuelt udtryk, der vækker nysgerrighed og understøtter fortællingen.",
    tags: ["Double Exposure", "Adobe Photoshop", "Visuel hierarki", "Storytelling" ],
    image: lastOfUsImg,
    links: [
      {
        label: "Se billede",
        href: "#",
      },
    ],
  },
  {
    slug: "surrealism",
    title: "Surrealism collage",
    year: "2025",
    summary: "En collage med surrealistisk og experimental visuel stil.",
    description:
      "Dette projektkort viser et af dine collage-billeder fra productimages-mappen.",
    tags: ["Collage", "Surrealism", "Kunst"],
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
