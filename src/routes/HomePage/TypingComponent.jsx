import { ReactTyped } from "react-typed";

const TypingComponent = () => {
  return (
    <ReactTyped
      strings={["Hello World", "Konichiwa"]}
      typeSpeed={40}
      backSpeed={50}
      loop
      showCursor
      cursorChar="|"
    />
  );
};

export default TypingComponent;
