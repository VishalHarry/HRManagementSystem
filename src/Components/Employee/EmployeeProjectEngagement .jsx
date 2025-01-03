// src/Components/Employee/EmployeeProjectEngagement.jsx
import React from 'react';

const EmployeeProjectEngagement = () => {
  return (
    <div className="bg-gray-800 p-6  shadow-lg">
      <h3 className="text-gray-100 text-2xl font-semibold mb-6">Employee Project Engagement & Performance</h3>

      {/* Employee Info and Project Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Employee Details */}
        <div className="bg-gray-700 p-4 rounded shadow">
          <h4 className="text-gray-100 font-semibold mb-4">Employee Details</h4>
          <p className="text-gray-100"><strong>Name:</strong> Vishal tomar</p>
          <p className="text-gray-100"><strong>Role:</strong>FrontEnd && Java Developer</p>
          <p className="text-gray-100"><strong>Email:</strong> vishal.h@company.com</p>
        </div>

        {/* Project Overview */}
        <div className="bg-gray-700 p-4 rounded shadow">
          <h4 className="text-gray-100 font-semibold mb-4">Project Overview</h4>
          <p className="text-gray-100"><strong>Project:</strong> FrontEnd Design</p>
          <p className="text-gray-100"><strong>Status:</strong> In Progress</p>
          <p className="text-gray-100"><strong>Start Date:</strong> January 2025</p>
          <p className="text-gray-100"><strong>Expected End Date:</strong> March 2025</p>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="bg-gray-700 p-4 rounded shadow mb-6">
        <h4 className="text-gray-100 font-semibold mb-4">Performance Overview</h4>
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-100">Task Completion</p>
          <p className="text-gray-100 font-semibold">80%</p>
        </div>
        <div className="w-full bg-gray-500 h-2 rounded-full mb-4">
          <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-100">Milestones Achieved</p>
          <p className="text-gray-100 font-semibold">3/5</p>
        </div>
        <div className="w-full bg-gray-500 h-2 rounded-full mb-4">
          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '60%' }}></div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-gray-100">Deadline Adherence</p>
          <p className="text-gray-100 font-semibold">95%</p>
        </div>
        <div className="w-full bg-gray-500 h-2 rounded-full">
          <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
        </div>
      </div>

      {/* Employee Task Breakdown */}
      <div className="bg-gray-700 p-4 rounded shadow">
        <h4 className="text-gray-100 font-semibold mb-4">Employee Task Breakdown</h4>
        <table className="w-full text-sm text-left text-gray-100">
          <thead>
            <tr>
              <th>Task</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Completion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Design FrontEnd Rankora</td>
              <td>Jan 15, 2025</td>
              <td className="text-green-500">Completed</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>BackEnd in Hospital Management System</td>
              <td>Feb 1, 2025</td>
              <td className="text-yellow-500">In Progress</td>
              <td>50%</td>
            </tr>
            <tr>
              <td>Client Feedback Implementation</td>
              <td>Feb 20, 2025</td>
              <td className="text-red-500">Pending</td>
              <td>0%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeProjectEngagement;
