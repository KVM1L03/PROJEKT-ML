export const saveMeasurement = async (measurement) => {
    let measurements = await getMeasurements();
    if (!measurements) {
        measurements = [];
    }
    measurements.push(measurement);
    localStorage.setItem('measurements', JSON.stringify(measurements));
};

export const getMeasurements = async () => {
    const measurements = localStorage.getItem('measurements');
    return measurements ? JSON.parse(measurements) : [];
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