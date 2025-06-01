import "./scrollbar.css";
const Scrollbar = ({section}) => {
  return (
    <>
      <div className="scrollbar">
        <div className="scrollbar-active" style={{height: `${((section + 1) * 100)/3}%`}}></div>
      </div>
    </>
  );
};

export default Scrollbar;
