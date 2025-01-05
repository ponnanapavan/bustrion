const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  bio: { type: String },
  interests: [{ type: String }],
  posts: [
    {
      postTitle: { type: String },
      postBody: {
        type: String,
      },
    },
  ],
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
