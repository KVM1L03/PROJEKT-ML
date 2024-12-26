import React from "react";

const HomeScreen = () => {
    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-[#171111] dark justify-between group/design-root overflow-x-hidden"
            style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
        >
            <div>
                <div className="flex items-center bg-[#171111] p-4 pb-2 justify-between">
                    <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12 pr-12">
                        Heart Rate
                    </h2>
                </div>

                <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
                    Your heart rate is 75 bpm
                </h2>

                <div className="flex flex-wrap gap-4 px-4 py-6">
                    <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#523d3d] p-6">
                        <p className="text-white text-base font-medium leading-normal">Your Heart Rate</p>
                        <p className="text-white tracking-light text-[32px] font-bold leading-tight truncate">75 bpm</p>
                        <div className="flex gap-1">
                            <p className="text-[#b79e9e] text-base font-normal leading-normal">Now</p>
                            <p className="text-[#0bda0b] text-base font-medium leading-normal">+2%</p>
                        </div>
                        <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                            <svg
                                width="100%"
                                height="148"
                                viewBox="-3 0 478 150"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                                    fill="url(#paint0_linear_1131_5935)"
                                ></path>
                                <path
                                    d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                                    stroke="#b79e9e"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                ></path>
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_1131_5935"
                                        x1="236"
                                        y1="1"
                                        x2="236"
                                        y2="149"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#382929"></stop>
                                        <stop offset="1" stopColor="#382929" stopOpacity="0"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>

                            <div className="flex justify-around">
                                <p className="text-[#b79e9e] text-[13px] font-bold leading-normal tracking-[0.015em]">1:30</p>
                                <p className="text-[#b79e9e] text-[13px] font-bold leading-normal tracking-[0.015em]">1:40</p>
                                <p className="text-[#b79e9e] text-[13px] font-bold leading-normal tracking-[0.015em]">1:50</p>
                                <p className="text-[#b79e9e] text-[13px] font-bold leading-normal tracking-[0.015em]">2:00</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                    Heart Attack Risk Indicator
                </h3>

                <div className="flex items-center gap-4 bg-[#171111] px-4 min-h-14">
                    <div
                        className="text-white flex items-center justify-center rounded-lg bg-[#382929] shrink-0 size-10"
                        data-icon="Heart"
                        data-size="24px"
                        data-weight="regular"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                        >
                            <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z" />
                        </svg>
                    </div>
                    <p className="text-white text-base font-normal leading-normal flex-1 truncate">
                        Your risk today is low.
                    </p>
                </div>
            </div>

            <div>
                <div className="h-5 bg-[#171111]"></div>
            </div>
        </div>
    );
};

export default HomeScreen;
