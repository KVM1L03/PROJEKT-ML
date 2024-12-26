import React from 'react';

const TrainingScreen = () => {
    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-[#171111] dark group/design-root overflow-x-hidden"
            style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
        >
            <div className="flex items-center bg-[#171111] p-4 pb-2 justify-between">
                <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12 pr-12">
                    Personalized Training
                </h2>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Your Plans
            </h2>

            {/** Training Plans Section */}
            <div className="p-4 @container">
                <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
                    <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                        style={{
                            backgroundImage:
                                'url("https://cdn.usegalileo.ai/sdxl10/7a890dd5-1c8c-49da-9146-6d4924e351fe.png")',
                        }}
                    ></div>
                    <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                        <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                            Strength &amp; Cardio
                        </p>
                        <div className="flex items-end gap-3 justify-between">
                            <p className="text-[#b79e9e] text-base font-normal leading-normal">2 workouts</p>
                        </div>
                    </div>
                </div>
            </div>

            {/** Repeat similar blocks for other plans */}

            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Upcoming Sessions
            </h2>

            {/** Upcoming Sessions Section */}
            <div className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-xl">
                    <div className="flex flex-col gap-1 flex-[2_2_0px]">
                        <p className="text-white text-base font-bold leading-tight">Core and Cardio</p>
                        <p className="text-[#b79e9e] text-sm font-normal leading-normal">Today at 7:00 PM</p>
                    </div>
                    <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                        style={{
                            backgroundImage:
                                'url("https://cdn.usegalileo.ai/sdxl10/35297cd2-fa0a-4b7c-901d-021d2601c7e9.png")',
                        }}
                    ></div>
                </div>
            </div>

            {/** Progress Section */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                My Progress
            </h2>
            <div className="flex flex-wrap gap-4 px-4 py-6">
                <div className="flex min-w-72 flex-1 flex-col gap-2">
                    <p className="text-white text-base font-medium leading-normal">Workouts</p>
                    <p className="text-white tracking-light text-[32px] font-bold leading-tight truncate">+2%</p>
                    <div className="flex gap-1">
                        <p className="text-[#b79e9e] text-base font-normal leading-normal">This Week</p>
                        <p className="text-[#0bda0b] text-base font-medium leading-normal">+2%</p>
                    </div>
                    <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                        {['50%', '30%', '20%', '20%', '90%', '100%', '30%'].map((height, index) => (
                            <div key={index} className="border-[#b79e9e] bg-[#382929] border-t-2 w-full" style={{ height }}></div>
                        ))}
                    </div>
                </div>

                <div className="flex min-w-72 flex-1 flex-col gap-2">
                    <p className="text-white text-base font-medium leading-normal">Calories Burned</p>
                    <p className="text-white tracking-light text-[32px] font-bold leading-tight truncate">+1%</p>
                    <div className="flex gap-1">
                        <p className="text-[#b79e9e] text-base font-normal leading-normal">This Week</p>
                        <p className="text-[#0bda0b] text-base font-medium leading-normal">+1%</p>
                    </div>
                    <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                        {['40%', '60%', '50%', '40%', '80%', '100%', '80%'].map((height, index) => (
                            <div key={index} className="border-[#b79e9e] bg-[#382929] border-t-2 w-full" style={{ height }}></div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="h-5 bg-[#171111]"></div>
        </div>
    );
};

export default TrainingScreen;
