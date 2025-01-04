import React from "react";
import { FaBell, FaCog, FaEnvelope, FaBriefcase, FaChartLine, FaUsers, FaFileAlt, FaUserFriends, FaClipboardList, FaSignOutAlt } from 'react-icons/fa'; // Importing FontAwesome icons
import img from '../../assets/tool.bmp'
import { Routes, Route, Link } from "react-router-dom";

const AdminDashboard = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-gradient-to-b from-blue-950 to-blue-800 text-white flex flex-col">
                {/* Profile Section */}
                <div className="flex items-center p-4 border-b border-blue-800">
                    <img
                        src={img}
                        alt="Admin Profile"
                        className="rounded-full w-12 h-12 object-cover object-top"
                    />
                    <div className="ml-4">
                        <p className="font-extrabold text-lg">Vishal Tomar</p>
                        <p className="text-sm text-blue-300">Admin</p>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex-grow mt-4">
                    <ul className="space-y-4 p-4">
                        <li className="hover:bg-yellow-500 p-2 rounded flex items-center space-x-4">
                            <FaBriefcase className="h-6 w-6" />
                            <Link to="/dashboard" className="text-white">
                                Dashboard
                            </Link>
                        </li>
                        <li className="hover:bg-yellow-500  hover:shadow-md p-2 rounded transition flex items-center space-x-4">
                            <FaEnvelope className="h-6 w-6" />
                            <span>Messages</span>
                        </li>
                        <li className="hover:bg-yellow-500  hover:shadow-md p-2 rounded transition flex items-center space-x-4">
                            <FaClipboardList className="h-6 w-6" />
                            <span>Jobs</span>
                        </li>
                        <li className="hover:bg-yellow-500  hover:shadow-md p-2 rounded transition flex items-center space-x-4">
                            <FaUsers className="h-6 w-6" />
                            <span>Candidates</span>
                        </li>
                        <li className="hover:bg-yellow-500  hover:shadow-md p-2 rounded transition flex items-center space-x-4">
                            <FaFileAlt className="h-6 w-6" />
                            <span>Resumes</span>
                        </li>
                        <li className="hover:bg-yellow-500  hover:shadow-md p-2 rounded transition flex items-center space-x-4">
                            <FaUserFriends className="h-6 w-6" />
                            <span>Employee Management</span>
                        </li>
                        <li className="hover:bg-yellow-500 p-2 rounded flex items-center space-x-4">
                            <FaClipboardList className="h-6 w-6" />
                            <Link to="/dashboard/leave-management" className="text-white">
                                Leave Management
                            </Link>
                        </li>
                        <li className="hover:bg-yellow-500  hover:shadow-md p-2 rounded transition flex items-center space-x-4">
                            <FaClipboardList className="h-6 w-6" />
                            <span>Payroll Management</span>
                        </li>
                        <li className="hover:bg-yellow-500 hover:shadow-md p-2 rounded transition flex items-center space-x-4">
                            <a href="/empPerformance" className="flex items-center space-x-4">
                                <FaChartLine className="h-6 w-6" />
                                <span>Employee Performance</span>
                            </a>
                        </li>

                    </ul>
                </nav>

                {/* Logout Button */}
                <button className="bg-red-500 hover:bg-red-600 p-3 rounded m-4 hover:scale-105 transition-all flex items-center space-x-2">
                    <FaSignOutAlt className="h-6 w-6" />
                    <span>Log Out</span>
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center p-4 bg-gray-800">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-800 bg-gray-600 rounded-lg p-2 w-1/2"
                    />
                    <div className="flex space-x-4">
                        <button className="p-2 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition-all">
                            <FaBell className="h-6 w-6" />
                        </button>
                        <button className="p-2 bg-yellow-400 text-white rounded-full hover:bg-yellow-500 transition-all">
                            <FaCog className="h-6 w-6" />
                        </button>
                        <button className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all">
                            <FaEnvelope className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-4 bg-gray-600 flex-1 overflow-y-auto">
                    {/* Overview Cards */}
                    <div className="grid grid-cols-4 gap-4 mb-6">
                        <div className="p-6 rounded-lg shadow-lg bg-yellow-500 text-center text-white hover:scale-105 hover:shadow-2xl transition-all">
                            <FaEnvelope className="h-10 w-10 mx-auto" />
                            <h3 className="text-lg font-bold">Messages</h3>
                            <p className="text-3xl mt-2">4</p>
                        </div>
                        <div className="p-6 rounded-lg shadow-lg bg-blue-500 text-center text-white hover:scale-105 hover:shadow-2xl transition-all">
                            <FaBriefcase className="h-10 w-10 mx-auto" />
                            <h3 className="text-lg font-bold">Jobs</h3>
                            <p className="text-3xl mt-2">1</p>
                        </div>
                        <div className="p-6 rounded-lg shadow-lg bg-green-500 text-center text-white hover:scale-105 hover:shadow-2xl transition-all">
                            <FaUsers className="h-10 w-10 mx-auto" />
                            <h3 className="text-lg font-bold">Candidates</h3>
                            <p className="text-3xl mt-2">30</p>
                        </div>
                        <div className="p-6 rounded-lg shadow-lg bg-gray-800 text-center text-white hover:scale-105 hover:shadow-2xl transition-all">
                            <FaFileAlt className="h-10 w-10 mx-auto" />
                            <h3 className="text-lg font-bold">Resumes</h3>
                            <p className="text-3xl mt-2">2</p>
                        </div>
                    </div>

                    {/* Applied Jobs Section */}
                    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-4 mb-6">
                        <h2 className="text-lg font-bold mb-4">Applied Jobs</h2>
                        <ul>
                            <li className="flex justify-between p-2 border-b">
                                <span>Sales Executive</span>
                                <span>20 mins ago</span>
                            </li>
                            <li className="flex justify-between p-2 border-b">
                                <span>User Experience Designer</span>
                                <span>10 mins ago</span>
                            </li>
                            <li className="flex justify-between p-2">
                                <span>Product Manager</span>
                                <span>5 mins ago</span>
                            </li>
                        </ul>
                    </div>

                    {/* Employees Section */}
                    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-4 mb-6">
                        <h2 className="text-lg font-bold mb-4">Employees</h2>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="p-4 bg-gray-600 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-all">
                                <p className="font-bold">Aman</p>
                                <p>Role: Product Manager</p>
                                <button className="mt-2 bg-blue-500 text-white p-2 rounded">View</button>
                                <button className="mt-2 bg-gray-800 text-white p-2 rounded ml-2">Download</button>
                            </div>
                            <div className="p-4 bg-gray-600 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-all">
                                <p className="font-bold">Karan</p>
                                <p>Role: UI/UX Designer</p>
                                <button className="mt-2 bg-blue-500 text-white p-2 rounded">View</button>
                                <button className="mt-2 bg-gray-800 text-white p-2 rounded ml-2">Download</button>
                            </div>
                            <div className="p-4 bg-gray-600 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-all">
                                <p className="font-bold">Ravi</p>
                                <p>Role: Web Developer</p>
                                <button className="mt-2 bg-blue-500 text-white p-2 rounded">View</button>
                                <button className="mt-2 bg-gray-800 text-white p-2 rounded ml-2">Download</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-4">
                        <h2 className="text-lg font-bold mb-4">April Payrolls</h2>
                        <ul>
                            <li className="flex justify-between p-2 border-b">
                                <span>Aman</span>
                                <span className="text-green-500">Paid</span>
                            </li>
                            <li className="flex justify-between p-2 border-b">
                                <span>Geila</span>
                                <span className="text-yellow-500">Processing</span>
                            </li>
                            <li className="flex justify-between p-2">
                                <span>Biruk</span>
                                <span className="text-yellow-500">Processing</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
