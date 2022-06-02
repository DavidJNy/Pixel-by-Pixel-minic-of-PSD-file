import './App.css';
import FirstPage from './components/FirstPage.js';
import MainNav from './components/mainNav.js';
import SecondPage from './components/SecondPage.js';
import Climb from './components/Climb.js';
import LastPage from './components/Lastpage.js';
import Footer from './components/Footer.js';

function App() {

  return (
    <div class='container'>
      <FirstPage/>
      <MainNav/>
      <SecondPage/>
      <Climb/>
      <LastPage/>
      <Footer/>
    </div>
  );
}

export default App;