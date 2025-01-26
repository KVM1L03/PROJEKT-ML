import React, { useState, useEffect } from "react";
import PopoutFormCVD from "./PopoutFormCVD";
import Chart from "./Chart";
import { fetchCVDChartData } from "../data/chartData";
import { saveMeasurement } from "../utils/storage";
import mlModelsApi from "../api/mlModelsApi";
import "../styles/styles.css"; // Import your CSS file

const RightSectionHeart = () => {
    const [showCvdPopup, setShowCvdPopup] = useState(false);
    const [risk, setRisk] = useState(null);
    const [chartConfig, setChartConfig] = useState([]);
    const [selectedChartIndex, setSelectedChartIndex] = useState(0);

    useEffect(() => {
        const loadChartData = async () => {
            const charts = await fetchCVDChartData();
            setChartConfig(charts);
        };
        loadChartData();
    }, []);

    const handleChartSwitch = (index) => {
        setSelectedChartIndex(index);
    };

    const handleCvdMeasureClick = () => {
        setShowCvdPopup(true);
    };

    const closeCvdPopup = () => {
        setShowCvdPopup(false);
    };


    const handleCvdFormSubmit = async (formData) => {
        const { age, gender, height, weight, systolic_bp, diastolic_bp, cholesterol, glucose, smoke, alcohol, physical_activity } = formData;

        const dataToSend = {
            age,
            gender,
            height,
            weight,
            systolic_bp,
            diastolic_bp,
            cholesterol,
            glucose,
            smoke,
            alcohol,
            physical_activity,
        };

        await saveMeasurement(dataToSend);
        await getPrediction(dataToSend);
        setShowCvdPopup(false);

        const charts = await fetchCVDChartData();
        setChartConfig(charts);
    };

    

    const getPrediction = async (data) => {
        try {
            const response = await mlModelsApi.getCvdPrediction(data);
            const prediction = response.prediction[0];

            if (prediction === 1) {
                setRisk("High risk of heart disease");
            } else if (prediction === 0) {
                setRisk("Low risk of heart disease");
            } else {
                setRisk("Unable to determine risk");
            }

            console.log("Prediction:", prediction);
        } catch (error) {
            console.error("Error fetching prediction:", error);
        }
    };

    return (
        <div className="right-section">
            <div className="container-text-button">
                <h1>Heart Attack Risk Indicator</h1>
                
                <button
                    className="measure-button"
                    onClick={handleCvdMeasureClick}
                >
                    Add CVD Measurement
                </button>

                
                <div className="risk-indicator">
                <p>
                {risk 
                    ? risk 
                    : (
                    <>
                        Check the prediction of heart disease based on AI.<br />
                        Remember, our model is accurate in <span>72%</span>.
                    </>
                    )}
                </p>


                </div>
            
            </div>

            {showCvdPopup && <PopoutFormCVD onSubmit={handleCvdFormSubmit} onClose={closeCvdPopup} />}

            <div className="chart-container">
                <div className="chart-buttons">
                    {chartConfig.map((chart, index) => (
                        <button
                            key={index}
                            onClick={() => handleChartSwitch(index)}
                            className="px-4 py-2 bg-gray-200 text-black rounded font-bold"
                        >
                            {chart.title}
                        </button>
                    ))}
                </div>
                {chartConfig.length > 0 && (
                    <Chart
                        data={chartConfig[selectedChartIndex].data}
                        title={chartConfig[selectedChartIndex].title}
                    />
                )}
            </div>
        </div>
    );
};

export default RightSectionHeart;