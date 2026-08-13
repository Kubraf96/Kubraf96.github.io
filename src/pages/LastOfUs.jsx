import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import projects from "../data/projects";
import "../styles/LastofUs.css";
import LOUstep1 from "../assets/images/last_of_us/LOU_step_1.png";
import LOUstep2 from "../assets/images/last_of_us/LOU_step_2.png";
import LOUstep3 from "../assets/images/last_of_us/LOU_step_3.png";
import LOUstep4 from "../assets/images/last_of_us/LOU_step_4.png";
import arrowIcon from "../assets/icons/arrow.svg";

function LastOfUs() {
  const project = projects.find((item) => item.slug === "last-of-us");

  if (!project) {
    return null;
  }

  return (
    <>
      <Navbar />

      <article className="last-of-us-page">
        <Link className="back-link" to="/projects">
          <img className="project-back-arrow" src={arrowIcon} alt="" />
          <span>Tilbage til projekter</span>
        </Link>

        {/* HERO */}
        <section className="last-of-us-hero">
          <div className="last-of-us-info">
            <div className="last-of-us-header">
              <p className="last-of-us-subtitle">{project.subtitle}</p>

              <h1>{project.title}</h1>
            </div>

            <div className="last-of-us-description">
              {project.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="last-of-us-meta">
              <div>
                <p className="detail-label">Værktøjer</p>
                <p>{project.tools?.join(", ")}</p>
              </div>

              <div>
                <p className="detail-label">År</p>
                <p>{project.year}</p>
              </div>
            </div>

            <ul className="tag-list">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>

          <div className="last-of-us-poster">
            <img src={LOUstep4} alt={project.title} />
          </div>
        </section>

        {/* PROCES */}
        {project.process && (
          <section className="last-of-us-process">
            <div className="last-of-us-process-heading">
              <h2>Fra idé til færdigt design</h2>
            </div>
            <div className="last-of-us-process-grid">
              <article className="last-of-us-process-card">
                <span className="last-of-us-process-number">01</span>
                <h3>{project.process[0].title}</h3>
                <img
                  className="last-of-us-process-image"
                  src={LOUstep1}
                  alt="Idé og research"
                />

                <p>{project.process[0].description}</p>
              </article>

              <article className="last-of-us-process-card">
                <span className="last-of-us-process-number">02</span>
                <h3>{project.process[1].title}</h3>
                <img
                  className="last-of-us-process-image"
                  src={LOUstep2}
                  alt="Grundlag"
                />

                <p>{project.process[1].description}</p>
              </article>

              <article className="last-of-us-process-card">
                <span className="last-of-us-process-number">03</span>
                <h3>{project.process[2].title}</h3>
                <img
                  className="last-of-us-process-image"
                  src={LOUstep3}
                  alt="Double exposure"
                />

                <p>{project.process[2].description}</p>
              </article>

              <article className="last-of-us-process-card">
                <span className="last-of-us-process-number">04</span>
                <h3>{project.process[3].title}</h3>
                <img
                  className="last-of-us-process-image"
                  src={LOUstep4}
                  alt="Farve og lys"
                />

                <p>{project.process[3].description}</p>
              </article>
            </div>
          </section>
        )}
      </article>
    </>
  );
}

export default LastOfUs;
