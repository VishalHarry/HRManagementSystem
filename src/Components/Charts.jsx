import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Charts = ({ employee, department }) => {
  // Sample data for each performance metric
  const productivityData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Productivity',
        data: [80, 85, 90, 88], // Data for productivity
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const qualityOfWorkData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Quality of Work',
        data: [75, 80, 85, 80], // Data for quality of work
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const timelinessData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Timeliness',
        data: [90, 88, 85, 95], // Data for timeliness
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  const skillsDevelopmentData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Skills Development',
        data: [60, 70, 80, 85], // Data for skills development
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-page mt-8 bg-gray-600">
      <h2 className="text-2xl font-semibold text-center mb-6">
        {employee} - {department} Performance Overview
      </h2>

      {/* Render 4 separate performance metrics charts */}
      <div className="chart-container grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Productivity Chart */}
        <div className="chart-item bg-gray-800 text-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Productivity</h3>
          <Bar data={productivityData} options={{ responsive: true }} />
        </div>

        {/* Quality of Work Chart */}
        <div className="chart-item bg-gray-800 text-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Quality of Work</h3>
          <Bar data={qualityOfWorkData} options={{ responsive: true }} />
        </div>

        {/* Timeliness Chart */}
        <div className="chart-item bg-gray-800 text-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Timeliness</h3>
          <Bar data={timelinessData} options={{ responsive: true }} />
        </div>

        {/* Skills Development Chart */}
        <div className="chart-item bg-gray-800 text-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Skills Development</h3>
          <Bar data={skillsDevelopmentData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default Charts;
