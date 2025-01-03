import React, { useEffect, useState } from "react";

const EventPopup = ({ onClose, eventData }) => {
  const [popupClass, setPopupClass] = useState("transform -translate-y-full");

  useEffect(() => {
    setPopupClass("transform translate-y-0 transition-transform duration-500 ease-out");
  }, []);

  return (
    <div className="fixed inset-0 bg-black text-white bg-opacity-50 flex justify-center items-start p-10 z-50">
      <div
        className={`bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl ${popupClass}`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-gray-100 font-bold hover:text-gray-500"
        >
          X
        </button>
        <h2 className="text-2xl font-semibold mb-4">{eventData.title}</h2>
        <p className="text-lg mb-2"><strong>Date:</strong> {eventData.date}</p>
        <p className="text-lg mb-2"><strong>Time:</strong> {eventData.time}</p>
        <p className="text-lg mb-2"><strong>Location:</strong> {eventData.location}</p>
        <p className="text-md text-gray-100">{eventData.description}</p>
      </div>
    </div>
  );
};

export default EventPopup;
