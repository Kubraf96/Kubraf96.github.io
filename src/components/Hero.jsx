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
            Jeg arbejder med visuelle koncepter, digitalt design og kreative idéer. Jeg elsker at udforske idéer gennem farver, typografi, billeder og de små
            små detaljer, der får et design til at føles som mere end bare dets enkelte elementer.
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
