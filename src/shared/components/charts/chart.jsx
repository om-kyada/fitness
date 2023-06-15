import records from '../../../assets/json/records'

import React from 'react';
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

console.log(records)
let dateArray = []
let heartAverage = []
let heartMax = []

records.activities.map((date) => {
    dateArray.push(date.date)
    heartAverage.push(date.heart_rate.average)
    heartMax.push(date.heart_rate.max)
})
console.log(dateArray)
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top"
        }
    }
};
const date = dateArray
// const date =   

const data = {
    labels: date
    ,
    datasets: [
        {
            label: "Heart Average",
            data: heartAverage,
            backgroundColor: "rgba(255, 99, 132, 0.5)"
        },
        {
            label: "Heart Max",
            data: heartMax,
            backgroundColor: "rgba(53, 162, 235, 0.5)"
        }
    ]
};
function Barchart() {
    return (<Bar options={options} data={data} />)
}
export default Barchart;