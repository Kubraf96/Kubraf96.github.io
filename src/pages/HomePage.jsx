import { Link } from "react-router";
import projects from "../data/projects";
import heroImage from "../assets/images/hero.png";
import "../styles/hero.css";

function HomePage() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Velkommen</h1>

          <h2>Hej, jeg er Kübra</h2>

          <p>
            Jeg elsker at udforske idéer gennem farver, typografi, animationer
            og små visuelle detaljer. For mig er det netop de små elementer, der
            skaber en stærk identitet og gør et design levende.
          </p>

          <Link className="search-box" to="/projects">
            🔍 Udforsk mit portfolio
          </Link>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Hero image" />
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Udvalgte projekter</p>
          <h2>Start med få projekter og gør dem stærke.</h2>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.slug}>
              <img src={project.image} alt={`Preview af ${project.title}`} />
              <div className="project-card-content">
                <p className="eyebrow">{project.year}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <Link to={`/projects/${project.slug}`}>Læs mere</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
