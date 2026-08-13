import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/control.css";

import arrowIcon from "../assets/icons/arrow.svg";

import controlBlocParty from "../assets/images/control/ctr_blocparty.png";
import controlGetTheLook from "../assets/images/control/ctr_getthelook.png";
import controlLogo from "../assets/images/control/ctr_logo.png";

import limitedDropsVideo from "../assets/images/control/limited_drops.mov";
import ownContentVideo from "../assets/images/control/own_content.mov";
import taggedContentVideo from "../assets/images/control/tagged_content.mov";

function Control() {
  return (
    <>
      <Navbar />

      <main className="control-page">
        <Link to="/projects" className="control-back-link">
          <img src={arrowIcon} alt="" />
          <span>Tilbage til projekter</span>
        </Link>

        {/* HERO */}
        <section className="control-hero">
          <div className="control-hero-text">
            <p className="control-eyebrow">Social media</p>

            <h1>Control</h1>

            <p className="control-hero-intro">
              Et fiktivt clothing brand udviklet med fokus på fashion, community
              og visuel identitet. Jeg har arbejdet med at omsætte brandets
              univers til social media content og kampagner.
            </p>

            <ul className="control-tags">
              <li>Figma</li>
              <li>Adobe Express</li>
              <li>Social media</li>
            </ul>
          </div>

          <div className="control-hero-image">
            <img src={controlBlocParty} alt="Control Bloc Party kampagne" />
          </div>
        </section>

        {/* MORE THAN JUST A CLOTHING BRAND */}
        <section className="control-community">
          <div className="control-section-heading">
            <p className="control-section-number">01</p>

            <h2>
              More than just
              <br />a clothing brand
            </h2>

            <p>
              Control er skabt som et community, hvor fashion bliver et
              samlingspunkt for mennesker, events og fælles oplevelser.
            </p>

            <p>
              Vi forener street culture, musik og æstetik for at skabe en
              følelse af tilhørsforhold og identitet.
            </p>
          </div>

          {/* INSTAGRAM CONTENT */}
          <div className="control-content-grid">
            <div className="control-content-item">
              <div className="control-content-label">
                <span>01</span>

                <div>
                  <strong>Own content</strong>
                  <p>Content udviklet til Controls egne sociale medier.</p>
                </div>
              </div>

              <video src={ownContentVideo} autoPlay muted loop playsInline />
            </div>

            <div className="control-content-item">
              <div className="control-content-label">
                <span>02</span>

                <div>
                  <strong>Community content</strong>
                  <p>Content fra communityet og taggede brugere.</p>
                </div>
              </div>

              <video src={taggedContentVideo} autoPlay muted loop playsInline />
            </div>
          </div>
        </section>

        {/* LESS STOCK. MORE CONTROL. */}
        <section className="control-limited">
          <div className="control-limited-text">
            <p className="control-section-number">02</p>

            <h2>
              Less stock.
              <br />
              More Control.
            </h2>

            <p>
              Limited drops er en del af Controls måde at tænke fashion på.
              Mindre produktion betyder mindre overproduktion og gør hvert drop
              mere bevidst.
            </p>
          </div>

          <div className="control-phone-video">
            <video src={limitedDropsVideo} autoPlay muted loop playsInline />
          </div>
        </section>

        {/* BLOC PARTY */}
        <section className="control-bloc-party">
          <div className="control-bloc-heading">
            <p className="control-section-number">03</p>

            <h2>Bloc Party</h2>

            <p>
              Bloc Party er Controls eventkoncept, hvor fashion, musik og
              community mødes i virkeligheden.
            </p>

            <p>
              Limited drops, DJ sets og live aktiviteter gør brandet til noget
              man kan være en del af. Ikke bare noget man kan købe.
            </p>
          </div>

          <div className="control-bloc-image">
            <img src={controlBlocParty} alt="Control Bloc Party" />
          </div>
        </section>

        {/* THE CONTROL LOOK */}
        <section className="control-look">
          <div className="control-look-heading">
            <p className="control-section-number">04</p>

            <h2>The Control look</h2>

            <p>
              Streetwear, sportswear og attitude. Et visuelt udtryk, der samler
              inspiration og styling i Controls univers.
            </p>
          </div>

          <div className="control-look-image">
            <img src={controlGetTheLook} alt="Control Get the Look" />
          </div>
        </section>

        {/* END */}
        <section className="control-end">
          <img src={controlLogo} alt="Control logo" />

          <h2>
            More than clothing.
            <br />A community.
          </h2>
        </section>
      </main>
    </>
  );
}

export default Control;
