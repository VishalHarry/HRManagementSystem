import React, { useState } from 'react';
  // Importing the ChartPage component
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
    <div className="main-page container mx-auto p-6 bg-gray-600 text-white">
      <h1 className="text-3xl font-semibold text-center mb-6">Employee Performance Dashboard</h1>

      <div className="form-section mb-6 flex justify-start items-center gap-5">
        <label className="block text-lg mb-2">Select Employee</label>
        <select
          className="w-1/3 p-2 border rounded mb-4 bg-gray-800 border-purple-500 "
          value={employee}
          onChange={handleEmployeeChange}
        >
          <option value="">Select Employee</option>
          {employees.map((emp, index) => (
            <option key={index} value={emp.name} className=''>
              {emp.name}
            </option>
          ))}
        </select>

        <label className="block text-lg mb-2">Select Department</label>
        <select
          className="w-1/3 p-2 border border-purple-500 rounded bg-gray-800"
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

      {/* Render ChartPage if both employee and department are selected */}
      {employee && department && (
        <Charts employee={employee} department={department} />
      )}
    </div>
  );
};

export default MainPage;