const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });
const express = require("express");
const chats = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
connectDB();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Api is Running");
});
app.use("/api/user", userRoutes);
const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`Server Started on ${PORT} `));
