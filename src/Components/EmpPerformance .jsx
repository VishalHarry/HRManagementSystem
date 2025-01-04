import React, { useState } from 'react';
import Charts from './Charts';

const MainPage = () => {
  const [employee, setEmployee] = useState('');
  const [department, setDepartment] = useState('');

  // Sample data for employees and departments (you can replace this with your actual data)
  const employees = [
    { name: 'Vishal', department: 'Engineering' },
    { name: 'Sambhav', department: 'Developer' },
    { name: 'Saloni', department: 'Marketing' },
  ];

  // Handle employee selection
  const handleEmployeeChange = (event) => {
    setEmployee(event.target.value);
  };

  // Handle department selection
  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <div className="main-page container mx-auto p-6 bg-gray-800 text-white min-h-screen">
      <h1 className="text-4xl font-semibold text-center mb-8 text-blue-500">Employee Performance Dashboard</h1>

      <div className="form-section mb-8 flex flex-col sm:flex-row justify-between items-center gap-8">
        <div className="card p-6 w-full sm:w-1/2 bg-gradient-to-r from-blue-800 to-purple-600 rounded-lg shadow-xl hover:scale-105 transition-all">
          <h2 className="text-2xl font-bold mb-4 text-center text-white">Select Employee</h2>
          <select
            className="w-full p-3 rounded-lg bg-gray-700 border border-purple-500 text-white mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={employee}
            onChange={handleEmployeeChange}
          >
            <option value="">Select Employee</option>
            {employees.map((emp, index) => (
              <option key={index} value={emp.name}>
                {emp.name}
              </option>
            ))}
          </select>
        </div>

        <div className="card p-6 w-full sm:w-1/2 bg-gradient-to-r from-blue-800 to-purple-600 rounded-lg shadow-xl hover:scale-105 transition-all">
          <h2 className="text-2xl font-bold mb-4 text-center text-white">Select Department</h2>
          <select
            className="w-full p-3 rounded-lg bg-gray-700 border border-purple-500 text-white mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={department}
            onChange={handleDepartmentChange}
          >
            <option value="">Select Department</option>
            {employees.map((emp, index) => (
              <option key={index} value={emp.department}>
                {emp.department}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Render ChartPage if both employee and department are selected */}
      {employee && department && (
        <div className="chart-container mt-10 bg-gray-700 p-6 rounded-lg shadow-xl">
          <Charts employee={employee} department={department} />
        </div>
      )}
    </div>
  );
};

export default MainPage;
