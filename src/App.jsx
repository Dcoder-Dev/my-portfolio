import "./App.css";
import MenuSlide from "./components/Menu/MenuSlide";
import NextSection from "./components/NextSection/NextSection";
import Intro from "./routes/HomePage/Intro";
import { useRef, useEffect, useState } from "react";
import Projects from "./routes/HomePage/Projects";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import Experience from "./routes/HomePage/Experience";
import Scrollbar from "./components/Scrollbar/Scrollbar";

function App() {
  const [curSection, setCurSection] = useState(0);
  const containerRef = useRef();
  let isScrolling = false;

  const scrollToSection = (index, duration = 1200) => {
    const container = containerRef.current;
    const targetY = index * window.innerHeight;
    const startY = container.scrollTop;
    const distance = targetY - startY;
    const startTime = performance.now();

    const animate = (time) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeInOut = 0.5 * (1 - Math.cos(Math.PI * progress));
      container.scrollTop = startY + distance * easeInOut;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        isScrolling = false;
      }
    };

    isScrolling = true;
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const container = containerRef.current;

    const onWheel = (e) => {
      if (isScrolling) return;
      e.preventDefault();

      const currentIndex = Math.round(container.scrollTop / window.innerHeight);
      const direction = e.deltaY > 0 ? 1 : -1;
      if(currentIndex == 2 && direction == 1)
        return;
      const nextIndex = Math.min(
        Math.max(currentIndex + direction, 0),
        container.children.length - 1
      );

      scrollToSection(nextIndex);
      setCurSection(nextIndex);
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <>
      <Scrollbar section={curSection} />
      <ParticlesBackground />
      <div ref={containerRef} className="scroll-container">
        <MenuSlide />
        <Intro id="intro-sec" />
        <Projects />
        <Experience />
      </div>
    </>
  );
}

export default App;
