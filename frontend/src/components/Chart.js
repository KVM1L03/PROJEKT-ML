import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Chart = ({ data, title, xAxisRange, height = 350 }) => {
    const yValues = data.map(point => point.y);
    const yMin = Math.min(...yValues) - 5; 
    const yMax = Math.max(...yValues) + 5;

    const xLabels = data.map(point => `Day ${point.x}`);

    const options = {
        chart: {
            id: 'static-chart',
            height: height,
            type: 'line',
            animations: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            colors: ['#ffffff'], 
        },
        title: {
            text: title || 'Static Chart',
            align: 'left',
            style: {
                color: '#ffffff',
            },
        },
        markers: {
            size: 0, 
        },
        xaxis: {
            type: 'category', 
            categories: xLabels, // Use custom labels for the x-axis
            labels: {
                style: {
                    colors: '#ffffff', 
                },
            },
        },
        yaxis: {
            min: yMin, 
            max: yMax, 
            labels: {
                style: {
                    colors: '#ffffff',
                },
            },
        },
        legend: {
            show: false,
        },
        grid: {
            borderColor: '#444444', 
        },
    };

    const series = [
        {
            name: 'Data Series',
            data: data.map(point => [point.x, point.y]) || [],
        },
    ];

    return (
        <div className="flex flex-col items-center justify-between min-h-screen w-full bg-[#171111] overflow-x-hidden">
            <div id="chart" className="w-full">
                <ReactApexChart options={options} series={series} type="line" height={height} />
            </div>
        </div>
    );
};

export default Chart;