import React, { useState, useEffect } from "react";
import PopoutFormSleep from "../popouts/PopoutFormSleep";
import { fetchSleepChartData } from "../../data/chartData";
import mlModelsApi from "../../api/mlModelsApi";
import "../../styles/styles.css";
import {
    ComposedChart,
    Bar,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Label,
} from "recharts";
import { clearSleepScores } from "../../utils/storage";

const SleepSection = () => {
    const [showPopout, setShowPopout] = useState(false);
    const [prediction, setPrediction] = useState(null);
    const [chartConfig, setChartConfig] = useState([]);
    const [sleepData, setSleepData] = useState([]);

    useEffect(() => {
        const loadChartData = async () => {
            const charts = await fetchSleepChartData();
            console.log('Loaded chart data:', charts); 
            setChartConfig(charts);

            const measurements = JSON.parse(localStorage.getItem("sleepMeasurements")) || [];
            const formattedData = measurements.map((measurement, index) => ({
                name: `Measure ${index + 1}`,
                sleepDuration: measurement["Sleep Duration"],
                sleepScore: measurement.predictionScore || null,
            }));
            setSleepData(formattedData);
        };
        loadChartData();
    }, []);

    const handleFormSubmit = async (data) => {
        try {
            const response = await mlModelsApi.getSleepPrediction(data);

            if (response && response.prediction) {
                const predictionValue = response.prediction[0];
                setPrediction(predictionValue);

                const measurements = JSON.parse(localStorage.getItem('sleepMeasurements')) || [];
                const newMeasurement = {
                    ...data,
                    predictionScore: predictionValue,
                };

                const isDuplicate = measurements.some(measurement =>
                    measurement["Sleep Duration"] === newMeasurement["Sleep Duration"] &&
                    measurement.predictionScore === newMeasurement.predictionScore
                );

                if (!isDuplicate) {
                    measurements.push(newMeasurement);
                    localStorage.setItem('sleepMeasurements', JSON.stringify(measurements));
                }

                const formattedData = measurements.map((measurement, index) => ({
                    name: `Day ${index + 1}`,
                    sleepDuration: measurement["Sleep Duration"],
                    sleepScore: measurement.predictionScore || null,
                }));
                setSleepData(formattedData);
            } else {
                setPrediction('No prediction received.');
            }
        } catch (error) {
            console.error('Error in sleep prediction:', error);
            setPrediction('Error occurred while getting the prediction.');
        }
    };

    const handleClearChartData = async () => {
        await clearSleepScores(); 
        localStorage.removeItem('sleepMeasurements'); 
        const charts = await fetchSleepChartData(); 
        console.log('Cleared chart data:', charts); 
        setChartConfig(charts); 
        setSleepData([]); 
        setPrediction(null); 
    };

    return (
        <div className="right-section">
            <div className="container-text-button">
                <h1>Sleep Prediction</h1>

                <button className="measure-button" onClick={() => setShowPopout(true)}>
                    Enter Sleep Data
                </button>

                {prediction && (
                    <div className="risk-indicator">
                        <p>This is your sleep score</p>
                        <p>
                            <strong>{prediction}</strong>
                        </p>
                    </div>
                )}
                {sleepData.length > 0 && (
                    <button
                        onClick={handleClearChartData}
                        className="px-4 py-2 bg-red-500 text-white rounded font-bold"
                    >
                        Clear Chart Data
                    </button>
                )}
            </div>

            {showPopout && (
                <PopoutFormSleep
                    onClose={() => setShowPopout(false)}
                    onSubmit={handleFormSubmit}
                />
            )}

            <div className="chart-container">
                <ResponsiveContainer width="100%" height={400}>
                    <ComposedChart
                        data={sleepData}
                        margin={{ top: 50, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name">
                            <Label offset={-5} position="insideBottom" />
                        </XAxis>
                        <YAxis
                            yAxisId="left"
                            label={{
                                value: "Sleep Duration (hours)",
                                angle: -90,
                                position: "insideLeft",
                            }}
                        />
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            label={{
                                value: "Sleep Score",
                                angle: -90,
                                position: "insideRight",
                            }}
                        />
                        <Tooltip />
                        <Legend />
                        <Bar
                            yAxisId="left"
                            dataKey="sleepDuration"
                            fill="#8884d8"
                            name="Sleep Duration (hours)"
                            barSize={40}
                        />
                        <Line
                            yAxisId="right"
                            type="monotone"
                            dataKey="sleepScore"
                            stroke="#82ca9d"
                            name="Sleep Score"
                            dot={{ r: 6.5 }}
                            strokeWidth={2}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default SleepSection;