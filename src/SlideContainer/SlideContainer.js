import { Component } from 'react'
import styles from './SlideContainer.module.css'
import './SlideContainer.css';

export default class SlideContainer extends Component {
    constructor(props) {
        super(props);
    }

    lastClickedHeader = 0;

    switchSlide(margin) {
        this.slide = document.getElementById(this.props.id);
        this.slide.animate({ 'marginLeft': `-${margin}%`}, 500).onfinish = () => { this.slide.style.marginLeft = `-${margin}%` };

        if(window.innerWidth < 600)
            this.highlight(margin);
        else 
            this.highlightTimeLine(margin.toString().substring(0, 1));
    }

    highlightTimeLine(orgLimit) {
        let limit = parseInt(orgLimit) + 1;

        const imgSlideContainers = document.querySelectorAll(`#${this.props.id}Cont [data-id="imgPosContainer"] [data-id="time-line"] div`);
        const imgSlideHeaders = document.querySelectorAll(`#${this.props.id}Cont [data-id="imgPosContainer"] [data-id="time-line"] div h5`);

        for (let i = 0; i < imgSlideContainers.length; i++) {
            imgSlideContainers[i].style.background = "none";
            imgSlideHeaders[i].style.opacity = "0";
            if(i != 0) {
                imgSlideContainers[i].style.borderRadius = "0px";
            }
        }

        for (let i = 0; i < limit; i++) {
            imgSlideContainers[i].animate({ "backgroundColor": "rgba(255, 255, 255, 0.75)" }, 400).onfinish = () => {
                imgSlideContainers[i].style.backgroundColor = "rgba(255, 255, 255, 0.75)";
                imgSlideHeaders[i].animate({"opacity": "1"}, 400).onfinish = () => {
                    imgSlideHeaders[i].style.opacity = "1";
                }
            }
        }

        if (parseInt(limit) >= 2) {
            imgSlideContainers[0].style.borderRadius = "0px";
        }

        imgSlideContainers[orgLimit].animate({"borderTopRightRadius": "100px"}, 100).onfinish = () => {
            imgSlideContainers[orgLimit].animate({"borderBottomRightRadius": "100px"}, 100).onfinish = () => {
                imgSlideContainers[orgLimit].style.borderBottomRightRadius = "100px";
                imgSlideContainers[orgLimit].style.borderTopRightRadius = "100px";
            }
        }
    }

    highlight(margin) {
        let headers = document.querySelectorAll(`#${this.props.id}Cont div .header`);
        let number = margin.toString().substring(0, 1);

        headers[parseInt(this.lastClickedHeader)].animate({"backgroundColor": "rgba(0, 0, 0, 0)"}, 500).onfinish = () => {
            headers[parseInt(this.lastClickedHeader)].style.backgroundColor = "rgba(0, 0, 0, 0)";
            headers[parseInt(this.lastClickedHeader)].style.borderRadius = '0px';
            this.lastClickedHeader = number;
        }

        headers[parseInt(number)].animate({"backgroundColor": "rgba(0, 0, 0, 1)"}, 500).onfinish = () => {
            headers[parseInt(number)].style.backgroundColor = "rgba(0, 0, 0, 1)";
        }
    }

    romanLetters = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

    componentDidMount() {
        const imgSlideContainers = document.querySelectorAll(`#${this.props.id}Cont [data-id="imgPosContainer"] [data-id="time-line"] div`);
        const imgSlideHeaders = document.querySelectorAll(`#${this.props.id}Cont [data-id="imgPosContainer"] [data-id="time-line"] div h5`);
        imgSlideContainers[0].style.background = "rgba(255, 255, 255, 0.45)";
        imgSlideHeaders[0].style.opacity = "1";
    }

    incrementSlide(margin) {
        this.slide = document.getElementById(this.props.id);
        let oldMargin = this.slide.getAttribute("data-curr-margin");

        if((oldMargin == '0' && margin == '100') || (oldMargin == '-500' && margin == '-100'))
            return;

        let newMargin = parseInt(oldMargin) + parseInt(margin);

        this.slide.animate({ 'marginLeft': `${newMargin}%`}, 500).onfinish = () => { 
            this.slide.setAttribute("data-curr-margin", newMargin);
            this.slide.style.marginLeft = `${newMargin}%` };

        margin == "100" ? this.highlightArrow(false) : this.highlightArrow(true);
    }

    highlightArrow(isRightArrow) {
        let arrows = document.querySelectorAll(`#${this.props.id}Cont [data-id="arrow-container"]`);
        let index = 0;
        isRightArrow ? index = 1 : index = 0;

        arrows[index].animate({"borderColor": "rgb(100, 100, 100)"}, 550).onfinish = () => {
            arrows[index].animate({"borderColor": "rgb(245, 222, 179)"}, 550);
        }
    }

    render() {
        return (
            <>
                <div id={this.props.id + "Cont"} className={styles.mainContainer}>
                    <div data-id="imgPosContainer" className={styles.imgPosContainer}>
                        <div className={styles.headerContainer}>
                            <h5 className='header' onClick={() => { this.switchSlide("0"); }}>{this.props.headers[0]}</h5>
                            <h5 className='header' onClick={() => { this.switchSlide("100"); }}>{this.props.headers[1]}</h5>
                            <h5 className='header' onClick={() => { this.switchSlide("200"); }}>{this.props.headers[2]}</h5>
                            <h5 className='header' onClick={() => { this.switchSlide("300"); }}>{this.props.headers[3]}</h5>
                            <h5 className='header' onClick={() => { this.switchSlide("400"); }}>{this.props.headers[4]}</h5>
                            <h5 className='header' onClick={() => { this.switchSlide("500"); }}>{this.props.headers[5]}</h5>
                        </div>
                        <div data-id="time-line" className={styles.timeLineContainer}>
                            <div><h5>{this.props.times[0]}</h5></div>
                            <div><h5>{this.props.times[1]}</h5></div>
                            <div><h5>{this.props.times[2]}</h5></div>
                            <div><h5>{this.props.times[3]}</h5></div>
                            <div><h5>{this.props.times[4]}</h5></div>
                            <div><h5>{this.props.times[5]}</h5></div>
                        </div>
                    </div>
                    <div onClick={() => { this.incrementSlide("100"); }} data-id="arrow-container" className={styles.left}></div>
                    <div onClick={() => { this.incrementSlide("-100") }} data-id="arrow-container" className={styles.right}></div>
                    <div data-id="imgSlideContainer" className={styles.imgSlideContainer}>
                        <div id={this.props.id} data-curr-margin="0" className={styles.slideContainer}>
                            <div id={this.props.ids[0]}>
                                <div className={styles.textContainer}>
                                    <p data-text>{this.props.texts[0]}</p>
                                </div>
                            </div>
                            <div id={this.props.ids[1]}>
                                <div className={styles.textContainer}>
                                    <p data-text>{this.props.texts[1]}</p>
                                </div>
                            </div>
                            <div id={this.props.ids[2]}>
                                <div className={styles.textContainer}>
                                    <p data-text>{this.props.texts[2]}</p>
                                </div>
                            </div>
                            <div id={this.props.ids[3]}>
                                <div className={styles.textContainer}>
                                    <p data-text>{this.props.texts[3]}</p>
                                </div>
                            </div>
                            <div id={this.props.ids[4]}>
                                <div className={styles.textContainer}>
                                    <p data-text>{this.props.texts[4]}</p>
                                </div>
                            </div>
                            <div id={this.props.ids[5]}>
                                <div className={styles.textContainer}>
                                    <p data-text>{this.props.texts[5]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}