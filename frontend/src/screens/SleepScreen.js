import React, { useState, useEffect } from 'react';
import PopoutFormSleep from '../components/PopoutFormSleep';
import mlModelsApi from '../api/mlModelsApi';
import Chart from '../components/Chart';
import { fetchSleepChartData } from '../data/chartData';
import { saveSleepScore } from '../utils/storage';

const SleepScreen = () => {
    const [showPopout, setShowPopout] = useState(false);
    const [prediction, setPrediction] = useState(null);
    const [chartConfig, setChartConfig] = useState([]);
    const [selectedChartIndex, setSelectedChartIndex] = useState(0);

    useEffect(() => {
        const loadChartData = async () => {
            const charts = await fetchSleepChartData();
            setChartConfig(charts);
        };
        loadChartData();
    }, []);

    const handleFormSubmit = async (data) => {
        try {
            const response = await mlModelsApi.getSleepPrediction(data);

            if (response && response.prediction) {
                const predictionValue = response.prediction[0];
                setPrediction(predictionValue);
                await saveSleepScore(predictionValue);
            } else {
                setPrediction('No prediction received.');
            }

            const charts = await fetchSleepChartData();
            setChartConfig(charts);
        } catch (error) {
            console.error('Error in sleep prediction:', error);
            setPrediction('Error occurred while getting the prediction.');
        }
    };

    const handleChartSwitch = (index) => {
        setSelectedChartIndex(index);
    };

    return (
        <div className="p-6 flex flex-col items-center justify-center min-h-screen bg-[#171111] text-white">
            <h1 className="text-2xl font-bold mb-4">Sleep Prediction</h1>

            <button
                className="px-4 py-2 bg-[#df2020] text-white font-bold rounded mb-4"
                onClick={() => setShowPopout(true)}
            >
                Enter Sleep Data
            </button>

            {showPopout && (
                <PopoutFormSleep
                    onClose={() => setShowPopout(false)}
                    onSubmit={handleFormSubmit}
                />
            )}

            {prediction && (
                <section className="text-center py-4">
                    <div className="flex flex-wrap gap-4 justify-center py-6">
                        <div className="min-w-72 flex-1 flex flex-col gap-2 rounded-xl border border-[#523d3d] p-6 text-center">
                            <p className="text-white text-base font-medium">
                                {prediction}
                            </p>
                            <p className="text-white text-base">
                                This is your sleep score
                            </p>
                        </div>
                    </div>
                </section>
            )}

            <section className="py-6">
                <div className="flex justify-center gap-4 pb-4">
                    {Array.isArray(chartConfig) && chartConfig.map((chart, index) => (
                        <button
                            key={index}
                            onClick={() => handleChartSwitch(index)}
                            className="px-4 py-2 bg-white text-black rounded font-bold"
                        >
                            {chart.title}
                        </button>
                    ))}
                </div>
                {Array.isArray(chartConfig) && chartConfig.length > 0 && (
                    <Chart
                        data={chartConfig[selectedChartIndex].data}
                        title={chartConfig[selectedChartIndex].title}
                    />
                )}
            </section>
        </div>
    );
};

export default SleepScreen;