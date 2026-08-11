import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import projects from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="page narrow">
          <p className="eyebrow">404</p>
          <h1>Projektet blev ikke fundet</h1>
          <p>Det projekt findes ikke i listen endnu.</p>
          <Link className="button" to="/projects">
            Tilbage til projekter
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <article className="page project-detail">
        <Link className="back-link" to="/projects">
          Tilbage til projekter
        </Link>

        <div className="detail-grid">
          <div className="detail-copy">
            <div className="detail-header">
              <p className="eyebrow">{project.year}</p>
              {project.subtitle && (
                <p className="detail-subtitle">{project.subtitle}</p>
              )}
              <h1>{project.title}</h1>
            </div>

            <section className="detail-section">
              <h2>Om projektet</h2>
              <p className="lead">{project.description}</p>
            </section>

            <div className="project-detail-meta">
              <div>
                <p className="detail-label">Værktøjer</p>
                <p>{project.tools?.join(", ") ?? project.tags.join(", ")}</p>
              </div>
              <div>
                <p className="detail-label">År</p>
                <p>{project.year}</p>
              </div>
            </div>

            <ul className="tag-list detail-tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>

            <div className="actions">
              {project.links.map((link) => (
                <a
                  className="button secondary"
                  href={link.href}
                  key={link.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {project.process && (
              <section className="process-section">
                <h2>Proces</h2>
                <div className="process-grid">
                  {project.process.map((step) => (
                    <article className="process-step" key={step.title}>
                      <p className="process-step-number">
                        {project.process.indexOf(step) + 1}
                      </p>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="detail-image-wrapper">
            <img
              className="detail-image"
              src={project.image}
              alt={project.title}
            />
          </div>
        </div>
      </article>
    </>
  );
}

export default ProjectPage;
