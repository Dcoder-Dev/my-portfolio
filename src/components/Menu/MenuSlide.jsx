import { useState } from "react";
import "./Menu.css";
import MenuIcon from "./MenuIcon";
const MenuSlide = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuIcon open = {isOpen} onClick = {handleOpen} />
      <div
        className={`slide ${isOpen ? "open" : ""}`}
      >
        <div className="menu-item" style={{marginTop: 200}}>Check</div>
        <div className="menu-item">Hello</div>
        <div className="menu-item">Hello</div>
        <div className="menu-item">Hello</div>
        <div className="menu-item">Hello</div>
      </div>
    </>
  );
};

export default MenuSlide;
