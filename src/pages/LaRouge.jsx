import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import projects from "../data/projects";
import arrowIcon from "../assets/icons/arrow.svg";
import heroImage from "../assets/productimages/re_rouge/re_rouge_hero.svg";
import moodboardImage from "../assets/productimages/re_rouge/re_rouge_moodboard.svg";
import logoImage from "../assets/productimages/re_rouge/re_rouge_logo.svg";
import colorsImage from "../assets/productimages/re_rouge/re_rouge_farver.svg";
import typographyImage from "../assets/productimages/re_rouge/re_rouge_typografi.svg";
import instagramImage from "../assets/productimages/re_rouge/re_rouge_instagram.svg";
import flyerImage from "../assets/productimages/re_rouge/re_rouge_flyer.svg";
import shopImage from "../assets/productimages/re_rouge/re_rouge_butik.svg";
import standInformationImage from "../assets/productimages/re_rouge/re_rouge_stand_information.svg";
import productIdentificationVideo from "../assets/productimages/re_rouge/re_rouge.mov";
import "../styles/la-rouge.css";

const identityGallery = [
  { src: moodboardImage, caption: "Moodboard" },
  { src: logoImage, caption: "Logo" },
  { src: colorsImage, caption: "Farver" },
  { src: typographyImage, caption: "Typografi" },
];

const marketingGallery = [
  { src: instagramImage, caption: "Instagram" },
  { src: flyerImage, caption: "Flyer" },
  { src: shopImage, caption: "Butik" },
];

const standImages = [{ src: standInformationImage, caption: "Standinformation" }];

function ImageGallery({ images, name }) {
  const [index, setIndex] = useState(0);
  const currentImage = images[index];

  function moveImage(direction) {
    if (images.length < 2) {
      return;
    }

    setIndex(
      (currentIndex) =>
        (currentIndex + direction + images.length) % images.length,
    );
  }

  return (
    <figure className="la-rouge-gallery">
      <div className="la-rouge-gallery-frame" aria-live="polite">
        {currentImage ? (
          <img src={currentImage.src} alt={currentImage.caption} />
        ) : (
          <p>Billeder tilføjes</p>
        )}
      </div>
      <figcaption aria-live="polite">
        <span>{currentImage?.caption ?? "Billeder tilføjes"}</span>
        <span>
          {images.length
            ? `${String(index + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`
            : "00 / 00"}
        </span>
      </figcaption>
      <div
        className="la-rouge-gallery-controls"
        role="group"
        aria-label={`${name} galleri`}
      >
        <button
          type="button"
          onClick={() => moveImage(-1)}
          disabled={images.length < 2}
          aria-label="Vis forrige billede"
        >
          <img src={arrowIcon} alt="" />
        </button>
        <button
          type="button"
          onClick={() => moveImage(1)}
          disabled={images.length < 2}
          aria-label="Vis næste billede"
        >
          <img src={arrowIcon} alt="" />
        </button>
      </div>
    </figure>
  );
}

function SectionHeading({ number, title, id }) {
  return (
    <div className="la-rouge-section-heading">
      <span className="la-rouge-number">{number}</span>
      <h2 id={id}>{title}</h2>
    </div>
  );
}

function SolutionHeading({ number, title, id }) {
  return (
    <div className="la-rouge-solution-heading">
      <span className="la-rouge-solution-number">{number}</span>
      <h3 id={id}>{title}</h3>
    </div>
  );
}

