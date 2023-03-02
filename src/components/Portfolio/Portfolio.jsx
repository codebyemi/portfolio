import React, { useState, useEffect } from "react";
import cashtrack from "../../images/cashtrack.png";
import facedetect from "../../images/facedetect.png";
import lain from "../../images/lain.png";
import emijerochim from "../../images/portfolio.png";
import Button from "../Button/Button";
import "./Portfolio.scss";

const Portfolio = ({ scrollToId }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [cashtrack, facedetect, lain, emijerochim];
  const itemsTitles = [
    "CashTrack 💸",
    "Facedetect AI 🧠",
    "Lain 👽",
    "Portfolio 💼",
  ];
  const itemsLinks = [
    "https://codebyemi.github.io/cashtrack/",
    "https://codebyemi.github.io/facedetect/",
    "https://github.com/codebyemi/lain",
    "https://codebyemi.github.io/portfolio/",
  ];
  const itemsDescriptions = [
    [
      "Cash-flow management web app",
      "📱 Frontend: React.js, Sass",
      "🖥️ Backend: Node.js, Express, Mongoose",
      "💾 Database: MongoDB",
      "📚 Libraries: JWT, Moment.js",
    ],
    [
      "Face detection full stack web app",
      "📱 Frontend: React.js, Sass",
      "🖥️ Backend: Node.js, Express, pg",
      "💾 Database: PostgreSQL",
      "📚 Libraries: Clarifai API, JWT",
    ],
    [
      "Discord bot with GPT-3, image search and music player",
      "🖥️ Backend: Node.js",
      "📚 Libraries: discord.js, openai, youtube-node, ytdl-core",
      "☁️ Deploy: Railway/Local",
    ],
    [
      "Portfolio web app",
      "📱 Frontend: React.js, Sass",
      "📚 Libraries: react-tsparticles",
      "☁️ Deploy: GitHub Pages",
    ],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  return (
    <div className="portfolio" id="portfolio">
      <div className="items-container">
        <div className="item-description">
          <div className="item-title-container">
            <h3 className="item-title">{itemsTitles[activeIndex]}</h3>
          </div>
          <div className="item-stack">
            {itemsDescriptions[activeIndex].map((item, index) => (
              <p className="item" key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="image-container">
          <button className="item-btn btn-left" onClick={handlePrevClick}>
            &#60;
          </button>
          <img
            className="item-image"
            src={images[activeIndex]}
            alt="Portfolio"
            onClick={() => window.open(itemsLinks[activeIndex], "_blank")}
          />
          <button className="item-btn btn-right" onClick={handleNextClick}>
            &#62;
          </button>
        </div>
      </div>
      <Button scrollToId={scrollToId} to="stack" />
    </div>
  );
};

export default Portfolio;
