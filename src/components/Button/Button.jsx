import arrow from "../../images/assets/arrow.png";
import "./button.scss";

function Button({ to, scrollToId }) {
  return (
    <button
      className="scroll-button"
      type="button"
      onClick={() => scrollToId(to)}
    >
      <img className="arrow" src={arrow} alt="arrow" tabIndex="0" />
    </button>
  );
}

export default Button;
