import React from "react";
import "../styles/styles.css";

const PopupSleep = ({ onClose }) => {
    return (
        <div className="overlay">
            <div className="popup">
                <div className="popup-content">
                    <h2>About Us</h2>
                    <p>
                        This project is designed to help users track and analyze their sleep patterns, such as sleep duration, stress levels, and physical activity. 
                        Our goal is to provide a user-friendly interface for managing personal sleep data and generating insightful charts, including sleep scores and trends.
                    </p>
                    <p>
                        Made by <strong>Dawid Krawczyk</strong>.
                    </p>
                    <button className="close-button" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default PopupSleep;