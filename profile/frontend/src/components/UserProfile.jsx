import React, { useState } from "react";
import Interest from "./Interest";

const UserProfile = () => {
  const [profileData, setProfileData] = useState({
    id: 1,
    name: "",
    bio: "",
    interests: [],
  });

  async function saveProfile() {
    try {
      const response = await fetch("http://localhost:3000/userprofile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileData),
      });

      const res = await response.json();
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        User Profile
      </h1>

      {/* Name Input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Name</label>
        <input
          type="text"
          value={profileData.name}
          onChange={(e) =>
            setProfileData({ ...profileData, name: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter your name"
        />
      </div>

      {/* Bio Input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Bio</label>
        <textarea
          value={profileData.bio}
          onChange={(e) =>
            setProfileData({ ...profileData, bio: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          rows="4"
          placeholder="Write a short bio about yourself"
        ></textarea>
      </div>

      {/* Interests */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Interests
        </label>
        <Interest profileData={profileData} setProfileData={setProfileData} />
      </div>

      <button onClick={saveProfile}>save</button>
    </div>
  );
};

export default UserProfile;
