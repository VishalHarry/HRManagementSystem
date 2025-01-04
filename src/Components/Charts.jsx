import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components for line chart
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Charts = ({ employee, department }) => {
  // Sample data for each performance metric with black color for lines and data points
  const productivityData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Productivity',
        data: [80, 85, 90, 88], // Data for productivity
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Light black background
        borderColor: 'rgba(0, 0, 0, 1)', // Black border color (line color)
        pointBackgroundColor: 'rgba(0, 0, 0, 1)', // Black color for data points
        borderWidth: 2,
        tension: 0.4, // Smooth line curve
      },
    ],
  };

  const qualityOfWorkData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Quality of Work',
        data: [75, 80, 85, 80], // Data for quality of work
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Light black background
        borderColor: 'rgba(0, 0, 0, 1)', // Black border color (line color)
        pointBackgroundColor: 'rgba(0, 0, 0, 1)', // Black color for data points
        borderWidth: 2,
        tension: 0.4, // Smooth line curve
      },
    ],
  };

  const timelinessData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Timeliness',
        data: [90, 88, 85, 95], // Data for timeliness
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Light black background
        borderColor: 'rgba(0, 0, 0, 1)', // Black border color (line color)
        pointBackgroundColor: 'rgba(0, 0, 0, 1)', // Black color for data points
        borderWidth: 2,
        tension: 0.4, // Smooth line curve
      },
    ],
  };

  const skillsDevelopmentData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Skills Development',
        data: [60, 70, 80, 85], // Data for skills development
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Light black background
        borderColor: 'rgba(0, 0, 0, 1)', // Black border color (line color)
        pointBackgroundColor: 'rgba(0, 0, 0, 1)', // Black color for data points
        borderWidth: 2,
        tension: 0.4, // Smooth line curve
      },
    ],
  };

  return (
    <div className="chart-page mt-8 bg-gradient-to-r from-gray-900 to-gray-700 p-6 rounded-lg shadow-xl">
      <h2 className="text-4xl font-bold text-center text-white mb-8">
        {employee} - {department} Performance Overview
      </h2>

      {/* Render 2 charts per row with responsive layout */}
      <div className="chart-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Productivity Chart */}
        <div className="chart-item bg-gradient-to-r from-teal-600 to-teal-800 p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all">
          <h3 className="text-xl font-semibold text-white mb-4">Productivity</h3>
          <Line data={productivityData} options={{ responsive: true }} />
        </div>

        {/* Quality of Work Chart */}
        <div className="chart-item bg-gradient-to-r from-indigo-600 to-indigo-800 p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all">
          <h3 className="text-xl font-semibold text-white mb-4">Quality of Work</h3>
          <Line data={qualityOfWorkData} options={{ responsive: true }} />
        </div>

        {/* Timeliness Chart */}
        <div className="chart-item bg-gradient-to-r from-orange-600 to-orange-800 p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all">
          <h3 className="text-xl font-semibold text-white mb-4">Timeliness</h3>
          <Line data={timelinessData} options={{ responsive: true }} />
        </div>

        {/* Skills Development Chart */}
        <div className="chart-item bg-gradient-to-r from-pink-600 to-pink-800 p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all">
          <h3 className="text-xl font-semibold text-white mb-4">Skills Development</h3>
          <Line data={skillsDevelopmentData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default Charts;
