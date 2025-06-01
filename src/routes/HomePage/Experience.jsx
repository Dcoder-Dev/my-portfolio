import { useEffect, useState } from "react";
import Img1 from "../../assets/StanC.jpg";
import Card from "../../components/Card/card";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [curIndex, setCurIndex] = useState(0);
  const orgs = [
    "Standard Chartered Bank",
    "Standard Chartered Bank",
    "Standard Chartered Bank",
  ];
  const images = [Img1, Img1, Img1];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
          else setIsVisible(false);
        });
      },
      { threshold: 1 }
    );

    const ExpPage = document.querySelector(".exp-section");
    observer.observe(ExpPage);
  }, []);

  const handleNext = () => {
    const card = document.querySelectorAll(".card");
    const content = document.querySelectorAll(".card-content");
    card[1].classList.remove("animate-card");
    setTimeout(() => {
      card[1].classList.add("animate-card");
    }, 1);
    content[1].classList.remove("animate-card");
    setTimeout(() => {
      content[1].classList.add("animate-card");
    }, 1);
    setTimeout(() => {
      setCurIndex((curIndex + 1) % orgs.length);
    }, 500);
  };

  const handlePrevious = () => {
    const card = document.querySelectorAll(".card");
    const content = document.querySelectorAll(".card-content");
    card[1].classList.remove("animate-card");
    setTimeout(() => {
      card[1].classList.add("animate-card");
    }, 1);
    content[1].classList.remove("animate-card");
    setTimeout(() => {
      content[1].classList.add("animate-card");
    }, 1);
    setTimeout(() => {
      setCurIndex((curIndex - 1 + orgs.length) % orgs.length);
    }, 1500);
  };

  return (
    <div className="exp-section snap-section">
      <h1 className={isVisible ? "show-header" : ""}>Experience</h1>
      <div className="exp-grid">
        <ArrowBackIosIcon
          onClick={handlePrevious}
          sx={{
            fontSize: 50,
            transition: `all 1s ${isVisible ? "" : ""} ease-in-out`,
            transform: `translateY(${isVisible ? "0" : "50px"})`,
            opacity: !isVisible ? 0 : 1,
            cursor: "pointer",
          }}
        />
        <Card
          visible={isVisible}
          img={images}
          heading={orgs}
          index={curIndex}
          showMore={false}
        />
        <ArrowForwardIosIcon
          onClick={handleNext}
          sx={{
            fontSize: 50,
            transition: `all 1s ${isVisible ? "" : ""} ease-in-out`,
            transform: `translateY(${isVisible ? "0" : "50px"})`,
            opacity: !isVisible ? 0 : 1,
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default Experience;
