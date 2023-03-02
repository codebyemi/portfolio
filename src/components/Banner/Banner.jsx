import "./banner.scss";
import logo from "../../images/assets/logo.png";

function Banner({ deployed, setDeployed }) {
  return (
    <header className={`banner deployed-${!deployed}`}>
      <a className="logo_container" href="./">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <h1>EMI JEROCHIM</h1>

      <div
        className="hamburger-container"
        onClick={() => {
          setDeployed(!deployed);
        }}
      >
        <div className="hamburger"></div>
      </div>
    </header>
  );
}

export default Banner;
