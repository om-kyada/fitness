import records from '../../../assets/json/records'
import '../../../assets/styles/common.css'

// import React, { useState } from 'react';
import {
    Chart as chartJS,
    BarElement,
    CategoryScale,
    LinearScale, // y
    Tooltip,
    Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
chartJS.register(
    BarElement,
    CategoryScale,
    LinearScale, // y
    Tooltip,
    Legend
);

let activities = []
let caloriesBurned = []
let heartAverage = []

records.activities.forEach((date) => {
    activities.push(date.name)
    caloriesBurned.push(date.calories_burned)
    heartAverage.push(date.heart_rate.average)
})
const options = {
    plugins: {
        legend: {
            position: "top",
            backgroundColor: "rgba(255, 99, 132, 0.5)"
        }
    }
};
const date = activities
const data = {
    labels: date,
    datasets: [
        {
            label: "Calories",
            data: caloriesBurned,
            backgroundColor: "rgba(255, 99, 132, 0.5)"
        },
        {
            label: "Heart Rate",
            data: heartAverage,
            backgroundColor: "rgba(22, 58, 184,53%)"
        }
    ]
};

function BarChart() {


    return (
        <div className="chart-container">
            <Bar options={options} data={data} />
        </div>
    )
}
export default BarChart;