import React from 'react';

const Dashboard = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-800 p-6 text-white hidden md:block">
                <div className="mb-8 text-2xl font-bold">HR Dashboard</div>
                <ul>
                    <li className="mb-4">
                        <a href="#" className="hover:text-blue-500">Profile</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:text-blue-500">Tasks</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:text-blue-500">Attendance</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:text-blue-500">Salary</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:text-blue-500">Performance</a>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="w-full md:w-3/4 bg-gray-100 p-8">
                <h1 className="text-3xl font-bold mb-6">Employee Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Attendance Widget */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Attendance</h2>
                        <div className="flex justify-between items-center">
                            <p>Present: 22</p>
                            <p>Absent: 3</p>
                        </div>
                    </div>

                    {/* Salary Widget */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Salary</h2>
                        <p>Total Salary: $5000</p>
                    </div>

                    {/* Performance Widget */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Performance</h2>
                        <p>Task Completion: 80%</p>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                    <ul>
                        <li className="mb-2">Task "Project A" completed</li>
                        <li className="mb-2">Submitted report for "Task B"</li>
                        <li className="mb-2">Performance review feedback received</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
