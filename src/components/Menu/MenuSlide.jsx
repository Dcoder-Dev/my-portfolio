import { useState } from "react";
import "./Menu.css";
import MenuIcon from "./MenuIcon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LeetCodeIcon from "../Icons/LeetCodeIcon";
import InstagramIcon from "../Icons/InstagramIcon";

const MenuSlide = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuIcon open={isOpen} onClick={handleOpen} />
      <div className={`slide ${isOpen ? "open" : ""}`}>
        <div className="menu-item" style={{ marginTop: 150 }}>
          <span>Home</span>
        </div>
        <div className="menu-item">
          <span>Projects</span>
        </div>
        <div className="menu-item">
          <span>Experience</span>
        </div>
        <div className="menu-item">
          <span>About Me</span>
        </div>
        <div className="menu-item">
          <a href="https://www.linkedin.com/in/devang-dwivedi-1280a3187/">
            <LinkedInIcon style={{ color: "#0a66c2", fontSize: 60 }} />
          </a>
          <a href="https://github.com/Dcoder-Dev">
            <GitHubIcon style={{ color: "#008000", fontSize: 60 }} />
          </a>
          <a href="https://leetcode.com/u/Dcoder149/">
            <LeetCodeIcon />
          </a>
          <a href="https://www.instagram.com/itsamedevang/">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </>
  );
};

export default MenuSlide;
