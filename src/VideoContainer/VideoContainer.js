import { Component } from "react";
import styles from './VideoContainer.module.css';
import './VideoContainer.css';

export default class VideoContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="main-video-container" className={styles.mainVideoContainer}>
                <div data-id="header-vid-cont" className={styles.headerContainer}><h3>{this.props.header}</h3></div>
                <div id={this.props.id + "-vid-cont"} className={styles.contentContainer}>
                    <div>
                        <h4>{this.props.headers[0]}</h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/7eTuFAR169s" title="YouTube video player" 
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen></iframe>                       
                    </div>
                    <div>
                        <h4>{this.props.headers[1]}</h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/1BSSocdQor8" title="YouTube video player" 
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen></iframe>                    
                    </div>
                    <div>
                        <h4>{this.props.headers[2]}</h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/VNig07RtWxA" title="YouTube video player" 
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen></iframe>                    
                    </div>
                </div>
                <div data-id="footer-vid-cont" className={styles.headerContainer}><h3>The best videos around</h3></div>
            </div>
        );
    }
}