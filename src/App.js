import './App.css';
import FrontPage from './content/FrontPage.jpg';
import TopNav from './content/TopNav.png';
import Active from './content/Active.png';
import StickyNav from './content/StickyNav.jpg';
import BottomNav from './content/BottomNav.png';
import ActiveNav from './content/ActiveNav.png';
import SecondPage from './content/SecondPage.jpg';
import Climb from './content/Climb.jpg';
import TabBackground from './content/TabBackground.jpg';
import MountainOneTab from './content/MountainOneTab.jpg';
import MountainTwoTab from './content/MountainTwoTab.jpg';
import TabOne from './content/tabOne.jpg';
import TabTwo from './content/tabTwo.jpg';
import FooterPix from './content/Footer.jpg';

function App() {

  return (
    <div class='container'>

      <div class='firstPage'>
        <div class='topNav'>
          <img src={TopNav} alt=''></img>
          <a href='#history' class='activeHistory'>
            <img src={Active} alt='' class='topHistory'></img>
          </a>
          <a href='#team' class='activeTeam'>
            <img src={Active} alt='' class='topTeam'></img>
          </a>
        </div>
        <img src={FrontPage} alt='' class='' ></img>
      </div>

      <div class='mainNav'>
        <div class='Nav'>
          <img src={BottomNav} alt=''></img>
          <a href='#history' class='History'>
            <img src={ActiveNav} alt='' class='bottomHistory'></img>
          </a>
          <a href='#team' class='Team'>
            <img src={ActiveNav} alt='' class='bottomTeam'></img>
          </a>
        </div>
        <img src={StickyNav} alt='' class=''></img>
      </div> 
      
      <div class='SecondPage' id="history">
        <img src={SecondPage} alt='' ></img>
        <div class='Carousel'>
          
        </div>
      </div>

      <div class='' id="team">
        <img src={Climb} alt='' ></img>
      </div>

       <div class='LastPage'>
        <div class='Tabs'>
          <img src={MountainOneTab} alt='' class='mtnOne'></img>
          <img src={MountainTwoTab} alt='' class='mtnTwo'></img>
        </div>
        <img src={TabBackground} alt='' ></img>
      </div>

      
      <div class='LastPage'>
        <img src={TabOne} alt='' ></img>
      </div>

      <div class='Footer'>
        <img src={FooterPix} alt='' ></img>
      </div>
    </div>
  );
}

export default App;