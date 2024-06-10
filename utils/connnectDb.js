const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.db_uri);
    console.log("DataBase Connected SuccessFully");
  } catch (error) {
    console.log("DataBase Connection Failed");
  }
};

module.exports = connectDb;
