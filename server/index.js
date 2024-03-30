const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Schema Data
const schemaData = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("user", schemaData);

app.get("/getUser", async (req, res) => {
  const data = await userModel.find({});
  res.json({ success: true, data: data });
});

app.post("/user", async (req, res) => {
  try {
    const userData = req.body;
    const newUser = new userModel(userData);
    await newUser.save();
    const insertedUser = await userModel.findOne({ email: userData.email });

    // Convert the _id from ObjectId to string
    const modifiedUser = {
      ...insertedUser.toObject(),
      _id: insertedUser._id.toString(),
    };
    console.log("insertedUser:", modifiedUser);

    // Generate JWT token
    const token = jwt.sign({ user: modifiedUser }, process.env.JWT_KEY, {
      expiresIn: "3h",
    });
    console.log("token for currentUser:", token);

    res.send({
      success: true,
      message: "Data saved successfully",
      token: token,
    });
  } catch (error) {
    console.error("Error saving user data:", error);
    res.status(500).json({ success: false, message: "Error saving user data" });
  }
});

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => {
    console.log("Connected to DB");
    app.listen(5000, () => {
      console.log("Server is running at port 5000");
    });
  })
  .catch((err) => console.log(err));
