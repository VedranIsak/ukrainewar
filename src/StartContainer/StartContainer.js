import styles from './StartContainer.module.css';
import './StartContainer.css';
import { Component } from 'react'

export default class StartContainer extends Component {
    
    componentDidMount() {
        var imgDivs = document.querySelectorAll(".img-info-container");
        var topHeader = document.querySelector("#top-header-container div");
        var topMargin = "0%";

        if(window.innerWidth > "1000") {
            topMargin = "80%";
        }
        else {
            topMargin = "10%";
        }
        
        if(window.innerWidth > 1000) {
            topHeader.animate({'left': '30%'}, 1000).onfinish = () => {
                topHeader.style.left = '30%';
            }   
        }

        for(let i = 0; i < imgDivs.length; i++) 
            imgDivs[i].animate({ top: topMargin }, { duration: 1250 }).onfinish = () => { imgDivs[i].style.top = topMargin };
            
        const footer = document.getElementById("top-footer-container");
        footer.animate({'marginTop': '0%'}, {duration: 1500}).onfinish = () => { footer.style.marginTop = '0%' };
    }

    scrollTo(id) {
        document.getElementById(id).scrollIntoView({"behavior": "smooth"});
    }

    render() {
        return (
        <div className={styles.mainContainer}>
            <div id="top-header-container" className={styles.topContainer}>
                <div className={styles.textContainer}>
                    <h2>The Russian-Ukrainian war</h2>
                    <h3>How war returned to Europe</h3>
                </div>
            </div>
            <div id="img-dir-container" className={styles.bottomContainer}>
                <div id="his-img-container" className={styles.imgContainer}>
                    <div onClick={() => { this.scrollTo("oldHistIdCont"); }} className='img-info-container'>
                        <h3>The history</h3>
                    </div>
                </div>
                <div id="ev-img-container" className={styles.imgContainer}>
                    <div onClick={() => { this.scrollTo("newHistIdCont"); }} className='img-info-container'>
                        <h3>The recent events</h3>
                    </div>
                </div>
                <div id="ind-img-container" className={styles.imgContainer}>
                    <div onClick={() => { this.scrollTo("first-ind-cont"); }} className='img-info-container'>
                        <h3>The individuals</h3>
                    </div>
                </div>
                <div id="vid-img-container" className={styles.imgContainer}>
                    <div onClick={() => { this.scrollTo("vice-vid-cont"); }} className='img-info-container'>
                        <h3>The footage</h3>
                    </div>
                </div>
            </div>
            <div id="top-footer-container" className={styles.bottomTextContainer}>
                <div>
                    <h3>Get an overview of the struggle defining the new world order</h3>
                </div>
            </div>
        </div>
        );
    }
}