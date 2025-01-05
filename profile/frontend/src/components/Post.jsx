import React, { useContext, useState } from "react";
import { Context } from "./context";

const Post = () => {
  const { user } = useContext(Context);
  const [post, setPost] = useState({
    id: user,
    postTitle: "",
    postBody: "",
  });

  async function handleSubmit() {
    try {
      const response = await fetch("http://localhost:3000/addPost", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

      const result = await response.json();
      setPost({ postTitle: "", postBody: "" });
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Post Title
        </label>
        <textarea
          value={post.postTitle}
          onChange={(e) => setPost({ ...post, postTitle: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter the post title"
        ></textarea>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Post Body
        </label>
        <textarea
          value={post.postBody}
          onChange={(e) => setPost({ ...post, postBody: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter the post body"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Save Post
      </button>
    </div>
  );
};

export default Post;
