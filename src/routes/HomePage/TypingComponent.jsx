import { ReactTyped } from "react-typed";

const TypingComponent = () => {
  return (
    <ReactTyped
      strings={["Devang !👋", "a Developer 💻", "a Movie Buff 🍿", "a Gamer 🎮"]}
      typeSpeed={40}
      backSpeed={50}
      loop
      backDelay={1000}
    />
  );
};

export default TypingComponent;
