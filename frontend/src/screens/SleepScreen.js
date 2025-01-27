import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideNavBar from "../components/SideNavBar";
import PopupSleep from "../components/popouts/PopupSleep";
import TutorialPopupSleep from "../components/popouts/TutorialPopupSleep";
import "../styles/styles.css";
import PageTitle from "../components/page/PageTitle";
import SleepSection from "../components/sections/SleepSection";

const SleepScreen = () => {
    const [showAboutPopup, setShowAboutPopup] = useState(false);
    const [showTutorialPopup, setShowTutorialPopup] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
            <PageTitle title="Sleep Prediction" />
            <div className="flex h-screen w-screen">
                <div className="w-1/4 h-full">
                    <SideNavBar
                        onHeartClick={() => {
                            navigate("/heart");
                        }}
                        onSleepClick={() => {
                            navigate("/sleep");
                        }}
                        onHomeClick={() => {
                            navigate("/");
                        }}

                        onAboutClick={() => {
                            setShowAboutPopup(true);
                        }}
                        onTutorialClick={() => {
                            setShowTutorialPopup(true);
                        }}
                    />
                </div>

                <div className="w-3/4 h-full">
                    <SleepSection />
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