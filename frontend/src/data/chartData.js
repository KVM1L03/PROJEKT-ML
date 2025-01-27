import { getMeasurements, getSleepScores } from '../utils/storage';

const fetchCVDChartData = async () => {
    const measurements = await getMeasurements();
    if (!measurements || measurements.length === 0) {
        return [];
    }

    return [
        {
            title: "Weight (kg)",
            data: measurements.map((m, index) => ({ x: index + 1, y: m.weight })).filter(d => d.y !== undefined),
            xAxisRange: measurements.length,
        },
        {
            title: "Systolic Blood Pressure (mmHg)",
            data: measurements.map((m, index) => ({ x: index + 1, y: m.ap_hi })).filter(d => d.y !== undefined),
            xAxisRange: measurements.length,
        },
        {
            title: "Diastolic Blood Pressure (mmHg)",
            data: measurements.map((m, index) => ({ x: index + 1, y: m.ap_lo })).filter(d => d.y !== undefined),
            xAxisRange: measurements.length,
        },
    ];
};

const fetchSleepChartData = async () => {
    const sleepScores = await getSleepScores();
    if (!sleepScores || sleepScores.length === 0) {
        return [];
    }

    return [
        {
            title: "Sleep Score",
            data: sleepScores.map((s, index) => ({ x: index + 1, y: s })).filter(d => d.y !== undefined),
            xAxisRange: sleepScores.length,
        },
    ];
};

export { fetchCVDChartData, fetchSleepChartData };