import axios from "axios";

const API_BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

/**
 * Fetch weather data for a specific location.
 * @param {string} city - Name of the city.
 * @returns {Promise<Object>} - Weather data including temperature, conditions, etc.
 */
export const fetchWeatherData = async (city) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/weather`, {
            params: {
                q: city,
                appid: API_KEY,
                units: "metric", 
            },
        });

        const data = response.data;

        return {
            city: data.name,
            temperature: data.main.temp,
            weather: data.weather[0].description,
            icon: data.weather[0].icon,
            timezone: data.timezone,
        };
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        throw error;
    }
};
