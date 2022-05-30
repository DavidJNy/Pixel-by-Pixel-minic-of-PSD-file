import './App.css';
import frontPage from './content/FrontPage.jpg';
import topNav from './content/TopNav.jpg';
import activeLink from './content/activeLink.jpg';
import StickyNav from './content/StickyNav.jpg';
import SecondPage from './content/SecondPage.jpg';
import LastPage from './content/LastPage.jpg';
import FooterPix from './content/Footer.jpg';


function App() {

  return (
    <div class='container'>
      <div class='firstPage'>
        <img src={frontPage} alt='' class='' ></img>
        <div class='topNav'>
          <a href='/first' class='history1'><div>
          </div>
            </a>
          <a href='/second' class='team2'><div>
          </div>
          </a>
        </div>
      </div>

    {/* <div class='StickyNav'>
        <img src={StickyNav} alt='' ></img>
    </div> 

    <div class='SecondPage'>
        <img src={SecondPage} alt='' ></img>
        <div class='Carousel'>
        </div>
    </div>

    <div class='LastPage'>
      <img src={LastPage} alt='' ></img>
    </div>

    <div class='Footer'>
        <img src={FooterPix} alt='' ></img>
    </div> */}
  </div>
  );
}

export default App;