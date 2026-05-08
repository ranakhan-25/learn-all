require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.DB_URI;

const dbConnected = async () => {
  try {
    if (!url) {
      return console.log("db url is not found");
    }
    await mongoose.connect(url);
    console.log("mongodb connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = dbConnected;
