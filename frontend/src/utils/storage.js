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

export const clearMeasurements = async () => {
    try {
        localStorage.removeItem('measurements');
    } catch (error) {
        console.error('Error clearing measurements:', error);
    }
};

export const saveSleepScore = async (score) => {
    try {
        const sleepScores = await getSleepScores();
        sleepScores.push(score);
        localStorage.setItem('sleepScores', JSON.stringify(sleepScores));
    } catch (error) {
        console.error('Error saving sleep score:', error);
    }
}

export const getSleepScores = async () => {
    try {
        const sleepScores = localStorage.getItem('sleepScores');
        const parsedSleepScores = sleepScores ? JSON.parse(sleepScores) : [];
        return parsedSleepScores.slice(-30);
    } catch (error) {
        console.error('Error getting sleep scores:', error);
        return [];
    }
}

export const clearSleepScores = async () => {
    try {
        localStorage.removeItem('sleepScores');
    } catch (error) {
        console.error('Error clearing sleep scores:', error);
    }
}