import React from "react";
import { useState } from "react";

import TabBackground from '../content/TabBackground.jpg';
import TabOne from '../content/tabOne.jpg';
import TabTwo from '../content/tabTwo.jpg';

export default function LastPage() {

    const [OneOrTwo, setOneOrTwo] = useState(true);

    const toggleTab = (flipIt) => {
        setOneOrTwo(flipIt);
    }

    return (

    <div>
        <div class='bigScreens'>

        <div class='LastPage'>
            <div class='Tabs'>
                <div class='mtnOne' id="One" onClick={() => toggleTab(true)}></div>
            <div class='mtnTwo' id="Two" onClick={() => toggleTab(false)}></div>
            </div>
            <img src={TabBackground} alt=''></img>
        </div>

        <div class='LastTabs'>
            { OneOrTwo ? <img src={TabOne} alt=''></img> : <img src={TabTwo} alt=''></img> }
        </div>
        </div>

        <div class='mobileTab' id="accordion">
            <div class='LastPage'>
                <div class='Tabs'>
                        <div class='mtnOne' id="headingOne" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"></div>
                        <div class='mtnTwo' id="headingTwo" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"></div>
                </div>
            <img src={TabBackground} alt=''></img>
            </div>


            <div class='LastTabs'>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordion">
                        <img src={TabOne} alt='' ></img>
                </div>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                        <img src={TabTwo} alt='' ></img>
                </div>
            </div>
        </div>
    </div>
    );
}