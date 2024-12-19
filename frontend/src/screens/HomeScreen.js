import React, { useEffect, useState } from "react";
import { fetchWeatherData } from "../api/openweatherApi";

function HomeScreen() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [waterRequirement, setWaterRequirement] = useState("8.3 liters");

    useEffect(() => {
        const getWeather = async () => {
            try {
                const data = await fetchWeatherData("Katowice");
                setWeatherData(data);
            } catch (err) {
                setError("Failed to fetch weather data.");
            } finally {
                setLoading(false);
            }
        };

        getWeather();
    }, []);

    const handleRefresh = () => {
        setLoading(true);
        setError(null);
        const refreshWeather = async () => {
            try {
                const data = await fetchWeatherData("Katowice");
                setWeatherData(data);
            } catch (err) {
                setError("Failed to fetch weather data.");
            } finally {
                setLoading(false);
            }
        };
        refreshWeather();
    };

    const handleWaterNow = () => {
        alert("Watering started!");
    };

    const handleIdentifyDisease = () => {
        alert("Disease identification not implemented yet.");
    };

    if (loading) {
        return <h2 className="text-center text-white">Loading...</h2>;
    }

    if (error) {
        return <h2 className="text-center text-red-500">{error}</h2>;
    }

    return (
        <div className="relative flex size-full min-h-screen flex-col bg-[#111814] dark group/design-root overflow-x-hidden">
            {/* Header */}
            <div className="flex items-center bg-[#111814] p-4 pb-2 justify-between">
                <div className="text-white flex size-12 shrink-0 items-center">
                    {/* Search for city icon */}
                </div>
                <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1">
                    Garden AI
                </h2>
                <div className="flex w-12 items-center justify-end">
                    <button className="flex items-center justify-center rounded-full h-12 bg-transparent text-white">
                        {/* Settings Icon */}
                    </button>
                </div>
            </div>

            {/* Water Requirement */}
            <div className="flex flex-wrap gap-4 p-4">
                <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#29382f]">
                    <p className="text-white text-base font-medium leading-normal">
                        Estimated water requirement
                    </p>
                    <p className="text-white tracking-light text-2xl font-bold leading-tight">
                        {waterRequirement}
                    </p>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center">
                <div className="flex flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3">
                    <button
                        onClick={handleRefresh}
                        className="flex items-center justify-center rounded-full h-12 px-5 bg-[#14b858] text-[#111814] text-base font-bold w-full"
                    >
                        Refresh
                    </button>
                    <button
                        onClick={handleWaterNow}
                        className="flex items-center justify-center rounded-full h-12 px-5 bg-[#29382f] text-white text-base font-bold w-full"
                    >
                        Water Now
                    </button>
                    <button
                        onClick={handleIdentifyDisease}
                        className="flex items-center justify-center rounded-full h-12 px-5 bg-[#29382f] text-white text-base font-bold w-full"
                    >
                        Identify Disease
                    </button>
                </div>
            </div>

            {/* Weather Information */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Weather
            </h2>
            <div className="p-4">
                <div className="flex items-center gap-4 rounded-xl bg-[#29382f] p-4">
                    {/* Weather Icon */}
                    <div
                        className="w-12 h-12 bg-center bg-no-repeat bg-contain"
                        style={{
                            backgroundImage: `url('http://openweathermap.org/img/wn/${weatherData.icon}@2x.png')`,
                        }}
                    ></div>
                    {/* Weather Data */}
                    <div className="flex flex-col">
                        <p className="text-[#9db8a9] text-sm font-normal leading-normal">
                            {weatherData.weather.toUpperCase()}                        </p>
                        <p className="text-white text-base font-bold leading-tight">
                            {weatherData.city} {weatherData.temperature}°
                        </p>
                        <p className="text-[#9db8a9] text-sm font-normal leading-normal">
                            {weatherData.time}
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-5 bg-[#111814]"></div>
        </div>
    );
}

export default HomeScreen;
