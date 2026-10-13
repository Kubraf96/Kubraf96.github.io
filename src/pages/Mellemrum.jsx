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
            <img
              src={project.image}
              alt="Forside og eventoversigt for Mellemrum"
            />
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
            Mellemrum havde allerede den grundlæggende funktionalitet på plads,
            men der var udfordringer med kodens struktur, håndteringen af data
            og tilmeldingsflowet. Koden var vanskeligere at videreudvikle, og
            løsningen manglede tydelig feedback under datahentning og ved fejl
            eller manglende data. Samtidig indeholdt databasen gentagne
            oplysninger, og tilmeldinger skulle forbindes med det valgte event.
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
              Jeg gennemførte en teknisk audit af løsningen, hvor jeg undersøgte
              kode, dataflow, tilmeldingsflow, UI og performance. Jeg fandt
              flere forbedringsmuligheder og prioriterede dem ud fra betydning
              for brugeren, risiko for fejl og forventet effekt i forhold til
              indsatsen. De vigtigste fund handlede om datamodel,
              tilmeldingsflow, robusthed og komponentstruktur.
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
            På baggrund af auditen implementerede jeg tre centrale forbedringer,
            som tilsammen gør løsningen mere stabil, lettere at vedligeholde og
            bedre for brugeren.
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
                Den oprindelige database havde tabellerne events og
                registrations, men ikke separate tabeller til brugere og venues.
                Jeg oprettede derfor users og venues og forbandt de fire
                tabeller med fremmednøgler. På den måde kan en tilmelding kobles
                til både en bruger og et event, mens hvert event er knyttet til
                sit venue.
              </p>
              <p>
                Jeg tilføjede også unikke constraints, så den samme e-mail ikke
                kan oprettes flere gange i users, og den samme bruger ikke kan
                tilmeldes det samme event flere gange. Det giver en mere
                overskuelig datamodel og hjælper med at undgå dubletter.
              </p>
            </div>
            <figure className="mellemrum-result-figure mellemrum-schema-figure">
              <img
                src={supabaseSchema}
                alt="Supabase-datamodel med relationerne mellem tabellerne"
              />
              <figcaption>Schema visualiseret fra Supabase</figcaption>
            </figure>
          </article>

          <article className="mellemrum-result mellemrum-result-flow">
            <div className="mellemrum-result-copy">
              <h3>02. Tilmeldingsflow</h3>
              <p>
                Jeg forbedrede tilmeldingsflowet, så brugeren får tydelig
                feedback, når en tilmelding gennemføres, eller hvis vedkommende
                allerede er tilmeldt eventet. Hvis e-mailadressen allerede er
                tilmeldt, kan brugeren også vælge at få tilsendt
                bekræftelsesmailen igen. På den måde kan brugeren nemt finde sin
                bekræftelse uden at skulle tilmelde sig igen.
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
                <img src={codeStructureBefore} alt="Mappestruktur før oprydning" />
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
                Jeg forbedrede også håndteringen af data på eventdetaljesiden.
                Mens eventet hentes, vises et skeleton-layout, så brugeren kan
                se, at siden indlæses. Hvis datahentningen fejler, vises en
                fejlbesked i stedet for en tom side. Det gør siden mere robust
                og giver brugeren bedre feedback.
              </p>
            </div>
            <figure className="mellemrum-result-figure mellemrum-loading-figure">
              <img src={loadingSkeleton} alt="Skeleton-layout under indlæsning" />
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
              Jeg brugte den tekniske audit til at få et overblik over de
              problemer, der var i Mellemrum, og til at vurdere, hvad der var
              vigtigst at tage fat på først. Jeg valgte derfor at fokusere på
              datamodellen, tilmeldingsflowet og kodens struktur frem for mindre
              visuelle ændringer som at gøre knappernes afrunding mere ensartet.
            </p>
            <p>
              Hvis jeg skulle arbejde videre med Mellemrum, ville jeg blandt
              andet forbedre valideringen af e-mailadresser, da formularen
              stadig accepterer ugyldige adresser. Jeg ville også undersøge,
              hvordan jeg kunne gøre siden mere tilgængelig, og forbedre
              mailfunktionen, så brugerne får den forventede bekræftelse på
              deres tilmelding.
            </p>
            <p>
              Derudover kunne det være relevant at give brugerne mulighed for at
              afmelde sig fra et event. På længere sigt kunne jeg også tilføje
              funktioner, så arrangørerne selv kan oprette, redigere og slette
              begivenheder.
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
