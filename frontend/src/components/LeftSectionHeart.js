import React from "react";
import "../styles/styles.css"; 
import logo from "../styles/photos/logo.png";

const LeftSection = ({ onAboutClick, onTutorialClick, onHomeClick }) => {
    return (
        <div className="left-section">
            
            <img src={logo} className="logo" alt="behealthai" />
            <div className="buttons">
                <div className="home-button button"
                onClick={onHomeClick}>
                    <span>HOME</span>
                </div>
                <div
                    className="about-button button"
                    onClick={onAboutClick}
                >
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

export default LeftSection;