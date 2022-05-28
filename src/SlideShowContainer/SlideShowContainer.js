import styles from './SlideShowContainer.module.css';
import './SlideShowContainer.css';
import { Component } from 'react';

export default class SlideShowContainer extends Component {
    constructor() {
        super();
    }

    shiftSlide(index) {
        let removeSlide = document.getElementById(`${index}-img-slide`);

        if(index == "fifth") {
            let firstSlide = document.getElementById("first-img-slide");
            firstSlide.style.zIndex = 4;
            firstSlide.style.opacity = 1;
        }

        removeSlide.animate({"opacity": "0"}, 500).onfinish = () => {
            removeSlide.style.opacity = "0";
            removeSlide.style.zIndex = 1;
            if(index == "fifth") {
                let firstSlide = document.getElementById("first-img-slide");
                let secondSlide = document.getElementById("second-img-slide");
                secondSlide.style.zIndex = 8;
                secondSlide.style.opacity = "1";

                let thirdSlide = document.getElementById("third-img-slide");
                thirdSlide.style.zIndex = 7;
                thirdSlide.style.opacity = "1";

                let fourthSlide = document.getElementById("fourth-img-slide");
                fourthSlide.style.zIndex = 6;
                fourthSlide.style.opacity = "1";

                let fifthSlide = document.getElementById("fifth-img-slide");
                fifthSlide.style.zIndex = 5;
                fifthSlide.style.opacity = "1";

                firstSlide.style.zIndex = 9;
            }
        }
    }

    render() {
        return (
            <div id="slide-show-main-container" className={styles.mainContainer}>
                <h2>Gallery</h2>
                <div id="first-img-slide" onClick={() => { this.shiftSlide("first"); }}>
                    <h3>The Battle for the Donbass</h3>
                </div>
                <div id="second-img-slide" onClick={() => { this.shiftSlide("second"); }}>
                    <h3>The Seizure of Crimea</h3>
                </div>
                <div id="third-img-slide" onClick={() => { this.shiftSlide("third"); }}>
                    <h3>The Battle for Hostomel Airport</h3>
                </div>
                <div id="fourth-img-slide" onClick={() => { this.shiftSlide("fourth"); }}>
                    <h3>The Devastation in Mariupol</h3>
                </div>
                <div id="fifth-img-slide" onClick={() => { this.shiftSlide("fifth"); }}>
                    <h3>The Azovstal Steelworks</h3>
                </div>
            </div>
        ) 
    }
}