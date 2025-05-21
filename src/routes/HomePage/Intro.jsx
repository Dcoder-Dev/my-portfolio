import CPPIcon from "../../components/Icons/CPPIcon";
import CSSIcon from "../../components/Icons/CSSIcon";
import HTMLIcon from "../../components/Icons/HTMLIcon";
import JavaIcon from "../../components/Icons/JavaIcon";
import JavaScriptIcon from "../../components/Icons/JavaScriptIcon";
import NodeJSIcon from "../../components/Icons/NodeJSIcon";
import ReactJSIcon from "../../components/Icons/ReactJSIcon";
import SpringIcon from "../../components/Icons/SpringIcon";
import TypingComponent from "./TypingComponent";


const Intro = ({id}) => {
  return (
    <div id = {id} className="snap-section intro">
        <div className="orbiting-element">
          <HTMLIcon />
        </div>
        <div className="orbiting-element">
          <CSSIcon />
        </div>
        <div className="orbiting-element">
          <CPPIcon />
        </div>
        <div className="orbiting-element">
          <NodeJSIcon />
        </div>
        <div className="orbiting-element">
          <JavaScriptIcon />
        </div>
        <div className="orbiting-element">
          <SpringIcon />
        </div>
        <div className="orbiting-element">
          <JavaIcon />
        </div>
        <div className="orbiting-element">
          <ReactJSIcon />
        </div>
      <h1 className="type-intro"><TypingComponent /></h1>
    </div>
  );
};

export default Intro;
