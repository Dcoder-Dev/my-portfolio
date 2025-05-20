import './App.css';
import MenuSlide from './components/Menu/MenuSlide';
import NextSection from './components/NextSection/NextSection';
import Intro from './routes/HomePage/Intro';
function App() {

  return (
    <>
    <NextSection />
    <div className='scroll-container' style ={{height: "100%", width: "100%"}}>
      <MenuSlide />
      <Intro id="sec-1"/>
      <div id="sec-2" className="snap-section">Checking</div>
      <Intro id="sec-3"/>
    </div>
    </>
  )
};

export default App;
