import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Chart = ({ data, title, height = 350 }) => {
    const yValues = data.map(point => point.y);
    const yMin = Math.min(...yValues) - 5; 
    const yMax = Math.max(...yValues) + 5;

    const xLabels = data.map((point, index) => `Measurement ${index + 1}`);

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
            background: '#F0F0F0',
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            colors: ['#CD0B23'],
        },
        title: {
            text: title || 'Static Chart',
            align: 'left',
            style: {
                color: '#333333', 
            },
        },
        markers: {
            size: 5,
            colors: ['#CD0B23'],
        },
        xaxis: {
            type: 'category', 
            categories: xLabels,
            labels: {
                style: {
                    colors: '#333333', 
                },
            },
        },
        yaxis: {
            min: yMin, 
            max: yMax, 
            labels: {
                style: {
                    colors: '#333333',
                },
            },
        },
        legend: {
            show: false,
        },
        grid: {
            borderColor: '#CCCCCC',
        },
        tooltip: {
            theme: 'light',
            marker: {
                show: true,
                fillColors: ['#CD0B23'], 
            },
        },
        plotOptions: {
            line: {
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        type: 'vertical',
                        shadeIntensity: 0.5,
                        gradientToColors: ['#CD0B23'], 
                        inverseColors: false,
                        opacityFrom: 0.8,
                        opacityTo: 0.2,
                    },
                },
            },
        },
    };

    const series = [
        {
            name: 'Measurement: ',
            data: data.map(point => point.y) || [],
        },
    ];

    return (
        <div className="w-full bg-[#F0F0F0]">
            <div id="chart">
                <ReactApexChart options={options} series={series} type="line" height={height} />
            </div>
        </div>
    );
};

export default Chart;