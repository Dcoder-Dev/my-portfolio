import { useEffect, useState } from "react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
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

    const ExpPage = document.querySelector(".experience-section");
    observer.observe(ExpPage);
  }, []);

  return (
    <div className="experience-section snap-section">
      <h1 className={isVisible ? "show-header" : ""}>Experience</h1>
      <div className="exp-card">
        checking
      </div>
    </div>
  );
};

export default Experience;
