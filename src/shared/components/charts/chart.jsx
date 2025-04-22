import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import records from '../../../assets/json/records';
import '../../../assets/styles/common.css';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Activity Statistics',
        },
    },
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

const BarChart = () => {
    const data = {
        labels: records.activities.map(activity => activity.name),
        datasets: [
            {
                label: 'Calories Burned',
                data: records.activities.map(activity => activity.calories_burned),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Heart Rate (Avg)',
                data: records.activities.map(activity => activity.heart_rate?.average || 0),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Steps',
                data: records.activities.map(activity => activity.steps || 0),
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
            },
        ],
    };

    return (
        <div style={{ padding: '20px', width: '100%' }}>
            <Bar options={options} data={data} />
        </div>
    );
};

export default BarChart;