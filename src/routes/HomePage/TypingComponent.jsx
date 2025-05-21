import { useState } from "react";
import { ReactTyped } from "react-typed";
import Laptop from "../../assets/laptop.gif";
import Controller from "../../assets/controller.png";
import Wave from "../../assets/wave.gif";
import Movie from "../../assets/movie.gif"
import Game from "../../assets/game.gif"

const TypingComponent = () => {
  const [curIndex, setCurIndex] = useState(0);
  const [show, setShow] = useState(false);
  const phrases = ["Hi, I'm Devang !", "I'm a Developer.", "And a Movie Buff.", "Also a Gamer."];
  const imgSrc = [Wave, Laptop, Movie, Game];
  const handleComplete = () => {
    setTimeout(() => {
      setCurIndex((curIndex + 1) % phrases.length);
    }, 2000);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 1000);
  };
  return (
    <>
      <ReactTyped
        strings={[phrases[curIndex]]}
        typeSpeed={40}
        backSpeed={50}
        backDelay={1000}
        loop
        showCursor={false}
        onStringTyped={handleComplete}
      />
      {"  "}
      {show && (
        <img
          src={imgSrc[curIndex]}
          style={{ height: "auto", width: 70, verticalAlign: "top" }}
        />
      )}
    </>
  );
};

export default TypingComponent;
