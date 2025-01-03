import React from "react";

const ViewProfile = ({ isOpen, onClose, profileData }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-start transition-transform duration-300 ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } z-50`}
    >
      <div className="bg-gray-800 w-full max-w-md p-6 rounded shadow-lg mt-10 flex flex-col items-center text-white">
        <h2 className="text-xl font-bold mb-4">View Profile</h2>
        <div className="flex flex-col items-center mb-6">
          <img
            src={profileData?.image || ""}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <h3 className="text-lg font-semibold">{profileData?.name}</h3>
          <p className="text-sm text-gray-100">{profileData?.role}</p>
        </div>
        <p className="text-gray-100 mb-4 text-center">
          Email: <span className="font-medium">{profileData?.email}</span>
        </p>
        <p className="text-gray-100 mb-4 text-center">
          Phone: <span className="font-medium">{profileData?.phone}</span>
        </p>
        <p className="text-gray-100 text-center">
          Department: <span className="font-medium">{profileData?.department}</span>
        </p>
        <div className="flex justify-end mt-6 w-full">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
