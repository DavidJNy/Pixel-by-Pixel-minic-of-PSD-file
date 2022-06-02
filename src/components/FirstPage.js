import React from 'react';
import FrontPage from '../content/FrontPage.jpg';
import TopNav from '../content/TopNav.png';
import Active from '../content/Active.png';

export default function FirstPage() {

  return (
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
  );
}