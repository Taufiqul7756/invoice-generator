const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

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
    const data = new userModel(userData);
    await data.save();

    // Generate JWT token
    const token = jwt.sign({ user: userData }, "invoice-jwt-key");
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
  .connect(
    "mongodb+srv://taufiq:taufiq@cluster0.1xwhljj.mongodb.net/invoice-generator"
  )
  .then(() => {
    console.log("Connected to DB");
    app.listen(5000, () => {
      console.log("Server is running at port 5000");
    });
  })
  .catch((err) => console.log(err));
