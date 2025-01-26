import React, { useState } from 'react';

const PopoutFormSleep = ({ onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        gender: '',
        age: '',
        occupation: '',
        sleep_duration: '',
        physical_activity_level: '',
        stress_level: '',
        bmi_category: '',
        daily_steps: '',
    });

    const validateInput = () => {
        const { gender, age, occupation, sleep_duration, physical_activity_level, stress_level, bmi_category, daily_steps } = formData;

        if (!gender || (gender !== 'Male' && gender !== 'Female')) return 'Gender must be Male or Female.';
        if (!age || age <= 0) return 'Age must be a positive number.';
        if (!occupation) return 'Occupation cannot be empty.';
        if (!sleep_duration || sleep_duration < 0 || sleep_duration > 24) return 'Sleep Duration must be between 0 and 24 hours.';
        if (!physical_activity_level || physical_activity_level < 0 || physical_activity_level > 1440) return 'Physical Activity Level must be between 0 and 1440 minutes.';
        if (!stress_level || stress_level < 1 || stress_level > 10) return 'Stress Level must be between 1 and 10.';
        if (!bmi_category || (bmi_category !== 'Underweight' && bmi_category !== 'Normal' && bmi_category !== 'Overweight' && bmi_category !== 'Obese')) return 'BMI Category must be Underweight, Normal, Overweight, or Obese.';
        if (!daily_steps || daily_steps < 0) return 'Daily Steps must be a positive number.';

        return null;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errorMessage = validateInput();
        if (errorMessage) {
            alert(errorMessage);
            return;
        }

        // Convert form data to the required format
        const formattedData = {
            Gender: formData.gender,
            Age: parseInt(formData.age, 10),
            Occupation: formData.occupation,
            "Sleep Duration": parseFloat(formData.sleep_duration),
            "Physical Activity Level": parseFloat(formData.physical_activity_level),
            "Stress Level": parseInt(formData.stress_level, 10),
            "BMI Category": formData.bmi_category,
            "Daily Steps": parseInt(formData.daily_steps, 10),
        };

        console.log("Formatted data to submit:", formattedData);

        onSubmit(formattedData);
        onClose();
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={onClose}
        >
            <div
                className="bg-[#171111] text-white p-6 rounded-lg w-[90%] max-w-md max-h-[90vh] overflow-y-auto no-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-center text-lg font-bold mb-4">Sleep Measurement</h2>
                <hr className="mb-4 border-[#523d3d]" />

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium mb-1">Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            className="w-full bg-[#382929] text-white p-2 rounded"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Age</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Enter your age"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Occupation</label>
                        <input
                            type="text"
                            name="occupation"
                            value={formData.occupation}
                            onChange={handleInputChange}
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Enter your occupation"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Sleep Duration (hours)</label>
                        <input
                            type="number"
                            name="sleep_duration"
                            value={formData.sleep_duration}
                            onChange={handleInputChange}
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Enter your sleep duration (hours)"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Physical Activity Level (minutes/day)</label>
                        <input
                            type="number"
                            name="physical_activity_level"
                            value={formData.physical_activity_level}
                            onChange={handleInputChange}
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Enter your physical activity level (minutes/day)"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Stress Level (1-10)</label>
                        <input
                            type="number"
                            name="stress_level"
                            value={formData.stress_level}
                            onChange={handleInputChange}
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Enter your stress level (1-10)"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">BMI Category</label>
                        <select
                            name="bmi_category"
                            value={formData.bmi_category}
                            onChange={handleInputChange}
                            className="w-full bg-[#382929] text-white p-2 rounded"
                        >
                            <option value="">Select BMI Category</option>
                            <option value="Underweight">Underweight</option>
                            <option value="Normal">Normal</option>
                            <option value="Overweight">Overweight</option>
                            <option value="Obese">Obese</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Daily Steps</label>
                        <input
                            type="number"
                            name="daily_steps"
                            value={formData.daily_steps}
                            onChange={handleInputChange}
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Enter your daily steps"
                        />
                    </div>
                </form>

                <div className="mt-6 flex justify-between">
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-[#df2020] text-white font-bold rounded"
                    >
                        Submit
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-[#df2020] text-white font-bold rounded"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopoutFormSleep;