const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());
//Schema Data
const schemaData = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
  },
  {
    timeStamps: true,
  }
);

const userModel = mongoose.model("user", schemaData);

app.get("/getUser", async (req, res) => {
  const data = await userModel.find({});
  res.json({ success: true, data: data });
});

app.post("/user", async (req, res) => {
  console.log(req.body);
  const data = new userModel(req.body);
  await data.save();
  res.send({ success: true, message: "Data save successfully" });
});

mongoose
  .connect(
    "mongodb+srv://taufiq:taufiq@cluster0.1xwhljj.mongodb.net/invoice-generator"
  )
  .then(() => {
    console.log(" connect to DB");
    app.listen(5000, () => {
      console.log("Server is running at port 3000");
    });
  })
  .catch((err) => console.log(err));
