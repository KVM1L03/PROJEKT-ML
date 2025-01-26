import React, { useState } from "react";
import step1 from "../styles/photos/sleep/step1.jpg";
import step2 from "../styles/photos/sleep/step2.jpg";
import step3 from "../styles/photos/sleep/step3.jpg";

const TutorialPopupSleep = ({ onClose }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        {
            title: "Step 1: Start Measurement",
            content: "To begin, click on the 'Add Measurement' button located in the main interface. This will open the measurement form.",
            image: step1,
        },
        {
            title: "Step 2: Enter Your Measurements",
            content: "Fill out the form with your personal data, such as age, sleep duration, physical activity level, stress level, BMI category, and daily steps. Make sure all fields are accurate.",
            image: step2,
        },
        {
            title: "Step 3: Submit Your Data",
            content: "After entering your measurements, click the 'Submit' button to save your data. This will process your information and calculate your sleep score.",
            image: step3,
        },
        {
            title: "Step 4: Check Your Score",
            content: "Once your data is submitted, you can view your sleep score on the chart. The chart will display your results and trends over time.",
        },
    ];

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="overlay">
            <div className="tutorial-popup">
                <div className="tutorial-step">
                    <h2>{steps[currentStep].title}</h2>
                    <p>{steps[currentStep].content}</p>
                    {steps[currentStep].image && (
                        <img
                            src={steps[currentStep].image}
                            alt={`Step ${currentStep + 1}`}
                            className="tutorial-step-img"
                        />
                    )}
                </div>
                <div className="tutorial-navigation">
                    <button
                        onClick={handlePrevious}
                        disabled={currentStep === 0}
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={currentStep === steps.length - 1}
                    >
                        Next
                    </button>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default TutorialPopupSleep;