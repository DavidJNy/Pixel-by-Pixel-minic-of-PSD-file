import React from "react";

import NextPage from '../content/SecondPage.jpg';
import manCarousel from '../content/ManCarousel.jpg';
import mtnCarousel from '../content/MtnCarousel.jpg';


export default function SecondPage() {

  return (

    <div class='SecondPage' id="history">
      <div class='Carousel'>
        <img src={manCarousel} alt='' class=''></img>
        <img src={mtnCarousel} alt='' class=''></img>
        <img src={manCarousel} alt='' class=''></img>
        <img src={mtnCarousel} alt='' class=''></img>
      </div>
      {/* <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
      </div> */}
      <img src={NextPage} alt='' ></img>
    </div>
  );
}