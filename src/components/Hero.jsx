import { Link } from "react-router";
import Navbar from "./Navbar";
import heroImage from "../assets/images/hero_portrait.png";
import "../styles/hero.css";

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
            🔍 Udforsk mit portfolio
          </Link>
        </div>
      </div>

      <img className="hero-portrait" src={heroImage} alt="Portræt af Kübra" />
    </section>
  );
}

export default Hero;
