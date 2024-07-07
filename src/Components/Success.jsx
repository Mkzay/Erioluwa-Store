/* eslint-disable react/prop-types */
import { useState } from "react";

const Success = ({ toggleSuccess, toggleHome }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md fixed top-0 w-full h-full font-cb flex flex-col items-center justify-center">
      <img src="/success.svg" alt="success" />
      <h2 className="text-xl/[24.8px] text-[#00477B] font-semibold mb-[51px] mt-[30px]">
        Order is Processing
      </h2>
      <p className="text-gray-500 mb-[3px]">Rate your experience</p>
      <div className="flex items-center justify-center gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            className={`text-3xl ${
              rating >= value ? "text-yellow-500" : "text-gray-300"
            }`}
            onClick={() => handleRating(value)}
          >
            ★
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          toggleSuccess();
          toggleHome();
        }}
        className="mt-4 p-2 bg-db text-white rounded-lg w-40"
      >
        Submit
      </button>
    </div>
  );
};

export default Success;