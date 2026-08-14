import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import projects from "../data/projects";
import arrowIcon from "../assets/icons/arrow.svg";

function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="projects-page">
        <section className="projects-intro">
          <h1>Mine projekter.</h1>
        </section>

        <section className="projects-list" aria-label="Mine projekter">
          {projects.map((project, index) => (
            <article className="projects-card" key={project.slug}>
              <Link
                to={`/projects/${project.slug}`}
                className="projects-card-image"
              >
                <img src={project.image} alt={`Preview af ${project.title}`} />
              </Link>

              <div className="projects-card-content">
                <div className="projects-card-top">
                  <div className="projects-card-meta">
                    <span>{String(index + 1).padStart(2, "0")}</span>

                    <span>{project.year}</span>
                  </div>

                  <h2>{project.title}</h2>

                  <p>{project.summary}</p>
                </div>

                <div className="projects-card-bottom">
                  <ul className="projects-tag-list">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>

                  <Link
                    to={`/projects/${project.slug}`}
                    className="projects-card-link"
                  >
                    <span>Læs mere om projektet</span>

                    <span className="projects-card-arrow">
                      <img src={arrowIcon} alt="" />
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export default ProjectsPage;
