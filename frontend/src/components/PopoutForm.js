import React, { useState } from 'react';

const PopupForm = ({ onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        age: '',
        gender: '',
        height: '',
        weight: '',
        systolic_bp: '',
        diastolic_bp : '',
        cholesterol: '',
        glucose: '',
        smoke: '',
        alcohol: '',
        physical_activity: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.values(formData).some((value) => value === '')) {
            alert('Please fill in all fields.');
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
                <h2 className="text-center text-lg font-bold mb-4">Heart Rate</h2>
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
                        <input
                            type="text"
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Enter your gender"
                        />
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
                        <label className="block text-sm font-medium mb-1">Diastolic blood pressure</label>
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
                        <label className="block text-sm font-medium mb-1">Cholesterol</label>
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
                        <label className="block text-sm font-medium mb-1">Glucose</label>
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
                        <input
                            type="text"
                            name="smoke"
                            value={formData.smoke}
                            onChange={handleInputChange}
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Do you smoke? (Yes/No)"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Alcohol Intake</label>
                        <input
                            type="text"
                            name="alcohol"
                            value={formData.alcohol}
                            onChange={handleInputChange}
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Alcohol intake (Yes/No)"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Physical Activity</label>
                        <input
                            type="text"
                            name="physical_activity"
                            value={formData.physical_activity}
                            onChange={handleInputChange}
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Physical activity (Yes/No)"
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

export default PopupForm;
