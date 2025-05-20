import { ReactTyped } from "react-typed";

const TypingComponent = () => {
  return (
    <ReactTyped
      strings={["Devang ! \u{1F680}", "a Developer 💻", "a Movie Buff 🍿", "a Gamer 🎮"]}
      typeSpeed={40}
      backSpeed={50}
      loop
      backDelay={2000}
    />
  );
};

export default TypingComponent;
