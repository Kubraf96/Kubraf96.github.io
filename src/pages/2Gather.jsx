import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import projects from "../data/projects";
import "../styles/2gather.css";
import eventChat from "../assets/productimages/2gather/2gather_event_chat.svg";
import eventChats from "../assets/productimages/2gather/2gather_event_chats.svg";
import eventConfirmationFriends from "../assets/productimages/2gather/2gather_event_confirmation_friends.svg";
import eventConfirmationSolo from "../assets/productimages/2gather/2gather_event_confirmation_solo.svg";
import eventDescription from "../assets/productimages/2gather/2gather_event_description.svg";
import eventInviteFriends from "../assets/productimages/2gather/2gather_invite_friends.svg";
import eventJoinEvent from "../assets/productimages/2gather/2gather_join_event.svg";
import eventLogs from "../assets/productimages/2gather/2gather_logo.svg";
import personalFrontpage from "../assets/productimages/2gather/2gather_personalfrontpage.svg";
import privateChat from "../assets/productimages/2gather/2gather_privat_chat.svg";
import privateChats from "../assets/productimages/2gather/2gather_privat_chats.svg";
import profile from "../assets/productimages/2gather/2gather_profile.svg";
import hero from "../assets/productimages/2gather/2gather_hero.png";


function TwoGather() {
  const project = projects.find((item) => item.slug === "2gather-event-app");

  if (!project) {
    return null;
  }

  return (
    <>
      <Navbar />

      <article className="two-gather-page">

        <Link className="back-link" to="/projects">
          Tilbage til projekter
        </Link>

        {/* HERO */}

        <section className="two-gather-hero">

          <div className="two-gather-info">

            <div className="two-gather-header">
              <p className="two-gather-subtitle">Webapp</p>

              <h1>{project.title}</h1>

              <p className="two-gather-summary">
                {project.summary}
              </p>
            </div>

            <div className="two-gather-meta">

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

          <div className="two-gather-hero-image">
            <img
              src={project.image}
              alt={project.title}
            />
          </div>

        </section>


        {/* PRODUKTET I PRAKSIS */}

        <section className="two-gather-product">

          <div className="two-gather-product-intro">

            <p className="two-gather-product-label">
              Produktet i praksis
            </p>

            <h2>
              En app skabt til at samle mennesker
            </h2>

            <p>
              Et udvalg af de vigtigste skærmbilleder fra 2Gather.
            </p>

          </div>


          <div className="two-gather-product-showcase">

            <button
              className="two-gather-arrow two-gather-arrow-left"
              aria-label="Forrige billede"
            >
              ←
            </button>


            <div className="two-gather-product-image">

              <img
                src={personalFrontpage}
                alt="2Gather personlig forside"
              />

            </div>


            <button
              className="two-gather-arrow two-gather-arrow-right"
              aria-label="Næste billede"
            >
              →
            </button>

          </div>


          <div className="two-gather-product-counter">
            01 / 11
          </div>

          <p className="two-gather-product-title">
            Personlig forside
          </p>

        </section>

      </article>
    </>
  );
}

export default TwoGather;