function LaRouge() {
  const project = projects.find((item) => item.slug === "la-rouge");

  if (!project) {
    return null;
  }

  return (
    <>
      <Navbar />

      <main className="la-rouge-page">
        <Link to="/projects" className="la-rouge-back-link">
          <img src={arrowIcon} alt="" />
          <span>Tilbage til projekter</span>
        </Link>

        <section className="la-rouge-hero" aria-labelledby="la-rouge-title">
          <div className="la-rouge-hero-copy">
            <p className="la-rouge-eyebrow">{project.subtitle}</p>
            <h1 id="la-rouge-title">{project.title}</h1>
            <p className="la-rouge-intro">{project.description}</p>

            <dl className="la-rouge-meta">
              <div>
                <dt>Værktøjer</dt>
                <dd>{project.tools.join(", ")}</dd>
              </div>
              <div>
                <dt>År</dt>
                <dd>{project.year}</dd>
              </div>
            </dl>

            <ul className="la-rouge-tags" aria-label="Projektområder">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>

            <div className="la-rouge-project-links">
              <a
                href="https://www.figma.com/proto/NPfFnMTZQaMlIFLg7Qmzqq/Re-LaRouge?node-id=683-763&viewport=510%2C265%2C0.23&t=AA4xQi1o0c4Ct1BE-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=683%3A763&show-proto-sidebar=1&page-id=44%3A47"
                target="_blank"
                rel="noreferrer"
              >
                <span>Se Figma prototype</span>
                <img src={arrowIcon} alt="" />
              </a>
              <a
                href="https://www.figma.com/proto/NPfFnMTZQaMlIFLg7Qmzqq/Re-LaRouge?node-id=1490-1499&p=f&viewport=-165%2C275%2C0.11&t=iCucFTROesshwso2-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1490%3A1499&page-id=1487%3A1323"
                target="_blank"
                rel="noreferrer"
              >
                <span>Se branddeck</span>
                <img src={arrowIcon} alt="" />
              </a>
            </div>
          </div>

          <figure className="la-rouge-hero-media">
            <div className="la-rouge-hero-frame">
              <img src={heroImage} alt="RE-RŌUGEs visuelle identitet" />
            </div>
          </figure>
        </section>

        <section
          className="la-rouge-section"
          aria-labelledby="la-rouge-research"
        >
          <SectionHeading
            number="01"
            title="Undersøgelse og udfordring"
            id="la-rouge-research"
          />
          <div className="la-rouge-section-content">
            <p>
              Vi analyserede LA RŌUGEs eksisterende secondhand-koncept og
              brandets visuelle kommunikation for at identificere potentielle
              barrierer. Med udgangspunkt i vores analyse og egne erfaringer
              pegede vi på tre udfordringer:
            </p>
            <ol className="la-rouge-challenges">
              <li>
                <span>01</span>
                <p>Manglende kommunikation om secondhand-koncept</p>
              </li>
              <li>
                <span>02</span>
                <p>Krav om ordrenummer eller kvittering</p>
              </li>
              <li>
                <span>03</span>
                <p>Manglende standbilleder og fejlbeskrivelse</p>
              </li>
            </ol>
            <p className="la-rouge-note">
              Vi gennemførte ikke brugertests, så udfordringerne er vores
              observationer og hypoteser frem for validerede brugerbehov.
            </p>
          </div>
        </section>

        <section
          className="la-rouge-section"
          aria-labelledby="la-rouge-choices"
        >
          <SectionHeading
            number="02"
            title="Løsning og faglige valg"
            id="la-rouge-choices"
          />
          <div className="la-rouge-section-content">
            <p>
              På baggrund af analysen blev der arbejdet med fire centrale
              forbedringer:
            </p>
            <ol className="la-rouge-choice-list">
              <li>
                <span>01</span>
                <h3>Visuel identitet</h3>
              </li>
              <li>
                <span>02</span>
                <h3>Markedsføring og synlighed</h3>
              </li>
              <li>
                <span>03</span>
                <h3>AI-assisteret produktidentifikation</h3>
              </li>
              <li>
                <span>04</span>
                <h3>Standinformation</h3>
              </li>
            </ol>
          </div>
        </section>

        <section
          className="la-rouge-section la-rouge-results"
          aria-labelledby="la-rouge-results"
        >
          <SectionHeading
            number="03"
            title="Resultat og dokumentation"
            id="la-rouge-results"
          />

          <article className="la-rouge-solution la-rouge-solution-gallery">
            <div className="la-rouge-solution-copy">
              <SolutionHeading
                number="01"
                title="Visuel identitet"
                id="la-rouge-identity"
              />
              <p>
                Moodboardet er inspireret af LA RŌUGEs Instagram og viderefører
                brandets personlige, cool og energiske kommunikation.
              </p>
              <p>
                Farvepaletten viderefører LA RŌUGEs mørkerøde farve, suppleret
                med varme, jordnære nuancer. Den håndskrevne accentfont er
                inspireret af læbestift og tilfører et personligt, råt og
                markant udtryk.
              </p>
              <p>
                Logoets blomsterform symboliserer nyt liv og tøj, der får en ny
                ejer. Navnet RE RŌUGE leger med ordet re-use og skaber en
                tydelig forbindelse til LA RŌUGE.
              </p>
            </div>
            <ImageGallery images={identityGallery} name="Visuel identitet" />
          </article>

          <article className="la-rouge-solution la-rouge-solution-gallery">
            <div className="la-rouge-solution-copy">
              <SolutionHeading
                number="02"
                title="Markedsføring og synlighed"
                id="la-rouge-marketing"
              />
              <p>
                For at skabe opmærksomhed om RE RŌUGE blandt LA RŌUGEs
                eksisterende målgruppe kan brandet afholde et launch-event i et
                fysisk lokale. Her får kunderne mulighed for at opleve
                secondhand-produkterne på nært hold, hvilket kan skabe større
                tryghed ved fremtidige onlinekøb og øge trafikken til
                hjemmesiden.
              </p>
              <p>
                Synligheden kan desuden styrkes gennem en flyer, der følger med
                online- og butikskøb. Den informerer kunderne om RE-RŌUGE og
                muligheden for at videresælge deres LA RŌUGE-tøj. På Instagram
                kan målrettede opslag og visuelt indhold supplere indsatsen og
                skabe yderligere opmærksomhed om konceptet.
              </p>
            </div>
            <ImageGallery images={marketingGallery} name="Markedsføring" />
          </article>

          <div className="la-rouge-small-solutions">
            <article className="la-rouge-solution la-rouge-small-solution">
              <div className="la-rouge-solution-copy">
                <SolutionHeading
                  number="03"
                  title="AI-assisteret produktidentifikation"
                  id="la-rouge-product-identification"
                />
                <p>
                  Prototypen indeholder en AI-funktion, der gør det muligt at
                  identificere et produkt ud fra et billede af tøjet. Det gør
                  det lettere for kunder at videresælge deres LA RŌUGE-tøj,
                  selvom de ikke længere har ordrenummer eller kvittering.
                </p>
              </div>
              <div className="la-rouge-small-media">
                <video
                  src={productIdentificationVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-label="Demonstration af AI-assisteret produktidentifikation"
                />
              </div>
            </article>

            <article className="la-rouge-solution la-rouge-small-solution">
              <div className="la-rouge-solution-copy">
                <SolutionHeading
                  number="04"
                  title="Standinformation"
                  id="la-rouge-stand-information"
                />
                <p>
                  Produktvisningen kombinerer produktbilleder med billeder af
                  tøjets faktiske stand og beskrivelser af eventuelle fejl. Det
                  skal mindske kundernes usikkerhed omkring produktets stand, da
                  manglende indsigt i tøjets reelle udseende kan skabe tvivl og
                  afholde dem fra at gennemføre et køb.
                </p>
              </div>
              {standImages.length ? (
                <div className="la-rouge-small-media">
                  <div className="la-rouge-stand-images">
                    {standImages.map((image) => (
                      <figure key={image.src}>
                        <img src={image.src} alt={image.caption} />
                      </figure>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="la-rouge-stand-placeholder">
                  <p>Produktbilleder og standdokumentation tilføjes</p>
                </div>
              )}
            </article>
          </div>
        </section>

        <section
          className="la-rouge-section"
          aria-labelledby="la-rouge-reflection"
        >
          <SectionHeading
            number="04"
            title="Faglig refleksion"
            id="la-rouge-reflection"
          />
          <div className="la-rouge-section-content">
            <p>
              Arbejdet med RE RŌUGE har givet indsigt i, hvordan visuel
              identitet, UX og kommunikation kan spille sammen om at
              videreudvikle et eksisterende koncept. En central udfordring var
              at skabe en selvstændig identitet uden at miste forbindelsen til
              LA RŌUGE.
            </p>
            <p>
              Da der ikke blev gennemført brugertests, bygger løsningerne på
              observationer og hypoteser. Et naturligt næste skridt ville derfor
              være at teste prototypen med både eksisterende kunder og
              potentielle secondhand-købere for at undersøge, om løsningen
              skaber større tryghed og gør købs- og salgsprocessen mere
              overskuelig.
            </p>
          </div>
        </section>

        <section
          className="la-rouge-section"
          aria-labelledby="la-rouge-business"
        >
          <SectionHeading
            number="05"
            title="Forretningspotentiale"
            id="la-rouge-business"
          />
          <div className="la-rouge-section-content">
            <p className="la-rouge-missing-content">
              Den styrkede visuelle identitet gør RE RŌUGE mere genkendelig og
              kan øge kundernes interesse for konceptet. Markedsføring skal
              skabe opmærksomhed, mens AI-funktionen gør videresalg lettere, og
              tydelig information om tøjets stand kan mindske købsusikkerhed.
              Det kan gøre det nemmere for kunderne at bruge konceptet og styrke
              udnyttelsen af LA RŌUGEs eksisterende secondhand-tilbud.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default LaRouge;
