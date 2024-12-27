import React from 'react';

const PopupForm = ({ onClose }) => {
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

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Age</label>
                        <input
                            type="number"
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Enter your age"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Height</label>
                        <input
                            type="number"
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Enter your height (cm)"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Weight</label>
                        <input
                            type="number"
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Enter your weight (kg)"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Gender</label>
                        <input
                            type="text"
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Enter your gender"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Systolic Blood Pressure</label>
                        <input
                            type="number"
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Enter your systolic BP"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Cholesterol</label>
                        <input
                            type="number"
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Enter your cholesterol level"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Glucose</label>
                        <input
                            type="number"
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Enter your glucose level"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Smoking</label>
                        <input
                            type="text"
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Do you smoke? (Yes/No)"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Alcohol Intake</label>
                        <input
                            type="text"
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Alcohol intake (Yes/No)"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Physical activity</label>
                        <input
                            type="text"
                            className="w-full bg-[#382929] text-white p-2 rounded"
                            placeholder="Physical activity (Yes/No)"
                        />
                    </div>
                </form>

                <div className="mt-6 flex justify-between">
                    <button
                        onClick={''}
                        className="px-4 py-2 bg-[#df2020] text-white font-bold rounded">
                        Submit
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-[#df2020] text-white font-bold rounded">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopupForm;