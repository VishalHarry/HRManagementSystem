// ApplyLeave.jsx
import React, { useState } from 'react';

const ApplyLeave = ({ isOpen, handleClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-start z-50"
          onClick={handleClose}
        >
          <div
            className="bg-gray-800 p-6 rounded shadow w-1/3 mt-10 text-white"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
          >
            <h2 className="text-2xl font-semibold mb-4">Apply for Leave</h2>

            {/* Form for leave application */}
            <form>
              <div className="mb-4">
                <label htmlFor="leaveType" className="block text-sm ">Leave Type</label>
                <select id="leaveType" className="w-full p-2 border rounded bg-gray-600 border-gray-900">
                  <option>Annual Leave</option>
                  <option>Sick Leave</option>
                  <option>Compassionate Leave</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="leaveFrom" className="block text-sm">Leave From</label>
                <input
                  type="date"
                  id="leaveFrom"
                  className="w-full p-2 border border-gray-900 rounded bg-gray-600"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="leaveTo" className="block text-sm">Leave To</label>
                <input
                  type="date"
                  id="leaveTo"
                  className="w-full p-2 border border-gray-900 rounded bg-gray-600"
                />
              </div>

              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-purple-700 text-gray-100 px-4 py-2 rounded"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplyLeave;
