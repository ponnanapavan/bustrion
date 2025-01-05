import React, { useState } from "react";

const Interest = ({ profileData, setProfileData }) => {
  const [newInterest, setNewInterest] = useState("");

  const handleAdd = () => {
    if (!newInterest.trim()) {
      alert("Please enter a valid interest.");
      return;
    }

    setProfileData((prev) => ({
      ...prev,
      interests: [...(prev.interests || []), newInterest.trim()],
    }));

    setNewInterest("");
  };

  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          value={newInterest}
          onChange={(e) => setNewInterest(e.target.value)}
          placeholder="Add a new interest"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        >
          Add
        </button>
      </div>

      {/* Display Interests */}
      {profileData?.interests?.length > 0 ? (
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {profileData.interests.map((item, index) => (
            <li key={index} className="text-sm">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">No interests added yet.</p>
      )}
    </div>
  );
};

export default Interest;
