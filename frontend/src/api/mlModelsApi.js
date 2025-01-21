import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';

const mlModelsApi = {
    getCvdPrediction: async (data) => {
        try {
            console.log("Data sent to /predict-cvd:", data);
            const response = await axios.post(`${API_URL}/predict-cvd`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error getting prediction:', error);
            throw error;
        }
    },

    getSleepPrediction: async (data) => {
        try {
            console.log("Data sent to /predict-sleep:", data);
            const response = await axios.post(`${API_URL}/predict-sleep`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error getting sleep prediction:', error);
            throw error;
        }
    },
};

export default mlModelsApi;
