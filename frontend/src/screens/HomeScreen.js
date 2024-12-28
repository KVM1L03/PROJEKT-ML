import React, { useState } from "react";
import PopupForm from "../components/PopoutForm";
import mlModelsApi from "../api/mlModelsApi";
import Chart from "../components/Chart";
import charts from "../data/chartData"; // Importing chart data

const HomeScreen = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [heartRate, setHeartRate] = useState(80);
    const [risk, setRisk] = useState(null);

    const [chartConfig, setChartConfig] = useState(charts[0]);

    const handleChartSwitch = (index) => {
        setChartConfig(charts[index]);
    };

    const handleMeasureClick = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const handleFormSubmit = (formData) => {
        console.log("Form data submitted:", formData);

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

        getPrediction(dataToSend);
        setShowPopup(false);
    };

    const getPrediction = async (data) => {
        try {
            const response = await mlModelsApi.getPrediction(data);
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
        <div
            className="relative flex size-full min-h-screen flex-col bg-[#171111] justify-between overflow-x-hidden items-center"
            style={{ fontFamily: "Manrope, 'Noto Sans', sans-serif" }}
        >
            <header className="w-full bg-[#171111] p-4 pb-2 text-center">
                <h1 className="text-white text-2xl font-bold tracking-tight">AI Health</h1>
            </header>

            <section className="w-full text-center py-4">
                <h3 className="text-white text-lg font-bold">Heart Attack Risk Indicator</h3>
                <div className="flex items-center gap-4 bg-[#171111] px-4 py-2">
                </div>
            </section>

            {showPopup && <PopupForm onSubmit={handleFormSubmit} onClose={closePopup} />}

            <button
                className="px-6 py-2 bg-[#df2020] text-white font-bold rounded-2xl mt-6 mb-10"
                onClick={handleMeasureClick}
            >
                Add Measurement
            </button>

            <section className="text-center py-4">
                <div className="flex flex-wrap gap-4 justify-center py-6">
                    <div className="min-w-72 flex-1 flex flex-col gap-2 rounded-xl border border-[#523d3d] p-6 text-center">
                        <p className="text-white text-base font-medium">
                            {risk ? risk : "Check the prediction of heart disease based on AI"}
                        </p>
                        <p className="text-[#b79e9e] text-sm">
                            Our model is acccurate in <span className="text-[#0bda0b] font-medium">73%</span>
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-6">
                <div className="flex justify-center gap-4 pb-4">
                    {charts.map((chart, index) => (
                        <button
                            key={index}
                            onClick={() => handleChartSwitch(index)}
                            className="px-4 py-2 bg-white text-black rounded font-bold"
                        >
                            {chart.title}
                        </button>
                    ))}
                </div>
                <Chart
                    data={chartConfig.data}
                    title={chartConfig.title}
                    xAxisRange={chartConfig.xAxisRange}
                />
            </section>
        </div>
    );
};

export default HomeScreen;
