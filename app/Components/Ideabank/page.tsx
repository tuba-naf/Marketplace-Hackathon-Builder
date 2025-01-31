import React from 'react';

const IdeaBankComingSoon = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-600 to-black">
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold text-white mb-4">Idea Bank</h1>
        <p className="text-lg text-gray-200 mb-6">
          A platform for your most innovative ideas. Launching soon!
        </p>
        <div className="mt-6">
          <button
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default IdeaBankComingSoon;
