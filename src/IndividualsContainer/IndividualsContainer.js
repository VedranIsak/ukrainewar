import { Component } from "react";
import styles from './IndividualsContainer.module.css';
import './IndividualsContainer.css';

export default class IndividualsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={this.props.id} data-id="ind-images-main-container" className={styles.mainContainer}>
                <div id={this.props.ids[0] + "-img"} className={styles.imgContainer}>
                    <div id={this.props.ids[0] + "-cont"}>
                        <p>{this.props.texts[0]}</p>
                    </div>
                </div>
                <div id={this.props.ids[1] + "-img"} className={styles.imgContainer}>
                    <div id={this.props.ids[1] + "-cont"}>
                        <p>{this.props.texts[1]}</p>
                    </div>
                </div>
                <div id={this.props.ids[2] + "-img"} className={styles.imgContainer}>
                    <div id={this.props.ids[2] + "-cont"}>
                        <p>{this.props.texts[2]}</p>
                    </div>
                </div>
                <div id={this.props.ids[3] + "-img"} className={styles.imgContainer}>
                    <div id={this.props.ids[3] + "-cont"}>
                        <p>{this.props.texts[3]}</p>
                    </div>
                </div>
                <div id={this.props.ids[4] + "-img"} className={styles.imgContainer}>
                    <div id={this.props.ids[4] + "-cont"}>
                        <p>{this.props.texts[4]}</p>
                    </div>
                </div>
                <div id={this.props.ids[5] + "-img"} className={styles.imgContainer}>
                    <div id={this.props.ids[5] + "-cont"}>
                        <p>{this.props.texts[5]}</p>
                    </div>
                </div>
            </div>
        );
    }
}