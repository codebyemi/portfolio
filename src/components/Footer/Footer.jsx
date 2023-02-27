import github from "../../images/socialMedia/github.svg";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-copyright">© Copyright 2023 - Emi Jerochim</p>
      <p className="footer-dev-bsas">
        Full Stack Developer - Buenos Aires, Argentina
      </p>
      <p className="footer-mail">dev@emijerochim.com</p>
      <a
        href="https://www.github.com/emijerochim"
        rel="noreferrer"
        target="_blank"
      >
        <img src={github} alt="github" className="footer-repo-logo" />
      </a>
    </footer>
  );
}

export default Footer;
