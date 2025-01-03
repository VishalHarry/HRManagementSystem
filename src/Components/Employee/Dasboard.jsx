import React, { useContext, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import ViewPayslip from './ViewPaySlip';
import ApplyLeave from './ApplyLeave';
import EditProfile from './EditProfile';
import img from '../../assets/tool.bmp'
import ViewProfile from './ViewProfile';
import EventPopup from './EventPopup';
import TakeAppraisal from './TakeAppraisal';


const Dashboard = () => {
    //handlePayslip
const [isPayslipOpen, setIsPayslipOpen] = useState(false);
const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
const [isViewProfileOpen, setIsViewProfileOpen] = useState(false);
const [showPopup, setShowPopup] = useState(false);
const [isAppraisalOpen, setIsAppraisalOpen] = useState(false);
const [eventData, setEventData] = useState({
  title: "React.js Advanced Workshop",
  date: "2025-01-20",
  time: "10:00 AM - 4:00 PM",
  location: "Conference Room A",
  description: "A hands-on workshop on advanced concepts in React.js.",
});
const appraisalData = {
  employeeName: "Vishal Tomar",
  position: "FrontEnd & Java Developer",
  department: "Design & Development",
  reviewPeriod: "2024-2025",
  performanceRating: 4.5,
  kpis: [
    { goal: "Improve front-end performance", status: "Achieved" },
    { goal: "Work on React.js projects", status: "In Progress" },
  ],
  feedback: {
    managerFeedback: "Excellent work on recent project deliveries.",
    peerFeedback: "Collaborative team player.",
    selfAssessment: "Improved JavaScript skills and React.js expertise.",
  },
  salaryAdjustment: {
    currentSalary: 50000,
    proposedSalary: 55000,
    bonus: 5000,
  },
  recommendations: "Continue with the current trajectory.",
};
//event pop data
const handleEventClick = () => {
  setShowPopup(true);
};

const handleClosePopup = () => {
  setShowPopup(false);
};


  const navigate = useNavigate();

  const handlePayslipClick = () => {
    setIsPayslipOpen(true); // Open the payslip popup
  };

  const closePayslipPopup = () => {
    setIsPayslipOpen(false); // Close the payslip popup
  };

  //handle apply leave
  const handleLeaveModalClick = () => {
    setIsLeaveModalOpen(!isLeaveModalOpen); // Toggle Apply Leave modal visibility
  };
  // State for managing Edit Profile modal visibility

  const handleEditProfileClick = () => {
    setIsEditProfileOpen(!isEditProfileOpen); // Toggle Edit Profile modal visibility
  };

//   view profile

const profileData = {
    image: img, // Replace with actual image URL
    name: "Vishal Tomar",
    role: "FrontEnd && Java Developer",
    email: "vishal@gmail.com",
    phone: "8126050903",
    department: "Design & Development",
  };

  const handleViewProfileClick = () => {
    setIsViewProfileOpen(true);
  };

  const handleCloseProfile = () => {
    setIsViewProfileOpen(false);
  };

  //take appersal

  const handleAppraisalClick = () => {
    setIsAppraisalOpen(true);
  };

  const closeAppraisalPopup = () => {
    setIsAppraisalOpen(false);
  };

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
         
          <button
          onClick={handleViewProfileClick}
          className="  px-4 py-2 rounded font-bold flex items-center space-x-2 hover:text-yellow-500 transition"
        >
          <FaUserCircle className="text-2xl text-gray-100 hover:text-yellow-500" />
        </button>
        </div>
      </div>

      {/* Profile Section */}
     
            <div className="x bg-purple-900 text-white p-6 rounded shadow mb-6 relative">
            <div className="flex justify-between">
                
             <div className='flex gap-2'>
                <div className='h-16 w-16 rounded-[50%] border-purple-950 border-2 overflow-hidden'><img className='h-full w-full object-cover object-center overflow-hidden'  src={profileData.image} alt="profile" /></div>
             <div>
                <h2 className="text-2xl font-semibold">{profileData.name}</h2>
                <p className="text-sm">{profileData.role}</p>
              </div>
             </div>
              <button
                onClick={handleEditProfileClick} // Open Edit Profile modal on button click
                className="bg-yellow-400 text-black px-4 py-2 rounded font-bold flex items-center space-x-2"
              >
                <FaEdit />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>
    
    
     
      {/* Quick Actions */}
      <div className="flex justify-between space-x-4 mb-6">
  {/* Individual Buttons */}
  <button
     onClick={handleLeaveModalClick}
    className="bg-purple-700 shadow text-gray-100 font-medium px-4 py-2 rounded text-center hover:bg-purple-900 transition duration-300"
  >
    Apply for Leave
  </button>

  <a 
    href="/empPerformance" 
    className="bg-purple-700 shadow text-gray-100 font-medium px-4 py-2 rounded text-center hover:bg-purple-900 transition duration-300"
  >
   Employees Performance 
  </a>

  <button
        onClick={handleAppraisalClick}
        className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-900 transition duration-300"
      >
        Take Appraisal
      </button>

  <button
          onClick={handlePayslipClick}
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

  <button
        onClick={handleEventClick}
        className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-900 transition duration-300"
      >
        Event
      </button>
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
        <td>Vishal Tomar</td>
        <td>Java Project</td>
        <td className="text-green-500">In Progress</td>
      </tr>
      <tr>
        <td>Sambhav</td>
        <td>BackEnd Project</td>
        <td className="text-yellow-500">On Hold</td>
      </tr>
      <tr>
        <td>Saloni</td>
        <td>Web App Design</td>
        <td className="text-green-500">Completed</td>
      </tr>
    </tbody>
  </table>
</div>
 {/* Popup for Payslip */}
 {isPayslipOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex justify-center items-start p-10 z-50">
          <div className="bg-gray-800 p-6 rounded shadow-lg w-full max-w-2xl">
            <ViewPayslip closePayslip={closePayslipPopup} /> {/* Pass close function */}
          </div>
        </div>
      )}
      {/* //apply leave module */}

      <ApplyLeave
        isOpen={isLeaveModalOpen} // Pass the state as a prop
        handleClose={() => setIsLeaveModalOpen(false)} // Pass the close function as a prop
      />
        {/* Edit Profile Modal (Popup from Top) */}
        <EditProfile
        isOpen={isEditProfileOpen} // Pass the state as a prop
        handleClose={() => setIsEditProfileOpen(false)} // Pass the close function as a prop
      />
            {/* ViewProfile Component */}
            <ViewProfile
        isOpen={isViewProfileOpen}
        onClose={handleCloseProfile}
        profileData={profileData}
      />

         {/* Show the popup when showPopup is true */}
         {showPopup && (
        <EventPopup onClose={handleClosePopup} eventData={eventData} />
      )}
      {/* take apprsal */}
      {isAppraisalOpen && (
        <TakeAppraisal
          appraisalData={appraisalData}
          onClose={closeAppraisalPopup} // Pass the close function here
        />
      )}



      </div>
    </div>
  );
};

export default Dashboard;
