import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import projects from "../data/projects";
import arrowIcon from "../assets/icons/arrow.svg";
import vuuhHero from "../assets/images/vuuh/hero.jpg";
import installationBefore from "../assets/images/vuuh/installationpage_before.svg";
import installationAfter from "../assets/images/vuuh/installationpage_after.svg";
import setupConfirmation from "../assets/images/vuuh/setup_confirmation_popup.svg";
import frontpageBefore from "../assets/images/vuuh/frontpage_before.svg";
import frontpageAfter from "../assets/images/vuuh/frontpage_after.png";
import checklist from "../assets/images/vuuh/checklist.svg";
import demoAndBrands from "../assets/images/vuuh/demo_and_brands.svg";
import shopname from "../assets/images/vuuh/shopname.svg";
import "../styles/vuuh.css";

function Vuuh() {
  const project = projects.find((item) => item.slug === "vuuh");
  const solutionPoints = [
    "Tydelig feedback",
    "Guidet opsætning",
    "Tydeligt visuelt hierarki",
  ];

  if (!project) {
    return null;
  }

  return (
    <>
      <Navbar />

      <main className="vuuh-page">
        <Link to="/projects" className="vuuh-back-link">
          <img src={arrowIcon} alt="" />
          <span>Tilbage til projekter</span>
        </Link>

        <section className="vuuh-hero" aria-labelledby="vuuh-title">
          <div className="vuuh-hero-copy">
            <p className="vuuh-eyebrow">{project.subtitle}</p>
            <h1 id="vuuh-title">{project.title}</h1>
            <p className="vuuh-intro">{project.description}</p>

            <dl className="vuuh-meta">
              <div>
                <dt>Værktøjer</dt>
                <dd>{project.tools.join(", ")}</dd>
              </div>
              <div>
                <dt>År</dt>
                <dd>{project.year}</dd>
              </div>
            </dl>

            <ul className="vuuh-tags" aria-label="Projektområder">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>

          <div className="vuuh-hero-image">
            <img
              src={vuuhHero}
              alt="Vuuhs Shopify-app før forbedringerne af onboarding"
              fetchPriority="high"
            />
          </div>
        </section>

        <section
          className="vuuh-section"
          aria-labelledby="vuuh-challenge-title"
        >
          <div className="vuuh-section-heading">
            <span className="vuuh-number">01</span>
            <h2 id="vuuh-challenge-title">Udfordring</h2>
          </div>
          <p className="vuuh-section-copy">
            Den eksisterende onboarding manglede tydelig vejledning og feedback,
            mens unødvendig information og visuel støj gjorde det svært at finde
            næste skridt. Udfordringen var at forenkle opsætningen og skabe et
            tydeligere visuelt hierarki.
          </p>
        </section>

        <section className="vuuh-section" aria-labelledby="vuuh-research-title">
          <div className="vuuh-section-heading">
            <span className="vuuh-number">02</span>
            <h2 id="vuuh-research-title">Undersøgelse og prioritering</h2>
          </div>
          <p className="vuuh-section-copy vuuh-research-copy">
            Jeg undersøgte brugergrænsefladen med Nielsen’s 10
            usability-heuristikker og brugte Cognitive Walkthrough til at
            analysere brugerrejsen for Shopify-opsætningen. Jeg fokuserede på
            barrierer, der gjorde processen uklar eller unødigt besværlig.
          </p>
          <a
            className="vuuh-audit-link"
            href={`${import.meta.env.BASE_URL}Heuristisk%20evaluering,%20Cognitive%20Walkthrough.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            Se Heuristisk evaluering og Cognitive Walkthrough (bilag)
            <img src={arrowIcon} alt="" />
          </a>
        </section>

        <section className="vuuh-section" aria-labelledby="vuuh-solutions">
          <div className="vuuh-section-heading">
            <span className="vuuh-number">03</span>
            <h2 id="vuuh-solutions">Løsning og faglige valg</h2>
          </div>

          <p className="vuuh-section-copy">
            På baggrund af min analyse arbejdede jeg med tre centrale
            forbedringer af onboardingoplevelsen
          </p>
          <div className="vuuh-solution-list">
            {solutionPoints.map((point, index) => (
              <article key={point}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{point}</h3>
              </article>
            ))}
          </div>
        </section>

        <section
          className="vuuh-section vuuh-results"
          aria-labelledby="vuuh-results-title"
        >
          <div className="vuuh-section-heading">
            <span className="vuuh-number">04</span>
            <h2 id="vuuh-results-title">Resultat og dokumentation</h2>
          </div>

          <article className="vuuh-result">
            <div className="vuuh-result-header">
              <span className="vuuh-result-number">01</span>
              <h3>Tydelig feedback</h3>
            </div>

            <p className="vuuh-result-copy">
              Jeg tydeliggjorde status efter installationen og guidede brugeren
              videre til næste trin.
            </p>

            <div className="vuuh-compare-grid vuuh-feedback-comparison">
              <figure className="vuuh-figure">
                <span className="vuuh-image-label">Før</span>
                <img
                  src={installationBefore}
                  alt="Vuuhs installationsside før ændringerne"
                  loading="lazy"
                />
              </figure>
              <figure className="vuuh-figure">
                <span className="vuuh-image-label">Efter</span>
                <img
                  src={installationAfter}
                  alt="Vuuhs installationsside med tydeligere feedback"
                  loading="lazy"
                />
              </figure>
            </div>
          </article>

          <article className="vuuh-result vuuh-result-split">
            <div className="vuuh-result-copy-block">
              <div className="vuuh-result-header">
                <span className="vuuh-result-number">02</span>
                <h3>Efter opsætning</h3>
              </div>
              <p className="vuuh-result-copy">
                Jeg tilføjede en success-popup, der bekræfter, at Vuuh og
                Shopify er forbundet. Samtidig præsenteres brugeren for
                relevante næste skridt, så det er lettere at fortsætte
                opsætningen uden selv at skulle finde ud af, hvad man skal gøre
                herfra.
              </p>
            </div>

            <figure className="vuuh-figure vuuh-result-image">
              <img
                src={setupConfirmation}
                alt="Bekræftelse på, at Vuuh og Shopify er forbundet"
                loading="lazy"
              />
            </figure>
          </article>
        </section>

        <section className="vuuh-section" aria-labelledby="vuuh-guided-title">
          <div className="vuuh-section-heading">
            <span className="vuuh-number">02</span>
            <h2 id="vuuh-guided-title">Guidet opsætning</h2>
          </div>
          <p className="vuuh-section-copy">
            Jeg introducerede en onboarding-checkliste med tre trin, der guider
            brugeren gennem opsætningen. Gennemførte trin fjernes fra listen, så
            fokus flyttes til næste handling. Samtidig reducerede jeg
            Shopify-opsætningen fra 11 til 6 trin.
          </p>
          <a
            className="vuuh-audit-link"
            href={`${import.meta.env.BASE_URL}taskflow_vuuh.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            Se taskflow (bilag)
            <img src={arrowIcon} alt="" />
          </a>

          <div className="vuuh-compare-grid vuuh-guided-comparison">
            <figure className="vuuh-figure">
              <span className="vuuh-image-label">Før</span>
              <img
                src={frontpageBefore}
                alt="Vuuhs forside før den guidede opsætning"
                loading="lazy"
              />
            </figure>
            <figure className="vuuh-figure">
              <span className="vuuh-image-label">Efter</span>
              <img
                src={frontpageAfter}
                alt="Vuuhs forside med en guidet opsætningscheckliste"
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        <section
          className="vuuh-section vuuh-hierarchy"
          aria-labelledby="vuuh-hierarchy-title"
        >
          <div className="vuuh-section-heading">
            <span className="vuuh-number">03</span>
            <h2 id="vuuh-hierarchy-title">Tydeligt visuelt hierarki</h2>
          </div>

          <p className="vuuh-section-copy">
            Jeg arbejdede med farver, placering og mængden af information for at
            gøre de vigtigste handlinger mere fremtrædende.
          </p>

          <article className="vuuh-hierarchy-item">
            <div className="vuuh-hierarchy-copy">
              <span className="vuuh-hierarchy-number">01</span>
              <h3>Primær handling i fokus</h3>
              <p>
                Checklistens lilla primærknap skaber et tydeligt fokuspunkt,
                mens øvrige handlinger nedtones.
              </p>
            </div>
            <figure className="vuuh-figure vuuh-hierarchy-image">
              <img
                src={checklist}
                alt="Onboarding-checkliste med den primære handling fremhævet"
                loading="lazy"
              />
            </figure>
          </article>

          <article className="vuuh-hierarchy-item">
            <div className="vuuh-hierarchy-copy">
              <span className="vuuh-hierarchy-number">02</span>
              <h3>Mindre visuel støj</h3>
              <p>
                Den lange brandliste blev fjernet fra forsiden, og demo- og
                brandsektionerne blev gjort mere diskrete.
              </p>
            </div>
            <figure className="vuuh-figure vuuh-hierarchy-image">
              <img
                src={demoAndBrands}
                alt="Demo-produkt og brands vist i et mere overskueligt layout"
                loading="lazy"
              />
            </figure>
          </article>

          <article className="vuuh-hierarchy-item">
            <div className="vuuh-hierarchy-copy">
              <span className="vuuh-hierarchy-number">03</span>
              <h3>Relevant information på det rette sted</h3>
              <p>
                Butiksnavnet blev flyttet frem på forsiden og udfyldes
                automatisk i opsætningsmodalen, så brugeren ikke selv skal lede
                efter eller indtaste det igen.
              </p>
            </div>
            <figure className="vuuh-figure vuuh-hierarchy-image vuuh-shopname-image">
              <img
                src={shopname}
                alt="Shopify-integrationen med butikkens navn vist tydeligt"
                loading="lazy"
              />
            </figure>
          </article>
        </section>

        <section
          className="vuuh-section vuuh-closing-section"
          aria-labelledby="vuuh-accessibility-title"
        >
          <div className="vuuh-section-heading">
            <span className="vuuh-number">05</span>
            <h2 id="vuuh-accessibility-title">Accessibility Design Check</h2>
          </div>
          <p className="vuuh-closing-copy">
            Jeg kvalificerede prototypen gennem et Accessibility Design Check.
            Det førte blandt andet til større tekst og knapper, tydeligere
            visuelt fokus og automatisk udfyldning af butiksnavnet for at
            reducere brugerens behov for at huske information.
          </p>
        </section>

        <section
          className="vuuh-section vuuh-closing-section"
          aria-labelledby="vuuh-reflection-title"
        >
          <div className="vuuh-section-heading">
            <span className="vuuh-number">06</span>
            <h2 id="vuuh-reflection-title">Faglig refleksion</h2>
          </div>
          <p className="vuuh-closing-copy">
            Jeg prioriterede at gøre onboardingens vigtigste handlinger
            tydeligere, frem for at præsentere alle funktioner med samme
            visuelle vægt. Med checklisten tilføjede jeg en mere struktureret
            vejledning, mens andre elementer blev nedtonet for at skabe et
            klarere fokus. Samtidig arbejdede jeg med at gøre relevant
            information lettere at finde og reducere behovet for, at brugeren
            selv skal huske oplysninger undervejs. Hvis jeg skulle videreudvikle
            løsningen, ville jeg teste prototypen med nye brugere for at
            undersøge, om checklisten og de øvrige ændringer faktisk gør
            opsætningen lettere at forstå og gennemføre.
          </p>
        </section>

        <section
          className="vuuh-section vuuh-closing-section"
          aria-labelledby="vuuh-business-title"
        >
          <div className="vuuh-section-heading">
            <span className="vuuh-number">07</span>
            <h2 id="vuuh-business-title">Forretningspotentiale</h2>
          </div>
          <p className="vuuh-closing-copy">
            Et mere overskueligt onboardingflow kan skabe værdi for både Vuuh og
            platformens brugere. Checklistens tydelige trin og den forbedrede
            feedback kan gøre det lettere for nye brugere at forstå opsætningen
            og komme videre uden unødig forvirring. Det kan potentielt føre til
            flere gennemførte opsætninger og mindske behovet for support.
            Samtidig kan et mere tilgængeligt og intuitivt design gøre
            platformen lettere at anvende for flere brugere.
          </p>
        </section>
      </main>
    </>
  );
}

export default Vuuh;
