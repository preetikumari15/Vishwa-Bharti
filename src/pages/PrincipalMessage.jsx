import React from "react";
import video from "../assets/greeting.mp4";

const PrincipalMessage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-30 max-w-8xl w-full">
        {/* Video */}
        <video
          controls
          className="w-full max-w-xl rounded-lg shadow-lg z-1"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Message Section */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-3 leading-snug">
            Greetings from the Principal of <br />
            <span className="text-blue-800">
              VISHWA BHARATI SHIKSHA SADAN
            </span>
          </h2>

          <p className="text-gray-700 mb-4 text-xl ">
            “At Vishwa Bharati Shiksha Sadan, we believe that education is not
            just about books, but about building character, values, and vision.
            We are committed to nurturing young minds into responsible,
            compassionate, and capable individuals who can shape a better
            tomorrow.”
          </p>

          <p className="italic text-md text-gray-600 mb-6">
            — Principal, Vishwa Bharati Shiksha Sadan
          </p>

          <button className="bg-blue-600 hover:bg-blue-800 text-white px-5 py-2 rounded transition">
            Further More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;
