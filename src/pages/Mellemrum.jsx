import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import projects from "../data/projects";
import "../styles/mellemrum.css";
import arrowIcon from "../assets/icons/arrow.svg";
import auditPreview from "../assets/images/control/mellemrum/teknisk_audit.png";
import supabaseSchema from "../assets/images/control/mellemrum/supabase_schema-vizualizer.png";
import codeStructureBefore from "../assets/images/control/mellemrum/code_structure_before.svg";
import codeStructureAfter from "../assets/images/control/mellemrum/code_structure_after.svg";
import getEventBefore from "../assets/images/control/mellemrum/get_event_before.png";
import getEventAfter from "../assets/images/control/mellemrum/get_event_after.png";
import registrationConfirmed from "../assets/images/control/mellemrum/registration_confirmed.svg";
import alreadyRegistered from "../assets/images/control/mellemrum/already_registrered.svg";
import loadingSkeleton from "../assets/images/control/mellemrum/loading_skeleton.svg";

function Mellemrum() {
  const project = projects.find((item) => item.slug === "mellemrum");

  if (!project) {
    return null;
  }

  return (
    <>
      <Navbar />

      <main className="mellemrum-page">
        <Link to="/projects" className="mellemrum-back-link">
          <img src={arrowIcon} alt="" />
          <span>Tilbage til projekter</span>
        </Link>

        <section className="mellemrum-hero">
          <div className="mellemrum-hero-copy">
            <p className="mellemrum-eyebrow">{project.subtitle}</p>
            <h1>{project.title}</h1>
            <p className="mellemrum-intro">{project.description}</p>

            <dl className="mellemrum-meta">
              <div>
                <dt>Værktøjer</dt>
                <dd>{project.tools.join(", ")}</dd>
              </div>
              <div>
                <dt>År</dt>
                <dd>{project.year}</dd>
              </div>
            </dl>

            <ul className="mellemrum-tags" aria-label="Teknologier">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>

            <div className="mellemrum-project-links">
              <a
                href="https://github.com/Kubraf96/mellemrum.git"
                target="_blank"
                rel="noreferrer"
              >
                <span>Se repository på GitHub</span>
                <img src={arrowIcon} alt="" />
              </a>
              <a
                href="https://kubraf96.github.io/mellemrum/"
                target="_blank"
                rel="noreferrer"
              >
                <span>Se live version</span>
                <img src={arrowIcon} alt="" />
              </a>
            </div>
          </div>

          <div className="mellemrum-hero-image">
            <img src={project.image} alt="Mellemrum vist på en laptop" />
          </div>
        </section>

        <section
          className="mellemrum-section"
          aria-labelledby="mellemrum-challenge"
        >
          <div className="mellemrum-section-heading">
            <span className="mellemrum-number">01</span>
            <h2 id="mellemrum-challenge">Udfordring</h2>
          </div>
          <p className="mellemrum-section-copy">
            Platformens grundlæggende funktionalitet var på plads, men
            datamodellen indeholdt gentagne oplysninger, tilmeldingsflowet
            manglede tydelig feedback, og kodens struktur gjorde videreudvikling
            vanskeligere. Samtidig manglede løsningen tydelig håndtering af
            indlæsning, fejl og manglende data.
          </p>
        </section>

        <section
          className="mellemrum-section mellemrum-audit"
          aria-labelledby="mellemrum-audit-title"
        >
          <div className="mellemrum-audit-copy">
            <div className="mellemrum-section-heading">
              <span className="mellemrum-number">02</span>
              <h2 id="mellemrum-audit-title">Audit og prioritering</h2>
            </div>
            <p>
              Jeg gennemførte en teknisk audit af kode, dataflow,
              tilmeldingsflow, UI og performance. Jeg prioriterede forbedringer
              ud fra brugerbetydning, risiko for fejl og forventet effekt. De
              vigtigste områder var datamodel, tilmeldingsflow, robusthed og
              komponentstruktur.
            </p>
            <a
              className="mellemrum-audit-link"
              href={`${import.meta.env.BASE_URL}teknisk-audit-af-mellemrum.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              Se hele auditen (bilag)
              <img src={arrowIcon} alt="" />
            </a>
          </div>
          <figure
            className="mellemrum-audit-figure"
            id="audit-overblik"
            tabIndex={0}
            aria-label="Teknisk auditoversigt, kan rulles vandret på mobil"
          >
            <img src={auditPreview} alt="Teknisk audit af Mellemrum" />
            <figcaption>Teknisk audit af Mellemrum</figcaption>
          </figure>
        </section>

        <section
          className="mellemrum-section"
          aria-labelledby="mellemrum-solutions"
        >
          <div className="mellemrum-section-heading">
            <span className="mellemrum-number">03</span>
            <h2 id="mellemrum-solutions">Løsning og faglige valg</h2>
          </div>
          <p className="mellemrum-section-copy">
            På baggrund af auditen fokuserede jeg på tre forbedringer:
          </p>
          <div className="mellemrum-solution-list">
            <article>
              <span>01</span>
              <h3>En tydeligere datamodel</h3>
            </article>
            <article>
              <span>02</span>
              <h3>Et forbedret tilmeldingsflow</h3>
            </article>
            <article>
              <span>03</span>
              <h3>En forbedret kodestruktur</h3>
            </article>
          </div>
        </section>

        <section
          className="mellemrum-section mellemrum-results"
          aria-labelledby="mellemrum-results-title"
        >
          <div className="mellemrum-section-heading">
            <span className="mellemrum-number">04</span>
            <h2 id="mellemrum-results-title">Resultat og dokumentation</h2>
          </div>

          <article className="mellemrum-result">
            <div className="mellemrum-result-copy">
              <h3>01. Datamodel i Supabase</h3>
              <p>
                Jeg oprettede separate tabeller til users og venues og forbandt
                dem med events og registrations via fremmednøgler. Det gør det
                muligt at knytte tilmeldinger til både brugere og events samt
                forbinde events med deres venue. Jeg tilføjede også unikke
                constraints for e-mailadresser og tilmeldinger, så dubletter
                undgås.
              </p>
            </div>
            <figure className="mellemrum-result-figure mellemrum-schema-figure">
              <img
                src={supabaseSchema}
                alt="Supabase-datamodel med relationerne mellem tabellerne"
              />
              <figcaption>Schema Visualizer fra Supabase</figcaption>
            </figure>
          </article>

          <article className="mellemrum-result mellemrum-result-flow">
            <div className="mellemrum-result-copy">
              <h3>02. Tilmeldingsflow</h3>
              <p>
                Jeg tilføjede tydelig feedback ved gennemførte tilmeldinger og
                tilfælde, hvor brugeren allerede er tilmeldt. Brugeren kan
                desuden få tilsendt bekræftelsesmailen igen uden at skulle
                gentage tilmeldingen.
              </p>
            </div>
            <div className="mellemrum-image-comparison mellemrum-registration-stack">
              <figure>
                <img
                  src={registrationConfirmed}
                  alt="Besked om gennemført tilmelding"
                />
              </figure>
              <figure>
                <img
                  src={alreadyRegistered}
                  alt="Besked om at brugeren allerede er tilmeldt"
                />
              </figure>
            </div>
          </article>

          <article className="mellemrum-result mellemrum-result-code">
            <div className="mellemrum-result-copy">
              <h3>03. Kode og struktur</h3>
              <p>
                Jeg ryddede op i projektets struktur for at gøre koden lettere
                at finde rundt i og arbejde videre med. Jeg flyttede
                datahentningen fra EventPage.jsx til separate servicefiler og
                opdelte CSS i CSS Modules, så hver side har sin egen styling.
                Jeg samlede også footeren i en genbrugelig komponent, så den kan
                bruges på tværs af siderne.
              </p>
            </div>
            <div className="mellemrum-image-comparison mellemrum-structure-comparison">
              <figure>
                <figcaption>Før</figcaption>
                <img
                  src={codeStructureBefore}
                  alt="Mappestruktur før oprydning"
                />
              </figure>
              <figure>
                <figcaption>Efter</figcaption>
                <img
                  src={codeStructureAfter}
                  alt="Mappestruktur efter oprydning"
                />
              </figure>
            </div>

            <div className="mellemrum-image-comparison mellemrum-fetch-comparison">
              <figure>
                <figcaption>Før - Datahentning i komponenten</figcaption>
                <img src={getEventBefore} alt="Datahentning før optimering" />
              </figure>
              <figure>
                <figcaption>Efter - Datahentning i separat service</figcaption>
                <img src={getEventAfter} alt="Datahentning efter optimering" />
              </figure>
            </div>
          </article>

          <article className="mellemrum-result mellemrum-loading-feature">
            <div className="mellemrum-loading-copy">
              <p>
                På eventdetaljesiden tilføjede jeg et skeleton-layout under
                indlæsning og en fejlbesked ved mislykket datahentning. Det
                giver brugeren feedback i stedet for en tom side.
              </p>
            </div>
            <figure className="mellemrum-result-figure mellemrum-loading-figure">
              <img
                src={loadingSkeleton}
                alt="Skeleton-layout under indlæsning"
              />
            </figure>
          </article>
        </section>

        <section
          className="mellemrum-section mellemrum-reflection"
          aria-labelledby="mellemrum-reflection-title"
        >
          <div className="mellemrum-section-heading">
            <span className="mellemrum-number">05</span>
            <h2 id="mellemrum-reflection-title">Faglig refleksion</h2>
          </div>
          <div className="mellemrum-reflection-copy">
            <p>
              Jeg prioriterede tekniske forbedringer med betydning for
              datakvalitet, brugeroplevelse og vedligeholdelse frem for mindre
              visuelle justeringer. Hvis jeg videreudviklede løsningen, ville
              jeg forbedre valideringen af e-mailadresser, undersøge
              tilgængeligheden og videreudvikle mailfunktionen. På længere sigt
              kunne platformen også understøtte afmelding og give arrangører
              mulighed for selv at administrere events.
            </p>
          </div>
        </section>

        <section
          className="mellemrum-section mellemrum-business"
          aria-labelledby="mellemrum-business-title"
        >
          <div className="mellemrum-section-heading">
            <span className="mellemrum-number">06</span>
            <h2 id="mellemrum-business-title">Forretningspotentiale</h2>
          </div>
          <p className="mellemrum-section-copy">
            Mellemrum kan gøre det nemmere for brugerne at finde begivenheder og
            tilmelde sig. Ved at forbedre tilmeldingsflowet og give tydelig
            feedback ved fejl bliver det lettere for brugerne at gennemføre en
            tilmelding. En mere struktureret database kan samtidig mindske
            risikoen for dubletter og gøre det nemmere at videreudvikle
            platformen. Potentialet bygger på de tekniske forbedringer og test
            jeg har foretaget. Netværksdataene viste også et fald i overført
            data fra 8.007 kB til 2.448 kB, hvilket kan være med til at gøre
            løsningen lettere at indlæse.
          </p>
        </section>
      </main>
    </>
  );
}

export default Mellemrum;
