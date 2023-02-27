import React, { useState } from "react";
import Particles from "react-tsparticles";
import particlesOptions from "../particlesOptions";
import Banner from "./components/Banner/Banner";
import Dropdown from "./components/Dropdown/Dropdown";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Stack from "./components/Stack/Stack";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [deployed, setDeployed] = useState(false);

  const scrollToId = async (section) => {
    const element = document.getElementById(section);
    const target = element.getBoundingClientRect().top + window.scrollY;

    await window.scrollTo({
      top: target,
      behavior: "smooth",
    });
  };

  return (
    <main className="App">
      <header>
        <Banner deployed={deployed} setDeployed={setDeployed} />
        <Dropdown
          deployed={deployed}
          setDeployed={setDeployed}
          scrollToId={scrollToId}
        />
      </header>
      <Home scrollToId={scrollToId} />
      <Particles id="tsparticles" params={particlesOptions}></Particles>
      <Portfolio scrollToId={scrollToId} />
      <Stack scrollToId={scrollToId} />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
