import { useEffect, useRef, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Card from "../../components/Card/card";
import Img1 from "../../assets/Projects/code.webp";
import Img2 from "../../assets/Projects/HomePage.png";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const title = ["Portfolio", "Cash Data Lake", "Rosetta"];
  const [curIndex, setCurIndex] = useState(0);
  const coverImages = [Img2, Img1, Img2];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
          else setIsVisible(false);
          if (entry.intersectionRatio < 0.1) setCurIndex(0);
        });
      },
      {
        threshold: 1,
      }
    );

    const target = document.querySelector(".p-section");
    observer.observe(target);

    // return () => observer.unobserve(target);
  }, []);

  const handleNext = () => {
    const card = document.querySelector(".card");
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
    const card = document.querySelector(".card");
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

  return (
    <div className="p-section snap-section">
      <h1 className={isVisible ? "show-header" : ""}>Projects</h1>
      <div className="project-grid">
        <ArrowBackIosIcon
          onClick={handlePrevious}
          sx={{
            fontSize: 50,
            transition: `all 1s ease-in-out`,
            transform: `translateY(${isVisible ? "0" : "50px"})`,
            opacity: !isVisible ? 0 : 1,
            cursor: "pointer",
          }}
        />
        <Card
          img={coverImages}
          heading={title}
          index={curIndex}
          visible={isVisible}
          showMore={true}
        />
        <ArrowForwardIosIcon
          onClick={handleNext}
          sx={{
            fontSize: 50,
            transition: `all 1s ease-in-out`,
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
