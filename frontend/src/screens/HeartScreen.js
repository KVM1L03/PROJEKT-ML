import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftSection from "../components/LeftSectionHeart";
import RightSection from "../components/RightSectionHeart";
import Popup from "../components/PopupHeart";
import TutorialPopupHeart from "../components/TutorialPopupHeart";
import "../styles/styles.css";
import PageTitle from "../components/page/PageTitle";

const HeartScreen = () => {
    const [showAboutPopup, setShowAboutPopup] = useState(false);
    const [showTutorialPopup, setShowTutorialPopup] = useState(false);
    const navigate = useNavigate(); 

    return (
        <div>
        <PageTitle title="Heart Attack Risk Indicator" />
            <div className="flex h-screen w-screen">
                
                <div className="w-1/4 h-full">
                    <LeftSection
                        onHomeClick={() => {
                            console.log("Home button clicked");
                            navigate("/");
                        }}

                        onAboutClick={() => {
                            console.log("About button clicked"); 
                            setShowAboutPopup(true);
                        }}
                        onTutorialClick={() => {
                            console.log("Tutorial button clicked");
                            setShowTutorialPopup(true);
                        }}
                    />
                </div>

                <div className="w-3/4 h-full">
                    <RightSection />
                </div>

                {showAboutPopup && (
                    <Popup onClose={() => setShowAboutPopup(false)} />
                )}
                {showTutorialPopup && (
                    <TutorialPopupHeart onClose={() => setShowTutorialPopup(false)} />
                )}
            </div>
        </div>
    );
};

export default HeartScreen;