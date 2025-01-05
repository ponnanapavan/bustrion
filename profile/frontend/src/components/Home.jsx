import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState();

  async function getData() {
    try {
      const response = await fetch(`http://localhost:3000/getUserData/${1}`, {
        method: "GET",
      });
      const result = await response.json();
      setData(result.data);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleRemove(postId) {
    // Implement the logic for removing a post, such as updating state or sending a request to the backend
    // Example: setData((prevData) => ({...prevData, posts: prevData.posts.filter(post => post.id !== postId)}));
  }

  async function handleDelete(postId) {}

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section with Buttons */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">User Profile</h1>
        <div className="space-x-4">
          <button
            onClick={() => {}}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            + Add Post
          </button>
          <button
            onClick={() => {}}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none"
          >
            + Add Profile
          </button>
        </div>
      </div>

      {/* User Profile */}
      <div className="bg-white shadow-md rounded-lg mb-8 p-6">
        {data ? (
          <>
            <h1 className="text-3xl font-semibold text-gray-800">
              {data.name}
            </h1>
            <p className="text-gray-600 mt-2">{data.bio}</p>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800">Interests</h2>
              <ul className="list-disc pl-6">
                {data.interests.map((interest, index) => (
                  <li key={index} className="text-gray-600">
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <p className="text-gray-500">Loading...</p>
        )}
      </div>

      {/* User Posts - 3 Column Grid Layout */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          User Posts
        </h2>
        {data && data.posts && data.posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.posts.map((post, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {post.postTitle}
                </h3>
                <p className="text-gray-600 mt-2">{post.postBody}</p>

                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => handleRemove(post.id)}
                    className="text-sm text-yellow-600 hover:text-yellow-800 focus:outline-none"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="text-sm text-red-600 hover:text-red-800 focus:outline-none"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
