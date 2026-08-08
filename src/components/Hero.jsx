import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import heroImage from "../assets/images/hero_portrait.png";
import "../styles/hero.css";
import star from "../assets/icons/star_icon.svg";
import flower from "../assets/icons/flower_icon.svg";
import globe from "../assets/icons/globe_icon.svg";
import search from "../assets/icons/search_icon.svg";

function Hero() {
  return (
    <section className="hero-section">
      <Navbar />
      <div className="hero-content">
        <div className="hero-text">
          <h1>Velkommen</h1>

          <p className="hero-intro">Hej, jeg hedder Kübra.</p>

          <p className="hero-description">
            Jeg elsker at udforske idéer gennem farver, typografi, og små
            visuelle detaljer. For mig er det netop de små elementer, der skaber
            en stærk identitet og gør et design levende.
          </p>

          <Link className="search-box" to="/projects">
            <img src={search} alt="Søg" /> Udforsk mit portfolio
          </Link>
        </div>
      </div>

      <img className="hero-portrait" src={heroImage} alt="Portræt af Kübra" />
      <img className="icon star" src={star} alt="" />
      <img className="icon flower" src={flower} alt="" />
      <img className="icon globe" src={globe} alt="" />
    </section>
  );
}

export default Hero;
