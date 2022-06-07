import React from "react";

import Carousel from 'react-grid-carousel'
import NextPage from '../content/SecondPage.jpg';
import manCarousel from '../content/ManCarousel.jpg';
import mtnCarousel from '../content/MtnCarousel.jpg';


export default function SecondPage() {
  
  

  return (
<>
      <div class='SecondPage scroll-padding-top' id="history">
      <div class='Carousel'>
          <Carousel cols={4} rows={1} gap={10} loop showDots={true} dotColorActive='#ffffff' dotColorInactive='#636d80'>
            <Carousel.Item>
              <img src={manCarousel} alt=''/>
            </Carousel.Item>
            <Carousel.Item>
              <img src={mtnCarousel} alt=''/>
            </Carousel.Item>
            <Carousel.Item>
              <img src={manCarousel} alt='' />
            </Carousel.Item>
            <Carousel.Item>
              <img src={mtnCarousel} alt='' />
            </Carousel.Item>
            <Carousel.Item>
              <img src={manCarousel} alt='' />
            </Carousel.Item>
            <Carousel.Item>
              <img src={mtnCarousel} alt='' />
            </Carousel.Item>
            <Carousel.Item>
              <img src={manCarousel} alt='' />
            </Carousel.Item>
            <Carousel.Item>
              <img src={mtnCarousel} alt='' />
            </Carousel.Item>
            <Carousel.Item>
              <img src={manCarousel} alt='' />
            </Carousel.Item>
            <Carousel.Item>
              <img src={mtnCarousel} alt='' />
            </Carousel.Item>
            <Carousel.Item>
              <img src={manCarousel} alt='' />
            </Carousel.Item>
            <Carousel.Item>
              <img src={mtnCarousel} alt='' />
            </Carousel.Item>
          </Carousel>
      </div>

      
      <img src={NextPage} alt='' ></img>
    </div>


</>
  );
}