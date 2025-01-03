import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Charts = ({ employee, department }) => {
  // Sample data for each performance metric (You can replace this with actual data)
  const productivityData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Productivity',
        data: [80, 85, 90, 88], // Different data for productivity
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const qualityOfWorkData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Quality of Work',
        data: [75, 80, 85, 80], // Different data for quality of work
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
        data: [90, 88, 85, 95], // Different data for timeliness
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
        data: [60, 70, 80, 85], // Different data for skills development
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const innovationData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Innovation',
        data: [70, 75, 80, 85], // Different data for innovation
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const clientSatisfactionData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Customer/Client Satisfaction',
        data: [85, 90, 88, 92], // Different data for customer/client satisfaction
        backgroundColor: 'rgba(153, 255, 51, 0.2)',
        borderColor: 'rgba(153, 255, 51, 1)',
        borderWidth: 1,
      },
    ],
  };

  const engagementData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Employee Engagement',
        data: [80, 85, 90, 95], // Different data for employee engagement
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  const attendanceData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Attendance',
        data: [95, 98, 90, 92], // Different data for attendance
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const overallContributionData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Overall Contribution',
        data: [85, 88, 90, 92], // Different data for overall contribution
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-page mt-8 bg-gray-600">
      <h2 className="text-2xl font-semibold text-center mb-6">
        {employee} - {department} Performance Overview
      </h2>

      {/* Render charts for different performance metrics */}
      <div className="chart-container grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Productivity Chart */}
        <div className="chart-item bg-gray-800 text-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Productivity</h3>
          <Bar data={productivityData} options={{ responsive: true }} />
        </div>

        {/* Quality of Work Chart */}
        <div className="chart-item bg-gray-800 text-white  p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Quality of Work</h3>
          <Bar data={qualityOfWorkData} options={{ responsive: true }} />
        </div>

        {/* Timeliness Chart */}
        <div className="chart-item bg-gray-800 text-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Timeliness</h3>
          <Bar data={timelinessData} options={{ responsive: true }} />
        </div>

        {/* Skills Development Chart */}
        <div className="chart-item bg-gray-800 text-white  p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Skills Development</h3>
          <Bar data={skillsDevelopmentData} options={{ responsive: true }} />
        </div>

        {/* Innovation Chart */}
        <div className="chart-item bg-gray-800 text-white  p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Innovation</h3>
          <Bar data={innovationData} options={{ responsive: true }} />
        </div>

        {/* Customer/Client Satisfaction Chart */}
        <div className="chart-item bg-gray-800 text-white  p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Customer/Client Satisfaction</h3>
          <Bar data={clientSatisfactionData} options={{ responsive: true }} />
        </div>

        {/* Employee Engagement Chart */}
        <div className="chart-item bg-gray-800 text-white  p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Employee Engagement</h3>
          <Bar data={engagementData} options={{ responsive: true }} />
        </div>

        {/* Attendance Chart */}
        <div className="chart-item bg-gray-800 text-white  p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Attendance</h3>
          <Bar data={attendanceData} options={{ responsive: true }} />
        </div>

        {/* Overall Contribution Chart */}
        <div className="chart-item bg-gray-800 text-white  p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Overall Contribution</h3>
          <Bar data={overallContributionData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default Charts;
