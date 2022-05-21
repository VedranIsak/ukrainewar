import { Component } from 'react'
import styles from './SlideContainer.module.css'
import './SlideContainer.css';

export default class SlideContainer extends Component {
    constructor(props) {
        super(props);
    }

    switchSlide(margin) {
        this.slide = document.getElementById(this.props.id);
        this.slide.animate({ 'marginLeft': `-${margin}%`}, 500).onfinish = () => { this.slide.style.marginLeft = `-${margin}%` };
    }

    romanLetters = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

    componentDidMount() {
        if(window.innerWidth > 600 && window.innerWidth < 1000) {
            const headers = document.querySelectorAll(`.header`);
            for(let i = 0; i < headers.length; i++)
                headers[i].innerHTML = this.romanLetters[i];    
        }
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
    }

    render() {
        return (
            <>
                <div id={this.props.id + "Cont"} className={styles.mainContainer}>
                    <div data-id="imgPosContainer" className={styles.imgPosContainer}>
                        <h3 className='header' onClick={() => { this.switchSlide("0"); }}>{this.props.headers[0]}</h3>
                        <h3 className='header' onClick={() => { this.switchSlide("100"); }}>{this.props.headers[1]}</h3>
                        <h3 className='header' onClick={() => { this.switchSlide("200"); }}>{this.props.headers[2]}</h3>
                        <h3 className='header' onClick={() => { this.switchSlide("300"); }}>{this.props.headers[3]}</h3>
                        <h3 className='header' onClick={() => { this.switchSlide("400"); }}>{this.props.headers[4]}</h3>
                        <h3 className='header' onClick={() => { this.switchSlide("500"); }}>{this.props.headers[5]}</h3>
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