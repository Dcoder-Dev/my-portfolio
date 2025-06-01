import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import "./Card.css";
import { useEffect } from "react";

const Card = (props) => {
  const openProject = () => {
    window.open("https://github.com/Dcoder-Dev/my-portfolio", "_blank");
  };
  

  return (
    <div className={`card ${props.visible ? "animate-card" : ""}`}>
      <div className="card-content">
        <img
          src={props.img[props.index]}
          style={{ borderRadius: "50px 50px 0 0" }}
        />
        <h1>{props.heading[props.index]}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          imperdiet nulla mauris, non gravida augue porta a. Aliquam et turpis
          id augue venenatis porttitor eget vitae magna. Quisque nec magna
          tincidunt, fringilla augue vitae, condimentum quam.
        </p>
        {props.showMore && <TrendingFlatIcon className="goto-project" onClick={openProject} />}
      </div>
    </div>
  );
};

export default Card;
