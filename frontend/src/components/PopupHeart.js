import React from "react";
import "../styles/styles.css";

const PopupHeart = ({ onClose }) => {
    return (
        <div className="overlay">
            <div className="popup">
                <div className="popup-content">
                    <h2>About Us</h2>
                    <p>
                        This project is designed to help users track and analyze their heart health, such as blood pressure, cholesterol levels, and physical activity.
                        Our goal is to provide a user-friendly interface for managing personal health data and generating insightful charts, including health scores and trends.
                    </p>
                    <p>
                        Made by <strong>Kamil Labus</strong>.
                    </p>
                    <button className="close-button" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default PopupHeart;