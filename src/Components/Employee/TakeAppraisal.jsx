import React from "react";

const TakeAppraisal = ({ appraisalData, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start p-10 z-50">
      <div className="relative bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-2xl transition-transform duration-500 ease-out">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-gray-100 font-bold hover:text-gray-500"
        >
          X
        </button>

        <h2 className="text-2xl font-semibold mb-4">{appraisalData.employeeName}'s Appraisal</h2>

        <div className="mb-4">
          <p className="text-lg"><strong>Position:</strong> {appraisalData.position}</p>
          <p className="text-lg"><strong>Department:</strong> {appraisalData.department}</p>
          <p className="text-lg"><strong>Review Period:</strong> {appraisalData.reviewPeriod}</p>
          <p className="text-lg"><strong>Performance Rating:</strong> {appraisalData.performanceRating} / 5</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Goals & KPIs</h3>
          {appraisalData.kpis.map((kpi, index) => (
            <p key={index} className="text-lg">
              <strong>{kpi.goal}:</strong> {kpi.status}
            </p>
          ))}
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Feedback</h3>
          <p className="text-lg"><strong>Manager's Feedback:</strong> {appraisalData.feedback.managerFeedback}</p>
          <p className="text-lg"><strong>Peer's Feedback:</strong> {appraisalData.feedback.peerFeedback}</p>
          <p className="text-lg"><strong>Self-Assessment:</strong> {appraisalData.feedback.selfAssessment}</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Salary Adjustment</h3>
          <p className="text-lg"><strong>Current Salary:</strong> ${appraisalData.salaryAdjustment.currentSalary}</p>
          <p className="text-lg"><strong>Proposed Salary:</strong> ${appraisalData.salaryAdjustment.proposedSalary}</p>
          <p className="text-lg"><strong>Bonus:</strong> ${appraisalData.salaryAdjustment.bonus}</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Recommendations</h3>
          <p className="text-lg">{appraisalData.recommendations}</p>
        </div>
      </div>
    </div>
  );
};

export default TakeAppraisal;
