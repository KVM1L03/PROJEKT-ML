import { getMeasurements } from '../utils/storage';

const fetchChartData = async () => {
    const measurements = await getMeasurements();
    return [
        {
            title: "Weight (kg)",
            data: measurements.map((m, index) => ({ x: index + 1, y: m.weight })),
            xAxisRange: measurements.length,
        },
        {
            title: "Systolic Blood Pressure (mmHg)",
            data: measurements.map((m, index) => ({ x: index + 1, y: m.systolic_bp })),
            xAxisRange: measurements.length,
        },
        {
            title: "Diastolic Blood Pressure (mmHg)",
            data: measurements.map((m, index) => ({ x: index + 1, y: m.diastolic_bp })),
            xAxisRange: measurements.length,
        },
    ];
};

export default fetchChartData;