require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const userModel = require("./models/usermodel");
app.use(express.json());
app.use(cors());

async function connectDb() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database succesfull connected");
}
connectDb();

app.post("/userprofile", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const user = new userModel(data);
    await user.save();

    res
      .status(201)
      .json({
        success: true,
        message: "user created successfully",
        data: user,
      });
  } catch (err) {
    res.status(500).json({ success: false, error: "internal server error" });
  }
});

app.put("/addPost", async (req, res) => {
  try {
    const data = req.body;

    let user = await userModel.findOne({ id: data.id });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }

    user.posts.push(data);
    await user.save();

    res
      .status(200)
      .json({ success: true, message: "post added successfully", user });
  } catch (err) {
    res.status(500).json({ error: "internal server error" });
  }
});

app.get("/getUserData/:id", async (req, res) => {
  try {
    const getData = await userModel.findOne({ id: req.params.id });
    if (!getData) {
      return res.status(404).json({ error: "user not found" });
    }

    res.status(200).json({ data: getData });
  } catch (err) {
    res.status(500).json({ error: "internal server error" });
  }
});

app.delete("/deletepost/:id/:userId", async (req, res) => {
  try {
    const { id, userId } = req.params;

    console.log(id, userId);
    const getPost = await userModel.findOne({ id: userId });
    if (!getPost) {
      return res.status(404).json({ message: "post not found", status: false });
    }
    const posts = getPost.posts.filter((post) => post._id.toString() !== id);
    getPost.posts = posts;
    await getPost.save();
    res
      .status(200)
      .json({ success: true, message: "post deleted successfully" });
  } catch (err) {}
});

app.put("/updateProfile", async (req, res) => {
  try {
    const data = req.body;
    console.log(data.name, data.bio, data.interests);
    const userData = await userModel.findOne({ id: data.id });
    if (!userData)
      return res
        .status(404)
        .json({ success: false, message: "user not found" });

    userData.name = data.name || userData.name;
    userData.bio = data.bio || userData.bio;
    userData.interests = data.interests || userData.interests;

    await userData.save();

    res.status(200).json({ success: true, userData });
  } catch (err) {
    res.status(500).json({ success: false, message: "internal server error " });
  }
});

app.listen(process.env.PORT, () => console.log("successfully listening"));
