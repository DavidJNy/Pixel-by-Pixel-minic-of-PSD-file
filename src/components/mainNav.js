import React from "react";
import StickyNav from '../content/StickyNav.jpg';
import BottomNav from '../content/BottomNav.png';
import ActiveNav from '../content/ActiveNav.png';

export default function MainNav() {

  return (
    
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
  );
}