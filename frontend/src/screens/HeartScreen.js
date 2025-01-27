import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeartSection from "../components/sections/HeartSection";
import SideNavBar from "../components/SideNavBar";
import Popup from "../components/popouts/PopupHeart";
import TutorialPopupHeart from "../components/popouts/TutorialPopupHeart";
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
                    <HeartSection />
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