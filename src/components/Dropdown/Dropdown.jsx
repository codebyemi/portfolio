import "./dropdown.scss";

function Dropdown({ deployed, scrollToId }) {
  return (
    <div className={`dropdown deployed-${deployed}`}>
      <nav className="options-container">
        <ul>
          <li>
            <button onClick={() => scrollToId("home")}>
              <h3>HOME</h3>
            </button>
          </li>
          <li>
            <button onClick={() => scrollToId("portfolio")}>
              <h3>PORTFOLIO</h3>
            </button>
          </li>
          <li>
            <button onClick={() => scrollToId("stack")}>
              <h3>STACK</h3>
            </button>
          </li>
          <li>
            <button href="#contact" onClick={() => scrollToId("contact")}>
              <h3>CONTACT</h3>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Dropdown;
