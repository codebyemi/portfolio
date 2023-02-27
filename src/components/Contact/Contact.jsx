import SocialMedia from "../SocialMedia/SocialMedia";
import "./contact.scss";

function Contact() {
  return (
    <section
      id="contact"
      className="contact"
      itemscope
      itemtype="http://schema.org/Person"
    >
      <div className="contact-container">
        <div className="contact-title-container">
          <h3 className="contact-title">I'm open to work</h3>
        </div>
        <div className="contact-description-container">
          <p>
            I'm looking for opportunities to work on new projects, helping and
            learning from a proactive team.
          </p>
          <p>
            If you're interested in working with me don't hesitate to contact me
          </p>
        </div>
        <SocialMedia />
      </div>
    </section>
  );
}

export default Contact;
