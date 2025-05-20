import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import { useEffect, useState } from "react";

const NextSection = () => {


    const [next, setNext] = useState(null);



  useEffect(() => {
    const sections = document.querySelectorAll(".snap-section");
    const totalSections = sections.length;

    setNext(sections[1].id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = [...sections].indexOf(entry.target);
            setNext(sections[(index + 1) % totalSections].id);
          }
        });
      },
      {
        threshold: 1,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <a
      className="next-section"
      style={{ position: "fixed", bottom: 0 }}
      href={`#${next}`}
    >
      {next !== document.querySelectorAll(".snap-section")[0]?.id ? (
        <KeyboardDoubleArrowDownRoundedIcon style={{ fontSize: 50 }} />
      ) : (
        <KeyboardDoubleArrowUpRoundedIcon style={{ fontSize: 50 }} />
      )}
    </a>
  );
};

export default NextSection;
