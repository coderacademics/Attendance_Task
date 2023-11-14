import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import data from '../../data';
import '../../CSS/Behaviour.css';
function Behaviour() {
    const chartRef = useRef(null);
    useEffect(() => {
        const analyticsData = data["Behavioral Analytics"];

        const counts = analyticsData.reduce((acc, value) => {
            acc[value] = (acc[value] || 0) + 1;
            return acc;
        }, {});
        const labels = Object.keys(counts);
        const chartData = Object.values(counts);

        const ctx = document.getElementById('behavioralAnalyticsChart').getContext('2d');

        // Destroying the previous chart
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        // Creating a new pie chart
        chartRef.current = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: chartData,
                    backgroundColor: ['#b6042b', '#09885d'],
                    hoverBackgroundColor: ['#d50a36', '#0ba975'],
                }],
            },
        });
    }, []); // Empty dependency array to run the effect only once

    return (
        <div className='behaviour_container'>
                <h3>Behavioral Analytics Chart</h3>
            <div className='behaviour_data'>
                <canvas id="behavioralAnalyticsChart" width="200" height="200"></canvas>
            </div>
        </div>
    );
}

export default Behaviour;
