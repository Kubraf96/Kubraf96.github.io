import { Link } from "react-router-dom";
import { useState } from "react";
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
import personalFrontpage from "../assets/productimages/2gather/2gather_personalfrontpage.svg";
import privateChat from "../assets/productimages/2gather/2gather_privat_chat.svg";
import privateChats from "../assets/productimages/2gather/2gather_privat_chats.svg";
import profile from "../assets/productimages/2gather/2gather_profile.svg";

import arrowIcon from "../assets/icons/arrow.svg";

function TwoGather() {
  const project = projects.find((item) => item.slug === "2gather-event-app");

  const productImages = [
    {
      image: personalFrontpage,
      title: "Personlig forside",
    },
    {
      image: eventDescription,
      title: "Eventbeskrivelse",
    },
    {
      image: eventJoinEvent,
      title: "Deltag i event",
    },
    {
      image: eventInviteFriends,
      title: "Inviter venner",
    },
    {
      image: eventConfirmationSolo,
      title: "Bekræftelse",
    },
    {
      image: eventConfirmationFriends,
      title: "Bekræftelse med venner",
    },
    {
      image: eventChat,
      title: "Event chat",
    },
    {
      image: eventChats,
      title: "Event chats",
    },
    {
      image: privateChat,
      title: "Privat chat",
    },
    {
      image: privateChats,
      title: "Private chats",
    },
    {
      image: profile,
      title: "Profil",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  if (!project) {
    return null;
  }

  const showPreviousImage = () => {
    setCurrentImage(
      (currentImage - 1 + productImages.length) % productImages.length,
    );
  };

  const showNextImage = () => {
    setCurrentImage((currentImage + 1) % productImages.length);
  };

  return (
    <>
      <Navbar />

      <article className="two-gather-page">
        <Link className="back-link" to="/projects">
          <img className="project-back-arrow" src={arrowIcon} alt="" />
          <span>Tilbage til projekter</span>
        </Link>

        {/* HERO */}

        <section className="two-gather-hero">
          <div className="two-gather-info">
            <div className="two-gather-header">
              <p className="two-gather-subtitle">Webapp</p>

              <h1>{project.title}</h1>

              <p className="two-gather-description">{project.description}</p>
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
            <img src={project.image} alt={project.title} />
          </div>
        </section>

        {/* PRODUKTET I PRAKSIS */}

        <section className="two-gather-product">
          <div className="two-gather-product-intro">
            <h2 className="two-gather-product-label">Produktet i praksis</h2>

            <p>Et udklip af de vigtigste elementer fra 2Gather.</p>
          </div>

          <div className="two-gather-product-showcase">
            {/* VENSTRE PIL */}

            <button
              className="two-gather-arrow two-gather-arrow-left"
              aria-label="Forrige billede"
              onClick={showPreviousImage}
            >
              <img src={arrowIcon} alt="" />
            </button>

            {/* BILLEDE */}

            <div className="two-gather-product-image">
              <img
                src={productImages[currentImage].image}
                alt={productImages[currentImage].title}
              />
            </div>

            {/* HØJRE PIL */}

            <button
              className="two-gather-arrow two-gather-arrow-right"
              aria-label="Næste billede"
              onClick={showNextImage}
            >
              <img src={arrowIcon} alt="" />
            </button>
          </div>

          <div className="two-gather-product-counter">
            {String(currentImage + 1).padStart(2, "0")}
            {" / "}
            {String(productImages.length).padStart(2, "0")}
          </div>

          <p className="two-gather-product-title">
            {productImages[currentImage].title}
          </p>
        </section>
      </article>
    </>
  );
}

export default TwoGather;
