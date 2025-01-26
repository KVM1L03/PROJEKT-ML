import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LeftSectionSleep from "../components/LeftSectionSleep";
import RightSectionSleep from "../components/RightSectionSleep";
import PopupSleep from "../components/PopupSleep";
import TutorialPopupSleep from "../components/TutorialPopupSleep";
import "../styles/styles.css";
import PageTitle from "../components/page/PageTitle";

const SleepScreen = () => {
    const [showAboutPopup, setShowAboutPopup] = useState(false);
    const [showTutorialPopup, setShowTutorialPopup] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
            <PageTitle title="Sleep Prediction" />
            <div className="flex h-screen w-screen">
                <div className="w-1/4 h-full">
                    <LeftSectionSleep
                        onHomeClick={() => navigate("/")}
                        onAboutClick={() => setShowAboutPopup(true)}
                        onTutorialClick={() => setShowTutorialPopup(true)}
                    />
                </div>

                <div className="w-3/4 h-full">
                    <RightSectionSleep />
                </div>

                {showAboutPopup && (
                    <PopupSleep onClose={() => setShowAboutPopup(false)} />
                )}
                {showTutorialPopup && (
                    <TutorialPopupSleep onClose={() => setShowTutorialPopup(false)} />
                )}
            </div>
        </div>
    );
};

export default SleepScreen;