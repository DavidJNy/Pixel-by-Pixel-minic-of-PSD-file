import React from "react";

import TabBackground from '../content/TabBackground.jpg';
import TabOne from '../content/tabOne.jpg';
import TabTwo from '../content/tabTwo.jpg';

export default function LastPage() {

    // const [OneOrTwo, setOneOrTwo] = useState(true);


    return (
    <>
        <div class='LastPage'>
            <div class='smallTabs'>
                <div>
                    <input type="radio" name="size" id="small" value="small" checked="checked" />
                    <label for="small">1</label>
                    <article><p>You see? It's curious. Ted dissible, </p></article>
                </div>
                <div>
                    <input type="radio" name="size" id="medium" value="medium" />
                    <label for="medium">2</label>
                    <article><p>You see? It's curious. Ted did fi.  </p></article>
                </div>
                <div class='smallMtnOne' ></div>
                <div class='smallMtnTwo' ></div>
            </div>
            <div class='Tabs'>
                <div class='mtnOne' ></div>
                <div class='mtnTwo' ></div>
            </div>
            <img src={TabBackground} alt='' switchTabs></img>
        </div>
        <div class='LastTabs'>
            <img src={TabOne} alt='' ></img>
        </div>
    </>
    );
}