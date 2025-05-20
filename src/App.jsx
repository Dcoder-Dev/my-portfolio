import './App.css';
import MenuSlide from './components/Menu/MenuSlide';
import Intro from './routes/HomePage/Intro';
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';

function App() {

  return (
    <div className='scroll-container' style ={{height: "100%", width: "100%"}}>
      <MenuSlide />
      <a style={{position: "fixed", bottom: 0, textDecoration: "none"}} href="#sec-2">
        <KeyboardDoubleArrowDownRoundedIcon fontSize='large'/>
      </a>
      <Intro id="sec-1"/>
      
      <Intro id="sec-2"/>
    </div>
  )
};

export default App
