import { useEffect, useState } from "react";

const Projects = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false);

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
    console.log(target);
    observer.observe(target);

    return () => observer.unobserve(target);
  }, []);

  return (
    <div id={id} className="snap-section">
      <h1 className={isVisible ? "animate" : ""}>Projects</h1>
      <div className="project-grid">
        <div className={`project-card${isVisible ? " card-animate" : ""}`}></div>
      </div>
    </div>
  );
};

export default Projects;
