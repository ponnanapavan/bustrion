import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProfile = () => {
  const { userId } = useParams();

  const [data, setData] = useState({
    id: userId,
    name: "",
    bio: "",
    interests: [],
  });

  async function getData() {
    try {
      const response = await fetch(
        `http://localhost:3000/getUserData/${userId}`,
        {
          method: "GET",
        }
      );
      const result = await response.json();
      setData(result.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();

  async function handleUpdate() {
    try {
      const response = await fetch("http://localhost:3000/updateProfile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
      if (result.success) {
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Update Profile
        </h2>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={data.name}
              onChange={(e) =>
                setData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700"
            >
              Bio
            </label>
            <textarea
              id="bio"
              value={data.bio}
              onChange={(e) =>
                setData((prev) => ({ ...prev, bio: e.target.value }))
              }
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Write something about yourself"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="interests"
              className="block text-sm font-medium text-gray-700"
            >
              Interests
            </label>
            <textarea
              id="interests"
              value={data.interests.join(", ")}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  interests: e.target.value.split(",").map((i) => i.trim()),
                }))
              }
              className="mt-1 block w-full px-4 py-2 h-24 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your interests (comma-separated)"
            ></textarea>
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
            onClick={handleUpdate}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
