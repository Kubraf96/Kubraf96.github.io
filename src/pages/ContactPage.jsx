import Navbar from "../components/Navbar";
import smiley from "../assets/icons/smiley_icon.svg";
import arrow from "../assets/icons/arrow.svg";

function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="contact-page">
        <section className="contact-hero">
          <div className="contact-intro">
            <h1>
              Lad os skabe noget sammen.
              <img className="smiley" src={smiley} alt="" />
            </h1>

            <p className="contact-description">
              Har du et projekt, en idé eller bare lyst til at sige hej? Jeg vil
              gerne høre fra dig!
            </p>
          </div>

          <div className="contact-details">
            <div className="contact-block">
              <p className="contact-label">EMAIL</p>

              <a
                className="contact-main-link"
                href="mailto:eaa25kufi@students.eaaa.dk"
              >
                <span>Min mail</span>
                <img src={arrow} alt="" />
              </a>
            </div>

            <div className="contact-block">
              <p className="contact-label">FIND MIG</p>

              <div className="contact-socials">
                <a
                  href="https://github.com/Kubraf96"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <img src={arrow} alt="" />
                </a>

                <a
                  href="https://www.linkedin.com/in/k%C3%BCbra-f-831b592bb/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                  <img src={arrow} alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ContactPage;
