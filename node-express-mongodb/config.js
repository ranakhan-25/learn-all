const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const url = process.env.DB_URI;

const databaseConnect = async () => {
  try {
    if (!url) {
      console.log("DB URL not found");
      return;
    }

    await mongoose.connect(url);

    console.log("Database Connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = databaseConnect;