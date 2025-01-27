import React from "react";
import "../styles/styles.css";
import logo from "../styles/photos/logo.png";

const SideNavBar = ({ onAboutClick, onTutorialClick, onHomeClick, onSleepClick, onHeartClick }) => {
    return (
        <div className="left-section">

            <button onClick={onHomeClick} className="py-2">
                <img src={logo} className="logo" alt="behealthai" />
            </button>            <div className="buttons">

                <div
                    className="tutorial-button button"
                    onClick={onHeartClick}
                >
                    <span>HEART</span>
                </div>

                <div
                    className="tutorial-button button"
                    onClick={onSleepClick}
                >
                    <span>SLEEP</span>
                </div>

                <div
                    className="about-button button"
                    onClick={onAboutClick}>
                    <span>ABOUT</span>
                </div>

                <div
                    className="tutorial-button button"
                    onClick={onTutorialClick}
                >
                    <span>TUTORIAL</span>
                </div>

            </div>
        </div>
    );
};

export default SideNavBar;