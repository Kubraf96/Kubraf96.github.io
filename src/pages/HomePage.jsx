import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import projects from "../data/projects";

function HomePage() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <>
      <Hero />

      <div className="page">
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
    </>
  );
}

export default HomePage;
