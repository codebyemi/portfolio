import React from "react";
import facebook from "../../images/socialMedia/facebook.svg";
import twitter from "../../images/socialMedia/twitter.svg";
import instagram from "../../images/socialMedia/instagram.svg";
import linkedin from "../../images/socialMedia/linkedin.svg";
import github from "../../images/socialMedia/github.svg";
import mail from "../../images/socialMedia/mail.svg";
import "./socialMedia.scss";

function SocialMedia() {
  return (
    <ul className="social-media">
      <li>
        <a
          href="https://www.facebook.com/emijerochim"
          rel="noreferrer"
          target="_blank"
        >
          <img src={facebook} alt="facebook" />
        </a>
      </li>
      <li>
        <a
          href="https://www.twitter.com/emijerochim"
          rel="noreferrer"
          target="_blank"
        >
          <img src={twitter} alt="twitter" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/emijerochim"
          rel="noreferrer"
          target="_blank"
        >
          <img src={instagram} alt="instagram" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/emijerochim"
          rel="noreferrer"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
      </li>
      <li>
        <a
          href="https://www.github.com/emijerochim"
          rel="noreferrer"
          target="_blank"
        >
          <img src={github} alt="github" />
        </a>
      </li>
      <li>
        <a href="mailto:dev@emijerochim.com" rel="noreferrer" target="_blank">
          <img src={mail} alt="mail" />
        </a>
      </li>
    </ul>
  );
}

export default SocialMedia;
