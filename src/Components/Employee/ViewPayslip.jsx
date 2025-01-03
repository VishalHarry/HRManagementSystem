import React from 'react';

const ViewPayslip = ({ closePayslip }) => {
  // Function to handle the print action
  const handlePrint = () => {
    window.print(); 
  };

  return (
    <div className="bg-gray-800 p-6 rounded shadow-lg w-full max-w-3xl mx-auto">
      <button
        onClick={closePayslip}
        className="absolute top-4 right-4 text-white text-xl"
      >
        ×
      </button>
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

      <div className="mt-6 flex justify-between">
        <button
          onClick={handlePrint}
          className="bg-purple-700 text-white px-4 py-2 rounded shadow hover:bg-purple-900 transition duration-300"
        >
          Print
        </button>
        <button
          onClick={closePayslip}
          className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600 transition duration-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ViewPayslip;
