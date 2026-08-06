import { Link } from "react-router";
import heroImage from "../assets/images/hero_portrait.png";
import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Velkommen</h1>

        <p className="hero-intro">Hej, jeg er Kübra.</p>

        <p className="hero-description">
          Jeg elsker at udforske idéer gennem farver, typografi, animationer og
          små visuelle detaljer. For mig er det netop de små elementer, der
          skaber en stærk identitet og gør et design levende.
        </p>

        <Link className="search-box" to="/projects">
          🔍 Udforsk mit portfolio
        </Link>
      </div>

      <img className="hero-portrait" src={heroImage} alt="Portræt af Kübra" />
    </section>
  );
}

export default Hero;
