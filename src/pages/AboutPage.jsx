import Navbar from "../components/Navbar";
import portrait from "../assets/images/about_portrait.png";
import "../styles/about.css";
import smiley from "../assets/icons/smiley_icon.svg";

function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="about-section">
        <h1 className="about-title">Om mig.</h1>

        <div className="about-content">
          <img src={portrait} alt="Portræt af Kübra" className="about-image" />

          <div className="about-right">
            <p>
              Jeg studerer multimediedesign i Aarhus med en særlig interesse for
              UI-design, branding og visuelle identiteter.
            </p>

            <p>
              Jeg elsker at skabe designs, der vækker en følelse og har en
              tydelig identitet. For mig er det ofte de små detaljer – farver,
              typografi, former og grafiske elementer der giver et design
              personlighed og gør det levende.
            </p>

            <p>
              Før jeg begyndte på multimediedesign, arbejdede jeg som
              sygeplejerske. Det har givet mig en stærk forståelse for empati,
              kommunikation og vigtigheden af at sætte mennesket i centrum. Den
              tilgang tager jeg med mig ind i mit designarbejde.
            </p>

            <p>
              Lige nu udvikler jeg især mine kompetencer i Figma og Adobe Creative Cloud,
              branding og visuel identitet, og jeg søger en praktikplads, hvor
              jeg kan udvikle mig og bidrage til meningsfulde digitale
              oplevelser.
            </p>
          </div>
        </div>
          <img className="icon smiley" src={smiley} alt="" />
      </section>
    </>
  );
}

export default AboutPage;
