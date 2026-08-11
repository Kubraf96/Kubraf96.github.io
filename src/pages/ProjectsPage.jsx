import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import projects from "../data/projects";

function ProjectsPage() {
  return (
    <>
      <Navbar />
      <div className="page">
        <section className="section intro">
          <p className="eyebrow">Projekter</p>
          <h1>Mine projekter</h1>
          <p>
            Udskift eksemplerne med dine egne projekter. Brug korte
            beskrivelser, tydelige billeder og links til live versioner eller
            GitHub repos.
          </p>
        </section>

        <section className="project-grid" aria-label="Projektliste">
          {projects.map((project) => (
            <article className="project-card" key={project.slug}>
              <Link to={`/projects/${project.slug}`} className="image-link">
                <img src={project.image} alt={`Preview af ${project.title}`} />
              </Link>
              <div className="project-card-content">
                <div>
                  <p className="eyebrow">{project.year}</p>
                  <h2>{project.title}</h2>
                  <p>{project.summary}</p>
                </div>
                <div className="project-card-footer">
                  <ul className="tag-list">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="project-card-link"
                  >
                    <span className="project-card-link-icon">➡️</span>
                    <span>Læs mere om projektet</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}

export default ProjectsPage;
