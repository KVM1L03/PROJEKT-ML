import React, { useState } from 'react';

const PopupForm = ({ onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        age: '',
        gender: '',
        height: '',
        weight: '',
        systolic_bp: '',
        diastolic_bp: '',
        cholesterol: '',
        glucose: '',
        smoke: '',
        alcohol: '',
        physical_activity: '',
    });

    const validateInput = () => {
        const { age, gender, height, weight, systolic_bp, diastolic_bp, cholesterol, glucose, smoke, alcohol, physical_activity } = formData;

        if (!age || age <= 0) return 'Age must be a positive number.';
        if (gender !== '1' && gender !== '2') return 'Gender must be 1 (Woman) or 2 (Man).';
        if (!height || height < 1 || height > 250) return 'Height must be between 1 and 250 cm.';
        if (!weight || weight < 0 || weight > 500) return 'Weight must be between 0 and 500 kg.';
        if (!systolic_bp || systolic_bp < 80 || systolic_bp > 200) return 'Systolic blood pressure must be between 80 and 200.';
        if (!diastolic_bp || diastolic_bp < 40 || diastolic_bp > 120) return 'Diastolic blood pressure must be between 40 and 120.';
        if (!cholesterol || cholesterol < 1 || cholesterol > 10) return 'Cholesterol level must be between 1 and 10.';
        if (!glucose || glucose < 1 || glucose > 10) return 'Glucose level must be between 1 and 10.';
        if (smoke !== '0' && smoke !== '1') return 'Smoking must be 0 (No) or 1 (Yes).';
        if (alcohol !== '0' && alcohol !== '1') return 'Alcohol must be 0 (No) or 1 (Yes).';
        if (physical_activity !== '0' && physical_activity !== '1') return 'Physical activity must be 0 (No) or 1 (Yes).';

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

        onSubmit(formData);
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
                <h2 className="text-center text-lg font-bold mb-4">Measurement</h2>
                <hr className="mb-4 border-[#523d3d]" />

                <form className="space-y-4" onSubmit={handleSubmit}>
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
                        <label className="block text-sm font-medium mb-1">Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            className="w-full bg-[#382929] text-white p-2 rounded"
                        >
                            <option value="">Select Gender</option>
                            <option value="1">Woman</option>
                            <option value="2">Man</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Height (cm)</label>
                        <input
                            type="number"
                            name="height"
                            value={formData.height}
                            onChange={handleInputChange}
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Enter your height (cm)"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Weight (kg)</label>
                        <input
                            type="number"
                            name="weight"
                            value={formData.weight}
                            onChange={handleInputChange}
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Enter your weight (kg)"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Systolic Blood Pressure</label>
                        <input
                            type="number"
                            name="systolic_bp"
                            value={formData.systolic_bp}
                            onChange={handleInputChange}
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Enter your systolic BP"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Diastolic Blood Pressure</label>
                        <input
                            type="number"
                            name="diastolic_bp"
                            value={formData.diastolic_bp}
                            onChange={handleInputChange}
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Enter your diastolic BP"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Cholesterol (1-10)</label>
                        <input
                            type="number"
                            name="cholesterol"
                            value={formData.cholesterol}
                            onChange={handleInputChange}
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Enter your cholesterol level"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Glucose (1-10)</label>
                        <input
                            type="number"
                            name="glucose"
                            value={formData.glucose}
                            onChange={handleInputChange}
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Enter your glucose level"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Smoking</label>
                        <select
                            name="smoke"
                            value={formData.smoke}
                            onChange={handleInputChange}
                            className="w-full bg-[#382929] text-white p-2 rounded"
                        >
                            <option value="">Select Smoking Status</option>
                            <option value="0">No</option>
                            <option value="1">Yes</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Alcohol Intake</label>
                        <select
                            name="alcohol"
                            value={formData.alcohol}
                            onChange={handleInputChange}
                            className="w-full bg-[#382929] text-white p-2 rounded"
                        >
                            <option value="">Select Alcohol Intake</option>
                            <option value="0">No</option>
                            <option value="1">Yes</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Physical Activity</label>
                        <select
                            name="physical_activity"
                            value={formData.physical_activity}
                            onChange={handleInputChange}
                            className="w-full bg-[#382929] text-white p-2 rounded"
                        >
                            <option value="">Select Physical Activity</option>
                            <option value="0">No</option>
                            <option value="1">Yes</option>
                        </select>
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

export default PopupForm;