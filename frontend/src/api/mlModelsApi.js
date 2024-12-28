import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';

const mlModelsApi = {
    getPrediction: async (data) => {
        try {
            const response = await axios.post(`${API_URL}/predict`, data, {
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
};

export default mlModelsApi;