import TypingComponent from "./TypingComponent";

const Intro = ({ id }) => {
  return (
    <div id={id} className="snap-section">
      <h1>Hi, I'm <TypingComponent /></h1>
    </div>
  );
};

export default Intro;
