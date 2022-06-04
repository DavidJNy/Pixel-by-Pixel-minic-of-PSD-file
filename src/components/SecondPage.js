import React from "react";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import NextPage from '../content/SecondPage.jpg';
import manCarousel from '../content/ManCarousel.jpg';
import mtnCarousel from '../content/MtnCarousel.jpg';


export default function SecondPage() {

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    
  };

  const items = [
    <img src={manCarousel} alt='' ></img>,
    <img src={mtnCarousel} alt='' ></img>,
    <img src={manCarousel} alt='' ></img>,
    <img src={manCarousel} alt='' ></img>,
    <img src={mtnCarousel} alt='' ></img>
  ];

  return (

    <div class='SecondPage' id="history">
      <div class='Carousel'>
        <AliceCarousel
          animationDuration={800}
          items={items}
          mouseTracking
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </div>
      <img src={NextPage} alt='' ></img>
    </div>
  );
}