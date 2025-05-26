import { useEffect, useRef, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Img1 from "../../assets/code.webp";
import Img2 from "../../assets/HomePage.png";

const Projects = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const title = ["Portfolio", "Cash Data Lake", "Rosetta"];
  const coverImages = [Img2, Img1, Img2];
  const [curIndex, setCurIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else setIsVisible(false);
        });
      },
      {
        threshold: 1,
      }
    );

    const target = document.getElementById("projects-sec");
    observer.observe(target);

    return () => observer.unobserve(target);
  }, []);

  const handleNext = () => {
    const card = document.querySelector(".project-card");
    const content = document.querySelector(".card-content");
    card.classList.remove("animate-card");
    setTimeout(() => {
      card.classList.add("animate-card");
    }, 1);
    content.classList.remove("animate-card");
    setTimeout(() => {
      content.classList.add("animate-card");
    }, 1);
    setTimeout(() => {
      setCurIndex((curIndex + 1) % title.length);
    }, 500);
  };

  const handlePrevious = () => {
    const card = document.querySelector(".project-card");
    const content = document.querySelector(".card-content");
    card.classList.remove("animate-card");
    setTimeout(() => {
      card.classList.add("animate-card");
    }, 1);
    content.classList.remove("animate-card");
    setTimeout(() => {
      content.classList.add("animate-card");
    }, 1);
    setTimeout(() => {
      setCurIndex((curIndex - 1 + title.length) % title.length);
    }, 1500);
  };

  const openProject = () => {
    window.open("https://github.com/Dcoder-Dev/my-portfolio", "_blank");
  }

  return (
    <div id={id} className="snap-section">
      <h1 className={isVisible ? "animate" : ""}>Projects</h1>
      <div className="project-grid">
        <ArrowBackIosIcon
          onClick={handlePrevious}
          sx={{
            fontSize: 50,
            transition: `all 1s ${isVisible ? "2s" : ""} ease-in-out`,
            transform: `translateY(${isVisible ? "0" : "50px"})`,
            opacity: !isVisible ? 0 : 1,
            cursor: "pointer",
          }}
        />
        <div className={`project-card ${isVisible ? "animate-card" : ""}`}>
          <div className="card-content">
            <img
              src={coverImages[curIndex]}
              style={{ borderRadius: "50px 50px 0 0" }}
            />
            <h1>{title[curIndex]}</h1>
            <p style={{ display: "flex", flexWrap: "wrap" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              imperdiet nulla mauris, non gravida augue porta a. Aliquam et
              turpis id augue venenatis porttitor eget vitae magna. Quisque nec
              magna tincidunt, fringilla augue vitae, condimentum quam.
            </p>
            <TrendingFlatIcon className="goto-project" onClick={openProject}/>
          </div>
        </div>
        <ArrowForwardIosIcon
          className={`arrow ${isVisible ? "arrow-animate" : ""}`}
          onClick={handleNext}
          sx={{
            fontSize: 50,
            transition: `all 1s ${isVisible ? "2s" : ""} ease-in-out`,
            transform: `translateY(${isVisible ? "0" : "50px"})`,
            opacity: !isVisible ? 0 : 1,
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default Projects;
