const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });
const jwt = require("jsonwebtoken");
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};
module.exports = generateToken;
