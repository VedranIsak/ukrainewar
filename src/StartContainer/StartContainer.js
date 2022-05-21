import styles from './StartContainer.module.css';
import './StartContainer.css';
import { Component } from 'react'

export default class StartContainer extends Component {
    
    componentDidMount() {
        var imgDivs = document.querySelectorAll(".img-info-container")
        let topMargin = "0%";
        if(window.innerWidth > "1000") {
            topMargin = "42.5%";
        }
        else {
            topMargin = "25%";
        }

        for(let i = 0; i < imgDivs.length; i++) 
            imgDivs[i].animate({ top: topMargin }, { duration: 1500 }).onfinish = () => { imgDivs[i].style.top = topMargin };
            
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
                <div className={styles.largeTextContainer}>
                    <h2>The Russian-Ukrainian war</h2>
                </div>
                <div className={styles.smallTextContainer}>
                    <h3>The origins of the conflict</h3>
                </div>
            </div>
            <div className={styles.middleContainer}>
                <div>
                    <h3>Your guide to understanding the war</h3>
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
            </div>
            <div id="top-footer-container" className={styles.bottomTextContainer}>
                <div>
                    <h3>All relevant information, in one place</h3>
                </div>
            </div>
        </div>
        );
    }
}