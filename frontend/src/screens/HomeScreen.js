import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";
import PageTitle from "../components/page/PageTitle";

const HomeScreen = () => {
    const navigate = useNavigate();

    return (
        <div>
            <PageTitle title="Home" />
            <div className="flex flex-col items-center justify-center h-screen">
                {/* Title */}
                <h1 className="text-4xl font-bold mb-4">Welcome to BeHealthyAI</h1>

                {/* Text about the project */}
                <p className="text-lg text-center mb-8 max-w-2xl">
                    BeHealthyAI is a health monitoring application that helps you track your heart health and sleep patterns. 
                    Use the buttons below to explore the features.
                </p>

                {/* Buttons */}
                <div className="flex gap-4">
                    <button
                        className="px-6 py-2 bg-[#CD0B23] text-white font-bold rounded-lg"
                        onClick={() => navigate("/heart")} 
                    >
                        Heart Health
                    </button>
                    <button
                        className="px-6 py-2 bg-[#CD0B23] text-white font-bold rounded-lg"
                        onClick={() => navigate("/sleep")} 
                    >
                        Sleep Patterns
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeScreen;