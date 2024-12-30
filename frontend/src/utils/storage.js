export const saveMeasurement = async (measurement) => {
    try {
        const measurements = await getMeasurements();
        measurements.push(measurement);
        localStorage.setItem('measurements', JSON.stringify(measurements));
    } catch (error) {
        console.error('Error saving measurement:', error);
    }
};

export const getMeasurements = async () => {
    try {
        const measurements = localStorage.getItem('measurements');
        const parsedMeasurements = measurements ? JSON.parse(measurements) : [];
        return parsedMeasurements.slice(-30);
    } catch (error) {
        console.error('Error getting measurements:', error);
        return [];
    }
};