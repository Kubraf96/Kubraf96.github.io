import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import projects from "../data/projects";
import "../styles/surrealcollage.css";
import collage1 from "../assets/images/surreal_collage/collage_1.jpg";
import collage2 from "../assets/images/surreal_collage/collage_2.jpg";
import collage3 from "../assets/images/surreal_collage/collage_3.jpg";

function SurrealCollage() {
  const project = projects.find((item) => item.slug === "surreal-collage");

  if (!project) {
    return null;
  }

  return (
    <>
      <Navbar />

      <article className="surreal-collage-page">
        <Link className="back-link" to="/projects">
          Tilbage til projekter
        </Link>

        <section className="surreal-collage-hero">
          <div className="surreal-collage-info">
            <div className="surreal-collage-header">
              <p className="surreal-collage-subtitle">{project.subtitle}</p>

              <h1>{project.title}</h1>
            </div>

            <div className="surreal-collage-description">
              <h2>Om projektet</h2>

              {project.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="surreal-collage-meta">
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

          <div className="surreal-collage-poster">
            <img src={project.image} alt={project.title} />
          </div>
        </section>
        {project.process && (
          <section className="surreal-collage-process">
            <div className="section-heading">
              <p className="surreal-collage-process-label">Proces</p>
              <h2>Fra idé til færdigt design</h2>
            </div>

            <div className="surreal-collage-process-grid">
              {project.process.map((step, index) => {
                const processImages = [collage1, collage2, collage3];

                return (
                  <article
                    className="surreal-collage-process-card"
                    key={step.title}
                  >
                    <span className="surreal-collage-process-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>{step.title}</h3>
                    <img
                      className="surreal-collage-process-image"
                      src={processImages[index]}
                      alt={step.title}
                    />

                    <p>{step.description}</p>
                  </article>
                );
              })}
            </div>
          </section>
        )}
      </article>
    </>
  );
}

export default SurrealCollage;
