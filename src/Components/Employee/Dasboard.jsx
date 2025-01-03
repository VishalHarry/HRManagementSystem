import React, { useState } from 'react';
import {
  FaRegBell,
  FaEnvelope,
  FaUserCircle,
  FaCheckCircle,
  FaChartBar,
  FaEdit,
  FaFileAlt,
  FaCalendarAlt,
} from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const Dashboard = () => {
   
    const leave=[
        { type: 'Annual Leave', used: 10, total: 60 },
        { type: 'Sick Leave', used: 0, total: 10 },
        { type: 'Compassionate Leave', used: 8, total: 15 },
      ]
      const tododata=[
        'Complete Onboarding Document Upload',
        'Follow up on clients on documents',
        'Design wireframes for LMS',
        'Create case study for next IT project',
      ]
      const announcement=[
        'Welcome Saron - We have a new staff joining us',
        'Send forth for Project Manager - Kindly gather at the meeting hall',
        'Marriage Alert',
        'Office Space Update',
      ]
      const handlePayslip=()=>{
        setPayslip(!payslip)

      }
  return (
    <div className="bg-gray-600 min-h-screen p-4">
      {/* Navbar */}
      <div className="flex justify-between items-center bg-gray-800 p-4 rounded shadow mb-6">
      <div className="flex items-center space-x-4">
  {/* Dashboard Link */}
  <h1 className="text-lg font-bold text-gray-100 hover:text-purple-700 transition duration-300">
    <a href="#">Dashboard</a>
  </h1>
  
  {/* Navigation Links */}
  <ul className="flex space-x-6 text-gray-100">
    <li>
      <a
        href="#"
        className="hover:text-purple-700 transition duration-300"
      >
        Requests
      </a>
    </li>
    <li>
      <a
        href="#"
        className="hover:text-purple-700 transition duration-300"
      >
        Payroll
      </a>
    </li>
    <li>
      <a
        href="#"
        className="hover:text-purple-700 transition duration-300"
      >
        Company
      </a>
    </li>
    <li>
      <a
        href="#"
        className="hover:text-purple-700 transition duration-300"
      >
        Extras
      </a>
    </li>
  </ul>
</div>

        <div className="flex items-center space-x-4">
          <FaRegBell className="text-xl text-gray-100" />
          <FaEnvelope className="text-xl text-gray-100" />
          <FaUserCircle className="text-2xl text-gray-100" />
        </div>
      </div>

      {/* Profile Section */}
      <div className="bg-purple-900 text-white p-6 rounded shadow mb-6 relative">
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Redwan Husein</h2>
            <p className="text-sm">UI / UX Designer & UX Writer</p>
          </div>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded font-bold flex items-center space-x-2">
            <FaEdit />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex justify-between space-x-4 mb-6">
  {/* Individual Buttons */}
  <a 
    href="#" 
    className="bg-purple-700 shadow text-gray-100 font-medium px-4 py-2 rounded text-center hover:bg-purple-900 transition duration-300"
  >
    Apply for Leave
  </a>

  <a 
    href="#" 
    className="bg-purple-700 shadow text-gray-100 font-medium px-4 py-2 rounded text-center hover:bg-purple-900 transition duration-300"
  >
    KPI Goals
  </a>

  <a 
    href="#" 
    className="bg-purple-700 shadow text-gray-100 font-medium px-4 py-2 rounded text-center hover:bg-purple-900 transition duration-300"
  >
    Take Appraisal
  </a>

  <button
    
    onClick={handlePayslip}
    className="bg-purple-700 shadow text-gray-100 font-medium px-4 py-2 rounded text-center hover:bg-purple-900 transition duration-300"
  >
    View Payslip
  </button>

  <a 
    href="/employee-engagement" 
    className="bg-purple-700 shadow text-gray-100 font-medium px-4 py-2 rounded text-center hover:bg-purple-900 transition duration-300"
  >
    Employee-Engagement
  </a>

  <a 
    href="#" 
    className="bg-purple-700 shadow text-gray-100 font-medium px-4 py-2 rounded text-center hover:bg-purple-900 transition duration-300"
  >
    Events
  </a>
</div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Available Leave Days */}
        <div className="bg-gray-800 p-4 rounded shadow">
          <h3 className="text-gray-100 font-semibold mb-4">Available Leave Days</h3>
          {leave.map((leave) => (
            <div key={leave.type} className="mb-4">
              <p className="text-sm text-gray-100">{leave.type}</p>
              <div className="bg-gray-100 h-2 rounded-full relative">
                <div
                  className="bg-purple-700 h-2 rounded-full"
                  style={{ width: `${(leave.used / leave.total) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-100 mt-1">
                {leave.used} of {leave.total} day(s)
              </p>
            </div>
          ))}
        </div>

        {/* To-dos */}
        <div className="bg-gray-800 p-4 rounded shadow">
          <h3 className="text-gray-100 font-semibold mb-4">To-dos</h3>
          {tododata.map((todo, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-b last:border-b-0"
            >
              <p className="text-sm text-gray-100">{todo}</p>
              <FaCheckCircle className="text-purple-700" />
            </div>
          ))}
        </div>

        {/* Announcements */}
        <div className="bg-gray-800 p-4 rounded shadow">
          <h3 className="text-gray-100 font-semibold mb-4">Announcement(s)</h3>
          {announcement.map((announcement, index) => (
            <p
              key={index}
              className="text-sm text-gray-100 py-2 border-b last:border-b-0"
            >
              {announcement}
            </p>
          ))}
        </div>

        {/* April Payslip Breakdown */}
      
          <div className="bg-gray-800 p-4 rounded shadow">
          <h3 className="text-gray-100 font-semibold mb-4">April Pay Slip Breakdown</h3>
          <table className="w-full text-sm text-left text-gray-100">
            <thead>
              <tr>
                <th>Earnings</th>
                <th>Amount</th>
                <th>Deductions</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basic Wage</td>
                <td>150,000</td>
                <td>-30,000</td>
                <td>120,000</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>15,000</td>
                <td>-3,000</td>
                <td>12,000</td>
              </tr>
              <tr>
                <td>Pension</td>
                <td>15,000</td>
                <td>-3,000</td>
                <td>12,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      
        {/* Employee Project Engagement */}
<div className="bg-gray-800 p-4 rounded shadow">
  <h3 className="text-gray-100 font-semibold mb-4">Employee Project Engagement</h3>
  <table className="w-full text-sm text-left text-gray-100">
    <thead>
      <tr>
        <th>Employee</th>
        <th>Project</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Redwan Husein</td>
        <td>UI/UX Design</td>
        <td className="text-green-500">In Progress</td>
      </tr>
      <tr>
        <td>Aisha Omar</td>
        <td>Web Development</td>
        <td className="text-yellow-500">On Hold</td>
      </tr>
      <tr>
        <td>Ahmed Yusuf</td>
        <td>Mobile App Design</td>
        <td className="text-green-500">Completed</td>
      </tr>
    </tbody>
  </table>
</div>

      </div>
    </div>
  );
};

export default Dashboard;
